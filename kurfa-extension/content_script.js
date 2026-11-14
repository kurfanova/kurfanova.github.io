(function () {
  if (document.documentElement) {
    document.documentElement.dataset.kurfaExt = 'extension-1.0.0';
  }
  window.dispatchEvent(new CustomEvent('kurfa-ext-ready', { detail: { mode: 'extension-1.0.0' } }));

  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data || event.data.__kurfaExt !== 'REQ') return;
    const { requestId, action, payload } = event.data;
    if (!requestId) return;

    const msg = action === 'SEARCH'
      ? { type: 'KURFA_SEARCH', query: payload?.query || '', filterSingles: Boolean(payload?.filterSingles) }
      : { type: 'KURFA_STREAM', videoId: payload?.videoId || '' };

    try {
      chrome.runtime.sendMessage(msg, (response) => {
        const lastErr = chrome.runtime.lastError;
        window.postMessage({
          __kurfaExt: 'RES',
          requestId,
          response: lastErr ? { success: false, error: lastErr.message } : (response || { success: false })
        }, window.location.origin);
      });
    } catch (err) {
      window.postMessage({
        __kurfaExt: 'RES',
        requestId,
        response: { success: false, error: String(err && err.message ? err.message : err) }
      }, window.location.origin);
    }
  });
})();
