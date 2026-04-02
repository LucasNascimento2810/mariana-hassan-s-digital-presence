import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Raimundo Nonato",
    text: "Passei por uma cirurgia de hérnia inguinal bilateral, diga-se de passagem, um sucesso, graças a Deus e à assistência da Dra. Mariana Hassan e equipe. Uma profissional de excelência! Sempre nos atende sorridente e com um alto astral impressionante.",
    rating: 5,
  },
  {
    name: "Diogo Barbosa Machado",
    text: "Profissional excepcional! Atenciosa, cuidadosa e extremamente competente. Me senti muito seguro durante todo o tratamento. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Paciente verificado",
    text: "A Dra. Mariana é uma médica incrível. Explicou tudo com calma e paciência, e tirou todas as minhas dúvidas. O procedimento foi um sucesso, e a recuperação foi muito tranquila.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="depoimentos" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute -left-20 bottom-20 w-64 h-64 gold-orb rounded-full pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Depoimentos de pacientes
          </span>
        </div>

        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground max-w-xl leading-tight">
            O que os pacientes dizem após o atendimento.
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-sm">
            Os depoimentos refletem a atenção, o respeito e a dedicação em cada etapa do cuidado com a saúde.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 relative group border border-transparent hover:border-gold/10"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors duration-300" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/15">
                  <span className="font-display text-sm text-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-body text-sm text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
