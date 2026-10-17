/* Service worker: funciona sin conexión + avisos en segundo plano.
   Es el ÚNICO service worker de la página: la app registra solo este archivo y los avisos (FCM)
   usan este mismo registro, así no llegan avisos repetidos. */
const CACHE = 'juma-v114';
/* Recursos que se descargan para usar sin internet (fotos, juegos, videos, libros, Firebase).
   Se conservan al actualizar la app para no volver a descargar todo. La lista la genera
   tools/generar-precache.mjs y la descarga js/offline.js. */
const RECURSOS = 'juma-recursos-v1';
/* Cachés con otro nombre que la app sigue usando (no se borran al actualizar) */
const CACHES_QUE_SE_CONSERVAN = ['juma-cloud-videos-v1', RECURSOS];
/* Lo esencial se guarda al instalar; el resto se descarga desde js/offline.js. */
const CORE = ['./', 'index.html', 'js/app.js', 'js/fe.js', 'js/firebase-config.js', 'js/qrcode.min.js', 'js/offline.js', 'oraciones.json', 'contenido.json', 'manifest.webmanifest',
  'img/logo.png', 'img/hero-900.jpg', 'img/ourem.jpg', 'img/new-chicas-capilla.jpg', 'img/joriel-avatar.png', 'img/mapa-consolata.svg', 'icons/icon-192.png'];
/* Fuentes, Firebase, imágenes de Wikimedia y códigos QR (otros sitios): se guardan al usarlos */
const EXTERNOS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'www.gstatic.com', 'commons.wikimedia.org', 'upload.wikimedia.org', 'api.qrserver.com', 'cdn.jsdelivr.net'];
/* Páginas y datos: si internet tarda más de este tiempo, se usa lo guardado */
const ESPERA_RED = 4000;
try {
  importScripts('js/firebase-config.js');
  const c = self.JUMA_FIREBASE || {};
  if (c.apiKey && !/REEMPLAZA/i.test(c.apiKey)) {
    importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js', 'https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
    firebase.initializeApp(c);
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage((payload) => {
      /* Si el aviso trae «notification», Firebase ya lo muestra solo: mostrarlo aquí también lo duplicaría.
         Aquí solo se muestran los avisos que vienen únicamente con «data». */
      if (!payload || payload.notification) return;
      const d = payload.data || {};
      self.registration.showNotification(d.title || 'JUMA Duaca', {
        body: d.body || 'Nuevo aviso de JUMA Duaca',
        icon: './icons/icon-192.png',
        badge: './icons/icon-192.png',
        tag: d.tag || undefined,
        data: { link: d.link || './' }
      });
    });
  }
} catch (e) {}
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(CORE.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  /* Borra solo las versiones viejas de la app (juma-vN); los recursos descargados se quedan */
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== CACHE && /^juma-v\d+$/.test(x) && !CACHES_QUE_SE_CONSERVAN.includes(x)).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
/* La clave de guardado ignora "?t=…" para no llenar la memoria con copias del mismo archivo */
const llave = (url) => { const u = new URL(url); return u.origin === location.origin ? u.origin + u.pathname : url; };
const guardar = (key, res, en = CACHE) => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(en).then((c) => c.put(key, cp)).catch(() => {}); } return res; };

/* Videos y audio guardados: se sirven por partes (el teléfono y el navegador los piden así).
   Si no están guardados, van directo por internet. */
async function medio(r, key) {
  const guardado = await caches.match(key);
  if (!guardado) return fetch(r);
  const rango = r.headers.get('range');
  if (!rango) return guardado;
  const m = /^bytes=(\d*)-(\d*)$/.exec(rango.trim());
  if (!m || (m[1] === '' && m[2] === '')) return guardado;
  const buf = await guardado.arrayBuffer();
  const total = buf.byteLength;
  let ini, fin;
  if (m[1] === '') { ini = Math.max(0, total - Number(m[2])); fin = total - 1; }
  else { ini = Number(m[1]); fin = m[2] === '' ? total - 1 : Math.min(Number(m[2]), total - 1); }
  if (ini > fin || ini >= total) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${total}` } });
  return new Response(buf.slice(ini, fin + 1), {
    status: 206,
    headers: {
      'Content-Type': guardado.headers.get('Content-Type') || 'application/octet-stream',
      'Content-Range': `bytes ${ini}-${fin}/${total}`,
      'Content-Length': String(fin - ini + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

/* Páginas, juegos, código y datos: primero internet (lo más nuevo). Si no hay conexión o tarda,
   se usa lo guardado; la copia nueva sigue guardándose en segundo plano. */
function primeroRed(r, key) {
  const red = fetch(r, { cache: 'no-cache' }).then((res) => guardar(key, res));
  const local = () => caches.match(key).then((m) => m || (r.mode === 'navigate' ? caches.match(llave(new URL('index.html', self.registration.scope).href)) : undefined));
  const tiempo = new Promise((ok) => setTimeout(() => ok(null), ESPERA_RED));
  return Promise.race([red.catch(() => null), tiempo]).then((res) => res || local().then((m) => m || red.catch(() => Response.error())));
}

self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET') return;
  const url = new URL(r.url);
  if (url.origin !== location.origin) {
    if (!EXTERNOS.includes(url.hostname)) return;
    /* fuentes, Firebase e imágenes externas: primero lo guardado, si no, internet */
    e.respondWith(caches.match(r.url).then((m) => m || fetch(r).then((res) => guardar(r.url, res, RECURSOS))));
    return;
  }
  if (url.pathname.includes('/api/') || url.search.includes('nocache')) return;
  const key = llave(r.url);
  if (/\.(mp4|webm|mov|mp3)$/i.test(url.pathname)) { e.respondWith(medio(r, key)); return; }
  if (r.mode === 'navigate' || url.pathname.endsWith('/') || /\.(html|js|mjs|css|json|webmanifest)$/i.test(url.pathname)) {
    e.respondWith(primeroRed(r, key));
    return;
  }
  /* fotos, dibujos, libros y demás: primero lo guardado (rápido y sin gastar datos) */
  e.respondWith(caches.match(key).then((m) => m || fetch(r).then((res) => guardar(key, res, RECURSOS))));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const d = (e.notification && e.notification.data) || {};
  const fcm = d.FCM_MSG || {};
  const link = d.link || (fcm.notification && fcm.notification.click_action) || (fcm.data && fcm.data.link) || './';
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then((ws) => {
    const w = ws.find((x) => x.url.startsWith(self.registration.scope));
    if (w) { w.focus(); if (link && link !== './' && w.navigate) return w.navigate(new URL(link, self.registration.scope).href).catch(() => {}); return undefined; }
    return clients.openWindow(new URL(link, self.registration.scope).href);
  }));
});
