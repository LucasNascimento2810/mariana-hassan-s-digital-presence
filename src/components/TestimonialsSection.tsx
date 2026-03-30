import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Raimundo Nonato",
    text: "Passei por uma Cirurgia de Hérnia Inguinal Bilateral, diga-se de passagem 'um sucesso' graças a Deus e a assistência da Dra Mariana Hassan e Equipe. Uma Profissional de Excelência! Sempre nos atende sorridente e de alto astral impressionante.",
    rating: 5,
  },
  {
    name: "Diogo Barbosa Machado",
    text: "Profissional excepcional! Atenciosa, cuidadosa e extremamente competente. Me senti muito seguro durante todo o tratamento. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Paciente Verificado",
    text: "A Dra. Mariana é uma médica incrível. Me explicou tudo com calma e paciência, tirou todas as minhas dúvidas. O procedimento foi um sucesso e a recuperação muito tranquila.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Depoimentos de pacientes
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground max-w-xl leading-tight">
            O que pacientes dizem após o atendimento.
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-sm">
            Os depoimentos refletem a atenção, respeito e dedicação em cada etapa do cuidado com a saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                  <span className="font-display text-sm text-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-body text-sm font-medium text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
