self.addEventListener('install', e=>{
  e.waitUntil((async()=>{
    const c = await caches.open('lefties-os-v1');
    await c.addAll(['/app/app.html','/field.os.html','/services.html','/client-pre-service-checklist.html','/client/aftercare.html']);
  })());
  self.skipWaiting();
});
self.addEventListener('activate', e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e=>{
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith((async()=>{
      const cached = await caches.match(e.request);
      try {
        const fresh = await fetch(e.request);
        const c = await caches.open('lefties-os-v1');
        c.put(e.request, fresh.clone());
        return fresh;
      } catch { return cached || Response.error(); }
    })());
  }
});
