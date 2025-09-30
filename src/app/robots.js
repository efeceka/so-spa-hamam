// app/robots.js
export default function robots() {
  const base = 'https://sospakusadasi.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base
  };
}