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

export const Route = createFileRoute("/seo-local/$ciudad")({
  beforeLoad: ({ params: { ciudad } }) => {
    if (!VALID_CITIES.includes(ciudad.toLowerCase())) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const cityName = capitalize(params.ciudad);
    return {
      meta: [
        { title: `Agencia Experta en SEO Local en ${cityName} | Potencia tu Negocio` },
        { name: "description", content: `Servicios de SEO Local en ${cityName}. Posiciona tu empresa en Google Maps y capta clientes cercanos que buscan tus servicios hoy mismo.` },
      ]
    };
  },
  component: SeoLocalCiudad,
});

function SeoLocalCiudad() {
  const { ciudad } = Route.useParams();
  const cityDisplay = capitalize(ciudad);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Posicionamiento en {cityDisplay}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          SEO Local en <span className="text-primary">{cityDisplay}</span>: Domina tu ciudad
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tener el mejor negocio de {cityDisplay} no sirve de nada si la gente encuentra antes a tu competencia en Google Maps. Te ayudamos a ser el número uno.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <MapPin className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Google Business Profile</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Reclamamos, verificamos y optimizamos al 100% tu ficha de Google para que destaques en las búsquedas locales de {cityDisplay}.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Search className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Búsquedas Cercanas</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Atacamos palabras clave con alta intención de compra, ej: "abogado urgencias cerca de mi" o "mejor fontanero en {cityDisplay}".
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Navigation className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Atracción Peatonal</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Convierte búsquedas online en visitas físicas a tu local. El 76% de las personas que buscan algo "cerca de mí" visitan el negocio ese mismo día.
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
