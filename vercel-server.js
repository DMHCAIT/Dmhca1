// Wrapper to start the built server and provide startup logs for Vercel
console.log('Wrapper starting: attempting to import ./dist/server/server.js (ESM-friendly)');
(async () => {
  try {
    const serverUrl = new URL('./dist/server/server.js', import.meta.url).href;
    console.log('Resolved server URL:', serverUrl);
    try {
      const serverModule = await import(serverUrl);
      console.log('Server bundle imported successfully (via import)');
      if (serverModule && serverModule.default) console.log('Server default export present')
      return;
    } catch (importErr) {
      console.warn('ESM import failed, attempting CommonJS require via createRequire:', importErr && (importErr.stack || importErr.message || importErr));
    }

    // Fallback: if the bundle is CommonJS, use createRequire
    try {
      const { createRequire } = await import('module');
      const require = createRequire(import.meta.url);
      const path = require('path');
      const serverPath = path.join(__dirname, 'dist', 'server', 'server.js');
      console.log('Attempting to require server bundle at:', serverPath);
      const server = require(serverPath);
      console.log('Server bundle required successfully (via createRequire)');
      return;
    } catch (requireErr) {
      console.error('createRequire require fallback failed:', requireErr && (requireErr.stack || requireErr.message || requireErr));
    }
  } catch (err) {
    console.error('Failed to import server bundle:', err && (err.stack || err.message || err));
    process.exit(1);
  }
})()

// Catch uncaught exceptions and rejections
process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err && (err.stack || err.message || err));
});
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection', reason && (reason.stack || reason.message || reason));
});

console.log('Wrapper finished — server import attempted.');
