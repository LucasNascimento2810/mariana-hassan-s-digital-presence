import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const treatments = [
  {
    category: "Sintomas Digestivos",
    items: [
      { title: "Azia e Refluxo", description: "Avaliação detalhada das causas de azia, queimação e refluxo gastroesofágico para definição do melhor tratamento." },
      { title: "Dor Abdominal", description: "Investigação criteriosa de dores abdominais recorrentes com exames precisos para diagnóstico correto." },
      { title: "Distúrbios Digestivos", description: "Tratamento de indigestão, gases, náuseas e diarreia com abordagem individualizada." },
    ],
  },
  {
    category: "Procedimentos",
    items: [
      { title: "Endoscopia Digestiva", description: "Exame para avaliação do esôfago, estômago e duodeno, essencial para diagnóstico de diversas condições." },
      { title: "Colonoscopia", description: "Exame do intestino grosso para rastreamento e diagnóstico de doenças intestinais." },
      { title: "Videolaparoscopia", description: "Cirurgia minimamente invasiva com menor dor, recuperação mais rápida e menor risco de infecção." },
    ],
  },
  {
    category: "Cirurgias",
    items: [
      { title: "Vesícula Biliar", description: "Tratamento cirúrgico por videolaparoscopia para colelitíase (pedra na vesícula) com recuperação rápida." },
      { title: "Hérnia", description: "Correção cirúrgica de hérnias inguinais, umbilicais e abdominais com técnicas minimamente invasivas." },
      { title: "Cirurgia Geral", description: "Procedimentos cirúrgicos diversos com foco em segurança, técnica aprimorada e cuidado ao paciente." },
    ],
  },
];

const TreatmentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % treatments.length);
  const prev = () => setActiveIndex((i) => (i - 1 + treatments.length) % treatments.length);

  return (
    <section id="tratamentos" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Conheça os nossos tratamentos
          </span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl leading-tight">
            <em className="text-gold not-italic">Tratamentos especializados</em>, definidos após avaliação médica.
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {treatments[activeIndex].items.map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-gold" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Category name */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {treatments.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`font-body text-xs tracking-wider px-4 py-2 rounded-full transition-all ${
                idx === activeIndex
                  ? "bg-gold text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.category}
            </button>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
