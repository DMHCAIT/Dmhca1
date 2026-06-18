// Simple static file server for dist/client
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);
const clientDir = path.join(projectRoot, 'dist', 'client');

// MIME types
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

export default function handler(req, res) {
  try {
    // Parse the URL
    let filePath = decodeURIComponent(req.url || '/');
    
    // Default to index.html for root
    if (filePath === '/' || filePath === '') {
      filePath = '/index.html';
    }
    
    // Build full file path
    const fullPath = path.join(clientDir, filePath);
    
    // Security: prevent directory traversal
    if (!fullPath.startsWith(clientDir)) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    
    // Try to serve the file
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      const fileContent = fs.readFileSync(fullPath);
      
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.end(fileContent);
    } else {
      // File not found - serve index.html for SPA routing
      const indexPath = path.join(clientDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        const indexContent = fs.readFileSync(indexPath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(indexContent);
      } else {
        res.statusCode = 404;
        res.end('Not Found');
      }
    }
  } catch (error) {
    console.error('[api] Error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}

