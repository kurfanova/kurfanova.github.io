import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const esbuild = require('C:\\Users\\ozans\\Documents\\kurfa-ai-pro\\node_modules\\esbuild');
const sharp = require('C:\\Users\\ozans\\Documents\\kurfa-ai-pro\\node_modules\\sharp');

(async () => {
  const srcPng = path.join(ROOT, 'kurfamuzik_logo.png');
  const out96 = path.join(ROOT, 'kurfamuzik_logo_96.webp');
  const out256 = path.join(ROOT, 'kurfamuzik_logo_256.webp');

  await sharp(srcPng)
    .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 86 })
    .toFile(out96);

  await sharp(srcPng)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 86 })
    .toFile(out256);

  await esbuild.build({
    entryPoints: [path.join(ROOT, 'app.js')],
    outfile: path.join(ROOT, 'app.min.js'),
    bundle: false,
    minify: true,
    target: 'es2020',
    legalComments: 'none',
    charset: 'utf8'
  });

  await esbuild.build({
    entryPoints: [path.join(ROOT, 'style.css')],
    outfile: path.join(ROOT, 'style.min.css'),
    bundle: false,
    minify: true,
    legalComments: 'none',
    charset: 'utf8'
  });

  // Content-hash cache busting so normal F5 never pairs new index.html with stale SW-cached CSS/JS
  const hash8 = (filePath) => crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex').slice(0, 8);
  const jsHash = hash8(path.join(ROOT, 'app.min.js'));
  const cssHash = hash8(path.join(ROOT, 'style.min.css'));
  const swVer = `${cssHash}_${jsHash}`;

  const indexPath = path.join(ROOT, 'index.html');
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  indexHtml = indexHtml
    .replace(/(\.\/style\.min\.css\?v=)[^"']+/g, `$1${cssHash}`)
    .replace(/(\.\/app\.min\.js\?v=)[^"']+/g, `$1${jsHash}`);
  fs.writeFileSync(indexPath, indexHtml, 'utf8');

  const swPath = path.join(ROOT, 'sw.js');
  if (fs.existsSync(swPath)) {
    let swCode = fs.readFileSync(swPath, 'utf8');
    swCode = swCode
      .replace(/(const CACHE_NAME = ')kurfanova-shell-[^']+(')/, `$1kurfanova-shell-${swVer}$2`)
      .replace(/(\.\/style\.min\.css\?v=)[^"']+/g, `$1${cssHash}`)
      .replace(/(\.\/app\.min\.js\?v=)[^"']+/g, `$1${jsHash}`);
    fs.writeFileSync(swPath, swCode, 'utf8');
  }

  const stats = [
    ['kurfamuzik_logo.png', srcPng],
    ['kurfamuzik_logo_96.webp', out96],
    ['kurfamuzik_logo_256.webp', out256],
    ['app.js', path.join(ROOT, 'app.js')],
    ['app.min.js', path.join(ROOT, 'app.min.js')],
    ['style.css', path.join(ROOT, 'style.css')],
    ['style.min.css', path.join(ROOT, 'style.min.css')]
  ].map(([name, p]) => `${name}: ${(fs.statSync(p).size / 1024).toFixed(1)} KiB`);

  console.log(`PERF_BUILD_COMPLETE (css=${cssHash}, js=${jsHash})\n` + stats.join('\n'));
})();
