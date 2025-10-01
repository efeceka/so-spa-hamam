// app/[locale]/contact/page.js
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const msgs = (await import(`../../../messages/${locale}.json`)).default;

  const base = "https://sospakusadasi.com";
  const isTR = locale === "tr";
  const path = isTR ? "/contact" : `/${locale}/contact`;
  const abs = (p) => `${base}${p}`;

  const siteName = msgs?.seo?.siteName ?? "SO Spa & Hamam";
  const title = msgs?.seo?.contact?.title ?? "İletişim | SO Spa & Hamam";
  const description =
    msgs?.seo?.contact?.description ??
    "SO Spa & Hamam’a ulaşın. Telefon, WhatsApp veya form üzerinden kolayca rezervasyon yapın.";
  const ogAlt = msgs?.seo?.contact?.ogAlt ?? title;
  const ogImage = msgs?.seo?.contact?.ogImage ?? "/images/seo/og.png";
  const keywords = msgs?.seo?.contact?.keywords;

  return {
    metadataBase: new URL(base),
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: {
        "tr-TR": "/contact",       // TR prefixsiz
        en: "/en/contact",
        de: "/de/contact",
        "x-default": "/contact"
      }
    },
    openGraph: {
      type: "website",
      url: abs(path),
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
    robots: { index: true, follow: true }
  };
}

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <ContactHero />
      <ContactSection />
    </main>
  );
}