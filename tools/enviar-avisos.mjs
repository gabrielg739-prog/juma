/* Envía avisos al teléfono (FCM) de JUMA Duaca. Lo ejecuta GitHub Actions (.github/workflows/avisos-push.yml):
   cada 5 minutos, y además en cuanto el editor publica contenido.json.

   Avisa de:
   1. Agenda: un domingo con tema nuevo o cambiado, «No habrá reunión», un encuentro de lunes a sábado,
      o una actividad nueva o con fecha cambiada (a todos los miembros que activaron los avisos).
   2. Noticias y avisos: una noticia nueva o el «Aviso en la parte de arriba de la página» (a todos).
   3. Mensajes: comunidad (a todos menos quien escribe), privados (solo a quien los recibe)
      y Coordinación (solo a coordinadores y asesores).

   - Necesita el secreto FIREBASE_SERVICE_ACCOUNT (JSON de una cuenta de servicio de Firebase).
     Si no existe, termina sin hacer nada (código 0).
   - Usa firebase-admin, que no pasa por las reglas de Firestore: las reglas no necesitan nada extra.
   - Solo LEE el contenido, los mensajes y los tokens. Escribe únicamente site/push_estado (lo que ya avisó)
     y quita de tokens/{uid} los tokens que Firebase dice que ya no existen (teléfonos desinstalados).
   - La primera vez solo toma nota de la agenda y las noticias que ya hay: no avisa de lo viejo. */
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

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
const SIN = 'Sin reunión';
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

const limpio = (s, n) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, n);
const corto = (s, n) => { const t = limpio(s, 400); return t.length > n ? t.slice(0, n - 1).trimEnd() + '…' : t; };
const huella = (s) => createHash('sha1').update(String(s)).digest('hex').slice(0, 12);
const esFecha = (f) => /^\d{4}-\d{2}-\d{2}$/.test(String(f || ''));
/* «Hoy» en Venezuela (UTC−4) */
const hoy = new Date(Date.now() - 4 * 3600 * 1000).toISOString().slice(0, 10);
const cuando = (f) => { const [y, m, d] = f.split('-').map(Number); const dia = DIAS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()]; return `${dia} ${d} de ${MESES[m - 1]}`; };
const mayus = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const estadoRef = db.doc('site/push_estado');
const estado = (await estadoRef.get()).data() || {};
const nuevoEstado = {};

/* ---------- 1 y 2: agenda, noticias y aviso (del contenido publicado) ---------- */
async function leerContenido() {
  let nube = null, repo = null;
  try { const s = await db.doc('site/config').get(); if (s.exists) nube = s.data(); } catch (e) { console.log('No se pudo leer site/config:', e.message); }
  try { repo = JSON.parse(await readFile(new URL('../contenido.json', import.meta.url), 'utf8')); } catch (e) {}
  if (nube && repo) return String(repo.actualizado || '') > String(nube.actualizado || '') ? repo : nube;
  return nube || repo;
}
/* Lo que hoy está publicado, en forma de lista simple: clave → texto que se mostraría en el aviso */
function fotografia(c) {
  const agenda = {}, noticias = {};
  const temas = (c && c.temas) || {}, sin = (c && c.sinReunion) || {};
  new Set([...Object.keys(temas), ...Object.keys(sin)]).forEach((f) => {
    if (!esFecha(f) || f < hoy) return;
    const v = sin[f] ? SIN : limpio(temas[f], 160);
    if (v) agenda['d:' + f] = v;
  });
  ((c && c.encuentrosExtra) || []).forEach((e) => {
    if (e && esFecha(e.fecha) && e.fecha >= hoy) agenda['e:' + e.fecha] = limpio(e.tema, 160) || 'Encuentro / Formación JUMA';
  });
  ((c && c.actividades) || []).forEach((a) => {
    const t = limpio(a && a.t, 120);
    if (t) agenda['a:' + huella(t.toLowerCase())] = t + (limpio(a.f, 80) ? ' — ' + limpio(a.f, 80) : '');
  });
  const ocultas = new Set(((c && c.postsOcultos) || []).map(String));
  ((c && c.posts) || []).forEach((p) => {
    if (!p || !p.id || ocultas.has(String(p.id))) return;
    const t = limpio(p.t || p.x, 160);
    if (t) noticias['n:' + huella(p.id)] = t;
  });
  return { agenda, noticias, aviso: limpio(c && c.aviso, 220) };
}
const contenido = await leerContenido();
const novedades = { agenda: [], noticias: [], aviso: '' };
if (contenido) {
  const ahora = fotografia(contenido);
  const antes = estado.contenido;
  if (antes && typeof antes === 'object') {
    const visto = antes.agenda || {};
    for (const [k, v] of Object.entries(ahora.agenda)) {
      if (visto[k] === v) continue;
      if (k.startsWith('a:')) novedades.agenda.push((visto[k] === undefined ? 'Nueva actividad: ' : 'Actividad actualizada: ') + v);
      else {
        const f = mayus(cuando(k.slice(2)));
        novedades.agenda.push(v === SIN ? `${f}: no habrá reunión` : `${f}: ${v}`);
      }
    }
    const vistas = antes.noticias || {};
    for (const [k, v] of Object.entries(ahora.noticias)) if (vistas[k] === undefined) novedades.noticias.push(v);
    if (ahora.aviso && ahora.aviso !== (antes.aviso || '')) novedades.aviso = ahora.aviso;
  } else {
    console.log('Primera vez: se anota la agenda y las noticias que ya existen, sin avisar.');
  }
  /* Se recuerda lo visto (sin fechas ya pasadas) para no repetir avisos */
  const recordar = (viejo, nuevo, max) => {
    const todo = Object.assign({}, viejo || {}, nuevo);
    Object.keys(todo).forEach((k) => { if (/^[de]:/.test(k) && k.slice(2) < hoy) delete todo[k]; });
    return Object.fromEntries(Object.entries(todo).slice(-max));
  };
  nuevoEstado.contenido = {
    agenda: recordar(antes && antes.agenda, ahora.agenda, 300),
    noticias: recordar(antes && antes.noticias, ahora.noticias, 200),
    aviso: ahora.aviso
  };
}
const avisosContenido = [];
const juntar = (lista) => (lista.length === 1 ? lista[0] : lista.slice(0, 3).join(' · ') + (lista.length > 3 ? ` y ${lista.length - 3} más` : ''));
if (novedades.agenda.length) {
  avisosContenido.push({
    titulo: novedades.agenda.length === 1 ? 'JUMA Duaca · Agenda' : `JUMA Duaca · ${novedades.agenda.length} novedades en la agenda`,
    cuerpo: corto(juntar(novedades.agenda), 230), link: '#domingos', tag: 'juma-agenda'
  });
}
if (novedades.noticias.length) {
  avisosContenido.push({
    titulo: novedades.noticias.length === 1 ? 'JUMA Duaca · Nueva noticia' : `JUMA Duaca · ${novedades.noticias.length} noticias nuevas`,
    cuerpo: corto(juntar(novedades.noticias), 230), link: '#novedades', tag: 'juma-noticia'
  });
}
if (novedades.aviso) avisosContenido.push({ titulo: 'JUMA Duaca · Aviso', cuerpo: corto(novedades.aviso, 230), link: '#inicio', tag: 'juma-aviso' });

