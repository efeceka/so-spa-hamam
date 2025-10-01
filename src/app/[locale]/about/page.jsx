// app/[locale]/about/page.js
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutValues from "@/components/about/AboutValues";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const msgs = (await import(`../../../messages/${locale}.json`)).default;

  const base = "https://sospakusadasi.com";
  const isTR = locale === "tr";
  const path = isTR ? "/about" : `/${locale}/about`;

  const siteName = msgs?.seo?.siteName ?? "SO Spa & Hamam";
  const title =
    msgs?.seo?.about?.title ??
    "Hakkımızda | SO Spa & Hamam | Kuşadası Hamam & Spa";
  const description =
    msgs?.seo?.about?.description ??
    "SO Spa & Hamam, Kuşadası’nda geleneksel hamam ve modern spa hizmetlerini bir araya getiriyor.";
  const ogAlt = msgs?.seo?.about?.ogAlt ?? title;

  return {
    metadataBase: new URL(base),
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "tr-TR": "/about",
        en: "/en/about",
        de: "/de/about",
        "x-default": "/about",
      },
    },
    openGraph: {
      type: "website",
      url: `${base}${path}`,
      siteName,
      title,
      description,
      locale,
      images: [
        { url: "/og.png", width: 1200, height: 630, alt: ogAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

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