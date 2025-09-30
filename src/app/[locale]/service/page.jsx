import CalloutBanner from "@/components/home/CalloutBanner";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
// (diğer importların üst/altı fark etmez)

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <ServicesHero />
      <ServicesList/>
      <CalloutBanner/>
    </main>
  );
}