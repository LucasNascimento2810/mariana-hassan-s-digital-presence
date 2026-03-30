import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const treatments = [
  {
    category: "Sintomas Digestivos",
    items: [
      {
        title: "Azia e Refluxo",
        description:
          "Avaliação detalhada das causas de azia, queimação e refluxo gastroesofágico para definição do melhor tratamento.",
      },
      {
        title: "Dor Abdominal",
        description:
          "Investigação criteriosa de dores abdominais recorrentes com exames precisos para diagnóstico correto.",
      },
      {
        title: "Distúrbios Digestivos",
        description:
          "Tratamento de indigestão, gases, náuseas e diarreia com abordagem individualizada.",
      },
    ],
  },
  {
    category: "Procedimentos",
    items: [
      {
        title: "Endoscopia Digestiva",
        description:
          "Exame para avaliação do esôfago, estômago e duodeno, essencial para diagnóstico de diversas condições.",
      },
      {
        title: "Colonoscopia",
        description:
          "Exame do intestino grosso para rastreamento e diagnóstico de doenças intestinais.",
      },
      {
        title: "Videolaparoscopia",
        description:
          "Cirurgia minimamente invasiva com menor dor, recuperação mais rápida e menor risco de infecção.",
      },
    ],
  },
  {
    category: "Cirurgias",
    items: [
      {
        title: "Vesícula Biliar",
        description:
          "Tratamento cirúrgico por videolaparoscopia para colelitíase (pedra na vesícula) com recuperação rápida.",
      },
      {
        title: "Hérnia",
        description:
          "Correção cirúrgica de hérnias inguinais, umbilicais e abdominais com técnicas minimamente invasivas.",
      },
      {
        title: "Cirurgia Geral",
        description:
          "Procedimentos cirúrgicos diversos com foco em segurança, técnica aprimorada e cuidado ao paciente.",
      },
    ],
  },
];

const TreatmentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const next = () => setActiveIndex((i) => (i + 1) % treatments.length);
  const prev = () => setActiveIndex((i) => (i - 1 + treatments.length) % treatments.length);

  return (
    <section
      id="tratamentos"
      className="relative overflow-hidden bg-cream py-20 scroll-mt-24 md:py-28 md:scroll-mt-28"
    >
      <div className="gold-orb pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            Conheça os nossos tratamentos
          </span>
        </div>

        <div
          className={`mb-12 flex items-end justify-between transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="max-w-2xl font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            <em className="not-italic text-gold">Tratamentos especializados</em>, definidos após avaliação
            médica.
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={prev}
              aria-label="Mostrar tratamentos anteriores"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold hover:text-primary-foreground active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Mostrar próximos tratamentos"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold hover:text-primary-foreground active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className={`grid gap-6 md:grid-cols-3 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {treatments[activeIndex].items.map((item, idx) => (
            <div
              key={`${activeIndex}-${idx}`}
              className="group rounded-2xl border border-transparent bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/10 hover:shadow-elevated"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gold/70 transition-all duration-300 group-hover:w-14 group-hover:bg-gold" />
                <span className="font-body text-[11px] uppercase tracking-[0.28em] text-gold/80">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-3 font-display text-xl text-foreground transition-colors duration-300 group-hover:text-gold">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {treatments.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Mostrar categoria ${t.category}`}
              aria-pressed={idx === activeIndex}
              className={`rounded-full px-5 py-2.5 font-body text-xs tracking-wider transition-all duration-300 ${
                idx === activeIndex
                  ? "scale-105 bg-gold text-primary-foreground shadow-card"
                  : "bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground"
              }`}
            >
              {t.category}
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 md:hidden">
          <button
            onClick={prev}
            aria-label="Mostrar tratamentos anteriores"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Mostrar próximos tratamentos"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
