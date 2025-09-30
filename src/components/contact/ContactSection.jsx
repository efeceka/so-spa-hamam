"use client";

import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-[#0F0E0C]">
      <div className="mx-auto max-w-7xl grid gap-10 px-4 py-16 lg:grid-cols-2">
        {/* Sol: Bilgiler */}
        <ContactDetails />
        {/* Sağ: Form */}
        <ContactForm />
      </div>
    </section>
  );
}