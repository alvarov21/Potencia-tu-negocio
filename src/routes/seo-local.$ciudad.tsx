import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Search, Navigation } from "lucide-react";
import { Contact } from "./index";

const VALID_CITIES = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", 
  "bilbao", "alicante", "murcia", "granada", "jaen", "cadiz", "huelva", "almeria"
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

import { getGeoContent, CITIES_DATA, FALLBACK_DATA } from "../data/geoContent";

export const Route = createFileRoute("/seo-local/$ciudad")({
  beforeLoad: ({ params: { ciudad } }) => {
    if (!VALID_CITIES.includes(ciudad.toLowerCase())) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const cityName = getGeoContent("seo-local", params.ciudad).cityName;
    const url = `https://www.potenciatunegocio.eu/seo-local/${params.ciudad}`;
    
    const title = `Agencia Experta en SEO Local en ${cityName} | Potencia tu Negocio`;
    const description = `Servicios de SEO Local en ${cityName}. Posiciona tu empresa en Google Maps y capta clientes cercanos que buscan tus servicios hoy mismo.`;
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
            name: `Servicios de SEO Local en ${cityName}`,
            provider: {
              "@type": "LocalBusiness",
              name: "Potencia tu Negocio",
              url: "https://www.potenciatunegocio.eu"
            },
            areaServed: {
              "@type": "City",
              name: cityName
            },
            description: `Servicios de SEO Local en ${cityName}. Posiciona tu empresa en Google Maps y capta clientes cercanos.`
          }),
        }
      ]
    };
  },
  component: SeoLocalCiudad,
});

function SeoLocalCiudad() {
  const { ciudad } = Route.useParams();
  const cityKey = ciudad.toLowerCase();
  const cityData = CITIES_DATA[cityKey] || FALLBACK_DATA;
  const cityDisplay = cityData.properName || capitalize(ciudad);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Posicionamiento en {cityDisplay}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          SEO Local en <span className="text-primary">{cityDisplay}</span> para multiplicar tus ventas
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Destaca en Google Maps por encima de los competidores locales. Atrae a clientes de {cityData.barrios[0]}, {cityData.barrios[2]} y todo {cityDisplay} justo cuando buscan tus servicios.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <MapPin className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Google Maps 1º Posición</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Optimizamos tu Perfil de Empresa para que seas el negocio {cityData.adjetivo} más visible y con mejores reseñas en {cityData.zona_centro}.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Search className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Búsquedas Locales</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Te posicionamos para las palabras clave exactas que usan tus clientes. Si buscan "tu servicio cerca de mi", te encontrarán a ti desde {cityData.referencia}.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Navigation className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Rutas y Llamadas</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Más clics en "Cómo llegar" y en el botón de llamar. Convertimos tu presencia digital en clientes físicos visitando tu local en {cityDisplay}.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Auditoría Local Gratuita</h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-balance">
          Déjanos analizar cómo está tu presencia digital en {cityDisplay} frente a tus principales competidores. Te entregamos un informe rápido sin ningún compromiso.
        </p>
      </div>

      <div className="bg-muted/30 border-t border-border mt-12 pb-12">
        <Contact defaultSector="Otro" />
      </div>
    </div>
  );
}
