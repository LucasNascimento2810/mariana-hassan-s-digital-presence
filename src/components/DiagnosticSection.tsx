import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description:
      "Discussão dos seus sintomas, histórico médico e preocupações. Analisamos detalhadamente o seu caso e orientamos os próximos passos.",
  },
  {
    number: "02",
    title: "Exames diagnósticos",
    description:
      "Solicitação de exames complementares, como ultrassonografia, exames de sangue, tomografia ou endoscopia, para um diagnóstico preciso.",
  },
  {
    number: "03",
    title: "Retorno com resultados",
    description:
      "Avaliação dos resultados e definição do melhor tratamento: medicação, reeducação alimentar, acompanhamento ou cirurgia.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description:
      "Consultas de acompanhamento para monitorar o progresso, ajustar o tratamento e garantir sua recuperação completa.",
  },
];

const DiagnosticSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="diagnostico" className="relative scroll-mt-24 overflow-hidden bg-background py-20 md:scroll-mt-28 md:py-28">
      <div className="gold-orb pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-50" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Como funciona</span>
        </div>

        <h2
          className={`mb-16 max-w-2xl font-display text-3xl leading-tight text-foreground transition-all delay-100 duration-700 md:text-4xl lg:text-5xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Do diagnóstico ao <em className="not-italic text-gold">tratamento</em>
        </h2>

        <div className={`grid gap-8 md:grid-cols-4 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {steps.map((step, idx) => (
            <div key={step.number} className="group relative">
              <span className="mb-4 block font-display text-6xl text-gold/10 transition-colors duration-500 group-hover:text-gold/25">
                {step.number}
              </span>
              <div className="mb-4 h-[2px] w-10 bg-gradient-to-r from-gold to-gold/30 transition-all duration-500 group-hover:w-16" />
              <h3 className="mb-3 font-display text-xl text-foreground transition-colors duration-300 group-hover:text-gold">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="absolute right-0 top-10 -z-10 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" />
              )}
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all delay-500 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-sm font-normal text-primary-foreground shadow-card transition-all duration-300 hover:scale-[1.03] hover:bg-gold-dark hover:shadow-elevated active:scale-[0.98]"
          >
            AGENDAR CONSULTA
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
