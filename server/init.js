// const http = require('http');
// const fs = require('fs');
const path = require('path');
const articles = require('./articles');
const makeSitemap = require('./sitemap')
const express = require('express')
const manifest = require('./webmanifest')

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;
const app = express()

app.get('/api/articles', (request, response) => {
  console.log('sent articles')
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  response.setHeader('Access-Control-Allow-Origin', 'https://bishopz.herokuapp.com/');
  response.setHeader('Access-Control-Allow-Origin', 'https://bishopz.com/');
  response.json(articles())
})

app.get('/robots.txt', (req, res) => {
  res.type('text/robots');
  res.send('User-agent: *\nAllow: /\nSitemap: http://bishopz.com/sitemap.xml');
});

app.get('/manifest.webmanifest', (req, res) => {
  res.type('application/manifest+json');
  res.send(JSON.stringify(manifest));
})

app.get('/sitemap.xml', makeSitemap)

app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT)

console.log(`Server is running on http://${HOST}:${PORT}`);
