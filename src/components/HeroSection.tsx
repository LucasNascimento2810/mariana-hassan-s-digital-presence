import marianaHero from "@/assets/mariana-hero.png";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end bg-gradient-to-b from-cream to-background pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-end justify-between">
        {/* Text content */}
        <div className="flex-1 pb-16 md:pb-24 z-10 max-w-xl animate-fade-in-up">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
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
          <div className="h-px bg-border w-full max-w-md mb-8" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated"
          >
            AGENDAR CONSULTA COM A DRA.
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Atendimento em <strong className="text-foreground">Rio de Janeiro</strong>
          </p>
        </div>

        {/* Hero image */}
        <div className="flex-1 flex justify-center md:justify-end items-end animate-fade-in">
          <img
            src={marianaHero}
            alt="Dra. Mariana Hassan"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
