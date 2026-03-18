/*
 * Design: "Notte Italiana" – Goldener Trennbereich
 * Elegante dekorative Linie mit italienischem Flair
 */
import { motion } from "framer-motion";

interface GoldDividerProps {
  className?: string;
  text?: string;
}

export default function GoldDivider({ className = "", text }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-px bg-gradient-to-r from-transparent to-gold/50"
      />
      {text ? (
        <span className="text-gold/40 font-display text-sm italic tracking-wider">{text}</span>
      ) : (
        <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-px bg-gradient-to-l from-transparent to-gold/50"
      />
    </div>
  );
}
