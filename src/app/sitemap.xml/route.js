// src/app/sitemap.xml/route.js
export const revalidate = 0; // her istekte taze üret (cache sorunu olmasın)

function isoNow() {
  return new Date().toISOString();
}

// domaini tek yerden yönetmek istersen .env içine NEXT_PUBLIC_SITE_URL koyabilirsin
const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://sospakusadasi.com';

// TR kök (prefixsiz), EN ve DE prefixli
const routes = [
  // Anasayfa
  { loc: `${BASE}/`,            changefreq: 'weekly',  priority: '1.0' },

  // TR (prefixsiz) sayfalar
  { loc: `${BASE}/about`,       changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/service`,     changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/contact`,     changefreq: 'weekly',  priority: '0.8' },

  // EN
  { loc: `${BASE}/en`,          changefreq: 'weekly',  priority: '1.0' },
  { loc: `${BASE}/en/about`,    changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/en/service`,  changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/en/contact`,  changefreq: 'weekly',  priority: '0.8' },

  // DE
  { loc: `${BASE}/de`,          changefreq: 'weekly',  priority: '1.0' },
  { loc: `${BASE}/de/about`,    changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/de/service`,  changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/de/contact`,  changefreq: 'weekly',  priority: '0.8' }
];

function buildXml(urls) {
  const lastmod = isoNow();
  const items = urls.map(u => {
    return `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${items}
</urlset>`;
}

export async function GET() {
  const xml = buildXml(routes);
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // İstersen prettify için aşağıdaki header’ı da ekleyebilirsin ama şart değil
      'Cache-Control': 'no-store'
    }
  });
}