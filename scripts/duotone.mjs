// The green duotone recipe from DESIGN.md: photography only ships treated, so
// it reads as painted into the site's world rather than pasted from a stock
// library. Grayscale → green tint → plaster highlights → deep-green shadows.
//
//   node scripts/duotone.mjs <input> <output.jpg> [width]
import sharp from 'sharp';

const [input, output, widthArg] = process.argv.slice(2);
if (!input || !output) {
  console.error('usage: node scripts/duotone.mjs <input> <output> [width=1600]');
  process.exit(1);
}
const width = Number(widthArg) || 1600;

const { width: w, height: h } = await sharp(input)
  .resize(width)
  .toBuffer({ resolveWithObject: true })
  .then(({ info }) => info);

const layer = (hex) =>
  sharp({ create: { width: w, height: h, channels: 3, background: hex } })
    .jpeg()
    .toBuffer();

const base = await sharp(input).resize(width).grayscale().normalise().gamma(1.15).tint('#5d9678').toBuffer();

const treated = await sharp(base)
  .composite([
    { input: await layer('#f4eee1'), blend: 'multiply' }, // highlights become plaster
    { input: await layer('#123f2e'), blend: 'lighten' }, // shadows become deep enamel
  ])
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(output);

console.log(`${output} — ${treated.width}x${treated.height}, ${Math.round(treated.size / 1024)} KB`);
