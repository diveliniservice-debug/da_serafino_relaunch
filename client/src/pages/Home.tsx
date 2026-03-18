/*
 * Design: "Notte Italiana" – Hauptseite
 * Single-Page-Layout mit allen Sektionen
 * Dunkelblau (#0B1D3A) + Gold (#D4A853) Farbschema
 * Cormorant Garamond + Raleway Typografie
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WeeklySpecial from "@/components/WeeklySpecial";
import MenuSection from "@/components/MenuSection";
import AmbienceSection from "@/components/AmbienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GoldDivider from "@/components/GoldDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <GoldDivider text="Benvenuti" />

      <AboutSection />

      <WeeklySpecial />

      <MenuSection />

      <GoldDivider text="La Dolce Vita" />

      <AmbienceSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
