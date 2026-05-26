const fs = require('node:fs');
const path = require('node:path');
const dir = path.resolve(process.cwd(), 'dist/client');
if (!fs.existsSync(dir)) {
  process.exit(0);
}
const file = path.join(dir, 'index.html');
if (!fs.existsSync(file)) {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Khushi Dilip Jain</title>
    <meta name="robots" content="noindex" />
  </head>
  <body>
    <script>window.location.href = '/';</script>
  </body>
</html>`;
  fs.writeFileSync(file, html, 'utf8');
}
