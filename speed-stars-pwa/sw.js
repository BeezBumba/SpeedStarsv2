const CACHE_NAME = 'speed-stars-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/unity-2020.js',
  '/master-loader.js',
  '/poki-sdk.js',
  '/poki-sdk-core-v2.263.0.js',
  '/Build/Build_v2-40w.loader.js',
  '/Build/b0e5ec181474d494c6ff3c9ad9c3b1bd.js',
  '/Build/fe2a5824416bebe1cc941510618103f9.wasm',
  '/Build/6127fbba3e79cbcada24ba1ffd033f77.data',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Install event - cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        return caches.match('/index.html');
      })
  );
});
