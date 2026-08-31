import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Contact } from "./index";

// Validación estática
const VALID_SECTORS = {
  "restaurantes": "restaurantes y hostelería",
  "clinicas-dentales": "clínicas dentales y de salud",
  "talleres-mecanicos": "talleres mecánicos",
  "peluquerias": "peluquerías y centros de estética",
  "gestorias": "gestorías y asesorías",
  "veterinarias": "clínicas veterinarias",
  "centros-de-estetica": "centros de estética y belleza",
  "abogados": "despachos de abogados",
  "fisioterapeutas": "clínicas de fisioterapia"
};

const FORM_SECTORS = {
  "restaurantes": "Restaurante / Hostelería",
  "clinicas-dentales": "Clínica dental",
  "talleres-mecanicos": "Taller mecánico",
  "peluquerias": "Peluquería",
  "gestorias": "Gestoría",
  "veterinarias": "Veterinaria",
  "centros-de-estetica": "Centro de estética",
  "abogados": "Abogados",
  "fisioterapeutas": "Fisioterapia"
};

const VALID_CITIES = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", 
  "bilbao", "alicante", "murcia", "granada", "jaen", "cadiz", "huelva", "almeria"
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

import { getGeoContent } from "../data/geoContent";

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
    // Usar la función getGeoContent para acceder al nombre correcto con tilde indirectamente, 
    // o simplemente importar la constante si la exportamos. Para no complicar, usaremos un hack rápido o capitalizaremos si no.
    const cityName = getGeoContent(sector, params.ciudad).cityName || capitalize(params.ciudad);
    const url = `https://www.potenciatunegocio.eu/${params.landingType}/${params.ciudad}`;
    
    const title = `Diseño de páginas web para ${sectorName} en ${cityName} | Potencia tu Negocio`;
    const description = `Servicio especializado de diseño web con IA para ${sectorName} en ${cityName}. Tu web profesional, optimizada para SEO local, en 7 días y desde 595€.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://www.potenciatunegocio.eu/og-image.png" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: "https://www.potenciatunegocio.eu/og-image.png" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Diseño web para ${sectorName} en ${cityName}`,
            provider: {
              "@type": "LocalBusiness",
              name: "Potencia tu Negocio",
              url: "https://www.potenciatunegocio.eu"
            },
            areaServed: {
              "@type": "City",
              name: cityName
            },
            description: `Servicio especializado de diseño web para ${sectorName} enfocado en captar clientes en ${cityName}.`
          }),
        }
      ]
    };
  },
  component: GeoLanding,
});

function GeoLanding() {
  const { landingType, ciudad } = Route.useParams();
  const sector = landingType.replace("diseno-web-para-", "");
  const sectorDisplay = VALID_SECTORS[sector as keyof typeof VALID_SECTORS] || sector;
  const cityDisplay = getGeoContent(sector, ciudad).cityName;

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
            {getGeoContent(sector, ciudad).p1}
          </p>
          <p>
            {getGeoContent(sector, ciudad).p2}
          </p>
          <p>
            {getGeoContent(sector, ciudad).p3}
          </p>
        </div>
      </div>
      <div className="bg-muted/30 border-t border-border mt-12 pb-12">
        <Contact defaultSector={FORM_SECTORS[sector as keyof typeof FORM_SECTORS] || ""} />
      </div>
    </div>
  );
}
