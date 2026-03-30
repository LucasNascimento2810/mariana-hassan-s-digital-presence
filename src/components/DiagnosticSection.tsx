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
  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Como funciona
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16 max-w-2xl leading-tight">
          Do diagnóstico ao <em className="text-gold not-italic">tratamento</em>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <span className="font-display text-5xl text-gold/20 mb-4 block">
                {step.number}
              </span>
              <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-border -z-10 translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated"
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
