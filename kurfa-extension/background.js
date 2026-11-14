const YOUTUBE_ID_REGEX = /^[A-Za-z0-9_-]{11}$/;
const searchCache = new Map();
const streamCache = new Map();

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
  if (node.videoRenderer && node.videoRenderer.videoId) {
    acc.push(node.videoRenderer);
  }
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
    return { success: true, source: 'extension-cache', results: cached.results };
  }

  const res = await fetch('https://www.youtube.com/youtubei/v1/search?prettyPrint=false', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      context: {
        client: {
          clientName: 'WEB',
          clientVersion: '2.20240101.00.00',
          hl: 'tr',
          gl: 'TR'
        }
      },
      query: cleanQ
    })
  });

  if (!res.ok) {
    return { success: false, error: `HTTP ${res.status}`, results: [] };
  }

  const data = await res.json();
  const renderers = extractVideoRenderers(data);
  const primary = [];
  const secondary = [];

  for (const v of renderers) {
    if (!YOUTUBE_ID_REGEX.test(v.videoId)) continue;
    const hasLive = Boolean(v.upcomingEventData) || (Array.isArray(v.badges) && v.badges.some(b => {
      const style = String(b?.metadataBadgeRenderer?.style || '');
      return style.includes('LIVE') || style.includes('MEMBERS_ONLY');
    })) || (Array.isArray(v.thumbnailOverlays) && v.thumbnailOverlays.some(o => {
      const style = String(o?.thumbnailOverlayTimeStatusRenderer?.style || '');
      return style === 'LIVE' || style === 'UPCOMING';
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
        lowTitle.includes('tum sarkilar') ||
        lowTitle.includes('tüm şarkılar') ||
        lowTitle.includes('full album') ||
        lowTitle.includes('full albüm') ||
        lowTitle.includes('megamix') ||
        lowTitle.includes('1 saat') ||
        lowTitle.includes('1 hour')
      ) {
        continue;
      }
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
  return { success: results.length > 0, source: 'extension-local', results };
}

async function handleLocalStream(videoId) {
  const cleanId = String(videoId || '').trim();
  if (!YOUTUBE_ID_REGEX.test(cleanId)) {
    return { success: false, error: 'Invalid video ID' };
  }

  const cached = streamCache.get(cleanId);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.payload;
  }

  const res = await fetch('https://www.youtube.com/youtubei/v1/player?prettyPrint=false', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      context: {
        client: {
          clientName: 'ANDROID_VR',
          clientVersion: '1.57.29',
          androidSdkVersion: 32,
          hl: 'tr',
          gl: 'TR'
        }
      },
      videoId: cleanId
    })
  });

  if (!res.ok) {
    return { success: false, error: `HTTP ${res.status}` };
  }

  const data = await res.json();
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
      best = {
        url,
        mimeType: mime.split(';')[0].trim(),
        bitrate: f.bitrate || 0
      };
    }
  }

  if (!best) {
    return { success: false, error: 'No direct audio stream found' };
  }

  const payload = {
    success: true,
    source: 'extension-local',
    videoId: cleanId,
    streamUrl: best.url,
    mimeType: best.mimeType,
    duration: Number(data?.videoDetails?.lengthSeconds || 0)
  };
  if (streamCache.size >= 80) streamCache.clear();
  streamCache.set(cleanId, { payload, expiresAt: Date.now() + 30 * 60 * 1000 });
  return payload;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg || typeof msg !== 'object') return false;
  if (msg.type === 'KURFA_SEARCH') {
    handleLocalSearch(msg.query, Boolean(msg.filterSingles))
      .then(sendResponse)
      .catch(err => sendResponse({ success: false, error: String(err && err.message ? err.message : err), results: [] }));
    return true;
  }
  if (msg.type === 'KURFA_STREAM') {
    handleLocalStream(msg.videoId)
      .then(sendResponse)
      .catch(err => sendResponse({ success: false, error: String(err && err.message ? err.message : err) }));
    return true;
  }
  return false;
});
