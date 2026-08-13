var CACHE_NAME = 'upword-cache-v2';
var ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'css/style.css',
  'icons/icon.svg',
  'js/icons.js',
  'js/achievements.js',
  'js/certificate.js',
  'js/prefs.js',
  'js/storage.js',
  'js/guard.js',
  'js/speech.js',
  'js/player.js',
  'js/speaking.js',
  'js/writingReview.js',
  'js/app.js',
  'js/data/levels.js',
  'js/data/placementQuiz.js',
  'js/data/a1.js',
  'js/data/a2.js',
  'js/data/b1.js',
  'js/data/b2.js',
  'js/data/c1.js',
  'js/data/c2.js',
  'js/data/electives.js',
  'js/render/home.js',
  'js/render/placement.js',
  'js/render/level.js',
  'js/render/writing.js',
  'js/render/module.js',
  'js/render/exercises.js',
  'js/render/quiz.js',
  'js/render/flashcards.js'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        if (response.ok && event.request.url.indexOf(self.location.origin) === 0) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function () {
        return caches.match('index.html');
      });
    })
  );
});
