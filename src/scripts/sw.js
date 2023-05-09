/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import CacheHelper from './cache-helper';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');

  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };

  event.waitUntil(self.registration.showNotification(notification.title, notification.options));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('https://restaurant-api.dicoding.dev/images/small/')) {
    event.respondWith(
      caches.match(event.request).then((response) => response || fetch(event.request).catch(() => caches.match('/images/placeholder.png'))),
    );
  } else {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});
