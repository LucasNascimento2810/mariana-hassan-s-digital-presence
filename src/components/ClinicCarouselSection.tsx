import clinica1 from "@/assets/mari-hassan/clinica-1.jpg";
import clinica2 from "@/assets/mari-hassan/clinica-2.jpg";
import clinica3 from "@/assets/mari-hassan/clinica-3.jpg";
import clinica4 from "@/assets/mari-hassan/clinica-4.jpg";
import clinica5 from "@/assets/mari-hassan/clinica-5.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const clinicImages = [
  { src: clinica1, alt: "Clínica da Dra. Mariana Hassan" },
  { src: clinica2, alt: "Recepção da clínica" },
  { src: clinica3, alt: "Ambiente de atendimento da clínica" },
  { src: clinica4, alt: "Consultório da clínica" },
  { src: clinica5, alt: "Detalhe da clínica" },
];

const ClinicCarouselSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="gold-orb pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 md:px-8">
        <div
          className={`mb-6 flex items-center gap-3 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">Clínica</span>
        </div>

        <div
          className={`mb-12 max-w-3xl transition-all delay-100 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">
            Um espaço pensado para acolher cada etapa do seu cuidado.
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className={`mx-auto max-w-6xl transition-all delay-200 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <CarouselContent className="-ml-4">
            {clinicImages.map((image) => (
              <CarouselItem key={image.src} className="basis-full pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group overflow-hidden rounded-2xl bg-card shadow-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="900"
                    height="675"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 top-1/2 h-10 w-10 border-gold/30 bg-background/90 text-gold hover:bg-gold hover:text-primary-foreground md:-left-5" />
          <CarouselNext className="right-3 top-1/2 h-10 w-10 border-gold/30 bg-background/90 text-gold hover:bg-gold hover:text-primary-foreground md:-right-5" />
        </Carousel>
      </div>
    </section>
  );
};

export default ClinicCarouselSection;
