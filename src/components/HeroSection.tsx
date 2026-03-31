import marianaHero from "@/assets/mariana-hero.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream via-cream/50 to-background pt-24 md:pt-28"
    >
      <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 animate-float rounded-full gold-orb" />
      <div
        className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full gold-orb"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] items-center px-4 md:min-h-[calc(100vh-7rem)] md:px-8">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <div
            className={`z-10 max-w-xl flex-1 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-4 flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-gold">
              <span className="inline-block h-px w-6 bg-gold" />
              Dra. Mariana Hassan
            </p>
            <p className="mb-6 font-body text-xs text-muted-foreground">CRM-RJ 52.108898-6</p>
            <h1 className="mb-6 font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
              Cuidado com <em className="text-gold not-italic">excelência</em> em cirurgia e endoscopia
            </h1>
            <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              Cirurgia Geral e Endoscopia Digestiva com atendimento humanizado. Diagnóstico preciso e tratamento
              individualizado.
            </p>
            <div className="mb-8 h-px w-full max-w-md bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-sm font-medium text-primary-foreground shadow-card transition-all duration-300 hover:scale-[1.03] hover:bg-gold-dark hover:shadow-elevated active:scale-[0.98]"
            >
              AGENDAR CONSULTA COM A DRA.
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              Atendimento em <strong className="text-foreground">Rio de Janeiro</strong>
            </p>
          </div>

          <div
            className={`flex flex-1 items-center justify-center transition-all duration-1000 delay-300 md:justify-end ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <img
              src={marianaHero}
              alt="Dra. Mariana Hassan"
              className="w-full max-w-sm object-contain drop-shadow-2xl md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