/* ---------- 3: mensajes del chat ---------- */
/* Primera vez: no se avisa de todo el historial, solo de los últimos 15 minutos */
const desde = Number(estado.ultimoMs) || (Date.now() - 15 * 60 * 1000);
const snap = await db.collection('chat_mensajes')
  .where('creado', '>', Timestamp.fromMillis(desde))
  .orderBy('creado')
  .limit(MAX_MENSAJES)
  .get();
const mensajes = snap.docs.map((d) => Object.assign({ id: d.id }, d.data()));
const ultimoMs = Math.max(desde, ...mensajes.map((m) => (m.creado && m.creado.toMillis ? m.creado.toMillis() : 0)));
if (ultimoMs !== Number(estado.ultimoMs)) nuevoEstado.ultimoMs = ultimoMs;

/* Comparación que no depende del orden de las claves (Firestore las devuelve ordenadas) */
const estable = (o) => (o && typeof o === 'object' && !Array.isArray(o)
  ? '{' + Object.keys(o).sort().map((k) => JSON.stringify(k) + ':' + estable(o[k])).join(',') + '}'
  : JSON.stringify(o));
const guardarEstado = async (extra = {}) => {
  const cambiaContenido = nuevoEstado.contenido !== undefined && estable(nuevoEstado.contenido) !== estable(estado.contenido);
  if (!cambiaContenido && nuevoEstado.ultimoMs === undefined && !Object.keys(extra).length) return; // nada nuevo: no se gasta una escritura
  /* El documento se escribe entero: así lo que ya pasó de fecha no se queda guardado */
  const doc = Object.assign({}, estado, extra, { revisado: FieldValue.serverTimestamp() });
  if (nuevoEstado.ultimoMs !== undefined) doc.ultimoMs = nuevoEstado.ultimoMs;
  if (cambiaContenido) doc.contenido = nuevoEstado.contenido;
  await estadoRef.set(doc);
};

if (!mensajes.length && !avisosContenido.length) {
  await guardarEstado();
  console.log('Nada nuevo.');
  process.exit(0);
}

