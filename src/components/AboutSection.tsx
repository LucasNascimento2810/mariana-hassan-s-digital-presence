import marianaOffice from "@/assets/mariana-office.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 gold-orb rounded-full pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section tag */}
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Compromisso e seriedade
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={`transition-all duration-800 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Cada paciente é único, cada tratamento também.
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              A saúde digestiva exige atenção, diagnóstico preciso e um plano de tratamento individualizado. Aqui, cada decisão é médica. Cada etapa é conduzida com responsabilidade e cuidado.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Recebo pacientes que buscam alívio para sintomas como azia, refluxo, dor abdominal e problemas digestivos — e juntos encontramos o melhor caminho para a sua saúde.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated hover:scale-[1.03] active:scale-[0.98]"
            >
              AGENDAR CONSULTA COM A DRA.
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className={`relative transition-all duration-800 delay-300 ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"}`}>
            {/* Decorative border */}
            <div className="absolute -inset-3 rounded-3xl border border-gold/15 pointer-events-none" />
            <div className="rounded-2xl overflow-hidden shadow-elevated group">
              <img
                src={marianaOffice}
                alt="Dra. Mariana Hassan no consultório"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
