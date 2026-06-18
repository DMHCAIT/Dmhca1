// Root API handler - serves static assets and SSR content
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

let serverModule = null;

async function loadServerModule() {
  if (serverModule) return serverModule;
  
  try {
    const serverPath = path.join(projectRoot, 'dist/server/server.js');
    console.log('[api/index] Loading server from:', serverPath);
    
    if (!fs.existsSync(serverPath)) {
      throw new Error(`Server file not found: ${serverPath}`);
    }
    
    const serverUrl = new URL(`file:///${serverPath.replace(/\\/g, '/')}`);
    const imported = await import(serverUrl.href);
    
    serverModule = imported.default;
    
    if (!serverModule) {
      throw new Error('No default export from server module');
    }
    
    if (!serverModule.fetch || typeof serverModule.fetch !== 'function') {
      throw new Error('Server module does not have a fetch method');
    }
    
    console.log('[api/index] Server loaded successfully');
    return serverModule;
  } catch (err) {
    console.error('[api/index] Server load failed:', err.message);
    throw err;
  }
}

// Check if request is for a static asset
function isStaticAsset(pathname) {
  const staticPatterns = [
    /^\/assets\//,
    /^\/courses\//,
    /^\/events-content\//,
    /^\/Faculty_images\//,
    /^\/Training partners\//,
    /^\/ACADEMIC PARTNERS\//,
    /\.(js|css|woff|woff2|ttf|eot|otf|png|jpg|jpeg|gif|webp|svg|ico)$/i
  ];
  return staticPatterns.some(pattern => pattern.test(pathname));
}

// Serve static file
function serveStaticFile(filePath, res) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    const content = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    
    const mimeTypes = {
      '.js': 'application/javascript; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ttf': 'font/ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'font/otf'
    };
    
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.end(content);
    return true;
  } catch (err) {
    console.error('[api/index] Static file error:', err.message);
    return false;
  }
}

// Convert Express request to Fetch API Request
async function expressToFetchRequest(req) {
  const url = new URL(req.url, `https://${req.headers.host || 'localhost'}`);
  const method = req.method;
  
  let body = null;
  if (method !== 'GET' && method !== 'HEAD') {
    if (req.body) {
      if (typeof req.body === 'string') {
        body = req.body;
      } else if (Buffer.isBuffer(req.body)) {
        body = req.body;
      } else {
        body = JSON.stringify(req.body);
      }
    }
  }
  
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value && typeof value === 'string') {
      headers.set(key, value);
    }
  }
  
  return new Request(url, {
    method,
    headers,
    body
  });
}

// Convert Fetch API Response to Express response
async function fetchResponseToExpress(fetchResponse, res) {
  res.statusCode = fetchResponse.status;
  
  const contentType = fetchResponse.headers.get('content-type');
  if (contentType) {
    res.setHeader('Content-Type', contentType);
  }
  
  fetchResponse.headers.forEach((value, key) => {
    if (key.toLowerCase() !== 'content-encoding') {
      res.setHeader(key, value);
    }
  });
  
  const buffer = await fetchResponse.arrayBuffer();
  res.end(Buffer.from(buffer));
}

export default async function handler(req, res) {
  try {
    const pathname = new URL(req.url, `https://${req.headers.host}`).pathname;
    
    // Try to serve static assets
    if (isStaticAsset(pathname)) {
      const staticPaths = [
        path.join(projectRoot, 'dist/client', pathname),
        path.join(projectRoot, 'public', pathname)
      ];
      
      for (const filePath of staticPaths) {
        if (serveStaticFile(filePath, res)) {
          return;
        }
      }
      
      // If static file not found, let it fall through to 404
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
      return;
    }
    
    // Handle SSR requests
    const server = await loadServerModule();
    const fetchRequest = await expressToFetchRequest(req);
    const fetchResponse = await server.fetch(fetchRequest);
    
    await fetchResponseToExpress(fetchResponse, res);
  } catch (error) {
    console.error('[api/index] Error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`<h1>Error</h1><p>${error.message}</p><pre>${error.stack}</pre>`);
  }
}
