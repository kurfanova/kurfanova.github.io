import fs from 'node:fs';
import path from 'node:path';
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

  const stats = [
    ['kurfamuzik_logo.png', srcPng],
    ['kurfamuzik_logo_96.webp', out96],
    ['kurfamuzik_logo_256.webp', out256],
    ['app.js', path.join(ROOT, 'app.js')],
    ['app.min.js', path.join(ROOT, 'app.min.js')],
    ['style.css', path.join(ROOT, 'style.css')],
    ['style.min.css', path.join(ROOT, 'style.min.css')]
  ].map(([name, p]) => `${name}: ${(fs.statSync(p).size / 1024).toFixed(1)} KiB`);

  console.log('PERF_BUILD_COMPLETE\n' + stats.join('\n'));
})();
