// src/app/[locale]/page.js
import {Suspense} from 'react';
import Hero from '@/components/home/Hero';
import WhyChoose from '@/components/home/WhyChoose';
import PromoBanner from '@/components/home/PromoBanner';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import CalloutBanner from '@/components/home/CalloutBanner';

export async function generateMetadata({params}) {
  const {locale} = await params;
  const msgs = (await import(`../../messages/${locale}.json`)).default;

  const base = 'https://sospakusadasi.com';
  const isTR = locale === 'tr';
  const path = isTR ? '/' : `/${locale}`;
  const url = `${base}${path}`;

  const siteName = msgs?.seo?.siteName ?? 'SO Spa & Hamam';
  const title =
    msgs?.seo?.home?.title ?? 'SO Spa & Hamam | Kuşadası Hamam & Spa';
  const desc =
    msgs?.seo?.home?.description ??
    'Kuşadası’nda geleneksel Türk hamamı, spa ve masaj deneyimi.';

  return {
    metadataBase: new URL(base),
    title,
    description: desc,
    alternates: {
      canonical: path,
      languages: {
        'tr-TR': '/',
        en: '/en',
        de: '/de',
        'x-default': '/'
      }
    },
    openGraph: {
      type: 'website',
      url,
      siteName,
      title,
      description: desc,
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['/og.png']
    },
    robots: {index: true, follow: true}
  };
}

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={null}>
        <Hero />
        <WhyChoose />
        <PromoBanner />
        <ServicesShowcase />
        <CalloutBanner />
      </Suspense>
    </main>
  );
}