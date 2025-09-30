"use client";

import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
const GOLD = "#C9A34A";

export default function AboutCTA() {
  const t = useTranslations("aboutPage.cta");
  const locale = useLocale();

  return (
    <section className="bg-[#0F0E0C]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 p-6 sm:flex-row">
          <div>
            <h3 className="text-xl font-semibold" style={{color:GOLD}}>{t("title")}</h3>
            <p className="text-white/80">{t("subtitle")}</p>
          </div>
          <Link
            href="/contact"
            locale={locale}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
            style={{backgroundColor: GOLD}}
          >
            {t("button")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}