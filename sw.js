// Dieta: copia local para que la app abra sin conexión.
// Siempre intenta primero la red, así los cambios de data.js se ven en cuanto hay señal.
const VERSION = "dieta-v1";
const FILES = [
  "./",
  "./index.html",
  "./app.js",
  "./data.js",
  "./manifest.webmanifest",
  "./fonts/archivo-latin.woff2",
  "./favicon-64.png",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  const estatico = /\.(png|woff2)$/.test(new URL(req.url).pathname);

  if (estatico) {
    // Iconos y fuente: primero la copia local.
    event.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((resp) => {
        if (resp && resp.ok) {
          const copy = resp.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return resp;
      }))
    );
    return;
  }

  // Página, código y datos: primero la red; sin conexión, la última copia guardada.
  event.respondWith(
    fetch(req)
      .then((resp) => {
        if (resp && resp.ok) {
          const copy = resp.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return resp;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match("./index.html")))
  );
});
