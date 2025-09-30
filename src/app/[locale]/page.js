// src/app/[locale]/page.js
import {Suspense} from 'react';
import CalloutBanner from "@/components/home/CalloutBanner";
import Hero from "@/components/home/Hero";
import PromoBanner from "@/components/home/PromoBanner";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import WhyChoose from "@/components/home/WhyChoose";
// useTranslations burada kullanılmıyor; istersen silebilirsin
// import {useTranslations} from 'next-intl';

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={null}>
        <Hero/>
        <WhyChoose/>
        <PromoBanner/>
        <ServicesShowcase/>
        <CalloutBanner/>
      </Suspense>
    </main>
  );
}