/**
 * Register Service Worker for aggressive image caching
 * This enables instant image loading even after browser restart
 */

export async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      // Register the service worker
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      console.log('[SW] Service Worker registered successfully:', registration.scope);

      // Check for updates less frequently (once per day instead of every minute)
      setInterval(() => {
        registration.update();
      }, 24 * 60 * 60 * 1000); // Check once per day

      // Listen for updates but don't auto-reload
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              console.log('[SW] New Service Worker activated and ready');
              // Don't auto-reload - let the user continue browsing
              // The new service worker will take effect on next page load
            }
          });
        }
      });

      // Handle controller change (new SW took over)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[SW] Controller changed, new SW in control');
      });

    } catch (error) {
      console.error('[SW] Service Worker registration failed:', error);
    }
  } else {
    console.log('[SW] Service Workers not supported in this browser');
  }
}

export async function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.unregister();
      console.log('[SW] Service Worker unregistered');
    }
  }
}
