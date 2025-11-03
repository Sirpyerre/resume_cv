// Generate sitemap.xml for SEO
export const generateSitemap = () => {
  const baseUrl = 'https://pedrorojas.dev'; // Update with your actual domain
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
export const generateRobotsTxt = () => {
  const baseUrl = 'https://pedrorojas.dev'; // Update with your actual domain
  
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