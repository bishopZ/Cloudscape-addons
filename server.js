const http = require("http");
const fs = require('fs')
var path = require('path');

const host = 'localhost';
const port = 8000;

const requestListener = function (request, response) {
  var filePath = './public' + request.url;
    if (filePath == './public/') filePath = './public/index.html';

    console.log(filePath)
    var extname = path.extname(filePath);
    var contentType = 'text/html';
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

    fs.readFile(filePath, function(error, content) {
      console.log(error)
        if (error) {
          if (error.code == 'ENOENT'){
            fs.readFile('./404.html', function(error, content) {
              response.writeHead(200, { 'Content-Type': contentType });
              response.end(content, 'utf-8');
            });
          }
          else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
          }
        }
        else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
    });
};

const server = http.createServer(requestListener);

server.listen(port, host, (req, res) => {
    console.log(`Server is running on http://${host}:${port}`);
});
