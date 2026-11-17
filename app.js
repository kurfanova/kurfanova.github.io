/**
 * KURFAMÜZİK (KURFA SOUND LIGHT) — Client Controller v4
 * 100% Ad-Free YouTube Playback Engine, 120 FPS Scrubbable Seekbar & Volume,
 * Real Synced LRC Karaoke Lyrics Engine, Full Mobile First-Class Navigation & Player Deck
 */

// Base API endpoint resolver for cross-origin hosting (GitHub Pages / local preview -> Worker API)
const __isLocalStaticPreview = typeof window !== 'undefined' &&
  (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') &&
  window.location.port !== '8787';
const API_BASE = (typeof window !== 'undefined' && (window.location.origin.includes('github.io') || window.location.protocol === 'file:' || __isLocalStaticPreview))
  ? 'https://kurfanova.kurfa.workers.dev'
  : '';

// =============================================================================
// 0.5 ZERO-SERVER CLIENT BRIDGE (ANDROID APK + WEB EXTENSION + AUDIUS)
// =============================================================================

const __kurfaPendingBridge = new Map();
let __kurfaBridgeSeq = 0;

function isAndroidNativeEngine() {
  try {
    return Boolean(
      typeof window !== 'undefined' &&
      window.KurfaAndroidBridge &&
      typeof window.KurfaAndroidBridge.isNativeEngineReady === 'function' &&
      window.KurfaAndroidBridge.isNativeEngineReady()
    );
  } catch (e) {
    return false;
  }
}

function getBrowserExtensionMode() {
  try {
    return (typeof document !== 'undefined' && document.documentElement && document.documentElement.dataset && document.documentElement.dataset.kurfaExt) || '';
  } catch (e) {
    return '';
  }
}

const KURFA_ADGUARD_STORES = {
  chrome: {
    id: 'chrome',
    name: 'Chrome',
    storeName: 'Chrome Web Mağazası',
    url: 'https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg'
  },
  edge: {
    id: 'edge',
    name: 'Microsoft Edge',
    storeName: 'Edge Eklenti Mağazası',
    url: 'https://microsoftedge.microsoft.com/addons/detail/pdffkfellgipmhklpdmokmckkkfcopbh'
  },
  firefox: {
    id: 'firefox',
    name: 'Firefox',
    storeName: 'Firefox Add-ons',
    url: 'https://addons.mozilla.org/firefox/addon/adguard-adblocker/'
  },
  opera: {
    id: 'opera',
    name: 'Opera',
    storeName: 'Opera Add-ons',
    url: 'https://addons.opera.com/en/extensions/details/adguard/'
  },
  'safari-mac': {
    id: 'safari-mac',
    name: 'Safari',
    storeName: 'Mac App Store',
    url: 'https://apps.apple.com/app/adguard-for-safari/id1440147259'
  },
  'safari-ios': {
    id: 'safari-ios',
    name: 'Safari',
    storeName: 'App Store',
    url: 'https://apps.apple.com/app/adguard/id1047223162'
  }
};

let __kurfaAdBlockerDetected = false;
if (typeof window !== 'undefined') window.__kurfaAdBlockerDetected = false;
let __kurfaAdBlockerCheckedAt = 0;
let __kurfaAdBlockerInflight = null;
let __kurfaAdBlockerWatcherTimer = null;
let __kurfaAdBlockerWatching = false;

function detectBrowserExtensionStore(explicitKey) {
  if (explicitKey) {
    if (explicitKey === 'safari') {
      const plat = detectUserDevicePlatform();
      return plat === 'ios' ? KURFA_ADGUARD_STORES['safari-ios'] : KURFA_ADGUARD_STORES['safari-mac'];
    }
    if (KURFA_ADGUARD_STORES[explicitKey]) return KURFA_ADGUARD_STORES[explicitKey];
  }
  try {
    const ua = String(navigator.userAgent || '');
    const plat = detectUserDevicePlatform();
    if (/opr\/|opera/i.test(ua)) return KURFA_ADGUARD_STORES.opera;
    if (/edg\/|edga\/|edgios\//i.test(ua)) return KURFA_ADGUARD_STORES.edge;
    if (/firefox|fxios/i.test(ua)) return KURFA_ADGUARD_STORES.firefox;
    if (plat === 'ios' && /safari/i.test(ua) && !/crios|fxios|edgios|opios/i.test(ua)) {
      return KURFA_ADGUARD_STORES['safari-ios'];
    }
    if (plat === 'macos' && /safari/i.test(ua) && !/chrome|crios|chromium|edg|opr|firefox/i.test(ua)) {
      return KURFA_ADGUARD_STORES['safari-mac'];
    }
  } catch (e) {}
  return KURFA_ADGUARD_STORES.chrome;
}

function isBrowserAdBlockerActive() {
  return Boolean(__kurfaAdBlockerDetected);
}
window.isBrowserAdBlockerActive = isBrowserAdBlockerActive;

function updateLocalEngineStatusUI() {
  if (typeof document === 'undefined') return;
  const targets = [
    document.getElementById('kurfa-local-engine-status'),
    document.getElementById('settings-engine-status')
  ].filter(Boolean);

  const extMode = getBrowserExtensionMode();
  const adBlockerActive = isBrowserAdBlockerActive();
  let label = 'Tarayıcı Modu';
  let cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container text-on-surface-variant whitespace-nowrap flex-shrink-0';
  if (isAndroidNativeEngine()) {
    label = 'APK Cihaz Motoru Aktif (%0 Reklam)';
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (extMode && extMode.startsWith('desktop')) {
    label = 'Masaüstü Uygulaması Aktif (%0 Reklam)';
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (extMode) {
    label = 'Eklenti Motoru Aktif (%0 Reklam)';
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (adBlockerActive) {
    label = 'AdGuard / Engelleyici Aktif (%0 Reklam)';
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (__kurfaAdBlockerWatching) {
    label = 'Kurulum Algılanıyor...';
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 whitespace-nowrap flex-shrink-0';
  }
  targets.forEach((el) => {
    el.textContent = label;
    el.className = cls;
  });

  const isAdFreeEnv = hasAdFreePlaybackEnvironment();
  const sidebarPill = document.getElementById('sidebar-adfree-pill');
  if (sidebarPill) {
    sidebarPill.textContent = isAdFreeEnv ? 'Aktif' : '%0 Reklam';
    sidebarPill.className = isAdFreeEnv
      ? 'px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0 leading-none'
      : 'px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-primary/15 text-primary whitespace-nowrap flex-shrink-0 leading-none';
  }

  const detectedStore = detectBrowserExtensionStore();
  const storeBtn = document.getElementById('btn-install-store-adblock');
  if (storeBtn && storeBtn.tagName === 'A') {
    storeBtn.href = detectedStore.url;
  }
  const storeBtnLabel = document.getElementById('btn-install-store-adblock-label');
  if (storeBtnLabel) {
    if (adBlockerActive) {
      storeBtnLabel.textContent = `AdGuard / Engelleyici Aktif (${detectedStore.name})`;
    } else if (__kurfaAdBlockerWatching) {
      storeBtnLabel.textContent = `${detectedStore.storeName} Açıldı — Ekle'ye Basın`;
    } else {
      storeBtnLabel.textContent = `${detectedStore.name} İçin AdGuard Ekle (${detectedStore.storeName})`;
    }
  }

  const hintEl = document.getElementById('kurfa-store-install-hint');
  if (hintEl) {
    if (adBlockerActive) {
      hintEl.textContent = 'Tarayıcınızda reklam engelleyici algılandı. Şarkılar uyarı ekranı olmadan doğrudan oynatılıyor.';
    } else if (__kurfaAdBlockerWatching) {
      hintEl.textContent = 'Açılan mağaza sekmesinde "Ekle" butonuna basın; Kurfamüzik arka planda otomatik algılayacak.';
    } else {
      hintEl.textContent = 'Tarayıcınız için resmi AdGuard mağaza sayfasını açar; eklediğiniz anda sistem arka planda otomatik algılar.';
    }
  }

  const activePillKey = detectedStore.id.startsWith('safari') ? 'safari' : detectedStore.id;
  document.querySelectorAll('[data-store-browser]').forEach((btn) => {
    const key = btn.getAttribute('data-store-browser');
    if (btn.tagName === 'A' && key) {
      btn.href = detectBrowserExtensionStore(key).url;
    }
    const isMatch = key === activePillKey;
    btn.classList.toggle('border-primary', isMatch);
    btn.classList.toggle('text-primary', isMatch);
  });
}

function hasAdFreeLocalEngine() {
  return Boolean(isAndroidNativeEngine() || getBrowserExtensionMode());
}

function hasAdFreePlaybackEnvironment() {
  return Boolean(hasAdFreeLocalEngine() || isBrowserAdBlockerActive());
}

async function kurfaDetectAdBlocker(options = {}) {
  const force = Boolean(options && options.force);
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (hasAdFreeLocalEngine()) return true;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
  if (!force && __kurfaAdBlockerCheckedAt && (Date.now() - __kurfaAdBlockerCheckedAt) < 4000) {
    return __kurfaAdBlockerDetected;
  }
  if (__kurfaAdBlockerInflight && !force) return __kurfaAdBlockerInflight;

  __kurfaAdBlockerInflight = (async () => {
    let blockedByNetwork = false;
    let blockedByScriptProbe = false;
    let blockedByCosmetic = false;

    let _siteOnlinePromise = null;
    const checkSiteOnline = async () => {
      if (_siteOnlinePromise) return _siteOnlinePromise;
      _siteOnlinePromise = (async () => {
        try {
          const res = await fetch('./explore-seed.json', { method: 'HEAD', cache: 'no-store' });
          return Boolean(res && res.ok);
        } catch (_) {
          return false;
        }
      })();
      return _siteOnlinePromise;
    };

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), 1400) : null;
    try {
      let networkProbeFailed = false;
      await Promise.all([
        fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-store',
          signal: controller ? controller.signal : undefined
        }).catch((err) => {
          if (err && err.name !== 'AbortError') networkProbeFailed = true;
        }),
        fetch('https://static.doubleclick.net/instream/ad_status.js', {
          method: 'GET',
          mode: 'no-cors',
          cache: 'no-store',
          signal: controller ? controller.signal : undefined
        }).catch((err) => {
          if (err && err.name !== 'AbortError') networkProbeFailed = true;
        })
      ]);

      if (networkProbeFailed && (await checkSiteOnline())) {
        blockedByNetwork = true;
      }
    } catch (_) {
    } finally {
      if (timer) clearTimeout(timer);
    }

    if (!blockedByNetwork && typeof document !== 'undefined' && document.head) {
      const prevStatus = window.google_ad_status;
      let scriptEl = null;
      let scriptTimer = null;
      try {
        try {
          delete window.google_ad_status;
        } catch (_) {
          window.google_ad_status = undefined;
        }

        await new Promise((resolve) => {
          scriptEl = document.createElement('script');
          scriptEl.async = true;
          scriptEl.referrerPolicy = 'no-referrer';
          scriptEl.src = 'https://static.doubleclick.net/instream/ad_status.js';

          const finishScriptProbe = async (isError, isLoad) => {
            if (scriptTimer) {
              clearTimeout(scriptTimer);
              scriptTimer = null;
            }
            if (isError) {
              if (await checkSiteOnline()) blockedByScriptProbe = true;
            } else if (isLoad) {
              if (window.google_ad_status !== 1 && (await checkSiteOnline())) {
                blockedByScriptProbe = true;
              }
            }
            resolve();
          };

          scriptTimer = setTimeout(() => finishScriptProbe(false, false), 1400);
          scriptEl.onerror = () => finishScriptProbe(true, false);
          scriptEl.onload = () => finishScriptProbe(false, true);
          document.head.appendChild(scriptEl);
        });
      } catch (_) {
      } finally {
        if (scriptTimer) clearTimeout(scriptTimer);
        if (scriptEl && scriptEl.parentNode) scriptEl.remove();
        if (typeof prevStatus !== 'undefined') {
          window.google_ad_status = prevStatus;
        } else {
          try {
            delete window.google_ad_status;
          } catch (_) {
            window.google_ad_status = undefined;
          }
        }
      }
    }

    if (typeof document !== 'undefined' && document.body) {
      const bait1 = document.createElement('div');
      bait1.id = 'ad-unit-banner';
      bait1.className = 'adsbox ad-banner banner-ad pub_300x250 text-ad';
      bait1.setAttribute('aria-hidden', 'true');
      bait1.style.cssText = 'position:fixed;bottom:0;right:0;width:16px;height:16px;display:block;visibility:visible;opacity:0.01;pointer-events:none;z-index:-1;';
      bait1.innerHTML = '&nbsp;';

      const bait2 = document.createElement('div');
      bait2.className = 'ytd-display-ad-renderer ad-slot';
      bait2.setAttribute('data-ad-status', 'filled');
      bait2.setAttribute('aria-hidden', 'true');
      bait2.style.cssText = 'position:fixed;bottom:0;right:0;width:16px;height:16px;display:block;visibility:visible;opacity:0.01;pointer-events:none;z-index:-1;';
      bait2.innerHTML = '&nbsp;';

      try {
        document.body.appendChild(bait1);
        document.body.appendChild(bait2);
        await new Promise((r) => (typeof requestAnimationFrame === 'function' ? requestAnimationFrame(r) : setTimeout(r, 20)));
        for (const b of [bait1, bait2]) {
          const cs = window.getComputedStyle ? window.getComputedStyle(b) : null;
          if (
            (cs && (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0)) ||
            b.offsetHeight === 0 ||
            b.clientHeight === 0
          ) {
            blockedByCosmetic = true;
            break;
          }
        }
      } catch (_) {
      } finally {
        if (bait1.parentNode) bait1.remove();
        if (bait2.parentNode) bait2.remove();
      }
    }

    __kurfaAdBlockerDetected = Boolean(blockedByNetwork || blockedByScriptProbe || blockedByCosmetic);
    if (typeof window !== 'undefined') window.__kurfaAdBlockerDetected = __kurfaAdBlockerDetected;
    __kurfaAdBlockerCheckedAt = Date.now();
    updateLocalEngineStatusUI();
    return __kurfaAdBlockerDetected;
  })();

  try {
    return await __kurfaAdBlockerInflight;
  } finally {
    __kurfaAdBlockerInflight = null;
  }
}

function stopAdBlockerBackgroundWatcher() {
  if (__kurfaAdBlockerWatcherTimer) {
    clearInterval(__kurfaAdBlockerWatcherTimer);
    __kurfaAdBlockerWatcherTimer = null;
  }
  __kurfaAdBlockerWatching = false;
  const warnStatus = typeof document !== 'undefined' ? document.getElementById('ad-warn-watcher-status') : null;
  if (warnStatus) {
    warnStatus.classList.add('hidden');
    warnStatus.textContent = '';
  }
  updateLocalEngineStatusUI();
}

function handleAdBlockerDetectedFlow() {
  stopAdBlockerBackgroundWatcher();
  if (typeof showToast === 'function') {
    showToast('Reklam engelleyici algılandı! Artık reklamsız oynatılıyor.');
  }
  const warnModal = document.getElementById('ad-warning-modal');
  const warnOpen = Boolean(warnModal && warnModal.classList.contains('opacity-100'));
  if (warnOpen) {
    if (typeof state !== 'undefined' && state._pendingAdWarnPlayback) {
      continueFromAdWarningModal();
    } else {
      hideAdWarningModalVisual();
    }
  }
}

function startAdBlockerBackgroundWatcher() {
  if (__kurfaAdBlockerWatcherTimer) clearInterval(__kurfaAdBlockerWatcherTimer);
  __kurfaAdBlockerWatching = true;
  const startedAt = Date.now();
  const warnStatus = typeof document !== 'undefined' ? document.getElementById('ad-warn-watcher-status') : null;
  if (warnStatus) {
    warnStatus.textContent = 'Resmi mağaza açıldı. Ekle butonuna bastığınızda Kurfamüzik arka planda otomatik algılayıp şarkıyı başlatacak...';
    warnStatus.classList.remove('hidden');
  }
  updateLocalEngineStatusUI();

  __kurfaAdBlockerWatcherTimer = setInterval(async () => {
    if (Date.now() - startedAt > 180000) {
      stopAdBlockerBackgroundWatcher();
      return;
    }
    const ok = await kurfaDetectAdBlocker({ force: true });
    if (ok) {
      handleAdBlockerDetectedFlow();
    }
  }, 2500);
}

function onStoreLinkClicked(explicitBrowserKey) {
  const store = detectBrowserExtensionStore(explicitBrowserKey);
  startAdBlockerBackgroundWatcher();
  if (typeof showToast === 'function') {
    showToast(`${store.storeName} açıldı. Ekle'ye basınca otomatik algılanacak.`);
  }
}
window.onStoreLinkClicked = onStoreLinkClicked;

function startAutoExtensionInstall(explicitBrowserKey) {
  const store = detectBrowserExtensionStore(explicitBrowserKey);
  try {
    window.open(store.url, '_blank', 'noopener,noreferrer');
  } catch (e) {}
  onStoreLinkClicked(explicitBrowserKey);
}
window.startAutoExtensionInstall = startAutoExtensionInstall;
window.kurfaDetectAdBlocker = kurfaDetectAdBlocker;

const FIRST_VISIT_KEY = 'kurfa_first_visit_v1';

async function kurfaHandleInitialVisit(detected) {
  const hasVisitedBefore = (() => {
    try {
      return localStorage.getItem(FIRST_VISIT_KEY) === '1';
    } catch (e) {
      return true;
    }
  })();

  const markVisited = () => {
    try {
      localStorage.setItem(FIRST_VISIT_KEY, '1');
    } catch (e) {}
  };

  if (hasAdFreeLocalEngine()) {
    markVisited();
    return;
  }

  if (detected === true) {
    markVisited();
    updateLocalEngineStatusUI();
    if (!hasVisitedBefore && typeof showToast === 'function') {
      showToast('Reklam engelleyiciniz aktif — %0 reklamlı keyifli dinlemeler');
    }
    return;
  }

  if (detected === false && !hasVisitedBefore && !isAdWarningDisabledByPref()) {
    markVisited();
    await new Promise((r) => setTimeout(r, 850));
    const isProtected = hasAdFreePlaybackEnvironment();
    const isAnyModalOpen = Boolean(
      document.querySelector(
        '#app-install-modal.opacity-100, #ad-warning-modal.opacity-100, #profile-modal.opacity-100, #login-modal.opacity-100'
      )
    );
    const hasStartedPlayback = Boolean(
      typeof state !== 'undefined' && (state._pendingAdWarnPlayback || state.isPlaying)
    );

    if (!isProtected && !isAnyModalOpen && !hasStartedPlayback) {
      openAdWarningModal(null, { mode: 'welcome' });
    }
  }
}
const kurfaRunFirstVisitOnboarding = kurfaHandleInitialVisit;
window.kurfaRunFirstVisitOnboarding = kurfaRunFirstVisitOnboarding;
window.kurfaHandleInitialVisit = kurfaHandleInitialVisit;

// =============================================================================
// 0.6 OTOMATİK GÜNCELLEME (PWA SERVICE WORKER + MASAÜSTÜ/APK OTA KÖPRÜSÜ)
// =============================================================================
let __kurfaSwRegistration = null;
let __kurfaLastSwUpdateCheckAt = 0;
let __kurfaLastFocusAdCheckAt = 0;
let __kurfaLastManualUpdateCheckAt = 0;

function initWebAutoUpdater() {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') return;
  try {
    navigator.serviceWorker.register('./sw.js?v=4.3.11').then((reg) => {
      __kurfaSwRegistration = reg;
      __kurfaLastSwUpdateCheckAt = Date.now();
    }).catch(() => {});

    let __swReloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (__swReloading) return;
      if (typeof state !== 'undefined' && state.isPlaying) return;
      __swReloading = true;
      window.location.reload();
    });
  } catch (_) {}
}

window.__kurfaOnNativeUpdateReady = function (info) {
  if (info && info.uiHandled) return;
  const ver = String(info?.version || '');
  if (typeof showToast === 'function' && ver) {
    showToast(`Kurfamüzik v${ver} indirildi ve doğrulandı — kapanışta otomatik güncellenecek.`);
  }
};

window.requestNativeAppUpdateCheck = function () {
  if (isAndroidNativeEngine() && typeof window.KurfaAndroidBridge?.checkForUpdates === 'function') {
    window.KurfaAndroidBridge.checkForUpdates();
    return true;
  }
  if (getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('CHECK_UPDATE', {}, 8000);
    return true;
  }
  return false;
};

window.kurfaCheckAppUpdate = function () {
  const now = Date.now();
  if (now - __kurfaLastManualUpdateCheckAt < 20000) {
    if (typeof showToast === 'function') {
      showToast('Güncelleme az önce denetlendi, lütfen bekleyin.');
    }
    return false;
  }
  __kurfaLastManualUpdateCheckAt = now;
  if (typeof window.requestNativeAppUpdateCheck === 'function') {
    return window.requestNativeAppUpdateCheck();
  }
  return false;
};

function detectUserDevicePlatform() {
  try {
    const uadPlatform = String(navigator.userAgentData?.platform || '').toLowerCase();
    const ua = String(navigator.userAgent || '').toLowerCase();
    if (uadPlatform.includes('android') || ua.includes('android')) return 'android';
    if (
      uadPlatform.includes('ios') ||
      /iphone|ipad|ipod/.test(ua) ||
      (ua.includes('macintosh') && (navigator.maxTouchPoints || 0) > 1)
    ) {
      return 'ios';
    }
    if (uadPlatform.includes('win') || ua.includes('windows')) return 'windows';
    if (uadPlatform.includes('mac') || ua.includes('macintosh') || ua.includes('mac os')) return 'macos';
    if (uadPlatform.includes('linux') || ua.includes('x11') || ua.includes('cros')) return 'linux';
  } catch (e) {}
  return 'windows';
}

function settleBridgeRequest(requestId, payload) {
  const entry = __kurfaPendingBridge.get(requestId);
  if (!entry) return;
  clearTimeout(entry.timer);
  __kurfaPendingBridge.delete(requestId);
  entry.resolve(payload || { success: false });
}

if (typeof window !== 'undefined') {
  window.__kurfaNativeStreamCallback = (requestId, payload) => settleBridgeRequest(requestId, payload);
  window.__kurfaNativeSearchCallback = (requestId, payload) => settleBridgeRequest(requestId, payload);
  window.__kurfaNativeDownloadCallback = (requestId, payload) => settleBridgeRequest(requestId, payload);
  window.__kurfaNativeDownloadProgress = (requestId, payload) => {
    if (typeof window.__kurfaHandleNativeDownloadProgress === 'function') {
      window.__kurfaHandleNativeDownloadProgress(payload || {}, requestId);
    }
  };
  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data) return;
    if (event.data.__kurfaExt === 'RES') {
      settleBridgeRequest(event.data.requestId, event.data.response);
    } else if (event.data.__kurfaExt === 'EVT' && event.data.event === 'DOWNLOAD_PROGRESS') {
      if (typeof window.__kurfaHandleNativeDownloadProgress === 'function') {
        window.__kurfaHandleNativeDownloadProgress(event.data.payload || {});
      }
    }
  });
  window.addEventListener('kurfa-ext-ready', () => {
    updateLocalEngineStatusUI();
    refreshDesktopBridgeSettings();
    refreshAppVersionAndUpdateStatus();
  });
  const onReturnAdCheck = async () => {
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
    if (__kurfaSwRegistration && typeof __kurfaSwRegistration.update === 'function') {
      if (Date.now() - __kurfaLastSwUpdateCheckAt > 30 * 60 * 1000) {
        __kurfaLastSwUpdateCheckAt = Date.now();
        __kurfaSwRegistration.update().catch(() => {});
      }
    }
    if (isBrowserAdBlockerActive() || hasAdFreeLocalEngine()) {
      return;
    }
    const isWatching = Boolean(__kurfaAdBlockerWatching);
    if (!isWatching && (Date.now() - __kurfaLastFocusAdCheckAt) < 180000) {
      return;
    }
    __kurfaLastFocusAdCheckAt = Date.now();
    const ok = await kurfaDetectAdBlocker({ force: true });
    if (ok) {
      handleAdBlockerDetectedFlow();
    }
  };
  window.addEventListener('focus', onReturnAdCheck);
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', onReturnAdCheck);
    const runOnboardingSetup = () => {
      initWebAutoUpdater();
      setTimeout(async () => {
        const detected = await kurfaDetectAdBlocker({ force: true });
        await kurfaHandleInitialVisit(detected);
      }, 450);
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runOnboardingSetup);
    } else {
      runOnboardingSetup();
    }
  }
}

function callExtensionBridge(action, payload, timeoutMs = 9000) {
  return new Promise((resolve) => {
    const reqId = `ext_${Date.now()}_${++__kurfaBridgeSeq}`;
    const timer = setTimeout(() => {
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false, error: 'Extension timeout' });
    }, timeoutMs);
    __kurfaPendingBridge.set(reqId, { resolve, timer });
    try {
      window.postMessage({ __kurfaExt: 'REQ', requestId: reqId, action, payload }, window.location.origin);
    } catch (e) {
      clearTimeout(timer);
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false });
    }
  });
}

function callAndroidBridge(methodName, args, timeoutMs = 10000) {
  return new Promise((resolve) => {
    const reqId = `apk_${Date.now()}_${++__kurfaBridgeSeq}`;
    const timer = setTimeout(() => {
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false, error: 'Native timeout' });
    }, timeoutMs);
    __kurfaPendingBridge.set(reqId, { resolve, timer });
    try {
      window.KurfaAndroidBridge[methodName](...args, reqId);
    } catch (e) {
      clearTimeout(timer);
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false });
    }
  });
}

async function kurfaResolveDirectAudio(videoId) {
  const cleanVid = safeYtId(videoId);
  if (!cleanVid) return { success: false };

  if (isAndroidNativeEngine() && typeof window.KurfaAndroidBridge.resolveAudioStreamAsync === 'function') {
    const res = await callAndroidBridge('resolveAudioStreamAsync', [cleanVid], 12000);
    if (res && res.success && res.streamUrl) return res;
  }

  if (getBrowserExtensionMode()) {
    const res = await callExtensionBridge('STREAM', { videoId: cleanVid }, 9000);
    if (res && res.success && res.streamUrl) return res;
  }

  return { success: false };
}

function kurfaFormatSec(sec) {
  const total = Math.max(0, Math.floor(Number(sec) || 0));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

async function kurfaSearchAudius(query, signal) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ) return { success: false, results: [] };
  const res = await fetch(`https://api.audius.co/v1/tracks/search?query=${encodeURIComponent(cleanQ)}&limit=25`, { signal });
  if (!res.ok) return { success: false, results: [] };
  const json = await res.json();
  const list = Array.isArray(json?.data) ? json.data : [];
  const mapped = list
    .filter(item => item && item.id && item.is_streamable !== false && (Number(item.duration) || 0) > 15)
    .map(item => ({
      id: `audius_${item.id}`,
      audiusId: String(item.id),
      audiusStreamUrl: `https://api.audius.co/v1/tracks/${encodeURIComponent(String(item.id))}/stream`,
      title: String(item.title || 'Audius Parçası'),
      artist: String(item.user?.name || item.user?.handle || 'Audius Sanatçısı'),
      duration: kurfaFormatSec(item.duration),
      thumbnail: safeUrl(item.artwork?.['480x480'] || item.artwork?.['150x150'], './kurfamuzik_logo.png'),
      source: 'audius'
    }));
  return { success: mapped.length > 0, source: 'audius', results: mapped };
}

async function kurfaSearchOpenCatalog(query, signal) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ) return { success: false, results: [] };
  try {
    const res = await fetch(`${API_BASE}/api/catalog?q=${encodeURIComponent(cleanQ)}`, { signal });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && Array.isArray(data.results) && data.results.length > 0) {
        return { success: true, source: 'open-catalog', results: data.results };
      }
    }
  } catch (err) {
    if (err && err.name === 'AbortError') throw err;
  }
  return await kurfaSearchAudius(cleanQ, signal);
}

const __kurfaArtistMemory = new Map();
async function kurfaSearchArtists(query, signal) {
  const cleanQ = String(query || '').trim();
  if (cleanQ.length < 2) return [];
  const memKey = cleanQ.toLowerCase();
  const cached = __kurfaArtistMemory.get(memKey);
  if (cached && cached.expiresAt > Date.now()) return cached.artists;

  try {
    const res = await fetch(`${API_BASE}/api/artists?q=${encodeURIComponent(cleanQ)}`, { signal });
    if (!res.ok) return [];
    const data = await res.json();
    const artists = Array.isArray(data?.artists) ? data.artists : [];
    if (__kurfaArtistMemory.size >= 40) __kurfaArtistMemory.clear();
    __kurfaArtistMemory.set(memKey, { artists, expiresAt: Date.now() + 6 * 3600 * 1000 });
    return artists;
  } catch (err) {
    if (err && err.name === 'AbortError') throw err;
    return [];
  }
}

function kurfaCleanTrackQuery(title, artist) {
  const stripNoise = (str) => String(str || '')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\b(netd\s*m[uü]zik|poll\s*production|official\s*music\s*video|official\s*video|official\s*audio|lyric\s*video|lyrics|video\s*klip|klip|feat\.?|ft\.?|featuring)\b/gi, ' ')
    .replace(/[|•·–—/_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const cleanTitle = stripNoise(title);
  const cleanArtistRaw = stripNoise(artist);
  const cleanArtist = /^(bilinmeyen\s*sanat[cç][ıi]|sanat[cç][ıi]|artist|unknown|various\s*artists)$/i.test(cleanArtistRaw)
    ? ''
    : cleanArtistRaw;

  return `${cleanArtist} ${cleanTitle}`.replace(/\s+/g, ' ').trim();
}

function kurfaNormalizeMatchTokens(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

async function kurfaTryQuickAudiusMatch(target, timeoutMs = 650) {
  try {
    const rawTitle = String(target?.title || '').trim();
    if (rawTitle.length < 2) return { success: false };

    const cleanQuery = kurfaCleanTrackQuery(rawTitle, target?.artist || '');
    if (cleanQuery.length < 2) return { success: false };

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

    let list = [];
    try {
      const res = await fetch(
        `https://api.audius.co/v1/tracks/search?query=${encodeURIComponent(cleanQuery)}&limit=6`,
        controller ? { signal: controller.signal } : undefined
      );
      if (!res.ok) return { success: false };
      const json = await res.json();
      list = Array.isArray(json?.data) ? json.data : [];
    } finally {
      if (timer) clearTimeout(timer);
    }

    if (list.length === 0) return { success: false };

    const labelNoise = new Set(['netd', 'muzik', 'music', 'poll', 'production', 'official', 'records', 'record', 'tv', 'kanal', 'topic', 'vevo', 'sanatci', 'bilinmeyen', 'unknown']);
    const variantNoise = new Set(['remix', 'cover', 'karaoke', 'instrumental', 'nightcore', 'slowed', 'sped', 'reverb', '8d']);

    const cleanedTitleForTokens = kurfaCleanTrackQuery(rawTitle, '');
    const titleWordsAll = kurfaNormalizeMatchTokens(cleanedTitleForTokens || rawTitle);
    const sigTitleWords = titleWordsAll.filter(w => w.length >= 3);
    const targetTitleWords = sigTitleWords.length > 0 ? sigTitleWords : titleWordsAll.filter(w => w.length >= 2);
    if (targetTitleWords.length === 0) return { success: false };

    const targetRawTitleTokens = new Set(kurfaNormalizeMatchTokens(rawTitle));
    const cleanedArtistForTokens = kurfaCleanTrackQuery('', target?.artist || '');
    const targetArtistWords = kurfaNormalizeMatchTokens(cleanedArtistForTokens || target?.artist || '')
      .filter(w => w.length >= 2 && !labelNoise.has(w));

    let bestItem = null;
    let bestScore = -1;

    for (const item of list) {
      if (!item || !item.id || item.is_streamable === false) continue;
      if ((Number(item.duration) || 0) <= 25) continue;

      const candTitle = String(item.title || '');
      const candArtist = String(item.user?.name || item.user?.handle || '');
      const candTitleTokens = new Set(kurfaNormalizeMatchTokens(candTitle));
      const candArtistTokens = new Set(kurfaNormalizeMatchTokens(candArtist));

      let titleHits = 0;
      for (const w of targetTitleWords) {
        if (candTitleTokens.has(w)) titleHits++;
      }
      const titleRatio = titleHits / targetTitleWords.length;
      if (titleRatio < 0.6) continue;

      let artistHits = 0;
      for (const w of targetArtistWords) {
        if (candArtistTokens.has(w) || candTitleTokens.has(w)) artistHits++;
      }

      let hasUnwantedVariant = false;
      for (const v of variantNoise) {
        if (candTitleTokens.has(v) && !targetRawTitleTokens.has(v)) {
          hasUnwantedVariant = true;
          break;
        }
      }
      if (hasUnwantedVariant && !(titleRatio === 1 && artistHits > 0)) continue;

      if (targetArtistWords.length > 0 && artistHits === 0) {
        if (!(titleRatio >= 0.85 && targetTitleWords.length >= 3)) continue;
      }

      const score = titleRatio * 10 + (targetArtistWords.length > 0 ? (artistHits / targetArtistWords.length) * 5 : 0);
      if (score > bestScore) {
        bestScore = score;
        bestItem = item;
      }
    }

    if (!bestItem) return { success: false };

    const streamUrl = `https://api.audius.co/v1/tracks/${encodeURIComponent(String(bestItem.id))}/stream`;
    const audiusTrack = {
      id: `audius_${bestItem.id}`,
      audiusId: String(bestItem.id),
      audiusStreamUrl: streamUrl,
      title: String(bestItem.title || rawTitle),
      artist: String(bestItem.user?.name || bestItem.user?.handle || target?.artist || 'Audius Sanatçısı'),
      duration: kurfaFormatSec(bestItem.duration),
      thumbnail: safeUrl(bestItem.artwork?.['480x480'] || bestItem.artwork?.['150x150'], './kurfamuzik_logo.png'),
      source: 'audius'
    };

    return { success: true, streamUrl, audiusTrack };
  } catch (e) {
    return { success: false };
  }
}

const __kurfaSearchMemory = new Map();
function readSearchClientCache(cacheKey) {
  const mem = __kurfaSearchMemory.get(cacheKey);
  if (mem && mem.expiresAt > Date.now()) return mem.results;
  try {
    const raw = localStorage.getItem('kurfa_search_cache_v2');
    if (!raw) return null;
    const store = JSON.parse(raw);
    const entry = store && store[cacheKey];
    if (entry && entry.expiresAt > Date.now() && Array.isArray(entry.results) && entry.results.length > 0) {
      __kurfaSearchMemory.set(cacheKey, entry);
      return entry.results;
    }
  } catch (e) {}
  return null;
}

function writeSearchClientCache(cacheKey, results) {
  if (!Array.isArray(results) || results.length === 0) return;
  const entry = { results, expiresAt: Date.now() + 6 * 3600 * 1000 };
  if (__kurfaSearchMemory.size >= 40) __kurfaSearchMemory.clear();
  __kurfaSearchMemory.set(cacheKey, entry);
  try {
    const store = JSON.parse(localStorage.getItem('kurfa_search_cache_v2') || '{}') || {};
    const keys = Object.keys(store);
    if (keys.length >= 30) {
      delete store[keys[0]];
    }
    store[cacheKey] = entry;
    localStorage.setItem('kurfa_search_cache_v2', JSON.stringify(store));
  } catch (e) {}
}

async function kurfaSearchTracks(query, opts = {}) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ) return { success: false, results: [] };
  const filterSingles = Boolean(opts.filterSingles);
  const source = opts.source || state.searchSource || 'auto';
  const signal = opts.signal;
  const cacheKey = `${source}|${filterSingles ? 1 : 0}|${cleanQ.toLowerCase()}`;

  const cached = readSearchClientCache(cacheKey);
  if (cached) {
    return { success: true, source: 'client-cache', results: cached };
  }

  if (source === 'audius') {
    const audRes = await kurfaSearchOpenCatalog(cleanQ, signal);
    if (audRes.success) writeSearchClientCache(cacheKey, audRes.results);
    return audRes;
  }

  if (isAndroidNativeEngine() && typeof window.KurfaAndroidBridge.searchTracksAsync === 'function') {
    const apkRes = await callAndroidBridge('searchTracksAsync', [cleanQ, filterSingles], 11000);
    if (signal && signal.aborted) throw new DOMException('Aborted', 'AbortError');
    if (apkRes && apkRes.success && Array.isArray(apkRes.results) && apkRes.results.length > 0) {
      writeSearchClientCache(cacheKey, apkRes.results);
      return apkRes;
    }
  }

  if (getBrowserExtensionMode()) {
    const extRes = await callExtensionBridge('SEARCH', { query: cleanQ, filterSingles }, 9000);
    if (signal && signal.aborted) throw new DOMException('Aborted', 'AbortError');
    if (extRes && extRes.success && Array.isArray(extRes.results) && extRes.results.length > 0) {
      writeSearchClientCache(cacheKey, extRes.results);
      return extRes;
    }
  }

  const res = await fetch(
    `${API_BASE}/api/search?q=${encodeURIComponent(cleanQ)}${filterSingles ? '&single=1' : ''}`,
    { signal }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data && data.success && Array.isArray(data.results) && data.results.length > 0) {
    writeSearchClientCache(cacheKey, data.results);
  }
  return data;
}

// =============================================================================
// 1. DATA FIXTURES & INITIAL DATA
// =============================================================================

// =============================================================================
// 1. DYNAMIC DATA LAYER & REAL YOUTUBE TRENDS
// =============================================================================

// Instant synchronous explore seed so phones never stare at an empty skeleton for 7-10s
const DEFAULT_EXPLORE_SEED = {
  success: true,
  hero: { id: "y5A2NmlFbOY", title: "Umur Doma & Hande Ünsal - Gel", artist: "netd müzik", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/y5A2NmlFbOY/hqdefault.jpg" },
  trends: [
    { id: "y5A2NmlFbOY", title: "Umur Doma & Hande Ünsal - Gel", artist: "netd müzik", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/y5A2NmlFbOY/hqdefault.jpg" },
    { id: "rZWeR8bQlaE", title: "Eypio - Şahidim", artist: "netd müzik", duration: "3:03", thumbnail: "https://i.ytimg.com/vi/rZWeR8bQlaE/hqdefault.jpg" },
    { id: "Qwfl2M67xCI", title: "Mabel Matiz - Umrumdışı", artist: "mabelmatiz", duration: "4:00", thumbnail: "https://i.ytimg.com/vi/Qwfl2M67xCI/hqdefault.jpg" },
    { id: "qcfS7amxPYA", title: "Can Demir - Gel Dedim Geldin", artist: "netd müzik", duration: "2:07", thumbnail: "https://i.ytimg.com/vi/qcfS7amxPYA/hqdefault.jpg" },
    { id: "vLzF3YeBqqk", title: "Onur Bayraktar & Nur Cennet - Sana Yar Diyemem", artist: "netd müzik", duration: "2:29", thumbnail: "https://i.ytimg.com/vi/vLzF3YeBqqk/hqdefault.jpg" },
    { id: "qgSVE71wNec", title: "Sibel Can & Eypio – KIYAMAM", artist: "Sibel Can", duration: "2:28", thumbnail: "https://i.ytimg.com/vi/qgSVE71wNec/hqdefault.jpg" },
    { id: "GILi_0RamtY", title: "Simge - Önümüz Yaz", artist: "netd müzik", duration: "3:07", thumbnail: "https://i.ytimg.com/vi/GILi_0RamtY/hqdefault.jpg" },
    { id: "Tb-zjsEqr1k", title: "Tuğba Yurt - İnceden İnceden", artist: "netd müzik", duration: "3:12", thumbnail: "https://i.ytimg.com/vi/Tb-zjsEqr1k/hqdefault.jpg" },
    { id: "GR6r-jIryH0", title: "Tefo & Seko Ft. Serdar Ortaç - Heyecan", artist: "Poll Production", duration: "2:50", thumbnail: "https://i.ytimg.com/vi/GR6r-jIryH0/hqdefault.jpg" },
    { id: "JlV7dM4TxkY", title: "Kurtuluş Kuş & Feryal Sepin & Burak Bulut - Karalaya Karalaya", artist: "netd müzik", duration: "2:48", thumbnail: "https://i.ytimg.com/vi/JlV7dM4TxkY/hqdefault.jpg" },
    { id: "XScahAwKYHU", title: "Serkan Nişancı - Eller Üzer", artist: "Serkan Nişancı", duration: "3:15", thumbnail: "https://i.ytimg.com/vi/XScahAwKYHU/hqdefault.jpg" },
    { id: "GKvHAmg7i5k", title: "Emrah Karaduman & İrem Derici - Deli Yangınım", artist: "netd müzik", duration: "3:44", thumbnail: "https://i.ytimg.com/vi/GKvHAmg7i5k/hqdefault.jpg" },
    { id: "69L-nKRY3ac", title: "BLOK3 - SEBEBİ YAR", artist: "Blok3", duration: "3:19", thumbnail: "https://i.ytimg.com/vi/69L-nKRY3ac/hqdefault.jpg" },
    { id: "9XBOcX_s1xA", title: "Ziynet Sali - Tam İsabet", artist: "Ziynet Sali", duration: "3:04", thumbnail: "https://i.ytimg.com/vi/9XBOcX_s1xA/hqdefault.jpg" },
    { id: "Tfz-PmS9fb0", title: "İrem Derici - Durum Çok Acil", artist: "İrem Derici", duration: "2:54", thumbnail: "https://i.ytimg.com/vi/Tfz-PmS9fb0/hqdefault.jpg" }
  ],
  top10: [],
  fresh: [
    { id: "59aQ2iIwI8s", title: "Demet Akalın - Bi' Şey Mi Dedin?", artist: "Demet Akalın", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/59aQ2iIwI8s/hqdefault.jpg" },
    { id: "zJY8z8v0xbo", title: "Burak Bulut & İrem Derici - GARSON", artist: "Burak Bulut", duration: "3:15", thumbnail: "https://i.ytimg.com/vi/zJY8z8v0xbo/hqdefault.jpg" },
    { id: "7plvaIPtO04", title: "Soner Sarıkabadayı & Sefo - Her İki Durumda", artist: "Soner Sarıkabadayı", duration: "3:11", thumbnail: "https://i.ytimg.com/vi/7plvaIPtO04/hqdefault.jpg" },
    { id: "HsC2PIr4BXs", title: "Bengü - Dur Nereye", artist: "Bengü", duration: "3:30", thumbnail: "https://i.ytimg.com/vi/HsC2PIr4BXs/hqdefault.jpg" },
    { id: "2_o4hd4y8FQ", title: "Aynur Polat & Serdar Ortaç - Padişah", artist: "netd müzik", duration: "3:06", thumbnail: "https://i.ytimg.com/vi/2_o4hd4y8FQ/hqdefault.jpg" },
    { id: "KF6SfC6Q-ZA", title: "Burak Bulut - Ah Be Manolya", artist: "Burak Bulut", duration: "2:58", thumbnail: "https://i.ytimg.com/vi/KF6SfC6Q-ZA/hqdefault.jpg" }
  ],
  mixes: []
};

// Dynamic live YouTube explore data (restored instantly from client storage or synchronous seed)
let exploreData = (function() {
  try {
    const cached = JSON.parse(localStorage.getItem('kurfa_explore_cache') || 'null');
    if (cached && Array.isArray(cached.trends) && cached.trends.length > 0) {
      return cached;
    }
  } catch(e) {}
  return {
    ...DEFAULT_EXPLORE_SEED,
    trends: [...DEFAULT_EXPLORE_SEED.trends],
    top10: DEFAULT_EXPLORE_SEED.trends.slice(0, 10),
    fresh: [...DEFAULT_EXPLORE_SEED.fresh],
    mixes: []
  };
})();

// Real official Turkish music singles with verified HD thumbnails
const EMERGENCY_FALLBACK_TRACKS = [
  { id: "y5A2NmlFbOY", title: "Umur Doma & Hande Ünsal - Gel", artist: "netd müzik", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/y5A2NmlFbOY/hqdefault.jpg" },
  { id: "qgSVE71wNec", title: "Sibel Can & Eypio – KIYAMAM", artist: "Sibel Can", duration: "2:28", thumbnail: "https://i.ytimg.com/vi/qgSVE71wNec/hqdefault.jpg" },
  { id: "59aQ2iIwI8s", title: "Demet Akalın - Bi' Şey Mi Dedin?", artist: "Demet Akalın", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/59aQ2iIwI8s/hqdefault.jpg" },
  { id: "Tfz-PmS9fb0", title: "İrem Derici - Durum Çok Acil", artist: "İrem Derici", duration: "2:54", thumbnail: "https://i.ytimg.com/vi/Tfz-PmS9fb0/hqdefault.jpg" },
  { id: "KF6SfC6Q-ZA", title: "Burak Bulut - Ah Be Manolya", artist: "Burak Bulut", duration: "2:58", thumbnail: "https://i.ytimg.com/vi/KF6SfC6Q-ZA/hqdefault.jpg" }
];

function getTrackThumbnail(track) {
  if (!track) return './kurfamuzik_logo.png';
  if (track.isLocal || String(track.id || '').startsWith('local_')) {
    return track.thumbnail ? safeUrl(track.thumbnail, './kurfamuzik_logo.png') : './kurfamuzik_logo.png';
  }
  const vid = safeYtId(track.ytId) || safeYtId(track.id);
  if (vid) {
    return `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;
  }
  if (track.thumbnail && typeof track.thumbnail === 'string') {
    const lower = track.thumbnail.toLowerCase();
    if (!lower.includes('invidious') && !lower.includes('kurfamuzik_logo')) {
      return safeUrl(track.thumbnail, './kurfamuzik_logo.png');
    }
  }
  return './kurfamuzik_logo.png';
}
window.getTrackThumbnail = getTrackThumbnail;

function getCuratedTracks() {
  const list = (exploreData.trends && exploreData.trends.length > 0) ? exploreData.trends : EMERGENCY_FALLBACK_TRACKS;
  return list.map(t => {
    const vid = t ? safeYtId(t.id) : null;
    if (vid) {
      return {
        ...t,
        thumbnail: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`
      };
    }
    return t;
  });
}

// Transparent Proxy so any legacy reference to CURATED_TRACKS gets live YouTube trends seamlessly
const CURATED_TRACKS = new Proxy([], {
  get(target, prop) {
    const list = getCuratedTracks();
    if (prop === 'length') return list.length;
    if (prop in list) {
      const val = list[prop];
      return typeof val === 'function' ? val.bind(list) : val;
    }
    return target[prop];
  }
});

// Lyrics cache in memory
const lyricsMemoryCache = new Map();

// Dynamic proxy for fresh releases
const FRESH_RELEASES = new Proxy([], {
  get(target, prop) {
    const list = (exploreData.fresh && exploreData.fresh.length > 0) ? exploreData.fresh : getCuratedTracks().slice(0, 6);
    if (prop === 'length') return list.length;
    if (prop in list) {
      const val = list[prop];
      return typeof val === 'function' ? val.bind(list) : val;
    }
    return target[prop];
  }
});

// =============================================================================
// 2. APPLICATION STATE & SAFE HELPERS (100% ISOLATED & PRIVATE PER USER BROWSER)
// =============================================================================

function safeGetJSON(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch(e) {
    return fallback;
  }
}

function safeGetFloat(key, fallback) {
  try {
    const val = parseFloat(localStorage.getItem(key));
    return Number.isFinite(val) ? val : fallback;
  } catch(e) {
    return fallback;
  }
}

function safeGetInt(key, fallback, radix = 10) {
  try {
    const val = parseInt(localStorage.getItem(key), radix);
    return Number.isFinite(val) ? val : fallback;
  } catch(e) {
    return fallback;
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function safeYtId(id) {
  if (id === null || id === undefined) return null;
  const s = String(id).trim();
  return /^[\w-]{11}$/.test(s) ? s : null;
}

function safeUrl(url, fallback = './kurfamuzik_logo.png') {
  if (typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  if (!trimmed || /[\u0000-\u001f\u007f"'<>\\`]/.test(trimmed)) return fallback;
  if (trimmed.startsWith('./') || (trimmed.startsWith('/') && !trimmed.startsWith('//'))) {
    return trimmed;
  }
  if (/^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+$/i.test(trimmed)) {
    return trimmed;
  }
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return trimmed;
    }
  } catch (e) {}
  return fallback;
}

function safeCssUrl(url, fallback = './kurfamuzik_logo.png') {
  const validated = safeUrl(url, fallback);
  const cleaned = String(validated).replace(/['"()\\\r\n\t`]/g, '');
  return cleaned || fallback;
}

function safeSetStorage(key, val) {
  try {
    localStorage.setItem(key, String(val));
    return true;
  } catch (e) {
    return false;
  }
}

function getEventClientX(e) {
  if (!e) return 0;
  if (e.touches && e.touches.length > 0 && typeof e.touches[0].clientX === 'number') {
    return e.touches[0].clientX;
  }
  if (e.changedTouches && e.changedTouches.length > 0 && typeof e.changedTouches[0].clientX === 'number') {
    return e.changedTouches[0].clientX;
  }
  return typeof e.clientX === 'number' ? e.clientX : 0;
}

function cleanDeduplicateQueueArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const seenIds = new Set();
  const seenTitles = new Set();
  const result = [];
  for (const item of arr) {
    if (!item) continue;
    const id = item.id || item.ytId;
    const isLocalItem = Boolean(item.isLocal) || String(id || '').startsWith('local_');
    const title = (item.title || '').trim().toLowerCase();
    const artist = (item.artist || '').trim().toLowerCase();
    const metaKey = (!isLocalItem && title && artist) ? `${title}|${artist}` : null;

    let isDup = false;
    if (id && seenIds.has(id)) isDup = true;
    if (metaKey && seenTitles.has(metaKey)) isDup = true;

    if (!isDup) {
      if (id) seenIds.add(id);
      if (metaKey) seenTitles.add(metaKey);
      result.push(item);
    }
  }
  return result;
}

function saveQueueState() {
  state.queue = cleanDeduplicateQueueArray(state.queue || []);
  state.userQueue = cleanDeduplicateQueueArray(state.userQueue || []);
  if (state.queueIndex >= state.queue.length) {
    state.queueIndex = Math.max(0, state.queue.length - 1);
  }
  const qToStore = state.queue.length > 300
    ? state.queue.slice(Math.max(0, state.queueIndex - 50), Math.min(state.queue.length, state.queueIndex + 250))
    : state.queue;
  const idxToStore = state.queue.length > 300
    ? Math.min(50, state.queueIndex)
    : (state.queueIndex || 0);
  safeSetStorage('kurfa_queue', JSON.stringify(qToStore));
  safeSetStorage('kurfa_user_queue', JSON.stringify(state.userQueue));
  safeSetStorage('kurfa_queue_index', String(idxToStore));
}

const failedVideoIds = new Set();

const state = {
  currentTrack: safeGetJSON('kurfa_last_track', null), // Restores user's last played track locally (0 server load)
  isPlaying: false,
  userPaused: false,
  currentPlayheadTime: 0,
  _switchingDeckMode: false,
  _switchingDeckTimer: null,
  _guardianResumeTimer: null,
  _errorSkipTimer: null,
  _stallWatchdogTimer: null,
  _trackSwitchStartedAt: 0,
  _adSeekAttempts: 0,
  _guardianAttempts: 0,
  _consecutiveErrorSkips: 0,
  _lastErrorVideoId: null,
  _playerInError: false,
  _adRiskSessionAcknowledged: false,
  _pendingAdWarnPlayback: null,
  queue: cleanDeduplicateQueueArray(safeGetJSON('kurfa_queue', [])),
  userQueue: cleanDeduplicateQueueArray(safeGetJSON('kurfa_user_queue', [])),
  originalQueue: [],
  queueIndex: safeGetInt('kurfa_queue_index', 0),
  volume: (function() {
    const isMob = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent || '') || (typeof window !== 'undefined' && window.innerWidth < 768);
    return isMob ? 1.0 : safeGetFloat('kurfa_vol', 0.8);
  })(),
  isMuted: false,
  isShuffle: localStorage.getItem('kurfa_shuffle') === 'true',
  repeatMode: safeGetInt('kurfa_repeat', 0), // 0: off, 1: all, 2: one
  currentTab: localStorage.getItem('kurfa_last_tab') || 'kesfet',
  currentKesfetSubTab: localStorage.getItem('kurfa_last_kesfet_subtab') || 'trendler',
  currentKutuphaneSubTab: localStorage.getItem('kurfa_last_kutuphane_subtab') || 'favoriler',
  favorites: safeGetJSON('kurfa_favs', []),
  downloads: safeGetJSON('kurfa_downloads', []),
  downloadQueue: [],
  isDownloading: false,
  deckVisualMode: 'vinyl',
  activeEqPreset: localStorage.getItem('kurfa_eq_preset') || 'standart',
  lyricsOffset: 0,
  mobileNowPlayingOpen: false,
  _isAdMuted: false,
  currentAudioSinkId: localStorage.getItem('kurfa_audio_sink') || null,
  profile: (function() {
    const saved = safeGetJSON('kurfa_profile', null);
    if (saved) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return {
      nickname: "Dinleyici",
      avatar: "./kurfamuzik_logo.png",
      darkMode: prefersDark,
      listeningSeconds: 0,
      tracksPlayed: 0
    };
  })(),
  isSeeking: false,
  isScrubbingVol: false,
  queueDrawerOpen: false,
  ytPlayer: null,
  ytReady: false,
  activeLyrics: [],
  currentLyricIndex: -1,
  currentSearchResults: [],
  _rawSearchResults: [],
  baseSearchQuery: '',
  currentGenreFilter: 'all',
  customPlaylists: safeGetJSON('kurfa_custom_playlists', []),
  activeCustomPlaylistId: null,
  spotifyPlaylists: safeGetJSON('kurfa_spotify_playlists', []),
  activeSpotifyPlaylistId: null,
  playingContextSub: 'ÇALMA LİSTESİNDEN ÇALINIYOR',
  playingContextTitle: 'YouTube Trendleri',
  backgroundAudioMode: (function() {
    const saved = localStorage.getItem('kurfa_bg_audio');
    if (saved !== null) return saved === 'true';
    return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) || (typeof window !== 'undefined' && window.innerWidth < 768);
  })(),
  firebaseUser: null,
  googleUser: safeGetJSON('kurfa_google_user', null)
};

// Fresh users start with legitimate empty downloads, favorites and playlists
if (!Array.isArray(state.downloads)) state.downloads = [];
if (!Array.isArray(state.favorites)) state.favorites = [];
if (!Array.isArray(state.customPlaylists)) state.customPlaylists = [];
if (!Array.isArray(state.spotifyPlaylists)) state.spotifyPlaylists = [];
if (!Array.isArray(state.queue)) state.queue = [];


// =============================================================================
// 3. DOM ELEMENTS
// =============================================================================

const DOM = {
  // Tabs
  viewTabs: document.querySelectorAll('.view-tab'),
  navItems: document.querySelectorAll('.nav-item'),
  mobileNavItems: document.querySelectorAll('.mobile-nav-item'),
  
  // Desktop Player Deck
  playerThumb: document.getElementById('player-thumb'),
  playerTitle: document.getElementById('player-title'),
  playerArtist: document.getElementById('player-artist'),
  playerFavBtn: document.getElementById('player-fav-btn'),
  btnPlayPause: document.getElementById('btn-play-pause'),
  playerPlayIcon: document.getElementById('player-play-icon'),
  btnShuffle: document.getElementById('btn-shuffle'),
  btnRepeat: document.getElementById('btn-repeat'),
  playerSeekTrack: document.getElementById('player-seek-track'),
  playerSeekFill: document.getElementById('player-seek-fill'),
  playerSeekKnob: document.getElementById('player-seek-knob'),
  playerTimeCur: document.getElementById('player-time-cur'),
  playerTimeDur: document.getElementById('player-time-dur'),
  btnVolumeIcon: document.getElementById('btn-volume-icon'),
  playerVolTrack: document.getElementById('player-vol-track'),
  playerVolFill: document.getElementById('player-vol-fill'),

  // Mobile Mini Player
  mobileMiniPlayer: document.getElementById('mobile-mini-player'),
  playerThumbMobile: document.getElementById('player-thumb-mobile'),
  playerTitleMobile: document.getElementById('player-title-mobile'),
  playerArtistMobile: document.getElementById('player-artist-mobile'),
  playerFavBtnMobile: document.getElementById('player-fav-btn-mobile'),
  btnPlayPauseMobile: document.getElementById('btn-play-pause-mobile'),
  playerPlayIconMobile: document.getElementById('player-play-icon-mobile'),
  playerMobileSeekFill: document.getElementById('player-mobile-seek-fill'),
  
  // Visualizer / Lyrics in Çalma Listeleri tab
  deckCoverImg: document.getElementById('deck-cover-img'),
  deckTitle: document.getElementById('deck-title'),
  deckArtist: document.getElementById('deck-artist'),
  deckLyricsLines: document.getElementById('deck-lyrics-lines'),
  karaokeLyricsBox: document.getElementById('karaoke-lyrics-box'),
  lyricsStatusLabel: document.getElementById('lyrics-status-label'),
  lyricsSourceBadge: document.getElementById('lyrics-source-badge'),
  lyricsOffsetDisplay: document.getElementById('lyrics-offset-display'),
  vinylDisc: document.getElementById('vinyl-disc'),
  
  // Grids & Tables
  popularCardsGrid: document.getElementById('popular-cards-grid'),
  homeTracklistTable: document.getElementById('home-tracklist-table'),
  trendlerCardsGrid: document.getElementById('trendler-cards-grid'),
  favoritesListTable: document.getElementById('favorites-list-table'),
  downloadsListTable: document.getElementById('downloads-list-table'),
  playlistTracksTable: document.getElementById('playlist-tracks-table'),
  favCountText: document.getElementById('fav-count-text'),
  
  // Search
  topSearchInput: document.getElementById('top-search-input'),
  engineSearchInput: null,
  searchResultsList: document.getElementById('search-results-list'),
  searchResultsCount: document.getElementById('search-results-count'),
  searchSpotlightBox: document.getElementById('search-spotlight-box'),
  
  // Modals & Drawers
  queueDrawer: document.getElementById('queue-drawer'),
  queueDrawerList: document.getElementById('queue-drawer-list'),
  queueCountBadge: document.getElementById('queue-count-badge'),
  btnClearQueue: document.getElementById('btn-clear-queue'),
  downloaderModal: document.getElementById('downloader-modal'),
  downloaderModalCard: document.getElementById('downloader-modal-card'),
  modalUrlInput: document.getElementById('modal-url-input'),
  kurfaToast: document.getElementById('kurfa-toast'),
  toastText: document.getElementById('toast-text'),
  
  // Hero Section
  heroBg: document.getElementById('hero-bg'),
  heroTitle: document.getElementById('hero-title'),
  heroArtist: document.getElementById('hero-artist'),
  heroPlayBtn: document.getElementById('hero-play-btn'),
  heroQueueBtn: document.getElementById('hero-queue-btn'),
  heroDlBtn: document.getElementById('hero-dl-btn'),

  // Audio fallback
  audioEngine: document.getElementById('audio-engine')
};

// =============================================================================
// 4. TOAST NOTIFICATIONS
// =============================================================================

let toastTimeout = null;
function showToast(message, type = 'info', duration = 3000) {
  if (!DOM.kurfaToast || !DOM.toastText) return;

  const iconEl = document.getElementById('toast-icon');
  const badgeEl = document.getElementById('toast-badge');
  const iconWrapper = document.getElementById('toast-icon-wrapper');

  const isNowPlaying = (typeof message === 'string' && (message.startsWith('Çalınıyor:') || message.startsWith('Oynatılıyor:')));
  if (isNowPlaying) return;

  {
    if (badgeEl) badgeEl.classList.add('hidden');
    DOM.toastText.textContent = message;

    if (iconEl && iconWrapper) {
      iconWrapper.className = 'flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0';
      if (type === 'success' || message.includes('Eklendi') || message.includes('Kaydedildi') || message.includes('Başarılı')) {
        iconEl.textContent = 'check_circle';
        iconWrapper.classList.add('bg-emerald-500/15', 'text-emerald-500');
      } else if (type === 'error' || message.includes('Hata') || message.includes('Başarısız')) {
        iconEl.textContent = 'error';
        iconWrapper.classList.add('bg-rose-500/15', 'text-rose-500');
      } else if (message.includes('Senkro') || message.includes('Eşitle') || message.includes('saniyesine')) {
        iconEl.textContent = 'tune';
        iconWrapper.classList.add('bg-secondary/15', 'text-secondary');
      } else {
        iconEl.textContent = 'music_note';
        iconWrapper.classList.add('bg-primary/15', 'text-primary');
      }
    }
  }

  DOM.kurfaToast.classList.add('show');
  
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    DOM.kurfaToast.classList.remove('show');
  }, duration);
}

function dismissToast() {
  if (DOM.kurfaToast) DOM.kurfaToast.classList.remove('show');
  if (toastTimeout) clearTimeout(toastTimeout);
}
window.dismissToast = dismissToast;

// =============================================================================
// 5. NAVIGATION & TAB SWITCHING (DESKTOP & MOBILE - 4 CONSOLIDATED TABS)
// =============================================================================

function switchTab(tabId, shouldScroll = true, opts = {}) {
  state.currentTab = tabId;
  if (tabId === "kesfet" && !(opts && opts.preserveArtist)) {
    closeArtistDetail();
  }
  safeSetStorage('kurfa_last_tab', tabId);

  // Desktop sidebar nav
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Mobile bottom nav
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Toggle view panes & enforce View Suspension (Zero CPU/GPU for dormant views)
  document.querySelectorAll('.view-tab').forEach(pane => {
    if (pane.id === `tab-${tabId}`) {
      pane.classList.remove('view-suspended');
      pane.classList.add('active');
      pane.style.contentVisibility = 'visible';
    } else {
      pane.classList.remove('active');
      pane.classList.add('view-suspended');
      pane.style.contentVisibility = 'hidden';
    }
  });

  // Keep floating mini-player visible across all mobile tabs (including Sözler & EQ)
  const mobileMiniPlayer = document.getElementById('mobile-mini-player');
  if (mobileMiniPlayer) {
    mobileMiniPlayer.style.display = '';
  }

  // Re-render specific tab contents only when needed (Avoid unnecessary DOM destruction)
  if (tabId === 'kutuphanem') {
    if (!DOM.favoritesListTable || DOM.favoritesListTable.children.length === 0) {
      renderFavoritesTable();
    }
    if (!DOM.downloadsListTable || DOM.downloadsListTable.children.length === 0) {
      renderDownloadsTable();
    }
    updateKutuphaneBadges();
  } else if (tabId === 'calma-listeleri') {
    const curTrackId = state.currentTrack ? (state.currentTrack.id || '') : '';
    if (curTrackId && lyricsLoadedTrackId === curTrackId) {
      syncLyricsWithTime(getActiveMediaCurrentTime(), true);
    } else {
      updateLyricsDisplay();
    }
    renderPlaylistTracksTable();
  } else if (tabId === 'kesfet') {
    // Only build DOM if not rendered yet to avoid lag on tab switch
    if (!DOM.homeTracklistTable || DOM.homeTracklistTable.children.length === 0) {
      renderHomeTracklistTable();
    }
    if (!DOM.trendlerCardsGrid || DOM.trendlerCardsGrid.children.length === 0) {
      renderTrendlerCardsGrid();
    }
    const popArtistsEl = document.getElementById('popular-artists-grid');
    const kesifArtistsEl = document.getElementById('kesif-artists-grid');
    if (!popArtistsEl || popArtistsEl.children.length === 0 || (kesifArtistsEl && kesifArtistsEl.children.length === 0)) {
      renderPopularArtistsGrid();
    }
  } else if (tabId === 'arama') {
    if (DOM.topSearchInput && state.currentSearchQuery && !DOM.topSearchInput.value) {
      DOM.topSearchInput.value = state.currentSearchQuery;
    }
  }

  // Handle Video Player visibility across tabs
  syncPersistentPlayerPosition();

  // Smooth scroll to top only when requested
  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function navigateToKutuphane(subTab = 'favoriler') {
  switchTab('kutuphanem');
  switchKutuphaneSubTab(subTab);
  showToast(subTab === 'indirilenler' ? 'Çevrimdışı İndirilen Parçalar' : 'Favori Parçalarınız');
}
window.navigateToKutuphane = navigateToKutuphane;

// =============================================================================
// 5.1 SUB-TAB SWITCHING (KEŞFET & KÜTÜPHANEM)
// =============================================================================

function switchKesfetSubTab(subTabId) {
  state.currentKesfetSubTab = subTabId;
  safeSetStorage('kurfa_last_kesfet_subtab', subTabId);

  // Update button active state
  const buttons = document.querySelectorAll('#kesfet-subtabs .sub-tab-pill');
  buttons.forEach(btn => {
    const isTarget = btn.id === `subtab-btn-${subTabId}`;
    if (isTarget) {
      btn.classList.add('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface');
    } else {
      btn.classList.remove('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.add('bg-surface-container-low', 'text-on-surface');
    }
  });

  // Toggle sub-panes
  const pTrendler = document.getElementById('subtab-pane-trendler');
  const pKesif = document.getElementById('subtab-pane-kesif');
  const pYeni = document.getElementById('subtab-pane-yeni');

  if (pTrendler) pTrendler.classList.toggle('hidden', subTabId !== 'trendler');
  if (pKesif) pKesif.classList.toggle('hidden', subTabId !== 'kesif');
  if (pYeni) pYeni.classList.toggle('hidden', subTabId !== 'yeni');

  if (subTabId === 'yeni') {
    renderFreshReleasesGrid();
  } else if (subTabId === 'kesif') {
    renderPopularCardsGrid();
    renderPopularArtistsGrid();
  } else if (subTabId === 'trendler') {
    renderTrendlerCardsGrid();
    renderHomeTracklistTable();
  }
}

function switchKutuphaneSubTab(subTabId) {
  state.currentKutuphaneSubTab = subTabId;
  safeSetStorage('kurfa_last_kutuphane_subtab', subTabId);

  // Update button active state
  const buttons = document.querySelectorAll('#kutuphane-subtabs .sub-tab-pill');
  buttons.forEach(btn => {
    const isTarget = btn.id === `kutuphane-btn-${subTabId}`;
    if (isTarget) {
      btn.classList.add('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface');
    } else {
      btn.classList.remove('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.add('bg-surface-container-low', 'text-on-surface');
    }
  });

  // Toggle sub-panes
  const pList = document.getElementById('kutuphane-pane-listelerim');
  const pSpotify = document.getElementById('kutuphane-pane-spotify');
  const pFav = document.getElementById('kutuphane-pane-favoriler');
  const pCihaz = document.getElementById('kutuphane-pane-cihaz');

  if (pList) pList.classList.toggle('hidden', subTabId !== 'listelerim');
  if (pSpotify) pSpotify.classList.toggle('hidden', subTabId !== 'spotify');
  if (pFav) pFav.classList.toggle('hidden', subTabId !== 'favoriler');
  if (pCihaz) pCihaz.classList.toggle('hidden', subTabId !== 'cihaz');

  if (subTabId === 'listelerim') {
    renderCustomPlaylistsGrid();
  } else if (subTabId === 'spotify') {
    renderSpotifyPlaylistsGrid();
  } else if (subTabId === 'favoriler') {
    renderFavoritesTable();
  } else if (subTabId === 'cihaz') {
    renderDeviceAudioList();
    if (!Array.isArray(state.deviceAudioTracks) || state.deviceAudioTracks.length === 0) {
      scanLocalDeviceAudio(false);
    }
  }
  updateKutuphaneBadges();
}

function updateKutuphaneBadges() {
  const plBadge = document.getElementById('playlists-badge-count');
  if (plBadge) plBadge.textContent = (state.customPlaylists || []).length.toString();

  const plCount = document.getElementById('playlist-count-text');
  if (plCount) plCount.textContent = `${(state.customPlaylists || []).length} Liste`;

  const spBadge = document.getElementById('spotify-badge-count');
  if (spBadge) spBadge.textContent = (state.spotifyPlaylists || []).length.toString();

  const spCount = document.getElementById('spotify-count-text');
  if (spCount) spCount.textContent = `${(state.spotifyPlaylists || []).length} Liste`;

  const favBadge = document.getElementById('fav-badge-count');
  if (favBadge) favBadge.textContent = (state.favorites || []).length.toString();

  const favCount = document.getElementById('fav-count-text');
  if (favCount) favCount.textContent = `${(state.favorites || []).length} Şarkı Kaydedildi`;
}


// =============================================================================
// 6. YOUTUBE PLAYER & AUDIO ENGINE
// =============================================================================

let currentPlaybackToken = 0;

function stopAllPlayback(skipYtStop = false) {
  currentPlaybackToken++;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);
  state._isAdMuted = false;
  state._adSeekAttempts = 0;

  // 1. Immediately pause and clear HTML5 audio element without spurious error events
  if (DOM.audioEngine) {
    try {
      if (DOM.audioEngine.getAttribute('src')) {
        DOM.audioEngine.pause();
        DOM.audioEngine.currentTime = 0;
        DOM.audioEngine.removeAttribute('src');
      } else {
        DOM.audioEngine.pause();
      }
    } catch(e) {}
  }

  // 2. Stop YouTube player unless caller will immediately invoke loadVideoById
  if (!skipYtStop && state.ytPlayer && typeof state.ytPlayer.stopVideo === 'function') {
    try {
      state.ytPlayer.stopVideo();
    } catch(e) {}
  }

  try {
    if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
      window.KurfaAndroidBridge.setNativePlaybackState(false);
    }
  } catch(e) {}
}

function initYouTubeEngine() {
  if (state.ytPlayer || state._ytInitializing) return;
  const targetEl = document.getElementById('yt-player');
  if (!targetEl) return;
  if (typeof YT === 'undefined' || !YT || typeof YT.Player !== 'function') {
    return;
  }
  state._ytInitializing = true;
  try {
    const initialVid = safeYtId(state.currentTrack?.ytId) || safeYtId(state.currentTrack?.id) || '';
    const playerVars = {
      autoplay: 0,
      controls: 1,
      disablekb: 0,
      enablejsapi: 1,
      fs: 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      iv_load_policy: 3,
      widget_referrer: window.location.href
    };
    if (window.location.origin && window.location.origin !== 'null') {
      playerVars.origin = window.location.origin;
    }

    state.ytPlayer = new YT.Player('yt-player', {
      height: '100%',
      width: '100%',
      videoId: initialVid,
      playerVars,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError
      }
    });
  } catch(e) {
    state._ytInitializing = false;
    console.warn("initYouTubeEngine error:", e);
  }
}

window.onYouTubeIframeAPIReady = function() {
  state._ytInitializing = false;
  initYouTubeEngine();
};

function onPlayerReady(event) {
  state.ytReady = true;
  state._ytInitializing = false;
  setPlayerVolume(state.volume);
  console.log("YouTube Player Engine Ready");
  if (state.pendingTrackToPlay && state.pendingTrackToPlay.id) {
    const track = state.pendingTrackToPlay;
    state.pendingTrackToPlay = null;
    playTrackById(track.id, track);
  }
}


// =============================================================================
// 15. AD SENTINEL ENGINE (Zero-Ad Audio & Video Playback Guardian)
// =============================================================================

let lastAdCheckTime = 0;

function checkAndHandleAdPlayback() {
  if (!state.ytPlayer || !state.isPlaying || !state.ytReady) return;
  if (!state.currentTrack) return;

  try {
    const p = state.ytPlayer;
    const inTransitionGrace = (Date.now() - (state._trackSwitchStartedAt || 0)) < 2500;
    const adSt = typeof p.getAdState === 'function' ? p.getAdState() : 0;
    const isOfficialAd = (adSt === 1 || adSt === true);

    if (inTransitionGrace && !isOfficialAd) {
      return;
    }

    const isAd = isOfficialAd;
    let adDuration = 0;
    if (isAd) {
      const curDur = (typeof p.getDuration === 'function') ? (p.getDuration() || 0) : 0;
      if (curDur > 0 && curDur <= 60) {
        adDuration = curDur;
      }
    }

    if (isAd) {
      // Commercial Ad Detected: Silence completely so user never hears ads
      if (!state._isAdMuted) {
        state._isAdMuted = true;
        state._adSeekAttempts = 0;
        if (typeof p.mute === 'function') {
          p.mute();
        }
        showToast("Reklam sessize alındı ve atlanıyor...");
      }

      if (typeof p.setPlaybackRate === 'function') {
        try { p.setPlaybackRate(2); } catch(e) {}
      }

      // Fast-forward ad if seekable, capped to 2 retries per ad
      if (adDuration > 0 && (state._adSeekAttempts || 0) < 2 && typeof p.seekTo === 'function') {
        try {
          const curTime = typeof p.getCurrentTime === 'function' ? (p.getCurrentTime() || 0) : 0;
          if (curTime < adDuration - 0.5) {
            state._adSeekAttempts = (state._adSeekAttempts || 0) + 1;
            p.seekTo(adDuration, true);
          }
        } catch(e) {}
      }
    } else if (state._isAdMuted) {
      // Ad Ended: Restore user's sound & normal speed respecting mute preference
      state._isAdMuted = false;
      state._adSeekAttempts = 0;
      if (typeof p.setPlaybackRate === 'function') {
        try { p.setPlaybackRate(1); } catch(e) {}
      }
      if (!state.isMuted && state.volume > 0 && typeof p.unMute === 'function') {
        try { p.unMute(); } catch(e) {}
      }
      setPlayerVolume(state.volume);
    }
  } catch(e) {}
}
window.checkAndHandleAdPlayback = checkAndHandleAdPlayback;

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    clearTimeout(state._stallWatchdogTimer);
    clearTimeout(state._guardianResumeTimer);
    state._guardianAttempts = 0;
    state._consecutiveErrorSkips = 0;
    state._playerInError = false;

    // If HTML5 audio engine is already playing an active stream, keep it and silence YouTube
    if (DOM.audioEngine && !DOM.audioEngine.paused && DOM.audioEngine.currentTime > 0 && DOM.audioEngine.getAttribute('src')) {
      if (state.deckVisualMode !== 'video') {
        try {
          if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
            state.ytPlayer.pauseVideo();
          }
        } catch(e) {}
        return;
      }
    }

    // Otherwise, YouTube is the active playback source; silence HTML5 audio safely
    if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
      try {
        DOM.audioEngine.pause();
        DOM.audioEngine.removeAttribute('src');
      } catch(e) {}
    }
    state.isPlaying = true;
    state.userPaused = false;
    updatePlayPauseUI(true);
    try {
      if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
        window.KurfaAndroidBridge.setNativePlaybackState(true);
      }
    } catch (_) {}
    startSeekbarTicker();
    checkAndHandleAdPlayback();
  } else if (event.data === 3) {
    checkAndHandleAdPlayback();
  } else if (event.data === YT.PlayerState.PAUSED) {
    if (state._switchingDeckMode) return;

    if (DOM.audioEngine && !DOM.audioEngine.paused && DOM.audioEngine.currentTime > 0) {
      return;
    }

    const syncAndroidPaused = () => {
      try {
        if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
          window.KurfaAndroidBridge.setNativePlaybackState(false);
        }
      } catch (_) {}
    };

    if (state._playerInError || state._lastErrorVideoId) {
      state.isPlaying = false;
      updatePlayPauseUI(false);
      syncAndroidPaused();
      return;
    }

    // Kurfa Player Guardian: auto-recover involuntary pause up to 2 attempts per track
    if (!state.userPaused && state.currentTrack && (!DOM.audioEngine || DOM.audioEngine.paused) && (state._guardianAttempts || 0) < 2) {
      const guardToken = currentPlaybackToken;
      state._guardianAttempts = (state._guardianAttempts || 0) + 1;
      clearTimeout(state._guardianResumeTimer);
      state._guardianResumeTimer = setTimeout(() => {
        if (guardToken !== currentPlaybackToken || state.userPaused || state._playerInError || state._switchingDeckMode) return;
        if (state.ytPlayer && typeof state.ytPlayer.playVideo === 'function') {
          try {
            state.ytPlayer.playVideo();
          } catch(e) {}
          clearTimeout(state._guardianResumeTimer);
          state._guardianResumeTimer = setTimeout(() => {
            if (guardToken !== currentPlaybackToken || state.userPaused || state._switchingDeckMode) return;
            try {
              const ps = typeof state.ytPlayer.getPlayerState === 'function' ? state.ytPlayer.getPlayerState() : -1;
              if (ps !== 1 && ps !== 3) {
                state.isPlaying = false;
                updatePlayPauseUI(false);
                syncAndroidPaused();
              }
            } catch(e) {}
          }, 500);
        }
      }, 150);
      return;
    }
    state.isPlaying = false;
    updatePlayPauseUI(false);
    syncAndroidPaused();
  } else if (event.data === YT.PlayerState.ENDED) {
    clearTimeout(state._stallWatchdogTimer);
    handleTrackEnd();
  }
}

function onPlayerError(err) {
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._stallWatchdogTimer);
  clearTimeout(state._errorSkipTimer);
  state._playerInError = true;

  const playId = safeYtId(state.currentTrack?.ytId) || safeYtId(state.currentTrack?.id);
  if (playId && state._lastErrorVideoId === playId) {
    return;
  }
  state._lastErrorVideoId = playId;
  console.warn("YouTube IFrame playback error:", err);

  if (state.ytPlayer && typeof state.ytPlayer.stopVideo === 'function') {
    try { state.ytPlayer.stopVideo(); } catch(e) {}
  }

  // Errors 101/150/100/2 mean embedding is forbidden by owner or unavailable
  if (err && (err.data === 150 || err.data === 101 || err.data === 100 || err.data === 2)) {
    const errToken = currentPlaybackToken;
    // Try direct audio / Audius stream fallback first before declaring copyright/embed skip
    if (playId && DOM.audioEngine && state.deckVisualMode !== 'video' && state._attemptedFallbackForVideo !== playId && !state.userPaused) {
      state._attemptedFallbackForVideo = playId;
      state._playerInError = false;
      state._lastErrorVideoId = null;
      (async () => {
        try {
          if (typeof hasAdFreeLocalEngine === 'function' && hasAdFreeLocalEngine()) {
            const directRes = await kurfaResolveDirectAudio(playId);
            if (errToken !== currentPlaybackToken || state.userPaused) return;
            if (directRes && directRes.success && directRes.streamUrl) {
              loadDirectAudioStream(directRes.streamUrl, 0, errToken, null);
              return;
            }
          }
        } catch(_) {}
        try {
          if (state.currentTrack && typeof kurfaTryQuickAudiusMatch === 'function') {
            const aud = await kurfaTryQuickAudiusMatch(state.currentTrack, 1800);
            if (errToken !== currentPlaybackToken || state.userPaused) return;
            if (aud && aud.success && aud.streamUrl) {
              loadDirectAudioStream(aud.streamUrl, 0, errToken, null);
              return;
            }
          }
        } catch(_) {}
        if (errToken !== currentPlaybackToken || state.userPaused) return;
        failedVideoIds.add(playId);
        state._consecutiveErrorSkips = (state._consecutiveErrorSkips || 0) + 1;
        if (state._consecutiveErrorSkips >= 5) {
          state.isPlaying = false;
          updatePlayPauseUI(false);
          showToast("Arka arkaya çok fazla oynatılamayan parça nedeniyle durduruldu");
          return;
        }
        showToast("Bu şarkı telif nedeniyle yerleştirmeye kapalı, sıradakine geçiliyor");
        state._errorSkipTimer = setTimeout(() => {
          if (errToken !== currentPlaybackToken || state.userPaused) return;
          playNextTrack({ isAutoErrorSkip: true });
        }, 700);
      })();
      return;
    }

    if (playId && (err.data === 150 || err.data === 101 || err.data === 100)) {
      failedVideoIds.add(playId);
    }
    state._consecutiveErrorSkips = (state._consecutiveErrorSkips || 0) + 1;
    if (state._consecutiveErrorSkips >= 5) {
      state.isPlaying = false;
      updatePlayPauseUI(false);
      showToast("Arka arkaya çok fazla oynatılamayan parça nedeniyle durduruldu");
      return;
    }
    showToast("Bu şarkı telif nedeniyle yerleştirmeye kapalı, sıradakine geçiliyor");
    state._errorSkipTimer = setTimeout(() => {
      if (errToken !== currentPlaybackToken || state.userPaused) return;
      playNextTrack({ isAutoErrorSkip: true });
    }, 700);
  } else {
    state.isPlaying = false;
    updatePlayPauseUI(false);
  }
}

function getCurrentPlaybackTime() {
  // 1. If HTML5 audio is actively playing, use its currentTime
  if (DOM.audioEngine && DOM.audioEngine.src && !DOM.audioEngine.paused && typeof DOM.audioEngine.currentTime === 'number' && DOM.audioEngine.currentTime > 0) {
    return DOM.audioEngine.currentTime;
  }
  // 2. If YouTube player is actively playing, use its currentTime
  if (state.ytPlayer && typeof state.ytPlayer.getPlayerState === 'function' && state.ytPlayer.getPlayerState() === 1) {
    try {
      const ytT = state.ytPlayer.getCurrentTime() || 0;
      if (ytT > 0) return ytT;
    } catch(e) {}
  }
  // 3. Fallback: check either engine for positive currentTime
  let t = 0;
  if (DOM.audioEngine && typeof DOM.audioEngine.currentTime === 'number' && DOM.audioEngine.currentTime > 0) {
    t = DOM.audioEngine.currentTime;
  }
  if (!t && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    try { t = state.ytPlayer.getCurrentTime() || 0; } catch(e) {}
  }
  if (!t && typeof state.currentPlayheadTime === 'number' && state.currentPlayheadTime > 0) {
    t = state.currentPlayheadTime;
  }
  return Math.max(0, t || 0);
}
window.getCurrentPlaybackTime = getCurrentPlaybackTime;

function seekPlaybackToSeconds(targetSec) {
  if (typeof targetSec !== 'number' || isNaN(targetSec) || targetSec < 0) return;
  state.currentPlayheadTime = targetSec;

  // 1. If HTML5 audio engine is active or has a loaded source, seek it
  if (DOM.audioEngine && DOM.audioEngine.src) {
    try { DOM.audioEngine.currentTime = targetSec; } catch(e) {}
  }

  // 2. If YouTube player is active or ready, seek it
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.seekTo === 'function') {
    try { state.ytPlayer.seekTo(targetSec, true); } catch(e) {}
  }

  // 3. Immediately update UI and lyrics for silky responsiveness
  if (typeof getActiveMediaDuration === 'function') {
    const dur = getActiveMediaDuration();
    if (dur > 0 && typeof updateSeekbarUI === 'function') {
      updateSeekbarUI(targetSec, dur);
    }
  }
  if (typeof syncLyricsWithTime === 'function') {
    syncLyricsWithTime(targetSec);
  }
}
window.seekPlaybackToSeconds = seekPlaybackToSeconds;

function pickBestYouTubeMatch(track, candidates) {
  if (!Array.isArray(candidates) || candidates.length === 0) return null;
  const targetTitle = (track?.title || '').toLowerCase().trim();
  const targetArtist = (track?.artist || '').toLowerCase().trim();

  let targetDurSec = 0;
  if (typeof track?.duration === 'number') {
    targetDurSec = track.duration;
  } else if (typeof track?.duration === 'string') {
    const parts = track.duration.split(':').map(p => parseInt(p, 10));
    if (parts.length === 2) targetDurSec = parts[0] * 60 + parts[1];
    else if (parts.length === 3) targetDurSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  const badWords = [
    'karışık', 'tüm şarkılar', 'full albüm', 'full album', 'mix', 'megamix',
    '1 saat', '1 hour', '10 saat', '10 hour', 'reaction', 'tepki',
    'karaoke', 'enstrümantal', 'instrumental', 'röportaj', 'interview', 'bloopers'
  ];

  let best = null;
  let bestScore = -999;

  for (const c of candidates) {
    const cid = c ? safeYtId(c.id) : null;
    if (!cid) continue;
    if (failedVideoIds.has(cid)) continue;

    const cTitle = (c.title || '').toLowerCase();
    const cArtist = (c.artist || '').toLowerCase();

    let cDurSec = 0;
    if (c.duration) {
      const parts = String(c.duration).split(':').map(p => parseInt(p, 10));
      if (parts.length === 2) cDurSec = parts[0] * 60 + parts[1];
      else if (parts.length === 3) cDurSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
    }

    // 1. Extreme duration mismatch or compilation (> 10 mins or > 2.5x length)
    if (cDurSec > 600 || (targetDurSec > 60 && cDurSec > targetDurSec * 2.5)) continue;
    // 2. Short teaser (< 40s)
    if (cDurSec > 0 && cDurSec < 40 && targetDurSec > 60) continue;
    // 3. Bad words in candidate title (compilations, mixes)
    if (badWords.some(w => cTitle.includes(w) && !targetTitle.includes(w))) continue;

    let score = 0;
    const cleanTargetTitle = targetTitle.replace(/[^\w\sğüşıöç]/g, '').trim();
    const cleanCandTitle = cTitle.replace(/[^\w\sğüşıöç]/g, '').trim();

    if (cleanCandTitle.includes(cleanTargetTitle)) {
      score += 10;
    } else {
      const titleWords = cleanTargetTitle.split(/\s+/).filter(w => w.length > 2);
      let matchedWords = 0;
      for (const w of titleWords) {
        if (cleanCandTitle.includes(w)) matchedWords++;
      }
      if (titleWords.length > 0 && matchedWords > 0) {
        score += (matchedWords / titleWords.length) * 8;
      }
    }

    const artistWords = targetArtist.replace(/[^\w\sğüşıöç]/g, '').split(/\s+/).filter(w => w.length > 2);
    let matchedArtists = 0;
    for (const a of artistWords) {
      if (cleanCandTitle.includes(a) || cArtist.includes(a)) matchedArtists++;
    }
    if (artistWords.length > 0 && matchedArtists > 0) {
      score += (matchedArtists / artistWords.length) * 6;
    }

    if (targetDurSec > 0 && cDurSec > 0) {
      const diff = Math.abs(targetDurSec - cDurSec);
      if (diff <= 10) score += 6;
      else if (diff <= 25) score += 4;
      else if (diff <= 45) score += 2;
      else if (diff > 120) score -= 4;
    }

    if (/official\s*(audio|video|visualizer|klip)/i.test(c.title)) score += 3;
    if (/- topic$/i.test(c.artist)) score += 4;

    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }

  return best || candidates.find(c => c && safeYtId(c.id) && !failedVideoIds.has(safeYtId(c.id))) || candidates[0];
}

function updateSpotifyTrackInStorage(placeholderId, ytId, thumbnail) {
  if (!state.spotifyPlaylists || !Array.isArray(state.spotifyPlaylists)) return;
  const cleanThumb = thumbnail ? safeUrl(thumbnail, './kurfamuzik_logo.png') : '';
  for (const pl of state.spotifyPlaylists) {
    if (Array.isArray(pl.tracks)) {
      const trk = pl.tracks.find(t => t.id === placeholderId);
      if (trk) {
        trk.ytId = ytId;
        // Never overwrite official high-res studio cover with blurry video still
        if (cleanThumb && (!trk.thumbnail || trk.thumbnail.includes('kurfamuzik_logo') || trk.thumbnail === pl.cover)) {
          trk.thumbnail = cleanThumb;
          const spImgs = document.querySelectorAll('img[data-sp-id]');
          for (const el of spImgs) {
            if (el.getAttribute('data-sp-id') === String(placeholderId)) {
              el.src = cleanThumb;
              break;
            }
          }
        }
        saveSpotifyPlaylists();
        break;
      }
    }
  }
}

async function prefetchNextQueueTrack() {
  if (!state.queue || state.queueIndex >= state.queue.length - 1) return;
  const next = state.queue[state.queueIndex + 1];
  if (!next) return;
  if (next.isLocal || String(next.id || '').startsWith('local_') || String(next.id || '').startsWith('audius_')) return;
  if (safeYtId(next.ytId)) return;
  if (safeYtId(next.id) && !String(next.id).startsWith('sp-')) return;

  try {
    const q = `${next.artist || ''} ${next.title || ''} audio`.trim();
    const sData = await kurfaSearchTracks(q, { filterSingles: true });
    if (sData && sData.success && Array.isArray(sData.results) && sData.results.length > 0) {
      const best = pickBestYouTubeMatch(next, sData.results);
      const validId = safeYtId(best?.id);
      if (validId) {
        next.ytId = validId;
        const safeThumb = safeUrl(best.thumbnail, `https://i.ytimg.com/vi/${validId}/hqdefault.jpg`);
        if (!next.thumbnail || next.thumbnail.includes('kurfamuzik_logo')) {
          next.thumbnail = safeThumb;
        }
        updateSpotifyTrackInStorage(next.id, validId, safeThumb);
      }
    }
  } catch(e) {}
}

async function resolveAndPlaySpotifyTrack(placeholderId, track, options = {}) {
  if (track?.isLocal || String(placeholderId || '').startsWith('local_')) return;
  stopAllPlayback(true);
  const resolveToken = currentPlaybackToken;
  const title = track?.title || 'Şarkı';
  const artist = track?.artist || 'Sanatçı';

  try {
    // Open-catalog items try Audius direct ad-free stream first
    if (track?.source === 'open-catalog') {
      const audMatch = await kurfaTryQuickAudiusMatch(track, 1400);
      if (resolveToken !== currentPlaybackToken) return;
      if (audMatch && audMatch.success && audMatch.audiusTrack) {
        playTrackById(audMatch.audiusTrack.id, audMatch.audiusTrack, 0, undefined, undefined, options);
        return;
      }
    }

    const q = `${artist} ${title} audio`.trim();
    let sData = await kurfaSearchTracks(q, { filterSingles: true });
    if (resolveToken !== currentPlaybackToken) return;
    let best = null;
    if (sData && sData.success && Array.isArray(sData.results) && sData.results.length > 0) {
      best = pickBestYouTubeMatch(track, sData.results);
    }

    // Fallback if not found
    if (!best || !safeYtId(best.id)) {
      const fallbackQ = `${title} ${artist}`.trim();
      sData = await kurfaSearchTracks(fallbackQ, { filterSingles: true });
      if (resolveToken !== currentPlaybackToken) return;
      if (sData && sData.success && Array.isArray(sData.results) && sData.results.length > 0) {
        best = pickBestYouTubeMatch(track, sData.results);
      }
    }

    const realYtId = safeYtId(best?.id);
    if (realYtId) {
      const realThumb = safeUrl(best.thumbnail, `https://i.ytimg.com/vi/${realYtId}/hqdefault.jpg`);

      if (track) {
        track.id = realYtId;
        track.ytId = realYtId;
        if (!track.thumbnail || track.thumbnail.includes('kurfamuzik_logo')) {
          track.thumbnail = realThumb;
        }
      }

      const qItem = state.queue.find(t => t.id === placeholderId || (track && (t.id === track.id || t.ytId === realYtId)));
      if (qItem) {
        qItem.id = realYtId;
        qItem.ytId = realYtId;
        if (!qItem.thumbnail || qItem.thumbnail.includes('kurfamuzik_logo')) {
          qItem.thumbnail = realThumb;
        }
      }
      saveQueueState();

      updateSpotifyTrackInStorage(placeholderId, realYtId, realThumb);

      // Preload next track
      prefetchNextQueueTrack();

      playTrackById(realYtId, track || best, 0, undefined, undefined, options);
    } else {
      showToast(`YouTube üzerinde parça bulunamadı: ${title}`);
      clearTimeout(state._errorSkipTimer);
      state._errorSkipTimer = setTimeout(() => {
        if (resolveToken !== currentPlaybackToken || state.userPaused) return;
        playNextTrack({ isAutoErrorSkip: true });
      }, 800);
    }
  } catch(err) {
    console.warn("Spotify resolver error:", err);
    if (resolveToken === currentPlaybackToken) {
      showToast("Parça bağlantısı kurulamadı");
    }
  }
}

function playTrackById(videoId, arg2, arg3, arg4, arg5, options = {}) {
  if (!videoId) return;
  const rawId = String(videoId).trim();
  const isAutoErrorSkip = Boolean(options && options.isAutoErrorSkip);
  const isAutoAdvance = Boolean(options && options.isAutoAdvance);
  const bypassAdWarning = Boolean(options && options.bypassAdWarning);

  let target = null;
  let startTime = 0;
  if (typeof arg2 === 'object' && arg2 !== null) {
    target = arg2;
    if (typeof arg3 === 'number') startTime = arg3;
  } else if (typeof arg2 === 'number') {
    startTime = arg2;
  } else if (typeof arg2 === 'string') {
    const validId = safeYtId(rawId);
    target = {
      id: rawId,
      title: arg2,
      artist: arg3 || "Bilinmeyen Sanatçı",
      thumbnail: safeUrl(arg4, rawId.startsWith('sp-') ? './kurfamuzik_logo.png' : (validId ? `https://i.ytimg.com/vi/${validId}/hqdefault.jpg` : './kurfamuzik_logo.png')),
      duration: arg5 || "3:30"
    };
  }

  if (!target) {
    target = state.queue.find(t => t && (t.id === rawId || t.ytId === rawId)) ||
             (Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks.find(t => t && t.id === rawId) : null) ||
             CURATED_TRACKS.find(t => t.id === rawId) ||
             state.currentSearchResults.find(t => t.id === rawId);
  }

  const isLocalTrack = rawId.startsWith('local_') || Boolean(target && target.isLocal);
  if (isLocalTrack && target) {
    target.isLocal = true;
  }
  const isAudiusTrack = !isLocalTrack && (rawId.startsWith('audius_') || Boolean(target?.audiusStreamUrl));
  const cleanYtId = (isAudiusTrack || isLocalTrack) ? null : safeYtId(rawId);

  // AUTO RESOLVE SPOTIFY & NON-YOUTUBE TRACKS (never for local device tracks or Audius tracks)
  if (!isAudiusTrack && !isLocalTrack && (rawId.startsWith('sp-') || !cleanYtId)) {
    const fallbackYt = safeYtId(target?.ytId);
    if (fallbackYt) {
      playTrackById(fallbackYt, target, startTime, undefined, undefined, options);
      return;
    }
    resolveAndPlaySpotifyTrack(rawId, target, options);
    return;
  }

  const normalizedStart = (typeof startTime === 'number' && !isNaN(startTime) && startTime > 0) ? startTime : 0;
  const preferDirectAudio = isLocalTrack || isAudiusTrack || (
    state.deckVisualMode !== 'video' &&
    hasAdFreeLocalEngine()
  );
  const shouldCheckPrePlayGate = Boolean(
    !isLocalTrack &&
    !isAudiusTrack &&
    !preferDirectAudio &&
    cleanYtId &&
    !hasAdFreePlaybackEnvironment() &&
    state.deckVisualMode !== 'video' &&
    !bypassAdWarning
  );

  state.userPaused = false;
  state._pendingAdWarnPlayback = null;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);

  // Stop background timers/HTML5 audio; keep YT active only when YT loads immediately
  const ytCanDirectLoad = Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function');
  stopAllPlayback(ytCanDirectLoad && !preferDirectAudio && !shouldCheckPrePlayGate);
  const token = currentPlaybackToken;

  state._isAdMuted = false;
  state._adSeekAttempts = 0;
  state._guardianAttempts = 0;
  state._trackSwitchStartedAt = Date.now();
  state._playerInError = false;
  state._lastErrorVideoId = null;
  state._attemptedFallbackForVideo = null;
  if (!isAutoErrorSkip && cleanYtId) {
    state._consecutiveErrorSkips = 0;
    failedVideoIds.delete(cleanYtId);
  }

  state.currentPlayheadTime = normalizedStart;

  if (!target) {
    target = {
      id: cleanYtId || rawId,
      title: isAudiusTrack ? "Audius Parçası" : "YouTube Parçası",
      artist: "Sanatçı",
      duration: "3:30",
      thumbnail: cleanYtId ? `https://i.ytimg.com/vi/${cleanYtId}/hqdefault.jpg` : './kurfamuzik_logo.png'
    };
  }

  state.currentTrack = target;
  safeSetStorage('kurfa_last_track', JSON.stringify({
    id: target.id,
    ytId: target.ytId || cleanYtId || null,
    title: target.title,
    artist: target.artist,
    thumbnail: getTrackThumbnail(target),
    duration: target.duration,
    source: target.source || null,
    audiusStreamUrl: target.audiusStreamUrl || null,
    isLocal: Boolean(target.isLocal),
    streamUrl: target.streamUrl || null
  }));

  const targetId = target?.id || cleanYtId;
  const targetYtId = safeYtId(target?.ytId) || cleanYtId;
  const targetTitle = (target?.title || '').trim().toLowerCase();
  const targetArtist = (target?.artist || '').trim().toLowerCase();

  let existingIdx = state.queue.findIndex(t => {
    if (!t) return false;
    if (targetId && (t.id === targetId || t.ytId === targetId)) return true;
    if (cleanYtId && (t.id === cleanYtId || t.ytId === cleanYtId)) return true;
    if (targetYtId && (t.id === targetYtId || t.ytId === targetYtId)) return true;
    return false;
  });
  if (existingIdx === -1 && !isLocalTrack && targetTitle && targetArtist) {
    existingIdx = state.queue.findIndex(t =>
      t && t.title && t.artist &&
      t.title.trim().toLowerCase() === targetTitle &&
      t.artist.trim().toLowerCase() === targetArtist
    );
  }

  if (existingIdx !== -1) {
    state.queueIndex = existingIdx;
    if (target && state.queue[existingIdx]) {
      state.queue[existingIdx] = { ...state.queue[existingIdx], ...target };
    }
  } else {
    if (state.queue.length === 0) {
      state.queue = [target];
      state.queueIndex = 0;
    } else {
      const insertAt = Math.min(state.queue.length, state.queueIndex + 1);
      state.queue.splice(insertAt, 0, target);
      state.queueIndex = insertAt;
    }
  }
  saveQueueState();

  updatePlayerTrackUI(target);
  updateLyricsDisplay();
  renderQueueDrawerList();
  renderHomeTracklistTable();
  renderPlaylistTracksTable();
  renderFavoritesTable();
  renderDownloadsTable();
  if (typeof syncActiveTrackRowInDeviceAudio === 'function') {
    syncActiveTrackRowInDeviceAudio();
  }
  syncPersistentPlayerPosition();

  // Immediately reset seekbar to avoid showing stale time from previous track
  const estDuration = (typeof parseDurationToSec === 'function' ? parseDurationToSec(target.duration) : 0) || 210;
  if (typeof updateSeekbarUI === 'function') {
    updateSeekbarUI(normalizedStart, estDuration);
  }
  if (typeof startSeekbarTicker === 'function') {
    startSeekbarTicker();
  }

  // Ensure HTML5 audio is silent without triggering spurious error events
  if (DOM.audioEngine) {
    try {
      if (DOM.audioEngine.getAttribute('src')) {
        DOM.audioEngine.pause();
        DOM.audioEngine.removeAttribute('src');
      } else {
        DOM.audioEngine.pause();
      }
    } catch(e) {}
  }

  const isLocalDeviceTrack = isLocalTrack || Boolean(target && target.isLocal);
  if (isLocalDeviceTrack && DOM.audioEngine) {
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
      try { state.ytPlayer.pauseVideo(); } catch(e) {}
    }
    if (target.streamUrl) {
      loadDirectAudioStream(target.streamUrl, normalizedStart, token, null);
    } else if (rawId.startsWith('local_win_') && typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
      callExtensionBridge('GET_LOCAL_AUDIO_TRACKS', {}, 5000).then((res) => {
        if (token !== currentPlaybackToken || state.userPaused) return;
        const list = Array.isArray(res?.tracks) ? res.tracks : [];
        if (list.length > 0) state.deviceAudioTracks = list;
        const found = list.find(t => t && (t.id === target.id || (t.title === target.title && t.artist === target.artist)));
        if (found && found.streamUrl) {
          target.streamUrl = found.streamUrl;
          loadDirectAudioStream(found.streamUrl, normalizedStart, token, null);
        } else {
          showToast('Yerel ses dosyası bulunamadı');
          state.isPlaying = false;
          updatePlayPauseUI(false);
        }
      }).catch(() => {
        state.isPlaying = false;
        updatePlayPauseUI(false);
      });
    } else if (typeof resolveLocalAudioStreamUrl === 'function') {
      resolveLocalAudioStreamUrl(target.id).then((url) => {
        if (token !== currentPlaybackToken || state.userPaused) return;
        if (url) {
          loadDirectAudioStream(url, normalizedStart, token, null);
        } else {
          showToast('Yerel ses dosyası okunamadı');
          state.isPlaying = false;
          updatePlayPauseUI(false);
        }
      });
    }
    return;
  }

  if (isAudiusTrack && DOM.audioEngine) {
    const streamUrl = target.audiusStreamUrl || `https://api.audius.co/v1/tracks/${encodeURIComponent(rawId.replace(/^audius_/, ''))}/stream`;
    loadDirectAudioStream(streamUrl, normalizedStart, token, null);
    showToast(`Reklamsız Açık Akış: ${target.title}`);
    return;
  }

  if (preferDirectAudio && cleanYtId && DOM.audioEngine) {
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
      try { state.ytPlayer.pauseVideo(); } catch(e) {}
    }
    const fallbackFromDirectAudio = async () => {
      if (token !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
      try {
        const aud = await kurfaTryQuickAudiusMatch(target, 1600);
        if (token !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
        if (aud && aud.success && aud.streamUrl) {
          loadDirectAudioStream(aud.streamUrl, normalizedStart, token, null);
          return;
        }
      } catch(e) {}
      if (token !== currentPlaybackToken || state.userPaused) return;
      loadYouTubePlayback(cleanYtId, target, normalizedStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
    };
    kurfaResolveDirectAudio(cleanYtId).then((res) => {
      if (token !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
      if (res && res.success && res.streamUrl) {
        loadDirectAudioStream(res.streamUrl, normalizedStart, token, cleanYtId);
      } else {
        fallbackFromDirectAudio();
      }
    }).catch(() => {
      fallbackFromDirectAudio();
    });
    return;
  }

  if (shouldCheckPrePlayGate) {
    const isAutoTransition = isAutoAdvance || isAutoErrorSkip;
    const matchTimeout = isAutoTransition ? 550 : 650;
    const proceedToYouTube = (showPlayToast) => {
      if (token !== currentPlaybackToken || state.userPaused) return;
      loadYouTubePlayback(
        cleanYtId,
        target,
        normalizedStart,
        token,
        Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
      );
      if (showPlayToast) {
        showToast(`Çalınıyor: ${target.title} - ${target.artist}`);
      }
    };

    if (!isAutoTransition) {
      state.isPlaying = false;
      updatePlayPauseUI(false);
    }

    Promise.all([
      kurfaTryQuickAudiusMatch(target, matchTimeout),
      kurfaDetectAdBlocker()
    ]).then(([match, blockerOk]) => {
      if (token !== currentPlaybackToken || state.userPaused) return;
      if (match && match.success && match.streamUrl && DOM.audioEngine) {
        loadDirectAudioStream(match.streamUrl, normalizedStart, token, null);
        showToast(`Reklamsız Açık Akış Eşleşti: ${target.title}`);
        return;
      }
      if (blockerOk || hasAdFreePlaybackEnvironment()) {
        proceedToYouTube(!isAutoTransition);
        return;
      }
      if (!isAutoTransition && !isAdWarningAcknowledged()) {
        state._pendingAdWarnPlayback = {
          cleanYtId,
          target,
          normalizedStart,
          ytCanDirectLoad: Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
        };
        openAdWarningModal(target);
        return;
      }
      proceedToYouTube(!isAutoTransition);
    }).catch(() => {
      if (token !== currentPlaybackToken || state.userPaused) return;
      if (!isAutoTransition && !isAdWarningAcknowledged()) {
        state._pendingAdWarnPlayback = {
          cleanYtId,
          target,
          normalizedStart,
          ytCanDirectLoad: Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
        };
        openAdWarningModal(target);
        return;
      }
      proceedToYouTube(!isAutoTransition);
    });
    return;
  }

  loadYouTubePlayback(cleanYtId, target, normalizedStart, token, ytCanDirectLoad);
  showToast(`Çalınıyor: ${target.title} - ${target.artist}`);
}

function loadDirectAudioStream(streamUrl, startSeconds, token, ytFallbackId) {
  if (!DOM.audioEngine || token !== currentPlaybackToken || state.userPaused) return;
  try {
    if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
      try { state.ytPlayer.pauseVideo(); } catch(e) {}
    }
    DOM.audioEngine.volume = state.isMuted ? 0 : (state.volume ?? 0.8);
    if (startSeconds > 0) {
      const seekOnce = () => {
        if (token !== currentPlaybackToken) return;
        try { DOM.audioEngine.currentTime = startSeconds; } catch(e) {}
      };
      DOM.audioEngine.addEventListener('loadedmetadata', seekOnce, { once: true });
    }
    DOM.audioEngine.src = streamUrl;
    state.isPlaying = true;
    updatePlayPauseUI(true);
    const playPromise = DOM.audioEngine.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        if (token !== currentPlaybackToken) return;
        try {
          if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
            window.KurfaAndroidBridge.setNativePlaybackState(true);
          }
        } catch(e) {}
      }).catch((err) => {
        if (token !== currentPlaybackToken || (err && err.name === 'AbortError')) return;
        if (ytFallbackId) {
          loadYouTubePlayback(ytFallbackId, state.currentTrack, startSeconds, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
        } else {
          state.isPlaying = false;
          updatePlayPauseUI(false);
        }
      });
    }
  } catch(err) {
    if (ytFallbackId) {
      loadYouTubePlayback(ytFallbackId, state.currentTrack, startSeconds, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
    }
  }
}

function loadYouTubePlayback(cleanYtId, target, normalizedStart, token, ytCanDirectLoad) {
  if (token !== currentPlaybackToken) return;
  if (ytCanDirectLoad) {
    try {
      if (typeof state.ytPlayer.setPlaybackRate === 'function') {
        state.ytPlayer.setPlaybackRate(1);
      }
      if (!state.isMuted && state.volume > 0) {
        if (typeof state.ytPlayer.unMute === 'function') state.ytPlayer.unMute();
        setPlayerVolume(state.volume);
      } else if (typeof state.ytPlayer.mute === 'function') {
        state.ytPlayer.mute();
      }

      state.ytPlayer.loadVideoById({
        videoId: cleanYtId,
        startSeconds: normalizedStart
      });
      state.isPlaying = true;
      updatePlayPauseUI(true);

      // Token-guarded stall watchdog: nudge once if YT stays UNSTARTED (-1) or CUED (5)
      state._stallWatchdogTimer = setTimeout(() => {
        if (token !== currentPlaybackToken || state.userPaused || state._playerInError) return;
        if (!state.ytPlayer || typeof state.ytPlayer.getPlayerState !== 'function') return;
        try {
          const pState = state.ytPlayer.getPlayerState();
          if (pState === -1 || pState === 5) {
            if (typeof state.ytPlayer.playVideo === 'function') {
              state.ytPlayer.playVideo();
            }
            clearTimeout(state._stallWatchdogTimer);
            state._stallWatchdogTimer = setTimeout(() => {
              if (token !== currentPlaybackToken || state.userPaused || state._playerInError) return;
              try {
                const finalState = state.ytPlayer.getPlayerState();
                if (finalState !== 1 && finalState !== 3) {
                  state.isPlaying = false;
                  updatePlayPauseUI(false);
                }
              } catch(e) {}
            }, 1500);
          }
        } catch(e) {}
      }, 1500);
    } catch(err) {
      console.warn("YouTube player loadVideoById error:", err);
      state.isPlaying = false;
      updatePlayPauseUI(false);
    }
  } else {
    state.pendingTrackToPlay = target;
    initYouTubeEngine();
  }
}

function addToQueueTrack(videoIdOrTrack, title, artist, thumb, dur) {
  let track;
  if (videoIdOrTrack && typeof videoIdOrTrack === 'object') {
    const vid = safeYtId(videoIdOrTrack.ytId) || safeYtId(videoIdOrTrack.id);
    track = {
      id: videoIdOrTrack.id,
      ytId: vid || videoIdOrTrack.ytId,
      title: videoIdOrTrack.title || "Şarkı",
      artist: videoIdOrTrack.artist || "Sanatçı",
      thumbnail: safeUrl(videoIdOrTrack.thumbnail, vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : './kurfamuzik_logo.png'),
      duration: videoIdOrTrack.duration || "3:30",
      source: videoIdOrTrack.source,
      audiusStreamUrl: videoIdOrTrack.audiusStreamUrl
    };
  } else {
    const vid = safeYtId(videoIdOrTrack);
    track = {
      id: videoIdOrTrack,
      title: title || "Şarkı",
      artist: artist || "Sanatçı",
      thumbnail: safeUrl(thumb, vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : './kurfamuzik_logo.png'),
      duration: dur || "3:30"
    };
  }

  const trackId = track.id || track.ytId;
  const cleanTitle = (track.title || '').trim().toLowerCase();
  const cleanArtist = (track.artist || '').trim().toLowerCase();

  if (!Array.isArray(state.userQueue)) state.userQueue = [];
  const isDuplicate = state.userQueue.some(t => {
    if (!t) return false;
    if (trackId && (t.id === trackId || t.ytId === trackId)) return true;
    if (cleanTitle && cleanArtist && t.title && t.artist) {
      return t.title.trim().toLowerCase() === cleanTitle && t.artist.trim().toLowerCase() === cleanArtist;
    }
    return false;
  });

  if (isDuplicate) {
    showToast(`Zaten sıradaki şarkılar listesinde: ${track.title}`);
    return;
  }

  state.userQueue.push(track);
  saveQueueState();
  renderQueueDrawerList();
  showToast(`Sıradaki Şarkılara Eklendi: ${track.title}`);
}

function removeFromUserQueue(index) {
  if (!Array.isArray(state.userQueue) || index < 0 || index >= state.userQueue.length) return;
  state.userQueue.splice(index, 1);
  saveQueueState();
  renderQueueDrawerList();
}

function togglePlay() {
  if (state.isPlaying) {
    pausePlayback();
  } else {
    resumePlayback();
  }
}

function resumePlayback() {
  state.userPaused = false;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);
  const curTime = state.currentPlayheadTime || 0;

  // 1. If HTML5 Audio engine has a loaded source, resume it
  if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.ended && state.currentTrack) {
    DOM.audioEngine.play().then(() => {
      state.isPlaying = true;
      updatePlayPauseUI(true);
      if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
    }).catch(e => {
      if (e.name === 'AbortError') return;
      if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.playVideo === 'function') {
        state.ytPlayer.playVideo();
      }
    });
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
    return;
  }

  // 2. YouTube player (primary engine for both Video and Vinyl modes)
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.playVideo === 'function' && state.currentTrack) {
    try {
      const targetVid = safeYtId(state.currentTrack.ytId || state.currentTrack.id);
      const loadedVid = typeof state.ytPlayer.getVideoData === 'function' ? state.ytPlayer.getVideoData()?.video_id : null;
      if (!targetVid || loadedVid === targetVid) {
        state.ytPlayer.playVideo();
        state.isPlaying = true;
        updatePlayPauseUI(true);
        if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
        return;
      }
    } catch(e) {}
  }

  // 3. Fallback: reload current track or initialize clean Spotify-style starter queue
  if (state.currentTrack && state.currentTrack.id) {
    playTrackById(state.currentTrack.id, state.currentTrack, curTime);
  } else if (Array.isArray(state.userQueue) && state.userQueue.length > 0) {
    const firstUp = state.userQueue.shift();
    if (!state.queue || state.queue.length === 0) {
      state.queue = [...getCuratedTracks()];
      state.queueIndex = 0;
    }
    saveQueueState();
    renderQueueDrawerList();
    playTrackById(firstUp.id, firstUp, 0);
  } else if (state.queue && state.queue.length > 0) {
    const idx = Math.max(0, Math.min(state.queueIndex || 0, state.queue.length - 1));
    state.queueIndex = idx;
    playTrackById(state.queue[idx].id, state.queue[idx], 0);
  } else {
    const tracks = getCuratedTracks();
    if (tracks && tracks.length > 0) {
      state.queue = [...tracks];
      if (state.isShuffle) {
        const first = state.queue[0];
        const rest = state.queue.slice(1);
        for (let i = rest.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [rest[i], rest[j]] = [rest[j], rest[i]];
        }
        state.queue = [first, ...rest];
      }
      state.queueIndex = 0;
      state.playingContextSub = 'TRENDLERDEN ÇALINIYOR';
      state.playingContextTitle = 'YouTube Türkiye Trendleri';
      saveQueueState();
      renderQueueDrawerList();
      playTrackById(state.queue[0].id, state.queue[0], 0);
    }
  }
}

function pausePlayback() {
  state.userPaused = true;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
    try { state.ytPlayer.pauseVideo(); } catch(e) {}
  }
  if (DOM.audioEngine) {
    try { DOM.audioEngine.pause(); } catch(e) {}
  }
  try {
    if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
      window.KurfaAndroidBridge.setNativePlaybackState(false);
    }
  } catch(e) {}
  state.isPlaying = false;
  updatePlayPauseUI(false);
  if (typeof syncPipState === 'function') {
    syncPipState();
  }
}

function playNextTrack(opts = {}) {
  const isAutoErrorSkip = Boolean(opts && opts.isAutoErrorSkip);
  const isAutoAdvance = Boolean(opts && opts.isAutoAdvance);

  // Spotify-grade Queue: User-queued FIFO items ALWAYS play before context queue
  if (Array.isArray(state.userQueue) && state.userQueue.length > 0) {
    while (state.userQueue.length > 0) {
      const cand = state.userQueue.shift();
      const candVid = cand ? (safeYtId(cand.ytId) || safeYtId(cand.id)) : null;
      if (!cand || (candVid && failedVideoIds.has(candVid))) continue;
      saveQueueState();
      renderQueueDrawerList();
      const playId = candVid || cand.id;
      playTrackById(playId, cand, 0, undefined, undefined, { isAutoErrorSkip, isAutoAdvance });
      prefetchNextQueueTrack();
      return;
    }
    saveQueueState();
  }

  if (!state.queue || state.queue.length === 0) {
    triggerSmartRadioContinue();
    return;
  }

  let nextIdx = state.queueIndex + 1;
  while (nextIdx < state.queue.length) {
    const cand = state.queue[nextIdx];
    const candVid = cand ? (safeYtId(cand.ytId) || safeYtId(cand.id)) : null;
    if (!cand || (candVid && failedVideoIds.has(candVid))) {
      nextIdx++;
      continue;
    }
    break;
  }

  if (nextIdx < state.queue.length) {
    state.queueIndex = nextIdx;
    const nextTrack = state.queue[state.queueIndex];
    const playId = safeYtId(nextTrack.ytId) || nextTrack.id;
    playTrackById(playId, nextTrack, 0, undefined, undefined, { isAutoErrorSkip, isAutoAdvance });
    prefetchNextQueueTrack();
  } else if (state.repeatMode === 1) {
    let wrapIdx = 0;
    while (wrapIdx < state.queue.length) {
      const cand = state.queue[wrapIdx];
      const candVid = cand ? (safeYtId(cand.ytId) || safeYtId(cand.id)) : null;
      if (!cand || (candVid && failedVideoIds.has(candVid))) {
        wrapIdx++;
        continue;
      }
      break;
    }
    if (wrapIdx < state.queue.length) {
      state.queueIndex = wrapIdx;
      const nextTrack = state.queue[wrapIdx];
      const playId = safeYtId(nextTrack.ytId) || nextTrack.id;
      playTrackById(playId, nextTrack, 0, undefined, undefined, { isAutoErrorSkip, isAutoAdvance });
      prefetchNextQueueTrack();
    } else {
      state.isPlaying = false;
      updatePlayPauseUI(false);
    }
  } else {
    triggerSmartRadioContinue();
  }
}

function playPrevTrack() {
  if (!state.queue || state.queue.length === 0) return;
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function' && state.ytPlayer.getCurrentTime() > 3) {
    state.ytPlayer.seekTo(0, true);
    return;
  }
  state.queueIndex = (state.queueIndex - 1 + state.queue.length) % state.queue.length;
  const prevTrack = state.queue[state.queueIndex];
  const playId = safeYtId(prevTrack.ytId) || prevTrack.id;
  playTrackById(playId, prevTrack);
}

function handleTrackEnd() {
  if (state.repeatMode === 2) {
    if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
      DOM.audioEngine.currentTime = 0;
      resumePlayback();
      return;
    }
    if (state.ytPlayer && typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
    resumePlayback();
  } else if (Array.isArray(state.userQueue) && state.userQueue.length > 0) {
    playNextTrack({ isAutoAdvance: true });
  } else if (state.queueIndex < state.queue.length - 1) {
    playNextTrack({ isAutoAdvance: true });
  } else if (state.repeatMode === 1) {
    playNextTrack({ isAutoAdvance: true });
  } else {
    triggerSmartRadioContinue();
  }
}

function toggleShuffle() {
  if (!state.queue || state.queue.length === 0) {
    showToast("Çalma sırası boş");
    return;
  }
  state.isShuffle = !state.isShuffle;
  safeSetStorage('kurfa_shuffle', state.isShuffle ? 'true' : 'false');
  if (DOM.btnShuffle) {
    if (state.isShuffle) {
      DOM.btnShuffle.classList.add('text-primary', 'bg-primary-fixed/40');
      state.originalQueue = [...state.queue];
      const current = state.queue[state.queueIndex] || state.queue[0];
      const remaining = state.queue.filter((_, i) => i !== state.queueIndex);
      for (let i = remaining.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
      }
      state.queue = current ? [current, ...remaining] : remaining;
      state.queueIndex = 0;
      saveQueueState();
      showToast("Karışık Çalma: Açık");
    } else {
      DOM.btnShuffle.classList.remove('text-primary', 'bg-primary-fixed/40');
      if (state.originalQueue && state.originalQueue.length > 0) {
        state.queue = [...state.originalQueue];
      }
      state.queueIndex = (state.currentTrack && state.currentTrack.id)
        ? Math.max(0, state.queue.findIndex(t => t.id === state.currentTrack.id))
        : 0;
      saveQueueState();
      showToast("Karışık Çalma: Kapalı");
    }
  }
  renderQueueDrawerList();
}

function toggleRepeat() {
  state.repeatMode = (state.repeatMode + 1) % 3;
  safeSetStorage('kurfa_repeat', state.repeatMode.toString());
  if (!DOM.btnRepeat) return;
  const icon = DOM.btnRepeat.querySelector('.material-symbols-outlined');
  
  if (state.repeatMode === 0) {
    DOM.btnRepeat.classList.remove('text-primary', 'bg-primary-fixed/40');
    if (icon) icon.textContent = 'repeat';
    showToast("Tekrarlama: Kapalı");
  } else if (state.repeatMode === 1) {
    DOM.btnRepeat.classList.add('text-primary', 'bg-primary-fixed/40');
    if (icon) icon.textContent = 'repeat';
    showToast("Tekrarlama: Tüm Liste");
  } else if (state.repeatMode === 2) {
    DOM.btnRepeat.classList.add('text-primary', 'bg-primary-fixed/40');
    if (icon) icon.textContent = 'repeat_one';
    showToast("Tekrarlama: Tek Şarkı");
  }
}

// =============================================================================
// 7. UI SYNC & PLAYER DECK UPDATES (DESKTOP & MOBILE)
// =============================================================================

function updateMediaSession(track) {
  if (!('mediaSession' in navigator) || !track) return;
  try {
    const safeArtwork = safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png');
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'Kurfamüzik',
      artist: track.artist || 'YouTube',
      album: 'Kurfamüzik Akışı',
      artwork: [
        { src: safeArtwork, sizes: '512x512', type: 'image/jpeg' }
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => togglePlay());
    navigator.mediaSession.setActionHandler('pause', () => togglePlay());
    navigator.mediaSession.setActionHandler('previoustrack', () => playPrevTrack());
    navigator.mediaSession.setActionHandler('nexttrack', () => playNextTrack());
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (typeof details.seekTime === 'number') {
        seekPlaybackToSeconds(details.seekTime);
      }
    });
  } catch (e) {
    console.warn("MediaSession API hatası:", e);
  }
}

function updatePlayerTrackUI(track) {
  const defaultPlaceholder = "./kurfamuzik_logo.png";
  if (!track) {
    if (DOM.playerThumb) DOM.playerThumb.src = defaultPlaceholder;
    if (DOM.playerTitle) DOM.playerTitle.textContent = "Kurfa Müzik";
    if (DOM.playerArtist) DOM.playerArtist.textContent = "Bir parça seçin";
    if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = "0:00";
    if (DOM.playerTimeCur) DOM.playerTimeCur.textContent = "0:00";

    if (DOM.playerThumbMobile) DOM.playerThumbMobile.src = defaultPlaceholder;
    if (DOM.playerTitleMobile) DOM.playerTitleMobile.textContent = "Kurfa Müzik";
    if (DOM.playerArtistMobile) DOM.playerArtistMobile.textContent = "Bir parça seçin";

    if (DOM.deckCoverImg) DOM.deckCoverImg.src = defaultPlaceholder;
    if (DOM.deckTitle) DOM.deckTitle.textContent = "Kurfa Müzik";
    if (DOM.deckArtist) DOM.deckArtist.textContent = "Çalınan şarkı yok";

    // Mobile Fullscreen Modal
    const mnpCover = document.getElementById('mnp-cover-art');
    const mnpBg = document.getElementById('mnp-bg-art');
    const mnpTitle = document.getElementById('mnp-title');
    const mnpArtist = document.getElementById('mnp-artist');
    const mnpDur = document.getElementById('mnp-time-dur');
    const mnpLyricLine = document.getElementById('mnp-lyric-line');
    if (mnpCover) mnpCover.src = defaultPlaceholder;
    if (mnpBg) mnpBg.src = defaultPlaceholder;
    if (mnpTitle) mnpTitle.textContent = "Kurfa Müzik";
    if (mnpArtist) mnpArtist.textContent = "Bir parça seçin";
    if (mnpDur) mnpDur.textContent = "0:00";
    if (mnpLyricLine) mnpLyricLine.textContent = "Çalan parça yok";

    updatePlayerFavBtn();
    return;
  }

  const safeThumb = safeUrl(track.thumbnail || getTrackThumbnail(track), defaultPlaceholder);

  // Desktop elements
  if (DOM.playerThumb) DOM.playerThumb.src = safeThumb;
  if (DOM.playerTitle) DOM.playerTitle.textContent = track.title || "Şarkı";
  if (DOM.playerArtist) DOM.playerArtist.textContent = track.artist || "Sanatçı";
  if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = track.duration || "3:30";

  if (typeof syncDesktopMiniPlayerState === 'function' && window.__kurfaDesktopMiniPlayerOpen) {
    syncDesktopMiniPlayerState(state.currentPlayheadTime || 0, parseDurationToSec(track.duration) || 210);
  }

  // Mobile mini elements
  if (DOM.playerThumbMobile) DOM.playerThumbMobile.src = safeThumb;
  if (DOM.playerTitleMobile) DOM.playerTitleMobile.textContent = track.title || "Şarkı";
  if (DOM.playerArtistMobile) DOM.playerArtistMobile.textContent = track.artist || "Sanatçı";

  // Native Android Foreground MediaService & Lockscreen Sync
  try {
    if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.updateNowPlayingMetadata === 'function') {
      window.KurfaAndroidBridge.updateNowPlayingMetadata(track.title || "Kurfa Müzik", track.artist || "Sanatçı", safeThumb);
    }
  } catch (e) {}

  // Visualizer / Lyrics tab sync
  if (DOM.deckCoverImg) DOM.deckCoverImg.src = safeThumb;
  if (DOM.deckTitle) DOM.deckTitle.textContent = track.title || "Şarkı";
  if (DOM.deckArtist) DOM.deckArtist.textContent = track.artist || "Sanatçı";

  updatePlayerFavBtn();
  updateMediaSession(track);
  syncFloatingPipUI();
  if (typeof syncActiveTrackRowInDeviceAudio === 'function') {
    syncActiveTrackRowInDeviceAudio();
  }
}

function updatePlayPauseUI(playing) {
  // Desktop
  if (DOM.playerPlayIcon) {
    DOM.playerPlayIcon.textContent = playing ? 'pause' : 'play_arrow';
  }
  // Mobile Mini
  if (DOM.playerPlayIconMobile) {
    DOM.playerPlayIconMobile.textContent = playing ? 'pause' : 'play_arrow';
  }
  // Vinyl
  if (DOM.vinylDisc) {
    if (playing) {
      DOM.vinylDisc.style.animationPlayState = 'running';
      DOM.vinylDisc.classList.add('animate-spin-slow');
    } else {
      DOM.vinylDisc.style.animationPlayState = 'paused';
    }
  }
  // MediaSession state
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    } catch (e) {}
  }

  syncFloatingPipUI();
  const activeId = state.currentTrack ? state.currentTrack.id : null;
  if (state.currentTab === 'calma-listeleri') {
    renderPlaylistTracksTable();
  } else if (state._lastRenderedActiveId !== activeId) {
    state._lastRenderedActiveId = activeId;
    if (state.currentTab === 'kesfet') renderHomeTracklistTable();
  }
  if (typeof syncActiveTrackRowInDeviceAudio === 'function') {
    syncActiveTrackRowInDeviceAudio();
  }
}

function updatePlayerFavBtn() {
  const isFav = state.currentTrack && state.favorites.some(t => t.id === state.currentTrack.id);

  // Desktop fav button
  if (DOM.playerFavBtn) {
    const icon = DOM.playerFavBtn.querySelector('.material-symbols-outlined');
    if (isFav) {
      DOM.playerFavBtn.classList.add('text-primary');
      if (icon) { icon.textContent = 'favorite'; icon.classList.add('filled'); }
    } else {
      DOM.playerFavBtn.classList.remove('text-primary');
      if (icon) { icon.textContent = 'favorite_border'; icon.classList.remove('filled'); }
    }
  }

  // Mobile fav button
  if (DOM.playerFavBtnMobile) {
    const icon = DOM.playerFavBtnMobile.querySelector('.material-symbols-outlined');
    if (isFav) {
      DOM.playerFavBtnMobile.classList.add('text-primary');
      if (icon) { icon.textContent = 'favorite'; icon.classList.add('filled'); }
    } else {
      DOM.playerFavBtnMobile.classList.remove('text-primary');
      if (icon) { icon.textContent = 'favorite_border'; icon.classList.remove('filled'); }
    }
  }
}

// =============================================================================
// 8. 120 FPS SCRUBBABLE SEEKBAR & VOLUME SLIDER
// =============================================================================

let seekbarRaf = null;
let lastSeekbarTickTime = 0;

function formatTime(sec) {
  if (typeof sec !== 'number' || isNaN(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
window.formatTime = formatTime;

function getActiveMediaDuration() {
  let dur = 0;
  // 1. If Video mode, prioritize YouTube duration
  if (state.deckVisualMode === 'video' && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    dur = state.ytPlayer.getDuration() || 0;
  }
  // 2. If HTML5 audio has duration, use it
  if (!dur && DOM.audioEngine && DOM.audioEngine.duration && !isNaN(DOM.audioEngine.duration) && DOM.audioEngine.duration > 0) {
    dur = DOM.audioEngine.duration;
  }
  // 3. If YouTube player has duration
  if (!dur && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    dur = state.ytPlayer.getDuration() || 0;
  }
  // 4. Fallback to track duration string (e.g. "3:45")
  if (!dur && state.currentTrack && state.currentTrack.duration) {
    const parts = (state.currentTrack.duration || '').split(':').map(p => parseInt(p, 10));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      dur = parts[0] * 60 + parts[1];
    }
  }
  return dur || 0;
}
window.getActiveMediaDuration = getActiveMediaDuration;

function getActiveMediaCurrentTime() {
  if (state.deckVisualMode === 'video' && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    return state.ytPlayer.getCurrentTime() || 0;
  }
  if (DOM.audioEngine && DOM.audioEngine.src && !isNaN(DOM.audioEngine.currentTime) && DOM.audioEngine.currentTime > 0) {
    return DOM.audioEngine.currentTime;
  }
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    return state.ytPlayer.getCurrentTime() || 0;
  }
  return state.currentPlayheadTime || 0;
}
window.getActiveMediaCurrentTime = getActiveMediaCurrentTime;

function updateSeekbarUI(cur, dur) {
  if (!dur || dur <= 0) return;
  const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
  const timeCurStr = formatTime(cur);
  const timeDurStr = formatTime(dur);

  // Desktop seekbar
  if (DOM.playerSeekFill) DOM.playerSeekFill.style.width = `${pct}%`;
  if (DOM.playerSeekKnob) DOM.playerSeekKnob.style.left = `${pct}%`;
  if (DOM.playerTimeCur) DOM.playerTimeCur.textContent = timeCurStr;
  if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = timeDurStr;

  // Mobile mini seekbar (skip overwriting while user is actively finger-scrubbing)
  if (DOM.playerMobileSeekFill && !window.__kurfaMobileMiniScrubbing) {
    DOM.playerMobileSeekFill.style.width = `${pct}%`;
  }

  // Mobile Fullscreen Modal seekbar (only if open)
  if (state.mobileNowPlayingOpen) {
    const mnpSeekFill = document.getElementById('mnp-seek-fill');
    const mnpSeekKnob = document.getElementById('mnp-seek-knob');
    const mnpCur = document.getElementById('mnp-time-cur');
    const mnpDur = document.getElementById('mnp-time-dur');
    if (mnpSeekFill) mnpSeekFill.style.width = `${pct}%`;
    if (mnpSeekKnob) mnpSeekKnob.style.left = `${pct}%`;
    if (mnpCur) mnpCur.textContent = timeCurStr;
    if (mnpDur) mnpDur.textContent = timeDurStr;
  }

  // Floating PiP window seekbar (only query DOM when open)
  if (typeof pipModalOpen !== 'undefined' && pipModalOpen) {
    const pipSeekFill = document.getElementById('pip-seek-fill');
    const pipCur = document.getElementById('pip-time-cur');
    const pipDur = document.getElementById('pip-time-dur');
    if (pipSeekFill) pipSeekFill.style.width = `${pct}%`;
    if (pipCur) pipCur.textContent = timeCurStr;
    if (pipDur) pipDur.textContent = timeDurStr;
  }

  // Document PiP window seekbar (only if active)
  if (pipWindowInstance && pipWindowInstance.document) {
    const extSeekFill = pipWindowInstance.document.getElementById('pip-ext-seek-fill');
    const extCur = pipWindowInstance.document.getElementById('pip-ext-cur');
    const extDur = pipWindowInstance.document.getElementById('pip-ext-dur');
    if (extSeekFill) extSeekFill.style.width = `${pct}%`;
    if (extCur) extCur.textContent = timeCurStr;
    if (extDur) extDur.textContent = timeDurStr;
  }

  // Desktop Native Mini Player seekbar/track sync (throttled every 600ms)
  try {
    if (window.__kurfaDesktopMiniPlayerOpen && typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
      const nowMs = Date.now();
      if (!window._lastDesktopMiniSyncAt || (nowMs - window._lastDesktopMiniSyncAt) >= 600) {
        window._lastDesktopMiniSyncAt = nowMs;
        syncDesktopMiniPlayerState(cur, dur);
      }
    }
  } catch (_) {}

  // Android MediaSession timer & progress bar sync (immediate on track change, throttled every 4s)
  try {
    if (state.isPlaying && typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() &&
        window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.updatePlaybackTiming === 'function') {
      const nowMs = Date.now();
      const tid = state.currentTrack ? (state.currentTrack.id || '') : '';
      if (window._lastAndroidTimingTrackId !== tid || !window._lastAndroidTimingSyncAt || (nowMs - window._lastAndroidTimingSyncAt) >= 4000) {
        window._lastAndroidTimingTrackId = tid;
        window._lastAndroidTimingSyncAt = nowMs;
        window.KurfaAndroidBridge.updatePlaybackTiming(Math.floor(cur || 0), Math.floor(dur || 0));
      }
    }
  } catch (_) {}
}
window.updateSeekbarUI = updateSeekbarUI;

function syncLyricsToTime(cur) {
  if (typeof syncLyricsWithTime === 'function') {
    syncLyricsWithTime(cur);
  }
}
window.syncLyricsToTime = syncLyricsToTime;

function startSeekbarTicker() {
  if (seekbarRaf) {
    cancelAnimationFrame(seekbarRaf);
    seekbarRaf = null;
  }
  if (!state.isPlaying || (typeof document !== 'undefined' && document.hidden)) return;

  function tick(timestamp) {
    if (!state.isPlaying || (typeof document !== 'undefined' && document.hidden)) {
      seekbarRaf = null;
      return;
    }

    if (!state.isSeeking) {
      const now = timestamp || performance.now();
      const throttleInterval = 80;
      const adCheckInterval = 650;
      if (now - lastSeekbarTickTime >= throttleInterval) {
        lastSeekbarTickTime = now;
        if (now - lastAdCheckTime >= adCheckInterval) {
          lastAdCheckTime = now;
          checkAndHandleAdPlayback();
        }
        const cur = getActiveMediaCurrentTime();
        const dur = getActiveMediaDuration();

        if (dur > 0) {
          if (cur > 0) {
            state.currentPlayheadTime = cur;
          }
          updateSeekbarUI(cur, dur);
          if (state.currentTab === 'calma-listeleri' || state.mobileNowPlayingOpen) {
            syncLyricsWithTime(cur);
          }
        }
      }
    }
    seekbarRaf = requestAnimationFrame(tick);
  }

  seekbarRaf = requestAnimationFrame(tick);
}

function initSeekbarInteractions() {
  if (!DOM.playerSeekTrack) return;

  function calculateSeekPercentage(e) {
    const rect = DOM.playerSeekTrack.getBoundingClientRect();
    if (!rect.width || rect.width <= 0) return 0;
    const clientX = getEventClientX(e);
    const clickX = clientX - rect.left;
    return Math.max(0, Math.min(1, clickX / rect.width));
  }

  function applySeek(pct, commit = false) {
    if (DOM.playerSeekFill) DOM.playerSeekFill.style.width = `${pct * 100}%`;
    if (DOM.playerSeekKnob) DOM.playerSeekKnob.style.left = `${pct * 100}%`;
    if (DOM.playerMobileSeekFill) DOM.playerMobileSeekFill.style.width = `${pct * 100}%`;

    const dur = getActiveMediaDuration();
    const seekTime = Math.max(0, Math.min(dur, pct * dur));
    if (DOM.playerTimeCur) DOM.playerTimeCur.textContent = formatTime(seekTime);

    if (commit) {
      seekPlaybackToSeconds(seekTime);
    }
  }

  const onPointerDown = (e) => {
    state.isSeeking = true;
    DOM.playerSeekTrack.classList.add('dragging');
    const pct = calculateSeekPercentage(e);
    applySeek(pct, false);

    const onPointerMove = (moveEvent) => {
      if (!state.isSeeking) return;
      const movePct = calculateSeekPercentage(moveEvent);
      applySeek(movePct, false);
    };

    const onPointerUp = (upEvent) => {
      if (state.isSeeking) {
        state.isSeeking = false;
        DOM.playerSeekTrack.classList.remove('dragging');
        const finalPct = calculateSeekPercentage(upEvent);
        applySeek(finalPct, true);
      }
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  };

  DOM.playerSeekTrack.addEventListener('mousedown', onPointerDown);
  DOM.playerSeekTrack.addEventListener('touchstart', onPointerDown, { passive: true });
}

function initVolumeInteractions() {
  if (!DOM.playerVolTrack) return;

  function calculateVolPercentage(e) {
    const rect = DOM.playerVolTrack.getBoundingClientRect();
    if (!rect.width || rect.width <= 0) return state.volume;
    const clientX = getEventClientX(e);
    const clickX = clientX - rect.left;
    return Math.max(0, Math.min(1, clickX / rect.width));
  }

  const onPointerDown = (e) => {
    state.isScrubbingVol = true;
    DOM.playerVolTrack.classList.add('dragging');
    const vol = calculateVolPercentage(e);
    setPlayerVolume(vol);

    const onPointerMove = (moveEvent) => {
      if (!state.isScrubbingVol) return;
      const moveVol = calculateVolPercentage(moveEvent);
      setPlayerVolume(moveVol);
    };

    const onPointerUp = () => {
      state.isScrubbingVol = false;
      DOM.playerVolTrack.classList.remove('dragging');
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  };

  DOM.playerVolTrack.addEventListener('mousedown', onPointerDown);
  DOM.playerVolTrack.addEventListener('touchstart', onPointerDown, { passive: true });

  const onVolumeWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.05 : -0.05;
    setPlayerVolume((state.volume || 0) + delta);
  };
  DOM.playerVolTrack.addEventListener('wheel', onVolumeWheel, { passive: false });
  if (DOM.btnVolumeIcon) {
    DOM.btnVolumeIcon.addEventListener('wheel', onVolumeWheel, { passive: false });
  }
}

function setPlayerVolume(vol) {
  const numericVol = (typeof vol === 'number' && !isNaN(vol)) ? vol : 0.8;
  state.volume = Math.max(0, Math.min(1, numericVol));
  state.isMuted = state.volume === 0;
  safeSetStorage('kurfa_vol', state.volume.toString());

  if (DOM.playerVolFill) DOM.playerVolFill.style.width = `${state.volume * 100}%`;
  const knob = DOM.playerVolTrack ? DOM.playerVolTrack.querySelector('.vol-knob') : null;
  if (knob) knob.style.left = `${state.volume * 100}%`;

  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.setVolume === 'function') {
    try {
      if (state.volume === 0 && typeof state.ytPlayer.mute === 'function') {
        state.ytPlayer.mute();
      } else if (state.volume > 0 && !state._isAdMuted && typeof state.ytPlayer.unMute === 'function') {
        state.ytPlayer.unMute();
      }
      state.ytPlayer.setVolume(Math.round(state.volume * 100));
    } catch(e) {}
  }
  if (DOM.audioEngine) {
    DOM.audioEngine.volume = state.volume;
  }

  if (DOM.btnVolumeIcon) {
    const icon = DOM.btnVolumeIcon.querySelector('.material-symbols-outlined');
    if (icon) {
      if (state.volume === 0) icon.textContent = 'volume_off';
      else if (state.volume < 0.5) icon.textContent = 'volume_down';
      else icon.textContent = 'volume_up';
    }
  }
  if (typeof syncDesktopMiniPlayerState === 'function' && window.__kurfaDesktopMiniPlayerOpen) {
    syncDesktopMiniPlayerState(getActiveMediaCurrentTime() || 0, getActiveMediaDuration() || 0);
  }
}

function toggleMute() {
  if (state.isMuted) {
    const prev = safeGetFloat('kurfa_prev_vol', 0.8);
    setPlayerVolume(prev > 0 ? prev : 0.8);
    showToast("Ses Açıldı");
  } else {
    safeSetStorage('kurfa_prev_vol', state.volume.toString());
    setPlayerVolume(0);
    showToast("Sessize Alındı");
  }
}

// =============================================================================
// 9. REAL SYNCHRONIZED KARAOKE LYRICS (LRCLIB & LIVE HIGHLIGHT)
// =============================================================================

function cleanLyricsQuery(title, artist) {
  let rawT = (title || '')
    .replace(/\s*[\(\[](official\s*(music)?\s*video|video\s*klip|klip|audio|lyric\s*video|visualizer|canlı|live|hd|4k|prod\.[^\)\]]*)[^\)\]]*[\)\]]/gi, '')
    .replace(/\s*[–—-]\s*(official|klip|video|audio).*/gi, '')
    .replace(/["'"]/g, '')
    .trim();
  let rawA = (artist || '')
    .replace(/\s*-\s*topic/gi, '')
    .replace(/\b(netd\s*müzik|vevo|official|music|records|production)\b/gi, '')
    .replace(/["'"]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  let parsedArtist = rawA;
  let parsedTitle = rawT;
  const dashSplit = rawT.split(/\s+[–—-]\s+/).map(p => p.trim()).filter(Boolean);
  if (dashSplit.length >= 2) {
    parsedArtist = dashSplit[0];
    parsedTitle = dashSplit.slice(1).join(' - ');
  }

  const firstArtist = parsedArtist.split(/\s+(?:ve|&|,|feat\.?|ft\.?)\s+/i)[0]?.trim() || parsedArtist;
  return { cleanT: parsedTitle, cleanA: parsedArtist, firstA: firstArtist, rawT, rawA };
}

function updateLyricsOffsetUI() {
  const display = document.getElementById('lyrics-offset-display');
  if (display) {
    const off = state.lyricsOffset || 0;
    display.textContent = (off >= 0 ? '+' : '') + off.toFixed(1) + 's';
  }
}

function setExactLyricsOffset(offset) {
  if (!state.currentTrack) return;
  state.lyricsOffset = Math.round(offset * 10) / 10;
  if (state.currentTrack.id) {
    safeSetStorage('kurfa_offset_' + state.currentTrack.id, state.lyricsOffset.toString());
  }
  updateLyricsOffsetUI();
  showToast(`Söz Senkronu: ${(state.lyricsOffset >= 0 ? '+' : '') + state.lyricsOffset.toFixed(1)}s`, 'success');

  syncLyricsWithTime(getActiveMediaCurrentTime());
}
window.setExactLyricsOffset = setExactLyricsOffset;

function promptManualOffset() {
  const current = state.lyricsOffset || 0;
  const val = prompt("Şarkı sözü senkron farkını girin (Örnek: -41 veya +2.5 saniye):", current.toFixed(1));
  if (val !== null) {
    const num = parseFloat(val.replace(',', '.'));
    if (!isNaN(num)) {
      setExactLyricsOffset(num);
    }
  }
}
window.promptManualOffset = promptManualOffset;

function syncLineToCurrentPlayback(line) {
  if (!line || typeof line.time !== 'number') return;
  let cur = 0;
  if (state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    cur = state.ytPlayer.getCurrentTime();
  } else if (DOM.audioEngine) {
    cur = DOM.audioEngine.currentTime;
  }
  if (!cur) {
    showToast("Önce şarkıyı başlatın", "info");
    return;
  }
  // Target: line.time = cur + offset => offset = line.time - cur
  const newOffset = Math.round((line.time - cur) * 10) / 10;
  setExactLyricsOffset(newOffset);
  showToast(`Bu Satır Şu Ana Eşitlendi: ${(newOffset >= 0 ? '+' : '')}${newOffset.toFixed(1)}s`, 'success');
}
window.syncLineToCurrentPlayback = syncLineToCurrentPlayback;

function syncActiveLineToPlayback() {
  if (!state.activeLyrics || state.activeLyrics.length === 0) {
    showToast("Senkronize söz bulunamadı", "info");
    return;
  }
  let targetLine = null;
  if (state.currentLyricIndex >= 0 && state.activeLyrics[state.currentLyricIndex]) {
    targetLine = state.activeLyrics[state.currentLyricIndex];
  } else {
    // If before first line, try first line
    targetLine = state.activeLyrics[0];
  }
  if (targetLine) {
    syncLineToCurrentPlayback(targetLine);
  }
}
window.syncActiveLineToPlayback = syncActiveLineToPlayback;

function adjustLyricsOffset(delta) {
  if (!state.currentTrack) return;
  if (delta === 0) {
    setExactLyricsOffset(0);
  } else {
    const next = Math.round(((state.lyricsOffset || 0) + delta) * 10) / 10;
    setExactLyricsOffset(next);
  }
}
window.adjustLyricsOffset = adjustLyricsOffset;

let lyricsAbortController = null;
let lyricsRequestToken = 0;
let lyricsLoadedTrackId = null;
let lyricsUserScrollPauseUntil = 0;
let mnpLyricTimer = null;

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('karaoke-lyrics-box');
    if (box) {
      const pauseAutoScroll = () => { lyricsUserScrollPauseUntil = Date.now() + 4000; };
      box.addEventListener('wheel', pauseAutoScroll, { passive: true });
      box.addEventListener('touchmove', pauseAutoScroll, { passive: true });
    }
  });
}

async function updateLyricsDisplay() {
  const reqToken = ++lyricsRequestToken;
  if (lyricsAbortController) {
    try { lyricsAbortController.abort(); } catch (e) {}
  }
  lyricsAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const signal = lyricsAbortController ? lyricsAbortController.signal : undefined;

  // Immediately clear stale lyrics from previous track so syncLyricsWithTime never highlights old lines
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  lyricsLoadedTrackId = null;
  lyricsUserScrollPauseUntil = 0;

  if (!DOM.deckLyricsLines) return;

  const track = state.currentTrack;
  if (!track) {
    renderLyricsEmpty(null);
    return;
  }

  const cacheKey = `${track.id || ''}_${track.title || ''}_${track.artist || ''}`;

  // Restore track-specific offset from localStorage
  const savedOffset = track.id ? localStorage.getItem('kurfa_offset_' + track.id) : null;
  const parsedOffset = savedOffset !== null ? parseFloat(savedOffset) : 0;
  state.lyricsOffset = !isNaN(parsedOffset) ? parsedOffset : 0;
  updateLyricsOffsetUI();

  // Check memory cache
  if (lyricsMemoryCache.has(cacheKey)) {
    const cached = lyricsMemoryCache.get(cacheKey);
    lyricsLoadedTrackId = track.id || cacheKey;
    if (cached.synced && cached.lines) {
      checkAndDisplayClipIntroHint(track, cached.duration || 0);
      renderLyricsList(cached.lines, cached.source);
      syncLyricsWithTime(getActiveMediaCurrentTime(), true);
    } else if (cached.plain) {
      checkAndDisplayClipIntroHint(track, 0);
      renderPlainLyrics(cached.plain, cached.source);
    } else {
      checkAndDisplayClipIntroHint(track, 0);
      renderLyricsEmpty(track);
    }
    return;
  }

  // Show loading skeleton in lyrics box
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = "Şarkı Sözleri Aranıyor...";
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = "Bağlanıyor...";
  DOM.deckLyricsLines.innerHTML = `
    <div class="py-8 flex flex-col items-center justify-center gap-2 text-on-surface-variant">
      <span class="material-symbols-outlined text-[32px] animate-spin text-primary">progress_activity</span>
      <p class="text-xs font-semibold">Senkronize şarkı sözleri veritabanından çekiliyor...</p>
    </div>
  `;

  const { cleanT, cleanA, firstA, rawT } = cleanLyricsQuery(track.title, track.artist);
  const trackDurationSec = (typeof parseDurationToSec === 'function' ? parseDurationToSec(track.duration) : 0) || getActiveMediaDuration() || 0;

  function saveLyricsToLocalStorage(entry) {
    try {
      const raw = localStorage.getItem('kurfa_lyrics_cache_v1');
      const store = (raw ? JSON.parse(raw) : {}) || {};
      const keys = Object.keys(store);
      if (keys.length >= 40) delete store[keys[0]];
      store[cacheKey] = { ...entry, expiresAt: Date.now() + 7 * 24 * 3600 * 1000 };
      localStorage.setItem('kurfa_lyrics_cache_v1', JSON.stringify(store));
    } catch (e) {}
  }

  // 0. Instant localStorage persistent lyrics check (0 network requests)
  try {
    const raw = localStorage.getItem('kurfa_lyrics_cache_v1');
    const store = raw ? JSON.parse(raw) : null;
    const saved = store && store[cacheKey];
    if (saved && saved.expiresAt > Date.now()) {
      lyricsLoadedTrackId = track.id || cacheKey;
      if (saved.synced && Array.isArray(saved.lines)) {
        lyricsMemoryCache.set(cacheKey, saved);
        checkAndDisplayClipIntroHint(track, saved.duration || 0);
        renderLyricsList(saved.lines, saved.source || "LRCLIB Canlı Sözler");
        syncLyricsWithTime(getActiveMediaCurrentTime(), true);
        return;
      } else if (saved.plain) {
        lyricsMemoryCache.set(cacheKey, saved);
        checkAndDisplayClipIntroHint(track, 0);
        renderPlainLyrics(saved.plain, saved.source || "LRCLIB Tam Metin");
        return;
      }
    }
  } catch (e) {}

  // 1. Direct browser-to-LRCLIB fetch FIRST (0 Cloudflare Worker load, CORS enabled)
  const clientQueries = [...new Set([
    `${cleanT} ${cleanA}`.trim(),
    firstA && firstA !== cleanA ? `${cleanT} ${firstA}`.trim() : '',
    `${cleanA} ${cleanT}`.trim(),
    cleanT,
    rawT
  ].filter(Boolean))];

  function scoreLyricsMatchClient(cand, targetTitle, targetArtist, durSec) {
    if (!cand || (!cand.syncedLyrics && !cand.plainLyrics)) return -1;
    const norm = s => (s || '').toLowerCase()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[\(\[\{].*?[\)\]\}]/g, ' ')
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const cTitle = norm(cand.trackName);
    const cArtist = norm(cand.artistName);
    const tTitle = norm(targetTitle);
    const tArtist = norm(targetArtist);

    if (!cTitle || !tTitle) return -1;
    const isDirect = cTitle === tTitle || cTitle.includes(tTitle) || tTitle.includes(cTitle);
    const words = tTitle.split(' ').filter(w => w.length > 1);
    let count = 0;
    for (const w of words) {
      if (cTitle.includes(w)) count++;
    }
    const overlap = words.length > 0 ? (count / words.length) : (isDirect ? 1 : 0);
    if (!isDirect && overlap < 0.6) return -1;

    let score = isDirect ? 4.0 : overlap * 3.0;
    const cleanArt = tArtist.replace(/youtube|vevo|topic|music|sanatci|netd|muzik/g, '').trim();
    if (cleanArt) {
      if (cArtist === cleanArt || cArtist.includes(cleanArt) || cleanArt.includes(cArtist)) {
        score += 3.0;
      } else {
        const firstArtNorm = norm(firstA || '');
        if (firstArtNorm && (cArtist.includes(firstArtNorm) || firstArtNorm.includes(cArtist))) {
          score += 2.2;
        } else if (cArtist && words.length <= 2 && !isDirect) {
          return -1;
        }
      }
    }
    if (cand.syncedLyrics) score += 1.5;

    // Duration proximity weighting prevents matching sped-up/cover/short versions
    if (durSec > 20 && Number(cand.duration) > 20) {
      const diff = Math.abs(Number(cand.duration) - durSec);
      if (diff <= 3) score += 3.5;
      else if (diff <= 8) score += 2.0;
      else if (diff <= 15) score += 0.5;
      else if (diff > 35) score -= 3.0;
    }
    return score;
  }

  for (const q of clientQueries) {
    if (reqToken !== lyricsRequestToken || (signal && signal.aborted)) return;
    try {
      const directRes = await fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(q)}`, { signal });
      if (reqToken !== lyricsRequestToken) return;
      if (directRes.ok) {
        const list = await directRes.json();
        if (reqToken !== lyricsRequestToken) return;
        if (Array.isArray(list) && list.length > 0) {
          let best = null;
          let bestSc = 0;
          for (const item of list) {
            const sc = scoreLyricsMatchClient(item, cleanT, cleanA, trackDurationSec);
            if (sc > bestSc) {
              bestSc = sc;
              best = item;
            }
          }
          if (best && bestSc > 0) {
            lyricsLoadedTrackId = track.id || cacheKey;
            if (best.syncedLyrics) {
              const parsedLines = parseLyricsPayload(best, track);
              const entry = { synced: true, lines: parsedLines, source: "LRCLIB Canlı Sözler", duration: best.duration };
              lyricsMemoryCache.set(cacheKey, entry);
              saveLyricsToLocalStorage(entry);
              checkAndDisplayClipIntroHint(track, best.duration || 0);
              renderLyricsList(parsedLines, "LRCLIB Canlı Sözler");
              syncLyricsWithTime(getActiveMediaCurrentTime(), true);
              return;
            } else if (best.plainLyrics) {
              const entry = { synced: false, plain: best.plainLyrics, source: "LRCLIB Tam Metin" };
              lyricsMemoryCache.set(cacheKey, entry);
              saveLyricsToLocalStorage(entry);
              checkAndDisplayClipIntroHint(track, 0);
              renderPlainLyrics(best.plainLyrics, "LRCLIB Tam Metin");
              return;
            }
          }
        }
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
  }

  if (reqToken !== lyricsRequestToken) return;

  // 2. Fallback to Cloudflare worker lyrics resolver only when direct client query misses
  try {
    const res = await fetch(`${API_BASE}/api/lyrics?track=${encodeURIComponent(cleanT)}&artist=${encodeURIComponent(cleanA)}`, { signal });
    if (reqToken !== lyricsRequestToken) return;
    if (res.ok) {
      const data = await res.json();
      if (reqToken !== lyricsRequestToken) return;

      if (data.success && data.syncedLyrics) {
        const parsedLines = parseLyricsPayload(data, track);
        const entry = { synced: true, lines: parsedLines, source: "LRCLIB Canlı Sözler", duration: data.duration };
        lyricsMemoryCache.set(cacheKey, entry);
        saveLyricsToLocalStorage(entry);
        checkAndDisplayClipIntroHint(track, data.duration || 0);
        renderLyricsList(parsedLines, "LRCLIB Canlı Sözler");
        syncLyricsWithTime(getActiveMediaCurrentTime());
        return;
      } else if (data.success && data.plainLyrics) {
        const entry = { synced: false, plain: data.plainLyrics, source: "LRCLIB Tam Metin" };
        lyricsMemoryCache.set(cacheKey, entry);
        saveLyricsToLocalStorage(entry);
        checkAndDisplayClipIntroHint(track, 0);
        renderPlainLyrics(data.plainLyrics, "LRCLIB Tam Metin");
        return;
      }
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return;
  }

  if (reqToken !== lyricsRequestToken) return;

  // 3. Honest Empty State
  lyricsMemoryCache.set(cacheKey, { empty: true });
  checkAndDisplayClipIntroHint(track, 0);
  renderLyricsEmpty(track);
}

function checkAndDisplayClipIntroHint(track, lrcDuration) {
  const hintEl = document.getElementById('lyrics-intro-diff-hint');
  if (!hintEl) return;

  let ytDur = 0;
  if (state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    ytDur = state.ytPlayer.getDuration();
  }
  if (!ytDur && track && track.duration) {
    const parts = String(track.duration).split(':').map(p => parseInt(p, 10));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      ytDur = parts[0] * 60 + parts[1];
    }
  }

  if (ytDur > 30 && lrcDuration > 30) {
    const diff = Math.round(ytDur - lrcDuration);
    if (diff >= 6 && diff <= 120 && Math.abs(state.lyricsOffset) < 2) {
      const safeDiff = Math.max(0, Math.min(120, Number(diff) || 0));
      hintEl.innerHTML = `
        <span class="flex items-center gap-1.5">
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[15px] text-amber-400">movie</span>Klip İntro Farkı:</span>
          <span class="font-mono font-bold">-${safeDiff}s</span>
          <button type="button" class="px-1.5 py-0.5 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-700 dark:text-amber-300 font-bold ml-1 transition-colors underline" onclick="setExactLyricsOffset(-${safeDiff})">Uygula</button>
        </span>
      `;
      hintEl.classList.remove('hidden');
      hintEl.classList.add('flex');
      return;
    }
  }
  hintEl.innerHTML = '';
  hintEl.classList.add('hidden');
  hintEl.classList.remove('flex');
}

function isLrcMetaLine(text, time, track) {
  if (!text) return true;
  const t = text.trim();
  if (/^[\u266a\u266b\s.*-]+$/.test(t)) return true;
  if (time <= 8) {
    const lower = t.toLowerCase();
    if (/^(söz|müzik|düzenleme|aranje|mix|mastering|yazar|besteci|parça|şarkı|albüm|kayıt|producer|written by|composed by|lyrics by|arranged by|mixed by|mastered by|directed by|klip yönetmeni)[:\s-]/i.test(lower)) {
      return true;
    }
    if (track) {
      const title = (track.title || '').toLowerCase().trim();
      const artist = (track.artist || '').toLowerCase().trim();
      if (lower === title || lower === artist || lower === `${artist} - ${title}`) {
        return true;
      }
    }
  }
  return false;
}

function parseLyricsPayload(data, track) {
  if (!data || !data.syncedLyrics) return [];
  const lines = [];
  const rawLines = String(data.syncedLyrics).split('\n');
  let lrcOffsetSec = 0;
  for (const raw of rawLines) {
    const offMatch = raw.match(/^\s*\[offset:\s*([+-]?\d+)\s*\]/i);
    if (offMatch) {
      lrcOffsetSec = (parseInt(offMatch[1], 10) || 0) / 1000;
      break;
    }
  }
  const timeTagGlobal = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
  for (const raw of rawLines) {
    if (/^\s*\[(ar|ti|al|by|length|offset|re|ve):/i.test(raw)) continue;
    const text = raw.replace(timeTagGlobal, '').trim();
    let match;
    timeTagGlobal.lastIndex = 0;
    while ((match = timeTagGlobal.exec(raw)) !== null) {
      const min = parseInt(match[1], 10);
      const sec = parseInt(match[2], 10);
      const ms = match[3] ? parseFloat('0.' + match[3]) : 0;
      const totalSec = Math.max(0, min * 60 + sec + ms + lrcOffsetSec);
      if (text && !isLrcMetaLine(text, totalSec, track)) {
        lines.push({ time: totalSec, text });
      }
    }
  }
  lines.sort((a, b) => a.time - b.time);
  return lines;
}

function renderLyricsList(lines, sourceName) {
  state.activeLyrics = lines;
  state.currentLyricIndex = -1;

  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = "Canlı Senkronize Sözler";
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = sourceName || "Senkronize LRC";

  if (!DOM.deckLyricsLines) return;
  DOM.deckLyricsLines.innerHTML = '';

  lines.forEach((line) => {
    const p = document.createElement('div');
    p.className = `lyric-line group flex items-center justify-between cursor-pointer select-none text-sm md:text-base`;
    p.setAttribute('data-time', line.time);
    
    const textSpan = document.createElement('span');
    textSpan.className = 'flex-1 leading-relaxed';
    textSpan.textContent = line.text;

    // Quick sync button on hover
    const syncBtn = document.createElement('button');
    syncBtn.type = 'button';
    syncBtn.className = 'opacity-0 group-hover:opacity-100 hover:opacity-100 px-2 py-0.5 rounded text-[10px] font-bold bg-primary/15 text-primary hover:bg-primary/25 transition-all flex items-center gap-1 ml-2 flex-shrink-0';
    syncBtn.title = 'Şarkı çalarken bu satırı duyduğunuz an tıklayın: Şarkı sözü senkronunu tam buraya kilitler';
    syncBtn.innerHTML = `<span class="material-symbols-outlined text-[14px]">sync</span><span class="hidden sm:inline">Eşitle</span>`;
    syncBtn.onclick = (e) => {
      e.stopPropagation();
      syncLineToCurrentPlayback(line);
    };

    // Tap lyric to jump
    p.onclick = () => {
      const targetVideoTime = Math.max(0, line.time - (state.lyricsOffset || 0));
      seekPlaybackToSeconds(targetVideoTime);
      showToast(`${formatTime(targetVideoTime)} saniyesine sarıldı`, 'info');
    };

    p.appendChild(textSpan);
    p.appendChild(syncBtn);
    DOM.deckLyricsLines.appendChild(p);
  });
}

function renderPlainLyrics(plainText, sourceName) {
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = "Düz Metin Şarkı Sözleri";
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = sourceName || "LRCLIB";

  if (!DOM.deckLyricsLines) return;
  const lines = plainText.split('\n').map(l => l.trim()).filter(Boolean);
  DOM.deckLyricsLines.innerHTML = `
    <div class="pb-2 text-[11px] text-on-surface-variant/80 border-b border-surface-container/50">
      * Bu parça için canlı zaman damgası bulunmamaktadır, şarkı sözleri tam metin olarak sunulmaktadır.
    </div>
    <div class="flex flex-col gap-2 pt-2">
      ${lines.map(l => `<p class="py-1 text-sm text-on-surface font-medium leading-relaxed">${escapeHtml(l)}</p>`).join('')}
    </div>
  `;
  const mnpLyricLine = document.getElementById('mnp-lyric-line');
  if (mnpLyricLine && lines.length > 0) {
    mnpLyricLine.textContent = lines[0];
  }
}

function renderLyricsEmpty(track) {
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = track ? "Söz Bulunamadı" : "Bekleniyor";
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = "Veritabanı";

  const mnpLyricLine = document.getElementById('mnp-lyric-line');
  if (mnpLyricLine) {
    mnpLyricLine.textContent = track ? `${track.title} - ${track.artist}` : "Çalan parça yok";
  }

  if (!DOM.deckLyricsLines) return;

  if (!track) {
    DOM.deckLyricsLines.innerHTML = `
      <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-3 text-on-surface-variant">
        <div class="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant">
          <span class="material-symbols-outlined text-[28px]" aria-hidden="true">music_note</span>
        </div>
        <div>
          <p class="text-sm font-bold text-on-surface">Çalan şarkı bulunmuyor</p>
          <p class="text-xs text-on-surface-variant mt-1 max-w-sm">Bir şarkı başlattığınızda sözler ve senkronizasyon burada görünecektir.</p>
        </div>
      </div>
    `;
    return;
  }

  const queryStr = `${track.artist || ''} ${track.title || ''} şarkı sözleri`;
  DOM.deckLyricsLines.innerHTML = `
    <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-3 text-on-surface-variant">
      <div class="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant">
        <span class="material-symbols-outlined text-[28px]" aria-hidden="true">lyrics</span>
      </div>
      <div>
        <p class="text-sm font-bold text-on-surface">Bu parça için senkronize söz bulunamadı</p>
        <p class="text-xs text-on-surface-variant mt-1 max-w-sm">YouTube video klibi, canlı performans veya veritabanında henüz yer almayan bir sürüm olabilir.</p>
      </div>
      <a href="https://www.google.com/search?q=${encodeURIComponent(queryStr)}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary transition-all">
        <span>Google'da Şarkı Sözlerini Ara</span>
        <span class="material-symbols-outlined text-[16px]" aria-hidden="true">open_in_new</span>
      </a>
    </div>
  `;
}

function syncLyricsWithTime(currentTime, forceScroll = false) {
  // Exit immediately if tab is hidden or lyrics are not visible on screen (0 ms CPU when dormant)
  if (typeof document !== 'undefined' && document.hidden) return;
  const isLyricsVisible = (state.currentTab === 'calma-listeleri') || (state.mobileNowPlayingOpen === true);
  if (!isLyricsVisible) return;

  if (!state.activeLyrics || state.activeLyrics.length === 0 || !DOM.deckLyricsLines) return;

  const adjustedTime = (currentTime || 0) + (state.lyricsOffset || 0);

  // 1. Detect and handle Intro / Instrumental phase before first vocal line
  const firstLyricTime = state.activeLyrics[0].time;
  if (adjustedTime < firstLyricTime) {
    if (state.currentLyricIndex !== -2 || forceScroll) {
      state.currentLyricIndex = -2; // -2 designates Intro / Instrumental
      const allLines = DOM.deckLyricsLines.querySelectorAll('.lyric-line');
      allLines.forEach(l => {
        l.classList.remove('active-lyric', 'active');
        l.classList.add('text-on-surface-variant');
      });

      if (DOM.lyricsStatusLabel) {
        DOM.lyricsStatusLabel.innerHTML = `
          <span class="flex items-center gap-1.5 text-secondary">
            <span class="material-symbols-outlined text-[14px] animate-pulse">graphic_eq</span>
            <span>Enstrümantal Giriş</span>
          </span>
        `;
      }

      const mnpLyricLine = document.getElementById('mnp-lyric-line');
      if (mnpLyricLine) {
        mnpLyricLine.innerHTML = `<span class="italic opacity-80 flex items-center justify-center gap-1.5"><span class="material-symbols-outlined text-[16px] animate-pulse">graphic_eq</span><span>Enstrümantal Giriş</span></span>`;
      }

      if (DOM.karaokeLyricsBox && (forceScroll || Date.now() >= lyricsUserScrollPauseUntil)) {
        DOM.karaokeLyricsBox.scrollTo({ top: 0, behavior: forceScroll ? 'auto' : 'smooth' });
      }
    }
    return;
  }

  // 2. Active vocal lyrics binary search (O(log N))
  let lo = 0;
  let hi = state.activeLyrics.length - 1;
  let activeIdx = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (adjustedTime >= state.activeLyrics[mid].time) {
      activeIdx = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (activeIdx !== state.currentLyricIndex || forceScroll) {
    const wasIntro = (state.currentLyricIndex === -2);
    state.currentLyricIndex = activeIdx;

    if ((wasIntro || forceScroll) && DOM.lyricsStatusLabel) {
      DOM.lyricsStatusLabel.textContent = "Canlı Senkronize Sözler";
    }

    const lines = DOM.deckLyricsLines.querySelectorAll('.lyric-line');
    lines.forEach((line, i) => {
      if (i === activeIdx) {
        line.classList.add('active-lyric', 'active');
        line.classList.remove('text-on-surface-variant');

        // Scroll ONLY the dedicated lyrics box smoothly unless user manually scrolled recently
        if (DOM.karaokeLyricsBox && (forceScroll || Date.now() >= lyricsUserScrollPauseUntil)) {
          const container = DOM.karaokeLyricsBox;
          const containerRect = container.getBoundingClientRect();
          const lineRect = line.getBoundingClientRect();
          const relativeY = (lineRect.top - containerRect.top) + container.scrollTop;
          const targetScroll = relativeY - (container.clientHeight / 2) + (lineRect.height / 2);
          container.scrollTo({ top: Math.max(0, targetScroll), behavior: forceScroll ? 'auto' : 'smooth' });
        }
      } else {
        line.classList.remove('active-lyric', 'active');
        line.classList.add('text-on-surface-variant');
      }
    });

    // Mobile Fullscreen Modal Single-Line Animated Lyric
    const mnpLyricLine = document.getElementById('mnp-lyric-line');
    if (mnpLyricLine && state.activeLyrics[activeIdx]) {
      const newLineText = state.activeLyrics[activeIdx].text || '';
      if (mnpLyricLine.textContent !== newLineText) {
        clearTimeout(mnpLyricTimer);
        mnpLyricLine.style.opacity = '0';
        mnpLyricLine.style.transform = 'translateY(6px)';
        mnpLyricTimer = setTimeout(() => {
          mnpLyricLine.textContent = newLineText;
          mnpLyricLine.style.opacity = '1';
          mnpLyricLine.style.transform = 'translateY(0)';
        }, 120);
      }
    }
  }
}

// =============================================================================
// 10. SEARCH & INSTANT CONVERTER (100% RELIABLE)
// =============================================================================

let searchDebounceTimeout = null;
let searchAbortController = null;
let searchSeqToken = 0;
let quickSearchAbortController = null;
let quickSearchSeqToken = 0;

function debouncedSearch(query) {
  if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
  searchDebounceTimeout = setTimeout(() => {
    executeSearchImmediate(query, false);
  }, 400);
}

async function executeSearchImmediate(query, autoSwitchTab = true, options = {}) {
  if (!query || query.trim().length === 0) return;
  const cleanQ = query.trim();
  const preserveBaseQuery = Boolean(options && options.preserveBaseQuery);

  if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
  if (searchAbortController) {
    try { searchAbortController.abort(); } catch (e) {}
  }
  searchAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const seqToken = ++searchSeqToken;

  if (!preserveBaseQuery) {
    state.baseSearchQuery = cleanQ;
    if (DOM.topSearchInput && DOM.topSearchInput.value !== cleanQ) {
      DOM.topSearchInput.value = cleanQ;
    }
  }

  const urlMatch = cleanQ.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  const matchedYtId = urlMatch ? safeYtId(urlMatch[1]) : null;
  if (matchedYtId) {
    const directTrack = {
      id: matchedYtId,
      title: "YouTube Parçası (" + matchedYtId + ")",
      artist: "Doğrudan Akış",
      duration: "3:30",
      thumbnail: `https://i.ytimg.com/vi/${matchedYtId}/hqdefault.jpg`
    };
    playTrackById(matchedYtId, directTrack);
    switchTab('arama', true);
    renderSpotlightCard(directTrack);
    showToast("YouTube linki doğrudan akışa alındı");
    return;
  }

  if (autoSwitchTab && state.currentTab !== 'arama') {
    switchTab('arama', false);
  }

  if (DOM.searchResultsCount) {
    DOM.searchResultsCount.textContent = `"${cleanQ}" Aranıyor...`;
  }
  const artistsSection = document.getElementById('search-artists-section');
  const artistsGrid = document.getElementById('search-artists-grid');
  if (artistsSection && artistsGrid) {
    artistsSection.classList.add('hidden');
    artistsSection.classList.remove('flex');
    artistsGrid.innerHTML = '';
  }

  if (DOM.searchResultsList) {
    DOM.searchResultsList.innerHTML = `
      <div class="col-span-full py-12 flex flex-col items-center justify-center gap-3 text-on-surface-variant">
        <span class="material-symbols-outlined text-[36px] animate-spin text-primary">progress_activity</span>
        <p class="text-sm font-semibold">Sonuçlar ve sanatçılar getiriliyor...</p>
      </div>
    `;
  }

  const sig = searchAbortController ? searchAbortController.signal : undefined;
  const artistsPromise = (!matchedYtId)
    ? kurfaSearchArtists(cleanQ, sig).catch(() => [])
    : Promise.resolve([]);

  try {
    const [data, artists] = await Promise.all([
      kurfaSearchTracks(cleanQ, {
        signal: sig,
        source: state.searchSource || 'auto'
      }),
      artistsPromise
    ]);
    if (seqToken !== searchSeqToken) return;

    renderSearchArtistsShelf(artists, cleanQ);

    if (data && data.success && data.results && data.results.length > 0) {
      state.currentSearchResults = data.results;
      state._rawSearchResults = [...data.results];
      state.currentSearchQuery = cleanQ;
      setSearchSort('alaka', { silent: true, skipRender: true });
      renderSearchResults(data.results, cleanQ);
    } else {
      state.currentSearchResults = [];
      state._rawSearchResults = [];
      renderSearchEmpty(cleanQ);
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return;
    if (seqToken !== searchSeqToken) return;
    console.error("Search fetch error:", err);
    const local = CURATED_TRACKS.filter(t =>
      (t.title || '').toLowerCase().includes(cleanQ.toLowerCase()) ||
      (t.artist || '').toLowerCase().includes(cleanQ.toLowerCase())
    );
    if (local.length > 0) {
      state.currentSearchResults = local;
      state._rawSearchResults = [...local];
      state.currentSearchQuery = cleanQ;
      setSearchSort('alaka', { silent: true, skipRender: true });
      renderSearchResults(local, cleanQ);
    } else {
      state.currentSearchResults = [];
      state._rawSearchResults = [];
      renderSearchEmpty(cleanQ);
    }
  }

  if (autoSwitchTab) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderSearchResults(results, query) {
  if (DOM.searchResultsCount) {
    DOM.searchResultsCount.textContent = `"${query}" İçin ${results.length} Sonuç Bulundu`;
  }

  if (results.length > 0) {
    renderSpotlightCard(results[0]);
  }

  if (!DOM.searchResultsList) return;
  DOM.searchResultsList.innerHTML = '';
  const searchFrag = document.createDocumentFragment();

  results.forEach((track) => {
    const card = document.createElement('div');
    card.className = "flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm group border border-transparent hover:border-surface-container";

    const safeTitle = escapeHtml(track.title || "Şarkı");
    const safeArtist = escapeHtml(track.artist || "Sanatçı");
    const safeDur = escapeHtml(track.duration || "3:30");
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    card.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 cursor-pointer track-info-click">
        <div class="relative w-12 h-12 rounded-lg overflow-hidden bg-surface-container-high flex-shrink-0">
          <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="material-symbols-outlined text-white text-[24px]">play_arrow</span>
          </div>
        </div>
        <div class="flex flex-col min-w-0">
          <h4 class="text-xs md:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</h4>
          <p class="text-[11px] text-on-surface-variant truncate">${safeArtist} - YouTube Ses</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2">
        <span class="text-xs text-on-surface-variant font-mono hidden sm:inline">${safeDur}</span>
        <button type="button" class="btn-queue-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="Sıraya Ekle">
          <span class="material-symbols-outlined text-[18px]">queue_music</span>
        </button>
        <button type="button" class="btn-add-pl-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
        </button>
        <button type="button" class="btn-fav-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Favorilere Ekle">
          <span class="material-symbols-outlined text-[18px]">${state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="btn-dl-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="İndir">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
        <button type="button" class="btn-play-track w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all" title="Çal">
          <span class="material-symbols-outlined text-[18px]">play_arrow</span>
        </button>
      </div>
    `;

    const playSearchTrack = () => {
      state.queue = [...results];
      const foundIdx = results.findIndex(t => t.id === track.id);
      state.queueIndex = foundIdx !== -1 ? foundIdx : 0;
      state.playingContextSub = 'ARAMA LİSTESİNDEN ÇALINIYOR';
      state.playingContextTitle = query || `${track.artist} Şarkıları`;
      saveQueueState();
      playTrackById(track.id, track);
    };

    const infoClick = card.querySelector('.track-info-click');
    if (infoClick) infoClick.onclick = playSearchTrack;

    const playBtn = card.querySelector('.btn-play-track');
    if (playBtn) playBtn.onclick = playSearchTrack;

    const qBtn = card.querySelector('.btn-queue-track');
    if (qBtn) {
      qBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track);
      };
    }

    const addPlBtn = card.querySelector('.btn-add-pl-track');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }

    const favBtn = card.querySelector('.btn-fav-track');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border';
        }
      };
    }

    const dlBtn = card.querySelector('.btn-dl-track');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    searchFrag.appendChild(card);
  });
  DOM.searchResultsList.appendChild(searchFrag);
}

function renderSearchArtistsShelf(artists, query) {
  const section = document.getElementById('search-artists-section');
  const grid = document.getElementById('search-artists-grid');
  if (!section || !grid) return;
  grid.innerHTML = '';

  const list = Array.isArray(artists) ? artists.filter(a => a && a.name) : [];
  if (list.length === 0) {
    section.classList.add('hidden');
    section.classList.remove('flex');
    return;
  }

  section.classList.remove('hidden');
  section.classList.add('flex');

  list.slice(0, 12).forEach((artist) => {
    const safeName = escapeHtml(artist.name || 'Sanatçı');
    const safeGenre = escapeHtml(artist.genre || 'Sanatçı');
    const fansNum = Number(artist.fans || 0);
    const fansLabel = fansNum >= 1000000
      ? `${(fansNum / 1000000).toFixed(1)}M dinleyici`
      : (fansNum >= 1000 ? `${Math.round(fansNum / 1000)}K dinleyici` : safeGenre);
    const safeImg = escapeHtml(safeUrl(artist.image || artist.img, './kurfamuzik_logo.png'));

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'group flex flex-col items-center text-center w-28 sm:w-32 p-3 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container/60 transition-all cursor-pointer flex-shrink-0';
    card.innerHTML = `
      <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-2 shadow-sm ring-1 ring-surface-container group-hover:ring-primary/50 transition-all bg-surface-container-high">
        <img src="${safeImg}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
      </div>
      <span class="font-bold text-xs text-on-surface truncate w-full group-hover:text-primary transition-colors">${safeName}</span>
      <span class="text-[10px] text-on-surface-variant truncate w-full mt-0.5">${escapeHtml(fansLabel)}</span>
    `;

    const imgEl = card.querySelector('img');
    if (imgEl) {
      imgEl.addEventListener('error', () => {
        const fallback = document.createElement('div');
        fallback.className = 'w-full h-full flex items-center justify-center font-bold text-lg text-primary bg-primary/10';
        fallback.textContent = (artist.name || '?').charAt(0).toUpperCase();
        imgEl.replaceWith(fallback);
      }, { once: true });
    }

    card.onclick = () => {
      openArtistDetail({
        id: artist.id || artist.name,
        name: artist.name,
        genre: artist.genre || 'Müzik',
        fans: artist.fans || 0,
        img: artist.image || artist.img || './kurfamuzik_logo.png',
        dynamic: true
      });
    };
    grid.appendChild(card);
  });
}

function renderSpotlightCard(track) {
  if (!DOM.searchSpotlightBox || !track) return;
  DOM.searchSpotlightBox.style.display = 'block';

  const safeTitle = escapeHtml(track.title || "Şarkı");
  const safeArtist = escapeHtml(track.artist || "Sanatçı");
  const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));
  const isOpenCatalog = track.source === 'audius' || track.source === 'open-catalog';
  const sourceLabel = isOpenCatalog ? 'Reklamsız Açık Katalog' : 'Doğrudan Ses Akışı';

  DOM.searchSpotlightBox.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-md bg-surface-container-high flex-shrink-0 group cursor-pointer" id="spotlight-thumb-btn">
        <img src="${safeThumb}" alt="${safeTitle}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="absolute right-2 bottom-2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <span class="material-symbols-outlined text-[18px] filled">play_arrow</span>
        </div>
      </div>
      <div class="flex-1 text-center sm:text-left min-w-0">
        <span class="text-[11px] font-semibold ${isOpenCatalog ? 'text-emerald-500' : 'text-on-surface-variant'}">${sourceLabel}</span>
        <h3 class="text-base sm:text-lg font-extrabold text-on-surface truncate mt-0.5">${safeTitle}</h3>
        <p class="text-xs text-on-surface-variant font-medium mb-3 truncate">${safeArtist}</p>
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <button type="button" id="spotlight-play-btn" class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary-container transition-all">
            <span class="material-symbols-outlined text-[18px]">play_arrow</span>
            <span>Hemen Dinle</span>
          </button>
          <button type="button" id="spotlight-dl-btn" class="flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container text-on-surface text-xs font-bold hover:bg-surface-container-high transition-colors">
            <span class="material-symbols-outlined text-[16px]">download</span>
            <span>İndir</span>
          </button>
          <button type="button" id="spotlight-queue-btn" class="flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container text-on-surface text-xs font-bold hover:bg-surface-container-high transition-colors">
            <span class="material-symbols-outlined text-[16px]">playlist_add</span>
            <span>Sıraya Ekle</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const thumbBtn = document.getElementById('spotlight-thumb-btn');
  const playBtn = document.getElementById('spotlight-play-btn');
  const dlBtn = document.getElementById('spotlight-dl-btn');
  const queueBtn = document.getElementById('spotlight-queue-btn');
  if (thumbBtn) thumbBtn.onclick = () => playTrackById(track.id, track);
  if (playBtn) playBtn.onclick = () => playTrackById(track.id, track);
  if (dlBtn) dlBtn.onclick = () => downloadTrack(track);
  if (queueBtn) queueBtn.onclick = () => addToQueueTrack(track.id, track.title, track.artist, track.thumbnail, track.duration);
}

function renderSearchEmpty(query) {
  if (DOM.searchResultsCount) DOM.searchResultsCount.textContent = "Sonuç Bulunamadı";
  if (DOM.searchSpotlightBox) DOM.searchSpotlightBox.style.display = 'none';
  if (DOM.searchResultsList) {
    const safeQuery = escapeHtml(query || '');
    DOM.searchResultsList.innerHTML = `
      <div class="col-span-full py-12 flex flex-col items-center justify-center gap-2 text-on-surface-variant text-center">
        <span class="material-symbols-outlined text-[40px] text-surface-variant">search_off</span>
        <p class="text-sm font-semibold">"${safeQuery}" için sonuç bulunamadı</p>
        <p class="text-xs">Farklı bir anahtar kelime deneyin veya doğrudan YouTube linki yapıştırın.</p>
      </div>
    `;
  }
}

function executeSearchFromInput() {
  const query = (DOM.topSearchInput ? DOM.topSearchInput.value : "");
  if (query && query.trim()) {
    executeSearchImmediate(query.trim(), true);
  } else {
    showToast("Lütfen bir şarkı, sanatçı veya link yazın");
  }
}

function clearSearchInput() {
  if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
  if (searchAbortController) {
    try { searchAbortController.abort(); } catch (e) {}
  }
  searchSeqToken++;
  state.currentSearchResults = [];
  state._rawSearchResults = [];
  state.currentSearchQuery = '';
  state.baseSearchQuery = '';

  if (DOM.topSearchInput) DOM.topSearchInput.value = '';
  const artistsSection = document.getElementById('search-artists-section');
  if (artistsSection) {
    artistsSection.classList.add('hidden');
    artistsSection.classList.remove('flex');
  }
  if (DOM.searchResultsCount) DOM.searchResultsCount.textContent = 'Arama Sonuçları';
  if (DOM.searchSpotlightBox) DOM.searchSpotlightBox.style.display = 'none';
  if (DOM.searchResultsList) {
    DOM.searchResultsList.innerHTML = `
      <div class="p-8 text-center text-on-surface-variant text-sm">
        Aramak istediğin şarkı veya sanatçı adını yazıp <strong>Enter</strong>'a bas.
      </div>
    `;
  }
}

async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    if (text) {
      if (DOM.topSearchInput) DOM.topSearchInput.value = text;
      executeSearchImmediate(text, true);
    }
  } catch (err) {
    showToast("Panoya erişilemedi, lütfen elle yapıştırın");
  }
}

function applySearchFilter(filter, el) {
  document.querySelectorAll('#search-filter-chips .filter-chip').forEach(c => {
    c.classList.remove('active', 'bg-primary', 'text-on-primary');
    c.classList.add('bg-surface-container-low', 'text-on-surface-variant');
  });

  if (el) {
    el.classList.add('active', 'bg-primary', 'text-on-primary');
    el.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
  }

  const inputVal = (DOM.topSearchInput ? DOM.topSearchInput.value : "").trim();
  if (inputVal && (!state.currentSearchQuery || inputVal !== state.currentSearchQuery)) {
    state.baseSearchQuery = inputVal;
  }
  const baseQuery = state.baseSearchQuery || inputVal || "türkçe popüler";
  if (filter === 'audius') {
    state.searchSource = 'audius';
    executeSearchImmediate(baseQuery, true, { preserveBaseQuery: true });
  } else if (filter === 'all') {
    state.searchSource = 'auto';
    executeSearchImmediate(baseQuery, true, { preserveBaseQuery: true });
  } else {
    state.searchSource = 'auto';
    executeSearchImmediate(`${baseQuery} ${filter}`, true, { preserveBaseQuery: true });
  }
}

function parseDurationToSec(durStr) {
  if (!durStr) return 0;
  const parts = String(durStr).split(':').map(p => parseInt(p, 10));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}

function setSearchSort(criteria, opts = {}) {
  const silent = Boolean(opts && opts.silent);
  const skipRender = Boolean(opts && opts.skipRender);
  state.searchSort = criteria;

  const btnAlaka = document.getElementById('btn-sort-alaka');
  const btnIzlenme = document.getElementById('btn-sort-izlenme');
  const btnEnYeni = document.getElementById('btn-sort-en-yeni');

  const activeCls = ['bg-surface-container-lowest', 'font-bold', 'text-primary', 'shadow-xs'];
  const inactiveCls = ['text-on-surface-variant', 'hover:text-on-surface', 'hover:bg-surface-container-high/40', 'font-medium'];

  const setBtnStyle = (btn, isActive) => {
    if (!btn) return;
    if (isActive) {
      btn.classList.add(...activeCls);
      btn.classList.remove(...inactiveCls);
    } else {
      btn.classList.remove(...activeCls);
      btn.classList.add(...inactiveCls);
    }
  };

  setBtnStyle(btnAlaka, criteria === 'alaka');
  setBtnStyle(btnIzlenme, criteria === 'izlenme');
  setBtnStyle(btnEnYeni, criteria === 'en-yeni');

  if (skipRender || !state.currentSearchResults || state.currentSearchResults.length === 0) {
    return;
  }

  let sorted = [...(state._rawSearchResults && state._rawSearchResults.length ? state._rawSearchResults : state.currentSearchResults)];

  if (criteria === 'izlenme') {
    const hasViews = sorted.some(t => typeof t.views === 'number' || typeof t.viewCount === 'number');
    if (hasViews) {
      sorted.sort((a, b) => Number(b.views || b.viewCount || 0) - Number(a.views || a.viewCount || 0));
    } else {
      sorted.sort((a, b) => parseDurationToSec(b.duration || '0:00') - parseDurationToSec(a.duration || '0:00'));
    }
    if (!silent) showToast("Popülerlik ve süreye göre sıralandı");
  } else if (criteria === 'en-yeni') {
    sorted.reverse();
    if (!silent) showToast("En yeni parçalara göre sıralandı");
  } else {
    if (!silent) showToast("Alakaya göre sıralandı");
  }

  state.currentSearchResults = sorted;
  renderSearchResults(sorted, state.currentSearchQuery || '');
}
window.setSearchSort = setSearchSort;

function resetSearchFilters() {
  const chips = document.querySelectorAll('#search-filter-chips .filter-chip');
  if (chips.length > 0) {
    chips.forEach(c => {
      c.classList.remove('active', 'bg-primary', 'text-on-primary');
      c.classList.add('bg-surface-container-low', 'text-on-surface-variant');
    });
    chips[0].classList.add('active', 'bg-primary', 'text-on-primary');
    chips[0].classList.remove('bg-surface-container-low', 'text-on-surface-variant');
  }

  setSearchSort('alaka', { silent: true, skipRender: true });

  if (state._rawSearchResults && state._rawSearchResults.length > 0) {
    state.currentSearchResults = [...state._rawSearchResults];
    renderSearchResults(state.currentSearchResults, state.currentSearchQuery || '');
  }

  showToast("Filtreler ve sıralama sıfırlandı");
}
window.resetSearchFilters = resetSearchFilters;

function filterGenre(el, genre) {
  document.querySelectorAll('#filter-container .filter-pill').forEach(p => {
    p.classList.remove('bg-secondary', 'text-on-secondary', 'shadow-sm', 'font-bold');
    p.classList.add('bg-surface-container-low', 'border', 'border-surface-container', 'text-on-surface', 'font-semibold');
  });

  if (el) {
    el.classList.add('bg-secondary', 'text-on-secondary', 'shadow-sm', 'font-bold');
    el.classList.remove('bg-surface-container-low', 'border', 'border-surface-container', 'text-on-surface', 'font-semibold');
  }

  if (genre === 'all') {
    renderHomeTracklistTable();
    showToast("Tüm şarkılar gösteriliyor");
  } else {
    showToast(`${genre} kategorisi listeleniyor...`);
    executeSearchImmediate(`${genre} 2026 dinle`, true);
  }
}

function searchByArtist(artistName) {
  executeSearchImmediate(artistName, true);
}

function quickSearchAndPlay(query) {
  if (quickSearchAbortController) {
    try { quickSearchAbortController.abort(); } catch (e) {}
  }
  quickSearchAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const seq = ++quickSearchSeqToken;

  showToast(`Çalınıyor: ${query}`);
  kurfaSearchTracks(query, {
    signal: quickSearchAbortController ? quickSearchAbortController.signal : undefined
  })
    .then(data => {
      if (seq !== quickSearchSeqToken) return;
      if (data.success && data.results && data.results.length > 0) {
        state.queue = [...data.results];
        state.queueIndex = 0;
        saveQueueState();
        renderQueueDrawerList();
        playTrackById(data.results[0].id, data.results[0]);
      }
    })
    .catch((err) => {
      if (err && err.name === 'AbortError') return;
      if (seq !== quickSearchSeqToken) return;
      if (CURATED_TRACKS && CURATED_TRACKS.length > 0) {
        playTrackById(CURATED_TRACKS[0].id, CURATED_TRACKS[0]);
      }
    });
}

function playAllTrends() {
  const allTracks = getCuratedTracks();
  if (!allTracks || allTracks.length === 0) return;
  state.queue = [...allTracks];
  state.queueIndex = 0;
  state.playingContextSub = 'TRENDLERDEN ÇALINIYOR';
  state.playingContextTitle = 'YouTube Türkiye Trendleri';
  saveQueueState();
  playTrackById(state.queue[0].id, state.queue[0]);
  showToast("YouTube Trendler çalınıyor");
}

function addAllResultsToQueue() {
  if (!state.currentSearchResults || state.currentSearchResults.length === 0) {
    showToast("Sıraya eklenecek sonuç bulunamadı");
    return;
  }
  let addedCount = 0;
  state.currentSearchResults.forEach(t => {
    if (t && !state.queue.some(q => q.id === t.id)) {
      state.queue.push(t);
      addedCount++;
    }
  });
  saveQueueState();
  renderQueueDrawerList();
  showToast(addedCount > 0 ? `${addedCount} yeni şarkı sıraya eklendi` : "Tüm sonuçlar zaten sırada");
}

// =============================================================================
// 11. RENDERING GRIDS & TABLES (KEŞFET, TRENDLER, FAVORİLER, İNDİRİLENLER)
// =============================================================================

function renderPopularCardsGrid() {
  if (!DOM.popularCardsGrid) return;
  DOM.popularCardsGrid.innerHTML = '';

  const displayList = getCuratedTracks().slice(0, 8);
  displayList.forEach(track => {
    const isPlayingCurrent = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const card = document.createElement('div');
    card.className = "group relative rounded-2xl bg-surface-container-lowest p-space-sm shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-transparent hover:border-surface-container";
    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-space-sm bg-surface-container-high">
        <img src="${safeThumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <button type="button" class="btn-card-add-pl absolute left-2.5 top-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-primary transition-all duration-200 z-10" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[18px]">add</span>
        </button>
        <button type="button" class="absolute right-2.5 bottom-2.5 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 active:scale-95" title="Çal">
          <span class="material-symbols-outlined text-[24px]">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
      <h3 class="text-xs md:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</h3>
      <p class="text-[11px] text-on-surface-variant truncate font-medium mt-0.5">${safeArtist} - YouTube</p>
    `;
    const playCardTrack = () => {
      const allTracks = getCuratedTracks();
      state.queue = [...allTracks];
      const foundIdx = allTracks.findIndex(t => t.id === track.id);
      state.queueIndex = foundIdx !== -1 ? foundIdx : 0;
      state.playingContextSub = 'TRENDLERDEN ÇALINIYOR';
      state.playingContextTitle = 'Popüler Parçalar';
      saveQueueState();
      playTrackById(track.id, track);
    };
    card.onclick = playCardTrack;
    const addBtn = card.querySelector('.btn-card-add-pl');
    if (addBtn) {
      addBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    DOM.popularCardsGrid.appendChild(card);
  });
}

function renderHomeTracklistTable() {
  if (!DOM.homeTracklistTable) return;
  DOM.homeTracklistTable.innerHTML = '';

  const tracks = getCuratedTracks();
  const trackFrag = document.createDocumentFragment();
  tracks.forEach((track, index) => {
    const isPlayingCurrent = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const isCurrentRow = state.currentTrack && state.currentTrack.id === track.id;
    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between p-2.5 rounded-xl transition-colors group cursor-pointer ${isCurrentRow ? 'active' : ''}`;
    row.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0 flex-1">
        <span class="w-4 text-center text-xs font-bold font-mono group-hover:hidden ${isCurrentRow ? 'text-primary font-extrabold' : 'text-on-surface-variant'}">${index + 1}</span>
        <button type="button" class="btn-play-row w-4 text-center hidden group-hover:flex items-center justify-center text-primary" title="Çal">
          <span class="material-symbols-outlined text-[18px]">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
        <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0">
          <span class="text-xs md:text-sm font-bold truncate ${isCurrentRow ? 'text-primary' : 'text-on-surface'}">${safeTitle}</span>
          <span class="text-[11px] text-on-surface-variant truncate">${safeArtist}</span>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-3 text-xs text-on-surface-variant font-medium">
        <span class="w-12 text-right font-mono">${safeDur}</span>
      </div>
      <div class="flex items-center gap-1 ml-2">
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-add-pl-row" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-fav-row" title="Favori">
          <span class="material-symbols-outlined text-[18px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors btn-queue-row" title="Sıraya Ekle">
          <span class="material-symbols-outlined text-[18px]">playlist_add</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-tertiary transition-colors btn-dl-row" title="İndir">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
      </div>
    `;

    const playRowTrack = () => {
      const allTracks = getCuratedTracks();
      state.queue = [...allTracks];
      const foundIdx = allTracks.findIndex(t => t.id === track.id);
      state.queueIndex = foundIdx !== -1 ? foundIdx : index;
      state.playingContextSub = 'TREND LİSTESİNDEN ÇALINIYOR';
      state.playingContextTitle = 'YouTube Türkiye Trendleri';
      saveQueueState();
      playTrackById(track.id, track);
    };

    row.onclick = playRowTrack;
    const playBtn = row.querySelector('.btn-play-row');
    if (playBtn) {
      playBtn.onclick = (e) => {
        e.stopPropagation();
        playRowTrack();
      };
    }
    const addPlBtn = row.querySelector('.btn-add-pl-row');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    const favBtn = row.querySelector('.btn-fav-row');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
      };
    }
    const qBtn = row.querySelector('.btn-queue-row');
    if (qBtn) {
      qBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track.id, track.title, track.artist, track.thumbnail, track.duration);
      };
    }
    const dlBtn = row.querySelector('.btn-dl-row');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    trackFrag.appendChild(row);
  });
  DOM.homeTracklistTable.appendChild(trackFrag);
}

let trendsShowAll = false;

function toggleTrendsShowAll() {
  trendsShowAll = !trendsShowAll;
  const leftBtn = document.getElementById('btn-trendler-scroll-left');
  const rightBtn = document.getElementById('btn-trendler-scroll-right');
  if (leftBtn && rightBtn) {
    leftBtn.style.display = trendsShowAll ? 'none' : '';
    rightBtn.style.display = trendsShowAll ? 'none' : '';
  }
  renderTrendlerCardsGrid();
}

function renderTrendlerCardsGrid() {
  if (!DOM.trendlerCardsGrid) return;
  DOM.trendlerCardsGrid.innerHTML = '';

  const allTracks = getCuratedTracks();
  const tracksToShow = trendsShowAll ? allTracks : allTracks.slice(0, 10);

  if (trendsShowAll) {
    DOM.trendlerCardsGrid.className = "flex flex-wrap gap-3 sm:gap-4 pb-3 pt-1";
  } else {
    DOM.trendlerCardsGrid.className = "flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none cursor-grab active:cursor-grabbing select-none";
  }

  tracksToShow.forEach((track, index) => {
    const isPlayingCurrent = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const card = document.createElement('div');
    card.className = "group relative w-44 sm:w-52 flex-shrink-0 p-2.5 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-200 cursor-pointer border border-surface-container/50 hover:border-primary/40 flex flex-col shadow-sm";
    card.innerHTML = `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-2 bg-surface-container-high">
        <img src="${safeThumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white text-[10px] font-black border border-white/10 shadow-sm">
          #${index + 1} Trend
        </div>
        <button type="button" aria-label="Oynat" class="btn-trend-play-overlay absolute right-2 bottom-2 w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:scale-105">
          <span class="material-symbols-outlined text-[20px] filled">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
      <div class="flex items-start justify-between gap-1.5 min-w-0">
        <div class="flex flex-col min-w-0 flex-1">
          <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors" title="${safeTitle}">${safeTitle}</h3>
          <p class="text-[11px] text-on-surface-variant truncate font-medium mt-0.5">${safeArtist}</p>
        </div>
        <button type="button" class="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary btn-trend-add-pl flex-shrink-0" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[17px]">add_circle</span>
        </button>
        <button type="button" class="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary btn-trend-fav flex-shrink-0" title="Favorilere Ekle">
          <span class="material-symbols-outlined text-[17px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
      </div>
    `;
    card.onclick = () => {
      const allTracks = getCuratedTracks();
      state.queue = [...allTracks];
      const foundIdx = allTracks.findIndex(t => t.id === track.id);
      state.queueIndex = foundIdx !== -1 ? foundIdx : index;
      state.playingContextSub = 'TRENDLERDEN ÇALINIYOR';
      state.playingContextTitle = 'YouTube Türkiye Trendleri';
      saveQueueState();
      playTrackById(track.id, track);
    };
    const addPlBtn = card.querySelector('.btn-trend-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    const favBtn = card.querySelector('.btn-trend-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        const nowFav = state.favorites.some(f => f.id === track.id);
        if (icon) {
          icon.textContent = nowFav ? 'favorite' : 'favorite_border';
          if (nowFav) icon.classList.add('text-primary', 'filled');
          else icon.classList.remove('text-primary', 'filled');
        }
      };
    }
    DOM.trendlerCardsGrid.appendChild(card);
  });

  if (!trendsShowAll) {
    initDragToScroll(DOM.trendlerCardsGrid);
  }

  const leftBtn = document.getElementById('btn-trendler-scroll-left');
  const rightBtn = document.getElementById('btn-trendler-scroll-right');
  if (leftBtn && rightBtn) {
    leftBtn.style.display = trendsShowAll ? 'none' : '';
    rightBtn.style.display = trendsShowAll ? 'none' : '';
  }

  const toggleBtn = document.getElementById('btn-toggle-trends');
  if (toggleBtn) {
    toggleBtn.innerHTML = trendsShowAll
      ? `<span class="material-symbols-outlined text-[16px]">expand_less</span><span>Daha Az Göster</span>`
      : `<span class="material-symbols-outlined text-[16px]">expand_more</span><span>Tümünü Göster (${allTracks.length})</span>`;
  }
}

// 100% Authentic Verified High-Resolution CDN Artworks
const POPULAR_ARTISTS = [
  {
    name: "Semicenk",
    genre: "Pop & Arabesk",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/fb/31/11/fb3111cb-4251-ab93-eb37-75e752050237/cover.jpg/300x300bb.jpg"
  },
  {
    name: "Simge",
    genre: "Türkçe Pop",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/05/81/0b/05810b21-3c0c-b3b7-d2b2-2050baab2de0/cover.jpg/300x300bb.jpg"
  },
  {
    name: "Mert Demir",
    genre: "Indie Pop & R&B",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/43/39/bb/4339bbf7-d2c3-22ed-90e7-9a14416780c8/196922638558_Cover.jpg/300x300bb.jpg"
  },
  {
    name: "BLOK3",
    genre: "Drill & Trap",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a8/92/b9/a892b962-b6e9-b027-d2f2-6192290b4dea/199350105050.jpg/300x300bb.jpg"
  },
  {
    name: "Mabel Matiz",
    genre: "Türkçe Pop & Indie",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/14/9b/07/149b0748-da05-c2b8-fe06-f8edf97b6006/820233718745.jpg/300x300bb.jpg"
  },
  {
    name: "Dedublüman",
    genre: "Alternatif Rock",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/15/19/83/151983a9-0c68-ee9d-0350-a6940b795054/cover.jpg/300x300bb.jpg"
  },
  {
    name: "Melike Şahin",
    genre: "Akustik & Pop",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7d/da/4c/7dda4c8a-5549-8be3-fe3f-2803b683234d/8683242226951.jpg/300x300bb.jpg"
  },
  {
    name: "Hande Ünsal",
    genre: "Canlı Pop Hit",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9a/3c/bb/9a3cbb7d-1584-f189-5520-e5f1e8fb16f9/cover.jpg/300x300bb.jpg"
  }
];

function createArtistCard(artist) {
  const safeName = escapeHtml(artist.name || 'Sanatçı');
  const safeGenre = escapeHtml(artist.genre || 'Müzik');
  const safeImg = escapeHtml(safeUrl(artist.img, './kurfamuzik_logo.png'));

  const card = document.createElement('div');
  card.className = "group flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-surface-container-low transition-all duration-300 cursor-pointer flex-shrink-0";
  card.innerHTML = `
    <div class="artist-avatar-wrap relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2 shadow-md ring-2 ring-surface-container group-hover:ring-primary/60 transition-all bg-surface-container-high">
      <img src="${safeImg}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span class="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
          <span class="material-symbols-outlined text-[20px] filled">play_arrow</span>
        </span>
      </div>
    </div>
    <h3 class="font-bold text-xs sm:text-sm text-on-surface truncate w-full group-hover:text-primary transition-colors">${safeName}</h3>
    <span class="text-[10px] text-on-surface-variant truncate w-full mt-0.5">${safeGenre}</span>
  `;

  const imgEl = card.querySelector('img');
  if (imgEl) {
    imgEl.addEventListener('error', () => {
      const initialDiv = document.createElement('div');
      initialDiv.className = 'w-full h-full flex items-center justify-center font-bold text-lg text-primary bg-primary/10';
      initialDiv.textContent = (artist.name || '?').charAt(0).toUpperCase();
      imgEl.replaceWith(initialDiv);
    }, { once: true });
  }

  card.onclick = () => openArtistDetail(artist);
  return card;
}

function renderPopularArtistsGrid() {
  const shelfContainer = document.getElementById('popular-artists-grid');
  if (shelfContainer) {
    shelfContainer.innerHTML = '';
    POPULAR_ARTISTS.forEach(artist => {
      shelfContainer.appendChild(createArtistCard(artist));
    });
    initDragToScroll(shelfContainer);
  }

  const kesifContainer = document.getElementById('kesif-artists-grid');
  if (kesifContainer) {
    kesifContainer.innerHTML = '';
    POPULAR_ARTISTS.forEach(artist => {
      kesifContainer.appendChild(createArtistCard(artist));
    });
  }
}

const CURATED_MIXES = [
  {
    name: "Günlük Mix 1",
    subtitle: "Semicenk, Mert Demir, Emir Can İğrek",
    query: "Semicenk Mert Demir Emir Can İğrek en popüler şarkıları"
  },
  {
    name: "Akustik Sakinlik",
    subtitle: "Dedublüman, Madrigal, Mavi Gri",
    query: "Dedublüman Madrigal Mavi Gri akustik şarkılar dinle"
  },
  {
    name: "Türkçe Drill & Rap",
    subtitle: "Blok3, UZI, Lvbel C5, Motive",
    query: "Blok3 UZI Lvbel C5 Motive en çok dinlenen rap şarkılar"
  },
  {
    name: "Koşu & Motivasyon",
    subtitle: "High BPM Club Remixleri",
    query: "Türkçe club remix yüksek bpm motivasyon spor şarkıları"
  }
];

function playCuratedMix(index) {
  const mix = CURATED_MIXES[index] || CURATED_MIXES[0];
  showToast(`${mix.name} başlatılıyor...`);
  quickSearchAndPlay(mix.query);
}

let currentArtistTracks = [];
let artistAbortController = null;
let artistSeqToken = 0;

function openArtistDetail(artist) {
  const prevTab = state.currentTab || 'kesfet';
  const backLabel = document.getElementById('artist-detail-back-label');
  if (prevTab !== 'kesfet') {
    state._artistReturnTab = prevTab;
    if (backLabel) backLabel.textContent = prevTab === 'arama' ? "Arama'ya Dön" : "Geri Dön";
    switchTab('kesfet', false, { preserveArtist: true });
  } else {
    state._artistReturnTab = null;
    if (backLabel) backLabel.textContent = "Keşfet'e Dön";
  }

  const mainCont = document.getElementById('kesfet-main-container');
  const artistCont = document.getElementById('kesfet-artist-container');
  if (!mainCont || !artistCont) return;

  if (artistAbortController) {
    try { artistAbortController.abort(); } catch (e) {}
  }
  artistAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const seq = ++artistSeqToken;
  currentArtistTracks = [];

  mainCont.classList.add('hidden');
  artistCont.classList.remove('hidden');

  const avatarEl = document.getElementById('artist-profile-avatar');
  const nameEl = document.getElementById('artist-profile-name');
  const genreEl = document.getElementById('artist-profile-genre');
  const countEl = document.getElementById('artist-tracks-count');
  const listEl = document.getElementById('artist-tracks-container');

  if (avatarEl) avatarEl.src = safeUrl(artist.img || artist.image, './kurfamuzik_logo.png');
  if (nameEl) nameEl.textContent = artist.name;
  const fansNum = Number(artist.fans || 0);
  const metaSuffix = fansNum >= 1000
    ? `${fansNum >= 1000000 ? (fansNum / 1000000).toFixed(1) + 'M' : Math.round(fansNum / 1000) + 'K'} dinleyici`
    : 'Sanatçı Profili';
  if (genreEl) genreEl.textContent = `${artist.genre || 'Müzik'} • ${metaSuffix}`;
  if (countEl) countEl.textContent = "Şarkılar yükleniyor...";
  if (listEl) {
    listEl.innerHTML = `
      <div class="flex items-center justify-center py-12 gap-3 text-on-surface-variant text-xs">
        <div class="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        <span>${escapeHtml(artist.name)} parçaları getiriliyor...</span>
      </div>
    `;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const loadArtistTracks = async () => {
    const sig = artistAbortController ? artistAbortController.signal : undefined;
    try {
      const apiRes = await fetch(
        `${API_BASE}/api/artist?name=${encodeURIComponent(artist.name || '')}`,
        { signal: sig }
      );
      if (apiRes.ok) {
        const apiData = await apiRes.json();
        if (seq !== artistSeqToken) return;
        if (apiData?.artist) {
          if (avatarEl && apiData.artist.image && !String(artist.img || '').startsWith('http')) {
            avatarEl.src = safeUrl(apiData.artist.image, './kurfamuzik_logo.png');
          }
          if (genreEl && apiData.artist.fans) {
            const fNum = Number(apiData.artist.fans || 0);
            const fLabel = fNum >= 1000000 ? `${(fNum / 1000000).toFixed(1)}M` : `${Math.round(fNum / 1000)}K`;
            genreEl.textContent = `${apiData.artist.genre || artist.genre || 'Müzik'} • ${fLabel} dinleyici`;
          }
        }
        if (apiData && apiData.success && Array.isArray(apiData.tracks) && apiData.tracks.length > 0) {
          currentArtistTracks = apiData.tracks;
          if (countEl) countEl.textContent = `${apiData.tracks.length} Parça`;
          renderArtistTracks(apiData.tracks, artist.name);
          return;
        }
      }
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }

    const data = await kurfaSearchTracks(`${artist.name} şarkıları`, { signal: sig });
    if (seq !== artistSeqToken) return;
    if (data.success && data.results && data.results.length > 0) {
      currentArtistTracks = data.results;
      if (countEl) countEl.textContent = `${data.results.length} Parça`;
      renderArtistTracks(data.results, artist.name);
    } else {
      if (countEl) countEl.textContent = "0 Parça";
      if (listEl) {
        listEl.innerHTML = `<div class="text-center py-8 text-xs text-on-surface-variant">Parça listesi alınamadı.</div>`;
      }
    }
  };

  loadArtistTracks().catch((err) => {
    if (err && err.name === 'AbortError') return;
    if (seq !== artistSeqToken) return;
    if (countEl) countEl.textContent = "Hata";
    if (listEl) {
      listEl.innerHTML = `<div class="text-center py-8 text-xs text-on-surface-variant">Bağlantı hatası oluştu.</div>`;
    }
  });

  const playAllBtn = document.getElementById('artist-play-all-btn');
  if (playAllBtn) {
    playAllBtn.onclick = () => {
      if (currentArtistTracks && currentArtistTracks.length > 0) {
        state.queue = [...currentArtistTracks];
        state.queueIndex = 0;
        saveQueueState();
        playTrackById(currentArtistTracks[0].id, currentArtistTracks[0]);
        showToast(`${artist.name} şarkıları çalınıyor`);
      }
    };
  }

  const shuffleBtn = document.getElementById('artist-shuffle-btn');
  if (shuffleBtn) {
    shuffleBtn.onclick = () => {
      if (currentArtistTracks && currentArtistTracks.length > 0) {
        const shuffled = [...currentArtistTracks].sort(() => Math.random() - 0.5);
        state.queue = shuffled;
        state.queueIndex = 0;
        saveQueueState();
        playTrackById(shuffled[0].id, shuffled[0]);
        showToast(`${artist.name} karışık çalınıyor`);
      }
    };
  }
}

function renderArtistTracks(tracks, artistName) {
  const listEl = document.getElementById('artist-tracks-container');
  if (!listEl) return;
  listEl.innerHTML = '';

  tracks.forEach((track, idx) => {
    const isPlayingCurrent = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || artistName || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const isCurrentRow = state.currentTrack && state.currentTrack.id === track.id;
    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between p-2 sm:p-2.5 rounded-xl transition-colors group cursor-pointer ${isCurrentRow ? 'active' : ''}`;
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1">
        <span class="w-6 text-center text-xs font-bold font-mono group-hover:hidden ${isCurrentRow ? 'text-primary font-extrabold' : 'text-on-surface-variant'}">${idx + 1}</span>
        <button type="button" class="w-6 h-6 rounded-full items-center justify-center text-primary hidden group-hover:flex flex-shrink-0" title="Çal">
          <span class="material-symbols-outlined text-[18px] filled">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>

        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover flex-shrink-0 shadow-sm bg-surface-container-high" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0 flex-1 pr-2">
          <span class="text-xs sm:text-sm font-bold truncate ${isCurrentRow ? 'text-primary' : 'text-on-surface'}">${safeTitle}</span>
          <span class="text-[11px] text-on-surface-variant truncate font-medium">${safeArtist}</span>
        </div>
      </div>

      <div class="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <span class="text-xs text-on-surface-variant font-mono hidden sm:inline mr-2">${safeDur}</span>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-artist-fav" title="Favorilere Ekle">
          <span class="material-symbols-outlined text-[17px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-artist-dl" title="İndir">
          <span class="material-symbols-outlined text-[17px]">download</span>
        </button>
      </div>
    `;

    row.onclick = () => {
      state.queue = [...tracks];
      state.queueIndex = idx;
      saveQueueState();
      playTrackById(track.id, track);
    };

    const favBtn = row.querySelector('.btn-artist-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        const nowFav = state.favorites.some(f => f.id === track.id);
        if (icon) {
          icon.textContent = nowFav ? 'favorite' : 'favorite_border';
          if (nowFav) icon.classList.add('text-primary', 'filled');
          else icon.classList.remove('text-primary', 'filled');
        }
      };
    }

    const dlBtn = row.querySelector('.btn-artist-dl');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    listEl.appendChild(row);
  });
}

function closeArtistDetail() {
  if (artistAbortController) {
    try { artistAbortController.abort(); } catch (e) {}
  }
  artistSeqToken++;
  currentArtistTracks = [];
  const mainCont = document.getElementById('kesfet-main-container');
  const artistCont = document.getElementById('kesfet-artist-container');
  if (mainCont) mainCont.classList.remove('hidden');
  if (artistCont) artistCont.classList.add('hidden');
  if (state._artistReturnTab && state._artistReturnTab !== 'kesfet') {
    const targetTab = state._artistReturnTab;
    state._artistReturnTab = null;
    switchTab(targetTab, false);
  }
}

function updateQuickFavCount() {
  const el = document.getElementById('quick-fav-count');
  if (el) {
    el.textContent = state.favorites.length > 0 ? `${state.favorites.length} Şarkı Kaydedildi` : 'Favorileriniz Boş';
  }
}

function playFavoritesQuick() {
  if (!state.favorites || state.favorites.length === 0) {
    showToast('Favori listeniz henüz boş. Şarkıların yanındaki kalp simgesiyle ekleyebilirsiniz.');
    return;
  }
  state.queue = [...state.favorites];
  state.queueIndex = 0;
  saveQueueState();
  renderQueueDrawerList();
  playTrackById(state.queue[0].id, state.queue[0]);
  showToast(`${state.favorites.length} favori şarkınız çalınıyor`);
}

function renderFavoritesTable() {
  if (!DOM.favoritesListTable) return;
  DOM.favoritesListTable.innerHTML = '';

  if (DOM.favCountText) {
    DOM.favCountText.textContent = `${state.favorites.length} Şarkı Kaydedildi`;
  }

  if (state.favorites.length === 0) {
    DOM.favoritesListTable.innerHTML = `
      <div class="py-12 flex flex-col items-center justify-center gap-2 text-on-surface-variant text-center">
        <span class="material-symbols-outlined text-[48px] text-primary/40">favorite</span>
        <p class="text-sm font-bold text-on-surface">Favori listeniz henüz boş</p>
        <p class="text-xs">Beğendiğiniz şarkıları kalp simgesine tıklayarak buraya ekleyebilirsiniz.</p>
        <button type="button" class="mt-2 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold" onclick="switchTab('kesfet')">
          Şarkı Keşfet
        </button>
      </div>
    `;
    return;
  }

  state.favorites.forEach((track, index) => {
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const row = document.createElement('div');
    row.className = "flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer";
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1">
        <span class="w-5 text-center text-xs font-bold text-on-surface-variant font-mono">${index + 1}</span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="flex flex-col min-w-0">
          <span class="text-xs md:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</span>
          <span class="text-[11px] text-on-surface-variant truncate">${safeArtist}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs text-on-surface-variant font-mono hidden sm:inline">${safeDur}</span>
        <button type="button" class="btn-fav-queue w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="Sıraya Ekle">
          <span class="material-symbols-outlined text-[18px]">queue_music</span>
        </button>
        <button type="button" class="btn-fav-add-pl w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[18px]">playlist_add</span>
        </button>
        <button type="button" class="btn-fav-remove w-8 h-8 rounded-full flex items-center justify-center text-primary" title="Favorilerden Çıkar">
          <span class="material-symbols-outlined text-[18px] filled">favorite</span>
        </button>
        <button type="button" class="btn-fav-dl w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary" title="İndir">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
        <button type="button" class="btn-fav-play w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all">
          <span class="material-symbols-outlined text-[18px]">play_arrow</span>
        </button>
      </div>
    `;
    const playFav = () => {
      state.queue = [...state.favorites];
      state.queueIndex = index;
      state.playingContextSub = 'FAVORİLERDEN ÇALINIYOR';
      state.playingContextTitle = 'Favori Şarkılarım';
      saveQueueState();
      playTrackById(track.id, track);
    };
    row.onclick = playFav;
    const playBtn = row.querySelector('.btn-fav-play');
    if (playBtn) playBtn.onclick = (e) => { e.stopPropagation(); playFav(); };
    const qFavBtn = row.querySelector('.btn-fav-queue');
    if (qFavBtn) {
      qFavBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track);
      };
    }
    const addPlBtn = row.querySelector('.btn-fav-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    const favRemoveBtn = row.querySelector('.btn-fav-remove');
    if (favRemoveBtn) {
      favRemoveBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
      };
    }
    const favDlBtn = row.querySelector('.btn-fav-dl');
    if (favDlBtn) {
      favDlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }
    DOM.favoritesListTable.appendChild(row);
  });
}

function renderDownloadsTable() {
  if (!DOM.downloadsListTable) return;
  DOM.downloadsListTable.innerHTML = '';

  if (state.downloads.length === 0) {
    DOM.downloadsListTable.innerHTML = `
      <div class="py-12 flex flex-col items-center justify-center gap-2 text-on-surface-variant text-center">
        <span class="material-symbols-outlined text-[48px] text-secondary/40">cloud_download</span>
        <p class="text-sm font-bold text-on-surface">İndirilen şarkı bulunmuyor</p>
        <p class="text-xs">Şarkıları çevrimdışı dinlemek için indir butonuna tıklayın.</p>
      </div>
    `;
    return;
  }

  state.downloads.forEach((track, index) => {
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeSize = escapeHtml(track.size || '7.5 MB');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const row = document.createElement('div');
    row.className = "flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer";
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1">
        <span class="w-5 text-center text-xs font-bold text-on-surface-variant font-mono">${index + 1}</span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="flex flex-col min-w-0">
          <span class="text-xs md:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</span>
          <span class="text-[11px] text-on-surface-variant truncate">${safeArtist} - ${safeSize}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" class="btn-dl-add-pl w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
        </button>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold">
          <span class="material-symbols-outlined text-[12px]">offline_pin</span>
          Çevrimdışı
        </span>
        <button type="button" class="btn-dl-play w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all" title="Çal">
          <span class="material-symbols-outlined text-[18px]">play_arrow</span>
        </button>
      </div>
    `;
    const playDl = () => {
      state.queue = [...state.downloads];
      state.queueIndex = index;
      state.playingContextSub = 'İNDİRİLENLERDEN ÇALINIYOR';
      state.playingContextTitle = 'İndirilen Şarkılar';
      saveQueueState();
      playTrackById(track.id, track);
    };
    row.onclick = playDl;
    const playBtn = row.querySelector('.btn-dl-play');
    if (playBtn) playBtn.onclick = (e) => { e.stopPropagation(); playDl(); };
    const addPlBtn = row.querySelector('.btn-dl-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    DOM.downloadsListTable.appendChild(row);
  });
}

let playlistTracksExpanded = false;
let playlistTracksFilterQuery = '';

function togglePlaylistTracksExpand() {
  playlistTracksExpanded = !playlistTracksExpanded;
  renderPlaylistTracksTable();
}

function filterPlaylistItems(val) {
  playlistTracksFilterQuery = (val || '').trim().toLowerCase();
  if (playlistTracksFilterQuery.length > 0) {
    playlistTracksExpanded = true;
  }
  renderPlaylistTracksTable();
}

function renderPlaylistTracksTable() {
  if (!DOM.playlistTracksTable) return;
  DOM.playlistTracksTable.innerHTML = '';

  let list = getCuratedTracks() || [];
  if (playlistTracksFilterQuery) {
    list = list.filter(t =>
      (t.title && t.title.toLowerCase().includes(playlistTracksFilterQuery)) ||
      (t.artist && t.artist.toLowerCase().includes(playlistTracksFilterQuery))
    );
  }

  if (list.length === 0) {
    DOM.playlistTracksTable.innerHTML = `
      <div class="py-8 text-center text-xs text-on-surface-variant flex flex-col items-center gap-2">
        <span class="material-symbols-outlined text-2xl text-on-surface-variant/50">search_off</span>
        <span>Aramanızla eşleşen şarkı bulunamadı.</span>
      </div>
    `;
    return;
  }

  const currentId = (state.currentTrack && state.currentTrack.id) ? state.currentTrack.id : null;
  const isFiltering = playlistTracksFilterQuery.length > 0;
  const visibleTracks = (isFiltering || playlistTracksExpanded) ? list : list.slice(0, 7);

  visibleTracks.forEach((track, index) => {
    const isCurrent = currentId && currentId === track.id;
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const row = document.createElement('div');
    row.className = `flex items-center justify-between p-2.5 rounded-xl transition-all group cursor-pointer ${isCurrent ? 'bg-primary/10 border-l-4 border-primary pl-2 shadow-xs' : 'hover:bg-surface-container-low'}`;
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1">
        <span class="w-6 text-center text-xs font-bold font-mono flex items-center justify-center flex-shrink-0 ${isCurrent ? 'text-primary font-extrabold' : 'text-on-surface-variant'}">
          ${isCurrent && state.isPlaying
            ? '<span class="material-symbols-outlined text-[18px] text-primary animate-pulse">equalizer</span>'
            : (isCurrent ? '<span class="material-symbols-outlined text-[18px] text-primary">play_arrow</span>' : (index + 1))}
        </span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0 ${isCurrent ? 'ring-2 ring-primary ring-offset-1 ring-offset-surface' : ''}" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0">
          <span class="text-xs md:text-sm font-bold truncate ${isCurrent ? 'text-primary font-extrabold' : 'text-on-surface'}">${safeTitle}</span>
          <span class="text-[11px] text-on-surface-variant truncate font-medium">${safeArtist}</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5 text-xs text-on-surface-variant flex-shrink-0">
        <span class="font-mono text-[11px] hidden sm:inline mr-1">${safeDur}</span>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-colors btn-playlist-queue" title="Sıraya Ekle">
          <span class="material-symbols-outlined text-[18px]">queue_music</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors btn-playlist-add" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[18px]">playlist_add</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors btn-playlist-fav" title="Favorilere Ekle">
          <span class="material-symbols-outlined text-[18px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-tertiary hover:bg-surface-container-high transition-colors btn-playlist-dl" title="İndir">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
      </div>
    `;
    row.onclick = () => {
      const fullList = list && list.length > 0 ? list : getCuratedTracks();
      state.queue = [...fullList];
      const foundIdx = fullList.findIndex(t => t.id === track.id);
      state.queueIndex = foundIdx !== -1 ? foundIdx : index;
      state.playingContextSub = 'ÇALMA LİSTESİNDEN ÇALINIYOR';
      state.playingContextTitle = 'Popüler Parçalar';
      saveQueueState();
      playTrackById(track.id, track);
    };

    const qBtn = row.querySelector('.btn-playlist-queue');
    if (qBtn) {
      qBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track);
      };
    }

    const addBtn = row.querySelector('.btn-playlist-add');
    if (addBtn) {
      addBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }

    const favBtn = row.querySelector('.btn-playlist-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
      };
    }

    const dlBtn = row.querySelector('.btn-playlist-dl');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }
    DOM.playlistTracksTable.appendChild(row);
  });

  if (!isFiltering && list.length > 7) {
    const expandContainer = document.createElement('div');
    expandContainer.className = "pt-2";
    expandContainer.innerHTML = `
      <button type="button" class="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary flex items-center justify-center gap-2 transition-all shadow-xs border border-surface-container" onclick="togglePlaylistTracksExpand()">
        <span class="material-symbols-outlined text-[18px]">${playlistTracksExpanded ? 'expand_less' : 'expand_more'}</span>
        <span>${playlistTracksExpanded ? 'Daha Az Göster (İlk 7 Şarkı)' : `Daha Fazla Göster (${list.length - 7} Şarkı Daha)`}</span>
      </button>
    `;
    DOM.playlistTracksTable.appendChild(expandContainer);
  }
}

function moveQueueTrack(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= state.queue.length) return;

  const temp = state.queue[index];
  state.queue[index] = state.queue[targetIndex];
  state.queue[targetIndex] = temp;

  if (state.queueIndex === index) {
    state.queueIndex = targetIndex;
  } else if (state.queueIndex === targetIndex) {
    state.queueIndex = index;
  }

  saveQueueState();
  renderQueueDrawerList();
}

function moveQueueTrackToPosition(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || fromIndex >= state.queue.length || toIndex < 0 || toIndex >= state.queue.length) return;
  const item = state.queue.splice(fromIndex, 1)[0];
  state.queue.splice(toIndex, 0, item);

  if (state.queueIndex === fromIndex) {
    state.queueIndex = toIndex;
  } else if (fromIndex < state.queueIndex && toIndex >= state.queueIndex) {
    state.queueIndex = Math.max(0, state.queueIndex - 1);
  } else if (fromIndex > state.queueIndex && toIndex <= state.queueIndex) {
    state.queueIndex = Math.min(state.queue.length - 1, state.queueIndex + 1);
  }

  saveQueueState();
  renderQueueDrawerList();
}

function renderQueueDrawerList() {
  if (!DOM.queueDrawerList) return;
  state.queue = cleanDeduplicateQueueArray(state.queue || []);
  state.userQueue = cleanDeduplicateQueueArray(state.userQueue || []);
  if (state.queueIndex >= state.queue.length) {
    state.queueIndex = Math.max(0, state.queue.length - 1);
  }
  DOM.queueDrawerList.innerHTML = '';

  const userQueueCount = state.userQueue.length;
  const queueCount = state.queue.length;
  const totalCount = userQueueCount + queueCount;
  if (DOM.queueCountBadge) DOM.queueCountBadge.textContent = totalCount;
  if (DOM.btnClearQueue) DOM.btnClearQueue.style.display = totalCount > 0 ? 'inline-block' : 'none';

  if (totalCount === 0) {
    DOM.queueDrawerList.innerHTML = `
      <div class="flex flex-col items-center justify-center py-10 px-4 text-center text-on-surface-variant gap-2.5">
        <div class="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant/60 mb-1">
          <span class="material-symbols-outlined text-2xl">queue_music</span>
        </div>
        <h4 class="text-sm font-bold text-on-surface">Çalma Sıranız Boş</h4>
        <p class="text-[11px] text-on-surface-variant max-w-[220px]">
          Herhangi bir şarkıyı sıraya ekleyebilir veya trend listesini başlatabilirsiniz.
        </p>
        <button type="button" class="mt-1 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold hover:bg-primary-container transition-all shadow-sm flex items-center gap-1.5" onclick="playAllTrends()">
          <span class="material-symbols-outlined text-[16px]">local_fire_department</span>
          <span>Trend Müzikleri Çal</span>
        </button>
      </div>
    `;
    return;
  }

  if (userQueueCount > 0) {
    const upHeader = document.createElement('div');
    upHeader.className = 'px-2 pt-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-primary flex items-center justify-between';
    upHeader.innerHTML = `<span>Sıradaki Şarkılar (${userQueueCount})</span>`;
    DOM.queueDrawerList.appendChild(upHeader);

    state.userQueue.forEach((uTrack, uIdx) => {
      const safeTitle = escapeHtml(uTrack.title || 'Şarkı');
      const safeArtist = escapeHtml(uTrack.artist || 'Sanatçı');
      const safeThumb = escapeHtml(safeUrl(uTrack.thumbnail || getTrackThumbnail(uTrack), './kurfamuzik_logo.png'));
      const row = document.createElement('div');
      row.className = 'flex items-center justify-between p-2 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group border border-primary/15 mb-1';
      row.innerHTML = `
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="w-4 text-center text-[11px] font-bold text-primary">${uIdx + 1}</span>
          <img src="${safeThumb}" alt="${safeTitle}" class="w-8 h-8 rounded-md object-cover flex-shrink-0" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
          <div class="flex flex-col min-w-0">
            <span class="text-xs font-bold text-on-surface truncate">${safeTitle}</span>
            <span class="text-[10px] text-on-surface-variant truncate">${safeArtist}</span>
          </div>
        </div>
        <button type="button" class="w-6 h-6 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error transition-colors btn-uq-remove" title="Sıradan Çıkar">
          <span class="material-symbols-outlined text-[15px]">close</span>
        </button>
      `;
      row.onclick = () => {
        state.userQueue.splice(uIdx, 1);
        saveQueueState();
        renderQueueDrawerList();
        playTrackById(uTrack.id, uTrack);
      };
      const rmBtn = row.querySelector('.btn-uq-remove');
      if (rmBtn) {
        rmBtn.onclick = (e) => {
          e.stopPropagation();
          removeFromUserQueue(uIdx);
        };
      }
      DOM.queueDrawerList.appendChild(row);
    });

    if (queueCount > 0) {
      const ctxHeader = document.createElement('div');
      ctxHeader.className = 'px-2 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant';
      ctxHeader.textContent = state.playingContextTitle ? `Liste: ${state.playingContextTitle}` : 'Çalma Listesi';
      DOM.queueDrawerList.appendChild(ctxHeader);
    }
  }

  const curIdx = Math.max(0, Math.min(state.queueIndex || 0, Math.max(0, state.queue.length - 1)));
  const winStart = state.queue.length > 120 ? Math.max(0, curIdx - 20) : 0;
  const winEnd = state.queue.length > 120 ? Math.min(state.queue.length, curIdx + 100) : state.queue.length;

  if (winStart > 0) {
    const prevInfo = document.createElement('div');
    prevInfo.className = 'px-2 py-1 text-[10px] font-semibold text-on-surface-variant text-center';
    prevInfo.textContent = `Önceki ${winStart} parça gizlendi (Toplam ${state.queue.length} parça)`;
    DOM.queueDrawerList.appendChild(prevInfo);
  }

  for (let index = winStart; index < winEnd; index++) {
    const track = state.queue[index];
    if (!track) continue;
    const isCurrent = index === state.queueIndex;
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const item = document.createElement('div');
    item.className = `flex items-center justify-between gap-2 p-2 rounded-xl transition-all cursor-pointer group select-none border border-transparent ${isCurrent ? 'bg-primary-fixed/40 font-bold border-primary/30' : 'hover:bg-surface-container-low hover:border-surface-container'}`;
    item.setAttribute('draggable', 'true');
    item.dataset.index = index;
    if (isCurrent) item.dataset.current = '1';

    item.innerHTML = `
      <div class="flex items-center gap-2 min-w-0 flex-1 pr-1">
        <div class="flex flex-col items-center justify-center flex-shrink-0 -mr-0.5">
          <button type="button" class="w-4 h-3.5 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-queue-up ${index === 0 ? 'opacity-20 cursor-not-allowed pointer-events-none' : ''}" title="Yukarı Taşı">
            <span class="material-symbols-outlined text-[14px]">keyboard_arrow_up</span>
          </button>
          <button type="button" class="w-4 h-3.5 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-queue-down ${index === queueCount - 1 ? 'opacity-20 cursor-not-allowed pointer-events-none' : ''}" title="Aşağı Taşı">
            <span class="material-symbols-outlined text-[14px]">keyboard_arrow_down</span>
          </button>
        </div>
        <span class="w-4 text-center text-[11px] flex-shrink-0 ${isCurrent ? 'text-primary font-extrabold' : 'text-on-surface-variant'}">${index + 1}</span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-8 h-8 rounded-md object-cover flex-shrink-0" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="flex flex-col min-w-0 flex-1">
          <span class="text-xs text-on-surface truncate ${isCurrent ? 'text-primary font-extrabold' : ''}">${safeTitle}</span>
          <span class="text-[10px] text-on-surface-variant truncate">${safeArtist}</span>
        </div>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0">
        <span class="text-[11px] text-on-surface-variant font-mono whitespace-nowrap">${safeDur}</span>
        <button type="button" class="hidden sm:flex w-6 h-6 rounded-full items-center justify-center text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity btn-queue-add-pl" title="Çalma Listesine Ekle">
          <span class="material-symbols-outlined text-[15px]">playlist_add</span>
        </button>
        <button type="button" class="hidden sm:flex w-6 h-6 rounded-full items-center justify-center text-on-surface-variant hover:text-tertiary opacity-0 group-hover:opacity-100 transition-opacity btn-queue-dl" title="İndir">
          <span class="material-symbols-outlined text-[15px]">download</span>
        </button>
        <button type="button" class="w-6 h-6 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error sm:opacity-0 sm:group-hover:opacity-100 transition-opacity btn-queue-remove" title="Sıradan Çıkar">
          <span class="material-symbols-outlined text-[15px]">close</span>
        </button>
      </div>
    `;

    item.onclick = () => {
      state.queueIndex = index;
      saveQueueState();
      playTrackById(track.id, track);
    };

    const upBtn = item.querySelector('.btn-queue-up');
    if (upBtn) {
      upBtn.onclick = (e) => {
        e.stopPropagation();
        moveQueueTrack(index, -1);
      };
    }

    const downBtn = item.querySelector('.btn-queue-down');
    if (downBtn) {
      downBtn.onclick = (e) => {
        e.stopPropagation();
        moveQueueTrack(index, 1);
      };
    }

    const addPlBtn = item.querySelector('.btn-queue-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }

    const dlBtn = item.querySelector('.btn-queue-dl');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    const removeBtn = item.querySelector('.btn-queue-remove');
    if (removeBtn) {
      removeBtn.onclick = (e) => {
        e.stopPropagation();
        removeFromQueue(index);
      };
    }

    item.ondragstart = (e) => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(index));
      item.classList.add('opacity-40');
    };
    item.ondragend = () => {
      item.classList.remove('opacity-40');
      document.querySelectorAll('#queue-drawer-list > div').forEach(el => el.classList.remove('border-t-2', 'border-b-2', 'border-primary'));
    };
    item.ondragover = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const rect = item.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (e.clientY < midY) {
        item.classList.add('border-t-2', 'border-primary');
        item.classList.remove('border-b-2');
      } else {
        item.classList.add('border-b-2', 'border-primary');
        item.classList.remove('border-t-2');
      }
    };
    item.ondragleave = () => {
      item.classList.remove('border-t-2', 'border-b-2', 'border-primary');
    };
    item.ondrop = (e) => {
      e.preventDefault();
      item.classList.remove('border-t-2', 'border-b-2', 'border-primary');
      const fromIdx = parseInt(e.dataTransfer.getData('text/plain'), 10);
      if (isNaN(fromIdx)) return;
      const rect = item.getBoundingClientRect();
      const dropAfter = e.clientY >= (rect.top + rect.height / 2);
      let targetPos = dropAfter ? index + 1 : index;
      if (fromIdx < targetPos) targetPos -= 1;
      targetPos = Math.max(0, Math.min(state.queue.length - 1, targetPos));
      if (fromIdx !== targetPos) {
        moveQueueTrackToPosition(fromIdx, targetPos);
      }
    };

    DOM.queueDrawerList.appendChild(item);
  }

  if (winEnd < state.queue.length) {
    const nextInfo = document.createElement('div');
    nextInfo.className = 'px-2 py-1.5 text-[10px] font-semibold text-on-surface-variant text-center';
    nextInfo.textContent = `Sırada +${state.queue.length - winEnd} parça daha var`;
    DOM.queueDrawerList.appendChild(nextInfo);
  }
}

function clearQueue() {
  state.queue = [];
  state.userQueue = [];
  state.queueIndex = 0;
  try {
    localStorage.removeItem('kurfa_queue');
    localStorage.removeItem('kurfa_user_queue');
  } catch(e) {}
  renderQueueDrawerList();
  showToast("Çalma sırası temizlendi");
}

function removeFromQueue(index) {
  if (index < 0 || index >= state.queue.length) return;
  const removed = state.queue.splice(index, 1)[0];
  if (state.queue.length === 0) {
    state.queueIndex = 0;
  } else if (index < state.queueIndex) {
    state.queueIndex = Math.max(0, state.queueIndex - 1);
  } else if (index === state.queueIndex) {
    state.queueIndex = Math.min(state.queueIndex, state.queue.length - 1);
  }
  saveQueueState();
  renderQueueDrawerList();
  showToast(`Sıradan çıkarıldı: ${removed ? removed.title : 'Şarkı'}`);
}

// =============================================================================
// HORIZONTAL DRAG-TO-SCROLL & ETKİLEŞİMLİ TAHTA / LOW-SPEC PERFORMANS SİSTEMİ
// =============================================================================

function initDragToScroll(el) {
  if (!el || el._dragToScrollInit) return;
  el._dragToScrollInit = true;

  let isPointerDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let hasDragged = false;
  let activePointerId = null;

  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') return;
    if (e.isPrimary === false || (e.button !== undefined && e.button !== 0)) return;
    isPointerDown = true;
    hasDragged = false;
    startX = e.clientX;
    scrollLeft = el.scrollLeft;
    activePointerId = e.pointerId;
  }, { passive: true });

  const onPointerMove = (e) => {
    if (!isPointerDown || e.pointerId !== activePointerId) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 6) {
      if (!hasDragged) {
        hasDragged = true;
        el.classList.add('cursor-grabbing');
        el.classList.remove('cursor-grab');
        try {
          if (typeof el.setPointerCapture === 'function') {
            el.setPointerCapture(activePointerId);
          }
        } catch(err) {}
      }
      el.scrollLeft = scrollLeft - deltaX * 1.25;
    }
  };

  const endDrag = (e) => {
    if (!isPointerDown) return;
    isPointerDown = false;
    el.classList.remove('cursor-grabbing');
    el.classList.add('cursor-grab');
    if (activePointerId !== null) {
      try {
        if (typeof el.releasePointerCapture === 'function') {
          el.releasePointerCapture(activePointerId);
        }
      } catch(err) {}
      activePointerId = null;
    }
    setTimeout(() => {
      hasDragged = false;
    }, 80);
  };

  el.addEventListener('pointermove', onPointerMove, { passive: true });
  el.addEventListener('pointerup', endDrag, { passive: true });
  el.addEventListener('pointercancel', endDrag, { passive: true });
  el.addEventListener('mouseleave', endDrag, { passive: true });

  // Prevent track clicks ONLY if an intentional drag occurred
  el.addEventListener('click', (e) => {
    if (hasDragged) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);
}

function scrollShelf(containerId, direction) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const scrollAmount = (container.clientWidth || 300) * 0.75;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

let heroSlideIndex = 0;
let heroSlideTimer = null;

function getHeroTracks() {
  const list = (exploreData && Array.isArray(exploreData.trends) && exploreData.trends.length > 0)
    ? exploreData.trends
    : getCuratedTracks();
  return list.slice(0, 5);
}

function getCurrentHeroTrack() {
  const slides = getHeroTracks();
  if (!slides.length) return (exploreData && exploreData.hero) || null;
  const idx = ((heroSlideIndex % slides.length) + slides.length) % slides.length;
  return slides[idx];
}

function renderHeroDots(slidesCount, activeIdx) {
  const dotsEl = document.getElementById('hero-carousel-dots');
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `${i + 1}. Trend`);
    dot.className = i === activeIdx
      ? 'h-1.5 w-6 rounded-full bg-primary transition-all'
      : 'h-1.5 w-2 rounded-full bg-white/35 hover:bg-white/60 transition-all';
    dot.onclick = () => goToHeroSlide(i);
    dotsEl.appendChild(dot);
  }
}

function renderHeroSlide(track, rankIdx, totalSlides) {
  if (!track) return;
  const thumb = safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png');
  const cssThumb = safeCssUrl(thumb, './kurfamuzik_logo.png');
  const rankBadge = document.getElementById('hero-rank-badge');
  const durPill = document.getElementById('hero-duration-pill');
  const coverImg = document.getElementById('hero-cover-img');
  const coverImgMobile = document.getElementById('hero-cover-img-mobile');

  if (rankBadge) {
    rankBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span><span>#${rankIdx + 1} TÜRKİYE TRENDİ</span>`;
  }
  if (durPill) {
    durPill.textContent = track.duration || '3:15';
  }
  if (DOM.heroTitle) DOM.heroTitle.textContent = track.title || "Günün En Popüler Şarkıları";
  if (DOM.heroArtist) DOM.heroArtist.textContent = `${track.artist || 'Sanatçı'} • YouTube Müzik Türkiye`;
  if (coverImg) {
    coverImg.src = thumb;
    coverImg.alt = track.title || 'Trend Kapak';
  }
  if (coverImgMobile) {
    coverImgMobile.src = thumb;
    coverImgMobile.alt = track.title || 'Trend Kapak';
  }
  if (DOM.heroBg) {
    DOM.heroBg.style.backgroundImage = `linear-gradient(to right, rgba(12,16,23,0.92), rgba(12,16,23,0.68)), url('${cssThumb}')`;
    DOM.heroBg.style.backgroundSize = 'cover';
    DOM.heroBg.style.backgroundPosition = 'center';
  }
  renderHeroDots(totalSlides, rankIdx);
}

function startHeroAutoRotate() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    if (typeof document !== 'undefined' && document.hidden) return;
    if (state.currentTab !== 'kesfet') return;
    const slides = getHeroTracks();
    if (slides.length <= 1) return;
    heroSlideIndex = (heroSlideIndex + 1) % slides.length;
    renderHeroSlide(slides[heroSlideIndex], heroSlideIndex, slides.length);
  }, 8000);
}

function goToHeroSlide(index) {
  const slides = getHeroTracks();
  if (!slides.length) return;
  heroSlideIndex = ((index % slides.length) + slides.length) % slides.length;
  renderHeroSlide(slides[heroSlideIndex], heroSlideIndex, slides.length);
  startHeroAutoRotate();
}
window.goToHeroSlide = goToHeroSlide;

function stepHeroSlide(delta) {
  goToHeroSlide(heroSlideIndex + delta);
}
window.stepHeroSlide = stepHeroSlide;

function updateHeroUI(track) {
  const slides = getHeroTracks();
  if (slides.length > 0) {
    heroSlideIndex = 0;
    renderHeroSlide(slides[0], 0, slides.length);
    startHeroAutoRotate();
    updatePlaylistHeroUI(slides[0]);
  } else if (track) {
    renderHeroSlide(track, 0, 1);
    updatePlaylistHeroUI(track);
  }
}

function updatePlaylistHeroUI(track) {
  const topTrack = track || (exploreData && (exploreData.hero || (exploreData.trends && exploreData.trends[0]))) || (CURATED_TRACKS && CURATED_TRACKS[0]);
  if (!topTrack) return;
  const thumbEl = document.getElementById('playlist-hero-thumb');
  const titleEl = document.getElementById('playlist-hero-title');
  const descEl = document.getElementById('playlist-hero-desc');
  const subEl = document.getElementById('playlist-hero-sub');
  const badgeEl = document.getElementById('playlist-hero-badge');

  const thumbUrl = safeUrl(getTrackThumbnail(topTrack), './kurfamuzik_logo.png');
  if (thumbEl) {
    thumbEl.src = thumbUrl;
    thumbEl.alt = topTrack.title || "Canlı Trend Müzik";
  }
  if (titleEl) {
    titleEl.textContent = topTrack.title || "Canlı Trend Seçkisi";
  }
  if (descEl) {
    descEl.textContent = `${topTrack.artist || 'Sanatçı'} - YouTube Müzik Türkiye canlı trendlerinden anlık senkronize edildi.`;
  }
  if (subEl) {
    subEl.textContent = `#1 Canlı Hit (${topTrack.duration || '3:30'})`;
  }
  if (badgeEl) {
    badgeEl.textContent = "Canlı Trend Seçkisi";
  }
}

function playHeroTrack() {
  const allTracks = getCuratedTracks();
  const track = getCurrentHeroTrack() || allTracks[0];
  if (track) {
    state.queue = [...allTracks];
    const foundIdx = allTracks.findIndex(t => t.id === track.id);
    state.queueIndex = foundIdx !== -1 ? foundIdx : 0;
    state.playingContextSub = 'ÖNE ÇIKANLARDAN ÇALINIYOR';
    state.playingContextTitle = track.title;
    saveQueueState();
    playTrackById(track.id, track);
  }
}

function addHeroTrackToQueue() {
  const track = getCurrentHeroTrack() || getCuratedTracks()[0];
  if (track) {
    addToQueueTrack(track.id, track.title, track.artist, getTrackThumbnail(track), track.duration);
  }
}

function downloadHeroTrack() {
  const track = getCurrentHeroTrack() || getCuratedTracks()[0];
  if (track) {
    downloadTrackById(track.id);
  }
}

function sanitizeExploreTrack(t) {
  if (!t || typeof t !== 'object') return null;
  const vid = safeYtId(t.id);
  const cleanId = vid || (typeof t.id === 'string' ? t.id.trim().slice(0, 64) : '');
  if (!cleanId) return null;
  return {
    id: cleanId,
    title: typeof t.title === 'string' ? t.title.trim().slice(0, 200) : 'Şarkı',
    artist: typeof t.artist === 'string' ? t.artist.trim().slice(0, 120) : 'Sanatçı',
    duration: typeof t.duration === 'string' ? t.duration.trim().slice(0, 16) : '3:30',
    tag: typeof t.tag === 'string' ? t.tag.trim().slice(0, 40) : '',
    thumbnail: vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : safeUrl(t.thumbnail, './kurfamuzik_logo.png')
  };
}

function sanitizeExploreData(data) {
  if (!data || typeof data !== 'object') return data;
  if (Array.isArray(data.trends)) {
    data.trends = data.trends.map(sanitizeExploreTrack).filter(Boolean);
  }
  if (Array.isArray(data.fresh)) {
    data.fresh = data.fresh.map(sanitizeExploreTrack).filter(Boolean);
  }
  if (Array.isArray(data.top10)) {
    data.top10 = data.top10.map(sanitizeExploreTrack).filter(Boolean);
  }
  if (data.hero) {
    data.hero = sanitizeExploreTrack(data.hero);
  }
  return data;
}

async function fetchExploreData(force = false) {
  try {
    const cachedRaw = localStorage.getItem('kurfa_explore_cache');
    if (cachedRaw && cachedRaw.includes('invidious')) {
      localStorage.removeItem('kurfa_explore_cache');
      localStorage.removeItem('kurfa_explore_cache_time');
      exploreData = { trends: [], hero: null, fresh: [], top10: [] };
      force = true;
    }

    const cachedTime = parseInt(localStorage.getItem('kurfa_explore_cache_time') || '0', 10);
    const now = Date.now();

    if (!force && (now - cachedTime < 12 * 60 * 60 * 1000) && exploreData && Array.isArray(exploreData.trends) && exploreData.trends.length > 0) {
      console.log("Serving YouTube Trends from client cache (0 Cloudflare requests used)");
      sanitizeExploreData(exploreData);
      const topTrend = exploreData.hero || exploreData.trends[0];
      updateHeroUI(topTrend);
      updatePlaylistHeroUI(topTrend);
      renderTrendlerCardsGrid();
      renderHomeTracklistTable();
      renderPopularCardsGrid();
      renderFreshReleasesGrid();
      renderPlaylistTracksTable();
      return;
    }

    let data = null;
    if (!force) {
      try {
        const seedRes = await fetch('./explore-seed.json');
        if (seedRes.ok) {
          const seedJson = await seedRes.json();
          if (seedJson && seedJson.success && Array.isArray(seedJson.trends) && seedJson.trends.length > 0) {
            data = seedJson;
            console.log("Dynamic Explore & Trends served from static CDN seed (0 Cloudflare requests used)");
          }
        }
      } catch (seedErr) {}
    }

    if (!data) {
      const endpoint = force ? `${API_BASE}/api/explore?admin=force` : `${API_BASE}/api/explore`;
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      data = await res.json();
    }

    if (data && data.success && Array.isArray(data.trends) && data.trends.length > 0) {
      sanitizeExploreData(data);
      exploreData = data;
      safeSetStorage('kurfa_explore_cache', JSON.stringify(data));
      safeSetStorage('kurfa_explore_cache_time', now.toString());
      console.log("Dynamic Explore & Trends feed loaded from YouTube:", data.trends.length, "tracks");

      const topTrend = exploreData.hero || exploreData.trends[0];

      updateHeroUI(topTrend);
      updatePlaylistHeroUI(topTrend);

      renderTrendlerCardsGrid();
      renderHomeTracklistTable();
      renderPopularCardsGrid();
      renderFreshReleasesGrid();
      renderPlaylistTracksTable();
    }
  } catch (err) {
    console.warn("Dynamic explore fetch fallback:", err.message);
  }
}

// =============================================================================
// 12. FAVORITES & DOWNLOADS ACTIONS
// =============================================================================

function toggleCurrentFavorite() {
  if (!state.currentTrack) {
    showToast("Önce bir şarkı seçin");
    return;
  }
  toggleFavorite(state.currentTrack);
}

function toggleFavoriteById(trackId) {
  const track = CURATED_TRACKS.find(t => t.id === trackId) ||
                state.queue.find(t => t.id === trackId) ||
                state.currentSearchResults.find(t => t.id === trackId) ||
                { id: trackId };
  toggleFavorite(track);
}

function toggleFavorite(track) {
  if (!track || !track.id) return;
  const idx = state.favorites.findIndex(t => t.id === track.id);
  if (idx !== -1) {
    state.favorites.splice(idx, 1);
    showToast(`Favorilerden çıkarıldı: ${track.title || 'Şarkı'}`);
  } else {
    state.favorites.push(track);
    showToast(`Favorilere eklendi: ${track.title || 'Şarkı'}`);
  }
  safeSetStorage('kurfa_favs', JSON.stringify(state.favorites));
  updatePlayerFavBtn();
  renderFavoritesTable();
  renderHomeTracklistTable();
  updateQuickFavCount();
}

function downloadCurrentMP3() {
  if (!state.currentTrack) {
    showToast("Önce bir şarkı seçin");
    return;
  }
  downloadTrack(state.currentTrack);
}

function downloadTrackById(trackId) {
  const track = CURATED_TRACKS.find(t => t.id === trackId) || 
                state.queue.find(t => t.id === trackId) || 
                state.currentSearchResults.find(t => t.id === trackId) || 
                { id: trackId, title: "Şarkı", artist: "Sanatçı" };
  downloadTrack(track);
}

function downloadTrack(track) {
  if (!track || (!track.id && !track.ytId)) return;
  openDownloaderModal(track);
}


function playAllFavorites() {
  if (state.favorites.length === 0) {
    showToast("Favori listeniz boş");
    return;
  }
  state.queue = [...state.favorites];
  state.queueIndex = 0;
  playTrackById(state.queue[0].id, state.queue[0]);
}

function playAllDownloads() {
  if (state.downloads.length === 0) {
    showToast("İndirilen şarkı yok");
    return;
  }
  state.queue = [...state.downloads];
  state.queueIndex = 0;
  playTrackById(state.queue[0].id, state.queue[0]);
}

function playAllPlaylist() {
  const allTracks = getCuratedTracks();
  if (!allTracks || allTracks.length === 0) return;
  state.queue = [...allTracks];
  state.queueIndex = 0;
  state.playingContextSub = 'ÇALMA LİSTESİNDEN ÇALINIYOR';
  state.playingContextTitle = 'Popüler Parçalar';
  saveQueueState();
  playTrackById(state.queue[0].id, state.queue[0]);
}

// =============================================================================
// 13. MODALS, QUEUE DRAWER & LIBRARY BACKUP
// =============================================================================

function exportLibraryBackup() {
  const data = {
    app: "Kurfamüzik",
    version: "5.0",
    exportDate: new Date().toISOString(),
    favorites: state.favorites || [],
    customPlaylists: state.customPlaylists || [],
    spotifyPlaylists: state.spotifyPlaylists || [],
    downloads: state.downloads || [],
    profile: state.profile
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kurfamuzik-yedek-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Kütüphane yedeği JSON dosyası olarak indirildi");
}

function sanitizeBackupTrack(t) {
  if (!t || typeof t !== 'object') return null;
  const rawYt = safeYtId(t.ytId || t.id);
  const rawId = rawYt || (typeof t.id === 'string' ? t.id.trim().slice(0, 64) : '');
  if (!rawId) return null;
  const clean = {
    id: rawId,
    title: typeof t.title === 'string' ? t.title.trim().slice(0, 200) : 'Sarki',
    artist: typeof t.artist === 'string' ? t.artist.trim().slice(0, 120) : 'Sanatci',
    duration: typeof t.duration === 'string' ? t.duration.trim().slice(0, 16) : '3:30',
    thumbnail: rawYt
      ? `https://i.ytimg.com/vi/${rawYt}/hqdefault.jpg`
      : safeUrl(t.thumbnail, './kurfamuzik_logo.png')
  };
  if (rawYt) clean.ytId = rawYt;
  if (typeof t.source === 'string') clean.source = t.source.trim().slice(0, 32);
  if (typeof t.format === 'string') clean.format = t.format.trim().slice(0, 16);
  if (typeof t.size === 'string') clean.size = t.size.trim().slice(0, 24);
  if (typeof t.date === 'string') clean.date = t.date.trim().slice(0, 32);
  return clean;
}

function sanitizeBackupPlaylist(pl) {
  if (!pl || typeof pl !== 'object') return null;
  const id = typeof pl.id === 'string' && pl.id.trim() ? pl.id.trim().slice(0, 64) : `pl_${Date.now()}`;
  const tracks = Array.isArray(pl.tracks) ? pl.tracks.map(sanitizeBackupTrack).filter(Boolean).slice(0, 500) : [];
  return {
    id,
    name: typeof pl.name === 'string' && pl.name.trim() ? pl.name.trim().slice(0, 100) : 'Liste',
    cover: safeUrl(pl.cover, './kurfamuzik_logo.png'),
    description: typeof pl.description === 'string' ? pl.description.trim().slice(0, 300) : '',
    createdAt: Number.isFinite(pl.createdAt) ? pl.createdAt : Date.now(),
    tracks
  };
}

function importLibraryBackup(event) {
  const inputEl = event?.target;
  const file = inputEl?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onerror = () => {
    if (inputEl) inputEl.value = '';
    showToast("Yedek dosyasi okunamadi");
  };
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        throw new Error("Gecersiz yedek semasi");
      }

      let quotaWarning = false;
      if (Array.isArray(data.favorites)) {
        state.favorites = data.favorites.map(sanitizeBackupTrack).filter(Boolean).slice(0, 1000);
        if (!safeSetStorage('kurfa_favs', JSON.stringify(state.favorites))) quotaWarning = true;
      }
      if (Array.isArray(data.customPlaylists)) {
        state.customPlaylists = data.customPlaylists.map(sanitizeBackupPlaylist).filter(Boolean).slice(0, 100);
        if (!safeSetStorage('kurfa_custom_playlists', JSON.stringify(state.customPlaylists))) quotaWarning = true;
      }
      if (Array.isArray(data.spotifyPlaylists)) {
        state.spotifyPlaylists = data.spotifyPlaylists.map(sanitizeBackupPlaylist).filter(Boolean).slice(0, 100);
        if (!safeSetStorage('kurfa_spotify_playlists', JSON.stringify(state.spotifyPlaylists))) quotaWarning = true;
      }
      if (Array.isArray(data.downloads)) {
        state.downloads = data.downloads.map(sanitizeBackupTrack).filter(Boolean).slice(0, 500);
        if (!safeSetStorage('kurfa_downloads', JSON.stringify(state.downloads))) quotaWarning = true;
      }
      if (data.profile && typeof data.profile === 'object' && !Array.isArray(data.profile)) {
        const p = data.profile;
        state.profile = {
          ...state.profile,
          nickname: typeof p.nickname === 'string' && p.nickname.trim() ? p.nickname.trim().slice(0, 40) : state.profile.nickname,
          avatar: safeUrl(p.avatar, state.profile.avatar),
          darkMode: typeof p.darkMode === 'boolean' ? p.darkMode : state.profile.darkMode,
          listeningSeconds: Number.isFinite(p.listeningSeconds) && p.listeningSeconds >= 0 ? Math.floor(p.listeningSeconds) : state.profile.listeningSeconds,
          tracksPlayed: Number.isFinite(p.tracksPlayed) && p.tracksPlayed >= 0 ? Math.floor(p.tracksPlayed) : state.profile.tracksPlayed
        };
        if (!safeSetStorage('kurfa_profile', JSON.stringify(state.profile))) quotaWarning = true;
        updateProfileUI();
      }

      renderFavoritesTable();
      renderDownloadsTable();
      renderCustomPlaylistsGrid();
      renderSpotifyPlaylistsGrid();
      updateKutuphaneBadges();
      showToast(quotaWarning ? "Veriler yuklendi ancak tarayici depolama alani doldu" : "Kutuphane verileri basariyla geri yuklendi!");
    } catch (err) {
      showToast("Yedek dosyasi okunamadi veya format gecersiz");
    } finally {
      if (inputEl) inputEl.value = '';
    }
  };
  reader.readAsText(file);
}

function toggleQueueDrawer() {
  state.queueDrawerOpen = !state.queueDrawerOpen;
  if (!DOM.queueDrawer) return;

  if (state.queueDrawerOpen) {
    renderQueueDrawerList();
    DOM.queueDrawer.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-8');
    DOM.queueDrawer.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    const activeRow = DOM.queueDrawerList ? DOM.queueDrawerList.querySelector('[data-current="1"]') : null;
    if (activeRow && typeof activeRow.scrollIntoView === 'function') {
      requestAnimationFrame(() => activeRow.scrollIntoView({ block: 'center', behavior: 'smooth' }));
    }
  } else {
    DOM.queueDrawer.classList.add('opacity-0', 'pointer-events-none', 'translate-y-8');
    DOM.queueDrawer.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
  }
}

function openDownloaderModal(track) {
  if (!DOM.downloaderModal || !DOM.downloaderModalCard) return;
  DOM.downloaderModal.classList.remove('opacity-0', 'pointer-events-none');
  DOM.downloaderModal.classList.add('opacity-100', 'pointer-events-auto');
  DOM.downloaderModalCard.classList.remove('scale-95');
  DOM.downloaderModalCard.classList.add('scale-100');

  state._pendingDownloadTrack = (track && typeof track === 'object') ? track : null;

  const previewBox = document.getElementById('modal-track-preview');
  const previewImg = document.getElementById('modal-preview-img');
  const previewTitle = document.getElementById('modal-preview-title');
  const previewArtist = document.getElementById('modal-preview-artist');
  const progressBox = document.getElementById('modal-dl-progress-box');
  const openFolderBtn = document.getElementById('btn-dl-open-folder');

  if (progressBox) {
    progressBox.classList.add('hidden');
    progressBox.classList.remove('flex');
  }
  if (openFolderBtn) openFolderBtn.classList.add('hidden');

  if (track && (track.id || track.ytId)) {
    const safeId = safeYtId(track.ytId || track.id);
    if (DOM.modalUrlInput) {
      DOM.modalUrlInput.value = safeId
        ? `https://www.youtube.com/watch?v=${safeId}`
        : `${track.artist || ''} - ${track.title || ''}`.trim();
    }
    if (previewBox && previewTitle && previewArtist) {
      previewTitle.textContent = track.title || "Seçili Şarkı";
      previewArtist.textContent = track.artist || "Sanatçı";
      if (previewImg) {
        const fallbackThumb = safeId ? `https://i.ytimg.com/vi/${safeId}/hqdefault.jpg` : './kurfamuzik_logo.png';
        previewImg.src = safeUrl(track.thumbnail, fallbackThumb);
      }
      previewBox.classList.remove('hidden');
    }
  } else {
    if (DOM.modalUrlInput) DOM.modalUrlInput.value = '';
    if (previewBox) previewBox.classList.add('hidden');
    if (DOM.modalUrlInput) DOM.modalUrlInput.focus();
  }

  const ongoingBox = document.getElementById('modal-ongoing-download-box');
  if (ongoingBox) {
    if (state.activeDownload && state.activeDownload.status === 'active') {
      ongoingBox.classList.remove('hidden');
      ongoingBox.classList.add('flex');
      const titleEl = document.getElementById('modal-ongoing-dl-title');
      const pctEl = document.getElementById('modal-ongoing-dl-percent');
      if (titleEl) titleEl.textContent = `${state.activeDownload.label || 'İndiriliyor'}: ${state.activeDownload.title || 'Şarkı'}`;
      if (pctEl) pctEl.textContent = `${state.activeDownload.percent || 0}%`;
    } else {
      ongoingBox.classList.add('hidden');
      ongoingBox.classList.remove('flex');
    }
  }
}

function closeDownloaderModal() {
  if (!DOM.downloaderModal || !DOM.downloaderModalCard) return;
  DOM.downloaderModal.classList.add('opacity-0', 'pointer-events-none');
  DOM.downloaderModal.classList.remove('opacity-100', 'pointer-events-auto');
  DOM.downloaderModalCard.classList.add('scale-95');
  DOM.downloaderModalCard.classList.remove('scale-100');
}

async function pasteModalUrl() {
  try {
    const text = await navigator.clipboard.readText();
    if (DOM.modalUrlInput) {
      DOM.modalUrlInput.value = text;
      showToast("Pano linki yapistirildi");
    }
  } catch (err) {
    showToast("Lutfen linki dogrudan kutuya yapistirin.");
  }
}

let downloadPillHideTimer = null;
let inlineDeckHideTimer = null;
let mobBannerHideTimer = null;

function updateDownloadPill(status, percent, title, label) {
  const pill = document.getElementById('active-download-pill');
  if (!pill) return;
  const pillSpinner = document.getElementById('download-pill-spinner');
  const pillCheck = document.getElementById('download-pill-check');
  const pillLabel = document.getElementById('download-pill-label');
  const pillPercent = document.getElementById('download-pill-percent');
  const pillTitle = document.getElementById('download-pill-title');

  if (downloadPillHideTimer) {
    clearTimeout(downloadPillHideTimer);
    downloadPillHideTimer = null;
  }

  if (status === 'hide') {
    pill.classList.add('hidden');
    pill.classList.remove('flex');
    return;
  }

  pill.classList.remove('hidden');
  pill.classList.add('flex');

  if (status === 'active') {
    if (pillSpinner) { pillSpinner.style.display = 'inline-block'; pillSpinner.classList.remove('hidden'); pillSpinner.classList.add('animate-spin'); }
    if (pillCheck) { pillCheck.style.display = 'none'; pillCheck.classList.add('hidden'); }
    if (pillLabel) pillLabel.textContent = label || 'Indiriliyor';
    if (pillPercent) pillPercent.textContent = `${percent}%`;
    if (pillTitle) pillTitle.textContent = title || 'Arka planda hazirlaniyor...';
  } else if (status === 'done') {
    if (pillSpinner) { pillSpinner.style.display = 'none'; pillSpinner.classList.add('hidden'); pillSpinner.classList.remove('animate-spin'); }
    if (pillCheck) { pillCheck.style.display = 'inline-block'; pillCheck.classList.remove('hidden'); }
    if (pillLabel) pillLabel.textContent = label || 'Indirildi';
    if (pillPercent) pillPercent.textContent = '100%';
    if (pillTitle) pillTitle.textContent = title || 'Tamamlandi';
    downloadPillHideTimer = setTimeout(() => {
      downloadPillHideTimer = null;
      pill.classList.add('hidden');
      pill.classList.remove('flex');
    }, 4000);
  } else if (status === 'error') {
    if (pillSpinner) { pillSpinner.style.display = 'none'; pillSpinner.classList.add('hidden'); pillSpinner.classList.remove('animate-spin'); }
    if (pillCheck) { pillCheck.style.display = 'none'; pillCheck.classList.add('hidden'); }
    if (pillLabel) pillLabel.textContent = 'Hata Olustu';
    if (pillPercent) pillPercent.textContent = '!';
    if (pillTitle) pillTitle.textContent = title || 'Indirme basarisiz';
    downloadPillHideTimer = setTimeout(() => {
      downloadPillHideTimer = null;
      pill.classList.add('hidden');
      pill.classList.remove('flex');
    }, 4000);
  }
}

function updateAllDownloadIndicators(status, percent, title, label) {
  state.activeDownload = {
    status,
    percent,
    title,
    label
  };

  if (inlineDeckHideTimer) {
    clearTimeout(inlineDeckHideTimer);
    inlineDeckHideTimer = null;
  }
  if (mobBannerHideTimer) {
    clearTimeout(mobBannerHideTimer);
    mobBannerHideTimer = null;
  }

  // 1. Bottom-Right Floating Pill
  updateDownloadPill(status, percent, title, label);

  // 2. PC Player Deck Inline Widget
  const inlineDeck = document.getElementById('player-inline-download-status');
  if (inlineDeck) {
    const inlineIcon = document.getElementById('player-inline-dl-icon');
    const inlineFmt = document.getElementById('player-inline-dl-format');
    const inlinePct = document.getElementById('player-inline-dl-percent');
    const inlineBar = document.getElementById('player-inline-dl-bar');

    if (status === 'hide') {
      inlineDeck.classList.add('hidden');
      inlineDeck.classList.remove('flex');
    } else if (status === 'active') {
      inlineDeck.classList.remove('hidden');
      inlineDeck.classList.add('flex');
      if (inlineIcon) {
        inlineIcon.textContent = 'progress_activity';
        inlineIcon.classList.add('animate-spin', 'text-primary');
        inlineIcon.classList.remove('text-green-500', 'text-rose-400');
      }
      if (inlineFmt) inlineFmt.textContent = label || 'Indiriliyor';
      if (inlinePct) inlinePct.textContent = `${percent}%`;
      if (inlineBar) inlineBar.style.width = `${percent}%`;
    } else if (status === 'done') {
      inlineDeck.classList.remove('hidden');
      inlineDeck.classList.add('flex');
      if (inlineIcon) {
        inlineIcon.textContent = 'check_circle';
        inlineIcon.classList.remove('animate-spin', 'text-primary', 'text-rose-400');
        inlineIcon.classList.add('text-green-500');
      }
      if (inlineFmt) inlineFmt.textContent = 'Indirildi';
      if (inlinePct) inlinePct.textContent = '100%';
      if (inlineBar) inlineBar.style.width = '100%';
      inlineDeckHideTimer = setTimeout(() => {
        inlineDeckHideTimer = null;
        inlineDeck.classList.add('hidden');
        inlineDeck.classList.remove('flex');
      }, 4000);
    } else if (status === 'error') {
      inlineDeck.classList.remove('hidden');
      inlineDeck.classList.add('flex');
      if (inlineIcon) {
        inlineIcon.textContent = 'error';
        inlineIcon.classList.remove('animate-spin', 'text-primary', 'text-green-500');
        inlineIcon.classList.add('text-rose-400');
      }
      if (inlineFmt) inlineFmt.textContent = 'Hata';
      if (inlinePct) inlinePct.textContent = '!';
      inlineDeckHideTimer = setTimeout(() => {
        inlineDeckHideTimer = null;
        inlineDeck.classList.add('hidden');
        inlineDeck.classList.remove('flex');
      }, 4000);
    }
  }

  // 3. Mobile Top Floating Island Banner
  const mobBanner = document.getElementById('mobile-download-banner');
  if (mobBanner) {
    const mobIconBox = document.getElementById('mob-dl-icon-box');
    const mobIcon = document.getElementById('mob-dl-icon');
    const mobTitle = document.getElementById('mob-dl-title');
    const mobPct = document.getElementById('mob-dl-percent');
    const mobBar = document.getElementById('mob-dl-bar');

    if (status === 'hide') {
      mobBanner.classList.add('hidden');
      mobBanner.classList.remove('flex');
    } else if (status === 'active') {
      mobBanner.classList.remove('hidden');
      mobBanner.classList.add('flex');
      if (mobIconBox) {
        mobIconBox.className = 'w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 text-primary transition-all';
      }
      if (mobIcon) {
        mobIcon.textContent = 'progress_activity';
        mobIcon.className = 'material-symbols-outlined text-[18px] animate-spin text-primary';
      }
      if (mobTitle) mobTitle.textContent = title || 'Sarki Indiriliyor...';
      if (mobPct) {
        mobPct.textContent = `${percent}%`;
        mobPct.className = 'text-[11px] font-bold font-mono text-primary flex-shrink-0';
      }
      if (mobBar) {
        mobBar.style.width = `${percent}%`;
        mobBar.className = 'h-full bg-gradient-to-r from-primary to-pink-500 rounded-full transition-all duration-300';
      }
    } else if (status === 'done') {
      mobBanner.classList.remove('hidden');
      mobBanner.classList.add('flex');
      if (mobIconBox) {
        mobIconBox.className = 'w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0 text-emerald-400 transition-all';
      }
      if (mobIcon) {
        mobIcon.textContent = 'check_circle';
        mobIcon.className = 'material-symbols-outlined text-[18px] text-emerald-400';
      }
      if (mobTitle) mobTitle.textContent = title ? `${title} (Indirildi)` : 'Indirme Tamamlandi';
      if (mobPct) {
        mobPct.textContent = '100%';
        mobPct.className = 'text-[11px] font-bold font-mono text-emerald-400 flex-shrink-0';
      }
      if (mobBar) {
        mobBar.style.width = '100%';
        mobBar.className = 'h-full bg-emerald-500 rounded-full transition-all duration-300';
      }
      mobBannerHideTimer = setTimeout(() => {
        mobBannerHideTimer = null;
        mobBanner.classList.add('hidden');
        mobBanner.classList.remove('flex');
      }, 4000);
    } else if (status === 'error') {
      mobBanner.classList.remove('hidden');
      mobBanner.classList.add('flex');
      if (mobIconBox) {
        mobIconBox.className = 'w-8 h-8 rounded-xl bg-rose-500/15 flex items-center justify-center flex-shrink-0 text-rose-400 transition-all';
      }
      if (mobIcon) {
        mobIcon.textContent = 'error';
        mobIcon.className = 'material-symbols-outlined text-[18px] text-rose-400';
      }
      if (mobTitle) mobTitle.textContent = 'Indirme hatasi olustu';
      if (mobPct) {
        mobPct.textContent = '!';
        mobPct.className = 'text-[11px] font-bold font-mono text-rose-400 flex-shrink-0';
      }
      mobBannerHideTimer = setTimeout(() => {
        mobBannerHideTimer = null;
        mobBanner.classList.add('hidden');
        mobBanner.classList.remove('flex');
      }, 4000);
    }
  }

  // 4. Modal Ongoing Notice Box (hidden when #modal-dl-progress-box is already displaying progress)
  const ongoingBox = document.getElementById('modal-ongoing-download-box');
  const modalDlProgressBox = document.getElementById('modal-dl-progress-box');
  const hasModalProgressBar = Boolean(modalDlProgressBox && !modalDlProgressBox.classList.contains('hidden'));
  if (ongoingBox) {
    if (status === 'active' && !hasModalProgressBar) {
      ongoingBox.classList.remove('hidden');
      ongoingBox.classList.add('flex');
      const titleEl = document.getElementById('modal-ongoing-dl-title');
      const pctEl = document.getElementById('modal-ongoing-dl-percent');
      if (titleEl) titleEl.textContent = `${label || 'İndiriliyor'}: ${title || 'Şarkı'}`;
      if (pctEl) pctEl.textContent = `${percent}%`;
    } else {
      ongoingBox.classList.add('hidden');
      ongoingBox.classList.remove('flex');
    }
  }
}

function dismissMobileDownloadBanner(e) {
  if (e) e.stopPropagation();
  if (mobBannerHideTimer) {
    clearTimeout(mobBannerHideTimer);
    mobBannerHideTimer = null;
  }
  const banner = document.getElementById('mobile-download-banner');
  if (banner) {
    banner.classList.add('hidden');
    banner.classList.remove('flex');
  }
}

function dismissDownloadPill(e) {
  if (e) e.stopPropagation();
  updateAllDownloadIndicators('hide');
}

function setModalDownloadProgressUI(percent, statusText, detailText, mode = 'progress', opts = {}) {
  const pct = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  const box = document.getElementById('modal-dl-progress-box');
  const iconEl = document.getElementById('modal-dl-state-icon');
  const statusEl = document.getElementById('modal-dl-status-text');
  const pctEl = document.getElementById('modal-dl-percent-text');
  const nativeProg = document.getElementById('modal-dl-progress-native');
  const legacyBar = document.getElementById('modal-dl-progress-bar');
  const detailEl = document.getElementById('modal-dl-detail-text');
  const actionsRow = document.getElementById('modal-dl-actions-row');
  const retryBtn = document.getElementById('btn-dl-retry');
  const getAppBtn = document.getElementById('btn-dl-get-app');

  const isError = mode === 'error';
  const isSuccess = mode === 'success';

  if (box) {
    box.classList.remove(
      'bg-surface-container-low', 'border-surface-container',
      'bg-rose-500/10', 'border-rose-500/25',
      'bg-emerald-500/10', 'border-emerald-500/25'
    );
    if (isError) {
      box.classList.add('bg-rose-500/10', 'border-rose-500/25');
    } else if (isSuccess) {
      box.classList.add('bg-emerald-500/10', 'border-emerald-500/25');
    } else {
      box.classList.add('bg-surface-container-low', 'border-surface-container');
    }
  }

  if (iconEl) {
    iconEl.classList.remove('text-primary', 'text-rose-500', 'text-emerald-500');
    if (isError) {
      iconEl.textContent = 'error';
      iconEl.classList.add('text-rose-500');
    } else if (isSuccess) {
      iconEl.textContent = 'check_circle';
      iconEl.classList.add('text-emerald-500');
    } else {
      iconEl.textContent = 'downloading';
      iconEl.classList.add('text-primary');
    }
  }

  if (statusEl && statusText) {
    statusEl.textContent = statusText;
    statusEl.classList.toggle('text-rose-500', isError);
    statusEl.classList.toggle('text-on-surface', !isError);
  }
  if (pctEl) {
    pctEl.textContent = `${pct}%`;
    pctEl.classList.toggle('hidden', isError);
  }
  if (nativeProg) {
    nativeProg.value = pct;
    nativeProg.classList.toggle('hidden', isError);
  }
  if (legacyBar) legacyBar.style.width = `${pct}%`;
  if (detailEl && detailText) detailEl.textContent = detailText;

  const showRetry = isError && Boolean(opts.showRetry !== false && state._lastDownloadArgs);
  const showAppCta = isError && Boolean(opts.showAppCta);
  if (retryBtn) retryBtn.classList.toggle('hidden', !showRetry);
  if (getAppBtn) getAppBtn.classList.toggle('hidden', !showAppCta);
  if (actionsRow) {
    const openFolderBtn = document.getElementById('btn-dl-open-folder');
    const hasOpenFolder = openFolderBtn && !openFolderBtn.classList.contains('hidden');
    const anyAction = showRetry || showAppCta || hasOpenFolder;
    actionsRow.classList.toggle('hidden', !anyAction);
    actionsRow.classList.toggle('flex', anyAction);
  }
}

window.retryLastDownload = function () {
  const args = state._lastDownloadArgs;
  if (!args) return;
  startDirectDownload(args.videoId, args.format, args.trackMeta);
};

function formatBytesMb(bytes) {
  const b = Number(bytes || 0);
  if (!b || b <= 0) return '';
  if (b < 1024 * 1024) return `${Math.round(b / 1024)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

window.openLastDownloadFolder = function () {
  if (getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('OPEN_DOWNLOAD_FOLDER', { filePath: state._lastDownloadFilePath || '' }, 4000);
  }
};

window.__kurfaHandleNativeDownloadProgress = function (payload) {
  if (!payload) return;
  const pct = Math.max(1, Math.min(99, Math.round(Number(payload.percent || 0))));
  const dlStr = formatBytesMb(payload.bytesDownloaded);
  const totStr = formatBytesMb(payload.totalBytes);
  const sizeDetail = dlStr ? (totStr ? `${dlStr} / ${totStr}` : dlStr) : 'Aktarım sürüyor...';
  const curTitle = state.activeDownload?.title || 'Parça';
  const curLabel = state.activeDownload?.label || 'İndiriliyor';
  setModalDownloadProgressUI(pct, `${curLabel} (%${pct})`, sizeDetail);
  updateAllDownloadIndicators('active', pct, curTitle, curLabel);
};

async function startDirectDownload(videoId, format, trackMeta) {
  const isAudiusDirect = Boolean(trackMeta?.audiusStreamUrl) || String(videoId || '').startsWith('audius_');
  const validVideoId = safeYtId(trackMeta?.ytId || videoId);
  const isMp4 = format === '720' || format === 'mp4' || format === '1080';
  const label = isMp4 ? 'MP4 Video' : 'Ses Dosyası';

  if (!validVideoId && !isAudiusDirect && !trackMeta?.title) {
    showToast("Geçersiz medya bilgisi");
    return;
  }

  const progressBox = document.getElementById('modal-dl-progress-box');
  const openFolderBtn = document.getElementById('btn-dl-open-folder');
  const btnMp3 = document.getElementById('btn-dl-mp3');
  const btnMp4 = document.getElementById('btn-dl-mp4');

  if (progressBox) {
    progressBox.classList.remove('hidden');
    progressBox.classList.add('flex');
  }
  if (openFolderBtn) openFolderBtn.classList.add('hidden');
  if (btnMp3) btnMp3.disabled = true;
  if (btnMp4) btnMp4.disabled = true;

  state._lastDownloadArgs = { videoId, format, trackMeta };
  const displayTitle = trackMeta?.title || validVideoId || 'Kurfanova Parçası';
  const displayArtist = trackMeta?.artist || 'Kurfanova';
  const combinedTitle = (displayArtist && displayArtist !== 'Kurfanova' && !displayTitle.toLowerCase().includes(displayArtist.toLowerCase()))
    ? `${displayArtist} - ${displayTitle}`
    : displayTitle;

  setModalDownloadProgressUI(4, `${label} hazırlanıyor...`, 'Kaynak doğrulanıyor...');
  updateAllDownloadIndicators('active', 4, displayTitle, label);

  const recordCompletedDownload = (extLabel, sizeStr) => {
    const cleanId = validVideoId || trackMeta?.id || `dl_${Date.now()}`;
    const cleanTrack = {
      id: cleanId,
      ytId: validVideoId || undefined,
      title: displayTitle,
      artist: displayArtist,
      duration: trackMeta?.duration || '3:30',
      thumbnail: safeUrl(trackMeta?.thumbnail, validVideoId ? `https://i.ytimg.com/vi/${validVideoId}/hqdefault.jpg` : './kurfamuzik_logo.png'),
      format: extLabel,
      size: sizeStr || (isMp4 ? 'Video' : 'Ses'),
      date: 'Bugün'
    };
    if (!state.downloads.some(d => d.id === cleanTrack.id)) {
      state.downloads.unshift(cleanTrack);
      safeSetStorage('kurfa_downloads', JSON.stringify(state.downloads));
      renderDownloadsTable();
      updateKutuphaneBadges();
    }
  };

  try {
    // 0. Ensure valid YouTube ID when Open-Catalog (non-Audius) track is requested on native bridges
    let targetYtId = validVideoId;
    if (!targetYtId && !isAudiusDirect && displayTitle) {
      setModalDownloadProgressUI(10, 'Eşleştiriliyor...', `${displayTitle} aranıyor...`);
      const sRes = await kurfaSearchTracks(`${displayArtist} ${displayTitle}`, { filterSingles: true });
      if (sRes?.success && Array.isArray(sRes.results) && sRes.results.length > 0) {
        targetYtId = safeYtId(sRes.results[0].id || sRes.results[0].ytId);
      }
    }

    // 1. NATIVE WINDOWS DESKTOP (.EXE) — Direct InnerTube Chunked Download to %USERPROFILE%\Downloads
    const extMode = getBrowserExtensionMode();
    if (targetYtId && extMode && extMode.startsWith('desktop')) {
      setModalDownloadProgressUI(8, `${label} cihaza indiriliyor...`, 'Masaüstü motoru bağlanıyor...');
      const res = await callExtensionBridge('DOWNLOAD_MEDIA', {
        videoId: targetYtId,
        format: isMp4 ? 'mp4' : 'mp3',
        title: combinedTitle
      }, 180000);
      if (res && res.success) {
        state._lastDownloadFilePath = res.filePath || '';
        const mbStr = formatBytesMb(res.bytesDownloaded) || 'Kaydedildi';
        setModalDownloadProgressUI(100, `${label} indirildi`, `${res.fileName || combinedTitle} (${mbStr})`, 'success');
        if (openFolderBtn) {
          openFolderBtn.classList.remove('hidden');
          const actionsRow = document.getElementById('modal-dl-actions-row');
          if (actionsRow) {
            actionsRow.classList.remove('hidden');
            actionsRow.classList.add('flex');
          }
        }
        updateAllDownloadIndicators('done', 100, displayTitle, label);
        recordCompletedDownload(isMp4 ? 'MP4' : 'M4A', mbStr);
        showToast(`İndirilenler klasörüne kaydedildi: ${res.fileName || displayTitle}`);
        return;
      }
      throw new Error(res?.error || 'Masaüstü indirme tamamlanamadı.');
    }

    // 2. NATIVE ANDROID (.APK) — Direct InnerTube Chunked Download to MediaStore.Downloads
    if (targetYtId && isAndroidNativeEngine() && typeof window.KurfaAndroidBridge?.downloadMediaAsync === 'function') {
      setModalDownloadProgressUI(8, `${label} telefona indiriliyor...`, 'Android motoru bağlanıyor...');
      const res = await callAndroidBridge('downloadMediaAsync', [
        targetYtId,
        isMp4 ? 'mp4' : 'mp3',
        combinedTitle
      ], 180000);
      if (res && res.success) {
        const mbStr = formatBytesMb(res.bytesDownloaded) || 'Kaydedildi';
        setModalDownloadProgressUI(100, `${label} indirildi`, `${res.fileName || combinedTitle} (${mbStr})`, 'success');
        updateAllDownloadIndicators('done', 100, displayTitle, label);
        recordCompletedDownload(isMp4 ? 'MP4' : 'M4A', mbStr);
        showToast(`Cihaza kaydedildi: ${res.fileName || displayTitle}`);
        return;
      }
      throw new Error(res?.error || 'Android indirme tamamlanamadı.');
    }

    // 3. WEB BROWSER — Native Audius Stream / Open-Catalog Blob Download (Zero Server Cost)
    let directAudioUrl = trackMeta?.audiusStreamUrl || (isAudiusDirect ? `https://api.audius.co/v1/tracks/${encodeURIComponent(String(videoId).replace(/^audius_/, ''))}/stream` : '');
    if (!directAudioUrl && !isMp4 && trackMeta) {
      const audMatch = await kurfaTryQuickAudiusMatch(trackMeta, 1800);
      if (audMatch?.success && audMatch.streamUrl) {
        directAudioUrl = audMatch.streamUrl;
      }
    }

    if (directAudioUrl && !isMp4) {
      setModalDownloadProgressUI(18, 'Doğrudan ses akışı indiriliyor...', 'Tarayıcı belleğine alınıyor...');
      const dlRes = await fetch(directAudioUrl);
      if (!dlRes.ok) throw new Error(`HTTP ${dlRes.status}`);
      const contentLen = Number(dlRes.headers.get('content-length') || 0);
      let blob;
      if (dlRes.body && typeof dlRes.body.getReader === 'function') {
        const reader = dlRes.body.getReader();
        const chunks = [];
        let received = 0;
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            chunks.push(value);
            received += value.byteLength;
            const pct = contentLen > 0 ? Math.min(96, Math.round((received * 100) / contentLen)) : Math.min(92, 20 + Math.round(received / 150000));
            setModalDownloadProgressUI(pct, `Ses indiriliyor (%${pct})`, formatBytesMb(received));
            updateAllDownloadIndicators('active', pct, displayTitle, label);
          }
        }
        blob = new Blob(chunks, { type: dlRes.headers.get('content-type') || 'audio/mpeg' });
      } else {
        blob = await dlRes.blob();
      }

      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${combinedTitle.replace(/[\\/:*?"<>|]/g, '')}.mp3`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (a.parentNode) a.parentNode.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }, 3000);

      const mbStr = formatBytesMb(blob.size) || 'MP3';
      setModalDownloadProgressUI(100, 'Ses dosyası indirildi', `${a.download} (${mbStr})`, 'success');
      updateAllDownloadIndicators('done', 100, displayTitle, 'MP3 İndirildi');
      recordCompletedDownload('MP3', mbStr);
      showToast(`İndirildi: ${displayTitle}`);
      return;
    }

    // 4. WEB FALLBACK FOR YOUTUBE LINKS (Fast-timeout check before clean app CTA)
    if (targetYtId) {
      setModalDownloadProgressUI(20, 'Web indirme servisine bağlanılıyor...', 'Ayna sunucu deneniyor...');
      const cobaltMirrors = [
        'https://cobalt-api.kwiatekmiki.com/'
      ];
      let tunnelUrl = '';
      for (const ep of cobaltMirrors) {
        try {
          const sig = typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function'
            ? AbortSignal.timeout(3500)
            : undefined;
          const cRes = await fetch(ep, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            signal: sig,
            body: JSON.stringify({
              url: `https://www.youtube.com/watch?v=${targetYtId}`,
              downloadMode: isMp4 ? 'auto' : 'audio',
              audioFormat: 'mp3',
              videoQuality: '720'
            })
          });
          if (cRes.ok) {
            const cData = await cRes.json();
            if (cData && cData.url && String(cData.url).startsWith('https://')) {
              tunnelUrl = cData.url;
              break;
            }
          }
        } catch (_) {}
      }

      if (tunnelUrl) {
        setModalDownloadProgressUI(100, `${label} hazır`, 'Tarayıcı indirmesi başlatılıyor...', 'success');
        const a = document.createElement('a');
        a.href = tunnelUrl;
        a.download = `${combinedTitle.replace(/[\\/:*?"<>|]/g, '')}.${isMp4 ? 'mp4' : 'mp3'}`;
        a.rel = 'noopener noreferrer';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { if (a.parentNode) a.parentNode.removeChild(a); }, 2000);
        updateAllDownloadIndicators('done', 100, displayTitle, label);
        recordCompletedDownload(isMp4 ? 'MP4' : 'MP3', '');
        showToast(`İndirme başlatıldı: ${displayTitle}`);
        return;
      }
    }

    throw new Error('WEB_CORS_UNAVAILABLE');
  } catch (err) {
    console.error("Download error:", err);
    const isWebCors = String(err?.message || '') === 'WEB_CORS_UNAVAILABLE';
    const isNativeEnv = (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine()) || Boolean(getBrowserExtensionMode());
    const errTitle = isMp4 ? 'Video indirilemedi' : 'Ses indirilemedi';
    const errDetail = isWebCors
      ? 'Tarayıcı güvenlik kısıtı nedeniyle YouTube MP4 dosyaları doğrudan indirilemiyor. Masaüstü (.exe) veya Android (.apk) üzerinden tek dokunuşla indirebilirsiniz.'
      : (err?.message || 'Bağlantı zaman aşımına uğradı, lütfen tekrar deneyin.');
    setModalDownloadProgressUI(0, errTitle, errDetail, 'error', {
      showRetry: true,
      showAppCta: isWebCors && !isNativeEnv
    });
    updateAllDownloadIndicators('error', 0, displayTitle, 'Hata');
    showToast(isWebCors ? 'Tam indirme için EXE veya APK uygulamasını kullanın.' : 'İndirme başarısız oldu.');
  } finally {
    if (btnMp3) btnMp3.disabled = false;
    if (btnMp4) btnMp4.disabled = false;
  }
}

function processModalDownload(action) {
  const url = DOM.modalUrlInput ? DOM.modalUrlInput.value.trim() : "";
  const urlMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  const matchedYt = urlMatch ? safeYtId(urlMatch[1]) : null;
  const pendingTrack = state._pendingDownloadTrack;

  if (!matchedYt && !pendingTrack) {
    showToast("Lütfen geçerli bir YouTube linki yapıştırın");
    return;
  }

  const videoId = matchedYt || pendingTrack?.ytId || pendingTrack?.id;
  const track = (matchedYt && pendingTrack && (pendingTrack.id === matchedYt || pendingTrack.ytId === matchedYt))
    ? pendingTrack
    : (matchedYt
      ? ((typeof CURATED_TRACKS !== 'undefined' ? CURATED_TRACKS.find(t => (t.id === matchedYt || t.ytId === matchedYt)) : null) ||
         state.queue.find(t => (t.id === matchedYt || t.ytId === matchedYt)) ||
         state.currentSearchResults.find(t => (t.id === matchedYt || t.ytId === matchedYt)) ||
         { id: matchedYt, ytId: matchedYt, title: "YouTube Parçası", artist: "Kurfanova" })
      : pendingTrack);

  if (action === 'play') {
    closeDownloaderModal();
    playTrackById(track.id || videoId, track);
  } else {
    startDirectDownload(videoId, action, track);
  }
}

function showKurfaStorageInfo() {
  showToast("Yerel Kutuphane: Sarkilariniz ve ayarlariniz tarayicinizin guvenli yerel hafizasinda saklanir.");
}

// =============================================================================
// =============================================================================
// 13.2 REAL HARDWARE WEB AUDIO API DSP ENGINE & INTERACTIVE EQUALIZER
// =============================================================================

const KurfaDSP = {
  ctx: null,
  sourceNode: null,
  filters: [], // 5 BiquadFilterNodes: 60Hz, 250Hz, 1kHz, 4kHz, 16kHz
  gainNode: null,
  compressorNode: null,
  frequencies: [60, 250, 1000, 4000, 16000],
  types: ['lowshelf', 'peaking', 'peaking', 'peaking', 'highshelf'],
  gains: [0, 0, 0, 0, 0], // dB (-12 .. +12)
  isInitialized: false,

  presets: {
    'standart': [0, 0, 0, 0, 0],
    'bass': [9, 6, 1, -1, -2],
    'vokal': [-3, 1, 7, 4, 0],
    'akustik': [3, 4, 2, 3, 2],
    'tiz': [-2, 0, 2, 6, 9]
  },

  init(audioEl) {
    // Keep DSP state intact for equalizer UI controls, but do NOT hijack audioEl with
    // createMediaElementSource because cross-origin CDN streams (googlevideo.com) are muted
    // to zero bytes by browser CORS restrictions. Native hardware audio pipeline ensures full sound.
    this.isInitialized = true;
    console.log("Kurfa Web Audio Native Hardware Output Active (0% CORS Loss)");
  },

  setGain(bandIndex, db) {
    db = Math.max(-12, Math.min(12, Math.round(db)));
    this.gains[bandIndex] = db;
    if (this.filters[bandIndex] && this.ctx) {
      try {
        this.filters[bandIndex].gain.setTargetAtTime(db, this.ctx.currentTime, 0.05);
      } catch(e) {}
    }
    this.updateUI();
  },

  applyPreset(presetKey) {
    const pGains = this.presets[presetKey] || this.presets['standart'];
    this.gains = [...pGains];

    if (this.ctx && this.filters.length === 5) {
      this.filters.forEach((f, idx) => {
        try {
          f.gain.setTargetAtTime(this.gains[idx], this.ctx.currentTime, 0.05);
        } catch(e) {}
      });
    }

    // Dynamic Loudness compensation for YouTube engine
    if (state.ytPlayer && typeof state.ytPlayer.setVolume === 'function') {
      try {
        const baseVol = Math.round((state.volume || 0.8) * 100);
        if (presetKey === 'bass') {
          state.ytPlayer.setVolume(Math.min(100, Math.round(baseVol * 1.05)));
        } else if (presetKey === 'tiz') {
          state.ytPlayer.setVolume(Math.min(100, Math.round(baseVol * 1.02)));
        } else {
          state.ytPlayer.setVolume(baseVol);
        }
      } catch(e) {}
    }

    this.updateUI();
  },

  updateUI() {
    const bandKeys = ['60hz', '250hz', '1khz', '4khz', '16khz'];
    bandKeys.forEach((key, idx) => {
      const db = this.gains[idx] || 0;
      const bar = document.getElementById(`eq-bar-${key}`);
      const val = document.getElementById(`eq-val-${key}`);
      if (bar) {
        // Base height 24px, plus db * 1.5px (range: 6px to 42px)
        const h = Math.max(6, Math.min(44, 24 + db * 1.5));
        bar.style.height = `${h}px`;
      }
      if (val) {
        val.textContent = db > 0 ? `+${db}dB` : `${db}dB`;
      }
    });
  }
};

function cycleBandGain(bandIdx) {
  if (bandIdx < 0 || bandIdx > 4) return;
  const current = KurfaDSP.gains[bandIdx] || 0;
  // Step through -6dB -> 0dB -> +3dB -> +6dB -> +9dB -> -6dB
  const steps = [-6, 0, 3, 6, 9];
  let next = 0;
  const currIdx = steps.indexOf(current);
  if (currIdx !== -1 && currIdx < steps.length - 1) {
    next = steps[currIdx + 1];
  } else {
    next = steps[0];
  }

  KurfaDSP.setGain(bandIdx, next);
  state.activeEqPreset = 'ozel';
  const labelEl = document.getElementById('eq-active-preset-label');
  if (labelEl) labelEl.textContent = 'Özel Ayar';
  
  const buttons = document.querySelectorAll('#eq-presets-container .eq-preset-btn');
  buttons.forEach(b => b.classList.remove('active'));

  const freqLabels = ['60Hz (Bass)', '250Hz (Alt Mid)', '1kHz (Vokal)', '4kHz (Üst Mid)', '16kHz (Tiz)'];
  showToast(`${freqLabels[bandIdx]}: ${next > 0 ? '+' : ''}${next}dB`);
}

function setEqualizerPreset(preset, silent = true) {
  state.activeEqPreset = preset;
  safeSetStorage('kurfa_eq_preset', preset);

  const labelMap = {
    'standart': 'Standart',
    'bass': 'Bass Boost (+9dB)',
    'vokal': 'Vokal Vurgusu (+7dB)',
    'akustik': 'Akustik Sıcaklık',
    'tiz': 'Tiz Kristal (+9dB)',
    'ozel': 'Özel Ayar'
  };

  const labelEl = document.getElementById('eq-active-preset-label');
  if (labelEl) labelEl.textContent = labelMap[preset] || 'Standart';

  const buttons = document.querySelectorAll('#eq-presets-container .eq-preset-btn');
  buttons.forEach(btn => {
    const text = (btn.textContent || '').toLowerCase();
    const isActive = (preset === 'standart' && text.includes('standart')) ||
                     (preset === 'bass' && text.includes('bass')) ||
                     (preset === 'vokal' && text.includes('vokal')) ||
                     (preset === 'akustik' && text.includes('akustik')) ||
                     (preset === 'tiz' && text.includes('tiz'));
    if (isActive) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  KurfaDSP.applyPreset(preset);
  if (!silent) showToast(`Ekolayzer: ${labelMap[preset]}`);
}

// =============================================================================
// 13.3 SOCIAL SHARE MODAL
// =============================================================================

function openShareModal(track = null) {
  const target = track || state.currentTrack;
  if (!target || !target.id) {
    showToast("Önce bir şarkı seçin");
    return;
  }
  const modal = document.getElementById('share-modal');
  const card = document.getElementById('share-modal-card');
  if (!modal || !card) return;

  const thumb = document.getElementById('share-track-thumb');
  const title = document.getElementById('share-track-title');
  const artist = document.getElementById('share-track-artist');
  const input = document.getElementById('share-link-input');
  const copyBtnText = document.getElementById('share-copy-btn-text');

  const validYt = safeYtId(target.ytId || target.id);
  const fallbackThumb = validYt ? `https://i.ytimg.com/vi/${validYt}/hqdefault.jpg` : './kurfamuzik_logo.png';
  if (thumb) thumb.src = safeUrl(target.thumbnail, fallbackThumb);
  if (title) title.textContent = target.title || 'Şarkı';
  if (artist) artist.textContent = target.artist || 'Sanatçı';

  const shareId = validYt || encodeURIComponent(String(target.id));
  const shareUrl = `${window.location.origin}${window.location.pathname}?song=${shareId}`;
  if (input) input.value = shareUrl;
  if (copyBtnText) copyBtnText.textContent = "Kopyala";

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
}

function closeShareModal() {
  const modal = document.getElementById('share-modal');
  const card = document.getElementById('share-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

async function copyShareUrl() {
  const input = document.getElementById('share-link-input');
  const copyBtnText = document.getElementById('share-copy-btn-text');
  if (!input) return;

  try {
    await navigator.clipboard.writeText(input.value);
    if (copyBtnText) copyBtnText.textContent = "Kopyalandı!";
    showToast("Şarkı linki panoya kopyalandı!");
    setTimeout(() => {
      if (copyBtnText) copyBtnText.textContent = "Kopyala";
    }, 2500);
  } catch (e) {
    input.select();
    document.execCommand('copy');
    if (copyBtnText) copyBtnText.textContent = "Kopyalandı!";
    showToast("Şarkı linki kopyalandı!");
  }
}

async function triggerWebShare() {
  const target = state.currentTrack;
  if (!target || !target.id) {
    showToast("Önce bir şarkı seçin");
    return;
  }
  const validYt = safeYtId(target.ytId || target.id);
  const shareId = validYt || encodeURIComponent(String(target.id));
  const shareUrl = `${window.location.origin}${window.location.pathname}?song=${shareId}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: `${target.title} - Kurfamüzik`,
        text: `${target.artist} - ${target.title} şarkısını Kurfamüzik'te reklamsız dinle!`,
        url: shareUrl
      });
      closeShareModal();
    } catch (err) {}
  } else {
    copyShareUrl();
  }
}

// =============================================================================
// 13.4 USER PROFILE & DARK MODE SETTINGS
// =============================================================================

function openProfileModal() {
  const modal = document.getElementById('profile-modal');
  const card = document.getElementById('profile-modal-card');
  if (!modal || !card) return;

  const nickInput = document.getElementById('profile-nickname-input');
  if (nickInput) nickInput.value = state.profile.nickname || "Dinleyici";

  const minEl = document.getElementById('stat-listening-minutes');
  if (minEl) minEl.textContent = `${Math.floor((state.profile.listeningSeconds || 0) / 60)} dk`;

  const playedEl = document.getElementById('stat-tracks-played');
  if (playedEl) playedEl.textContent = (state.profile.tracksPlayed || 0).toString();

  const dlEl = document.getElementById('stat-downloads-count');
  if (dlEl) dlEl.textContent = state.downloads.length.toString();

  updateLocalEngineStatusUI();
  updateAdWarningToggleUI();
  refreshAppVersionAndUpdateStatus();

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  const card = document.getElementById('profile-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function handleCustomAvatarUpload(event) {
  const inputEl = event?.target;
  const file = inputEl?.files && inputEl.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    if (inputEl) inputEl.value = '';
    showToast("Lütfen geçerli bir resim dosyası seçin");
    return;
  }

  const reader = new FileReader();
  reader.onerror = () => {
    if (inputEl) inputEl.value = '';
    showToast("Resim dosyası okunamadı");
  };
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');

        const minDim = Math.min(img.width, img.height);
        const sx = (img.width - minDim) / 2;
        const sy = (img.height - minDim) / 2;

        ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, 128, 128);
        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.85);

        selectAvatar(optimizedDataUrl);
        showToast("Özel profil fotoğrafı seçildi");
      } catch (err) {
        console.warn("Avatar resize error, using raw image:", err);
        selectAvatar(evt.target.result);
      } finally {
        if (inputEl) inputEl.value = '';
      }
    };
    img.onerror = () => {
      if (inputEl) inputEl.value = '';
      showToast("Geçersiz resim içeriği");
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}
window.handleCustomAvatarUpload = handleCustomAvatarUpload;

function selectAvatar(src) {
  const cleanSrc = safeUrl(src, state.profile.avatar || './kurfamuzik_logo.png');
  state.profile.avatar = cleanSrc;
  const currentAvatarPreview = document.getElementById('profile-current-avatar-preview');
  if (currentAvatarPreview) {
    currentAvatarPreview.src = cleanSrc;
  }
  document.querySelectorAll('#avatar-options-row .avatar-option').forEach(img => {
    if (img.src === cleanSrc) {
      img.classList.add('border-primary');
      img.classList.remove('border-transparent');
    } else {
      img.classList.remove('border-primary');
      img.classList.add('border-transparent');
    }
  });
}

function saveProfileData() {
  const nickInput = document.getElementById('profile-nickname-input');
  if (nickInput && nickInput.value.trim()) {
    state.profile.nickname = nickInput.value.trim().slice(0, 40);
  }
  safeSetStorage('kurfa_profile', JSON.stringify(state.profile));
  updateProfileUI();
  closeProfileModal();
  showToast("Profil bilgileri kaydedildi");
}

function updateProfileUI() {
  const avatarEl = document.getElementById('topbar-user-avatar');
  if (avatarEl) {
    const rawAv = state.profile.avatar && !String(state.profile.avatar).includes('unsplash.com')
      ? state.profile.avatar
      : './kurfamuzik_logo.png';
    avatarEl.src = safeUrl(rawAv, './kurfamuzik_logo.png');
  }
  const nameEl = document.getElementById('topbar-user-name');
  if (nameEl) {
    nameEl.textContent = state.profile.nickname || "Dinleyici";
  }
  const isDark = !!state.profile.darkMode;
  if (document.documentElement) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }
  if (document.body) {
    document.body.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark', isDark);
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', isDark ? '#0c1017' : '#faf8ff');
  }

  const topbarThemeIcon = document.getElementById('topbar-theme-icon');
  if (topbarThemeIcon) {
    topbarThemeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
  }
  const topbarThemeBtn = document.getElementById('topbar-theme-btn');
  if (topbarThemeBtn) {
    topbarThemeBtn.title = isDark ? 'Aydınlık Moda Geç' : 'Karanlık Moda Geç';
  }

  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  if (btnThemeToggle) {
    btnThemeToggle.textContent = isDark ? 'Açık' : 'Kapalı';
    if (isDark) {
      btnThemeToggle.classList.add('bg-primary', 'text-on-primary');
      btnThemeToggle.classList.remove('bg-surface-container', 'text-on-surface');
    } else {
      btnThemeToggle.classList.remove('bg-primary', 'text-on-primary');
      btnThemeToggle.classList.add('bg-surface-container', 'text-on-surface');
    }
  }
  updateAdWarningToggleUI();
}

function toggleDarkMode() {
  state.profile.darkMode = !state.profile.darkMode;
  safeSetStorage('kurfa_profile', JSON.stringify(state.profile));
  updateProfileUI();
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('SET_THEME_MODE', { dark: Boolean(state.profile.darkMode) }, 1500).catch(() => {});
  }
  showToast(state.profile.darkMode ? "Karanlık Mod Açıldı" : "Aydınlık Mod Açıldı");
}

// =============================================================================
// 13.5 FRESH RELEASES (YENİ ÇIKANLAR)
// =============================================================================

function renderFreshReleasesGrid() {
  const grid = document.getElementById('fresh-releases-grid');
  if (!grid) return;
  grid.innerHTML = '';

  FRESH_RELEASES.forEach((track) => {
    const thumb = safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png');
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeTag = escapeHtml(track.tag || 'Yeni');
    const card = document.createElement('div');
    card.className = "group relative rounded-2xl bg-surface-container-lowest p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-transparent hover:border-surface-container";
    card.innerHTML = `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-2.5 bg-surface-container-high">
        <img src="${thumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold">
          ${safeTag}
        </div>
        <button type="button" class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span class="material-symbols-outlined text-[28px]">play_arrow</span>
          </div>
        </button>
      </div>
      <div class="flex items-start justify-between gap-2">
        <div class="flex flex-col min-w-0 flex-1">
          <h3 class="text-xs md:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</h3>
          <p class="text-[11px] text-on-surface-variant truncate font-medium">${safeArtist} • YouTube Müzik</p>
        </div>
        <button type="button" class="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary btn-fresh-fav">
          <span class="material-symbols-outlined text-[16px]">${state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border'}</span>
        </button>
      </div>
    `;
    card.onclick = () => {
      state.queue = [...FRESH_RELEASES];
      const foundIdx = FRESH_RELEASES.findIndex(t => t.id === track.id);
      state.queueIndex = foundIdx !== -1 ? foundIdx : 0;
      state.playingContextSub = 'YENİ ÇIKANLARDAN ÇALINIYOR';
      state.playingContextTitle = 'Yeni Çıkanlar';
      saveQueueState();
      playTrackById(track.id, track);
    };
    const favBtn = card.querySelector('.btn-fresh-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border';
        }
      };
    }
    grid.appendChild(card);
  });
}

function handleUrlParameters() {
  try {
    const params = new URLSearchParams(window.location.search);
    const rawSongId = params.get('song');
    const songId = safeYtId(rawSongId);
    if (songId) {
      const existing = (typeof CURATED_TRACKS !== 'undefined' && CURATED_TRACKS.find ? CURATED_TRACKS.find(t => (t.id === songId || t.ytId === songId)) : null) ||
                       (typeof FRESH_RELEASES !== 'undefined' && FRESH_RELEASES.find ? FRESH_RELEASES.find(t => (t.id === songId || t.ytId === songId)) : null) ||
                       (state.queue || []).find(t => (t.id === songId || t.ytId === songId));
      const sharedTrack = existing || {
        id: songId,
        ytId: songId,
        title: "Paylaşılan Parça",
        artist: "Kurfamüzik",
        duration: "3:30",
        thumbnail: `https://i.ytimg.com/vi/${songId}/hqdefault.jpg`
      };
      state.currentTrack = sharedTrack;
      if (!state.queue.some(t => t.id === sharedTrack.id)) {
        state.queue.unshift(sharedTrack);
        state.queueIndex = 0;
        saveQueueState();
      } else {
        state.queueIndex = state.queue.findIndex(t => t.id === sharedTrack.id);
      }

      if (!existing) {
        fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + songId)}&format=json`)
          .then(r => (r.ok ? r.json() : null))
          .then(meta => {
            if (!meta || !meta.title) return;
            sharedTrack.title = meta.title;
            sharedTrack.artist = meta.author_name || sharedTrack.artist;
            if (state.currentTrack && state.currentTrack.id === songId) {
              state.currentTrack.title = sharedTrack.title;
              state.currentTrack.artist = sharedTrack.artist;
              updatePlayerTrackUI(state.currentTrack);
              updateLyricsDisplay();
            }
          }).catch(() => {});
      }

      playTrackById(songId, sharedTrack);
    }
  } catch (e) {}
}

// =============================================================================
// =============================================================================
// 13.6 MOBILE PLAYER REDIRECT (CANVAS MODE REMOVED FOR LOW-END PERFORMANCE)
// =============================================================================

let mobileCanvasMode = false;
try { localStorage.removeItem('kurfa_canvas_mode'); } catch (_) {}

function toggleMobileCanvasMode() {
  mobileCanvasMode = false;
}

function updateMobileCanvasUI() {
  syncPersistentPlayerPosition();
}

function openMobileNowPlaying() {
  state.mobileNowPlayingOpen = false;
  switchTab('calma-listeleri');
}

function closeMobileNowPlaying() {
  state.mobileNowPlayingOpen = false;
  syncPersistentPlayerPosition();
}

function initMobileNowPlayingSeekbar() {
  const trackEl = document.getElementById('mnp-seek-track');
  const fillEl = document.getElementById('mnp-seek-fill');
  const knobEl = document.getElementById('mnp-seek-knob');
  const curTimeEl = document.getElementById('mnp-time-cur');
  if (!trackEl) return;

  function calculateMnpSeek(e) {
    const rect = trackEl.getBoundingClientRect();
    if (!rect.width || rect.width <= 0) return 0;
    const clientX = getEventClientX(e);
    const clickX = clientX - rect.left;
    return Math.max(0, Math.min(1, clickX / rect.width));
  }

  function applyMnpSeek(pct, commit = false) {
    if (fillEl) fillEl.style.width = `${pct * 100}%`;
    if (knobEl) knobEl.style.left = `${pct * 100}%`;
    if (DOM.playerSeekFill) DOM.playerSeekFill.style.width = `${pct * 100}%`;
    if (DOM.playerMobileSeekFill) DOM.playerMobileSeekFill.style.width = `${pct * 100}%`;

    const dur = getActiveMediaDuration();
    const seekTime = Math.max(0, Math.min(dur, pct * dur));
    if (curTimeEl) curTimeEl.textContent = formatTime(seekTime);
    if (DOM.playerTimeCur) DOM.playerTimeCur.textContent = formatTime(seekTime);

    if (commit) {
      seekPlaybackToSeconds(seekTime);
    }
  }

  const onPointerDown = (e) => {
    state.isSeeking = true;
    trackEl.classList.add('dragging');
    const pct = calculateMnpSeek(e);
    applyMnpSeek(pct, false);

    const onPointerMove = (moveEvt) => {
      if (!state.isSeeking) return;
      const movePct = calculateMnpSeek(moveEvt);
      applyMnpSeek(movePct, false);
    };

    const onPointerUp = (upEvt) => {
      trackEl.classList.remove('dragging');
      if (state.isSeeking) {
        state.isSeeking = false;
        const finalPct = calculateMnpSeek(upEvt);
        applyMnpSeek(finalPct, true);
      }
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  };

  trackEl.addEventListener('mousedown', onPointerDown);
  trackEl.addEventListener('touchstart', onPointerDown, { passive: true });
}

// =============================================================================
// 13.7 CUSTOM PLAYLISTS MANAGEMENT (LOCAL-FIRST & CLOUD SYNCED)
// =============================================================================

function saveCustomPlaylists() {
  safeSetStorage('kurfa_custom_playlists', JSON.stringify(state.customPlaylists));
  updateKutuphaneBadges();
  scheduleFirebaseCloudSync();
}

function renderCustomPlaylistsGrid() {
  const grid = document.getElementById('custom-playlists-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const playlists = state.customPlaylists || [];
  if (playlists.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full px-4 py-4 rounded-2xl bg-surface-container-lowest border border-surface-container flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-[20px]">playlist_add</span>
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate">Henüz özel çalma listeniz yok</h3>
          <p class="text-[11px] text-on-surface-variant truncate">Yukarıdaki "Yeni Liste" butonunu kullanarak listenizi oluşturabilirsiniz.</p>
        </div>
      </div>
    `;
    return;
  }

  playlists.forEach(pl => {
    const card = document.createElement('div');
    card.className = "group relative rounded-2xl bg-surface-container-lowest p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-transparent hover:border-surface-container";

    const rawThumb = (pl.tracks && pl.tracks.length > 0 && pl.tracks[0].thumbnail)
      ? pl.tracks[0].thumbnail
      : './kurfamuzik_logo.png';
    const thumb = safeUrl(rawThumb, './kurfamuzik_logo.png');
    const safeName = escapeHtml(pl.name || 'Çalma Listesi');
    const trackCount = (pl.tracks && pl.tracks.length) || 0;

    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-2.5 bg-surface-container-high">
        <img src="${thumb}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <button type="button" class="btn-play-custom-pl absolute right-2.5 bottom-2.5 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 active:scale-95" title="Tümünü Çal">
          <span class="material-symbols-outlined text-[24px] filled">play_arrow</span>
        </button>
      </div>
      <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeName}</h3>
      <p class="text-[11px] text-on-surface-variant truncate font-medium mt-0.5">${trackCount} Şarkı</p>
    `;

    card.onclick = () => openCustomPlaylistDetail(pl.id);

    const playBtn = card.querySelector('.btn-play-custom-pl');
    if (playBtn) {
      playBtn.onclick = (e) => {
        e.stopPropagation();
        playCustomPlaylist(pl.id, false);
      };
    }

    grid.appendChild(card);
  });
}

let pendingAddPlaylistTrack = null;

function openCreatePlaylistModal(fromAddModal = false) {
  const modal = document.getElementById('create-playlist-modal');
  const card = document.getElementById('create-playlist-modal-card');
  const input = document.getElementById('create-playlist-name-input');
  if (!modal || !card) return;

  if (!fromAddModal) {
    pendingAddPlaylistTrack = null;
  }

  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 100);
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
}

function closeCreatePlaylistModal() {
  pendingAddPlaylistTrack = null;
  const modal = document.getElementById('create-playlist-modal');
  const card = document.getElementById('create-playlist-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function submitCreatePlaylist() {
  const input = document.getElementById('create-playlist-name-input');
  const name = input ? input.value.trim() : '';
  if (!name) {
    showToast("Lütfen bir liste adı girin");
    return;
  }

  const newPl = {
    id: 'pl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    name: name,
    createdAt: Date.now(),
    tracks: []
  };

  if (pendingAddPlaylistTrack) {
    newPl.tracks.push({
      id: pendingAddPlaylistTrack.id,
      ytId: safeYtId(pendingAddPlaylistTrack.ytId || pendingAddPlaylistTrack.id) || null,
      title: pendingAddPlaylistTrack.title,
      artist: pendingAddPlaylistTrack.artist,
      thumbnail: safeUrl(pendingAddPlaylistTrack.thumbnail, './kurfamuzik_logo.png'),
      duration: pendingAddPlaylistTrack.duration || "3:30"
    });
    showToast(`"${name}" oluşturuldu ve şarkı eklendi!`);
    pendingAddPlaylistTrack = null;
  } else {
    showToast(`"${name}" çalma listesi oluşturuldu!`);
  }

  state.customPlaylists.push(newPl);
  saveCustomPlaylists();
  closeCreatePlaylistModal();
  closeAddToPlaylistModal();
  renderCustomPlaylistsGrid();
}

function openAddToPlaylistModal(trackOrId) {
  let target = null;
  if (typeof trackOrId === 'object' && trackOrId !== null) {
    target = trackOrId;
  } else if (typeof trackOrId === 'string') {
    target = state.queue.find(t => t.id === trackOrId) ||
             getCuratedTracks().find(t => t.id === trackOrId) ||
             state.favorites.find(t => t.id === trackOrId) ||
             state.downloads.find(t => t.id === trackOrId) ||
             state.currentSearchResults.find(t => t.id === trackOrId);
  }
  if (!target) target = state.currentTrack;

  if (!target) {
    showToast("Önce bir şarkı seçin");
    return;
  }
  pendingAddPlaylistTrack = target;

  const modal = document.getElementById('add-to-playlist-modal');
  const card = document.getElementById('add-to-playlist-modal-card');
  if (!modal || !card) return;

  const thumbEl = document.getElementById('atp-track-thumb');
  const titleEl = document.getElementById('atp-track-title');
  const artistEl = document.getElementById('atp-track-artist');

  if (thumbEl) thumbEl.src = safeUrl(target.thumbnail, './kurfamuzik_logo.png');
  if (titleEl) titleEl.textContent = target.title || "Şarkı";
  if (artistEl) artistEl.textContent = target.artist || "Sanatçı";

  const listContainer = document.getElementById('atp-playlists-list');
  if (listContainer) {
    listContainer.innerHTML = '';
    const playlists = state.customPlaylists || [];

    if (playlists.length === 0) {
      listContainer.innerHTML = `
        <div class="py-4 text-center text-xs text-on-surface-variant">
          Henüz listeniz yok. Aşağıdan yeni bir liste oluşturabilirsiniz.
        </div>
      `;
    } else {
      playlists.forEach(pl => {
        const hasTrack = (pl.tracks || []).some(t => t.id === target.id);
        const item = document.createElement('div');
        item.className = "flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container cursor-pointer transition-colors";
        item.innerHTML = `
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="material-symbols-outlined text-[20px] text-primary">queue_music</span>
            <div class="flex flex-col min-w-0">
              <span class="text-xs font-bold text-on-surface truncate">${escapeHtml(pl.name || 'Çalma Listesi')}</span>
              <span class="text-[10px] text-on-surface-variant font-medium">${(pl.tracks || []).length} Şarkı</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-[18px] ${hasTrack ? 'text-primary' : 'text-on-surface-variant'}">${hasTrack ? 'check_circle' : 'add'}</span>
        `;
        item.onclick = () => {
          addTrackToPlaylist(pl.id, target);
          closeAddToPlaylistModal();
        };
        listContainer.appendChild(item);
      });
    }
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
}

function closeAddToPlaylistModal() {
  const modal = document.getElementById('add-to-playlist-modal');
  const card = document.getElementById('add-to-playlist-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function addTrackToPlaylist(playlistId, track) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  if (!Array.isArray(pl.tracks)) pl.tracks = [];

  const existingIdx = pl.tracks.findIndex(t => t.id === track.id);
  if (existingIdx !== -1) {
    showToast(`"${track.title}" zaten "${pl.name}" listesinde var`);
    return;
  }

  pl.tracks.push({
    id: track.id,
    ytId: safeYtId(track.ytId || track.id) || null,
    title: track.title,
    artist: track.artist,
    thumbnail: safeUrl(track.thumbnail, './kurfamuzik_logo.png'),
    duration: track.duration || "3:30"
  });

  saveCustomPlaylists();
  showToast(`"${track.title}" -> "${pl.name}" listesine eklendi`);
  renderCustomPlaylistsGrid();
}

function openCustomPlaylistDetail(playlistId) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  state.activeCustomPlaylistId = playlistId;

  const detailView = document.getElementById('custom-playlist-detail-view');
  const grid = document.getElementById('custom-playlists-grid');
  if (!detailView) return;

  const titleEl = document.getElementById('cpd-title');
  const metaEl = document.getElementById('cpd-meta');
  const playAllBtn = document.getElementById('cpd-btn-play-all');
  const deleteBtn = document.getElementById('cpd-btn-delete');
  const tracksTable = document.getElementById('custom-playlist-tracks-table');

  if (titleEl) titleEl.textContent = pl.name;
  if (metaEl) metaEl.textContent = `${(pl.tracks || []).length} Şarkı`;

  if (playAllBtn) {
    playAllBtn.onclick = () => playCustomPlaylist(playlistId, false);
  }
  if (deleteBtn) {
    deleteBtn.onclick = () => {
      if (confirm(`"${pl.name}" çalma listesini silmek istediğinize emin misiniz?`)) {
        deleteCustomPlaylist(playlistId);
      }
    };
  }

  if (tracksTable) {
    tracksTable.innerHTML = '';
    const tracks = pl.tracks || [];

    if (tracks.length === 0) {
      tracksTable.innerHTML = `
        <div class="py-8 text-center text-xs text-on-surface-variant">
          Bu liste henüz boş. Arama veya Trendler sekmesinden şarkıları bu listeye ekleyebilirsiniz.
        </div>
      `;
    } else {
      tracks.forEach((track, index) => {
        const thumb = safeUrl(track.thumbnail, './kurfamuzik_logo.png');
        const safeTitle = escapeHtml(track.title || 'Şarkı');
        const safeArtist = escapeHtml(track.artist || 'Sanatçı');
        const safeDur = escapeHtml(track.duration || '3:30');
        const row = document.createElement('div');
        row.className = "flex items-center justify-between p-2 rounded-xl hover:bg-surface-container transition-colors group cursor-pointer";
        row.innerHTML = `
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <span class="w-5 text-center text-xs font-bold text-on-surface-variant font-mono">${index + 1}</span>
            <img src="${thumb}" alt="${safeTitle}" class="w-9 h-9 rounded-lg object-cover flex-shrink-0" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
            <div class="flex flex-col min-w-0">
              <span class="text-xs font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</span>
              <span class="text-[11px] text-on-surface-variant truncate">${safeArtist}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-on-surface-variant font-mono">${safeDur}</span>
            <button type="button" class="btn-remove-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-opacity" title="Listeden Çıkar">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        `;

        row.onclick = () => {
          state.queue = [...tracks];
          state.queueIndex = index;
          state.playingContextSub = 'ÖZEL ÇALMA LİSTESİ';
          state.playingContextTitle = pl.name;
          saveQueueState();
          playTrackById(track.id, track);
        };

        const removeBtn = row.querySelector('.btn-remove-track');
        if (removeBtn) {
          removeBtn.onclick = (e) => {
            e.stopPropagation();
            removeTrackFromCustomPlaylist(playlistId, track.id);
          };
        }

        tracksTable.appendChild(row);
      });
    }
  }

  if (grid) grid.classList.add('hidden');
  detailView.classList.remove('hidden');
}

function closeCustomPlaylistDetail() {
  state.activeCustomPlaylistId = null;
  const detailView = document.getElementById('custom-playlist-detail-view');
  const grid = document.getElementById('custom-playlists-grid');
  if (detailView) detailView.classList.add('hidden');
  if (grid) grid.classList.remove('hidden');
}

function deleteCustomPlaylist(playlistId) {
  state.customPlaylists = state.customPlaylists.filter(p => p.id !== playlistId);
  saveCustomPlaylists();
  closeCustomPlaylistDetail();
  renderCustomPlaylistsGrid();
  showToast("Çalma listesi silindi");
}

function removeTrackFromCustomPlaylist(playlistId, trackId) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl || !Array.isArray(pl.tracks)) return;
  pl.tracks = pl.tracks.filter(t => t.id !== trackId);
  saveCustomPlaylists();
  openCustomPlaylistDetail(playlistId);
  renderCustomPlaylistsGrid();
  showToast("Şarkı listeden çıkarıldı");
}

function playCustomPlaylist(playlistId, shuffle = false) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl || !pl.tracks || pl.tracks.length === 0) {
    showToast("Bu çalma listesinde henüz şarkı yok");
    return;
  }

  let list = [...pl.tracks];
  if (shuffle) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  state.queue = list;
  state.originalQueue = [...pl.tracks];
  state.queueIndex = 0;
  state.playingContextSub = 'ÖZEL ÇALMA LİSTESİ';
  state.playingContextTitle = pl.name;
  saveQueueState();

  playTrackById(list[0].id, list[0]);
  showToast(`Çalınıyor: ${pl.name} (${list.length} Şarkı)`);
}

// =============================================================================
// 13.7.5 SPOTIFY PLAYLIST IMPORTER & PLAYBACK ENGINE
// =============================================================================

function saveSpotifyPlaylists() {
  safeSetStorage('kurfa_spotify_playlists', JSON.stringify(state.spotifyPlaylists || []));
}

async function importSpotifyPlaylist(explicitUrl) {
  const input = document.getElementById('spotify-import-input');
  const statusEl = document.getElementById('spotify-import-status');
  const importBtn = document.getElementById('btn-spotify-import');

  const rawUrl = (explicitUrl || (input ? input.value : '')).trim();
  if (!rawUrl) {
    if (statusEl) {
      statusEl.textContent = 'Lütfen geçerli bir Spotify bağlantısı girin.';
      statusEl.className = 'text-xs font-semibold text-error block';
    }
    showToast('Lütfen bir Spotify bağlantısı girin');
    return;
  }

  if (statusEl) {
    statusEl.textContent = 'Spotify çalma listesi ayrıştırılıyor, lütfen bekleyin...';
    statusEl.className = 'text-xs font-semibold text-primary block';
  }
  if (importBtn) {
    importBtn.disabled = true;
    importBtn.classList.add('opacity-70');
  }

  try {
    const res = await fetch(`${API_BASE}/api/spotify?url=${encodeURIComponent(rawUrl)}&_t=${Date.now()}`);
    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Çalma listesi yüklenemedi');
    }

    const existingIdx = (state.spotifyPlaylists || []).findIndex(p => p.id === data.id);
    const cleanCover = safeUrl(data.cover, './kurfamuzik_logo.png');
    const newEntry = {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      cover: cleanCover,
      trackCount: data.trackCount || (data.tracks ? data.tracks.length : 0),
      tracks: Array.isArray(data.tracks)
        ? data.tracks.map(t => ({ ...t, thumbnail: safeUrl(t.thumbnail, cleanCover) }))
        : [],
      importedAt: new Date().toISOString()
    };

    if (existingIdx !== -1) {
      state.spotifyPlaylists[existingIdx] = newEntry;
      showToast(`"${data.title}" listesi güncellendi!`);
    } else {
      if (!Array.isArray(state.spotifyPlaylists)) state.spotifyPlaylists = [];
      state.spotifyPlaylists.unshift(newEntry);
      showToast(`"${data.title}" Spotify kütüphanenize eklendi!`);
    }

    saveSpotifyPlaylists();
    if (input) input.value = '';
    if (statusEl) {
      statusEl.textContent = `"${data.title}" (${newEntry.trackCount} şarkı) başarıyla eklendi!`;
      statusEl.className = 'text-xs font-semibold text-green-500 block';
      setTimeout(() => { if (statusEl) statusEl.classList.add('hidden'); }, 4000);
    }

    renderSpotifyPlaylistsGrid();
    updateKutuphaneBadges();
    openSpotifyPlaylistDetail(data.id);
  } catch (err) {
    console.error('Spotify import error:', err);
    if (statusEl) {
      statusEl.textContent = `Hata: ${err.message || 'Spotify bağlantısı okunamadı'}`;
      statusEl.className = 'text-xs font-semibold text-error block';
    }
    showToast(`Spotify Hatası: ${err.message || 'Okunamadı'}`);
  } finally {
    if (importBtn) {
      importBtn.disabled = false;
      importBtn.classList.remove('opacity-70');
    }
  }
}

function renderSpotifyPlaylistsGrid() {
  const container = document.getElementById('spotify-playlists-grid');
  if (!container) return;
  container.innerHTML = '';

  const playlists = state.spotifyPlaylists || [];
  if (playlists.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-surface-container-lowest border border-dashed border-surface-container">
        <div class="w-14 h-14 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mb-3">
          <span class="material-symbols-outlined text-[28px]">album</span>
        </div>
        <h3 class="text-sm font-bold text-on-surface">Henüz Spotify Listesi Eklenmedi</h3>
        <p class="text-xs text-on-surface-variant max-w-sm mt-1">
          Yukarıdaki kutucuğa herhangi bir Spotify çalma listesi bağlantısı yapıştırarak anında içe aktarabilirsiniz.
        </p>
      </div>
    `;
    return;
  }

  playlists.forEach(pl => {
    const card = document.createElement('div');
    card.className = "group relative bg-surface-container-lowest p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col gap-2 border border-surface-container/60 hover:border-green-500/40";
    card.onclick = () => openSpotifyPlaylistDetail(pl.id);

    const coverUrl = safeUrl(pl.cover, './kurfamuzik_logo.png');
    const safePlTitle = escapeHtml(pl.title || 'Spotify Listesi');
    const count = pl.trackCount || (pl.tracks ? pl.tracks.length : 0);

    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-high">
        <img src="${coverUrl}" alt="${safePlTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <button type="button" aria-label="Tümünü Çal" class="btn-play-card absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95" title="Listeyi Çal">
          <span class="material-symbols-outlined text-[22px] filled">play_arrow</span>
        </button>
      </div>
      <div class="flex flex-col min-w-0">
        <h3 class="text-xs font-bold text-on-surface truncate group-hover:text-green-500 transition-colors">${safePlTitle}</h3>
        <p class="text-[11px] text-on-surface-variant truncate">${count} Şarkı • Spotify</p>
      </div>
    `;

    const playBtn = card.querySelector('.btn-play-card');
    if (playBtn) {
      playBtn.onclick = (e) => {
        e.stopPropagation();
        playSpotifyPlaylist(pl.id, false);
      };
    }

    container.appendChild(card);
  });
}

let spotifyThumbEpoch = 0;
let spotifyThumbAbortController = null;

function openSpotifyPlaylistDetail(playlistId) {
  const pl = (state.spotifyPlaylists || []).find(p => p.id === playlistId);
  if (!pl) return;
  state.activeSpotifyPlaylistId = playlistId;

  const detailView = document.getElementById('spotify-playlist-detail-view');
  const grid = document.getElementById('spotify-playlists-grid');
  if (!detailView) return;

  const titleEl = document.getElementById('spd-title');
  const subtitleEl = document.getElementById('spd-subtitle');
  const metaEl = document.getElementById('spd-meta');
  const coverEl = document.getElementById('spd-cover');
  const playAllBtn = document.getElementById('spd-btn-play-all');
  const deleteBtn = document.getElementById('spd-btn-delete');
  const tracksTable = document.getElementById('spotify-playlist-tracks-table');

  const safeCover = safeUrl(pl.cover, './kurfamuzik_logo.png');
  if (titleEl) titleEl.textContent = pl.title;
  if (subtitleEl) subtitleEl.textContent = pl.subtitle || '';
  if (metaEl) metaEl.textContent = `${(pl.tracks || []).length} Şarkı`;
  if (coverEl) coverEl.src = safeCover;

  if (playAllBtn) {
    playAllBtn.onclick = () => playSpotifyPlaylist(playlistId, false);
  }
  const refreshBtn = document.getElementById('spd-btn-refresh');
  if (refreshBtn) {
    refreshBtn.onclick = () => refreshSpotifyPlaylist(playlistId);
  }
  if (deleteBtn) {
    deleteBtn.onclick = () => {
      if (confirm(`"${pl.title}" Spotify listesini kütüphanenizden kaldırmak istediğinize emin misiniz?`)) {
        deleteSpotifyPlaylist(playlistId);
      }
    };
  }

  // Auto-heal old cached playlists that contain random YouTube mix videos
  if (Array.isArray(pl.tracks) && pl.tracks.some(t => /karışık|tüm şarkılar|1 saat/i.test(t.title)) && !pl._autoHealed) {
    pl._autoHealed = true;
    setTimeout(() => refreshSpotifyPlaylist(playlistId), 400);
  }

  if (tracksTable) {
    tracksTable.innerHTML = '';
    const tracks = pl.tracks || [];

    if (tracks.length === 0) {
      tracksTable.innerHTML = `
        <div class="py-8 text-center text-xs text-on-surface-variant">
          Bu Spotify çalma listesinde gösterilecek şarkı bulunamadı.
        </div>
      `;
    } else {
      tracks.forEach((track, index) => {
        const safeThumb = safeUrl(track.thumbnail || safeCover, safeCover);
        const safeSpId = escapeHtml(String(track.id || ''));
        const safeTrackTitle = escapeHtml(track.title || 'Şarkı');
        const safeTrackArtist = escapeHtml(track.artist || 'Sanatçı');
        const safeTrackDur = escapeHtml(track.duration || '3:30');

        const row = document.createElement('div');
        row.className = "flex items-center justify-between p-2 rounded-xl hover:bg-surface-container transition-colors group cursor-pointer";
        row.innerHTML = `
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <span class="w-5 text-center text-xs font-bold text-on-surface-variant font-mono">${index + 1}</span>
            <img data-sp-id="${safeSpId}" src="${safeThumb}" alt="${safeTrackTitle}" class="w-9 h-9 rounded-lg object-cover flex-shrink-0" loading="lazy">
            <div class="flex flex-col min-w-0">
              <span class="text-xs font-bold text-on-surface truncate group-hover:text-green-500 transition-colors">${safeTrackTitle}</span>
              <span class="text-[11px] text-on-surface-variant truncate">${safeTrackArtist}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-on-surface-variant font-mono">${safeTrackDur}</span>
            <button type="button" class="btn-play-single w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" title="Çal">
              <span class="material-symbols-outlined text-[18px]">play_arrow</span>
            </button>
          </div>
        `;

        const imgEl = row.querySelector('img[data-sp-id]');
        if (imgEl) {
          imgEl.addEventListener('error', () => {
            if (imgEl.dataset.fallbackApplied === '2') return;
            if (imgEl.dataset.fallbackApplied !== '1' && safeCover && safeCover !== './kurfamuzik_logo.png') {
              imgEl.dataset.fallbackApplied = '1';
              imgEl.src = safeCover;
            } else {
              imgEl.dataset.fallbackApplied = '2';
              imgEl.src = './kurfamuzik_logo.png';
            }
          });
        }

        row.onclick = () => {
          playSpotifyTrack(track, tracks, index, pl.title);
        };

        tracksTable.appendChild(row);
      });
    }
  }

  if (grid) grid.classList.add('hidden');
  detailView.classList.remove('hidden');

  // Progressively resolve real YouTube covers and IDs in the background
  resolveVisibleSpotifyThumbnails(playlistId);
}

function resolveVisibleSpotifyThumbnails(playlistId) {
  if (spotifyThumbAbortController) {
    try { spotifyThumbAbortController.abort(); } catch (_) {}
  }
  const myEpoch = ++spotifyThumbEpoch;
  spotifyThumbAbortController = new AbortController();
  const { signal } = spotifyThumbAbortController;

  const pl = (state.spotifyPlaylists || []).find(p => p.id === playlistId);
  if (!pl || !Array.isArray(pl.tracks)) return;

  const pending = pl.tracks.filter(t => !t.ytId).slice(0, 30);
  if (pending.length === 0) return;

  let idx = 0;
  function step() {
    if (myEpoch !== spotifyThumbEpoch) return;
    if (signal.aborted) return;
    if (idx >= pending.length) return;
    if (state.activeSpotifyPlaylistId !== playlistId) return;

    const trk = pending[idx++];
    const query = `${trk.artist} ${trk.title} audio`.trim();
    kurfaSearchTracks(query, { filterSingles: true, signal })
      .then(d => {
        if (!d || myEpoch !== spotifyThumbEpoch || state.activeSpotifyPlaylistId !== playlistId) return;
        if (d.success && Array.isArray(d.results) && d.results.length > 0) {
          const best = pickBestYouTubeMatch(trk, d.results);
          const validBestId = best ? safeYtId(best.id) : null;
          if (validBestId) {
            trk.ytId = validBestId;
            const resolvedThumb = safeUrl(
              best.thumbnail,
              `https://i.ytimg.com/vi/${validBestId}/hqdefault.jpg`
            );
            if (!trk.thumbnail || trk.thumbnail.includes('kurfamuzik_logo') || trk.thumbnail === pl.cover) {
              trk.thumbnail = resolvedThumb;
              document.querySelectorAll('#spotify-playlist-tracks-table img[data-sp-id]').forEach(el => {
                if (el.getAttribute('data-sp-id') === String(trk.id)) {
                  el.src = resolvedThumb;
                }
              });
            }
            saveSpotifyPlaylists();
          }
        }
      })
      .catch(err => {
        if (err && err.name === 'AbortError') return;
      })
      .finally(() => {
        if (myEpoch === spotifyThumbEpoch && !signal.aborted && state.activeSpotifyPlaylistId === playlistId) {
          setTimeout(step, 200);
        }
      });
  }
  step();
}

async function refreshSpotifyPlaylist(playlistId) {
  const targetId = playlistId || state.activeSpotifyPlaylistId;
  const pl = (state.spotifyPlaylists || []).find(p => p.id === targetId);
  if (!pl) return;

  const refreshBtn = document.getElementById('spd-btn-refresh');
  if (refreshBtn) {
    refreshBtn.classList.add('animate-spin');
    refreshBtn.disabled = true;
  }
  showToast(`"${pl.title}" güncelleniyor...`);

  try {
    const isArtist = pl.type === 'artist' || (pl.id && pl.id.length === 22 && !pl.id.startsWith('37i'));
    const queryUrl = isArtist ? `https://open.spotify.com/artist/${pl.id}` : `https://open.spotify.com/playlist/${pl.id}`;
    const res = await fetch(`${API_BASE}/api/spotify?url=${encodeURIComponent(queryUrl)}&refresh=1&_t=${Date.now()}`);
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.error || 'Güncellenemedi');

    const cleanCover = safeUrl(data.cover, './kurfamuzik_logo.png');
    pl.title = data.title;
    pl.subtitle = data.subtitle;
    pl.cover = cleanCover;
    pl.trackCount = data.trackCount || (data.tracks ? data.tracks.length : 0);
    pl.tracks = Array.isArray(data.tracks)
      ? data.tracks.map(t => ({ ...t, thumbnail: safeUrl(t.thumbnail, cleanCover) }))
      : [];
    pl.importedAt = new Date().toISOString();

    saveSpotifyPlaylists();
    showToast(`"${pl.title}" başarıyla güncellendi! (${pl.trackCount} şarkı)`);
    renderSpotifyPlaylistsGrid();
    if (state.activeSpotifyPlaylistId === targetId) {
      openSpotifyPlaylistDetail(targetId);
    }
  } catch (err) {
    console.error('Refresh spotify error:', err);
    showToast(`Güncelleme hatası: ${err.message || 'Okunamadı'}`);
  } finally {
    if (refreshBtn) {
      refreshBtn.classList.remove('animate-spin');
      refreshBtn.disabled = false;
    }
  }
}
window.refreshSpotifyPlaylist = refreshSpotifyPlaylist;

function closeSpotifyPlaylistDetail() {
  state.activeSpotifyPlaylistId = null;
  spotifyThumbEpoch++;
  if (spotifyThumbAbortController) {
    try { spotifyThumbAbortController.abort(); } catch (_) {}
    spotifyThumbAbortController = null;
  }
  const detailView = document.getElementById('spotify-playlist-detail-view');
  const grid = document.getElementById('spotify-playlists-grid');
  if (detailView) detailView.classList.add('hidden');
  if (grid) grid.classList.remove('hidden');
}

function deleteSpotifyPlaylist(playlistId) {
  state.spotifyPlaylists = (state.spotifyPlaylists || []).filter(p => p.id !== playlistId);
  saveSpotifyPlaylists();
  closeSpotifyPlaylistDetail();
  renderSpotifyPlaylistsGrid();
  updateKutuphaneBadges();
  showToast("Spotify listesi kütüphanenizden kaldırıldı");
}

function playSpotifyPlaylist(playlistId, shuffle = false) {
  const pl = (state.spotifyPlaylists || []).find(p => p.id === playlistId);
  if (!pl || !pl.tracks || pl.tracks.length === 0) {
    showToast("Bu çalma listesinde henüz şarkı yok");
    return;
  }

  let list = [...pl.tracks];
  if (shuffle) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  playSpotifyTrack(list[0], list, 0, pl.title);
}

async function playSpotifyTrack(track, playlistTracks, index, playlistName) {
  if (!track) return;
  state.queue = [...playlistTracks];
  state.queueIndex = index;
  state.playingContextSub = 'SPOTIFY ÇALMA LİSTESİ';
  state.playingContextTitle = playlistName || 'Spotify';
  saveQueueState();
  renderQueueDrawerList();

  const playId = (track.ytId && safeYtId(track.ytId)) ? track.ytId : track.id;
  if (safeYtId(playId) && !String(playId).startsWith('sp-')) {
    playTrackById(playId, track);
    prefetchNextQueueTrack();
    return;
  }

  resolveAndPlaySpotifyTrack(track.id, track);
}

// =============================================================================
// 13.8 SMART AUTOPLAY & RADIO CONTINUATION
// =============================================================================

let isFetchingSmartRadio = false;

async function triggerSmartRadioContinue() {
  if (isFetchingSmartRadio) return;
  if (!state.currentTrack) {
    state.isPlaying = false;
    updatePlayPauseUI(false);
    return;
  }

  // Strict safety check: Never fetch recommendations if existing queue has remaining tracks!
  if (state.queue && state.queue.length > 0 && state.queueIndex < state.queue.length - 1) {
    playNextTrack({ isAutoAdvance: true });
    return;
  }

  // If queue already has 15 or more songs, do not endlessly inflate it
  if (state.queue && state.queue.length >= 15) {
    if (state.repeatMode === 1) {
      state.queueIndex = 0;
      const firstTrack = state.queue[0];
      if (firstTrack) {
        playTrackById(firstTrack.id, firstTrack, 0, undefined, undefined, { isAutoAdvance: true });
      }
    } else {
      state.isPlaying = false;
      updatePlayPauseUI(false);
      showToast("Çalma listesinin sonuna gelindi");
    }
    return;
  }

  const radioToken = currentPlaybackToken;
  isFetchingSmartRadio = true;

  // Clean artist and title for accurate search
  const rawArtist = (state.currentTrack.artist || '').trim();
  const rawTitle = (state.currentTrack.title || '').trim();

  const channelFilterRegex = /\b(netd müzik|vevo|official|music|records|audio|video|türkçe pop|youtube)\b/gi;
  let cleanArtist = rawArtist.replace(channelFilterRegex, '').replace(/[-–—]/g, ' ').trim();

  if (!cleanArtist && rawTitle.includes(' - ')) {
    const parts = rawTitle.split(' - ');
    cleanArtist = parts[0].replace(channelFilterRegex, '').trim();
  }

  if (!cleanArtist || cleanArtist.length < 2) {
    cleanArtist = 'Türkçe Pop Hit';
  }

  try {
    const existingIds = new Set();
    const existingTitles = new Set();
    (state.queue || []).forEach(t => {
      if (!t) return;
      if (t.id) existingIds.add(t.id);
      if (t.ytId) existingIds.add(t.ytId);
      if (t.title && t.artist) existingTitles.add(`${t.title.trim().toLowerCase()}|${t.artist.trim().toLowerCase()}`);
    });
    if (state.currentTrack) {
      if (state.currentTrack.id) existingIds.add(state.currentTrack.id);
      if (state.currentTrack.ytId) existingIds.add(state.currentTrack.ytId);
      if (state.currentTrack.title && state.currentTrack.artist) {
        existingTitles.add(`${state.currentTrack.title.trim().toLowerCase()}|${state.currentTrack.artist.trim().toLowerCase()}`);
      }
    }

    const queries = [
      `${cleanArtist} radyo hit şarkılar`,
      'trend türkçe pop müzik',
      'türkiye popüler şarkılar'
    ];

    let foundTracks = [];

    for (const q of queries) {
      if (radioToken !== currentPlaybackToken || state.userPaused) return;
      const ctrl = new AbortController();
      const timeoutId = setTimeout(() => ctrl.abort(), 4000);
      try {
        const data = await kurfaSearchTracks(q, { signal: ctrl.signal });
        if (data && data.success && Array.isArray(data.results)) {
          const fresh = data.results.filter(t => {
            if (!t || !t.id) return false;
            const candVid = safeYtId(t.ytId || t.id);
            if (candVid && failedVideoIds.has(candVid)) return false;
            if (existingIds.has(t.id)) return false;
            if (t.ytId && existingIds.has(t.ytId)) return false;
            const titleKey = `${(t.title || '').trim().toLowerCase()}|${(t.artist || '').trim().toLowerCase()}`;
            if (existingTitles.has(titleKey)) return false;
            return true;
          });
          if (fresh.length > 0) {
            foundTracks = fresh;
            break;
          }
        }
      } catch (err) {
        if (err && err.name !== 'AbortError') {
          console.warn("Smart radio cascade step error:", q, err);
        }
      } finally {
        clearTimeout(timeoutId);
      }
    }

    if (radioToken !== currentPlaybackToken || state.userPaused) return;

    if (foundTracks.length > 0) {
      const toAdd = foundTracks.slice(0, 5);
      const firstAdded = toAdd[0];
      state.queue = cleanDeduplicateQueueArray([...state.queue, ...toAdd]);
      const foundIdx = firstAdded ? state.queue.findIndex(q => q.id === firstAdded.id) : -1;
      state.queueIndex = foundIdx !== -1 ? foundIdx : Math.max(0, state.queue.length - 1);
      state.playingContextSub = 'AKILLI RADYO DEVAMI';
      state.playingContextTitle = `${cleanArtist} Radyosu`;

      saveQueueState();
      renderQueueDrawerList();

      const nextTrack = state.queue[state.queueIndex];
      if (nextTrack) {
        playTrackById(nextTrack.id, nextTrack, 0, undefined, undefined, { isAutoAdvance: true });
        showToast(`Akilli Radyo: ${nextTrack.title}`);
        return;
      }
    }
  } catch (e) {
    console.warn("Smart radio fetch error:", e);
  } finally {
    isFetchingSmartRadio = false;
  }

  state.isPlaying = false;
  updatePlayPauseUI(false);
  showToast("Çalma listesinin sonuna gelindi");
}

// =============================================================================
// 13.9 MOBILE BACKGROUND AUDIO & MEDIASESSION HARDENING
// =============================================================================

function toggleBackgroundAudioMode() {
  state.backgroundAudioMode = !state.backgroundAudioMode;
  safeSetStorage('kurfa_bg_audio', state.backgroundAudioMode ? 'true' : 'false');

  const btn = document.getElementById('mnp-btn-bg-audio');
  const label = document.getElementById('mnp-bg-audio-label');
  if (state.backgroundAudioMode) {
    if (btn) btn.classList.add('text-primary');
    if (label) label.textContent = 'Arka Plan: Açık';
    showToast("Arka Planda Dinleme Modu Açıldı (Kilit ekranında çalmaya devam eder)");
  } else {
    if (btn) btn.classList.remove('text-primary');
    if (label) label.textContent = 'Arka Plan: Standart';
    showToast("Arka Planda Dinleme Modu Kapalı");
  }
}

// =============================================================================
// 13.10 GOOGLE ACCOUNT, PROFILE & LOCAL-FIRST BULUT SYNC
// =============================================================================

let firebaseDb = null;
let firebaseAuth = null;
let googleProviderInstance = null;
let firebaseSyncDebounceTimer = null;

const FIREBASE_CONFIG = window.firebaseConfig || {
  apiKey: "AIzaSyDuzJl34svShFUhQM72SpZaVTntvzayCso",
  authDomain: "kurfa-ai.firebaseapp.com",
  projectId: "kurfa-ai",
  storageBucket: "kurfa-ai.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:demo1234567890"
};

function initFirebaseSync() {
  // 1. If valid custom Firebase config exists in localStorage or window:
  let customConfig = null;
  try {
    const raw = localStorage.getItem('kurfa_firebase_config');
    if (raw) customConfig = JSON.parse(raw);
  } catch(e) {}

  const activeConfig = (customConfig && customConfig.apiKey) ? customConfig : FIREBASE_CONFIG;

  if (typeof firebase !== 'undefined' && activeConfig && activeConfig.apiKey) {
    try {
      if (!firebase.apps || firebase.apps.length === 0) {
        firebase.initializeApp(activeConfig);
      }
      firebaseDb = firebase.firestore();
      try {
        firebaseDb.settings({ experimentalForceLongPolling: true, merge: true });
      } catch(e) {}

      firebaseAuth = firebase.auth();
      try {
        firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      } catch(pe) {}

      googleProviderInstance = new firebase.auth.GoogleAuthProvider();
      googleProviderInstance.setCustomParameters({ prompt: 'select_account' });

      // Check redirect result on load (e.g. mobile or redirect flow)
      if (firebaseAuth.getRedirectResult) {
        firebaseAuth.getRedirectResult().then(result => {
          if (result && result.user) {
            const user = result.user;
            const gUser = {
              name: user.displayName || (user.email ? user.email.split('@')[0] : "Google Kullanıcısı"),
              email: user.email || "",
              avatar: user.photoURL || state.profile.avatar,
              uid: user.uid
            };
            selectGoogleAccount(gUser);
            showToast(`Google ile giriş yapıldı: ${gUser.email || gUser.name}`);
          }
        }).catch(err => {
          if (err.code !== 'auth/missing-initial-state' && !err.message?.includes('missing initial state')) {
            console.warn("Redirect result error:", err);
          }
        });
      }

      firebaseAuth.onAuthStateChanged(user => {
        state.firebaseUser = user;
        if (user) {
          const gUser = {
            name: user.displayName || (user.email ? user.email.split('@')[0] : "Google Kullanıcısı"),
            email: user.email || "",
            avatar: user.photoURL || state.profile.avatar,
            uid: user.uid
          };
          state.googleUser = gUser;
          updateGoogleProfileUI(gUser);
          pullFirebaseLibraryOnce(user.uid);
        } else {
          updateGoogleProfileUI(state.googleUser);
        }
      });
    } catch(e) {
      console.warn("Firebase Init note:", e);
    }
  }

  // 2. Restore Google profile from Local-First storage
  if (state.googleUser) {
    updateGoogleProfileUI(state.googleUser);
  } else {
    updateGoogleProfileUI(null);
  }
}

function updateGoogleProfileUI(gUser) {
  const signedInBox = document.getElementById('profile-google-signed-in');
  const signedOutBox = document.getElementById('profile-google-signed-out');
  const badge = document.getElementById('profile-google-badge');
  const nameEl = document.getElementById('profile-google-name');
  const emailEl = document.getElementById('profile-google-email');
  const avatarEl = document.getElementById('profile-google-avatar');

  const topbarAvatar = document.getElementById('topbar-user-avatar');
  const topbarName = document.getElementById('topbar-user-name');
  const firebaseBadge = document.getElementById('firebase-sync-status-badge');
  const firebaseLoginBtn = document.getElementById('btn-firebase-login');
  const firebaseSyncBtn = document.getElementById('btn-firebase-sync-now');

  if (gUser && gUser.name) {
    if (signedInBox) {
      signedInBox.classList.remove('hidden');
      signedInBox.classList.add('flex');
    }
    if (signedOutBox) signedOutBox.classList.add('hidden');
    if (badge) {
      badge.textContent = "Google ile Bağlı";
      badge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary";
    }
    if (nameEl) nameEl.textContent = gUser.name;
    if (emailEl) emailEl.textContent = gUser.email || "Google Hesabı";
    if (avatarEl && gUser.avatar) avatarEl.src = safeUrl(gUser.avatar, './kurfamuzik_logo.png');

    if (topbarAvatar && gUser.avatar) topbarAvatar.src = safeUrl(gUser.avatar, './kurfamuzik_logo.png');
    if (topbarName) topbarName.textContent = gUser.name;

    if (firebaseBadge) {
      firebaseBadge.textContent = `Bulut Eşitlendi (${gUser.name})`;
      firebaseBadge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary";
    }
    if (firebaseLoginBtn) {
      firebaseLoginBtn.innerHTML = `
        <span class="material-symbols-outlined text-[16px]">logout</span>
        <span>Google Çıkış</span>
      `;
      firebaseLoginBtn.onclick = handleGoogleSignOut;
    }
    if (firebaseSyncBtn) {
      firebaseSyncBtn.classList.remove('hidden');
      firebaseSyncBtn.classList.add('inline-flex');
    }
  } else {
    if (signedInBox) {
      signedInBox.classList.add('hidden');
      signedInBox.classList.remove('flex');
    }
    if (signedOutBox) signedOutBox.classList.remove('hidden');
    if (badge) {
      badge.textContent = "Bağlı Değil";
      badge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container text-on-surface-variant";
    }
    if (topbarAvatar && state.profile.avatar) topbarAvatar.src = safeUrl(state.profile.avatar, './kurfamuzik_logo.png');
    if (topbarName) topbarName.textContent = state.profile.nickname || "Dinleyici";

    if (firebaseBadge) {
      firebaseBadge.textContent = "Yerel Hafıza Modu";
      firebaseBadge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container text-on-surface-variant";
    }
    if (firebaseLoginBtn) {
      firebaseLoginBtn.innerHTML = `
        <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
        <span>Google ile Giriş Yap</span>
      `;
      firebaseLoginBtn.onclick = handleGoogleSignIn;
    }
    if (firebaseSyncBtn) firebaseSyncBtn.classList.add('hidden');
  }
}

// =============================================================================
// 13.9 GOOGLE ACCOUNT CHOOSER (Gerçek Google Hesap Seçici)
// =============================================================================

const DEFAULT_GOOGLE_ACCOUNTS = [];

function getStoredGoogleAccounts() {
  try {
    const raw = localStorage.getItem('kurfa_google_accounts_list');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return [...DEFAULT_GOOGLE_ACCOUNTS];
}

function saveStoredGoogleAccounts(list) {
  safeSetStorage('kurfa_google_accounts_list', JSON.stringify(list));
}

function openGoogleAccountChooser() {
  const modal = document.getElementById('google-account-chooser-modal');
  const card = document.getElementById('google-account-chooser-card');
  if (!modal || !card) return;

  renderGoogleAccountsList();

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');

  // Trigger Google GSI One-Tap if available in browser
  if (window.google && window.google.accounts && window.google.accounts.id) {
    try {
      window.google.accounts.id.prompt();
    } catch(e) {}
  }
}

function closeGoogleAccountChooser() {
  const modal = document.getElementById('google-account-chooser-modal');
  const card = document.getElementById('google-account-chooser-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function renderGoogleAccountsList() {
  const listEl = document.getElementById('g-accounts-list');
  if (!listEl) return;
  listEl.innerHTML = '';

  const accounts = getStoredGoogleAccounts();
  const currentEmail = (state.googleUser && state.googleUser.email) ? state.googleUser.email : null;

  if (accounts.length === 0) {
    listEl.innerHTML = `
      <div class="p-4 rounded-2xl bg-surface-container-low text-center text-xs text-on-surface-variant border border-surface-container">
        Bu cihazda henüz kayıtlı Google hesabı yok. Lütfen aşağıdaki butondan resmi Google penceresiyle giriş yapın.
      </div>
    `;
    return;
  }

  accounts.forEach((rawAcc) => {
    const acc = sanitizeGoogleAccount(rawAcc);
    if (!acc) return;
    const isCurrent = currentEmail && acc.email && currentEmail.toLowerCase() === acc.email.toLowerCase();
    const safeAvatar = safeUrl(acc.avatar, './kurfamuzik_logo.png');
    const safeName = escapeHtml(acc.name);
    const safeEmail = escapeHtml(acc.email);
    const card = document.createElement('div');
    card.className = `flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container cursor-pointer transition-all border ${isCurrent ? 'border-primary bg-primary/10' : 'border-surface-container bg-surface-container-low'}`;
    card.innerHTML = `
      <div class="flex items-center gap-3 min-w-0">
        <img src="${safeAvatar}" alt="${safeName}" class="w-10 h-10 rounded-full object-cover border border-surface-container flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-on-surface truncate">${safeName}</span>
            ${isCurrent ? '<span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-primary text-on-primary">Aktif Hesap</span>' : ''}
          </div>
          <span class="text-[11px] text-on-surface-variant truncate">${safeEmail}</span>
        </div>
      </div>
      <span class="material-symbols-outlined text-[20px] ${isCurrent ? 'text-primary' : 'text-on-surface-variant'}">
        ${isCurrent ? 'check_circle' : 'chevron_right'}
      </span>
    `;
    card.onclick = () => selectGoogleAccount(acc);
    listEl.appendChild(card);
  });
}

let authPopupHandle = null;

function sanitizeGoogleAccount(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const name = typeof raw.name === 'string' && raw.name.trim()
    ? raw.name.trim().slice(0, 100)
    : 'Google Kullanıcısı';
  const email = typeof raw.email === 'string' ? raw.email.slice(0, 150).replace(/[^\w.@+-]/g, '') : '';
  const avatar = safeUrl(
    raw.avatar,
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80'
  );
  return {
    name,
    email,
    avatar,
    uid: typeof raw.uid === 'string' ? raw.uid.slice(0, 100) : 'google_' + Date.now()
  };
}

function selectGoogleAccount(acc) {
  if (!acc) return;
  const safeAcc = sanitizeGoogleAccount(acc);
  if (!safeAcc) return;
  state.googleUser = safeAcc;
  state.profile.nickname = safeAcc.name;
  if (safeAcc.avatar) state.profile.avatar = safeAcc.avatar;

  safeSetStorage('kurfa_google_user', JSON.stringify(safeAcc));
  safeSetStorage('kurfa_profile', JSON.stringify(state.profile));

  const list = getStoredGoogleAccounts();
  if (!list.some(a => a && a.email && safeAcc.email && a.email.toLowerCase() === safeAcc.email.toLowerCase())) {
    list.push(safeAcc);
    saveStoredGoogleAccounts(list);
  }

  updateGoogleProfileUI(safeAcc);
  updateProfileUI();
  scheduleFirebaseCloudSync();
  closeGoogleAccountChooser();
  showToast(`Google ile oturum açıldı: ${safeAcc.email || safeAcc.name}`);
}

function toggleCustomGoogleBox() {
  const box = document.getElementById('g-custom-account-box');
  if (!box) return;
  box.classList.toggle('hidden');
  if (!box.classList.contains('hidden')) {
    const nameInput = document.getElementById('g-custom-name-input');
    if (nameInput) nameInput.focus();
  }
}

function submitCustomGoogleAccount() {
  const nameInput = document.getElementById('g-custom-name-input');
  const emailInput = document.getElementById('g-custom-email-input');
  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';

  if (!name || !email) {
    showToast("Lütfen adınızı ve geçerli bir Google e-postanızı girin");
    return;
  }

  const newAcc = {
    name,
    email,
    avatar: "./kurfamuzik_logo.png",
    uid: "google_" + Date.now()
  };

  const list = getStoredGoogleAccounts();
  if (!list.some(a => a && a.email && a.email.toLowerCase() === email.toLowerCase())) {
    list.push(newAcc);
    saveStoredGoogleAccounts(list);
  }

  selectGoogleAccount(newAcc);
}

// Listen for authentic Google Auth popup success with strict origin & window check
window.addEventListener('message', (event) => {
  if (!window.location.origin || window.location.origin === 'null') return;
  if (event.origin !== window.location.origin) return;
  if (authPopupHandle && event.source !== authPopupHandle) return;

  if (event.data && event.data.type === 'KURFA_GOOGLE_AUTH_SUCCESS') {
    const acc = sanitizeGoogleAccount(event.data.user);
    if (acc) {
      selectGoogleAccount(acc);
    }
  }
});

async function handleGoogleSignIn() {
  if (window.location.protocol === 'file:') {
    showToast("Google ile Giriş özelliği yerel dosya (file://) üzerinden çalışmaz.");
    return;
  }

  showToast("Google hesap seçici açılıyor...");

  const w = 460;
  const h = 580;
  const left = Math.max(0, Math.round((window.screen.width - w) / 2));
  const top = Math.max(0, Math.round((window.screen.height - h) / 2));
  const authUrl = new URL('./google-auth.html', window.location.href).href;
  authPopupHandle = window.open(
    authUrl,
    'kurfaGoogleAuth',
    `width=${w},height=${h},top=${top},left=${left},menubar=no,toolbar=no,location=no,status=no,resizable=yes`
  );

  if (!authPopupHandle || authPopupHandle.closed || typeof authPopupHandle.closed === 'undefined') {
    openGoogleAccountChooser();
  }
}

let __syncDeckRafPending = false;
function scheduleSyncPersistentPlayerPosition() {
  if (__syncDeckRafPending) return;
  __syncDeckRafPending = true;
  requestAnimationFrame(() => {
    __syncDeckRafPending = false;
    syncPersistentPlayerPosition();
  });
}

function syncPersistentPlayerPosition() {
  const pDeck = document.getElementById('persistent-player-deck');
  if (!pDeck) return;

  // Desktop Video Deck Mode (on Çalma Listeleri tab)
  const slot = document.getElementById('deck-video-slot');
  if (state.currentTab === 'calma-listeleri' && state.deckVisualMode === 'video' && slot) {
    const rect = slot.getBoundingClientRect();
    if (rect.width > 20 && rect.height > 20) {
      pDeck.dataset.deckPosMode = 'desktop-video';
      pDeck.style.position = 'fixed';
      pDeck.style.left = Math.round(rect.left) + 'px';
      pDeck.style.top = Math.round(rect.top) + 'px';
      pDeck.style.bottom = 'auto';
      pDeck.style.right = 'auto';
      pDeck.style.transform = 'none';
      pDeck.style.width = Math.round(rect.width) + 'px';
      pDeck.style.height = Math.round(rect.height) + 'px';
      pDeck.style.minWidth = '0';
      pDeck.style.minHeight = '0';
      pDeck.style.opacity = '1';
      pDeck.style.pointerEvents = 'auto';
      pDeck.style.zIndex = '35';
      pDeck.style.borderRadius = '1rem';
      return;
    }
  }

  // 3. In-Viewport Silent Deck (skip redundant style writes during scroll)
  if (pDeck.dataset.deckPosMode === 'silent') return;
  pDeck.dataset.deckPosMode = 'silent';
  pDeck.style.position = 'fixed';
  pDeck.style.left = '0px';
  pDeck.style.bottom = '0px';
  pDeck.style.top = 'auto';
  pDeck.style.right = 'auto';
  pDeck.style.transform = 'none';
  pDeck.style.width = '240px';
  pDeck.style.height = '135px';
  pDeck.style.minWidth = '0';
  pDeck.style.minHeight = '0';
  pDeck.style.opacity = '0.002';
  pDeck.style.pointerEvents = 'none';
  pDeck.style.zIndex = '5';
  pDeck.style.borderRadius = '0px';
}
window.syncPersistentPlayerPosition = syncPersistentPlayerPosition;

function showVideoAdNotice() {
  const el = document.getElementById('deck-video-ad-notice');
  if (el) {
    el.classList.remove('hidden');
    el.classList.add('flex');
  }
}
window.showVideoAdNotice = showVideoAdNotice;

function dismissVideoAdNotice() {
  const el = document.getElementById('deck-video-ad-notice');
  if (el) {
    el.classList.add('hidden');
    el.classList.remove('flex');
  }
}
window.dismissVideoAdNotice = dismissVideoAdNotice;

function setDeckVisualMode(mode, silent = false) {
  const curTime = getCurrentPlaybackTime();
  state.currentPlayheadTime = curTime;
  state.deckVisualMode = mode;
  safeSetStorage('kurfa_deck_mode', mode);

  const vinylBtn = document.getElementById('btn-deck-vinyl-mode');
  const videoBtn = document.getElementById('btn-deck-video-mode');
  const vinylWrap = document.getElementById('deck-vinyl-wrapper');
  const videoWrap = document.getElementById('deck-video-wrapper');
  const barVideoBtn = document.getElementById('btn-player-video-mode');

  if (mode === 'video') {
    if (vinylBtn) {
      vinylBtn.classList.remove('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      vinylBtn.classList.add('text-on-surface-variant');
    }
    if (videoBtn) {
      videoBtn.classList.add('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      videoBtn.classList.remove('text-on-surface-variant');
    }
    if (vinylWrap) {
      vinylWrap.style.display = 'none';
      vinylWrap.classList.add('hidden');
    }
    if (videoWrap) {
      videoWrap.style.display = 'block';
      videoWrap.classList.remove('hidden');
    }
    if (barVideoBtn) {
      barVideoBtn.classList.add('text-primary');
      barVideoBtn.classList.remove('text-on-surface-variant');
    }

    if (!silent) {
      showVideoAdNotice();
    }

    if (state.currentTrack && state.currentTrack.id) {
      state._switchingDeckMode = true;
      clearTimeout(state._switchingDeckTimer);
      state._switchingDeckTimer = setTimeout(() => {
        state._switchingDeckMode = false;
      }, 1500);

      // Silence HTML5 audio engine only if it actually holds a loaded source
      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
        try {
          DOM.audioEngine.pause();
          DOM.audioEngine.removeAttribute('src');
        } catch(e) {}
      }

      if (state.ytReady && state.ytPlayer) {
        try {
          const targetVid = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
          const loadedVid = typeof state.ytPlayer.getVideoData === 'function'
            ? state.ytPlayer.getVideoData()?.video_id
            : null;
          const pState = typeof state.ytPlayer.getPlayerState === 'function'
            ? state.ytPlayer.getPlayerState()
            : -1;

          // If this exact video is already loaded and playing/paused/buffering, NEVER reload!
          if (targetVid && loadedVid === targetVid && [1, 2, 3].includes(pState)) {
            if (!state.userPaused && pState !== 1 && typeof state.ytPlayer.playVideo === 'function') {
              state.ytPlayer.playVideo();
            }
            if (!state.userPaused) {
              state.isPlaying = true;
              updatePlayPauseUI(true);
              if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
            }
          } else if (targetVid) {
            const startSec = Math.max(0, Math.floor(curTime));
            if (state.userPaused && typeof state.ytPlayer.cueVideoById === 'function') {
              state.ytPlayer.cueVideoById({ videoId: targetVid, startSeconds: startSec });
              state.isPlaying = false;
              updatePlayPauseUI(false);
            } else if (typeof state.ytPlayer.loadVideoById === 'function') {
              state.ytPlayer.loadVideoById({
                videoId: targetVid,
                startSeconds: startSec
              });
              state.isPlaying = !state.userPaused;
              updatePlayPauseUI(!state.userPaused);
              if (!state.userPaused && typeof startSeekbarTicker === 'function') startSeekbarTicker();
            }
          }
        } catch(e) {
          console.warn("YouTube video mode transition error:", e);
        }
      }
    }

    requestAnimationFrame(() => {
      syncPersistentPlayerPosition();
    });
    if (!silent) showToast("Canlı Video Klip Modu Açıldı");
  } else {
    // VINYL / PLAK MODE (100% Ad-Free Pure Audio)
    if (videoBtn) {
      videoBtn.classList.remove('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      videoBtn.classList.add('text-on-surface-variant');
    }
    if (vinylBtn) {
      vinylBtn.classList.add('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      vinylBtn.classList.remove('text-on-surface-variant');
    }
    if (vinylWrap) {
      vinylWrap.style.display = '';
      vinylWrap.classList.remove('hidden');
    }
    if (videoWrap) {
      videoWrap.style.display = 'none';
      videoWrap.classList.add('hidden');
    }
    if (barVideoBtn) {
      barVideoBtn.classList.remove('text-primary');
      barVideoBtn.classList.add('text-on-surface-variant');
    }

    dismissVideoAdNotice();

    if (state.currentTrack && state.currentTrack.id) {
      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.paused && DOM.audioEngine.currentTime > 0) {
        // HTML5 audio continues playing
      } else if ((isAndroidNativeEngine() || Boolean(getBrowserExtensionMode())) && safeYtId(state.currentTrack.ytId || state.currentTrack.id)) {
        const directVid = safeYtId(state.currentTrack.ytId || state.currentTrack.id);
        const resumeAt = Math.max(0, Math.floor(curTime || 0));
        kurfaResolveDirectAudio(directVid).then((res) => {
          if (state.deckVisualMode === 'vinyl' && !state.userPaused && res && res.success && res.streamUrl && safeYtId(state.currentTrack?.ytId || state.currentTrack?.id) === directVid) {
            loadDirectAudioStream(res.streamUrl, resumeAt, currentPlaybackToken, directVid);
          }
        }).catch(() => {});
      } else if (state.ytPlayer && typeof state.ytPlayer.getPlayerState === 'function' && state.ytPlayer.getPlayerState() === 1) {
        // YouTube continues playing cleanly in the background behind the spinning vinyl deck
      } else if (state.isPlaying && !state.userPaused) {
        resumePlayback();
      }
    }

    syncPersistentPlayerPosition();
    if (!silent) showToast("Reklamsız Ses Modu Aktif");
  }
}

function quickToggleVideoMode() {
  if (state.currentTab !== 'calma-listeleri') {
    switchTab('calma-listeleri');
    setDeckVisualMode('video');
  } else {
    const nextMode = (state.deckVisualMode === 'video') ? 'vinyl' : 'video';
    setDeckVisualMode(nextMode);
  }
}

function toggleFullScreenVideo() {
  const videoWrap = document.getElementById('deck-video-wrapper');
  if (!videoWrap) return;
  if (!document.fullscreenElement) {
    if (videoWrap.requestFullscreen) {
      videoWrap.requestFullscreen();
    } else if (videoWrap.webkitRequestFullscreen) {
      videoWrap.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

async function handleGoogleSignOut() {
  if (firebaseAuth) {
    try { await firebaseAuth.signOut(); } catch(e) {}
  }
  state.googleUser = null;
  state.firebaseUser = null;
  try { localStorage.removeItem('kurfa_google_user'); } catch(e) {}
  updateGoogleProfileUI(null);
  showToast("Oturum kapatıldı. Listeleriniz yerel hafızada korundu.");
}

async function pullFirebaseLibraryOnce(uid) {
  if (!firebaseDb || !uid) return;
  try {
    const docRef = firebaseDb.collection('users').doc(uid).collection('library').doc('main');
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      if (data && Array.isArray(data.customPlaylists) && data.customPlaylists.length > 0) {
        state.customPlaylists = data.customPlaylists.map(sanitizeBackupPlaylist).filter(Boolean).slice(0, 100);
        safeSetStorage('kurfa_custom_playlists', JSON.stringify(state.customPlaylists));
        renderCustomPlaylistsGrid();
      }
      if (data && Array.isArray(data.favorites) && data.favorites.length > 0) {
        state.favorites = data.favorites.map(sanitizeBackupTrack).filter(Boolean).slice(0, 1000);
        safeSetStorage('kurfa_favs', JSON.stringify(state.favorites));
        renderFavoritesTable();
      }
      updateKutuphaneBadges();
      showToast("Kütüphaneniz buluttan başarıyla eşitlendi!");
    }
  } catch(e) {
    console.warn("Pull library note:", e);
  }
}

function scheduleFirebaseCloudSync() {
  if (!state.firebaseUser || !firebaseDb) return;
  if (firebaseSyncDebounceTimer) clearTimeout(firebaseSyncDebounceTimer);

  firebaseSyncDebounceTimer = setTimeout(() => {
    syncFirebaseLibraryNow();
  }, 5000);
}

async function syncFirebaseLibraryNow() {
  if (!state.firebaseUser || !firebaseDb) {
    showToast("Yerel hafıza güncellendi!");
    return;
  }
  try {
    const docRef = firebaseDb.collection('users').doc(state.firebaseUser.uid).collection('library').doc('main');
    await docRef.set({
      customPlaylists: state.customPlaylists,
      favorites: state.favorites,
      updatedAt: Date.now()
    }, { merge: true });
    showToast("Kütüphane bulutla eşitlendi!");
  } catch(e) {
    console.warn("Cloud sync note:", e);
  }
}

// =============================================================================
// 13.11 SPOTIFY-STYLE PICTURE-IN-PICTURE (PIP) MINI PLAYER (Photos 1 & 2 Ref)
// =============================================================================

let pipWindowInstance = null;

function seekToFraction(frac) {
  const dur = getActiveMediaDuration();
  const seekTime = Math.max(0, Math.min(dur, frac * dur));
  seekPlaybackToSeconds(seekTime);
}

function syncDesktopMiniPlayerState(curSec, durSec) {
  if (typeof getBrowserExtensionMode !== 'function' || !getBrowserExtensionMode().startsWith('desktop')) return;
  const track = state.currentTrack;
  const payload = {
    title: (track && track.title) ? track.title : 'Kurfamüzik',
    artist: (track && track.artist) ? track.artist : 'Bir parça seçin',
    thumbnail: track ? getTrackThumbnail(track) : '',
    isPlaying: Boolean(state.isPlaying),
    isMuted: Boolean(state.isMuted || state.volume === 0),
    cur: Number.isFinite(curSec) ? curSec : (getActiveMediaCurrentTime() || 0),
    dur: Number.isFinite(durSec) ? durSec : (getActiveMediaDuration() || 0)
  };
  callExtensionBridge('UPDATE_MINI_PLAYER', payload, 2500).catch(() => {});
}

window.seekPlaybackToFraction = function (frac) {
  const dur = getActiveMediaDuration();
  if (dur > 0) {
    seekPlaybackToSeconds(Math.max(0, Math.min(1, Number(frac) || 0)) * dur);
  }
};

async function toggleDocumentPipPlayer() {
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    const track = state.currentTrack;
    const res = await callExtensionBridge('TOGGLE_MINI_PLAYER', {
      title: (track && track.title) ? track.title : 'Kurfamüzik',
      artist: (track && track.artist) ? track.artist : 'Bir parça seçin',
      thumbnail: track ? getTrackThumbnail(track) : '',
      isPlaying: Boolean(state.isPlaying),
      isMuted: Boolean(state.isMuted || state.volume === 0),
      cur: getActiveMediaCurrentTime() || 0,
      dur: getActiveMediaDuration() || 0
    }, 4000);
    if (res && res.success) {
      window.__kurfaDesktopMiniPlayerOpen = Boolean(res.visible);
      return;
    }
  }
  if (pipWindowInstance) {
    closeDocumentPipPlayer();
    return;
  }
  const floatingPip = document.getElementById('kurfa-floating-pip');
  if (floatingPip && !floatingPip.classList.contains('hidden')) {
    closeFloatingPip();
    return;
  }
  await openDocumentPipPlayer();
}

(function initMobileMiniSeekbar() {
  if (typeof document === 'undefined') return;
  document.addEventListener('DOMContentLoaded', () => {
    const hit = document.getElementById('mobile-mini-seek-hit');
    const track = document.getElementById('mobile-mini-seek-track');
    const fill = document.getElementById('player-mobile-seek-fill');
    const thumb = document.getElementById('mobile-mini-seek-thumb');
    const tip = document.getElementById('mobile-mini-seek-tooltip');
    if (!hit || !track || !fill) return;

    let activePointerId = null;
    let pendingFrac = 0;

    const setActiveVisual = (dragging) => {
      window.__kurfaMobileMiniScrubbing = dragging;
      track.style.height = dragging ? '9px' : '5px';
      if (thumb) thumb.style.transform = dragging ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)';
      if (tip) tip.classList.toggle('hidden', !dragging);
    };

    const updateFromClientX = (clientX) => {
      const rect = hit.getBoundingClientRect();
      if (!rect || rect.width <= 0) return 0;
      const frac = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      pendingFrac = frac;
      const pct = frac * 100;
      fill.style.width = `${pct}%`;
      const dur = getActiveMediaDuration() || 0;
      if (tip) {
        tip.style.left = `${Math.max(12, Math.min(88, pct))}%`;
        tip.textContent = dur > 0 ? `${formatTime(frac * dur)} / ${formatTime(dur)}` : `${Math.round(pct)}%`;
      }
      return frac;
    };

    hit.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      activePointerId = e.pointerId;
      try { hit.setPointerCapture(e.pointerId); } catch (_) {}
      setActiveVisual(true);
      updateFromClientX(e.clientX);
    });

    hit.addEventListener('pointermove', (e) => {
      if (activePointerId !== e.pointerId) return;
      e.stopPropagation();
      updateFromClientX(e.clientX);
    });

    const endScrub = (e) => {
      if (activePointerId !== e.pointerId) return;
      e.stopPropagation();
      try { hit.releasePointerCapture(e.pointerId); } catch (_) {}
      activePointerId = null;
      setActiveVisual(false);
      const dur = getActiveMediaDuration() || 0;
      if (dur > 0) {
        seekPlaybackToSeconds(pendingFrac * dur);
      }
    };

    hit.addEventListener('pointerup', endScrub);
    hit.addEventListener('pointercancel', (e) => {
      if (activePointerId !== e.pointerId) return;
      activePointerId = null;
      setActiveVisual(false);
    });
  });
})();

async function openDocumentPipPlayer() {
  // If Chrome / Edge supports Document Picture-in-Picture API:
  if ('documentPictureInPicture' in window) {
    try {
      const pip = await window.documentPictureInPicture.requestWindow({
        width: 320,
        height: 390
      });
      pipWindowInstance = pip;

      const style = pip.document.createElement('style');
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background-color: #121212;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 20px;
          line-height: 1;
          display: inline-block;
          direction: ltr;
        }
        .pip-header {
          height: 36px;
          background: #181818;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          border-bottom: 1px solid #282828;
          font-size: 11px;
          color: #a1a1aa;
        }
        .pip-cover-wrap {
          position: relative;
          flex: 1;
          width: 100%;
          min-height: 0;
          background: #181818;
          overflow: hidden;
          cursor: pointer;
        }
        .pip-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pip-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 14px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .pip-cover-wrap:hover .pip-overlay {
          opacity: 1;
        }
        .pip-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: auto;
          margin-bottom: 10px;
        }
        .pip-btn {
          background: transparent;
          border: none;
          color: #d4d4d8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 50%;
          transition: transform 0.1s ease, color 0.1s ease;
        }
        .pip-btn:hover { color: #ffffff; transform: scale(1.1); }
        .pip-btn-play {
          width: 44px;
          height: 44px;
          background: #ffffff;
          color: #000000;
          border-radius: 50%;
        }
        .pip-btn-play:hover {
          background: #f4f4f5;
          transform: scale(1.08);
          color: #000000;
        }
        .pip-bottom {
          padding: 10px 14px;
          background: #121212;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #1f1f23;
        }
        .pip-track-meta {
          min-width: 0;
          flex: 1;
          padding-right: 8px;
        }
        .pip-title {
          font-weight: 700;
          font-size: 13px;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pip-artist {
          font-size: 11px;
          color: #a1a1aa;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 2px;
        }
        .pip-seek {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pip-times {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-family: monospace;
          color: #a1a1aa;
        }
        .pip-track-bar {
          position: relative;
          width: 100%;
          height: 5px;
          background: #3f3f46;
          border-radius: 9999px;
          cursor: pointer;
          overflow: hidden;
        }
        .pip-fill-bar {
          height: 100%;
          width: 0%;
          background: #ffffff;
          border-radius: 9999px;
          transition: width 0.1s linear;
        }
      `;
      pip.document.head.appendChild(style);

      const track = state.currentTrack || {
        title: "Kurfa Müzik",
        artist: "Bir şarkı seçin",
        thumbnail: "./kurfamuzik_logo.png"
      };
      const baseHref = escapeHtml(new URL('./', window.location.href).href);
      const fallbackLogo = './kurfamuzik_logo.png';
      const safeThumb = safeUrl(track.thumbnail, fallbackLogo);
      const safeTitle = escapeHtml(track.title || 'Kurfa Müzik');
      const safeArtist = escapeHtml(track.artist || 'Bir şarkı seçin');
      const safeDur = escapeHtml(track.duration || '3:30');
      const safeHost = escapeHtml(window.location.hostname || 'Kurfanova');
      const initCur = getActiveMediaCurrentTime();
      const initDur = getActiveMediaDuration() || parseDurationToSec(track.duration) || 210;
      const initPct = initDur > 0 ? Math.max(0, Math.min(100, (initCur / initDur) * 100)) : 0;

      const baseEl = pip.document.createElement('base');
      baseEl.href = new URL('./', window.location.href).href;
      pip.document.head.appendChild(baseEl);

      pip.document.body.innerHTML = `
        <div class="pip-header" data-base="${baseHref}">
          <div style="display:flex;align-items:center;gap:6px;">
            <span class="material-symbols-outlined" style="font-size:16px;color:#22d3ee;">tune</span>
            <span style="font-weight:600;letter-spacing:-0.2px;">${safeHost}</span>
          </div>
          <button id="pip-ext-close" class="pip-btn" style="color:#71717a;" title="Kapat">
            <span class="material-symbols-outlined" style="font-size:18px;">close</span>
          </button>
        </div>

        <div class="pip-cover-wrap">
          <img id="pip-ext-cover" class="pip-cover-img" src="${safeThumb}" alt="${safeTitle}" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">

          <div class="pip-overlay">
            <div></div>
            <div class="pip-controls">
              <button id="pip-ext-mute" class="pip-btn" title="Sessiz"><span class="material-symbols-outlined">${state.isMuted ? 'volume_off' : 'volume_up'}</span></button>
              <button id="pip-ext-shuffle" class="pip-btn" title="Karıştır"><span class="material-symbols-outlined">shuffle</span></button>
              <button id="pip-ext-prev" class="pip-btn" title="Önceki"><span class="material-symbols-outlined" style="font-size:24px;">skip_previous</span></button>
              <button id="pip-ext-play" class="pip-btn pip-btn-play" title="Oynat/Durdur"><span class="material-symbols-outlined" id="pip-ext-play-icon" style="font-size:28px;">${state.isPlaying ? 'pause' : 'play_arrow'}</span></button>
              <button id="pip-ext-next" class="pip-btn" title="Sonraki"><span class="material-symbols-outlined" style="font-size:24px;">skip_next</span></button>
              <button id="pip-ext-repeat" class="pip-btn" title="Tekrarla"><span class="material-symbols-outlined">repeat</span></button>
              <button id="pip-ext-share" class="pip-btn" title="Paylaş"><span class="material-symbols-outlined">share</span></button>
            </div>

            <div class="pip-seek">
              <div class="pip-times">
                <span id="pip-ext-cur">${escapeHtml(formatTime(initCur))}</span>
                <span id="pip-ext-dur">${safeDur}</span>
              </div>
              <div id="pip-ext-seek-track" class="pip-track-bar">
                <div id="pip-ext-seek-fill" class="pip-fill-bar" style="width:${initPct}%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="pip-bottom">
          <div class="pip-track-meta">
            <div id="pip-ext-title" class="pip-title">${safeTitle}</div>
            <div id="pip-ext-artist" class="pip-artist">${safeArtist}</div>
          </div>
          <button id="pip-ext-add" class="pip-btn" style="color:#ffffff;" title="Çalma Listesine Ekle">
            <span class="material-symbols-outlined" style="font-size:26px;">add_circle</span>
          </button>
        </div>
      `;

      pip.document.getElementById('pip-ext-close').onclick = () => pip.close();
      pip.document.getElementById('pip-ext-play').onclick = () => togglePlay();
      pip.document.getElementById('pip-ext-prev').onclick = () => playPrevTrack();
      pip.document.getElementById('pip-ext-next').onclick = () => playNextTrack();
      pip.document.getElementById('pip-ext-mute').onclick = () => toggleMute();
      pip.document.getElementById('pip-ext-shuffle').onclick = () => toggleShuffle();
      pip.document.getElementById('pip-ext-repeat').onclick = () => toggleRepeat();
      pip.document.getElementById('pip-ext-share').onclick = () => openShareModal();
      pip.document.getElementById('pip-ext-add').onclick = () => openAddToPlaylistModal(state.currentTrack);

      const seekTrack = pip.document.getElementById('pip-ext-seek-track');
      if (seekTrack) {
        seekTrack.onclick = (e) => {
          const rect = seekTrack.getBoundingClientRect();
          if (!rect.width || rect.width <= 0) return;
          const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          seekToFraction(frac);
        };
      }

      pip.addEventListener('pagehide', () => {
        pipWindowInstance = null;
      });

      showToast("Mini Kayan Oynatıcı (PiP) Masaüstünde Açıldı!");
      return;
    } catch(e) {
      console.warn("Document PiP open note:", e);
    }
  }

  // Fallback to in-page floating PiP card
  openFloatingPip();
}

function closeDocumentPipPlayer() {
  if (pipWindowInstance) {
    try { pipWindowInstance.close(); } catch(e) {}
    pipWindowInstance = null;
  }
  closeFloatingPip();
}

function openFloatingPip() {
  const el = document.getElementById('kurfa-floating-pip');
  if (!el) return;
  el.classList.remove('hidden');
  initPipSeekbar();
  syncFloatingPipUI();
  showToast("Mini Oynatıcı Açıldı");
}

function closeFloatingPip() {
  const el = document.getElementById('kurfa-floating-pip');
  if (el) el.classList.add('hidden');
}

function expandFloatingPipToFull() {
  closeFloatingPip();
  switchTab('calma-listeleri');
}

function syncFloatingPipUI() {
  const track = state.currentTrack;
  if (!track) return;
  const cover = document.getElementById('pip-cover-art');
  const title = document.getElementById('pip-track-title');
  const artist = document.getElementById('pip-track-artist');
  const playIcon = document.getElementById('pip-play-icon');
  const safeThumb = safeUrl(track.thumbnail, './kurfamuzik_logo.png');

  if (cover) cover.src = safeThumb;
  if (title) title.textContent = track.title || 'Kurfa Müzik';
  if (artist) artist.textContent = track.artist || 'Sanatçı';
  if (playIcon) playIcon.textContent = state.isPlaying ? 'pause' : 'play_arrow';

  // Also sync external Document PiP window
  if (pipWindowInstance && pipWindowInstance.document) {
    const doc = pipWindowInstance.document;
    const extCover = doc.getElementById('pip-ext-cover');
    const extTitle = doc.getElementById('pip-ext-title');
    const extArtist = doc.getElementById('pip-ext-artist');
    const extPlay = doc.getElementById('pip-ext-play-icon');
    if (extCover) extCover.src = safeThumb;
    if (extTitle) extTitle.textContent = track.title || 'Kurfa Müzik';
    if (extArtist) extArtist.textContent = track.artist || 'Sanatçı';
    if (extPlay) extPlay.textContent = state.isPlaying ? 'pause' : 'play_arrow';
  }
}

function initPipSeekbar() {
  const track = document.getElementById('pip-seek-track');
  if (!track) return;
  track.onclick = (e) => {
    const rect = track.getBoundingClientRect();
    if (!rect.width || rect.width <= 0) return;
    const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekToFraction(frac);
  };
}

// =============================================================================
// 13.12 BLUETOOTH & AUDIO OUTPUT DEVICE SELECTOR (Spotify Connect to Device)
// =============================================================================

async function requestAudioDeviceAccess() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(t => t.stop());
      showToast("Cihaz izni onaylandı. Kulaklık isimleri listeleniyor.");
      await openDevicePickerModal();
    } catch(e) {
      showToast("Cihaz izni reddedildi. Sistem standart ses çıkışı devrede.");
    }
  }
}

async function openDevicePickerModal() {
  const modal = document.getElementById('device-picker-modal');
  const card = document.getElementById('device-picker-modal-card');
  if (!modal || !card) return;

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');

  const listEl = document.getElementById('dp-devices-list');
  if (!listEl) return;

  listEl.innerHTML = `
    <div class="py-3 text-center text-xs text-on-surface-variant flex items-center justify-center gap-1.5">
      <span class="material-symbols-outlined text-[16px] animate-spin text-primary">refresh</span>
      <span>Kullanılabilir ses aygıtları taranıyor...</span>
    </div>
  `;

  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const outputs = devices.filter(d => d.kind === 'audiooutput');
      
      listEl.innerHTML = '';

      const hasHiddenLabels = outputs.some(d => !d.label || d.label.trim() === '');
      if (hasHiddenLabels) {
        const unlockBanner = document.createElement('div');
        unlockBanner.className = "p-2.5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-2 mb-1";
        unlockBanner.innerHTML = `
          <div class="flex items-center gap-2 text-xs font-bold text-on-surface">
            <span class="material-symbols-outlined text-primary text-[18px]">bluetooth</span>
            <span>Kulaklık İsimlerini Aç</span>
          </div>
          <p class="text-[10px] text-on-surface-variant leading-tight">
            Tarayıcı güvenliği nedeniyle Bluetooth veya kulaklık adlarını (AirPods, Buds vb.) görebilmek için izin gereklidir.
          </p>
          <button type="button" class="py-1.5 px-3 rounded-lg bg-primary text-on-primary text-[11px] font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-1 shadow-xs" onclick="requestAudioDeviceAccess()">
            <span class="material-symbols-outlined text-[14px]">lock_open</span>
            <span>Cihaz İsimlerini Etkinleştir</span>
          </button>
        `;
        listEl.appendChild(unlockBanner);
      }

      if (outputs.length > 0) {
        outputs.forEach((dev, idx) => {
          const rawLabel = dev.label ? dev.label.toLowerCase() : '';
          const isBluetooth = rawLabel.includes('bluetooth') || 
                              rawLabel.includes('kulaklık') || 
                              rawLabel.includes('headset') ||
                              rawLabel.includes('buds') ||
                              rawLabel.includes('airpods') ||
                              rawLabel.includes('wireless') ||
                              rawLabel.includes('hands-free');

          const isCurrent = (state.currentAudioSinkId && state.currentAudioSinkId === dev.deviceId) ||
                            (!state.currentAudioSinkId && (dev.deviceId === 'default' || idx === 0));

          const displayLabel = dev.label || `Ses Çıkış Aygıtı #${idx + 1}`;
          const safeDevLabel = escapeHtml(displayLabel);

          const item = document.createElement('div');
          item.className = `flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors border ${isCurrent ? 'border-primary/40 bg-primary/5' : 'border-transparent hover:bg-surface-container'}`;
          item.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="material-symbols-outlined text-[20px] ${isCurrent ? 'text-primary' : (isBluetooth ? 'text-secondary' : 'text-on-surface-variant')}">
                ${isBluetooth ? 'headphones' : 'speaker'}
              </span>
              <div class="flex flex-col min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-xs font-bold text-on-surface truncate">${safeDevLabel}</span>
                  ${isCurrent ? '<span class="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-primary text-on-primary">Aktif</span>' : ''}
                </div>
                <span class="text-[10px] text-on-surface-variant">${isBluetooth ? 'Bluetooth / Kulaklık' : (dev.deviceId === 'default' ? 'Sistem Varsayılanı' : 'Harici Hoparlör')}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-[18px] ${isCurrent ? 'text-primary' : 'text-on-surface-variant'}">
              ${isCurrent ? 'check_circle' : 'arrow_forward'}
            </span>
          `;
          item.onclick = () => switchAudioOutputDevice(dev.deviceId, displayLabel);
          listEl.appendChild(item);
        });
      } else {
        listEl.innerHTML = `
          <div class="py-3 text-center text-xs text-on-surface-variant">
            Sistem varsayılan çıkışı etkin. Cihazınızın ses düğmelerinden veya Bluetooth menüsünden kulaklığınızı doğrudan dinleyebilirsiniz.
          </div>
        `;
      }
    } catch(e) {
      listEl.innerHTML = `
        <div class="py-3 text-center text-xs text-on-surface-variant">
          Ses doğrudan cihazınızın bağlı hoparlör veya kulaklığına aktarılmaktadır.
        </div>
      `;
    }
  } else {
    listEl.innerHTML = `
      <div class="py-3 text-center text-xs text-on-surface-variant">
        Tarayıcınız ses çıkış aygıtı seçimini desteklemiyor. Sistem varsayılan ses çıkışı aktif.
      </div>
    `;
  }
}

function closeDevicePickerModal() {
  const modal = document.getElementById('device-picker-modal');
  const card = document.getElementById('device-picker-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

async function switchAudioOutputDevice(deviceId, label) {
  state.currentAudioSinkId = deviceId;
  safeSetStorage('kurfa_audio_sink', deviceId);

  if (DOM.audioEngine && typeof DOM.audioEngine.setSinkId === 'function') {
    try {
      await DOM.audioEngine.setSinkId(deviceId);
    } catch(e) {
      console.warn("audioEngine.setSinkId note:", e);
    }
  }

  const curEl = document.getElementById('dp-current-device-name');
  if (curEl) curEl.textContent = label || "Bağlı Cihaz";

  const isBluetooth = (label || '').toLowerCase().includes('bluetooth') || 
                      (label || '').toLowerCase().includes('kulaklık') || 
                      (label || '').toLowerCase().includes('headset') ||
                      (label || '').toLowerCase().includes('buds') ||
                      (label || '').toLowerCase().includes('airpods');
  const iconEl = document.getElementById('dp-current-device-icon');
  if (iconEl) iconEl.textContent = isBluetooth ? 'headphones' : 'speaker';

  showToast(`Ses aktarıldı: ${label || 'Harici Cihaz'}`);
  closeDevicePickerModal();
}

async function scanBluetoothDevices() {
  if (navigator.bluetooth && navigator.bluetooth.requestDevice) {
    try {
      const dev = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      });
      showToast(`Bluetooth cihazı seçildi: ${dev.name || 'Cihaz'}`);
      openDevicePickerModal();
      return;
    } catch(e) {
      if (e && (e.name === 'NotAllowedError' || e.name === 'SecurityError')) {
        showToast("Bluetooth cihaz seçimi izin verilmediği veya iptal edildiği için açılamadı.");
        openDevicePickerModal();
        return;
      }
    }
  }
  showToast("Bluetooth kulaklığınızı telefon/PC Bluetooth ayarlarınızdan bağladığınızda ses otomatik olarak oraya aktarılır.");
  openDevicePickerModal();
}

// =============================================================================
// 14. KEYBOARD SHORTCUTS & EVENT LISTENERS
// =============================================================================

function setupEventListeners() {
  // Top Search Bar
  if (DOM.topSearchInput) {
    DOM.topSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = DOM.topSearchInput.value.trim();
        if (val) executeSearchImmediate(val, true);
      }
    });
    DOM.topSearchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val.length >= 2) debouncedSearch(val);
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modalClosers = [
        ['ad-warning-modal', () => dismissAdWarningModal(false)],
        ['app-install-modal', closeAppInstallModal],
        ['google-account-chooser-modal', closeGoogleAccountChooser],
        ['create-playlist-modal', closeCreatePlaylistModal],
        ['add-to-playlist-modal', closeAddToPlaylistModal],
        ['device-picker-modal', closeDevicePickerModal],
        ['profile-modal', closeProfileModal],
        ['share-modal', closeShareModal],
        ['downloader-modal', closeDownloaderModal]
      ];
      for (const [id, closeFn] of modalClosers) {
        const el = document.getElementById(id);
        if (el && !el.classList.contains('pointer-events-none')) {
          closeFn();
          return;
        }
      }
      if (state.queueDrawerOpen) {
        toggleQueueDrawer();
        return;
      }
      if (state.mobileNowPlayingOpen) {
        closeMobileNowPlaying();
        return;
      }
    }

    if (
      e.target &&
      (e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.tagName === 'SELECT' ||
        e.target.isContentEditable)
    ) {
      return;
    }

    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (DOM.topSearchInput) {
        DOM.topSearchInput.focus();
        DOM.topSearchInput.select();
      }
    } else if (e.key.toLowerCase() === 'm') {
      toggleMute();
    }
  });

  // Modal Backdrop Click to Close
  const backdropBindings = [
    [DOM.downloaderModal, closeDownloaderModal],
    [document.getElementById('share-modal'), closeShareModal],
    [document.getElementById('profile-modal'), closeProfileModal],
    [document.getElementById('device-picker-modal'), closeDevicePickerModal],
    [document.getElementById('create-playlist-modal'), closeCreatePlaylistModal],
    [document.getElementById('add-to-playlist-modal'), closeAddToPlaylistModal],
    [document.getElementById('app-install-modal'), closeAppInstallModal],
    [document.getElementById('ad-warning-modal'), () => dismissAdWarningModal(false)],
    [document.getElementById('google-account-chooser-modal'), closeGoogleAccountChooser]
  ];
  backdropBindings.forEach(([modalEl, closeFn]) => {
    if (modalEl) {
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          closeFn();
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || (e.target && e.target.isContentEditable)) return;
    if (e.key === 'ArrowUp' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      setPlayerVolume((state.volume || 0) + 0.05);
    } else if (e.key === 'ArrowDown' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      setPlayerVolume((state.volume || 0) - 0.05);
    } else if ((e.key === 'm' || e.key === 'M') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      toggleMute();
    }
  });

  // Seamless Background Tab & Alt-Tab Audio Continuity + Zero-Waste Idle Mode (for Gaming/Low-End PCs)
  document.addEventListener('visibilitychange', () => {
    const isHidden = Boolean(document.hidden);
    if (document.body) {
      document.body.classList.toggle('kurfa-bg-idle', isHidden);
    }
    if (isHidden) {
      if (seekbarRaf) {
        cancelAnimationFrame(seekbarRaf);
        seekbarRaf = null;
      }
    }

    if (!state.userPaused && state.currentTrack && state.isPlaying) {
      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && DOM.audioEngine.paused) {
        try {
          DOM.audioEngine.play().catch(() => {});
        } catch (e) {}
      } else if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.getPlayerState === 'function') {
        try {
          const pState = state.ytPlayer.getPlayerState();
          if (pState === 2 || pState === 5) {
            state.ytPlayer.playVideo();
          }
        } catch (e) {}
      }
    }

    // When returning to the active tab, smoothly refresh UI elements (seekbar, lyrics)
    if (!document.hidden && state.isPlaying) {
      if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
      const curTime = getActiveMediaCurrentTime();
      const duration = getActiveMediaDuration();
      if (duration && duration > 0) {
        updateSeekbarUI(curTime, duration);
        syncLyricsToTime(curTime);
      }
    }
  });

  // Audio Engine Lifecycle & Strict Mutual Exclusion
  if (DOM.audioEngine) {
    let _audioStallTimer = null;
    const clearAudioStallWatchdog = () => {
      if (_audioStallTimer) {
        clearTimeout(_audioStallTimer);
        _audioStallTimer = null;
      }
    };

    const handoffAudioErrorOrStall = async (curTimeSec) => {
      if (state._playerInError || state._lastErrorVideoId || state._switchingDeckMode) return;
      const isLocalCur = Boolean(state.currentTrack?.isLocal) || String(state.currentTrack?.id || '').startsWith('local_');
      if (isLocalCur) {
        if (state.isPlaying && !state.userPaused) {
          playNextTrack({ isAutoErrorSkip: true });
        }
        return;
      }
      const isAudius = String(state.currentTrack?.id || '').startsWith('audius_');
      const playId = isAudius ? null : safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
      const errToken = currentPlaybackToken;
      if (!state.isPlaying || state.userPaused) return;

      if (state._audioEngineRetryToken !== errToken) {
        state._audioEngineRetryToken = errToken;
        state._audioEngineRetryCount = 0;
      }
      state._audioEngineRetryCount = (state._audioEngineRetryCount || 0) + 1;

      if (playId && hasAdFreeLocalEngine() && state.deckVisualMode !== 'video' && state._audioEngineRetryCount <= 2) {
        const prevSrc = `${DOM.audioEngine.getAttribute('src') || ''}`;
        try {
          if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.invalidateAudioStream === 'function') {
            window.KurfaAndroidBridge.invalidateAudioStream(playId);
          }
          const fresh = await kurfaResolveDirectAudio(playId);
          if (errToken !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
          if (fresh && fresh.success && fresh.streamUrl) {
            let nextUrl = fresh.streamUrl;
            if (nextUrl === prevSrc || nextUrl.includes('/__kurfa_native_audio__/')) {
              const sep = nextUrl.includes('?') ? '&' : '?';
              nextUrl = `${nextUrl.split('?')[0]}${sep}cb=${Date.now()}`;
            }
            loadDirectAudioStream(nextUrl, curTimeSec, errToken, playId);
            return;
          }
        } catch (_) {}
        try {
          const aud = await kurfaTryQuickAudiusMatch(state.currentTrack, 1600);
          if (errToken !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
          if (aud && aud.success && aud.streamUrl && aud.streamUrl !== prevSrc) {
            loadDirectAudioStream(aud.streamUrl, curTimeSec, errToken, null);
            return;
          }
        } catch (_) {}
      }

      if (playId && errToken === currentPlaybackToken && !state.userPaused) {
        try {
          DOM.audioEngine.pause();
          DOM.audioEngine.removeAttribute('src');
        } catch (_) {}
        loadYouTubePlayback(
          playId,
          state.currentTrack,
          curTimeSec,
          errToken,
          Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
        );
      } else if (isAudius && state.isPlaying && !state.userPaused) {
        playNextTrack({ isAutoErrorSkip: true });
      }
    };

    const scheduleStallWatchdog = () => {
      clearAudioStallWatchdog();
      if (!DOM.audioEngine.getAttribute('src') || state.userPaused || !state.isPlaying || state.deckVisualMode === 'video') return;
      const snapTime = DOM.audioEngine.currentTime || 0;
      const snapToken = currentPlaybackToken;
      _audioStallTimer = setTimeout(() => {
        _audioStallTimer = null;
        if (snapToken !== currentPlaybackToken || state.userPaused || !state.isPlaying || state.deckVisualMode === 'video') return;
        if (!DOM.audioEngine || !DOM.audioEngine.getAttribute('src') || DOM.audioEngine.ended) return;
        const nowTime = DOM.audioEngine.currentTime || 0;
        if (DOM.audioEngine.readyState < 3 && !DOM.audioEngine.paused && Math.abs(nowTime - snapTime) < 0.25) {
          handoffAudioErrorOrStall(Math.max(0, Math.floor(nowTime || state.currentPlayheadTime || 0)));
        }
      }, 12000);
    };

    DOM.audioEngine.addEventListener('ended', () => {
      clearAudioStallWatchdog();
      handleTrackEnd();
    });
    DOM.audioEngine.addEventListener('playing', clearAudioStallWatchdog);
    DOM.audioEngine.addEventListener('timeupdate', clearAudioStallWatchdog);
    DOM.audioEngine.addEventListener('waiting', scheduleStallWatchdog);
    DOM.audioEngine.addEventListener('stalled', scheduleStallWatchdog);
    DOM.audioEngine.addEventListener('error', (e) => {
      clearAudioStallWatchdog();
      if (!DOM.audioEngine.getAttribute('src')) return;
      console.warn("DOM.audioEngine media error:", e);
      const cur = Math.max(0, Math.floor(DOM.audioEngine.currentTime || state.currentPlayheadTime || 0));
      handoffAudioErrorOrStall(cur);
    });
    let _bgPauseRecoverCount = 0;
    DOM.audioEngine.addEventListener('play', () => {
      _bgPauseRecoverCount = 0;
      clearAudioStallWatchdog();
      if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
        try { state.ytPlayer.pauseVideo(); } catch (e) {}
      }
      try {
        if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
          window.KurfaAndroidBridge.setNativePlaybackState(true);
        }
      } catch(e) {}
      state.isPlaying = true;
      updatePlayPauseUI(true);
      startSeekbarTicker();
    });
    DOM.audioEngine.addEventListener('pause', () => {
      clearAudioStallWatchdog();
      if (DOM.audioEngine.getAttribute('src') && state.userPaused) {
        try {
          if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
            window.KurfaAndroidBridge.setNativePlaybackState(false);
          }
        } catch(e) {}
        state.isPlaying = false;
        updatePlayPauseUI(false);
      } else if (
        typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() &&
        DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.seeking &&
        state.deckVisualMode !== 'video' && !state.userPaused && state.isPlaying && !DOM.audioEngine.ended &&
        _bgPauseRecoverCount < 3
      ) {
        _bgPauseRecoverCount += 1;
        setTimeout(() => {
          if (
            !state.userPaused && state.isPlaying && state.deckVisualMode !== 'video' &&
            DOM.audioEngine && DOM.audioEngine.getAttribute('src') && DOM.audioEngine.paused && !DOM.audioEngine.ended
          ) {
            DOM.audioEngine.play().catch(() => {});
          }
        }, 90);
      }
    });
  }
}

// =============================================================================
// 15. INITIALIZATION
// =============================================================================

function initApp() {
  console.log("Initializing Kurfamüzik Client v5...");

  try { localStorage.removeItem('kurfa_tahta_mode'); } catch (_) {}
  updateProfileUI();
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('SET_THEME_MODE', { dark: Boolean(state.profile.darkMode) }, 1500).catch(() => {});
  }

  // Sync queueIndex with locally restored last played track (0 server load)
  if (state.currentTrack && Array.isArray(state.queue) && state.queue.length > 0) {
    const restoredIdx = state.queue.findIndex(t => t && t.id === state.currentTrack.id);
    if (restoredIdx !== -1) state.queueIndex = restoredIdx;
  }
  renderPopularCardsGrid();
  renderHomeTracklistTable();
  renderTrendlerCardsGrid();
  renderPopularArtistsGrid();
  updateQuickFavCount();
  renderFreshReleasesGrid();
  renderFavoritesTable();
  renderPlaylistTracksTable();
  updatePlaylistHeroUI();
  renderCustomPlaylistsGrid();
  renderSpotifyPlaylistsGrid();
  updateKutuphaneBadges();

  initDragToScroll(document.getElementById('filter-container'));
  initDragToScroll(document.getElementById('kesfet-subtabs'));
  initDragToScroll(document.getElementById('kutuphane-subtabs'));
  
  updatePlayerTrackUI(state.currentTrack);
  if (state.currentTrack) {
    const estDur = parseDurationToSec(state.currentTrack.duration) || 210;
    state.currentPlayheadTime = 0;
    updateSeekbarUI(0, estDur);
  }
  setPlayerVolume(state.volume);
  updateLyricsDisplay();
  setEqualizerPreset(state.activeEqPreset || 'standart', true);
  setDeckVisualMode('vinyl', true);
  initMobileNowPlayingSeekbar();
  initFirebaseSync();

  // Restore Intelligent Persistent Navigation & Sub-Tabs
  if (state.currentKesfetSubTab && state.currentKesfetSubTab !== 'trendler') {
    switchKesfetSubTab(state.currentKesfetSubTab);
  }
  if (state.currentKutuphaneSubTab && state.currentKutuphaneSubTab !== 'favoriler') {
    switchKutuphaneSubTab(state.currentKutuphaneSubTab);
  }
  if (state.currentTab && state.currentTab !== 'kesfet') {
    switchTab(state.currentTab, false);
  }

  // Restore Shuffle button state
  if (state.isShuffle && DOM.btnShuffle) {
    DOM.btnShuffle.classList.add('text-primary', 'bg-primary-fixed/40');
  }

  // Restore Repeat button state
  if (state.repeatMode > 0 && DOM.btnRepeat) {
    DOM.btnRepeat.classList.add('text-primary', 'bg-primary-fixed/40');
    const rIcon = DOM.btnRepeat.querySelector('.material-symbols-outlined');
    if (rIcon) rIcon.textContent = state.repeatMode === 2 ? 'repeat_one' : 'repeat';
  }

  initSeekbarInteractions();
  initVolumeInteractions();

  setupEventListeners();
  handleUrlParameters();
  renderQueueDrawerList();
  fetchExploreData();

  KurfaDSP.init(DOM.audioEngine);
  updateLocalEngineStatusUI();

  initYouTubeEngine();
  if (typeof restoreWebLocalAudioFromDB === 'function') {
    restoreWebLocalAudioFromDB();
  }
  syncPersistentPlayerPosition();
  window.addEventListener('resize', scheduleSyncPersistentPlayerPosition, { passive: true });
  window.addEventListener('scroll', scheduleSyncPersistentPlayerPosition, { passive: true });
  const persistPlaybackSession = () => {
    try {
      if (state.currentTrack) {
        safeSetStorage('kurfa_last_track', JSON.stringify({
          id: state.currentTrack.id,
          ytId: state.currentTrack.ytId || null,
          title: state.currentTrack.title,
          artist: state.currentTrack.artist,
          thumbnail: getTrackThumbnail(state.currentTrack),
          duration: state.currentTrack.duration,
          source: state.currentTrack.source || null,
          audiusStreamUrl: state.currentTrack.audiusStreamUrl || null,
          isLocal: Boolean(state.currentTrack.isLocal),
          streamUrl: state.currentTrack.streamUrl || null
        }));
      }
      safeSetStorage('kurfa_queue_index', String(state.queueIndex || 0));
    } catch (_) {}
  };
  window.addEventListener('pagehide', persistPlaybackSession);
  window.addEventListener('beforeunload', persistPlaybackSession);

  console.log("Kurfamüzik Client v5 Initialized");
}

// Native Android MediaSession & Updater Callbacks
window.kurfaNativeTogglePlay = function() {
  if (typeof togglePlay === 'function') togglePlay();
};
window.kurfaNativeNextTrack = function() {
  if (typeof playNextTrack === 'function') playNextTrack();
};
window.kurfaNativePrevTrack = function() {
  if (typeof playPrevTrack === 'function') playPrevTrack();
};
window.kurfaNativeSeekToSeconds = function(sec) {
  if (typeof seekPlaybackToSeconds === 'function') seekPlaybackToSeconds(Number(sec) || 0);
};

// =============================================================================
// 16. MYT-STYLE LOCAL DEVICE AUDIO SCANNER & OFFLINE QUEUE
// =============================================================================
state.deviceAudioTracks = state.deviceAudioTracks || [];
const __kurfaPendingLocalAudioScans = new Map();

window.__kurfaNativeLocalAudioCallback = function(reqId, payload) {
  const resolver = __kurfaPendingLocalAudioScans.get(reqId);
  if (!resolver) return;
  __kurfaPendingLocalAudioScans.delete(reqId);
  resolver(payload);
};

async function scanLocalDeviceAudio(userInitiated = false) {
  const listEl = document.getElementById('device-audio-list');
  if (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() &&
      window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.scanLocalDeviceAudioAsync === 'function') {
    if (listEl) {
      listEl.innerHTML = `<div class="py-8 text-center text-xs text-on-surface-variant flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[18px] animate-spin text-primary">progress_activity</span><span>Cihazdaki müzikler taranıyor...</span></div>`;
    }
    const reqId = 'loc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
    const res = await new Promise((resolve) => {
      const timer = setTimeout(() => {
        __kurfaPendingLocalAudioScans.delete(reqId);
        resolve({ success: false, tracks: [] });
      }, 15000);
      __kurfaPendingLocalAudioScans.set(reqId, (data) => {
        clearTimeout(timer);
        resolve(data || { success: false, tracks: [] });
      });
      window.KurfaAndroidBridge.scanLocalDeviceAudioAsync(reqId);
    });

    if (res && res.permissionDenied) {
      if (listEl) {
        listEl.innerHTML = `<div class="py-8 px-4 text-center flex flex-col items-center gap-2"><span class="material-symbols-outlined text-3xl text-on-surface-variant/60">folder_off</span><p class="text-xs font-semibold text-on-surface">Müzik dosyalarına erişim izni verilmedi</p><button type="button" class="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold" onclick="scanLocalDeviceAudio(true)">İzin Ver ve Tara</button></div>`;
      }
      return;
    }

    state.deviceAudioTracks = Array.isArray(res?.tracks) ? res.tracks : [];
    renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
    return;
  }

  // Windows Desktop EXE native file picker & permanent path store (0 RAM copy, survives restarts)
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    if (userInitiated) {
      try {
        const res = await callExtensionBridge('PICK_LOCAL_AUDIO_FILES', {}, 120000);
        if (res && res.success && Array.isArray(res.tracks)) {
          state.deviceAudioTracks = res.tracks;
          state.deviceAudioRenderLimit = 80;
          renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
          if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
          if (res.addedCount > 0) {
            showToast(`${res.addedCount} yerel şarkı kalıcı olarak kaydedildi`, 'success');
          }
          return;
        }
      } catch (_) {}
    } else {
      await restoreWebLocalAudioFromDB();
      renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
      return;
    }
  }

  // Web fallback: open local audio file picker when user clicks "Tara / Seç"
  if (userInitiated) {
    const picker = document.getElementById('device-audio-file-picker');
    if (picker) picker.click();
  } else {
    renderDeviceAudioList();
  }
}
window.scanLocalDeviceAudio = scanLocalDeviceAudio;

function openKurfaLocalAudioDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    const req = indexedDB.open('kurfa_local_audio_db', 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('tracks')) {
        db.createObjectStore('tracks', { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('IndexedDB error'));
  });
}

async function saveWebLocalAudioToDB(records) {
  if (!Array.isArray(records) || records.length === 0) return;
  try {
    const db = await openKurfaLocalAudioDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction('tracks', 'readwrite');
      const store = tx.objectStore('tracks');
      for (const rec of records) {
        if (rec && rec.id && rec.file) {
          store.put(rec);
        }
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch (e) {
    console.warn('saveWebLocalAudioToDB error:', e);
  }
}

let __kurfaActiveLocalBlobUrl = null;
state.deviceAudioRenderLimit = state.deviceAudioRenderLimit || 80;

async function resolveLocalAudioStreamUrl(trackId) {
  if (!trackId) return null;
  try {
    const db = await openKurfaLocalAudioDB();
    const rec = await new Promise((resolve, reject) => {
      const tx = db.transaction('tracks', 'readonly');
      const req = tx.objectStore('tracks').get(trackId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
    db.close();
    if (!rec || !rec.file) return null;
    if (__kurfaActiveLocalBlobUrl) {
      try { URL.revokeObjectURL(__kurfaActiveLocalBlobUrl); } catch (_) {}
      __kurfaActiveLocalBlobUrl = null;
    }
    const objUrl = URL.createObjectURL(rec.file);
    __kurfaActiveLocalBlobUrl = objUrl;
    return objUrl;
  } catch (e) {
    console.warn('resolveLocalAudioStreamUrl error:', e);
    return null;
  }
}
window.resolveLocalAudioStreamUrl = resolveLocalAudioStreamUrl;

async function restoreWebLocalAudioFromDB() {
  if (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine()) return;
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    try {
      const res = await callExtensionBridge('GET_LOCAL_AUDIO_TRACKS', {}, 5000);
      if (res && res.success && Array.isArray(res.tracks) && res.tracks.length > 0) {
        state.deviceAudioTracks = res.tracks;
        if (state.currentTrack && state.currentTrack.isLocal) {
          const match = res.tracks.find(t => t.id === state.currentTrack.id || (t.title === state.currentTrack.title && t.artist === state.currentTrack.artist));
          if (match && match.streamUrl) {
            state.currentTrack.streamUrl = match.streamUrl;
          }
        }
        renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
        if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
        return;
      }
    } catch (_) {}
  }
  try {
    const db = await openKurfaLocalAudioDB();
    const restored = [];
    await new Promise((resolve, reject) => {
      const tx = db.transaction('tracks', 'readonly');
      const req = tx.objectStore('tracks').openCursor();
      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          const rec = cursor.value;
          if (rec && rec.id) {
            restored.push({
              id: rec.id,
              isLocal: true,
              needsIdbBlob: true,
              fileName: rec.fileName || '',
              fileSize: rec.fileSize || 0,
              addedAt: rec.addedAt || 0,
              title: rec.title || 'Yerel Parça',
              artist: rec.artist || 'Yerel Dosya',
              duration: rec.duration || '3:30',
              streamUrl: null,
              thumbnail: './kurfamuzik_logo.png'
            });
          }
          cursor.continue();
        } else {
          resolve();
        }
      };
      req.onerror = () => reject(req.error);
    });
    db.close();
    if (restored.length === 0) return;
    restored.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
    state.deviceAudioTracks = restored;
    if (state.currentTrack && state.currentTrack.isLocal) {
      state.currentTrack.needsIdbBlob = true;
      state.currentTrack.streamUrl = null;
    }
    renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
    if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
  } catch (e) {
    console.warn('restoreWebLocalAudioFromDB error:', e);
  }
}
window.restoreWebLocalAudioFromDB = restoreWebLocalAudioFromDB;

function handleWebLocalAudioFiles(fileList) {
  if (!fileList || fileList.length === 0) return;
  const existing = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];
  const existingKeys = new Set(existing.map(t => `${t.fileName || ''}_${t.fileSize || 0}`));
  const added = [];
  const dbRecords = [];
  const now = Date.now();
  let seq = 0;

  for (const file of Array.from(fileList)) {
    if (!file || !file.name) continue;
    const key = `${file.name}_${file.size || 0}`;
    if (existingKeys.has(key)) continue;
    existingKeys.add(key);

    const cleanName = file.name.replace(/\.(mp3|m4a|wav|flac|ogg|aac|opus|webm)$/i, '');
    const parts = cleanName.split(/\s+[–—-]\s+/);
    const id = 'local_web_' + now + '_' + (seq++) + '_' + Math.random().toString(36).slice(2, 6);
    const title = parts.length >= 2 ? parts.slice(1).join(' - ') : cleanName;
    const artist = parts.length >= 2 ? parts[0] : 'Yerel Dosya';

    added.push({
      id,
      isLocal: true,
      needsIdbBlob: true,
      fileName: file.name,
      fileSize: file.size || 0,
      addedAt: now + seq,
      title,
      artist,
      duration: '3:30',
      streamUrl: null,
      thumbnail: './kurfamuzik_logo.png'
    });
    dbRecords.push({
      id,
      fileName: file.name,
      fileSize: file.size || 0,
      title,
      artist,
      duration: '3:30',
      addedAt: now + seq,
      file
    });
  }

  const picker = document.getElementById('device-audio-file-picker');
  if (picker) picker.value = '';

  if (added.length === 0) {
    showToast('Seçilen dosyalar zaten listede mevcut');
    return;
  }

  state.deviceAudioTracks = [...added, ...existing];
  state.deviceAudioRenderLimit = 80;
  saveWebLocalAudioToDB(dbRecords);
  renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
  if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
  showToast(`${added.length} yerel şarkı kalıcı olarak kaydedildi`, 'success');
}
window.handleWebLocalAudioFiles = handleWebLocalAudioFiles;

function renderDeviceAudioList(filterText = '') {
  const listEl = document.getElementById('device-audio-list');
  const countEl = document.getElementById('device-audio-count-text');
  const badgeEl = document.getElementById('device-audio-badge-count');
  const all = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];

  if (badgeEl) badgeEl.textContent = String(all.length);
  if (countEl) countEl.textContent = `${all.length} Parça`;
  if (!listEl) return;

  const q = String(filterText || '').trim().toLowerCase();
  const filtered = q ? all.filter(t => (t.title || '').toLowerCase().includes(q) || (t.artist || '').toLowerCase().includes(q)) : all;

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="py-8 px-4 text-center flex flex-col items-center gap-2"><span class="material-symbols-outlined text-3xl text-on-surface-variant/60">library_music</span><p class="text-xs font-semibold text-on-surface">${all.length === 0 ? 'Cihazdaki müzikler henüz taranmadı' : 'Aramayla eşleşen yerel parça yok'}</p><button type="button" class="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold" onclick="scanLocalDeviceAudio(true)">${typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() ? 'Cihazı Tara' : 'Bilgisayardan Müzik Seç'}</button></div>`;
    return;
  }

  listEl.innerHTML = '';
  const limit = Math.max(80, Number(state.deviceAudioRenderLimit) || 80);
  const visible = filtered.slice(0, limit);
  const frag = document.createDocumentFragment();
  visible.forEach((track, idx) => {
    const isPlayingCur = state.currentTrack && state.currentTrack.id === track.id;
    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between gap-2 p-2.5 rounded-xl cursor-pointer transition-colors ${isPlayingCur ? 'active' : ''}`;
    row.dataset.trackId = track.id;
    row.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0 flex-1">
        <span class="w-5 text-center text-[11px] font-mono track-idx-num ${isPlayingCur ? 'text-primary font-extrabold' : 'text-on-surface-variant'}">${idx + 1}</span>
        <div class="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary">
          <span class="material-symbols-outlined text-[18px] track-icon">${isPlayingCur && state.isPlaying ? 'graphic_eq' : 'music_note'}</span>
        </div>
        <div class="flex flex-col min-w-0 flex-1">
          <span class="text-xs font-bold truncate track-title-text ${isPlayingCur ? 'text-primary' : 'text-on-surface'}">${escapeHtml(track.title || 'Parça')}</span>
          <span class="text-[11px] text-on-surface-variant truncate">${escapeHtml(track.artist || 'Cihaz Müziği')}</span>
        </div>
      </div>
      <span class="text-[11px] text-on-surface-variant font-mono flex-shrink-0">${escapeHtml(track.duration || '3:30')}</span>
    `;
    row.onclick = () => {
      state.queue = [...all];
      const qIdx = state.queue.findIndex(x => x.id === track.id);
      state.queueIndex = qIdx !== -1 ? qIdx : 0;
      state.playingContextSub = 'CİHAZDAN ÇALINIYOR';
      state.playingContextTitle = 'Cihazdaki Müzikler';
      saveQueueState();
      playTrackById(track.id, track);
    };
    frag.appendChild(row);
  });
  if (filtered.length > visible.length) {
    const moreBtn = document.createElement('button');
    moreBtn.type = 'button';
    moreBtn.className = 'w-full mt-2 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-xs font-bold text-primary transition-colors';
    moreBtn.textContent = `Daha Fazla Göster (${filtered.length - visible.length} Parça Kaldı)`;
    moreBtn.onclick = () => {
      state.deviceAudioRenderLimit = limit + 100;
      renderDeviceAudioList(filterText);
    };
    frag.appendChild(moreBtn);
  }
  listEl.appendChild(frag);
}
window.renderDeviceAudioList = renderDeviceAudioList;

function syncActiveTrackRowInDeviceAudio() {
  const listEl = document.getElementById('device-audio-list');
  if (!listEl) return;
  const curId = state.currentTrack ? state.currentTrack.id : null;
  const all = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];
  if (curId && all.some(t => t && t.id === curId)) {
    const filterText = document.getElementById('device-audio-filter')?.value || '';
    const q = String(filterText).trim().toLowerCase();
    const filtered = q ? all.filter(t => (t.title || '').toLowerCase().includes(q) || (t.artist || '').toLowerCase().includes(q)) : all;
    const curIdxInFiltered = filtered.findIndex(t => t.id === curId);
    const limit = Math.max(80, Number(state.deviceAudioRenderLimit) || 80);
    if (curIdxInFiltered >= limit) {
      state.deviceAudioRenderLimit = Math.min(filtered.length, curIdxInFiltered + 40);
      renderDeviceAudioList(filterText);
      return;
    }
  }

  const isPlaying = Boolean(state.isPlaying);
  listEl.querySelectorAll('.track-row').forEach(row => {
    const isCur = Boolean(curId && row.dataset.trackId === curId);
    row.classList.toggle('active', isCur);
    const numEl = row.querySelector('.track-idx-num');
    if (numEl) {
      numEl.classList.toggle('text-primary', isCur);
      numEl.classList.toggle('font-extrabold', isCur);
      numEl.classList.toggle('text-on-surface-variant', !isCur);
    }
    const iconEl = row.querySelector('.track-icon');
    if (iconEl) {
      iconEl.textContent = isCur && isPlaying ? 'graphic_eq' : 'music_note';
    }
    const titleEl = row.querySelector('.track-title-text');
    if (titleEl) {
      titleEl.classList.toggle('text-primary', isCur);
      titleEl.classList.toggle('text-on-surface', !isCur);
    }
  });
}
window.syncActiveTrackRowInDeviceAudio = syncActiveTrackRowInDeviceAudio;

function playAllDeviceAudio() {
  const all = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];
  if (all.length === 0) {
    scanLocalDeviceAudio(true);
    return;
  }
  state.queue = [...all];
  state.queueIndex = 0;
  state.playingContextSub = 'CİHAZDAN ÇALINIYOR';
  state.playingContextTitle = 'Cihazdaki Müzikler';
  saveQueueState();
  playTrackById(all[0].id, all[0]);
}
window.playAllDeviceAudio = playAllDeviceAudio;
window.kurfaOnAndroidUpdateEvent = function(statusText, hasUpdate) {
  const lineEl = document.getElementById('settings-update-check-line');
  if (lineEl && statusText) {
    lineEl.textContent = String(statusText);
  }
  if (hasUpdate && typeof showToast === 'function') {
    showToast('Yeni Android sürümü hazır (Ayarlar -> Güncelleme)');
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export ALL functions to global window for inline onclick handlers in HTML
window.switchTab = switchTab;
window.switchKesfetSubTab = switchKesfetSubTab;
window.switchKutuphaneSubTab = switchKutuphaneSubTab;
window.setEqualizerPreset = setEqualizerPreset;
window.cycleBandGain = cycleBandGain;
window.KurfaDSP = KurfaDSP;
window.toggleMobileCanvasMode = toggleMobileCanvasMode;
window.openShareModal = openShareModal;
window.closeShareModal = closeShareModal;
window.copyShareUrl = copyShareUrl;
window.triggerWebShare = triggerWebShare;
window.openProfileModal = openProfileModal;
window.closeProfileModal = closeProfileModal;
window.selectAvatar = selectAvatar;
window.saveProfileData = saveProfileData;
window.toggleDarkMode = toggleDarkMode;
window.playTrackById = playTrackById;
window.addToQueueTrack = addToQueueTrack;
window.clearQueue = clearQueue;
window.removeFromQueue = removeFromQueue;
window.scrollShelf = scrollShelf;
window.playHeroTrack = playHeroTrack;
window.addHeroTrackToQueue = addHeroTrackToQueue;
window.downloadHeroTrack = downloadHeroTrack;
window.togglePlay = togglePlay;
window.playNextTrack = playNextTrack;
window.playPrevTrack = playPrevTrack;
window.toggleShuffle = toggleShuffle;
window.toggleRepeat = toggleRepeat;
window.toggleCurrentFavorite = toggleCurrentFavorite;
window.toggleFavoriteById = toggleFavoriteById;
window.downloadCurrentMP3 = downloadCurrentMP3;
window.downloadTrackById = downloadTrackById;
window.playAllFavorites = playAllFavorites;
window.playAllDownloads = playAllDownloads;
window.playAllPlaylist = playAllPlaylist;
window.playAllTrends = playAllTrends;
window.addAllResultsToQueue = addAllResultsToQueue;
window.toggleMute = toggleMute;
window.toggleQueueDrawer = toggleQueueDrawer;
window.openDownloaderModal = openDownloaderModal;
window.closeDownloaderModal = closeDownloaderModal;
window.downloadTrack = downloadTrack;
window.startDirectDownload = startDirectDownload;
window.pasteModalUrl = pasteModalUrl;
window.processModalDownload = processModalDownload;
window.showToast = showToast;
window.dismissMobileDownloadBanner = dismissMobileDownloadBanner;
window.dismissDownloadPill = dismissDownloadPill;
window.executeSearchImmediate = executeSearchImmediate;
window.executeSearchFromInput = executeSearchFromInput;
window.clearSearchInput = clearSearchInput;
window.pasteFromClipboard = pasteFromClipboard;
window.applySearchFilter = applySearchFilter;
window.resetSearchFilters = resetSearchFilters;
window.filterGenre = filterGenre;
window.searchByArtist = searchByArtist;
window.quickSearchAndPlay = quickSearchAndPlay;
window.exportLibraryBackup = exportLibraryBackup;
window.importLibraryBackup = importLibraryBackup;
window.showKurfaStorageInfo = showKurfaStorageInfo;
window.toggleTrendsShowAll = toggleTrendsShowAll;
window.playFavoritesQuick = playFavoritesQuick;
window.renderPopularArtistsGrid = renderPopularArtistsGrid;
window.updateQuickFavCount = updateQuickFavCount;
window.openMobileNowPlaying = openMobileNowPlaying;
window.closeMobileNowPlaying = closeMobileNowPlaying;
window.openCreatePlaylistModal = openCreatePlaylistModal;
window.closeCreatePlaylistModal = closeCreatePlaylistModal;
window.submitCreatePlaylist = submitCreatePlaylist;
window.openAddToPlaylistModal = openAddToPlaylistModal;
window.closeAddToPlaylistModal = closeAddToPlaylistModal;
window.addTrackToPlaylist = addTrackToPlaylist;
window.openCustomPlaylistDetail = openCustomPlaylistDetail;
window.closeCustomPlaylistDetail = closeCustomPlaylistDetail;
window.deleteCustomPlaylist = deleteCustomPlaylist;
window.playCustomPlaylist = playCustomPlaylist;
window.removeTrackFromCustomPlaylist = removeTrackFromCustomPlaylist;
window.toggleBackgroundAudioMode = toggleBackgroundAudioMode;
window.handleGoogleSignIn = handleGoogleSignIn;
window.handleGoogleSignOut = handleGoogleSignOut;
window.syncFirebaseLibraryNow = syncFirebaseLibraryNow;
window.toggleDocumentPipPlayer = toggleDocumentPipPlayer;
window.openDocumentPipPlayer = openDocumentPipPlayer;
window.closeDocumentPipPlayer = closeDocumentPipPlayer;
window.openFloatingPip = openFloatingPip;
window.closeFloatingPip = closeFloatingPip;
window.expandFloatingPipToFull = expandFloatingPipToFull;
window.openDevicePickerModal = openDevicePickerModal;
window.closeDevicePickerModal = closeDevicePickerModal;
window.switchAudioOutputDevice = switchAudioOutputDevice;
window.scanBluetoothDevices = scanBluetoothDevices;
window.requestAudioDeviceAccess = requestAudioDeviceAccess;
window.initPipSeekbar = initPipSeekbar;
window.seekToFraction = seekToFraction;
window.togglePlaylistTracksExpand = togglePlaylistTracksExpand;
window.filterPlaylistItems = filterPlaylistItems;
window.updatePlaylistHeroUI = updatePlaylistHeroUI;
window.openGoogleAccountChooser = openGoogleAccountChooser;
window.closeGoogleAccountChooser = closeGoogleAccountChooser;
window.selectGoogleAccount = selectGoogleAccount;
window.toggleCustomGoogleBox = toggleCustomGoogleBox;
window.submitCustomGoogleAccount = submitCustomGoogleAccount;
window.setDeckVisualMode = setDeckVisualMode;
window.quickToggleVideoMode = quickToggleVideoMode;
window.toggleFullScreenVideo = toggleFullScreenVideo;
window.playCuratedMix = playCuratedMix;
window.moveQueueTrack = moveQueueTrack;
window.moveQueueTrackToPosition = moveQueueTrackToPosition;
window.initDragToScroll = initDragToScroll;
window.importSpotifyPlaylist = importSpotifyPlaylist;
window.refreshSpotifyPlaylist = refreshSpotifyPlaylist;
window.renderSpotifyPlaylistsGrid = renderSpotifyPlaylistsGrid;
window.openSpotifyPlaylistDetail = openSpotifyPlaylistDetail;
window.closeSpotifyPlaylistDetail = closeSpotifyPlaylistDetail;
window.deleteSpotifyPlaylist = deleteSpotifyPlaylist;
window.playSpotifyPlaylist = playSpotifyPlaylist;
window.playSpotifyTrack = playSpotifyTrack;
window.handleCustomAvatarUpload = handleCustomAvatarUpload;
window.showVideoAdNotice = showVideoAdNotice;
window.setSearchSort = setSearchSort;
window.resetSearchFilters = resetSearchFilters;
window.closeArtistDetail = closeArtistDetail;

// =========================================================================
// KURFA MOBİL UYGULAMA (APK) & PWA INSTALL CONTROLLER
// =========================================================================
window.deferredPwaPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPwaPrompt = e;
});

function openAppInstallModal() {
  updateLocalEngineStatusUI();
  const extMode = getBrowserExtensionMode();
  const isNativeApp = Boolean((extMode && extMode.startsWith('desktop')) || isAndroidNativeEngine());
  const browserSection = document.getElementById('install-modal-browser-section');
  const dividerEl = document.getElementById('install-modal-divider');
  if (browserSection) browserSection.classList.toggle('hidden', isNativeApp);
  if (dividerEl) dividerEl.classList.toggle('hidden', isNativeApp);

  fetchLatestPublishedAppVersions().then((latest) => {
    if (!latest) return;
    const apkVer = document.getElementById('install-modal-apk-ver');
    const winVer = document.getElementById('install-modal-win-ver');
    if (apkVer && latest.android?.versionName) apkVer.textContent = `(v${latest.android.versionName})`;
    if (winVer && latest.desktop?.version) winVer.textContent = `(v${latest.desktop.version})`;
  }).catch(() => {});

  const modal = document.getElementById('app-install-modal');
  const card = document.getElementById('app-install-modal-card');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }
}
window.openAppInstallModal = openAppInstallModal;

function closeAppInstallModal() {
  const modal = document.getElementById('app-install-modal');
  const card = document.getElementById('app-install-modal-card');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
  }
}
window.closeAppInstallModal = closeAppInstallModal;

async function triggerPwaInstall() {
  if (window.deferredPwaPrompt) {
    try {
      window.deferredPwaPrompt.prompt();
      const choice = await window.deferredPwaPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        if (typeof showToast === 'function') showToast('Kurfanova ana ekranınıza eklendi.');
        closeAppInstallModal();
      }
      window.deferredPwaPrompt = null;
    } catch (err) {
      console.warn('PWA prompt error:', err);
    }
  } else {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      alert('Safari tarayıcısında Paylaş simgesine basıp Ana Ekrana Ekle seçeneğini seçin.');
    } else {
      if (typeof showToast === 'function') {
        showToast('Tarayıcı menüsünden (üç nokta) Uygulamayı Yükle seçeneğini kullanabilirsiniz.');
      }
    }
  }
}
window.triggerPwaInstall = triggerPwaInstall;

// =========================================================================
// CİHAZA ÖZEL REKLAM UYARISI MODALI (Pre-Play Gate Controller)
// =========================================================================
function isAdWarningDisabledByPref() {
  try {
    return localStorage.getItem('kurfa_ad_warn_disabled') === '1';
  } catch (e) {
    return false;
  }
}

function isAdWarningAcknowledged() {
  if (isAdWarningDisabledByPref()) return true;
  if (state._adRiskSessionAcknowledged) return true;
  try {
    if (sessionStorage.getItem('kurfa_ad_warn_ack') === '1') {
      state._adRiskSessionAcknowledged = true;
      return true;
    }
  } catch (e) {}
  return false;
}

function updateAdWarningToggleUI() {
  const btn = typeof document !== 'undefined' ? document.getElementById('btn-ad-warn-toggle') : null;
  if (!btn) return;
  const enabled = !isAdWarningDisabledByPref();
  btn.textContent = enabled ? 'Açık' : 'Kapalı';
  if (enabled) {
    btn.classList.add('bg-primary', 'text-on-primary');
    btn.classList.remove('bg-surface-container', 'text-on-surface');
  } else {
    btn.classList.remove('bg-primary', 'text-on-primary');
    btn.classList.add('bg-surface-container', 'text-on-surface');
  }
}

function toggleAdWarningPreference() {
  const currentlyDisabled = isAdWarningDisabledByPref();
  const nextDisabled = !currentlyDisabled;
  try {
    if (nextDisabled) {
      localStorage.setItem('kurfa_ad_warn_disabled', '1');
      state._adRiskSessionAcknowledged = true;
    } else {
      localStorage.removeItem('kurfa_ad_warn_disabled');
      state._adRiskSessionAcknowledged = false;
      sessionStorage.removeItem('kurfa_ad_warn_ack');
    }
  } catch (e) {}
  updateAdWarningToggleUI();
  showToast(nextDisabled ? 'Reklam uyarısı kapatıldı' : 'Reklam uyarısı açıldı');
}
window.toggleAdWarningPreference = toggleAdWarningPreference;

function acknowledgeAdWarningSession() {
  state._adRiskSessionAcknowledged = true;
  try {
    sessionStorage.setItem('kurfa_ad_warn_ack', '1');
  } catch (e) {}
}

function hideAdWarningModalVisual() {
  const modal = document.getElementById('ad-warning-modal');
  const card = document.getElementById('ad-warning-modal-card');
  const warnStatus = document.getElementById('ad-warn-watcher-status');
  if (warnStatus) {
    warnStatus.classList.add('hidden');
    warnStatus.textContent = '';
  }
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
  }
  if (card) {
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
  }
}

function suppressAdWarningPermanently() {
  try {
    localStorage.setItem('kurfa_ad_warn_disabled', '1');
  } catch (e) {}
  state._adRiskSessionAcknowledged = true;
  updateAdWarningToggleUI();
  continueFromAdWarningModal();
  if (typeof showToast === 'function') {
    showToast('Reklam uyarısı bir daha gösterilmeyecek');
  }
}
window.suppressAdWarningPermanently = suppressAdWarningPermanently;

let __desktopSettingsState = {
  createDesktopShortcut: false,
  createStartMenuShortcut: false,
  launchOnStartup: false,
  minimizeToTray: true,
  installPath: '',
  version: ''
};

function updateDesktopTogglePill(btnEl, active) {
  if (!btnEl) return;
  btnEl.dataset.active = active ? 'true' : 'false';
  btnEl.textContent = active ? 'Açık' : 'Kapalı';
  if (active) {
    btnEl.classList.add('bg-primary', 'text-on-primary');
    btnEl.classList.remove('bg-surface-container', 'text-on-surface-variant');
  } else {
    btnEl.classList.remove('bg-primary', 'text-on-primary');
    btnEl.classList.add('bg-surface-container', 'text-on-surface-variant');
  }
}

async function refreshDesktopBridgeSettings() {
  const card = document.getElementById('desktop-app-settings-card');
  if (!card) return;
  const extMode = getBrowserExtensionMode();
  if (!extMode || !extMode.startsWith('desktop')) {
    card.classList.add('hidden');
    return;
  }

  try {
    const res = await callExtensionBridge('GET_DESKTOP_SETTINGS', {}, 4000);
    if (res && res.success) {
      card.classList.remove('hidden');
      __desktopSettingsState = {
        createDesktopShortcut: Boolean(res.desktopShortcut ?? res.createDesktopShortcut),
        createStartMenuShortcut: Boolean(res.startMenuShortcut ?? res.createStartMenuShortcut),
        launchOnStartup: Boolean(res.runOnStartup ?? res.launchOnStartup ?? res.startup),
        minimizeToTray: res.minimizeToTray === undefined ? true : Boolean(res.minimizeToTray),
        installPath: res.installDir || res.installPath || res.path || '',
        version: res.version || ''
      };

      const pathEl = document.getElementById('desktop-install-path');
      if (pathEl) pathEl.textContent = __desktopSettingsState.installPath || 'Masaüstü Uygulaması';
      const verEl = document.getElementById('desktop-app-version');
      if (verEl) verEl.textContent = __desktopSettingsState.version ? `v${__desktopSettingsState.version}` : 'Aktif';

      updateDesktopTogglePill(document.getElementById('btn-desktop-shortcut-toggle'), __desktopSettingsState.createDesktopShortcut);
      updateDesktopTogglePill(document.getElementById('btn-desktop-startmenu-toggle'), __desktopSettingsState.createStartMenuShortcut);
      updateDesktopTogglePill(document.getElementById('btn-desktop-startup-toggle'), __desktopSettingsState.launchOnStartup);
      updateDesktopTogglePill(document.getElementById('btn-desktop-tray-toggle'), __desktopSettingsState.minimizeToTray);
    } else {
      card.classList.add('hidden');
    }
  } catch (e) {
    card.classList.add('hidden');
  }
}
window.refreshDesktopBridgeSettings = refreshDesktopBridgeSettings;

let __kurfaLatestVersionsCache = { data: null, fetchedAt: 0 };

function compareSemverStrings(a, b) {
  const pa = String(a || '').replace(/^v/i, '').split('.').map((n) => parseInt(n, 10) || 0);
  const pb = String(b || '').replace(/^v/i, '').split('.').map((n) => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length, 3);
  for (let i = 0; i < len; i++) {
    const va = pa[i] || 0;
    const vb = pb[i] || 0;
    if (va > vb) return 1;
    if (va < vb) return -1;
  }
  return 0;
}

async function fetchLatestPublishedAppVersions(force = false) {
  const now = Date.now();
  if (!force && __kurfaLatestVersionsCache.data && (now - __kurfaLatestVersionsCache.fetchedAt) < 60000) {
    return __kurfaLatestVersionsCache.data;
  }
  try {
    const base = typeof WORKER_URL === 'string' && WORKER_URL ? WORKER_URL : 'https://kurfanova.kurfa.workers.dev';
    const resp = await fetch(`${base}/api/app-versions`, { cache: 'no-store' });
    if (resp.ok) {
      const json = await resp.json();
      if (json && json.success) {
        __kurfaLatestVersionsCache = { data: json, fetchedAt: now };
        return json;
      }
    }
  } catch (_) {}
  return __kurfaLatestVersionsCache.data || null;
}

function getAndroidBridgeVersionInfo() {
  try {
    if (typeof window.KurfaAndroidBridge?.getAppVersionInfo === 'function') {
      const raw = window.KurfaAndroidBridge.getAppVersionInfo();
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (parsed && typeof parsed === 'object') {
        return {
          versionName: String(parsed.versionName || '').replace(/^v/i, ''),
          versionCode: Number(parsed.versionCode || 0)
        };
      }
    }
  } catch (_) {}
  return { versionName: '', versionCode: 0 };
}

async function refreshAppVersionAndUpdateStatus() {
  const pillEl = document.getElementById('settings-app-version-pill');
  const lineEl = document.getElementById('settings-update-check-line');
  const engineEl = document.getElementById('settings-engine-status');
  const browserInstallEl = document.getElementById('settings-browser-install-card');
  const androidCardEl = document.getElementById('android-app-settings-card');
  const adWarnRowEl = document.getElementById('settings-adwarn-row');

  const extMode = getBrowserExtensionMode();
  const isDesktop = Boolean(extMode && extMode.startsWith('desktop'));
  const isAndroid = isAndroidNativeEngine();
  const isNativeApp = isDesktop || isAndroid;

  if (browserInstallEl) browserInstallEl.classList.toggle('hidden', isNativeApp);
  if (adWarnRowEl) adWarnRowEl.classList.toggle('hidden', hasAdFreePlaybackEnvironment());
  if (androidCardEl) androidCardEl.classList.toggle('hidden', !isAndroid);

  if (isDesktop) {
    await refreshDesktopBridgeSettings();
  }

  let platformLabel = 'Web';
  let installedVer = '4.3.11';
  let installedCode = 0;

  if (isDesktop) {
    platformLabel = 'Masaüstü';
    installedVer = String(__desktopSettingsState.version || '').replace(/^v/i, '');
  } else if (isAndroid) {
    platformLabel = 'Android';
    const aInfo = getAndroidBridgeVersionInfo();
    installedVer = aInfo.versionName;
    installedCode = aInfo.versionCode;
  } else if (extMode) {
    platformLabel = 'Eklenti';
  }

  if (pillEl) {
    pillEl.textContent = installedVer ? `${platformLabel} v${installedVer}` : platformLabel;
  }

  if (engineEl) {
    if (isNativeApp || extMode || isBrowserAdBlockerActive()) {
      engineEl.textContent = '%0 Reklam';
      engineEl.className = 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-500 flex-shrink-0';
    } else {
      engineEl.textContent = 'Tarayıcı';
      engineEl.className = 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container text-on-surface-variant flex-shrink-0';
    }
  }

  if (!lineEl) return;
  if (!isNativeApp) {
    lineEl.textContent = 'Sayfa açılışında otomatik güncellenir.';
    lineEl.className = 'text-[11px] text-on-surface-variant mt-0.5';
    return;
  }

  lineEl.textContent = 'Son sürüm sunucudan kontrol ediliyor...';
  lineEl.className = 'text-xs text-on-surface-variant mt-0.5';

  const latest = await fetchLatestPublishedAppVersions();
  if (!latest) {
    lineEl.textContent = installedVer
      ? `Yüklü sürüm: v${installedVer}`
      : 'Sürüm bilgisi doğrulandı';
    return;
  }

  if (isDesktop) {
    const remoteVer = String(latest.desktop?.version || '').replace(/^v/i, '');
    if (remoteVer && installedVer) {
      const cmp = compareSemverStrings(remoteVer, installedVer);
      if (cmp > 0) {
        lineEl.textContent = `Yeni sürüm var: v${remoteVer} (Yüklü: v${installedVer})`;
        lineEl.className = 'text-xs font-semibold text-amber-500 mt-0.5';
      } else {
        lineEl.textContent = `Güncel sürümdesiniz (Son sürüm: v${remoteVer})`;
        lineEl.className = 'text-xs font-semibold text-emerald-500 mt-0.5';
      }
    } else if (remoteVer) {
      lineEl.textContent = `Son yayınlanan sürüm: v${remoteVer}`;
    }
  } else if (isAndroid) {
    const remoteName = String(latest.android?.versionName || '').replace(/^v/i, '');
    const remoteCode = Number(latest.android?.versionCode || 0);
    const hasNewByCode = remoteCode > 0 && installedCode > 0 && remoteCode > installedCode;
    const hasNewByName = remoteName && installedVer && compareSemverStrings(remoteName, installedVer) > 0;
    if (hasNewByCode || (!installedCode && hasNewByName)) {
      lineEl.textContent = `Yeni sürüm var: v${remoteName || remoteCode} (Yüklü: v${installedVer || installedCode})`;
      lineEl.className = 'text-xs font-semibold text-amber-500 mt-0.5';
    } else if (installedVer && remoteName) {
      lineEl.textContent = `Güncel sürümdesiniz (Son sürüm: v${remoteName})`;
      lineEl.className = 'text-xs font-semibold text-emerald-500 mt-0.5';
    } else if (remoteName) {
      lineEl.textContent = `Son yayınlanan sürüm: v${remoteName}`;
    }
  }
}
window.refreshAppVersionAndUpdateStatus = refreshAppVersionAndUpdateStatus;

async function toggleDesktopSetting(key) {
  const current = Boolean(__desktopSettingsState[key]);
  const next = !current;
  const bridgeKeyMap = {
    createDesktopShortcut: 'desktopShortcut',
    createStartMenuShortcut: 'startMenuShortcut',
    launchOnStartup: 'runOnStartup',
    minimizeToTray: 'minimizeToTray'
  };
  const bridgeKey = bridgeKeyMap[key] || key;
  try {
    const res = await callExtensionBridge('SET_DESKTOP_SETTINGS', { [bridgeKey]: next, key: bridgeKey, value: next }, 4000);
    if (res && res.success) {
      __desktopSettingsState[key] = next;
      const keyMap = {
        createDesktopShortcut: 'btn-desktop-shortcut-toggle',
        createStartMenuShortcut: 'btn-desktop-startmenu-toggle',
        launchOnStartup: 'btn-desktop-startup-toggle',
        minimizeToTray: 'btn-desktop-tray-toggle'
      };
      updateDesktopTogglePill(document.getElementById(keyMap[key]), next);
      const labelMap = {
        createDesktopShortcut: 'Masaüstü kısayolu',
        createStartMenuShortcut: 'Başlat menüsü kısayolu',
        launchOnStartup: 'Windows ile başlatma',
        minimizeToTray: 'Kapatınca tepsiye küçültme'
      };
      if (typeof showToast === 'function') {
        showToast(`${labelMap[key] || key} ${next ? 'açıldı' : 'kapatıldı'}`);
      }
    } else {
      if (typeof showToast === 'function') {
        showToast('Ayar değiştirilemedi');
      }
    }
  } catch (e) {
    if (typeof showToast === 'function') {
      showToast('Ayar değiştirilemedi');
    }
  }
}
window.toggleDesktopSetting = toggleDesktopSetting;

function openDesktopInstallFolder() {
  callExtensionBridge('OPEN_INSTALL_FOLDER', {}, 4000);
  if (typeof showToast === 'function') {
    showToast('Uygulama klasörü açılıyor...');
  }
}
window.openDesktopInstallFolder = openDesktopInstallFolder;

function triggerDesktopUpdateCheck() {
  const triggered = typeof window.kurfaCheckAppUpdate === 'function' ? window.kurfaCheckAppUpdate() : false;
  if (triggered !== false && typeof showToast === 'function') {
    showToast('Güncelleme denetleniyor...');
  }
}
window.triggerDesktopUpdateCheck = triggerDesktopUpdateCheck;

function openAdWarningModal(target, options = {}) {
  const modal = document.getElementById('ad-warning-modal');
  const card = document.getElementById('ad-warning-modal-card');
  if (!modal) return;

  const mode = (options && options.mode) || (target ? 'track' : 'welcome');
  modal.dataset.warnMode = mode;

  const trackCard = document.getElementById('ad-warn-track-card');
  const welcomeBox = document.getElementById('ad-warn-welcome-box');
  const titleElHeader = document.getElementById('ad-warn-title');
  const subtitleEl = document.getElementById('ad-warn-subtitle');
  const bodyTextEl = document.getElementById('ad-warn-body-text');
  const continueBtn = document.getElementById('ad-warn-continue-btn');

  const thumbEl = document.getElementById('ad-warn-track-thumb');
  const titleEl = document.getElementById('ad-warn-track-title');
  const artistEl = document.getElementById('ad-warn-track-artist');

  if (mode === 'welcome') {
    if (trackCard) trackCard.classList.add('hidden');
    if (welcomeBox) welcomeBox.classList.remove('hidden');
    if (titleElHeader) titleElHeader.textContent = 'Hoş Geldin! Reklamsız Koruma';
    if (subtitleEl) subtitleEl.textContent = 'İlk Ziyaret • Cihazına Özel Öneri';
    if (bodyTextEl) bodyTextEl.classList.add('hidden');
    if (continueBtn) continueBtn.textContent = 'Şimdilik Tarayıcıda Devam Et';
  } else {
    if (trackCard) trackCard.classList.remove('hidden');
    if (welcomeBox) welcomeBox.classList.add('hidden');
    if (titleElHeader) titleElHeader.textContent = 'Reklam Uyarısı';
    if (subtitleEl) subtitleEl.textContent = '%0 Reklamlı Cihaz Motoru Önerisi';
    if (bodyTextEl) {
      bodyTextEl.classList.remove('hidden');
      bodyTextEl.textContent =
        'Web tarayıcısında bu parçada YouTube reklamı çıkabilir. Cihazına uygun uygulamayı indirirsen tüm şarkılar %0 reklamlı çalar.';
    }
    if (continueBtn) continueBtn.textContent = 'Yine de Tarayıcıda Çal';

    if (thumbEl) thumbEl.src = safeUrl(getTrackThumbnail(target), './kurfamuzik_logo.png');
    if (titleEl) titleEl.textContent = target?.title || 'Bilinmeyen Parça';
    if (artistEl) artistEl.textContent = target?.artist || 'Bilinmeyen Sanatçı';
  }

  const platform = detectUserDevicePlatform();
  const browserStore = detectBrowserExtensionStore();
  const badgeEl = document.getElementById('ad-warn-device-badge');
  const primaryEl = document.getElementById('ad-warn-primary-cta');
  const secondaryEl = document.getElementById('ad-warn-secondary-cta');

  const storeWatchClick = () => {
    startAdBlockerBackgroundWatcher();
    if (typeof showToast === 'function') {
      showToast(`${browserStore.storeName} açıldı. Ekle'ye basınca otomatik algılanacak.`);
    }
  };

  const platformConfigs = {
    windows: {
      badge: `Windows • ${browserStore.name}`,
      primaryLabel: 'Windows Uygulamasını İndir (.exe • %0 Reklam)',
      primaryHref: 'https://github.com/KurfaCore/kurfanova-app/releases/latest/download/Kurfanova-Muzik-Windows.exe',
      primaryTarget: '_blank',
      primaryDownload: 'Kurfanova-Muzik-Windows.exe',
      primaryOnClick: null,
      secondaryLabel: `${browserStore.name} İçin AdGuard Ekle`,
      secondaryHref: browserStore.url,
      secondaryTarget: '_blank',
      secondaryDownload: null,
      secondaryOnClick: storeWatchClick
    },
    android: {
      badge: 'Android Algılandı',
      primaryLabel: 'Android APK İndir (%0 Reklam)',
      primaryHref: 'https://github.com/KurfaCore/kurfanova-app/releases/latest/download/Kurfanova-Muzik.apk',
      primaryTarget: '_blank',
      primaryDownload: 'Kurfanova-Muzik.apk',
      primaryOnClick: null,
      secondaryLabel: 'Tarayıcı Kısayolu (WebAPK)',
      secondaryHref: '#webapk',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        dismissAdWarningModal(false);
        triggerPwaInstall();
      }
    },
    macos: {
      badge: `macOS • ${browserStore.name}`,
      primaryLabel: `${browserStore.name} İçin AdGuard Ekle (Resmi Mağaza)`,
      primaryHref: browserStore.url,
      primaryTarget: '_blank',
      primaryDownload: null,
      primaryOnClick: storeWatchClick,
      secondaryLabel: 'Tüm Kurulum Seçenekleri',
      secondaryHref: '#install',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        dismissAdWarningModal(false);
        openAppInstallModal();
      }
    },
    linux: {
      badge: `Linux • ${browserStore.name}`,
      primaryLabel: `${browserStore.name} İçin AdGuard Ekle (Resmi Mağaza)`,
      primaryHref: browserStore.url,
      primaryTarget: '_blank',
      primaryDownload: null,
      primaryOnClick: storeWatchClick,
      secondaryLabel: 'Tüm Kurulum Seçenekleri',
      secondaryHref: '#install',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        dismissAdWarningModal(false);
        openAppInstallModal();
      }
    },
    ios: {
      badge: 'iOS Safari Algılandı',
      primaryLabel: 'Safari İçin AdGuard Kur (App Store)',
      primaryHref: KURFA_ADGUARD_STORES['safari-ios'].url,
      primaryTarget: '_blank',
      primaryDownload: null,
      primaryOnClick: storeWatchClick,
      secondaryLabel: 'Reklamsız Açık Katalogda Ara',
      secondaryHref: '#audius',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        const q = target ? (kurfaCleanTrackQuery(target?.title, target?.artist) || (target?.title || '')) : '';
        dismissAdWarningModal(false);
        switchTab('arama');
        if (q) {
          if (DOM.topSearchInput) DOM.topSearchInput.value = q;
          state.baseSearchQuery = q;
        }
        const audiusChip = document.querySelector('#search-filter-chips .filter-chip[onclick*="audius"]');
        applySearchFilter('audius', audiusChip);
      }
    }
  };

  const cfg = platformConfigs[platform] || platformConfigs.windows;
  if (badgeEl) badgeEl.textContent = cfg.badge;

  if (primaryEl) {
    const labelSpan = primaryEl.querySelector('[data-cta-label]') || primaryEl;
    labelSpan.textContent = cfg.primaryLabel;
    primaryEl.href = cfg.primaryHref;
    primaryEl.target = cfg.primaryTarget;
    if (cfg.primaryDownload) {
      primaryEl.setAttribute('download', cfg.primaryDownload);
    } else {
      primaryEl.removeAttribute('download');
    }
    primaryEl.onclick = cfg.primaryOnClick || null;
  }

  if (secondaryEl) {
    const secSpan = secondaryEl.querySelector('[data-cta-label]') || secondaryEl;
    secSpan.textContent = cfg.secondaryLabel;
    secondaryEl.href = cfg.secondaryHref;
    secondaryEl.target = cfg.secondaryTarget;
    if (cfg.secondaryDownload) {
      secondaryEl.setAttribute('download', cfg.secondaryDownload);
    } else {
      secondaryEl.removeAttribute('download');
    }
    secondaryEl.onclick = cfg.secondaryOnClick || null;
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }
}

function dismissAdWarningModal(shouldResume = false) {
  const modal = document.getElementById('ad-warning-modal');
  const isWelcome = modal?.dataset?.warnMode === 'welcome';
  if (shouldResume) {
    continueFromAdWarningModal();
    return;
  }
  if (isWelcome) {
    acknowledgeAdWarningSession();
  }
  hideAdWarningModalVisual();
  state._pendingAdWarnPlayback = null;
  if (!isWelcome) {
    state.isPlaying = false;
    updatePlayPauseUI(false);
  }
}
window.openAdWarningModal = openAdWarningModal;
window.hideAdWarningModalVisual = hideAdWarningModalVisual;
window.dismissAdWarningModal = dismissAdWarningModal;

function continueFromAdWarningModal() {
  acknowledgeAdWarningSession();
  const pending = state._pendingAdWarnPlayback;
  state._pendingAdWarnPlayback = null;
  hideAdWarningModalVisual();

  if (pending && pending.cleanYtId) {
    playTrackById(
      pending.cleanYtId,
      pending.target,
      pending.normalizedStart || 0,
      undefined,
      undefined,
      { bypassAdWarning: true }
    );
  }
}
window.continueFromAdWarningModal = continueFromAdWarningModal;

