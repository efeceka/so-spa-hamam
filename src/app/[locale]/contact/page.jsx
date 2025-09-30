// app/[locale]/contact/page.js
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact | SO Spa & Hamam"
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <ContactHero />
      <ContactSection />
    </main>
  );
}