"use client";

import {useState} from "react";
import {useLocale, useTranslations} from "next-intl";

const GOLD = "#C9A34A";
const WHATSAPP_NUMBER = "905306893420"; // başında 0 YOK, ülke kodlu

export default function ContactForm() {
  const t = useTranslations("contactPage.form");
  const locale = useLocale();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: "hamam",
    message: ""
  });

  const servicesOptions = [
    {value:"hamam", label: t("services.hamam")},
    {value:"kese", label: t("services.kese")},
    {value:"massage", label: t("services.massage")}
  ];

  function onChange(e) {
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  function buildWhatsappMessage() {
    // Kullanıcı mesajını locale'e göre etiketlerle derleyelim
    const lines = [
      `*${t("wa.title")}*`,
      `${t("wa.name")}: ${form.name || "-"}`,
      `${t("wa.phone")}: ${form.phone || "-"}`,
      `${t("wa.date")}: ${form.date || "-"}`,
      `${t("wa.service")}: ${servicesOptions.find(s=>s.value===form.service)?.label || "-"}`,
      `${t("wa.note")}: ${form.message || "-"}`
    ];
    return encodeURIComponent(lines.join("\n"));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basit validasyon
    if (!form.name || !form.phone) {
      alert(t("errors.required"));
      return;
    }

    const text = buildWhatsappMessage();
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    // yeni sekme
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:p-6 lg:p-8">
      <h3 className="text-xl font-semibold" style={{color:GOLD}}>
        {t("heading")}
      </h3>
      <p className="mt-2 text-white/80">{t("subtitle")}</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
        <div>
          <label className="mb-1 block text-sm text-white/70">{t("fields.name")}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none"
            placeholder={t("placeholders.name")}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-white/70">{t("fields.phone")}</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none"
              placeholder="+90 5xx xxx xx xx"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-white/70">{t("fields.date")}</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={onChange}
              className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm text-white/70">{t("fields.service")}</label>
          <select
            name="service"
            value={form.service}
            onChange={onChange}
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none"
          >
            {servicesOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm text-white/70">{t("fields.message")}</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            className="min-h-[110px] w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 outline-none"
            placeholder={t("placeholders.message")}
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white"
          style={{backgroundColor: GOLD}}
        >
          {t("submit")}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <p className="text-xs text-white/60">
          {t("whatsappNotice")}
        </p>
      </form>
    </div>
  );
}