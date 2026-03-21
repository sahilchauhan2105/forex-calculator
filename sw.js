self.addEventListener("install", () => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", () => {
  // No caching (safe mode)
});
