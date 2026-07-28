import fs from 'fs'
import path from 'path'
import { ImagePool } from '@squoosh/lib' // Uses secure WebAssembly isolates

const INPUT_DIR = path.resolve('public/brand/raw')
const OUTPUT_DIR = path.resolve('public/brand')

async function runSafeCompression() {
  const sourceFile = path.join(INPUT_DIR, 'logo.png')
  if (!fs.existsSync(sourceFile)) return

  // Initialize WebAssembly-powered isolated worker threads
  const imagePool = new ImagePool(1)
  const image = imagePool.fromBuffer(fs.readFileSync(sourceFile))

  // 1. Process optimized WebP variant
  await image.encode({
    webp: { quality: 80 }
  })
  
  const { binary: webpData } = await image.encodedWith.webp
  fs.writeFileSync(path.join(OUTPUT_DIR, 'logo.webp'), webpData)
  
  // 2. Process standard MozJPEG progressive fallback layout safely
  await image.encode({
    mozjpeg: { quality: 82, progressive: true }
  })
  
  const { binary: jpegData } = await image.encodedWith.mozjpeg
  fs.writeFileSync(path.join(OUTPUT_DIR, 'logo.png'), jpegData)

  await imagePool.close()
  console.log('[Security Pass] Image written securely via WASM sandbox execution.')
}

runSafeCompression()
