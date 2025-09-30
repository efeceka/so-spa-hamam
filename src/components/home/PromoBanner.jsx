"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";

const GOLD = "#C9A34A";

export default function PromoBanner({
  imageSrc = "/images/home/banner.webp", // public altına yerleştir
  imageAlt = "Spa towels, stones and soaps on a dark table"
}) {
  const t = useTranslations("promo");
  const locale = useLocale();

  return (
    <section className="bg-[#0F0E0C] py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Card */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10">
          {/* bg image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1800}
            height={720}
            className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px]"
            priority
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/35" />
          {/* left gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

          {/* content */}
          <div className="absolute inset-0">
            <div className="flex h-full items-center justify-between gap-6 px-6 sm:px-10">
              {/* text */}
              <div className="max-w-xl">
                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                  style={{color: GOLD}}
                >
                  {t("title")}
                </h3>
                <p className="mt-4 text-white/90 text-lg sm:text-xl">
                  {t("subtitle")}
                </p>
              </div>

              {/* CTA (right) */}
              <div className="hidden sm:block shrink-0">
                <Link
                  href="/booking"
                  locale={locale}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg"
                  style={{backgroundColor: GOLD}}
                >
                  {t("cta")}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* CTA (mobile) */}
            <div className="sm:hidden absolute bottom-5 left-0 right-0 flex justify-center">
              <Link
                href="/booking"
                locale={locale}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg"
                style={{backgroundColor: GOLD}}
              >
                {t("cta")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}