import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5521971414321&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const faqs = [
  {
    question: "Qual é a diferença entre pedra na vesícula e pedra nos rins?",
    answer: "A pedra na vesícula é a formação de cálculos biliares na vesícula biliar devido a um desequilíbrio nas substâncias presentes na bile. Já a pedra nos rins refere-se à formação de cálculos nos rins. Os cálculos biliares são compostos principalmente de colesterol ou bilirrubina, enquanto os cálculos renais podem ser compostos de cálcio, ácido úrico, estruvita ou cistina.",
  },
  {
    question: "A laparoscopia é segura?",
    answer: "Sim, a laparoscopia é considerada uma técnica segura quando realizada por profissionais qualificados. Ela oferece vários benefícios em comparação com a cirurgia aberta tradicional, incluindo melhor precisão e uma análise mais detalhada da região operada.",
  },
  {
    question: "Quanto tempo dura a cirurgia por laparoscopia?",
    answer: "Em média, a cirurgia laparoscópica costuma levar de 1 a 2 horas para ser concluída. A duração pode variar de acordo com a complexidade do caso e a experiência do cirurgião.",
  },
  {
    question: "Qual é o tempo de recuperação após a cirurgia?",
    answer: "A maioria dos pacientes se recupera totalmente dentro de algumas semanas. Em até 2 semanas, o paciente geralmente volta para suas atividades rotineiras. É importante seguir as orientações médicas.",
  },
  {
    question: "É possível ter uma vida normal sem a vesícula biliar?",
    answer: "Sim, a vesícula biliar não é um órgão essencial para a sobrevivência. Após a remoção, a maioria dos pacientes pode levar uma vida normal, seguindo uma dieta saudável e equilibrada.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">FAQ</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-12 max-w-xl leading-tight">
          Dúvidas <em className="text-gold not-italic">frequentes</em>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card rounded-2xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="font-body text-sm md:text-base text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-primary-foreground font-body font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-card hover:shadow-elevated"
          >
            ENTRAR EM CONTATO
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
