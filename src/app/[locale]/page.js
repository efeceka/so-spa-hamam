import CalloutBanner from "@/components/home/CalloutBanner";
import Hero from "@/components/home/Hero";
import PromoBanner from "@/components/home/PromoBanner";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import WhyChoose from "@/components/home/WhyChoose";
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  return (
    <main>
      <Hero/>
      <WhyChoose/>
      <PromoBanner/>
      <ServicesShowcase/>
      <CalloutBanner/>
    </main>
  );
}