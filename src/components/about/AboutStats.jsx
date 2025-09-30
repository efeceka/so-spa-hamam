"use client";

import {useTranslations} from "next-intl";
const GOLD = "#C9A34A";

const Stat = ({value, label}) => (
  <div className="rounded-2xl border border-white/10 bg-[#0F0E0C] p-6 text-center">
    <div className="text-3xl font-semibold" style={{color: GOLD}}>{value}</div>
    <div className="mt-1 text-white/80">{label}</div>
  </div>
);

export default function AboutStats() {
  const t = useTranslations("aboutPage.stats");
  const stats = [
    { value: t("s1.value"), label: t("s1.label") },
    { value: t("s2.value"), label: t("s2.label") },
    { value: t("s3.value"), label: t("s3.label") }
  ];

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s,i)=> <Stat key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}