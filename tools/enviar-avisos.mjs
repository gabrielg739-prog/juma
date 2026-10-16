/* Envía avisos al teléfono (FCM) por los mensajes nuevos del chat de JUMA Duaca.
   Lo ejecuta GitHub Actions cada 10 minutos (.github/workflows/avisos-push.yml).
   - Necesita el secreto FIREBASE_SERVICE_ACCOUNT (JSON de una cuenta de servicio de Firebase).
     Si no existe, termina sin hacer nada (código 0).
   - Usa firebase-admin, que no pasa por las reglas de Firestore: las reglas no necesitan nada extra.
   - Solo LEE mensajes y tokens; lo único que escribe es site/push_estado (hasta dónde ya avisó).
     No borra nada (los tokens viejos se ignoran). */
const raw = process.env.FIREBASE_SERVICE_ACCOUNT || '';
if (!raw.trim()) {
  console.log('Sin FIREBASE_SERVICE_ACCOUNT: no se envían avisos.');
  process.exit(0);
}

const { default: admin } = await import('firebase-admin');
let cred;
try { cred = JSON.parse(raw); } catch (e) { console.error('FIREBASE_SERVICE_ACCOUNT no es un JSON válido.'); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(cred) });
const db = admin.firestore();
const { Timestamp, FieldValue } = admin.firestore;

const SITIO = (process.env.SITE_URL || 'https://gabrielg739-prog.github.io/juma/').replace(/\/?$/, '/');
const ADMIN = 'jumaduaca@gmail.com';
const MAX_MENSAJES = 300;

const estadoRef = db.doc('site/push_estado');
const estado = (await estadoRef.get()).data() || {};
/* Primera vez: no se avisa de todo el historial, solo de los últimos 15 minutos */
const desde = Number(estado.ultimoMs) || (Date.now() - 15 * 60 * 1000);

const snap = await db.collection('chat_mensajes')
  .where('creado', '>', Timestamp.fromMillis(desde))
  .orderBy('creado')
  .limit(MAX_MENSAJES)
  .get();
if (snap.empty) {
  console.log('No hay mensajes nuevos.');
  await estadoRef.set({ revisado: FieldValue.serverTimestamp() }, { merge: true });
  process.exit(0);
}
const mensajes = snap.docs.map((d) => Object.assign({ id: d.id }, d.data()));
const ultimoMs = Math.max(desde, ...mensajes.map((m) => (m.creado && m.creado.toMillis ? m.creado.toMillis() : 0)));

/* Tokens de todos los miembros que activaron los avisos: tokens/{uid} = { tokens: [...] } */
const tokensPorUid = new Map();
(await db.collection('tokens').get()).forEach((d) => {
  const t = d.data() || {};
  const lista = Array.isArray(t.tokens) ? t.tokens.filter((x) => typeof x === 'string' && x) : [];
  if (lista.length && (t.uid || d.id)) tokensPorUid.set(t.uid || d.id, lista);
});
if (!tokensPorUid.size) {
  console.log('Nadie ha activado los avisos todavía.');
  await estadoRef.set({ ultimoMs, revisado: FieldValue.serverTimestamp() }, { merge: true });
  process.exit(0);
}

/* Coordinadores y asesores: roles/{correo} + la cuenta maestra */
const coordUids = new Set();
const correosCoord = [ADMIN];
(await db.collection('roles').get()).forEach((d) => { const r = (d.data() || {}).rol; if (r === 'coordinador' || r === 'asesor') correosCoord.push(d.id); });
for (const correo of correosCoord) {
  try { const u = await admin.auth().getUserByEmail(correo); if (u && u.emailVerified) coordUids.add(u.uid); } catch (e) {}
}

/* Resumen por persona: comunidad, coordinación y mensajes privados */
const resumen = new Map(); // uid -> { general, coord, dm: Map(nombre -> n) }
const sumar = (uid, campo, nombre) => {
  if (!tokensPorUid.has(uid)) return;
  const r = resumen.get(uid) || { general: 0, coord: 0, dm: new Map() };
  if (campo === 'dm') r.dm.set(nombre, (r.dm.get(nombre) || 0) + 1);
  else r[campo]++;
  resumen.set(uid, r);
};
for (const m of mensajes) {
  const autor = String(m.autor || m.deNombre || 'Un misionero').slice(0, 40);
  if (m.canal === 'general') {
    tokensPorUid.forEach((_, uid) => { if (uid !== m.uid) sumar(uid, 'general'); });
  } else if (m.canal === 'coord') {
    coordUids.forEach((uid) => { if (uid !== m.uid) sumar(uid, 'coord'); });
  } else if (m.canal === 'dm' && m.paraUid && m.paraUid !== m.uid) {
    sumar(m.paraUid, 'dm', autor);
  }
}

let enviados = 0, fallidos = 0;
for (const [uid, r] of resumen) {
  const partes = [];
  r.dm.forEach((n, nombre) => partes.push(n === 1 ? `Mensaje privado de ${nombre}` : `${n} mensajes privados de ${nombre}`));
  if (r.coord) partes.push(r.coord === 1 ? '1 aviso en Coordinación' : `${r.coord} avisos en Coordinación`);
  if (r.general) partes.push(r.general === 1 ? '1 mensaje nuevo en la comunidad' : `${r.general} mensajes nuevos en la comunidad`);
  if (!partes.length) continue;
  const res = await admin.messaging().sendEachForMulticast({
    tokens: tokensPorUid.get(uid).slice(0, 500),
    notification: { title: 'JUMA Duaca', body: partes.join(' · ') },
    webpush: {
      notification: { icon: SITIO + 'icons/icon-192.png', badge: SITIO + 'icons/icon-192.png', tag: 'juma-chat', renotify: true },
      fcmOptions: { link: SITIO + '#comunidad' }
    }
  });
  enviados += res.successCount;
  fallidos += res.failureCount;
}

await estadoRef.set({ ultimoMs, revisado: FieldValue.serverTimestamp(), ultimosEnviados: enviados, ultimosFallidos: fallidos }, { merge: true });
console.log(`Mensajes revisados: ${mensajes.length}. Avisos enviados: ${enviados}. Fallidos: ${fallidos}.`);
