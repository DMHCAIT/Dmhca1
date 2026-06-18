// Root API handler - serves the entire app
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

let serverHandler = null;

async function loadServerHandler() {
  if (serverHandler) return serverHandler;
  
  try {
    const serverPath = path.join(projectRoot, 'dist/server/server.js');
    console.log('[api/index] Attempting to load server from:', serverPath);
    
    if (!fs.existsSync(serverPath)) {
      throw new Error(`Server file not found: ${serverPath}`);
    }
    
    const serverUrl = new URL(`file:///${serverPath.replace(/\\/g, '/')}`);
    const serverModule = await import(serverUrl.href);
    
    serverHandler = serverModule.default;
    
    if (!serverHandler) {
      throw new Error('No default export in server module');
    }
    
    console.log('[api/index] Server loaded successfully');
    return serverHandler;
  } catch (err) {
    console.error('[api/index] Server load failed:', err.message);
    throw err;
  }
}

export default async function handler(req, res) {
  try {
    // Try to load and use the server
    const serverHandler = await loadServerHandler();
    
    if (typeof serverHandler === 'function') {
      const result = serverHandler(req, res);
      if (result && typeof result.then === 'function') {
        await result;
      }
    } else {
      throw new Error('Server handler is not a function');
    }
  } catch (error) {
    console.error('[api/index] Error:', error.message);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`<h1>Error</h1><p>${error.message}</p><pre>${error.stack}</pre>`);
  }
}
