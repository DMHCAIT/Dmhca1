// Vercel API handler - serves the TanStack Start app
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = dirname(__dirname);

let serverModule = null;

async function loadServer() {
  if (serverModule) return serverModule;
  
  try {
    console.log('[api] Attempting to load server from:', join(projectRoot, 'dist/server/server.js'));
    
    // Check if file exists
    try {
      await fs.access(join(projectRoot, 'dist/server/server.js'));
    } catch {
      console.error('[api] Server file not found. Running build...');
      // If dist doesn't exist, try to require dynamic import
      const { execSync } = await import('child_process');
      try {
        execSync('npm run build', { cwd: projectRoot, stdio: 'inherit' });
      } catch (buildErr) {
        console.error('[api] Build failed:', buildErr);
      }
    }
    
    const serverUrl = new URL('../dist/server/server.js', import.meta.url);
    serverModule = await import(serverUrl.href);
    console.log('[api] Server module loaded successfully');
    return serverModule;
  } catch (err) {
    console.error('[api] Failed to load server:', err);
    throw err;
  }
}

export default async function handler(req, res) {
  try {
    const server = await loadServer();
    
    if (!server.default) {
      console.error('[api] No default export from server module');
      res.status(500).json({ error: 'Server module missing default export' });
      return;
    }
    
    // If server is an http server or handler, use it
    if (typeof server.default === 'function') {
      await server.default(req, res);
    } else {
      res.status(500).json({ error: 'Server module is not a function' });
    }
  } catch (error) {
    console.error('[api] Error:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
}
