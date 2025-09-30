"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";

const GOLD = "#C9A34A";

export default function WhyChoose({
  imgTop = "/images/home/woman.webp",     // public altına koy
  imgBottom = "/images/home/man.webp",  // public altına koy
}) {
  const t = useTranslations("why");
  const locale = useLocale();

  const features = [
    { icon: "🌿", title: t("feat1") },
    { icon: "🧖", title: t("feat2") },
    { icon: "🗺️", title: t("feat3") }
  ];

  return (
    <section className="relative bg-[#0F0E0C] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        {/* Feature pills */}
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 rounded-2xl border border-white/10 px-6 py-5 ${
                i === 1 ? "bg-white text-black shadow-xl" : "bg-white/10"
              }`}
            >
              <span className="text-2xl">{f.icon}</span>
              <p className="text-lg font-semibold leading-snug">{f.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
  {/* Görseller (mobilde yukarıda, desktopta sağda) */}
  <div className="relative order-1 lg:order-2">
    {/* back card */}
    <div className="relative mx-auto w-[88%] rounded-3xl overflow-hidden border border-white/10 shadow-lg">
      <Image
        src={imgTop}
        alt={t("img_top_alt")}
        width={900}
        height={620}
        className="h-auto w-full object-cover"
        priority
      />
    </div>
    {/* front card */}
    <div className="relative -mt-16 ml-auto w-[68%] rounded-3xl overflow-hidden border border-white/10 shadow-xl">
      <Image
        src={imgBottom}
        alt={t("img_bottom_alt")}
        width={720}
        height={520}
        className="h-auto w-full object-cover"
      />
    </div>
  </div>

  {/* Metin (mobilde aşağıda, desktopta solda) */}
  <div className="order-2 lg:order-1">
    <h2
      className="text-4xl sm:text-5xl font-semibold leading-tight"
      style={{ color: GOLD }}
    >
      {t("heading_line1")}
      <br />
      {t("heading_line2")}
    </h2>

    <h3 className="mt-8 text-2xl font-semibold">{t("subheading")}</h3>

    <p className="mt-4 max-w-xl text-white/85 text-lg leading-relaxed">
      {t("paragraph")}
    </p>

    <Link
      href="/about"
      locale={locale}
      className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white"
      style={{
        backgroundColor: "transparent",
        border: "1px solid rgba(255,255,255,.15)",
      }}
    >
      {t("read_more")}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M13 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}