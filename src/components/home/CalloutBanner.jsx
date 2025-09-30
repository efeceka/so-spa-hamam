"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({subsets: ["latin"], weight: ["600","700"]});
const GOLD = "#C9A34A";

export default function CalloutBanner() {
  const t = useTranslations("callout");
  const locale = useLocale();

  return (
    <section className="bg-[#0F0E0C] py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10">
          {/* BG image */}
          <Image
            src="/images/home/callout.webp"
            alt="Relaxing massage close-up"
            width={2000}
            height={900}
            priority
            className="h-[240px] w-full object-cover sm:h-[360px] md:h-[440px]"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex h-full items-center">
            <div className="flex w-full flex-col sm:flex-row items-start justify-between gap-6 px-6 sm:px-10">
              {/* Left text */}
              <div className="max-w-3xl">
                <h3
                  className={`${playfair.className} text-2xl sm:text-4xl md:text-5xl leading-tight`}
                  style={{color: GOLD}}
                >
                  {t("title")}
                </h3>
                <p className="mt-3 text-white/90 text-sm sm:text-lg md:text-xl leading-relaxed">
                  {t("subtitle")}
                </p>

                {/* Mobile CTA → yazının altında */}
                <div className="mt-4 sm:hidden">
                  <Link
                    href="/contact"
                    locale={locale}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                    style={{backgroundColor: GOLD}}
                  >
                    {t("cta")}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right CTA (desktop, ortalanmış) */}
              <div className="hidden sm:flex shrink-0 self-center">
                <Link
                  href="/contact"
                  locale={locale}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg"
                  style={{backgroundColor: GOLD}}
                >
                  {t("cta")}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}