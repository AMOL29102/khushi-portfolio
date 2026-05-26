const fs = require('node:fs');
const path = require('node:path');

const distDir = path.resolve(process.cwd(), 'dist');
const clientDir = path.join(distDir, 'client');
const serverDir = path.join(distDir, 'server');

async function build() {
  if (!fs.existsSync(serverDir)) {
    console.error('Server directory not found');
    process.exit(1);
  }

  // Use the compiled SSR server to generate the HTML
  // We use the worker entry point because it exports a fetch method that handles SSR
  const serverEntryPath = path.join(serverDir, 'index.js');
  // Need to use file:// protocol for dynamic import in Node
  const fileUrl = require('url').pathToFileURL(serverEntryPath).href;
  const m = await import(fileUrl);
  
  // Create a mock request for the root path
  const req = new Request('http://localhost/');
  const res = await m.default.fetch(req, {}, {});
  const html = await res.text();

  // Now, save this HTML to the client dir temporarily
  fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8');

  // Then do the cleanup/move for Vercel SPA routing
  const distAssets = path.join(distDir, 'assets');
  if (fs.existsSync(distAssets)) {
    fs.rmSync(distAssets, { recursive: true, force: true });
  }
  fs.renameSync(path.join(clientDir, 'assets'), distAssets);
  fs.renameSync(path.join(clientDir, 'index.html'), path.join(distDir, 'index.html'));

  const remainingFiles = fs.readdirSync(clientDir);
  for (const file of remainingFiles) {
    fs.renameSync(path.join(clientDir, file), path.join(distDir, file));
  }

  // Clean up directories that Vercel doesn't need for static deployment
  fs.rmSync(clientDir, { recursive: true, force: true });
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
  }
}

build().catch(console.error);