/* Tokens de todos los miembros que activaron los avisos: tokens/{uid} = { tokens: [...] } */
const tokensPorUid = new Map();
const duenoDe = new Map(); // token -> uids
(await db.collection('tokens').get()).forEach((d) => {
  const t = d.data() || {};
  const uid = t.uid || d.id;
  const lista = Array.isArray(t.tokens) ? [...new Set(t.tokens.filter((x) => typeof x === 'string' && x))] : [];
  if (!lista.length || !uid) return;
  tokensPorUid.set(uid, lista);
  lista.forEach((x) => duenoDe.set(x, (duenoDe.get(x) || []).concat([d.id])));
});
if (!tokensPorUid.size) {
  console.log('Nadie ha activado los avisos todavía.');
  await guardarEstado();
  process.exit(0);
}

let enviados = 0, fallidos = 0;
const tokensMalos = new Set();
async function enviar(tokens, { titulo, cuerpo, link, tag }) {
  const lista = [...new Set(tokens)];
  for (let i = 0; i < lista.length; i += 500) {
    const parte = lista.slice(i, i + 500);
    const res = await admin.messaging().sendEachForMulticast({
      tokens: parte,
      notification: { title: titulo, body: cuerpo },
      data: { link: SITIO + link, tag },
      webpush: {
        headers: { TTL: String(2 * 24 * 3600), Urgency: 'high' },
        notification: { icon: SITIO + 'icons/icon-192.png', badge: SITIO + 'icons/badge-96.png', tag, renotify: true },
        fcmOptions: { link: SITIO + link }
      }
    });
    enviados += res.successCount;
    fallidos += res.failureCount;
    (res.responses || []).forEach((r, j) => {
      const code = r && r.error && r.error.code;
      if (code === 'messaging/registration-token-not-registered' || code === 'messaging/invalid-registration-token') tokensMalos.add(parte[j]);
    });
  }
}

/* Agenda, noticias y aviso: a todos los que activaron los avisos */
const todos = [...tokensPorUid.values()].flat();
for (const a of avisosContenido) await enviar(todos, a);

/* Mensajes: resumen por persona (comunidad, coordinación y privados) */
if (mensajes.length) {
  /* Coordinadores y asesores: roles/{correo} + la cuenta maestra */
  const coordUids = new Set();
  const correosCoord = [ADMIN];
  (await db.collection('roles').get()).forEach((d) => { const r = (d.data() || {}).rol; if (r === 'coordinador' || r === 'asesor') correosCoord.push(d.id); });
  for (const correo of correosCoord) {
    try { const u = await admin.auth().getUserByEmail(correo); if (u && u.emailVerified) coordUids.add(u.uid); } catch (e) {}
  }
  const resumen = new Map(); // uid -> { general, coord, dm: Map(nombre -> n) }
  const sumar = (uid, campo, nombre) => {
    if (!tokensPorUid.has(uid)) return;
    const r = resumen.get(uid) || { general: 0, coord: 0, dm: new Map() };
    if (campo === 'dm') r.dm.set(nombre, (r.dm.get(nombre) || 0) + 1);
    else r[campo]++;
    resumen.set(uid, r);
  };
  for (const m of mensajes) {
    const autor = limpio(m.autor || m.deNombre || 'Un misionero', 40);
    const deUid = m.uid || m.deUid;
    if (m.canal === 'general') {
      tokensPorUid.forEach((_, uid) => { if (uid !== deUid) sumar(uid, 'general'); });
    } else if (m.canal === 'coord') {
      coordUids.forEach((uid) => { if (uid !== deUid) sumar(uid, 'coord'); });
    } else if (m.canal === 'dm' && m.paraUid && m.paraUid !== deUid) {
      sumar(m.paraUid, 'dm', autor);
    }
  }
  for (const [uid, r] of resumen) {
    const partes = [];
    r.dm.forEach((n, nombre) => partes.push(n === 1 ? `Mensaje privado de ${nombre}` : `${n} mensajes privados de ${nombre}`));
    if (r.coord) partes.push(r.coord === 1 ? '1 aviso en Coordinación' : `${r.coord} avisos en Coordinación`);
    if (r.general) partes.push(r.general === 1 ? '1 mensaje nuevo en la comunidad' : `${r.general} mensajes nuevos en la comunidad`);
    if (!partes.length) continue;
    await enviar(tokensPorUid.get(uid), { titulo: 'JUMA Duaca · Mensajes', cuerpo: partes.join(' · '), link: '#mensajes', tag: 'juma-chat' });
  }
}

/* Teléfonos que ya no existen: se quita solo ese token (el resto del documento queda igual) */
for (const t of tokensMalos) {
  for (const uid of duenoDe.get(t) || []) {
    try { await db.doc('tokens/' + uid).update({ tokens: FieldValue.arrayRemove(t) }); } catch (e) {}
  }
}

await guardarEstado({ ultimosEnviados: enviados, ultimosFallidos: fallidos });
console.log(`Agenda: ${novedades.agenda.length}. Noticias: ${novedades.noticias.length}. Aviso: ${novedades.aviso ? 'sí' : 'no'}. Mensajes revisados: ${mensajes.length}. Avisos enviados: ${enviados}. Fallidos: ${fallidos}. Tokens viejos quitados: ${tokensMalos.size}.`);
