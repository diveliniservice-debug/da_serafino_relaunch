/*
 * Design: "Notte Italiana" – Ambiente & Sportplatz-Vibe
 * Zeigt die Terrasse und spricht Sportler, Familien und Feinschmecker an
 */
import { Users, Trophy, Wine, Utensils } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const TERRACE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422060842/nvkva2qaTd78Yko7LZ9Ht5/terrace-evening-Uhr3L9NytPEZSzsY6bXaJp.webp";

const highlights = [
  {
    icon: Trophy,
    title: "Nach dem Spiel",
    description: "Direkt am Sportplatz gelegen – der perfekte Ort zum Feiern nach dem Match.",
  },
  {
    icon: Users,
    title: "Für Familien",
    description: "Gemütliche Atmosphäre für die ganze Familie. Kinder sind bei uns herzlich willkommen.",
  },
  {
    icon: Wine,
    title: "Weinverkostung",
    description: "Entdecken Sie unsere erlesene Auswahl italienischer Weine am Wochenende.",
  },
  {
    icon: Utensils,
    title: "Feinschmecker",
    description: "Kreative Gerichte und tagesaktuelle Spezialitäten für den anspruchsvollen Gaumen.",
  },
];

export default function AmbienceSection() {
  return (
    <section id="ambiente" className="py-24 md:py-32 relative overflow-hidden">
      {/* Full-width image with overlay */}
      <div className="relative mb-20">
        <ScrollReveal>
          <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <img
              src={TERRACE_IMG}
              alt="Terrasse Da Serafino am Abend"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="container">
                <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-3">
                  Unser Ambiente
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-light text-cream leading-tight max-w-2xl">
                  Nach dem Spiel oder zum{" "}
                  <span className="italic text-gold-gradient">gemütlichen Dinner</span>
                </h2>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Highlights Grid */}
      <div className="container">
        <ScrollReveal className="text-center mb-14">
          <p className="text-cream/55 font-body max-w-2xl mx-auto leading-relaxed text-[15px]">
            Direkt am Sportplatz in Planegg gelegen, vereint unser Restaurant die Leidenschaft
            für Sport mit der Liebe zur italienischen Küche. Ob nach dem Training, zum Familienessen
            oder für einen besonderen Abend – bei uns fühlt sich jeder willkommen.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="group p-6 border border-gold/10 rounded-sm bg-navy-light/10 hover:bg-gold/5 hover:border-gold/25 transition-all duration-500 text-center h-full">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border border-gold/20 group-hover:border-gold/40 transition-colors duration-500">
                  <item.icon className="w-5 h-5 text-gold/60 group-hover:text-gold transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl text-cream mb-2">{item.title}</h3>
                <p className="text-cream/45 text-sm font-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Delivery note */}
        <ScrollReveal className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 border border-gold/20 rounded-sm px-8 py-4 bg-gold/5">
            <span className="font-display text-lg text-gold italic">To Go</span>
            <span className="w-px h-6 bg-gold/25" />
            <span className="text-cream/60 text-sm font-body">
              Pizza- und Pastagerichte ab 8,90 € – auch zum Mitnehmen!
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
