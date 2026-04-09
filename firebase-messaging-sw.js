importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC9b8i1-UptVKW1Jh98_rgMY0tbvfDziio",
  authDomain: "boss-timer-803c1.firebaseapp.com",
  databaseURL: "https://boss-timer-803c1-default-rtdb.firebaseio.com",
  projectId: "boss-timer-803c1",
  storageBucket: "boss-timer-803c1.appspot.com",
  messagingSenderId: "584405925759",
  appId: "1:584405925759:web:9356c4d41c58bf181644a"
});

const messaging = firebase.messaging();

// 🔔 BACKGROUND NOTIFICATION
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "logo.png"
  });
});