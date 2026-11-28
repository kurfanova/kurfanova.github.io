// Kurfanova PWA Service Worker
const CACHE_NAME = 'kurfanova-shell-cf0b624b_d3529231';
const FONT_CACHE_NAME = 'kurfanova-fonts-v1';

const SHELL_ASSETS = [
  './',
  './index.html',
  './tailwind.min.css?v=20261120_v17',
  './style.min.css?v=cf0b624b',
  './app.min.js?v=d3529231',
  './kurfamuzik_logo_96.webp',
  './manifest.json'
];

const BYPASS_HOSTS = [
  'youtube.com',
  'youtu.be',
  'ytimg.com',
  'googlevideo.com',
  'spotify.com',
  'lrclib.net',
  'audius.co',
  'savenow.to',
  'lbserver.xyz',
  'googleapis.com',
  'github.com',
  'githubusercontent.com'
];

function shouldBypassHost(hostname) {
  const host = String(hostname || '').toLowerCase();
  return BYPASS_HOSTS.some((domain) => host === domain || host.endsWith('.' + domain));
}

function isStaticAssetPath(url) {
  const pathname = url.pathname || '';
  if (/\.(?:webp|png|jpg|jpeg|svg|ico|woff2)$/i.test(pathname)) return true;
  if (/(?:^|\/)manifest\.json$/i.test(pathname)) return true;
  if (url.searchParams.has('v') && /\.(?:min\.js|min\.css|js|css)$/i.test(pathname)) return true;
  if (/\.(?:min\.js|min\.css)$/i.test(pathname)) return true;
  return false;
}

function isAppShellPath(pathname) {
  return (
    pathname.endsWith('/') ||
    /(?:^|\/)(?:index|google-auth)\.html$/i.test(pathname) ||
    /\.(?:html|js|css)$/i.test(pathname)
  );
}

async function networkFirst(request, isNavigation) {
  try {
    const networkRes = await fetch(request);
    if (networkRes && networkRes.ok && networkRes.type === 'basic') {
      const clone = networkRes.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)).catch(() => {});
    }
    return networkRes;
  } catch (_) {
    const exactMatch = await caches.match(request);
    if (exactMatch) return exactMatch;

    const relaxedMatch = await caches.match(request, { ignoreSearch: true });
    if (relaxedMatch) return relaxedMatch;

    if (isNavigation) {
      const fallbackHtml = (await caches.match('./index.html')) || (await caches.match('./'));
      if (fallbackHtml) return fallbackHtml;
    }

    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const networkRes = await fetch(request);
    if (networkRes && networkRes.ok && networkRes.type === 'basic') {
      const clone = networkRes.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)).catch(() => {});
    }
    return networkRes;
  } catch (_) {
    return new Response('', { status: 503, statusText: 'Service Unavailable' });
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME && key !== FONT_CACHE_NAME && (key.startsWith('kurfa-') || key.startsWith('kurfanova-'))) {
              return caches.delete(key);
            }
            return Promise.resolve(false);
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (!request || request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch (_) {
    return;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith((async () => {
      const cache = await caches.open(FONT_CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const netRes = await fetch(request);
        if (netRes && (netRes.ok || netRes.type === 'opaque')) {
          cache.put(request, netRes.clone()).catch(() => {});
        }
        return netRes;
      } catch (_) {
        return new Response('', { status: 503, statusText: 'Service Unavailable' });
      }
    })());
    return;
  }
  if (url.pathname.startsWith('/__kurfa_local_audio/')) return;
  if (url.pathname.startsWith('/__kurfa_native_audio__/')) return;
  if (url.pathname.startsWith('/__kurfa_native_video__/')) return;
  if (url.pathname.startsWith('/__kurfa_prefetch__/')) return;
  if (url.pathname.startsWith('/__kurfa_local_lyrics__')) return;
  if (url.pathname.includes('/api/')) return;
  if (shouldBypassHost(url.hostname)) return;
  if (url.origin !== self.location.origin) return;
  if (url.pathname.toLowerCase().endsWith('.apk') || url.pathname.toLowerCase().endsWith('.exe') || url.pathname.toLowerCase().endsWith('.zip') || url.pathname.toLowerCase().endsWith('.user.js')) return;

  if (isStaticAssetPath(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (request.mode === 'navigate' || isAppShellPath(url.pathname) || url.pathname.endsWith('/explore-seed.json')) {
    event.respondWith(networkFirst(request, request.mode === 'navigate'));
    return;
  }
});
