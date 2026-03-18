/*
 * Design: "Notte Italiana" – Interaktive Speisekarte
 * Tab-basierte Kategorien, goldene Rahmen, elegante Karten
 * Daten 1:1 von der Original-Website übernommen (vollständig)
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const PIZZA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422060842/nvkva2qaTd78Yko7LZ9Ht5/pizza-wood-MFiBXnFv5AVsEvRYnd3pCe.webp";
const PASTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422060842/nvkva2qaTd78Yko7LZ9Ht5/pasta-dish-PUmsbmSdScxyer4XHWKuZb.webp";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "antipasti",
    label: "Antipasti",
    items: [
      { name: "Mozzarella Caprese", description: "Tomaten, Mozzarella und Basilikum", price: "11,90" },
      { name: "Bruschetta Neapolitana", description: "Geröstetes Brot mit Tomaten und Knoblauch", price: "8,90" },
      { name: "Spinat warm", description: "mit Parmesan", price: "8,90" },
      { name: "Insalata di Mare", description: "Meeresfrüchtesalat", price: "15,90" },
      { name: "Antipasto Misto", description: "Gemischte Vorspeise", price: "12,90" },
      { name: "Carpaccio di Manzo", description: "mit geriebenem Parmesan und Rucola", price: "14,90" },
    ],
  },
  {
    id: "insalate",
    label: "Insalate",
    items: [
      { name: "Insalata Verde", description: "Grüner Salat", price: "6,90" },
      { name: "Insalata Mista", description: "Gemischter Salat", price: "7,90" },
      { name: "Insalata Pomodoro", description: "Tomatensalat mit Zwiebeln", price: "8,90" },
      { name: "Insalata Chef", description: "Gem. Salat groß, gegr. Champignons & Putenstreifen", price: "12,90" },
      { name: "Insalata di Rucola", description: "mit geriebenem Parmesan und Tomaten", price: "9,90" },
      { name: "Insalata di Fagioli", description: "mit weißen Bohnen mit Zwiebeln", price: "9,90" },
      { name: "Insalata di Citrioli", description: "Gurkensalat mit Zwiebeln", price: "8,90" },
      { name: "Insalata Nizzarda", description: "Gemischter Salat groß mit Thunfisch und Ei", price: "12,90" },
    ],
  },
  {
    id: "zuppe",
    label: "Zuppe",
    items: [
      { name: "Minestrone", description: "Gemüsesuppe", price: "8,90" },
      { name: "Tomatencremesuppe", description: "Cremige Tomatensuppe", price: "7,90" },
      { name: "Zwiebelsuppe", description: "Klassische Zwiebelsuppe", price: "7,90" },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    items: [
      { name: "Margherita", description: "mit Tomaten und Käse", price: "9,90" },
      { name: "Salami", description: "mit Tomaten, Käse und Salami", price: "10,90" },
      { name: "Prosciutto", description: "mit Tomaten, Käse und Vorderschinken", price: "10,90" },
      { name: "Funghi", description: "mit Tomaten, Käse und frischen Champignons", price: "10,90" },
      { name: "Pizza Pane", description: "mit Tomaten, Gewürzen und Knoblauch", price: "9,90" },
      { name: "Quattro Formaggi", description: "Tomaten, Käse, Parmesan, Gorgonzola, Mozzarella", price: "12,90" },
      { name: "Meeresfrüchte", description: "mit Tomaten, Käse, Meeresfrüchten, Knoblauch", price: "12,90" },
      { name: "Regina", description: "mit Tomaten, Käse, Vorderschinken, frischen Champignons", price: "12,90" },
      { name: "Quattro Stagioni", description: "Tomaten, Käse, Artischocken, Paprika, Peperoni und Champignons", price: "12,90" },
      { name: "Siziliana", description: "Tomaten, Käse, Salami, Peperoni, Sardellen, Champignons", price: "12,90" },
      { name: "Capricciosa", description: "Tomaten, Käse, Vorderschinken, Artischocken, fr. Champignons", price: "12,90" },
      { name: "Hawaii", description: "mit Tomaten, Käse, Ananas und Vorderschinken", price: "12,90" },
      { name: "Chef", description: "mit allem, ohne Fisch, einschließlich Vorderschinken", price: "13,90" },
      { name: "Boscaiola", description: "Tomaten, Käse, Artischocken, Knoblauch", price: "12,90" },
      { name: "Napoletana", description: "Tomaten, Käse, Champignons, Peperoni scharf", price: "12,90" },
      { name: "Americana", description: "Tomaten, Käse, Champignons, Kartoffelscheiben", price: "12,90" },
      { name: "Diabolo", description: "mit Tomaten, Käse und scharfer Salami", price: "12,90" },
      { name: "Parma-Rucola", description: "Tomaten, Käse, Rucola, Parma, ger. Parmesan", price: "13,90" },
      { name: "Calabrese", description: "mit Tomaten, pikanter Salami, Kapern und Zwiebeln", price: "12,90" },
      { name: "Italia", description: "mit Tomaten, Käse, Mozzarella, Spinat und Tomatenscheiben", price: "12,90" },
      { name: "Spezial", description: "Tomaten, Käse, Salami, Vorderschinken, Artischocken, Paprika, Champignons", price: "13,90" },
      { name: "Spaghetti-Pizza", description: "mit Tomaten, Käse und Spaghetti Bolognese", price: "12,90" },
      { name: "Calzone", description: "Tomaten, Käse, Vorderschinken, Salami, und Champignons", price: "12,90" },
      { name: "Spinacci-Gorgonzola", description: "Tomaten, Käse, Spinat mit Gorgonzola", price: "12,90" },
      { name: "Vegetarisch", description: "mit Tomaten, Käse und frischem Gemüse", price: "12,90" },
      { name: "Al Tonno", description: "mit Tomaten, Käse, Thunfisch und Zwiebeln", price: "13,90" },
    ],
  },
  {
    id: "spaghetti",
    label: "Spaghetti",
    items: [
      { name: "Spaghetti Carbonara", description: "mit Ei, Speck und Sahne", price: "12,90" },
      { name: "Spaghetti Meeresfrüchte", description: "Tomatensauce, Meeresfrüchte und Knoblauch", price: "14,90" },
      { name: "Spaghetti Bolognese", description: "mit Fleischsauce", price: "11,90" },
      { name: "Krabben-Rucola", description: "mit Tomatensauce und Knoblauch", price: "15,90" },
      { name: "Spaghetti Napoli", description: "mit Tomatensauce und Basilikum", price: "10,90" },
      { name: "Spaghetti Aglio e Olio", description: "Knoblauch, Olivenöl, Peperoni – scharf und Petersilie", price: "12,90" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Rigatoni Vegetarisch", description: "mit frischen Gemüse, Sahnesauce", price: "12,90" },
      { name: "Rigatoni al Forno", description: "Vorderschinken, Erbsen, Champignons, Sahnesauce, mit Käse überbacken", price: "12,90" },
      { name: "Penne alla Diabolo", description: "Italienische spezielle pikante Salami, Peperoncino, Parmesan und Tomatensauce", price: "12,90" },
      { name: "Penne all' Chef", description: "mit Champignons, Oliven, Vorderschinken, Salami, Artischocken, Paprika, im Ofen überbacken", price: "13,90" },
      { name: "Penne all' Arrabiata", description: "Knoblauch, Tomatensauce, scharf", price: "12,90" },
      { name: "Linguine Salmone", description: "mit Lachs in Sahnesauce", price: "15,90" },
      { name: "Tagliatelle Quattro Formaggi", description: "mit 4 versch. Käsesorten", price: "13,90" },
      { name: "Tortellini al Forno", description: "mit Käse überbacken, Vorderschinken, Erbsen, Champignons", price: "13,90" },
      { name: "Cannelloni al Forno", description: "mit Käse überbacken, gefüllt mit Ricotta, Spinat", price: "13,90" },
      { name: "Lasagne al Forno", description: "mit Käse überbacken, Fleischsauce, Bechamelsauce", price: "12,90" },
      { name: "Tagliatelle Emiliana", description: "Schinken, Erbsen, Champignons u. Sahnesauce", price: "13,90" },
      { name: "Tortellini alla Panna", description: "mit Vorderschinken, Sahnesauce", price: "13,90" },
    ],
  },
  {
    id: "gnocchi",
    label: "Gnocchi",
    items: [
      { name: "Gnocchi Vegetarisch", description: "mit frischem Gemüse", price: "13,90" },
      { name: "Gnocchi Gorgonzola", description: "mit Spinat und Gorgonzolasauce", price: "13,90" },
      { name: "Überbackene Kartoffeln", description: "mit frischem Gemüse", price: "13,90" },
      { name: "Überbackene Kartoffel mit Shrimps", description: "mit Zucchini, Zwiebeln und Knoblauch", price: "14,90" },
    ],
  },
  {
    id: "risotti",
    label: "Risotti",
    items: [
      { name: "Risotto Gamberini", description: "mit Garnelen", price: "14,90" },
      { name: "Risotto Primavera", description: "Vegetarisch mit frischem Gemüse", price: "13,90" },
      { name: "Risotto al Forno", description: "Champignons, Vorderschinken, mit Käse überbacken", price: "12,90" },
      { name: "Risotto di Mare", description: "mit Meeresfrüchten", price: "15,90" },
    ],
  },
  {
    id: "dolci",
    label: "Dolci",
    items: [
      { name: "Tartufo", description: "mit Sahne", price: "7,90" },
      { name: "Tiramisu", description: "Klassisches italienisches Dessert", price: "6,90" },
      { name: "Panna Cotta", description: "mit Himbeersauce", price: "7,90" },
      { name: "Cassata Siciliana", description: "mit Himbeersauce", price: "7,90" },
      { name: "Mousse au Chocolat", description: "Schokoladenmousse", price: "7,90" },
      { name: "Profiteroles", description: "Windbeutel mit Schokolade", price: "8,90" },
    ],
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("pizza");

  const activeItems = menuData.find((c) => c.id === activeCategory)?.items || [];

  return (
    <section id="speisekarte" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-wine/5 blur-[100px]" />
      </div>

      <div className="container relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-4">
            Unsere Karte
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight mb-6">
            La nostra{" "}
            <span className="italic text-gold-gradient">Speisekarte</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-cream/60 font-body max-w-lg mx-auto">
            Entdecken Sie unsere Auswahl an authentischen italienischen Gerichten –
            frisch zubereitet mit besten Zutaten.
          </p>
        </ScrollReveal>

        {/* Featured Images */}
        <ScrollReveal className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative group overflow-hidden rounded-sm">
              <img
                src={PIZZA_IMG}
                alt="Pizza aus dem Holzofen"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-display text-2xl text-cream">Pizza</p>
                <p className="text-gold/80 text-sm font-body">Frisch aus dem Ofen</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-sm">
              <img
                src={PASTA_IMG}
                alt="Frische Pasta"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-display text-2xl text-cream">Pasta</p>
                <p className="text-gold/80 text-sm font-body">Frisch zubereitet</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-3 md:px-5 py-2 md:py-2.5 text-[10px] md:text-xs tracking-[0.12em] uppercase font-body transition-all duration-300 rounded-sm border ${
                  activeCategory === category.id
                    ? "bg-gold/15 border-gold/50 text-gold"
                    : "bg-transparent border-gold/10 text-cream/50 hover:text-cream/80 hover:border-gold/25"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto"
          >
            {/* Category title */}
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl italic text-gold/80">
                {menuData.find((c) => c.id === activeCategory)?.label}
              </h3>
            </div>

            <div className="space-y-0.5">
              {activeItems.map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.025, duration: 0.3 }}
                  className="group flex items-baseline gap-3 py-3 px-4 hover:bg-gold/[0.03] transition-colors duration-300 rounded-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-display text-lg md:text-xl text-cream group-hover:text-gold transition-colors duration-300 shrink-0">
                        {item.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-gold/10 translate-y-[-4px] mx-1 min-w-[20px]" />
                      <span className="font-display text-lg md:text-xl text-gold shrink-0 tabular-nums">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-cream/40 text-sm font-body mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Extras note */}
        <ScrollReveal className="mt-12 text-center">
          <div className="inline-block border border-gold/15 rounded-sm px-6 py-4 bg-navy-light/20">
            <p className="text-cream/40 text-xs font-body tracking-wider leading-relaxed">
              Extras: an Stelle von Salami lieber Vorderschinken, Peperoni, mehr Käse, frischer Knoblauch, Rucola, Mozzarella – €1,00
            </p>
            <p className="text-cream/40 text-xs font-body tracking-wider mt-1 leading-relaxed">
              Sardellen, Thunfisch, Gorgonzola, Speck – €1,90 · Krabben, Parma, Putenstreifen – €2,50
            </p>
          </div>
        </ScrollReveal>

        {/* Aperitivo note */}
        <ScrollReveal className="mt-8 text-center">
          <p className="font-display text-2xl italic text-gold/50">
            Aperitivo / Aperitif auf Anfrage
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
