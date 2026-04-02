import { Activity, CircleAlert, Flame, Utensils } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const symptomCards = [
  {
    icon: CircleAlert,
    text: "Se você está sentindo dor abdominal recorrente.",
  },
  {
    icon: Utensils,
    text: "Se sente náuseas ou desconforto depois das refeições.",
  },
  {
    icon: Flame,
    text: "Se sofre com estufamento, indigestão e azia frequente.",
  },
  {
    icon: Activity,
    text: "Se tem distúrbios digestivos, como gases ou diarreia.",
  },
];

const commonCauses = [
  "Intolerância alimentar",
  "Refluxo",
  "Gastrite",
  "Úlcera gástrica",
  "Uso de remédios",
  "Colelitíase",
];

const diagnosisSteps = [
  "Avaliação clínica detalhada e histórico dos sintomas.",
  "Exames diagnósticos para diferenciar a causa com precisão.",
  "Definição do tratamento mais adequado para o seu caso.",
];

const SymptomsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="gold-orb pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full opacity-70" />
      <div className="gold-orb pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center justify-center gap-3 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Sintomas sem diagnóstico</span>
          <div className="h-px w-8 bg-gold" />
        </div>

        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            Você está sofrendo com sintomas como <em className="text-gold not-italic">azia, refluxo e queimação</em>,
            mas ainda não tem um diagnóstico definido?
          </h2>
          <p className="mx-auto mt-6 max-w-4xl font-body text-base leading-relaxed text-muted-foreground md:text-xl">
            Essas são condições bastante comuns e afetam muitas pessoas. Recebo vários pacientes que se queixam dessa
            sensação e ainda não sabem qual é a verdadeira causa.
          </p>
        </div>

        <div className={`mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 stagger-children ${isVisible ? "reveal-visible" : ""}`}>
          {symptomCards.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group relative rounded-[1.75rem] border border-gold/10 bg-card px-6 pb-8 pt-12 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/20 hover:shadow-elevated"
            >
              <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/10 bg-white shadow-card transition-transform duration-500 group-hover:scale-110">
                <Icon className="h-7 w-7 text-gold" />
              </div>
              <p className="font-body text-xl leading-snug text-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h3 className="font-display text-3xl text-foreground md:text-4xl">Problemas comuns que podem causar esses sintomas</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {commonCauses.map((cause) => (
              <span key={cause} className="font-body text-lg text-foreground/85 md:text-xl">
                <span className="mr-2 text-gold">•</span>
                {cause}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl font-display-light text-3xl leading-[1.2] tracking-[0.02em] text-foreground md:text-4xl">
            Entre as causas mais comuns está a <em className="text-gold not-italic">colelitíase</em>, conhecida como
            pedra na vesícula.
          </p>
        </div>

        <div
          className={`mt-16 grid gap-8 rounded-[2.25rem] bg-cream px-6 py-8 shadow-card transition-all duration-700 delay-300 md:px-10 md:py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="mb-4 flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-gold">
              <span className="inline-block h-px w-8 bg-gold" />
              Como identificar
            </p>
            <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
              Como identificar e encontrar o diagnóstico correto
            </h3>
            <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              O primeiro passo é buscar uma avaliação criteriosa. A diferenciação entre pedra na vesícula e outras
              doenças geralmente é feita por meio de exames diagnósticos e da análise detalhada do quadro clínico.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              Com um bom acompanhamento médico, você recebe o diagnóstico correto e o tratamento adequado para resolver
              o problema com mais segurança.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-gold/12 bg-white/90 p-6 shadow-card">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">Etapas da avaliação</p>
            <div className="mt-6 space-y-4">
              {diagnosisSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 font-body text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-sm leading-relaxed text-foreground/80 md:text-base">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
