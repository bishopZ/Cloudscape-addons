import path from 'path';
import { fileURLToPath } from 'url';
import { articles } from './articles.js';
import { makeSitemap } from './sitemap.js';
import express from 'express';
import { engine } from 'express-handlebars';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_IMAGE } from './constants.js';
import { webmanifest } from './webmanifest.js';
import helmet from 'helmet';
import { redirects } from './redirects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'localhost';
const PORT = process.env.PORT ?? 3000;

const app = express()
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      "script-src": ["'self'", "bishopz.com", "localhost", "'unsafe-eval'"],
      "script-src-attr": ["'unsafe-inline'"],
      "img-src": ["*"], // Allow images to be loaded from any source
      "frame-src": ["'self'", "https://player.vimeo.com", "https://www.youtube.com"], // Add Vimeo to frame-src
    },
  },
}));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

redirects.forEach(redirect => {
  app.get(redirect[0], (req, res) => {
    res.redirect(redirect[1])
  })
})

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
  res.json(webmanifest);
})

app.get('/sitemap.xml', makeSitemap)

app.use(express.static(path.join(__dirname, '../public')));

app.get('/*', (req, res) => {
  // console.log(req.path)
  const article = articles().find(article => '/articles/' + article.slug === req.path) ?? {};
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
