import headerColonoscopia from "@/assets/mari-hassan/header-colonoscopia.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521999065921&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-cream pt-16 md:pt-20 lg:pt-20">
      <img
        src={headerColonoscopia}
        alt="Exame de colonoscopia"
        width="1280"
        height="853"
        decoding="async"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_34%,rgba(244,235,223,0.58)_50%,rgba(196,158,105,0.16)_74%,rgba(196,158,105,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.04)_42%,rgba(196,158,105,0.08)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1680px] items-center px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div
          className={`max-w-[58rem] transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-gold">
            <span className="inline-block h-px w-6 bg-gold" />
            Dra. Mariana Hassan
          </p>
          <p className="mb-7 font-body text-xs text-muted-foreground">CRM-RJ 52.928550</p>

          <h1 className="mb-6 max-w-[52rem] font-display text-4xl font-light leading-[1.04] text-foreground sm:text-[3.4rem] md:text-[4.05rem] lg:text-[4.65rem] xl:text-[5.05rem] 2xl:text-[5.35rem]">
            Colonoscopia aos 45+:<br />
            Quem previne no
            <br />
            tempo certo,
            <br />
            <em className="not-italic text-gold">
              protege a vida por
              <br />
              inteiro.
            </em>
          </h1>

          <p className="mb-7 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-[1.1rem] lg:text-lg xl:text-xl">
            Cirurgia Geral e Endoscopia Digestiva com atendimento humanizado. Diagnóstico preciso e tratamento
            individualizado.
          </p>

          <div className="mb-7 h-px w-full max-w-2xl bg-gradient-to-r from-gold/35 via-gold/18 to-transparent" />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-shimmer inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-sm font-normal text-primary-foreground shadow-elevated transition-all duration-300 hover:scale-[1.02] hover:bg-gold-dark active:scale-[0.98] sm:w-auto sm:min-w-[24rem]"
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
      </div>
    </section>
  );
};

export default HeroSection;
