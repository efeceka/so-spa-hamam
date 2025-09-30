"use client";

import {useTranslations} from "next-intl";
const GOLD = "#C9A34A";

const Card = ({title, desc, icon}) => (
  <div className="rounded-2xl border border-white/10 bg-[#0F0E0C] p-6">
    <div className="text-3xl" style={{color: GOLD}}>{icon}</div>
    <h3 className="mt-3 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-white/80">{desc}</p>
  </div>
);

export default function AboutValues() {
  const t = useTranslations("aboutPage.values");

  const items = [
    { icon:"🧖", title: t("care.title"),   desc: t("care.desc") },
    { icon:"🌿", title: t("quality.title"),desc: t("quality.desc") },
    { icon:"🤝", title: t("respect.title"),desc: t("respect.desc") }
  ];

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-center text-2xl font-semibold" style={{color:GOLD}}>
          {t("heading")}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it,i)=> <Card key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}