import exameColonoscopia from "@/assets/mari-hassan/exame-colonoscopia.jpg";
import exameEndoscopia from "@/assets/mari-hassan/exame-endoscopia.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const exams = [
  {
    image: exameEndoscopia,
    title: "Endoscopia: seu corpo dá sinais, escute",
    description: [
      "Azia frequente, dor no estômago, empachamento, dificuldade para engolir... Isso não é 'normal'.",
      "A endoscopia digestiva alta permite enxergar o que está acontecendo por dentro e identificar problemas como gastrite, refluxo e lesões precoces. Quanto antes investigar, mais simples é tratar. Não ignore os sinais. Seu corpo está avisando.",
    ],
  },
  {
    image: exameColonoscopia,
    title: "Colonoscopia: prevenir é melhor do que tratar",
    description: [
      "O câncer de intestino, na maioria das vezes, começa silencioso. A colonoscopia permite identificar e remover pólipos antes que se tornem câncer.",
      "Por isso, é indicada a partir dos 45 anos, mesmo sem sintomas. Esperar sinais pode ser tarde. Prevenir é o que realmente salva vidas.",
    ],
  },
];

const TreatmentsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="exames" className="relative scroll-mt-24 overflow-hidden bg-cream py-20 md:scroll-mt-28 md:py-28">
      <div className="gold-orb pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Exames</span>
        </div>

        <div
          className={`mb-12 max-w-3xl transition-all delay-100 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            Diagnóstico preciso para cuidar da sua saúde digestiva com antecedência.
          </h2>
        </div>

        <div className={`grid gap-8 lg:grid-cols-2 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {exams.map((exam) => (
            <article
              key={exam.title}
              className="group overflow-hidden rounded-2xl border border-transparent bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/10 hover:shadow-elevated"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={exam.image}
                  alt={exam.title}
                  width="900"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold/70 transition-all duration-300 group-hover:w-14 group-hover:bg-gold" />
                  <span className="font-body text-[11px] uppercase tracking-[0.28em] text-gold/80">Prevenção</span>
                </div>
                <h3 className="mb-4 font-display text-2xl leading-tight text-foreground transition-colors duration-300 group-hover:text-gold md:text-3xl">
                  {exam.title}
                </h3>
                <div className="space-y-4">
                  {exam.description.map((paragraph) => (
                    <p key={paragraph} className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
