import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-cream" />
      <div className="absolute inset-0 gold-orb opacity-30" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div ref={ref} className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className={`max-w-2xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
              Agende sua avaliação
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Cuidar da sua saúde começa com uma <em className="text-gold not-italic">avaliação médica</em>
          </h2>
          <p className="font-body text-base text-muted-foreground mb-10">
            Cada caso exige uma decisão diferente. Aqui, ela é médica.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-10 py-5 rounded-full transition-all duration-300 shadow-elevated hover:shadow-[0_16px_60px_-12px_hsl(var(--gold)/0.35)] hover:scale-[1.05] active:scale-[0.98]"
          >
            AGENDAR AVALIAÇÃO MÉDICA
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="font-body text-sm text-muted-foreground mt-5">
            Atendimento em <strong className="text-foreground">Rio de Janeiro</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
