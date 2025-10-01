import CalloutBanner from "@/components/home/CalloutBanner";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const msgs = (await import(`../../../messages/${locale}.json`)).default;

  const base = "https://sospakusadasi.com";
  const isTR = locale === "tr";
  const path = isTR ? "/service" : `/${locale}/service`;

  const siteName = msgs?.seo?.siteName ?? "SO Spa & Hamam";
  const title =
    msgs?.seo?.services?.title ??
    "Hizmetler | SO Spa & Hamam | Kuşadası Hamam & Spa";
  const description =
    msgs?.seo?.services?.description ??
    "SO Spa & Hamam’da geleneksel hamam, kese-köpük ve masaj hizmetlerini keşfedin.";
  const ogAlt = msgs?.seo?.services?.ogAlt ?? title;
  const ogImage = msgs?.seo?.services?.ogImage ?? "/images/seo/og.png";

  return {
    metadataBase: new URL(base),
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "tr-TR": "/service",
        en: "/en/service",
        de: "/de/service",
        "x-default": "/service"
      }
    },
    openGraph: {
      type: "website",
      url: `${base}${path}`,
      siteName,
      title,
      description,
      locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    },
    robots: { index: true, follow: true },
    keywords: msgs?.seo?.services?.keywords ?? [
      "kuşadası hamam",
      "spa hizmetleri",
      "masaj kuşadası",
      "kese köpük spa"
    ]
  };
}

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <ServicesHero />
      <ServicesList />
      <CalloutBanner />
    </main>
  );
}