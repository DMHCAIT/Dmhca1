// Wrapper to start the built server and provide startup logs for Vercel
console.log('Wrapper starting: attempting to require ./dist/server/server.js');
try {
  const path = require('path');
  const serverPath = path.join(__dirname, 'dist', 'server', 'server.js');
  console.log('Resolved server path:', serverPath);
  const server = require(serverPath);
  console.log('Server module required successfully:', typeof server);
} catch (err) {
  console.error('Failed to require server bundle:', err && (err.stack || err.message || err));
  // Exit with non-zero code so Vercel shows failure in logs
  process.exit(1);
}

// Catch uncaught exceptions and rejections
process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err && (err.stack || err.message || err));
});
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection', reason && (reason.stack || reason.message || reason));
});

console.log('Wrapper finished — server should be running if the bundle started a listener.');
