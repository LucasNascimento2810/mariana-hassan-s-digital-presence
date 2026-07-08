import marianaHero from "@/assets/mariana-hero.webp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521999065921&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const highlights = [
  "Investigação da causa dos sintomas",
  "Atendimento humanizado e criterioso",
  "Tratamento individualizado",
];

const CtaSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="gold-orb pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full" />
      <div className="gold-orb pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full opacity-70" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Alívio dos sintomas</span>
        </div>

        <div
          className={`group overflow-hidden rounded-[2.25rem] bg-card shadow-elevated transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div className={`stagger-children px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14 ${isVisible ? "reveal-visible" : ""}`}>
              <div>
                <h2 className="max-w-3xl font-display text-4xl leading-[1.04] text-foreground md:text-5xl lg:text-[3.8rem]">
                  Sofrendo com <em className="text-gold not-italic">azia, refluxo e queimação</em>? Descubra a causa e
                  recupere sua qualidade de vida.
                </h2>
                <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-xl">
                  Agende sua consulta e dê o primeiro passo para o alívio dos sintomas. Não deixe que essas condições
                  afetem sua rotina diária.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gold/15 bg-cream px-4 py-2 font-body text-sm text-foreground/80 transition-colors duration-300 group-hover:border-gold/25"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-shimmer mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-sm uppercase tracking-[0.14em] text-primary-foreground shadow-card transition-all duration-300 hover:scale-[1.03] hover:bg-gold-dark hover:shadow-elevated active:scale-[0.98]"
                >
                  AGENDAR CONSULTA
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className={`relative isolate hidden min-h-[24rem] overflow-hidden bg-[linear-gradient(155deg,hsl(var(--cream))_0%,hsl(var(--gold-light)/0.45)_100%)] lg:block transition-all duration-700 delay-150 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_35%,hsl(var(--gold)/0.18)_0%,transparent_52%)]" />
              <div className="absolute left-8 top-8 z-20 max-w-[12.75rem] rounded-[1.2rem] bg-white/85 px-5 py-4 shadow-card backdrop-blur-sm">
                <p className="font-body text-[11px] uppercase tracking-[0.28em] text-gold">Consulta médica</p>
                <p className="mt-2 max-w-[12rem] font-display-light text-2xl leading-[1.2] tracking-[0.02em] text-foreground">
                  Avaliação precisa para tratar a causa.
                </p>
              </div>
              <div className="absolute bottom-10 left-8 z-20 max-w-[13.5rem] rounded-[1rem] bg-white/85 px-4 py-3 shadow-card backdrop-blur-sm">
                <p className="font-body text-xs uppercase tracking-[0.24em] text-gold">Rio de Janeiro</p>
                <p className="mt-1 font-body text-sm text-foreground/75">Atendimento com cuidado e escuta.</p>
              </div>
              <img
                src={marianaHero}
                alt="Dra. Mariana Hassan"
                width="660"
                height="1015"
                loading="lazy"
                decoding="async"
                className="absolute bottom-[-5.5rem] right-[-2.5rem] z-10 w-[21rem] max-w-none object-contain object-right-bottom transition-transform duration-700 group-hover:translate-y-[-0.35rem] xl:right-[-1.25rem] xl:w-[23rem] 2xl:right-[-0.25rem] 2xl:w-[24rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
