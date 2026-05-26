const fs = require('node:fs');
const path = require('node:path');

const dir = path.resolve(process.cwd(), 'dist/client');
const assetsDir = path.join(dir, 'assets');
if (!fs.existsSync(dir) || !fs.existsSync(assetsDir)) {
  process.exit(0);
}

const files = fs.readdirSync(assetsDir);
const cssFiles = files.filter((file) => file.endsWith('.css'));
const jsFiles = files.filter((file) => file.endsWith('.js'));

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Khushi Dilip Jain</title>
    ${cssFiles
      .map((file) => `<link rel="stylesheet" href="/assets/${file}" />`)
      .join('\n    ')}
  </head>
  <body>
    <div id="root"></div>
    ${jsFiles
      .map((file) => `<script type="module" src="/assets/${file}"></script>`)
      .join('\n    ')}
  </body>
</html>`;

fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');

// Move files to the root of 'dist' for Vercel to pick them up correctly
const distDir = path.resolve(process.cwd(), 'dist');

// Move assets folder
const distAssets = path.join(distDir, 'assets');
if (fs.existsSync(distAssets)) {
  fs.rmSync(distAssets, { recursive: true, force: true });
}
fs.renameSync(path.join(dir, 'assets'), distAssets);

// Move index.html
fs.renameSync(path.join(dir, 'index.html'), path.join(distDir, 'index.html'));

// Also move any other files in dist/client (like .assetsignore)
const remainingFiles = fs.readdirSync(dir);
for (const file of remainingFiles) {
  fs.renameSync(path.join(dir, file), path.join(distDir, file));
}

// Clean up client and server directories as they are no longer needed
fs.rmSync(dir, { recursive: true, force: true });
const serverDir = path.join(distDir, 'server');
if (fs.existsSync(serverDir)) {
  fs.rmSync(serverDir, { recursive: true, force: true });
}
