
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  // No offline cache; placeholder only
});
