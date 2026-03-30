import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const treatments = [
  {
    category: "Sintomas Digestivos",
    items: [
      { title: "Azia e Refluxo", description: "Avaliação detalhada das causas de azia, queimação e refluxo gastroesofágico para definição do melhor tratamento.", icon: "🔥" },
      { title: "Dor Abdominal", description: "Investigação criteriosa de dores abdominais recorrentes com exames precisos para diagnóstico correto.", icon: "🩺" },
      { title: "Distúrbios Digestivos", description: "Tratamento de indigestão, gases, náuseas e diarreia com abordagem individualizada.", icon: "💊" },
    ],
  },
  {
    category: "Procedimentos",
    items: [
      { title: "Endoscopia Digestiva", description: "Exame para avaliação do esôfago, estômago e duodeno, essencial para diagnóstico de diversas condições.", icon: "🔬" },
      { title: "Colonoscopia", description: "Exame do intestino grosso para rastreamento e diagnóstico de doenças intestinais.", icon: "📋" },
      { title: "Videolaparoscopia", description: "Cirurgia minimamente invasiva com menor dor, recuperação mais rápida e menor risco de infecção.", icon: "⚕️" },
    ],
  },
  {
    category: "Cirurgias",
    items: [
      { title: "Vesícula Biliar", description: "Tratamento cirúrgico por videolaparoscopia para colelitíase (pedra na vesícula) com recuperação rápida.", icon: "🏥" },
      { title: "Hérnia", description: "Correção cirúrgica de hérnias inguinais, umbilicais e abdominais com técnicas minimamente invasivas.", icon: "✂️" },
      { title: "Cirurgia Geral", description: "Procedimentos cirúrgicos diversos com foco em segurança, técnica aprimorada e cuidado ao paciente.", icon: "💉" },
    ],
  },
];

const TreatmentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const next = () => setActiveIndex((i) => (i + 1) % treatments.length);
  const prev = () => setActiveIndex((i) => (i - 1 + treatments.length) % treatments.length);

  return (
    <section id="tratamentos" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute -left-32 top-20 w-64 h-64 gold-orb rounded-full pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Conheça os nossos tratamentos
          </span>
        </div>

        <div className={`flex items-end justify-between mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl leading-tight">
            <em className="text-gold not-italic">Tratamentos especializados</em>, definidos após avaliação médica.
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className={`grid md:grid-cols-3 gap-6 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {treatments[activeIndex].items.map((item, idx) => (
            <div
              key={`${activeIndex}-${idx}`}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group border border-transparent hover:border-gold/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Category pills */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {treatments.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`font-body text-xs tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-gold text-primary-foreground shadow-card scale-105"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-background/80"
              }`}
            >
              {t.category}
            </button>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-all">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
