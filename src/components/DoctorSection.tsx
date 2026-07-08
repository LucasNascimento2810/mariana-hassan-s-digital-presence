import draMarianaHistoria from "@/assets/mari-hassan/dra-mariana-historia.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521999065921&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const metrics = [
  { value: "+500", label: "Exames" },
  { value: "+100", label: "Cirurgias" },
  { value: "+10", label: "Anos atuação" },
];

const DoctorSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="dra-mariana" className="relative scroll-mt-24 overflow-hidden bg-cream py-20 md:scroll-mt-28 md:py-28">
      <div className="gold-orb pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Conheça a Dra. Mariana</span>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div
            className={`transition-all delay-200 duration-800 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-3xl border border-gold/15" />
              <div className="group overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={draMarianaHistoria}
                  alt="Dra. Mariana Hassan"
                  width="900"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  className="h-[32rem] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 md:h-[38rem]"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all delay-300 duration-800 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-6 font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
              Um pouco sobre minha <em className="not-italic text-gold">história</em>
            </h2>
            <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground">
              Sou a Dra. Mariana Hassan, médica formada na Faculdade Técnico Educacional Souza Marques - FTESM, no Rio
              de Janeiro. Sou cirurgiã geral, com especialização em videocirurgia, endoscopia digestiva e colonoscopia.
            </p>
            <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground">
              Realizei residência em Cirurgia Geral no Hospital das Clínicas de Teresópolis e residência em Endoscopia
              Digestiva na UNIRIO. Acredito na importância de estabelecer uma relação de confiança, oferecendo
              atendimento personalizado e dedicado.
            </p>

            <div className="mb-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-gold/15 bg-background/70 shadow-card backdrop-blur-sm">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-r border-gold/10 px-3 py-5 text-center last:border-r-0 md:px-5">
                  <div className="font-display text-3xl leading-none text-gold md:text-4xl">{metric.value}</div>
                  <div className="mt-2 font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <ul className="mb-8 space-y-3">
              {[
                "Cirurgiã geral e endoscopista",
                "CRM-RJ 52.928550",
                "Residência em Cirurgia Geral - HCT-CO",
                "Residência em Endoscopia Digestiva - UNIRIO",
              ].map((item) => (
                <li key={item} className="group flex items-center gap-3 font-body text-sm text-foreground">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-150" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-body text-sm font-normal text-primary-foreground shadow-card transition-all duration-300 hover:scale-[1.03] hover:bg-gold-dark hover:shadow-elevated active:scale-[0.98]"
            >
              AGENDAR CONSULTA COM A DRA.
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
