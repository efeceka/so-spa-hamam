import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en', 'de'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed' // TR prefixsiz
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};