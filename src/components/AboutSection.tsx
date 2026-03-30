import marianaOffice from "@/assets/mariana-office.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Compromisso e seriedade
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
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
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              AGENDAR CONSULTA COM A DRA.
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={marianaOffice}
                alt="Dra. Mariana Hassan no consultório"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
