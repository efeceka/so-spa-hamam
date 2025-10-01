// app/[locale]/layout.js
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/common/FloatingButtons';
import '../globals.css';
import {Suspense} from 'react';
import Script from 'next/script'; // ← GTM için

// Küçük JSON-LD helper
function JsonLd({data}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
  );
}

export function generateStaticParams() {
  return [{locale: 'tr'}, {locale: 'en'}, {locale: 'de'}];
}

export async function generateMetadata({params}) {
  const {locale} = await params; 
  const msgs = (await import(`../../messages/${locale}.json`)).default;

  const base = 'https://sospakusadasi.com';
  const isTR = locale === 'tr';
  const path = isTR ? '/' : `/${locale}`;

  const siteName = msgs?.seo?.siteName ?? 'SO Spa & Hamam';
  const title    = msgs?.seo?.title ?? 'SO Spa & Hamam | Kuşadası Hamam & Spa';
  const desc     = msgs?.seo?.description ?? 'Kuşadası’nda geleneksel hamam ve spa.';
  const ogAlt    = msgs?.seo?.ogAlt ?? title;
  const ogImage  = msgs?.seo?.ogImage ?? '/og.png';
  const keywords = msgs?.seo?.keywords;

  return {
    metadataBase: new URL(base),
    title,
    description: desc,
    keywords,
    alternates: {
      canonical: path,
      languages: { 'tr-TR': '/', en: '/en', de: '/de', 'x-default': '/' }
    },
    openGraph: {
      type: 'website',
      url: `${base}${path}`,
      siteName,
      title,
      description: desc,
      locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImage]
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        { rel: 'android-chrome', url: '/android-chrome-192x192.png' },
        { rel: 'android-chrome', url: '/android-chrome-512x512.png' }
      ]
    },
    manifest: '/site.webmanifest'
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000'
};

export default async function LocaleLayout({children, params}) {
  const {locale} = await params; // burada await kalabilir
  const messages = await getMessages({locale});

  const base = 'https://sospakusadasi.com';
  const isTR = locale === 'tr';
  const path = isTR ? '/' : `/${locale}`;
  const url  = `${base}${path}`;

  const m = (await import(`../../messages/${locale}.json`)).default;
  const orgName = m?.seo?.siteName ?? 'SO Spa & Hamam';
  const orgDesc = m?.seo?.description ?? 'Kuşadası’nda hamam ve spa.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Spa',
    name: orgName,
    description: orgDesc,
    url,
    telephone: '+90 530 689 34 20',
    image: [`${base}/og.png`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cumhuriyet, Rıfat Arın Sk. No: 10C',
      addressLocality: 'Kuşadası',
      addressRegion: 'Aydın',
      addressCountry: 'TR',
      postalCode: '09010'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '11:30',
        closes: '23:00'
      }
    ]
  };

  return (
    <html lang={locale}>
      {/* HEAD: GTM script */}
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5P76TK47');
          `}
        </Script>
      </head>

      <body className="bg-black text-white">
        {/* BODY: GTM noscript (ilk sırada) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5P76TK47"
            height="0"
            width="0"
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>

        <JsonLd data={jsonLd} />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
          <FloatingButtons />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}