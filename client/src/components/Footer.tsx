/*
 * Design: "Notte Italiana" – Eleganter Footer
 * Textbasiertes Logo, Links, Kontaktdaten, Social Media, Copyright
 */
import Logo from "./Logo";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy-dark/50">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Tagline */}
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-cream/40 font-body text-sm leading-relaxed max-w-xs mt-4">
              Authentische italienische Küche in Planegg.
              Seit über 30 Jahren Ihr Stück Italien um die Ecke.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gold/15 text-cream/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gold/15 text-cream/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Navigation</h4>
            <nav className="space-y-2.5">
              {[
                { label: "Start", href: "#start" },
                { label: "Speisekarte", href: "#speisekarte" },
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Ambiente", href: "#ambiente" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream/50 hover:text-gold text-sm font-body transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-gold mb-5">Kontakt</h4>
            <div className="space-y-2 text-cream/50 font-body text-sm">
              <p>Ristorante Da Serafino</p>
              <p>Zur Bergwiese 27</p>
              <p>82152 Planegg</p>
              <div className="pt-3 space-y-1.5">
                <p>
                  Tel:{" "}
                  <a href="tel:+498989545999" className="text-gold hover:text-gold-light transition-colors">
                    089 – 89 54 59 99
                  </a>
                </p>
                <p>
                  Mail:{" "}
                  <a href="mailto:daserafino@live.de" className="text-gold hover:text-gold-light transition-colors">
                    daserafino@live.de
                  </a>
                </p>
              </div>
              <div className="pt-3">
                <p className="text-cream/35 text-xs">Öffnungszeiten:</p>
                <p className="text-cream/50 text-xs mt-1">Mo – Fr: 11:30 – 14:30 &amp; 17:00 – 23:00</p>
                <p className="text-cream/50 text-xs">Sa – So: 11:30 – 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/5">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/25 text-xs font-body">
            &copy; {new Date().getFullYear()} Ristorante Da Serafino. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/25 hover:text-cream/50 text-xs font-body transition-colors">
              Impressum
            </a>
            <a href="#" className="text-cream/25 hover:text-cream/50 text-xs font-body transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
