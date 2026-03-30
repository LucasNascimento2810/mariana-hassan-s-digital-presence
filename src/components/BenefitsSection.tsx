import { CheckCircle } from "lucide-react";

const benefits = [
  { title: "Menor risco de infecção", description: "Incisões pequenas com menos exposição a bactérias." },
  { title: "Recuperação mais rápida", description: "Retorno às atividades diárias em um período mais curto." },
  { title: "Menor dor pós-operatória", description: "Menos dor e recuperação mais confortável." },
  { title: "Menor trauma tecidual", description: "Menos cicatrizes e menor impacto estético." },
  { title: "Maior precisão", description: "Câmera de vídeo com visão ampliada e detalhada." },
  { title: "Cuidado centrado no paciente", description: "Atendimento humanizado e personalizado em cada etapa." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Diferenciais
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-12 max-w-xl leading-tight">
          Por que nos <em className="text-gold not-italic">escolher</em>?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <CheckCircle className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
