// Root API handler - converts Express req/res to Fetch API and calls TanStack Start server
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
