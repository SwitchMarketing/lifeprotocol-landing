// Optimizes the hero source PNGs into web-friendly WebP + JPG.
// Usage:  npm install -D sharp   (once)
//         node scripts/optimize-images.mjs
//
// Produces, for each source in public/*.png listed below:
//   public/<name>.webp  (primary, ~q78, max 1920px wide)
//   public/<name>.jpg   (fallback, mozjpeg q82)

import sharp from 'sharp'
import { existsSync, statSync } from 'node:fs'

const SOURCES = ['hero_bioscience']
const MAX_WIDTH = 1920
const kb = (n) => (n / 1024).toFixed(0) + ' kB'

for (const name of SOURCES) {
  const src = `public/${name}.png`
  if (!existsSync(src)) {
    console.log(`• skip ${src} (not found)`)
    continue
  }

  const before = statSync(src).size

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(`public/${name}.webp`)

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`public/${name}.jpg`)

  const webp = statSync(`public/${name}.webp`).size
  const jpg = statSync(`public/${name}.jpg`).size

  console.log(
    `✓ ${name}:  PNG ${kb(before)}  →  WebP ${kb(webp)}  /  JPG ${kb(jpg)}`,
  )
}

console.log('\nDone. The site references the .webp (with .jpg fallback).')
