// Lefties OS SW — v2 (dashboard hub)
const CACHE = 'lefties-os-v2';
const PRECACHE = [
  '/dashboard.html',
  '/field.os.html',
  '/services.html',
  '/client-pre-service-checklist.html',
  '/client/aftercare.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(PRECACHE);
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    // kill old caches so the /app/app.html version is gone
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : Promise.resolve())));
    await self.clients.claim();
  })());
});

// Stale-while-revalidate for same-origin; offline fallback to dashboard for navigations
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  // If it's a top-level navigation (HTML), try network -> cache -> fallback to dashboard
  if (e.request.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(e.request);
        const c = await caches.open(CACHE);
        c.put(e.request, fresh.clone());
        return fresh;
      } catch {
        const cached = await caches.match(e.request);
        return cached || caches.match('/dashboard.html') || Response.error();
      }
    })());
    return;
  }

  // everything else: stale-while-revalidate
  e.respondWith((async () => {
    const cached = await caches.match(e.request);
    try {
      const fresh = await fetch(e.request);
      const c = await caches.open(CACHE);
      c.put(e.request, fresh.clone());
      return fresh;
    } catch {
      return cached || Response.error();
    }
  })());
});
