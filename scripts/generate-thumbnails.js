const fs = require('fs')
const path = require('path')
const { createCanvas } = require('canvas')

// polyfill DOMMatrix for pdfjs
if (typeof DOMMatrix === 'undefined') {
  const { DOMMatrix: CanvasDOMMatrix } = require('canvas')
  global.DOMMatrix = CanvasDOMMatrix
}
const newspapersDir = path.join(__dirname, '../public/newspapers')
const thumbnailsDir = path.join(newspapersDir, 'thumbnails')

if (!fs.existsSync(thumbnailsDir)) fs.mkdirSync(thumbnailsDir)

async function generateThumbnail(pdf2img, filename) {
  const pdfPath = path.join(newspapersDir, filename)
  const thumbnailPath = path.join(thumbnailsDir, `${path.parse(filename).name}.jpg`)

  if (fs.existsSync(thumbnailPath)) {
    console.log(`Skipping (already exists): ${filename}`)
    return
  }

  console.log(`Generating thumbnail: ${filename}`)

  const doc = await pdf2img.pdf(pdfPath, { scale: 0.325 })
  let pageIndex = 0
  for await (const image of doc) {
    if (pageIndex === 0) {
      // compress using sharp if available, otherwise save as-is
      const { loadImage } = require('canvas')
      const img = await loadImage(image)
      const canvas = createCanvas(img.width, img.height)
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      fs.writeFileSync(thumbnailPath, canvas.toBuffer('image/jpeg', { quality: 0.5 }))
    }
    pageIndex++
    break
  }

  console.log(`Saved: ${thumbnailPath}`)
}

async function main() {
  const pdf2img = await import('pdf-to-img')

  const files = fs.readdirSync(newspapersDir).filter(f => f.toLowerCase().endsWith('.pdf'))
  for (const file of files) {
    await generateThumbnail(pdf2img, file)
  }
}

main().catch(console.error)
