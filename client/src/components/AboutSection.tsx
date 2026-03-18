/*
 * Design: "Notte Italiana" – Über uns Sektion
 * Asymmetrisches Layout mit Bild und Text, goldene Akzente
 */
import ScrollReveal from "./ScrollReveal";

const ANTIPASTI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663422060842/nvkva2qaTd78Yko7LZ9Ht5/antipasti-board-Xkei4C5uZD75vQw6jkQTEm.webp";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-wine blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold/15 rounded-sm" />
              <img
                src={ANTIPASTI_IMG}
                alt="Antipasti-Platte Da Serafino"
                className="w-full aspect-[4/3] object-cover rounded-sm relative z-10"
              />
              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r border-b border-gold/25 rounded-sm" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-4">
              Über uns
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream leading-tight mb-6">
              Ein Stück{" "}
              <span className="italic text-gold-gradient">Italien</span>
              <br />in Planegg
            </h2>
            <div className="section-divider mb-8 !mx-0" />
            <div className="space-y-5 text-cream/65 font-body leading-relaxed text-[15px]">
              <p>
                Sie haben Lust auf authentisch mediterrane Speisen gleich bei Ihnen um die Ecke?
                Dann heißen wir Sie herzlich bei uns im Da Serafino willkommen!
              </p>
              <p>
                Genießen Sie ein Abendessen mit Freunden, eine Weinverkostung am Wochenende
                oder lassen Sie sich die Pizza zum Feierabend oder auch mittags von uns nach Hause liefern!
              </p>
              <p>
                Neben unserer üblichen Speisekarte mit einer großen Auswahl an Pizza, Pasta, Antipasti und Carni,
                gibt es auch eine tagesaktuelle Karte mit wechselnden Mittagsgerichten!
              </p>
              <p>
                Es ist uns ein besonderes Anliegen, auch unseren Stammgästen immer wieder
                neue kreative Gerichte anzubieten.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { number: "9,90€", label: "Mittagstisch ab" },
                { number: "8,90€", label: "Pizza To Go ab" },
                { number: "30+", label: "Jahre Tradition" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl md:text-3xl text-gold font-light">{stat.number}</div>
                  <div className="text-cream/45 text-xs tracking-wider uppercase mt-1 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
