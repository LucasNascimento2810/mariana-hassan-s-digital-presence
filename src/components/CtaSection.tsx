const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
              Agende sua avaliação
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Cuidar da sua saúde começa com uma <em className="text-gold not-italic">avaliação médica</em>
          </h2>
          <p className="font-body text-base text-muted-foreground mb-8">
            Cada caso exige uma decisão diferente. Aqui, ela é médica.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-10 py-5 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated"
          >
            AGENDAR AVALIAÇÃO MÉDICA
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Atendimento em <strong className="text-foreground">Rio de Janeiro</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
