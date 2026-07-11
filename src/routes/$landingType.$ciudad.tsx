import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Contact } from "./index";

// Validación estática
const VALID_SECTORS = {
  "restaurantes": "restaurantes y hostelería",
  "clinicas-dentales": "clínicas dentales y de salud",
  "talleres-mecanicos": "talleres mecánicos",
  "peluquerias": "peluquerías y centros de estética",
  "gestorias": "gestorías y asesorías"
};

const FORM_SECTORS = {
  "restaurantes": "Restaurante / Hostelería",
  "clinicas-dentales": "Clínica dental",
  "talleres-mecanicos": "Taller mecánico",
  "peluquerias": "Peluquería",
  "gestorias": "Gestoría"
};

const VALID_CITIES = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza"
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Route = createFileRoute("/$landingType/$ciudad")({
  beforeLoad: ({ params: { landingType, ciudad } }) => {
    if (!landingType.startsWith("diseno-web-para-")) throw notFound();
    const sector = landingType.replace("diseno-web-para-", "");
    if (!VALID_SECTORS[sector as keyof typeof VALID_SECTORS] || !VALID_CITIES.includes(ciudad.toLowerCase())) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const sector = params.landingType.replace("diseno-web-para-", "");
    const sectorName = VALID_SECTORS[sector as keyof typeof VALID_SECTORS] || sector;
    const cityName = capitalize(params.ciudad);
    
    return {
      meta: [
        { title: `Diseño de páginas web para ${sectorName} en ${cityName} | Potencia tu Negocio` },
        { name: "description", content: `Servicio especializado de diseño web con IA para ${sectorName} en ${cityName}. Tu web profesional, optimizada para SEO local, en 7 días y desde 595€.` },
      ]
    };
  },
  component: GeoLanding,
});

function GeoLanding() {
  const { landingType, ciudad } = Route.useParams();
  const sector = landingType.replace("diseno-web-para-", "");
  const sectorDisplay = VALID_SECTORS[sector as keyof typeof VALID_SECTORS] || sector;
  const cityDisplay = capitalize(ciudad);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          SEO Local para {cityDisplay}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          Diseño web para {sectorDisplay} en <span className="text-primary">{cityDisplay}</span>
        </h1>
        
        <div className="text-lg text-muted-foreground mb-12 space-y-6 text-left max-w-3xl mx-auto">
          <p>
            Si tienes un negocio de {sectorDisplay} en {cityDisplay}, sabes que la competencia es brutal. Cuando alguien en tu barrio o en el centro de {cityDisplay} busca en Google lo que ofreces, <strong>o apareces tú, o aparece tu competencia</strong>. No hay más.
          </p>
          <p>
            En Potencia tu Negocio creamos webs con inteligencia artificial diseñadas específicamente para captar clientes en tu ciudad. No te hacemos una "tarjeta de visita digital" genérica; creamos una máquina de reservas y contactos. 
            Integramos tu ficha de Google Maps, botón de WhatsApp directo y todo el SEO local necesario para destacar en {cityDisplay}.
          </p>
          <p>
            Lo mejor: la primera versión está lista en 48 horas. Te enseñamos cómo queda y, si te gusta, la publicamos. Sin complicaciones ni tiempos de espera de meses.
          </p>
        </div>
      </div>
      <div className="bg-muted/30 border-t border-border mt-12 pb-12">
        <Contact defaultSector={FORM_SECTORS[sector as keyof typeof FORM_SECTORS] || ""} />
      </div>
    </div>
  );
}
