// const http = require('http');
// const fs = require('fs');
const path = require('path');
const articles = require('./articles');
const makeSitemap = require('./sitemap')
const express = require('express')
const manifest = require('./webmanifest')
const { engine } = require('express-handlebars');

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;
const defaultTitle = 'Bishop Zareh';
const defaultDescription = 'Explore technology with Bishop Z\'s insightful articles and resources. Discover the power of AI and design systems, and learn how to integrate them into your daily work.';
const defaultImage = 'https://bishopz.com/chasm.jpg';

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

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

app.get('/*', (req, res) => {
  console.log(req.path)
  const article = articles().find(article => '/articles/' + article.slug === req.path)
  res.render('index', {
    layout: false,
    title: article.title || defaultTitle,
    description: article.description || defaultDescription,
    image: article.image || defaultImage,
    path: req.path
  });
})

app.listen(PORT)

console.log(`Server is running on http://${HOST}:${PORT}`);
