"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {Playfair_Display} from "next/font/google";

const GOLD = "#C9A34A";
const playfair = Playfair_Display({subsets:["latin"], weight:["700"]});

export default function AboutHero({
  imageSrc="/images/about/hero.webp",
  imageAlt="Warm hammam interior with candles"
}) {
  const t = useTranslations("aboutPage.hero");
  const locale = useLocale();

  return (
    <section className="relative isolate flex items-center justify-center overflow-hidden min-h-[65svh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
        <h1
          className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl leading-tight text-[color:var(--gold)]`}
          style={{"--gold": GOLD}}
        >
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-white/90 text-base sm:text-lg">
          {t("subtitle")}
        </p>

        <Link
          href="/contact"
          locale={locale}
          className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
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