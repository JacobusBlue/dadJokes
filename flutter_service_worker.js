'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "83c68aeae5023325fd741a0479c01a01",
"/main.dart.js": "eaa51225c408e7eb7d6bfcfc10c15b51",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/assets/assets/3.png": "7035d0030d0d40a975733f29fce31253",
"/assets/LICENSE": "ee215633e7bbba26acf72337e16ec178",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/FontManifest.json": "04282031f4ab11308f5e7a8d797a1db9",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/IndieFlower-Regular.ttf": "0841af952c807bdf56455b1addb4c7df",
"/assets/AssetManifest.json": "f456f9c3cb8d5afb462ac829b3640284",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/manifest.json": "261ad98638fadc8f632ef83a7ee5d936"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
