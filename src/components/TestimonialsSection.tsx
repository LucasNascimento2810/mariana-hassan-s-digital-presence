import { useScrollReveal } from "@/hooks/useScrollReveal";

const googleReviewsWidgetUrl = import.meta.env.VITE_GOOGLE_REVIEWS_WIDGET_URL as string | undefined;

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="depoimentos" className="relative scroll-mt-24 overflow-hidden bg-background py-20 md:scroll-mt-28 md:py-28">
      <div className="gold-orb pointer-events-none absolute -left-20 bottom-20 h-64 w-64 rounded-full" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Depoimentos de pacientes</span>
        </div>

        <div
          className={`mb-12 flex flex-col items-start justify-between gap-4 transition-all delay-100 duration-700 md:flex-row md:items-end ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="max-w-xl font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            O que os pacientes dizem após o atendimento.
          </h2>
          <p className="max-w-sm font-body text-sm text-muted-foreground">
            Avaliações do Google reunidas em um espaço seguro e responsivo.
          </p>
        </div>

        <div
          className={`rounded-2xl border border-gold/10 bg-card p-4 shadow-card transition-all delay-200 duration-700 md:p-6 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {googleReviewsWidgetUrl ? (
            <iframe
              title="Avaliações do Google da Dra. Mariana Hassan"
              src={googleReviewsWidgetUrl}
              className="h-[32rem] w-full rounded-xl border-0 bg-background md:h-[36rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex min-h-[14rem] items-center justify-center rounded-xl border border-dashed border-gold/20 bg-background/70 px-6 text-center">
              <p className="font-body text-sm text-muted-foreground">Depoimentos do Google serão exibidos aqui em breve.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
