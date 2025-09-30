"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {Playfair_Display} from "next/font/google";
const playfair = Playfair_Display({subsets:["latin"], weight:["600","700"]});
const GOLD = "#C9A34A";

export default function AboutIntro() {
  const t = useTranslations("aboutPage.intro");

  return (
    <section className="bg-[#0F0E0C]">
      <div className="mx-auto max-w-7xl grid gap-10 px-4 py-16 lg:grid-cols-2">
        {/* text */}
        <div>
          <h2 className={`${playfair.className} text-3xl sm:text-4xl`} style={{color:GOLD}}>
            {t("heading")}
          </h2>
          <p className="mt-4 text-white/85">{t("p1")}</p>
          <p className="mt-3 text-white/80">{t("p2")}</p>
          <ul className="mt-6 space-y-2 text-white/85">
            <li>• {t("bullets.0")}</li>
            <li>• {t("bullets.1")}</li>
            <li>• {t("bullets.2")}</li>
          </ul>
        </div>
        {/* image */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/about/foto.webp"
            alt={t("imgAlt")}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}