import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate sitemap.xml for SEO
const generateSitemap = () => {
  const baseUrl = 'https://pedro-rojas-dev.monoforms.com'; // Update with your actual domain
  const currentDate = new Date().toISOString();
  
  const pages = [
    {
      url: '/',
      changefreq: 'monthly',
      priority: '1.0',
      lastmod: currentDate
    },
    {
      url: '/#about',
      changefreq: 'monthly', 
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/#projects',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/#experience',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/#education',
      changefreq: 'yearly',
      priority: '0.6',
      lastmod: currentDate
    },
    {
      url: '/#contact',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${page.url}"/>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const baseUrl = 'https://pedro-rojas-dev.monoforms.com'; // Update with your actual domain
  
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