// app/sitemap.js
export const revalidate = 3600; // 1 saat (opsiyonel)

export default function sitemap() {
  const base = 'https://sospakusadasi.com';
  const pages = ['', 'about', 'service', 'contact']; // '' = anasayfa
  const locales = ['tr', 'en', 'de']; // (şimdilik kullanılmıyor)
  const lastModified = new Date();

  const urlsForPage = (slug) => {
    const tr = slug ? `${base}/${slug}` : `${base}/`;
    const en = slug ? `${base}/en/${slug}` : `${base}/en`;
    const de = slug ? `${base}/de/${slug}` : `${base}/de`;
    return { tr, en, de };
  };

  const entries = pages.flatMap((slug) => {
    const u = urlsForPage(slug);
    const alternates = {
      languages: {
        'tr-TR': u.tr,
        en: u.en,
        de: u.de,
        'x-default': u.tr // TR kök alan, doğru
      }
    };

    // changeFrequency & priority opsiyoneldir
    const common = {
      lastModified,
      changeFrequency: 'weekly',
      priority: slug === '' ? 1.0 : 0.8,
      alternates
    };

    return [
      { url: u.tr, ...common },
      { url: u.en, ...common },
      { url: u.de, ...common }
    ];
  });

  return entries;
}