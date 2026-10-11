// Importar los scripts de Firebase para trabajar en segundo plano
importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js');

// Tus credenciales exactas
const firebaseConfig = {
  apiKey: "AIzaSyC8-zbb-AGZmHHsdwo0B0K7mVQZDalwnlc",
  authDomain: "juma-e4ab8.firebaseapp.com",
  projectId: "juma-e4ab8",
  storageBucket: "juma-e4ab8.firebasestorage.app",
  messagingSenderId: "551880580074",
  appId: "1:551880580074:web:618f067a7f3ddc9da1b093"
};

// Inicializar Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Configurar qué pasa cuando llega una notificación y la app está en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('Mensaje recibido en segundo plano:', payload);

  const notificationTitle = payload.notification.title || 'Nueva notificación';
  const notificationOptions = {
    body: payload.notification.body,
    // ¡Aprovechamos el icono que ya tienes en tu repositorio!
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
