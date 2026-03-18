/*
 * Design: "Notte Italiana" – Dunkelblau-Gold
 * Navbar: Transparent → Solid beim Scrollen, goldene Akzente
 * Textbasiertes Logo, Sticky CTA auf Mobile
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Start", href: "#start" },
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
            : "bg-gradient-to-b from-navy/80 to-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#start"
            onClick={(e) => { e.preventDefault(); handleNavClick("#start"); }}
            className="relative z-10 shrink-0"
          >
            <Logo size={scrolled ? "sm" : "md"} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-cream/70 hover:text-gold font-body text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:+498989545999"
              className="ml-2 flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-5 py-2.5 text-[13px] tracking-[0.15em] uppercase hover:bg-gold/20 transition-all duration-300 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              Reservieren
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream/80 hover:text-gold transition-colors z-10"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="text-cream hover:text-gold font-display text-3xl italic tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="mt-6"
              >
                <a
                  href="tel:+498989545999"
                  className="flex items-center gap-3 bg-gold text-navy-dark font-body font-semibold px-8 py-4 text-sm tracking-[0.2em] uppercase rounded-sm shadow-lg shadow-gold/20"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt Reservieren
                </a>
              </motion.div>

              {/* Contact info in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-cream/30 font-body text-xs tracking-wider">Zur Bergwiese 27, 82152 Planegg</p>
                <p className="text-cream/30 font-body text-xs tracking-wider mt-1">daserafino@live.de</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA */}
      <motion.a
        href="tel:+498989545999"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="lg:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-gold text-navy-dark font-semibold px-5 py-3 rounded-full shadow-lg shadow-gold/25 hover:shadow-gold/40 transition-all duration-300 text-sm tracking-wider"
      >
        <Phone className="w-4 h-4" />
        Reservieren
      </motion.a>
    </>
  );
}
