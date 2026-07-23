import logoGold from "@/assets/logo-gold.png";
import { MapPin, Clock, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5521999065921&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Mariana%20Hassan.";

const EMAIL = "dramarianahassan@gmail.com";

const LOCATIONS = [
  {
    name: "Barra da Tijuca",
    lines: [
      "Av. Ayrton Senna, 3000 - Sala 3095",
      "Comfort Working - Edifício Itanhangá",
    ],
    query:
      "Av. Ayrton Senna, 3000, Sala 3095, Edifício Itanhangá, Barra da Tijuca, Rio de Janeiro - RJ",
  },
  {
    name: "Duque de Caxias",
    lines: [
      "Rua Marechal Deodoro, 392, térreo - Sala 6",
      "Jardim 25 de Agosto",
    ],
    query:
      "Rua Marechal Deodoro, 392, térreo, Sala 6, Jardim 25 de Agosto, Duque de Caxias - RJ",
  },
];

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATIONS[0].query
)}&z=15&output=embed`;

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-foreground py-16 text-primary-foreground"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/5" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <h2 className="sr-only">Informações de contato e localização</h2>

        <div
          className={`mb-12 grid gap-10 md:grid-cols-2 xl:grid-cols-[1.1fr_1fr_0.9fr_1.05fr] stagger-children ${
            isVisible ? "reveal-visible" : ""
          }`}
        >
          <div className="max-w-xs">
            <img
              src={logoGold}
              alt="Dra. Mariana Hassan"
              width="1920"
              height="1165"
              loading="lazy"
              decoding="async"
              className="mb-6 h-20 w-auto brightness-150 md:h-24"
            />

            <p className="font-body text-sm leading-relaxed text-primary-foreground/70">
              Cirurgia Geral e Endoscopia Digestiva. Atendimento humanizado e
              tratamento individualizado.
            </p>
          </div>

          <div className="max-w-xs">
            <h3 className="mb-4 font-display text-lg text-primary-foreground">
              Localização
            </h3>

            <div className="mb-5 space-y-5">
              {LOCATIONS.map((location) => (
                <div key={location.name} className="group flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-body text-sm text-primary-foreground/70">
                    <span className="mb-1 block font-medium text-primary-foreground">
                      {location.name}
                    </span>
                    {location.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <div className="group mb-4 flex items-start gap-3">
              <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-gold transition-transform duration-300 group-hover:scale-110" />
              <p className="font-body text-sm text-primary-foreground/70">
                Segunda a sexta, das 9h às 18h
              </p>
            </div>

            <div className="group flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-gold transition-transform duration-300 group-hover:scale-110" />
              <a
                href={`mailto:${EMAIL}`}
                className="font-body text-sm text-primary-foreground/70 transition-colors duration-300 hover:text-gold"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="max-w-xs">
            <h3 className="mb-4 font-display text-lg text-primary-foreground">
              Contato
            </h3>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp"
              className="mb-3 inline-flex items-center gap-2 font-body text-sm text-gold transition-colors duration-300 hover:text-gold-light"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              (21) 99906-5921
            </a>

            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/marihassan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir perfil no Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/mari.hassan.54"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir perfil no Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full max-w-[15rem] xl:ml-auto">
            <h3 className="mb-3 flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-gold">
              <span className="inline-block h-px w-8 bg-gold" />
              Como chegar
            </h3>

            <div className="overflow-hidden rounded-[1.1rem] border border-primary-foreground/10 bg-primary-foreground/5 shadow-elevated">
              <iframe
                title="Mapa do consultório da Dra. Mariana Hassan na Barra da Tijuca"
                src={MAP_EMBED_URL}
                className="h-[220px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex flex-col items-start gap-2.5">
              {LOCATIONS.map((location) => (
                <a
                  key={location.name}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 font-body text-xs text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold-light"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Mapa: {location.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            Dra. Mariana Hassan | CRM-RJ 52.928550 | © {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
