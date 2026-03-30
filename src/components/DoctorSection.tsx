import marianaCasual from "@/assets/mariana-casual.jpeg";
import marianaPortrait from "@/assets/mariana-portrait.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const DoctorSection = () => {
  return (
    <section id="dra-mariana" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
            Conheça a Dra. Mariana
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={marianaCasual}
                alt="Dra. Mariana Hassan"
                className="w-full h-80 object-cover object-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated mt-8">
              <img
                src={marianaPortrait}
                alt="Dra. Mariana Hassan"
                className="w-full h-80 object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Um pouco sobre minha <em className="text-gold not-italic">história</em>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Sou a Dra. Mariana Hassan, médica formada na Faculdade Técnico Educacional Souza Marques – FTESM, no Rio de Janeiro. Sou cirurgiã geral com especialização em videocirurgia, endoscopia digestiva e colonoscopia.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Realizei Residência em Cirurgia Geral no Hospital das Clínicas de Teresópolis e Residência em Endoscopia Digestiva na UNIRIO. Acredito na importância de estabelecer uma relação de confiança, fornecendo atendimento personalizado e dedicado.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                "Cirurgiã Geral e Endoscopista",
                "CRM-RJ 52.108898-6",
                "Residência em Cirurgia Geral – HCT-CO",
                "Residência em Endoscopia Digestiva – UNIRIO",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

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
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
