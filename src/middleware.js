// src/middleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en', 'de'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed' // TR prefixsiz
});

// Bu matcher; API, Next statik dosyaları ve dosya uzantılı her şeyi,
// ayrıca sitemap.xml / robots.txt / site.webmanifest'i açıkça hariç tutar.
export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*|sitemap.xml|robots.txt|site.webmanifest).*)'
  ]
};