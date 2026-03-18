/*
 * Design: "Notte Italiana" – Textbasiertes Logo
 * Elegante Typografie statt Bild-Logo (da das Original kein transparentes PNG hat)
 */

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`flex flex-col items-start leading-none ${className}`}>
      <span className="text-cream/60 font-body text-[0.6em] tracking-[0.35em] uppercase">
        Ristorante
      </span>
      <span className={`font-display italic text-cream ${sizeClasses[size]}`}>
        Da{" "}
        <span className="text-gold-gradient not-italic font-semibold tracking-wide">
          Serafino
        </span>
      </span>
    </div>
  );
}
