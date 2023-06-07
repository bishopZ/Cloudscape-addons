const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 8000;

const requestListener = function (request, response) {
  let filePath = `./public${request.url}`;
  if (filePath === './public/') filePath = './public/index.html';

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.error(error);
      if (error.code === 'ENOENT'){
        fs.readFile('./404.html', (error, content) => {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        });
      } else {
        response.writeHead(500);
        response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
};

const server = http.createServer(requestListener);

server.listen(port, host, (request, response) => {
  console.log(`Server is running on http://${host}:${port}`);
});
