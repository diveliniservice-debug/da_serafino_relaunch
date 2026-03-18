/*
 * Design: "Notte Italiana" – Kontakt & Reservierung
 * Visuelles Formular (nur Frontend), Öffnungszeiten, Karte
 * Formulare senden keine Daten – nur Frontend-Feedback
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast.success("Vielen Dank! Ihre Anfrage wurde entgegengenommen.", {
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/[0.02] blur-[150px]" />
      </div>

      <div className="container relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-body mb-4">
            Kontakt & Reservierung
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight mb-6">
            Reservieren Sie{" "}
            <span className="italic text-gold-gradient">Ihren Tisch</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-cream/60 font-body max-w-lg mx-auto">
            Wir freuen uns auf Ihren Besuch. Reservieren Sie telefonisch oder
            schreiben Sie uns eine Nachricht.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-5">
            {/* Phone - Primary CTA */}
            <div className="border border-gold/20 rounded-sm p-5 bg-gold/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="text-cream/50 text-[10px] uppercase tracking-wider font-body">Reservierung</p>
                  <a href="tel:+498989545999" className="font-display text-xl text-gold hover:text-gold-light transition-colors">
                    089 – 89 54 59 99
                  </a>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-4 p-4 border border-gold/10 rounded-sm hover:border-gold/20 transition-colors">
                <Mail className="w-4 h-4 text-gold/70 mt-1 shrink-0" />
                <div>
                  <p className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-0.5">E-Mail</p>
                  <a href="mailto:daserafino@live.de" className="text-cream hover:text-gold transition-colors font-body text-sm">
                    daserafino@live.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-gold/10 rounded-sm hover:border-gold/20 transition-colors">
                <MapPin className="w-4 h-4 text-gold/70 mt-1 shrink-0" />
                <div>
                  <p className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-0.5">Adresse</p>
                  <p className="text-cream font-body text-sm">Zur Bergwiese 27</p>
                  <p className="text-cream/70 font-body text-sm">82152 Planegg</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-gold/10 rounded-sm hover:border-gold/20 transition-colors">
                <Clock className="w-4 h-4 text-gold/70 mt-1 shrink-0" />
                <div>
                  <p className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1">Öffnungszeiten</p>
                  <div className="text-cream font-body text-sm space-y-1">
                    <div className="flex justify-between gap-4">
                      <span className="text-cream/60">Mo – Fr</span>
                      <span className="text-cream/90">11:30 – 14:30 &amp; 17:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-cream/60">Sa – So</span>
                      <span className="text-cream/90">11:30 – 23:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="border border-gold/10 rounded-sm overflow-hidden aspect-[16/10]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.5!2d11.4267!3d48.1044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf0b0b0b0b0b%3A0x0!2sZur+Bergwiese+27%2C+82152+Planegg!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Da Serafino"
              />
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="border border-gold/15 rounded-sm p-6 md:p-8 bg-navy-light/20">
              <h3 className="font-display text-2xl text-cream mb-1">Nachricht senden</h3>
              <p className="text-cream/40 font-body text-sm mb-6">Füllen Sie das Formular aus und wir melden uns bei Ihnen.</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1.5 block">Name *</label>
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full bg-navy/60 border border-gold/12 rounded-sm px-4 py-3 text-cream font-body text-sm placeholder:text-cream/20 focus:border-gold/35 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1.5 block">E-Mail *</label>
                  <input
                    type="email"
                    placeholder="ihre@email.de"
                    className="w-full bg-navy/60 border border-gold/12 rounded-sm px-4 py-3 text-cream font-body text-sm placeholder:text-cream/20 focus:border-gold/35 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1.5 block">Telefon</label>
                  <input
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full bg-navy/60 border border-gold/12 rounded-sm px-4 py-3 text-cream font-body text-sm placeholder:text-cream/20 focus:border-gold/35 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1.5 block">Personenanzahl</label>
                  <select className="w-full bg-navy/60 border border-gold/12 rounded-sm px-4 py-3 text-cream font-body text-sm focus:border-gold/35 focus:outline-none transition-colors appearance-none">
                    <option value="1">1 Person</option>
                    <option value="2">2 Personen</option>
                    <option value="3">3 Personen</option>
                    <option value="4">4 Personen</option>
                    <option value="5">5 Personen</option>
                    <option value="6">6+ Personen</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1.5 block">Datum</label>
                  <input
                    type="date"
                    className="w-full bg-navy/60 border border-gold/12 rounded-sm px-4 py-3 text-cream font-body text-sm focus:border-gold/35 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1.5 block">Uhrzeit</label>
                  <input
                    type="time"
                    className="w-full bg-navy/60 border border-gold/12 rounded-sm px-4 py-3 text-cream font-body text-sm focus:border-gold/35 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-cream/50 text-[10px] uppercase tracking-wider font-body mb-1.5 block">Nachricht</label>
                <textarea
                  rows={4}
                  placeholder="Besondere Wünsche oder Anmerkungen..."
                  className="w-full bg-navy/60 border border-gold/12 rounded-sm px-4 py-3 text-cream font-body text-sm placeholder:text-cream/20 focus:border-gold/35 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className={`w-full flex items-center justify-center gap-2.5 py-3.5 text-[13px] tracking-[0.2em] uppercase font-body font-semibold rounded-sm transition-all duration-500 ${
                  formSubmitted
                    ? "bg-green-600/20 border border-green-500/40 text-green-400"
                    : "bg-gold text-navy-dark hover:bg-gold-light shadow-lg shadow-gold/10 hover:shadow-gold/20"
                }`}
              >
                {formSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Nachricht gesendet
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Nachricht senden
                  </>
                )}
              </button>

              <p className="text-cream/20 text-[11px] font-body mt-3 text-center leading-relaxed">
                * Dieses Formular ist ein Design-Prototyp. Für Reservierungen rufen Sie uns bitte direkt an.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
