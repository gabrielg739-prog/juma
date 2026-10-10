/* Service worker: modo sin conexión básico + avisos en segundo plano */
const CACHE = 'juma-v5';
try {
  importScripts('js/firebase-config.js');
  const c = self.JUMA_FIREBASE || {};
  if (c.apiKey && !/REEMPLAZA/i.test(c.apiKey)) {
    importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js', 'https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
    firebase.initializeApp(c); firebase.messaging();
  }
} catch (e) {}
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', 'index.html', 'js/app.js', 'js/firebase-config.js', 'manifest.webmanifest', 'img/logo.png', 'img/hero-900.jpg']).catch(() => {})).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== CACHE).map((x) => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate' || /\.(js|css|json)(\?|$)/.test(r.url)) {
    e.respondWith(fetch(r).then((res) => { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(r, cp)); return res; }).catch(() => caches.match(r).then((m) => m || caches.match('index.html'))));
  } else {
    e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(r, cp)); return res; })));
  }
});
self.addEventListener('notificationclick', (e) => { e.notification.close(); e.waitUntil(clients.openWindow('./')); });
