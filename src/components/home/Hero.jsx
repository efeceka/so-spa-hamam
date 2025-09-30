"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";

const GOLD = "#C9A34A";

export default function Hero({
  bgSrc = "/images/home/hero.webp",     // arka plan (public altı)
  bgAlt = "Spa ambience with warm lighting and plants",
  logoSrc = "/images/logo/logo.png",         // ortadaki logo görseli
  headerOffset = 135                    // header toplam yüksekliği (px)
}) {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section
      className="relative isolate flex items-center justify-center overflow-hidden"
      style={{ minHeight: `calc(100svh - ${headerOffset}px)` }}
    >
      {/* Background image */}
      <Image
        src={bgSrc}
        alt={bgAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
        {/* SEO için gizli başlık (çevirilerden) */}
        <h1 className="sr-only">
          {t("title1", {default: "Spa & Hammam"})} {t("title2", {default: ""})}
        </h1>

        {/* Centered Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src={logoSrc}
            alt="SO Spa & Hamam Logo"
            width={360}
            height={120}
            priority
            className="h-auto w-[220px] sm:w-[280px] md:w-[340px] drop-shadow-[0_6px_22px_rgba(0,0,0,.45)]"
          />
        </div>

        {/* Tagline / short copy */}
        <p className="mx-auto mb-10 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
          {t("subtitle")}
        </p>

        {/* CTA */}
        <Link
          href="/booking"
          locale={locale}
          className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-lg"
          style={{ backgroundColor: GOLD }}
        >
          {t("cta")}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}