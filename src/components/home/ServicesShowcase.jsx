"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {Playfair_Display} from "next/font/google";

const GOLD = "#C9A34A";
const playfair = Playfair_Display({subsets:["latin"], weight:["600","700"]});

export default function ServicesShowcase() {
  const t = useTranslations("services");
  const locale = useLocale();

  // görselleri public/ içine koy (aşağıdaki yollar örnek)
  const items = [
    {
      key: "swedish",
      img: "/images/home/swedish.webp",
      duration: "30–120 min",
    },
    {
      key: "deep",
      img: "/images/home/derin.webp",
      duration: "30–120 min",
    },
    {
      key: "aroma",
      img: "/images/home/aromaterapi.webp",
      duration: "45–90 min",
    },
  ];

  return (
    <section className="relative bg-[#0F0E0C] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* başlık */}
        <div className="mb-12 text-center">
          <h2 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl`} style={{color:GOLD}}>
            {t("heading")}
          </h2>
        </div>

        <div className="space-y-20">
          {items.map((it, idx) => {
            const leftImg = idx % 2 === 0;
            return (
              <div
                key={it.key}
                className={`grid items-center gap-8 md:grid-cols-2 ${leftImg ? "" : "md:[&>div:first-child]:order-2"}`}
              >
                {/* image card */}
                <div className="relative">
                  <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-lg">
                    <Image
                      src={it.img}
                      alt={t(`${it.key}.imgAlt`)}
                      width={900}
                      height={640}
                      className="h-auto w-full object-cover"
                      priority={idx===0}
                    />
                  </div>
                </div>

                {/* text card */}
                <div>
                  <h3 className={`${playfair.className} text-2xl sm:text-3xl`} style={{color:GOLD}}>
                    {t(`${it.key}.title`)}
                  </h3>

                  <p className="mt-3 text-white/90">{t(`${it.key}.desc`)}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="font-semibold">{t("benefits")}</p>
                      <p className="mt-2 text-white/85">{t(`${it.key}.benefits`)}</p>
                    </div>
                    <div>
                      <p className="font-semibold">{t("perfectFor")}</p>
                      <p className="mt-2 text-white/85">{t(`${it.key}.perfect`)}</p>
                    </div>
                  </div>

                  {/* chips */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/20 px-3 py-1 text-sm">{it.duration}</span>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/booking"
                    locale={locale}
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white shadow-lg"
                    style={{backgroundColor:GOLD}}
                  >
                    {t(`${it.key}.cta`)}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* alt CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/service"
            locale={locale}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
            style={{backgroundColor:"transparent", border:"1px solid rgba(255,255,255,.15)"}}
          >
            {t("more")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}