// src/app/sitemap.xml/route.js
export async function GET() {
  // Artık apex domain kanonik: www YOK
  const base = 'https://sospakusadasi.com';

  const urls = [
    { loc: `${base}/`,           changefreq: 'weekly', priority: '1.0' },
    { loc: `${base}/en`,         changefreq: 'weekly', priority: '1.0' },
    { loc: `${base}/de`,         changefreq: 'weekly', priority: '1.0' },

    { loc: `${base}/about`,      changefreq: 'weekly', priority: '0.8' },
    { loc: `${base}/en/about`,   changefreq: 'weekly', priority: '0.8' },
    { loc: `${base}/de/about`,   changefreq: 'weekly', priority: '0.8' },

    { loc: `${base}/service`,    changefreq: 'weekly', priority: '0.8' },
    { loc: `${base}/en/service`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${base}/de/service`, changefreq: 'weekly', priority: '0.8' },

    { loc: `${base}/contact`,    changefreq: 'weekly', priority: '0.8' },
    { loc: `${base}/en/contact`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${base}/de/contact`, changefreq: 'weekly', priority: '0.8' }
  ];

  const lastmod = new Date().toISOString();

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n') +
    `\n</urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}