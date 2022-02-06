self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pin-store').then((cache) => cache.addAll([
      '/abduls20/Pinboard/',
      '/abduls20/Pinboard/index.html',
      '/abduls20/Pinboard/index.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
