/* Archivo de respaldo: la app NO registra este service worker (usa sw.js, que ya recibe los avisos).
   Existe solo por si Firebase lo busca con su nombre por defecto. No muestra avisos por su cuenta,
   para que nunca aparezcan avisos repetidos: los que traen «notification» los muestra Firebase. */
importScripts('js/firebase-config.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

const firebaseConfig = self.JUMA_FIREBASE || {};
if (firebaseConfig.apiKey) {
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
}
