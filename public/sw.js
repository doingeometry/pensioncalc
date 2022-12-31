importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

// This line listens for push events and displays a notification (note: not tested right now)
self.addEventListener('push', () => {
    event.waitUntil(
      registration.showNotification("Hello!", {
        body: "This is a push notification!",
      })
    );
  });

// This line keeps the app working offline
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);