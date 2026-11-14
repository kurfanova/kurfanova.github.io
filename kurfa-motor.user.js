// ==UserScript==
// @name         Kurfanova Reklamsiz Muzik Motoru
// @namespace    https://kurfanova.github.io/
// @version      1.0.0
// @description  Kurfanova Muzik icin tamamen kullanici cihazindan calisan reklamsiz dogrudan ses ve yerel arama motoru (0 sunucu yuku).
// @author       KurfaCore
// @match        https://kurfanova.github.io/*
// @match        http://localhost:*/*
// @match        http://127.0.0.1:*/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      youtube.com
// @connect      www.youtube.com
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const YOUTUBE_ID_REGEX = /^[A-Za-z0-9_-]{11}$/;
  const searchCache = new Map();
  const streamCache = new Map();

  function gmPostJson(url, bodyObj) {
    return new Promise((resolve, reject) => {
      const reqFn = typeof GM_xmlhttpRequest === 'function'
        ? GM_xmlhttpRequest
        : (typeof GM !== 'undefined' && typeof GM.xmlHttpRequest === 'function' ? GM.xmlHttpRequest : null);
      if (!reqFn) {
        reject(new Error('GM_xmlhttpRequest unavailable'));
        return;
      }
      reqFn({
        method: 'POST',
        url,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(bodyObj),
        timeout: 10000,
        onload(resp) {
          try {
            if (resp.status >= 200 && resp.status < 300) {
              resolve(JSON.parse(resp.responseText || '{}'));
            } else {
              reject(new Error(`HTTP ${resp.status}`));
            }
          } catch (err) {
            reject(err);
          }
        },
        onerror() { reject(new Error('Network error')); },
        ontimeout() { reject(new Error('Timeout')); }
      });
    });
  }

  function parseDurationSeconds(text) {
    if (!text || typeof text !== 'string') return 0;
    const parts = text.trim().split(':').map(n => parseInt(n, 10));
    if (parts.some(isNaN)) return 0;
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return 0;
  }

  function extractVideoRenderers(node, acc = []) {
    if (!node || typeof node !== 'object') return acc;
    if (Array.isArray(node)) {
      for (const item of node) extractVideoRenderers(item, acc);
      return acc;
    }
    if (node.videoRenderer && node.videoRenderer.videoId) acc.push(node.videoRenderer);
    for (const val of Object.values(node)) {
      if (val && typeof val === 'object') extractVideoRenderers(val, acc);
    }
    return acc;
  }

  async function handleLocalSearch(query, filterSingles) {
    const cleanQ = String(query || '').trim();
    if (!cleanQ) return { success: false, results: [] };
    const cacheKey = `${cleanQ.toLowerCase()}|${filterSingles ? 1 : 0}`;
    const cached = searchCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return { success: true, source: 'userscript-cache', results: cached.results };
    }

    const data = await gmPostJson('https://www.youtube.com/youtubei/v1/search?prettyPrint=false', {
      context: { client: { clientName: 'WEB', clientVersion: '2.20240101.00.00', hl: 'tr', gl: 'TR' } },
      query: cleanQ
    });

    const renderers = extractVideoRenderers(data);
    const primary = [];
    const secondary = [];
    for (const v of renderers) {
      if (!YOUTUBE_ID_REGEX.test(v.videoId)) continue;
      const hasLive = Boolean(v.upcomingEventData) || (Array.isArray(v.badges) && v.badges.some(b => {
        const st = String(b?.metadataBadgeRenderer?.style || '');
        return st.includes('LIVE') || st.includes('MEMBERS_ONLY');
      })) || (Array.isArray(v.thumbnailOverlays) && v.thumbnailOverlays.some(o => {
        const st = String(o?.thumbnailOverlayTimeStatusRenderer?.style || '');
        return st === 'LIVE' || st === 'UPCOMING';
      }));
      if (hasLive) continue;

      const durStr = v.lengthText?.simpleText ? String(v.lengthText.simpleText).trim() : '';
      const durSec = parseDurationSeconds(durStr);
      if (!durStr || durSec <= 0) continue;

      const title = (v.title?.runs?.map(r => r.text).join('') || v.title?.simpleText || '').trim() || 'Bilinmeyen Sarki';
      const artist = (v.ownerText?.runs?.[0]?.text || v.shortBylineText?.runs?.[0]?.text || '').trim() || 'Bilinmeyen Sanatci';
      const lowTitle = title.toLowerCase();

      if (filterSingles) {
        if (durSec < 60 || durSec > 539) continue;
        if (
          lowTitle.includes('tum sarkilar') || lowTitle.includes('tüm şarkılar') ||
          lowTitle.includes('full album') || lowTitle.includes('full albüm') ||
          lowTitle.includes('megamix') || lowTitle.includes('1 saat') || lowTitle.includes('1 hour')
        ) continue;
      }

      const item = {
        id: v.videoId,
        title,
        artist,
        duration: durStr,
        thumbnail: `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`
      };
      if (durSec >= 75 && durSec <= 480) primary.push(item);
      else secondary.push(item);
      if (primary.length >= 25) break;
    }

    const results = [...primary, ...secondary].slice(0, 25);
    if (results.length > 0) {
      if (searchCache.size >= 60) searchCache.clear();
      searchCache.set(cacheKey, { results, expiresAt: Date.now() + 10 * 60 * 1000 });
    }
    return { success: results.length > 0, source: 'userscript-local', results };
  }

  async function handleLocalStream(videoId) {
    const cleanId = String(videoId || '').trim();
    if (!YOUTUBE_ID_REGEX.test(cleanId)) return { success: false, error: 'Invalid ID' };
    const cached = streamCache.get(cleanId);
    if (cached && cached.expiresAt > Date.now()) return cached.payload;

    const data = await gmPostJson('https://www.youtube.com/youtubei/v1/player?prettyPrint=false', {
      context: { client: { clientName: 'ANDROID_VR', clientVersion: '1.57.29', androidSdkVersion: 32, hl: 'tr', gl: 'TR' } },
      videoId: cleanId
    });

    const formats = Array.isArray(data?.streamingData?.adaptiveFormats) ? data.streamingData.adaptiveFormats : [];
    let best = null;
    let bestScore = -1;
    for (const f of formats) {
      const mime = String(f?.mimeType || '');
      const url = String(f?.url || '');
      if (!mime.startsWith('audio/') || !url) continue;
      let score = 0;
      if (f.itag === 140) score += 1000;
      else if (mime.startsWith('audio/mp4')) score += 500;
      else if (mime.startsWith('audio/webm')) score += 300;
      if (f.bitrate >= 96000 && f.bitrate <= 192000) score += 200;
      if (score > bestScore) {
        bestScore = score;
        best = { url, mimeType: mime.split(';')[0].trim() };
      }
    }

    if (!best) return { success: false, error: 'No audio stream found' };
    const payload = {
      success: true,
      source: 'userscript-local',
      videoId: cleanId,
      streamUrl: best.url,
      mimeType: best.mimeType,
      duration: Number(data?.videoDetails?.lengthSeconds || 0)
    };
    if (streamCache.size >= 80) streamCache.clear();
    streamCache.set(cleanId, { payload, expiresAt: Date.now() + 30 * 60 * 1000 });
    return payload;
  }

  const announce = () => {
    if (document.documentElement) {
      document.documentElement.dataset.kurfaExt = 'userscript-1.0.0';
    }
    window.dispatchEvent(new CustomEvent('kurfa-ext-ready', { detail: { mode: 'userscript-1.0.0' } }));
  };
  if (document.documentElement) announce();
  else window.addEventListener('DOMContentLoaded', announce, { once: true });

  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data || event.data.__kurfaExt !== 'REQ') return;
    const { requestId, action, payload } = event.data;
    if (!requestId) return;

    const promise = action === 'SEARCH'
      ? handleLocalSearch(payload?.query || '', Boolean(payload?.filterSingles))
      : handleLocalStream(payload?.videoId || '');

    promise
      .then(response => {
        window.postMessage({ __kurfaExt: 'RES', requestId, response }, window.location.origin);
      })
      .catch(err => {
        window.postMessage({
          __kurfaExt: 'RES',
          requestId,
          response: { success: false, error: String(err && err.message ? err.message : err) }
        }, window.location.origin);
      });
  });
})();
