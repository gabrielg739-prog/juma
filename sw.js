/* Service worker: funciona sin conexión + avisos en segundo plano.
   Es el ÚNICO service worker de la página: la app registra solo este archivo y los avisos (FCM)
   usan este mismo registro, así no llegan avisos repetidos. */
const CACHE = 'juma-v78';
/* Cachés con otro nombre que la app sigue usando (no se borran al actualizar) */
const CACHES_QUE_SE_CONSERVAN = ['juma-cloud-videos-v1'];
/* Lo esencial se guarda al instalar; las fotos, el audio y los mockups se guardan a medida que se usan. */
const CORE = ['./', 'index.html', 'js/app.js', 'js/fe.js', 'js/firebase-config.js', 'js/qrcode.min.js', 'oraciones.json', 'contenido.json', 'manifest.webmanifest',
  'img/logo.png', 'img/hero-900.jpg', 'img/ourem.jpg', 'img/new-chicas-capilla.jpg', 'img/joriel-avatar.png', 'img/mapa-consolata.svg', 'icons/icon-192.png'];
/* Fuentes de letra, códigos QR e imágenes de las oraciones (otros sitios) que también se guardan al verlas */
const EXTERNOS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'commons.wikimedia.org', 'upload.wikimedia.org', 'api.qrserver.com', 'cdn.jsdelivr.net'];
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
  /* Borra solo las versiones viejas de este caché (juma-v…), no los demás que la app usa */
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== CACHE && /^juma-v\d+$/.test(x) && !CACHES_QUE_SE_CONSERVAN.includes(x)).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});
/* La clave de guardado ignora "?t=…" para no llenar la memoria con copias del mismo archivo */
const llave = (url) => { const u = new URL(url); return u.origin === location.origin ? u.origin + u.pathname : url; };
const guardar = (key, res) => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(key, cp)).catch(() => {}); } return res; };
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET') return;
  const url = new URL(r.url);
  if (url.origin !== location.origin) {
    if (!EXTERNOS.includes(url.hostname)) return;
    /* fuentes e imágenes externas: primero lo guardado, si no, internet */
    e.respondWith(caches.match(r.url).then((m) => m || fetch(r).then((res) => guardar(r.url, res))));
    return;
  }
  if (url.pathname.includes('/api/') || url.search.includes('nocache')) return;
  /* los videos y el audio van directo por internet (el teléfono los pide por partes) */
  if (/\.(mp4|webm|mov|mp3)$/i.test(url.pathname)) return;
  const key = llave(r.url);
  if (r.mode === 'navigate' || /\.(js|css|json|webmanifest)$/.test(url.pathname)) {
    /* páginas y datos: primero internet (para ver lo más nuevo sin caché vieja); sin conexión, lo último guardado */
    e.respondWith(fetch(r, { cache: 'no-cache' }).then((res) => guardar(key, res)).catch(() => caches.match(key).then((m) => m || (r.mode === 'navigate' ? caches.match(llave(new URL('index.html', self.registration.scope).href)) : Response.error()))));
  } else {
    /* fotos y dibujos: primero lo guardado (rápido y sin gastar datos) */
    e.respondWith(caches.match(key).then((m) => m || fetch(r).then((res) => guardar(key, res))));
  }
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
