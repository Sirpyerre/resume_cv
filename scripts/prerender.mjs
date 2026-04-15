/**
 * Prerender script — snapshots the built SPA into static HTML.
 * Uses modern puppeteer (ARM-compatible) instead of react-snap.
 * Runs after `vite build` via the `build` script in package.json.
 */
import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, existsSync } from 'fs';
import { extname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '../dist');
const PORT = 5050;

const MIME = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
};

// Minimal static server for the dist folder
function startServer() {
    return new Promise((resolve) => {
        const server = createServer((req, res) => {
            let filePath = join(DIST, req.url === '/' ? '/index.html' : req.url);
            if (!existsSync(filePath)) filePath = join(DIST, 'index.html');
            const ext = extname(filePath);
            res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
            createReadStream(filePath).pipe(res);
        });
        server.listen(PORT, () => resolve(server));
    });
}

async function prerender() {
    console.log('🔄 Starting prerender...');
    const server = await startServer();

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        // Wait for the app to fully render
        await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });

        // Wait for React to finish rendering
        await page.waitForSelector('#faq', { timeout: 10000 }).catch(() => {});

        const html = await page.content();
        writeFileSync(join(DIST, 'index.html'), html, 'utf-8');
        console.log('✅ Prerendered / → dist/index.html');
    } finally {
        await browser.close();
        server.close();
    }
}

prerender().catch((err) => {
    console.error('❌ Prerender failed:', err.message);
    process.exit(1);
});
