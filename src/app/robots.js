// app/robots.js
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://sospakusadasi.com/sitemap.xml',
    host: 'sospakusadasi.com' // opsiyonel ama eklemek iyi olur
  };
}