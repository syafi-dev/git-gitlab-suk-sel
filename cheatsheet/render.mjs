import { chromium } from 'playwright-chromium'
import { fileURLToPath } from 'url'
import path from 'path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = 'file://' + path.join(__dirname, 'cheatsheet.html')
const out = process.argv[2] || path.join(__dirname, 'Git-GitLab-Cheat-Sheet.pdf')
const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(src, { waitUntil: 'networkidle' })
await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true, landscape: true, format: 'A4' })
await browser.close()
console.log('wrote', out)
