/*
 * Design: "Notte Italiana" – Dramatischer Hero
 * Vollbreites Bild mit Overlay, goldene Typografie, Scroll-Indikator
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422060842/nvkva2qaTd78Yko7LZ9Ht5/hero-bg-KTbz8ToC9BLPTxvvsihayo.webp";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToMenu = () => {
    const el = document.querySelector("#speisekarte");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="start" className="relative h-screen min-h-[650px] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={HERO_BG}
          alt="Ristorante Da Serafino Ambiente"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/30" />

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.15 0.05 260 / 0.6) 100%)"
      }} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col justify-center items-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gold mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-gold/80 tracking-[0.4em] uppercase text-xs md:text-sm mb-6"
          >
            Ristorante
          </motion.p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-cream leading-[1.05] mb-8">
            Authentische{" "}
            <span className="italic text-gold-gradient font-normal block sm:inline">
              italienische
            </span>
            <br />
            Küche in Planegg
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-body text-cream/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          >
            Ein Stück Italien direkt bei Ihnen um die Ecke.
            Genießen Sie mediterrane Spezialitäten in einzigartiger Atmosphäre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToMenu}
              className="group bg-transparent border border-gold/40 text-gold px-8 py-3.5 text-[13px] tracking-[0.2em] uppercase font-body hover:bg-gold/10 transition-all duration-500 rounded-sm"
            >
              Speisekarte entdecken
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <a
              href="tel:+498989545999"
              className="bg-gold text-navy-dark px-8 py-3.5 text-[13px] tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold-light transition-all duration-500 rounded-sm shadow-lg shadow-gold/10"
            >
              Tisch reservieren
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gold/40"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase font-body">Entdecken</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
