// src/app/sitemap.xml/route.js
export async function GET() {
  const base = 'https://sospakusadasi.com';
  const pages = ['', 'about', 'service', 'contact'];
  const locales = ['tr', 'en', 'de'];
  const lastmod = new Date().toISOString();

  const href = (slug, locale) =>
    locale === 'tr'
      ? `${base}${slug ? `/${slug}` : '/'}`
      : `${base}/${locale}${slug ? `/${slug}` : ''}`;

  const entries = [];

  for (const slug of pages) {
    const tr = href(slug, 'tr');
    const en = href(slug, 'en');
    const de = href(slug, 'de');

    for (const loc of locales) {
      const locUrl = href(slug, loc);
      entries.push(`
        <url>
          <loc>${locUrl}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${slug === '' ? '1.0' : '0.8'}</priority>
          <xhtml:link rel="alternate" hreflang="tr-TR" href="${tr}" />
          <xhtml:link rel="alternate" hreflang="en" href="${en}" />
          <xhtml:link rel="alternate" hreflang="de" href="${de}" />
          <xhtml:link rel="alternate" hreflang="x-default" href="${tr}" />
        </url>
      `);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${entries.join('\n')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}