// app/[locale]/about/page.js
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutValues from "@/components/about/AboutValues";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About | SO Spa & Hamam"
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}