import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    description: "Discussão dos seus sintomas, histórico médico e preocupações. Analisamos detalhadamente o seu caso e orientamos os próximos passos.",
  },
  {
    number: "02",
    title: "Exames diagnósticos",
    description: "Solicitação de exames complementares como ultrassonografia, exames de sangue, tomografia ou endoscopia para um diagnóstico preciso.",
  },
  {
    number: "03",
    title: "Retorno com resultados",
    description: "Avaliação dos resultados e definição do melhor tratamento — medicação, reeducação alimentar, acompanhamento ou cirurgia.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Consultas de acompanhamento para monitorar o progresso, ajustar o tratamento e garantir sua recuperação completa.",
  },
];

const DiagnosticSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="diagnostico" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] gold-orb rounded-full pointer-events-none opacity-50" />

      <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Como funciona
          </span>
        </div>

        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16 max-w-2xl leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Do diagnóstico ao <em className="text-gold not-italic">tratamento</em>
        </h2>

        <div className={`grid md:grid-cols-4 gap-8 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <span className="font-display text-6xl text-gold/10 mb-4 block group-hover:text-gold/25 transition-colors duration-500">
                {step.number}
              </span>
              <div className="w-10 h-[2px] bg-gradient-to-r from-gold to-gold/30 mb-4 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10 translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated hover:scale-[1.03] active:scale-[0.98]"
          >
            AGENDAR CONSULTA
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
