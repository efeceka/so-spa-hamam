"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {Playfair_Display} from "next/font/google";
const playfair = Playfair_Display({subsets:["latin"], weight:["700"]});
const GOLD = "#C9A34A";

export default function ContactHero({
  imageSrc="/images/contact/hero.webp",
  imageAlt="Warm spa reception with calm lighting"
}) {
  const t = useTranslations("contactPage.hero");

  return (
    <section className="relative isolate flex items-center justify-center overflow-hidden min-h-[48svh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
        <h1
          className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl leading-tight`}
          style={{color: GOLD}}
        >
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/90 text-base sm:text-lg">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}