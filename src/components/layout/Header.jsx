"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const GOLD = "#C9A34A";
const TOP_BG = "#1C1814";
const NAV_BG = "#0F0E0C";

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 3.2 12 19.8 19.8 0 0 1 .1 3.4 2 2 0 0 1 2.1 1h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L6.1 8.9a16 16 0 0 0 7 7l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7A2 2 0 0 1 22 16.9Z"
        stroke={GOLD}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke={GOLD} strokeWidth="1.4" />
      <path d="M12 7v5l3 2" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const nav = [
    { href: "/", label: t("nav_home") },
    { href: "/service", label: t("nav_service") },
    { href: "/about", label: t("nav_about") },
    { href: "/contact", label: t("nav_contact") },
  ];

  return (
    <header className="w-full text-white relative z-50">
      {/* TOP BAR */}
      <div className="w-full" style={{ backgroundColor: TOP_BG }}>
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 text-[15px]">
          <div className="flex items-center gap-8">
            <span className="inline-flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" />
              <a href="tel:+905306893420" className="tracking-wide hover:opacity-90">
                {t("top_phone")}
              </a>
            </span>

            {/* Saatler mobilde gizli */}
            <span className="hidden sm:inline-flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md" style={{ backgroundColor: "#3A2E22" }}>
                <TimeIcon className="h-4 w-4" />
              </span>
              <span className="tracking-wide">{t("top_hours")}</span>
            </span>
          </div>
          <LocaleSwitcher />
        </div>
      </div>

      {/* NAV BAR */}
      <div className="w-full" style={{ backgroundColor: NAV_BG }}>
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" locale={locale} className="flex items-center gap-3">
            <Image
                src="/images/logo/logo.png"
                alt="Spa & Hamam Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
                priority
            />
            <span className="font-serif-headline text-2xl font-semibold tracking-wide" style={{ color: GOLD }}>
                Spa &amp; Hamam
            </span>
            </Link>
            {/* Nav (desktop) */}
            <nav className="hidden items-center gap-12 md:flex">
              {nav.map((n) => {
                const active = pathname === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    locale={locale}
                    className={`text-lg transition ${active ? "font-semibold" : "font-normal"}`}
                    style={{ color: active ? GOLD : "white" }}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA (desktop) */}
            <div className="hidden md:block">
              <Link href="/contact" locale={locale} className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-white" style={{ backgroundColor: GOLD }}>
                {t("cta_book")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Burger (mobile) */}
            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Open menu">
              <div className="space-y-1.5">
                <span className="block h-0.5 w-7 bg-white"></span>
                <span className="block h-0.5 w-7 bg-white"></span>
                <span className="block h-0.5 w-7 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (overlay, hero üstüne biner) */}
      {open && (
  <div
    className="absolute left-0 top-full w-full bg-[#14120F] z-50 flex flex-col gap-3 px-6 py-6 md:hidden"
  >
    {nav.map((n) => {
      const active = pathname === n.href;
      return (
        <Link
          key={n.href}
          href={n.href}
          locale={locale}
          onClick={() => setOpen(false)}
          className={`rounded-lg px-2 py-2 text-lg ${active ? "font-semibold" : ""}`}
          style={{ color: active ? GOLD : "white" }}
        >
          {n.label}
        </Link>
      );
    })}
    <Link
      href="/contact"
      locale={locale}
      onClick={() => setOpen(false)}
      className="mt-3 inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-base font-semibold text-white"
      style={{ backgroundColor: GOLD }}
    >
      {t("cta_book")}
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
)}
    </header>
  );
}