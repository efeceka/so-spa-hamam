"use client";

import Link from "next/link";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

const GOLD = "#C9A34A";
const TOP_BG = "#0F0E0C";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const nav = [
    { href: "/", label: t("nav.home") },
    { href: "/service", label: t("nav.service") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/booking", label: t("nav.book") }
  ];

  return (
    <footer className="mt-16 border-t border-white/10 bg-black text-white">
      {/* Üst kısım */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* SOL: Logo + slogan */}
          <div className="flex items-start gap-4">
            {/* Logo görseli */}
            <Image
              src="/images/logo/logo.png" // kendi logo dosyan
              alt="SO Spa & Hamam Logo"
              width={70}
              height={70}
              className="h-16 w-auto object-contain"
              priority
            />
            <div>
              <p
                className="text-2xl font-semibold leading-tight"
                style={{color: GOLD}}
              >
                SO Spa & Hamam
              </p>
              <p className="mt-2 max-w-xs text-white/80">{t("tagline")}</p>
              <p className="mt-3 text-sm text-white/60">{t("address")}</p>
              <a
                href="tel:+905306893420"
                className="mt-1 inline-block text-sm text-white/80 hover:opacity-80"
              >
                {t("phone")}: +90 530 689 34 20
              </a>
            </div>
          </div>

         {/* ORTA: Navigasyon */}
<nav className="flex items-center justify-center">
  <ul className="flex flex-col gap-3 text-lg">
    {nav.map((n) => (
      <li key={n.href}>
        <Link
          href={n.href}
          locale={locale}
          className="hover:opacity-90"
          style={{ transition: "opacity .2s" }}
        >
          {n.label}
        </Link>
      </li>
    ))}
  </ul>
</nav>

          {/* SAĞ: Harita */}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="relative w-full" style={{paddingTop: "56.25%"}}>
              <iframe
                title="Map - Kuşadası Spa"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Kuşadası&hl=tr&z=13&output=embed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alt şerit */}
      <div className="border-t border-white/10" style={{backgroundColor: TOP_BG}}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-white/70 md:flex-row">
          <span>
            © {new Date().getFullYear()} SO Spa & Hamam. {t("rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}