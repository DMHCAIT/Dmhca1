// Wrapper to start the built server and provide startup logs for Vercel
console.log('Wrapper starting...');
console.log('process.cwd():', process.cwd());
console.log('import.meta.url:', import.meta.url);

import('fs/promises').then(async fs => {
  try {
    const cwd = process.cwd();
    const serverPath = cwd + '/dist/server/server.js';
    console.log('Checking for server bundle at:', serverPath);
    
    try {
      await fs.access(serverPath);
      console.log('Server bundle file exists');
    } catch (e) {
      console.log('Server bundle file NOT found - listing dist directory:');
      try {
        const distPath = cwd + '/dist';
        const distContents = await fs.readdir(distPath, { recursive: true });
        console.log('dist/ contents:', distContents.slice(0, 20).join(', '));
      } catch (listErr) {
        console.log('Could not read dist/ directory:', listErr.message);
      }
    }

    // Try to import the server bundle
    const serverUrl = new URL('./dist/server/server.js', import.meta.url).href;
    console.log('Attempting to import server from:', serverUrl);
    const serverModule = await import(serverUrl);
    console.log('Server bundle imported successfully');
    if (serverModule && serverModule.default) console.log('Server default export found');
  } catch (err) {
    console.error('Fatal error:', err && (err.stack || err.message || err));
    process.exit(1);
  }
})

// Catch uncaught exceptions and rejections
process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err && (err.stack || err.message || err));
});
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection', reason && (reason.stack || reason.message || reason));
});

console.log('Wrapper finished — server import attempted.');
