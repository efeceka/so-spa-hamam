"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({subsets: ["latin"], weight: ["600","700"]});
const GOLD = "#C9A34A";

export default function ServicesList() {
  // Anasayfadaki 'services' objesiyle çakışmasın diye: servicesPage
  const t = useTranslations("servicesPage");
  const locale = useLocale();

  // Görsel yolları & süreler burada; metinler i18n'den
  const rows = [
    {
      key: "hamam",
      img: "/images/services/hamam.webp",
      duration: "30–60 min"
    },
    {
      key: "kese",
      img: "/images/services/kese.webp",
      duration: "20–40 min"
    },
    {
      key: "massage",
      img: "/images/services/masaj.webp",
      duration: "30–120 min"
    }
  ];

  return (
    <section className="bg-[#0F0E0C] text-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        {/* Başlık */}
        <h2
          className={`${playfair.className} text-center text-3xl sm:text-4xl md:text-5xl`}
          style={{color: GOLD}}
        >
          {t("heading")}
        </h2>

        {/* Satırlar */}
        <div className="mt-12 space-y-20">
          {rows.map((r, i) => {
            const reverse = i % 2 === 1; // 2. satırda görsel sağda
            return (
              <div
                key={r.key}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Görsel kartı + gold çizgi efekti */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                    <Image
                      src={r.img}
                      alt={t(`items.${r.key}.imgAlt`)}
                      width={900}
                      height={640}
                      className="w-full h-auto object-cover"
                      priority={i === 0}
                    />
                  </div>
                </div>

                {/* Metin bloğu */}
                <div>
                  <h3
                    className={`${playfair.className} text-2xl sm:text-3xl mb-2`}
                    style={{color: GOLD}}
                  >
                    {t(`items.${r.key}.title`)}
                  </h3>

                  <p className="text-white/90">{t(`items.${r.key}.desc`)}</p>

                  {/* Benefits & Perfect For */}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="font-semibold">{t("labels.benefits")}</p>
                      <p className="mt-2 text-white/85">
                        {t(`items.${r.key}.benefits`)}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">{t("labels.perfectFor")}</p>
                      <p className="mt-2 text-white/85">
                        {t(`items.${r.key}.perfectFor`)}
                      </p>
                    </div>
                  </div>

                  {/* Süre pill’i + sağda CTA */}
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <span className="rounded-full border border-white/20 px-3 py-1 text-sm">
                      {r.duration}
                    </span>

                    <div className="ml-auto">
                      <Link
                        href="/contact"
                        locale={locale}
                        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-lg"
                        style={{backgroundColor: GOLD}}
                      >
                        {t("book")} {t(`items.${r.key}.btnShort`)}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}