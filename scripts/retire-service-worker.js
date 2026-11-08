const fs = require("fs");
const path = require("path");

// Existing visitors may still be controlled by the portfolio's old Workbox
// worker. Replace it with a worker that activates immediately and retires it.
const worker = `self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    await self.clients.claim();
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith("workbox-")).map((name) => caches.delete(name)));
    await self.registration.unregister();
  })());
});
`;

fs.writeFileSync(path.join(__dirname, "../build/service-worker.js"), worker);
