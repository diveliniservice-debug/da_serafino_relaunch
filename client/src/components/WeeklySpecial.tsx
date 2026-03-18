/*
 * Design: "Notte Italiana" – Wochenkarte / Mittagsangebote Banner
 * Goldener Akzent-Banner zwischen Sektionen
 */
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function WeeklySpecial() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gold accent background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
      <div className="absolute inset-0 border-y border-gold/15" />

      <div className="container relative text-center">
        <ScrollReveal>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-px bg-gold mx-auto mb-6"
          />
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-body mb-3">
            Tagesaktuelle Angebote
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-4">
            Unsere{" "}
            <span className="italic text-gold-gradient">Wochenkarte</span>
          </h2>
          <p className="text-cream/50 font-body text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Neben unserer regulären Speisekarte bieten wir täglich wechselnde
            Mittagsgerichte und saisonale Spezialitäten an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="border border-gold/25 rounded-sm px-6 py-3 bg-gold/5">
              <span className="text-gold font-display text-lg">Mittagstisch</span>
              <span className="text-cream/50 font-body text-sm ml-3">ab 9,90 €</span>
            </div>
            <div className="border border-gold/25 rounded-sm px-6 py-3 bg-gold/5">
              <span className="text-gold font-display text-lg">To Go</span>
              <span className="text-cream/50 font-body text-sm ml-3">Pizza & Pasta ab 8,90 €</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
