// Renders scripts/og-template.html to the PNG used as the site's Open Graph
// preview (og:image must be raster — Facebook and WhatsApp ignore SVG). The
// template uses the site's real fonts from node_modules, so it needs a local
// Chrome/Chromium; headless screenshot at exactly 1200x628, then optimized.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import sharp from 'sharp';

const TEMPLATE = new URL('./og-template.html', import.meta.url).pathname;
const TARGET = 'src/assets/images/default.png';

const chrome = ['google-chrome', 'chromium', 'chromium-browser']
  .map((name) => {
    try {
      return execFileSync('which', [name]).toString().trim();
    } catch {
      return null;
    }
  })
  .find(Boolean);

if (!chrome) {
  console.error('No Chrome/Chromium found on PATH — install one to regenerate the OG image.');
  process.exit(1);
}

const work = mkdtempSync(join(tmpdir(), 'og-'));
const shot = join(work, 'shot.png');
execFileSync(chrome, [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1200,628',
  `--screenshot=${shot}`,
  `file://${TEMPLATE}`,
]);

if (!existsSync(shot)) {
  console.error('Chrome produced no screenshot.');
  process.exit(1);
}

const { width, height, size } = await sharp(shot)
  .resize(1200, 628, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toFile(TARGET);
rmSync(work, { recursive: true, force: true });

console.log(`${TARGET} — ${width}x${height}, ${Math.round(size / 1024)} KB`);
