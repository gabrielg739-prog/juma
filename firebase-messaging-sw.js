// Importar los scripts de Firebase compatibles (versión 10.14.1 existente en Google CDN)
importScripts('js/firebase-config.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

const firebaseConfig = self.JUMA_FIREBASE || {
  apiKey: "AIzaSyC8-zbb-AGZmHHsdwo0B0K7mVQZDalwnlc",
  authDomain: "juma-e4ab8.firebaseapp.com",
  databaseURL: "https://juma-e4ab8-default-rtdb.firebaseio.com",
  projectId: "juma-e4ab8",
  storageBucket: "juma-e4ab8.firebasestorage.app",
  messagingSenderId: "551880580074",
  appId: "1:551880580074:web:618f067a7f3ddc9da1b093"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const n = payload.notification || {};
  const notificationTitle = n.title || 'JUMA Duaca';
  const notificationOptions = {
    body: n.body || 'Tienes un nuevo aviso de JUMA Duaca',
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
