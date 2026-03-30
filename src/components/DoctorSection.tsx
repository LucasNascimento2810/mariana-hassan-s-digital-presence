import marianaCasual from "@/assets/mariana-casual.jpeg";
import marianaPortrait from "@/assets/mariana-portrait.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const DoctorSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="dra-mariana" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute -right-20 bottom-0 w-80 h-80 gold-orb rounded-full pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Conheça a Dra. Mariana
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photos */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="rounded-2xl overflow-hidden shadow-elevated group">
              <img
                src={marianaCasual}
                alt="Dra. Mariana Hassan"
                className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated mt-8 group">
              <img
                src={marianaPortrait}
                alt="Dra. Mariana Hassan"
                className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Bio */}
          <div className={`transition-all duration-800 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Um pouco sobre minha <em className="text-gold not-italic">história</em>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Sou a Dra. Mariana Hassan, médica formada na Faculdade Técnico Educacional Souza Marques – FTESM, no Rio de Janeiro. Sou cirurgiã geral com especialização em videocirurgia, endoscopia digestiva e colonoscopia.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Realizei Residência em Cirurgia Geral no Hospital das Clínicas de Teresópolis e Residência em Endoscopia Digestiva na UNIRIO. Acredito na importância de estabelecer uma relação de confiança, fornecendo atendimento personalizado e dedicado.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Cirurgiã Geral e Endoscopista",
                "CRM-RJ 52.108898-6",
                "Residência em Cirurgia Geral – HCT-CO",
                "Residência em Endoscopia Digestiva – UNIRIO",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-sm text-foreground group">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  {item}
                </li>
              ))}
            </ul>

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
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
