// API handler that loads and executes the TanStack Start server
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

let serverHandler = null;

async function loadServerHandler() {
  if (serverHandler) return serverHandler;
  
  try {
    console.log('[api] Loading server from:', path.join(projectRoot, 'dist/server/server.js'));
    
    // Import the server module
    const serverUrl = new URL(`file://${path.join(projectRoot, 'dist/server/server.js').replace(/\\/g, '/')}`);
    console.log('[api] Server URL:', serverUrl.href);
    
    const serverModule = await import(serverUrl.href);
    console.log('[api] Server module loaded');
    
    // The server module should have a default handler
    serverHandler = serverModule.default;
    
    if (!serverHandler) {
      throw new Error('Server module has no default export');
    }
    
    console.log('[api] Server handler ready');
    return serverHandler;
  } catch (err) {
    console.error('[api] Failed to load server:', err.message || err);
    throw err;
  }
}

export default async function handler(req, res) {
  try {
    const serverHandler = await loadServerHandler();
    
    // Call the server handler with the request/response
    if (typeof serverHandler === 'function') {
      // For async handlers
      const result = serverHandler(req, res);
      if (result && typeof result.then === 'function') {
        await result;
      }
    } else {
      console.error('[api] Server handler is not a function');
      res.statusCode = 500;
      res.end('Server handler error');
    }
  } catch (error) {
    console.error('[api] Handler error:', error.message || error);
    res.statusCode = 500;
    res.end(`Error: ${error.message || 'Unknown error'}`);
  }
}


