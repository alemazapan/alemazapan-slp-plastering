import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFile, execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let parsedUrl = req.url.split('?')[0];
  if (parsedUrl === '/') parsedUrl = '/index.html';

  try {
    parsedUrl = decodeURIComponent(parsedUrl);
  } catch (e) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  let relativePath = parsedUrl.replace(/^\//, '');
  let filePath = path.join(BASE_DIR, relativePath);

  if (!fs.existsSync(filePath) && relativePath.startsWith('images/')) {
    filePath = path.join(BASE_DIR, 'public', relativePath);
  }

  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404: Not Found - ${parsedUrl}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Test server running at http://127.0.0.1:${PORT}`);

  try {
    const urls = [
      'http://127.0.0.1:3000/',
      'http://127.0.0.1:3000/src/index.css',
      'http://127.0.0.1:3000/public/vendor/react-bundle.js',
      'http://127.0.0.1:3000/src/main.js',
      'http://127.0.0.1:3000/src/App.js',
      'http://127.0.0.1:3000/images/logo.jpg',
      'http://127.0.0.1:3000/images/projects/proyecto-1-stucco-exterior-chimenea.jpg',
      'http://127.0.0.1:3000/images/projects/proyecto-2-plastering-campana-chimenea.jpg',
      'http://127.0.0.1:3000/images/projects/proyecto-3-plastering-salon-chimenea.jpg',
      'http://127.0.0.1:3000/images/projects/proyecto-4-stucco-chimenea-nichos.jpg'
    ];

    let allOk = true;
    for (const u of urls) {
      const res = await fetch(u);
      console.log(`Endpoint: ${u} -> Status: ${res.status} ${res.statusText}`);
      if (!res.ok) allOk = false;
    }

    if (!allOk) {
      throw new Error('Some endpoints failed to return 200 OK');
    }

    console.log('All static and asset endpoints returned 200 OK.');

    // Capture screenshot using Chrome
    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    const screenshotPath = path.join(BASE_DIR, 'screenshot.png');
    
    console.log('Capturing screenshot with Chrome headless...');
    execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${screenshotPath}" --window-size=1440,2400 --virtual-time-budget=5000 http://127.0.0.1:3000/`, {
      timeout: 15000
    });

    if (fs.existsSync(screenshotPath)) {
      const size = fs.statSync(screenshotPath).size;
      console.log(`Screenshot generated successfully! Size: ${size} bytes at ${screenshotPath}`);
    } else {
      console.warn('Screenshot file was not created.');
    }

    server.close(() => {
      console.log('Test completed successfully. Server closed.');
      process.exit(0);
    });
  } catch (err) {
    console.error('Test error:', err);
    server.close(() => {
      process.exit(1);
    });
  }
});
