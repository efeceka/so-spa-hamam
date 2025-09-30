"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({subsets: ["latin"], weight: ["700"]});
const GOLD = "#C9A34A";

export default function ServicesHero({
  imageSrc = "/images/services/hero.webp",
  imageAlt = "Serene spa room with candles and plants"
}) {
  const t = useTranslations("servicesHero");
  const locale = useLocale();

  return (
    <section className="relative isolate flex items-center justify-center overflow-hidden min-h-[75svh] bg-black">
      {/* Background */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center opacity-90"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center">
        <h1
          className={`${playfair.className} mb-6 leading-tight text-[color:var(--gold)] text-4xl sm:text-5xl md:text-5xl lg:text-5xl`}
          style={{"--gold": GOLD}}
        >
          <span className="block">{t("title1")}</span>
          <span className="block">{t("title2")}</span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
          {t("subtitle")}
        </p>

        <Link
          href="/contact"
          locale={locale}
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-lg"
          style={{backgroundColor: GOLD}}
        >
          {t("cta")}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}