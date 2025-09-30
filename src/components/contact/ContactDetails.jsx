"use client";

import Link from "next/link";
import {useTranslations} from "next-intl";

const GOLD = "#C9A34A";

export default function ContactDetails() {
  const t = useTranslations("contactPage.details");

  return (
    <div>
      <h2 className="text-2xl font-semibold" style={{color:GOLD}}>
        {t("heading")}
      </h2>

      <p className="mt-3 text-white/85">{t("desc")}</p>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-sm text-white/60">{t("addressLabel")}</p>
          <p className="mt-1">{t("address")}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-sm text-white/60">{t("phoneLabel")}</p>
          <a href="tel:+905306893420" className="mt-1 inline-block hover:opacity-90">
            +90 530 689 34 20
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-sm text-white/60">{t("hoursLabel")}</p>
          <p className="mt-1">{t("hours")}</p>
        </div>

        {/* İsteğe bağlı: küçük gömülü harita */}
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="relative w-full" style={{paddingTop:"56.25%"}}>
            <iframe
              title="Map - SO Spa & Hamam"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.0476403873363!2d27.2628035!3d37.859175699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bea9775445ce8b%3A0x8563222298ee211a!2sKu%C5%9Fadas%C4%B1%20SO%20-%20Spa%20%26%20Hamam%20%26%20Masaj%20%26%20Sauna!5e0!3m2!1str!2sde!4v1759247059696!5m2!1str!2sde"
            />
          </div>
        </div>
      </div>
    </div>
  );
}