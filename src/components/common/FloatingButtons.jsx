"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react"; // ikon kütüphanesi

const GOLD = "#C9A34A";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <Link
        href="https://wa.me/905306893420"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{ backgroundColor: GOLD }}
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Link>

      {/* Telefon */}
      <a
        href="tel:+905306893420"
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
        style={{ backgroundColor: GOLD }}
        data-gtm="call"
      >
        <Phone className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}