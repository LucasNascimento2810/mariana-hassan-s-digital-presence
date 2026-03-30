import marianaHero from "@/assets/mariana-hero.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-end bg-gradient-to-b from-cream via-cream/50 to-background pt-20 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 gold-orb rounded-full pointer-events-none animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 gold-orb rounded-full pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-end justify-between relative z-10">
        {/* Text content */}
        <div className={`flex-1 pb-16 md:pb-24 z-10 max-w-xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-gold" />
            Dra. Mariana Hassan
          </p>
          <p className="font-body text-xs text-muted-foreground mb-6">
            CRM-RJ 52.108898-6
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            Cuidado com <em className="text-gold not-italic">excelência</em> em cirurgia e endoscopia
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
            Cirurgia Geral e Endoscopia Digestiva com atendimento humanizado. Diagnóstico preciso e tratamento individualizado.
          </p>
          <div className="h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent w-full max-w-md mb-8" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated hover:scale-[1.03] active:scale-[0.98]"
          >
            AGENDAR CONSULTA COM A DRA.
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Atendimento em <strong className="text-foreground">Rio de Janeiro</strong>
          </p>
        </div>

        {/* Hero image */}
        <div className={`flex-1 flex justify-center md:justify-end items-end transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <img
            src={marianaHero}
            alt="Dra. Mariana Hassan"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
