import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { title: "Menor risco de infecção", description: "Incisões pequenas com menos exposição a bactérias." },
  { title: "Recuperação mais rápida", description: "Retorno às atividades diárias em um período mais curto." },
  { title: "Menor dor pós-operatória", description: "Menos dor e recuperação mais confortável." },
  { title: "Menor trauma tecidual", description: "Menos cicatrizes e menor impacto estético." },
  { title: "Maior precisão", description: "Câmera de vídeo com visão ampliada e detalhada." },
  { title: "Cuidado centrado no paciente", description: "Atendimento humanizado e personalizado em cada etapa." },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute right-0 top-0 w-72 h-72 gold-orb rounded-full pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Diferenciais
          </span>
        </div>

        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-12 max-w-xl leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Por que nos <em className="text-gold not-italic">escolher</em>?
        </h2>

        <div className={`grid md:grid-cols-3 gap-6 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group border border-transparent hover:border-gold/10"
            >
              <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{b.title}</h3>
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
