// app/sitemap.js
export default function sitemap() {
  const base = 'https://sospakusadasi.com';

  // rotalar ve diller
  const pages = ['', 'about', 'service', 'contact']; // '' = anasayfa
  const locales = ['tr', 'en', 'de'];

  const lastModified = new Date();

  // yardımcı: belirtilen sayfa için her dilin URL'i
  const urlsForPage = (slug) => {
    const trUrl = slug ? `${base}/${slug}` : `${base}/`;
    const enUrl = slug ? `${base}/en/${slug}` : `${base}/en`;
    const deUrl = slug ? `${base}/de/${slug}` : `${base}/de`;

    return {
      tr: trUrl,
      en: enUrl,
      de: deUrl
    };
  };

  // Next.js sitemap API'si alternates destekliyor
  const entries = pages.flatMap((slug) => {
    const u = urlsForPage(slug);
    return [
      {
        url: u.tr,
        lastModified,
        alternates: {
          languages: {
            'tr-TR': u.tr,
            en: u.en,
            de: u.de,
            'x-default': u.tr
          }
        }
      },
      {
        url: u.en,
        lastModified,
        alternates: {
          languages: {
            'tr-TR': u.tr,
            en: u.en,
            de: u.de,
            'x-default': u.tr
          }
        }
      },
      {
        url: u.de,
        lastModified,
        alternates: {
          languages: {
            'tr-TR': u.tr,
            en: u.en,
            de: u.de,
            'x-default': u.tr
          }
        }
      }
    ];
  });

  return entries;
}