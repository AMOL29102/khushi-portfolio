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
