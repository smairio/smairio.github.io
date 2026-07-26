// Renders src/assets/images/default.svg to the PNG used as the site's Open
// Graph preview. og:image must be raster — Facebook and WhatsApp ignore SVG —
// so the PNG is committed and this script is how you refresh it.
import sharp from 'sharp';

const SOURCE = 'src/assets/images/default.svg';
const TARGET = 'src/assets/images/default.png';

const { width, height, size } = await sharp(SOURCE, { density: 144 })
  .resize(1200, 628, { fit: 'fill' })
  .png({ compressionLevel: 9 })
  .toFile(TARGET);

console.log(`${TARGET} — ${width}x${height}, ${Math.round(size / 1024)} KB`);
