/**
 * SLP Plastering - Servidor Web de Desarrollo y Producción
 * Servidor HTTP nativo en Node.js (cero dependencias externas requeridas)
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
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
  // Parse requested URL
  let parsedUrl = req.url.split('?')[0];
  if (parsedUrl === '/') parsedUrl = '/index.html';

  // Decode URI components
  try {
    parsedUrl = decodeURIComponent(parsedUrl);
  } catch (e) {
    res.writeHead(400);
    res.end('Bad Request');
    return;
  }

  // Handle path mappings (support /images/... -> /public/images/...)
  let relativePath = parsedUrl.replace(/^\//, '');
  let filePath = path.join(BASE_DIR, relativePath);

  // If path starts with images/ but files are in public/images/
  if (!fs.existsSync(filePath) && relativePath.startsWith('images/')) {
    filePath = path.join(BASE_DIR, 'public', relativePath);
  }

  // Prevent directory traversal
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If file not found, try fallback or 404
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404: Archivo no encontrado - ${parsedUrl}`);
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

server.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`  SLP PLASTERING - SITIO WEB EMPRESARIAL OFICIAL     `);
  console.log(`  Ubicación: Fort Worth, Texas, USA                  `);
  console.log(`  30 Años de Experiencia en Plastering & Stucco      `);
  console.log(`====================================================`);
  console.log(`  Servidor iniciado exitosamente en:                 `);
  console.log(`  http://127.0.0.1:${PORT}                           `);
  console.log(`  http://localhost:${PORT}                           `);
  console.log(`====================================================`);
});
