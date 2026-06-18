// Wrapper to start the built server and provide startup logs for Vercel
console.log('Wrapper starting: attempting to import ./dist/server/server.js (ESM-friendly)');
(async () => {
  try {
    const serverUrl = new URL('./dist/server/server.js', import.meta.url).href;
    console.log('Resolved server URL:', serverUrl);
    const serverModule = await import(serverUrl);
    console.log('Server bundle imported successfully');
    if (serverModule && serverModule.default) console.log('Server default export present')
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
