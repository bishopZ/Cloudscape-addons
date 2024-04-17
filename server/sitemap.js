import { articles } from './articles.js';

export const makeSitemap = (req, res) => {
  res.header('Content-Type', 'text/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://bishopz.com/</loc>
        <lastmod>2024-04-16T00:00:00+00:00Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://bishopz.com/resume</loc>
        <lastmod>2024-04-16T00:00:00+00:00Z</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://bishopz.com/exhibitions</loc>
        <lastmod>2024-04-16T00:00:00+00:00Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      ${articles().map(article => `<url>
        <loc>https://bishopz.com/articles/${article.slug}</loc>
        <lastmod>${article.publicationDate.toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>
      `).join('')}
    </urlset>
  `)
}