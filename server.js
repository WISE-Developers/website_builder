import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file directory (equivalent to __dirname in CommonJS)
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const server=http.createServer((req, res) => {
  // Parse and decode the URL
  let pathname=decodeURIComponent(req.url);

  // Get the file path
  let filePath=path.join(__dirname, 'dist', pathname==='/'? 'index.html':pathname);

  // Debugging
  console.log(`Request for: ${pathname}`);
  console.log(`Looking for file: ${filePath}`);

  // Determine the content type based on file extension
  const extname=String(path.extname(filePath)).toLowerCase();
  const contentTypes={
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.jpeg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon'
  };

  const contentType=contentTypes[extname]||'application/octet-stream';

  // For SPA routing, if a non-existent path is requested, serve the index.html
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File not found: ${filePath}`);

      // File doesn't exist, check if it has an extension
      if (path.extname(filePath)==='') {
        // No extension, likely a route - serve index.html
        filePath=path.join(__dirname, 'dist', 'index.html');
        console.log(`Serving index.html instead for SPA routing`);
      } else {
        // Has extension but doesn't exist - return 404
        res.writeHead(404);
        res.end(`File not found: ${pathname}`);
        return;
      }
    }

    // Read and serve the file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        console.error(`Error reading file: ${err.code}`);
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
        console.log(`Successfully served: ${pathname} as ${contentType}`);
      }
    });
  });
});

const PORT=8180;
server.listen(PORT, () => {
  console.log(`Test Hosting Server running at http://localhost:${PORT}/`);
  console.log(`Serving files from ${path.join(__dirname, 'dist')}`);
  console.log(`Press Ctrl+C to stop the server`);
});