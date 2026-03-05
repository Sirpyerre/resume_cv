import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate sitemap.xml for SEO
const generateSitemap = () => {
  const baseUrl = 'https://pedrorojas.lat';
  const currentDate = new Date().toISOString();
  
  // SPA: hash fragments (#about, #contact, etc.) are NOT valid sitemap URLs.
  // Google ignores the fragment and treats them as duplicate/unindexable pages.
  // Only list real navigable URLs here.
  const pages = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate
    },
    {
      url: '/privacy-policy',
      changefreq: 'yearly',
      priority: '0.2',
      lastmod: currentDate
    },
    {
      url: '/terms-of-service',
      changefreq: 'yearly',
      priority: '0.2',
      lastmod: currentDate
    },
    {
      url: '/cookie-policy',
      changefreq: 'yearly',
      priority: '0.2',
      lastmod: currentDate
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
    const isMain = page.url === '/';
    const hreflang = isMain
      ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/"/>`
      : '';
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${hreflang}
  </url>`;
  }).join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const baseUrl = 'https://pedrorojas.lat';
  
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /.git/
Disallow: /node_modules/

Sitemap: ${baseUrl}/sitemap.xml

# Specific rules for search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot  
Allow: /
Crawl-delay: 1`;
};

// Main execution
const publicDir = path.resolve(__dirname, '../../public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate and save sitemap.xml
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const sitemapContent = generateSitemap();
fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
console.log('✅ sitemap.xml generated successfully at:', sitemapPath);

// Generate and save robots.txt
const robotsPath = path.join(publicDir, 'robots.txt');
const robotsContent = generateRobotsTxt();
fs.writeFileSync(robotsPath, robotsContent, 'utf-8');
console.log('✅ robots.txt generated successfully at:', robotsPath);

console.log('\n📍 Files generated in /public directory:');
console.log('   - sitemap.xml');
console.log('   - robots.txt');