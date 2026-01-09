import { articles } from './articles.js';

export const makeSitemap = (req, res) => {
  res.header('Content-Type', 'text/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://cloudscape.bishopz.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://cloudscape.bishopz.com/docs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://cloudscape.bishopz.com/rss.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.2</priority>
      </url>
      ${articles().map(article => `<url>
        <loc>https://cloudscape.bishopz.com/articles/${article.slug}</loc>
        <lastmod>${article.publicationDate.toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.4</priority>
      </url>
      `).join('')}
      ${articles().map(article => `<url>
        <loc>https://cloudscape.bishopz.com/docs/${article.slug}</loc>
        <lastmod>${article.publicationDate.toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
      `).join('')}
    </urlset>
  `)
}