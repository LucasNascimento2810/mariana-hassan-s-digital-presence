import marianaHero from "@/assets/mariana-hero.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,hsl(var(--cream))_0%,hsl(var(--background))_84%)] pt-20 md:pt-24"
    >
      <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 animate-float rounded-full gold-orb" />
      <div
        className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full gold-orb"
        style={{ animationDelay: "2s" }}
      />
      <div className="hero-panel-gradient pointer-events-none absolute inset-y-0 left-[32%] right-0 hidden md:block" />
      <div className="hero-panel-gradient-mobile pointer-events-none absolute inset-x-0 bottom-0 top-[46%] md:hidden" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto flex items-center px-4 py-8 md:py-0 md:min-h-[calc(100vh-6rem)] md:px-8">
        <div className="grid w-full gap-12 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] md:items-center lg:gap-16">
          <div
            className={`z-10 max-w-xl md:-mt-28 lg:-mt-32 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-4 flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-gold">
              <span className="inline-block h-px w-6 bg-gold" />
              Dra. Mariana Hassan
            </p>
            <p className="mb-6 font-body text-xs text-muted-foreground">CRM-RJ 52.108898-6</p>
            <h1 className="mb-6 font-display text-4xl font-normal leading-[1.04] text-foreground md:text-5xl lg:text-6xl">
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
              className="group btn-shimmer inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-sm font-medium text-primary-foreground shadow-card transition-all duration-300 hover:scale-[1.03] hover:bg-gold-dark hover:shadow-elevated active:scale-[0.98]"
            >
              AGENDAR CONSULTA COM A DRA.
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              Atendimento em <span className="text-foreground">Rio de Janeiro</span>
            </p>
          </div>

          <div
            className={`relative flex min-h-[20rem] items-end justify-center transition-all duration-1000 delay-300 md:min-h-[38rem] md:justify-end ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <img
              src={marianaHero}
              alt="Dra. Mariana Hassan"
              className="relative z-10 w-full max-w-[19rem] -translate-y-4 object-contain object-bottom sm:max-w-[22rem] md:max-w-[32rem] md:translate-x-6 md:-translate-y-16 lg:max-w-[36rem] lg:translate-x-8 lg:-translate-y-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
