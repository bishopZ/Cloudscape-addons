// const http = require('http');
// const fs = require('fs');
const path = require('path');
const articles = require('./articles');
const makeSitemap = require('./sitemap')
const express = require('express')
const manifest = require('./webmanifest')
const { engine } = require('express-handlebars');
const { DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_IMAGE } = require('./constants');

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.get('/api/articles', (req, res) => {
  console.log('sent articles')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.setHeader('Access-Control-Allow-Origin', 'https://bishopz.herokuapp.com/');
  res.setHeader('Access-Control-Allow-Origin', 'https://bishopz.com/');
  res.json(articles())
})

app.get('/robots.txt', (req, res) => {
  res.type('text/robots');
  res.send('User-agent: *\nAllow: /\nSitemap: http://bishopz.com/sitemap.xml');
});

app.get('/manifest.webmanifest', (req, res) => {
  res.type('application/manifest+json');
  res.json(manifest);
})

app.get('/sitemap.xml', makeSitemap)

app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', (req, res) => {
  console.log(req.path)
  const article = articles().find(article => '/articles/' + article.slug === req.path) || {};
  res.render('index', {
    layout: false,
    title: article.title || DEFAULT_TITLE,
    description: article.description || DEFAULT_DESCRIPTION,
    image: article.image || DEFAULT_IMAGE,
    path: req.path
  });
})

app.listen(PORT)

console.log(`Server is running on http://${HOST}:${PORT}`);
