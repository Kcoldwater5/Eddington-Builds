import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import WhyPartner from "@/components/WhyPartner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Eddington Builds",
    description:
      "Commercial playground installation subcontractor serving playground companies, vendors, and project representatives.",
    url: "https://eddingtonbuilds.com",
    email: "contact@eddingtonbuilds.com",
    telephone: "+1-000-000-0000",
    areaServed: "United States",
    serviceType: [
      "Commercial playground installation",
      "Site preparation support",
      "Safety surfacing support",
      "Equipment assembly",
      "Final walkthrough and punch list",
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Work />
        <Services />
        <WhyPartner />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
