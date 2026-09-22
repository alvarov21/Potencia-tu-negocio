import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, MapPin, Briefcase } from "lucide-react";
import { CITIES_DATA } from "../data/geoContent"; // Assuming this exists or we can just use the arrays

const SECTORS = [
  { id: "restaurantes", label: "Restaurantes" },
  { id: "clinicas-dentales", label: "Clínicas Dentales" },
  { id: "talleres-mecanicos", label: "Talleres Mecánicos" },
  { id: "peluquerias", label: "Peluquerías" },
  { id: "gestorias", label: "Gestorías" },
  { id: "veterinarias", label: "Veterinarias" },
  { id: "centros-de-estetica", label: "Centros de Estética" },
  { id: "abogados", label: "Abogados" },
  { id: "fisioterapeutas", label: "Fisioterapeutas" }
];

const CITIES = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", 
  "bilbao", "alicante", "murcia", "granada", "jaen", "cadiz", "huelva", "almeria"
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Route = createFileRoute("/mapa-del-sitio")({
  head: () => ({
    meta: [
      { title: "Mapa del Sitio | Potencia tu Negocio" },
      { name: "description", content: "Explora todas las localidades y sectores donde ofrecemos nuestros servicios de diseño web con inteligencia artificial y SEO local." }
    ]
  }),
  component: SitemapComponent,
});

function SitemapComponent() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Mapa del Sitio</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Directorio completo de todas nuestras áreas de servicio por localidad y sector.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* SEO Local por ciudad */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 border-b border-border pb-2">
              <MapPin className="text-primary w-6 h-6" />
              SEO Local por Ciudad
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CITIES.map(city => (
                <li key={`seo-${city}`}>
                  <Link to={`/seo-local/${city}`} className="text-sm text-muted-foreground hover:text-primary transition">
                    SEO Local {capitalize(city)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diseño Web por ciudad */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 border-b border-border pb-2">
              <Zap className="text-primary w-6 h-6" />
              Diseño Web por Ciudad
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CITIES.map(city => (
                <li key={`web-${city}`}>
                  <Link to={`/diseno-web/${city}`} className="text-sm text-muted-foreground hover:text-primary transition">
                    Diseño Web {capitalize(city)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectores Específicos */}
          <div className="lg:col-span-2 mt-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 border-b border-border pb-2">
              <Briefcase className="text-primary w-6 h-6" />
              Diseño Web Especializado por Sector
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              {SECTORS.map(sector => (
                <div key={sector.id} className="space-y-3">
                  <h3 className="font-medium text-foreground">{sector.label}</h3>
                  <ul className="space-y-2">
                    {CITIES.slice(0, 5).map(city => (
                      <li key={`${sector.id}-${city}`}>
                        <Link to={`/diseno-web-para-${sector.id}/${city}`} className="text-xs text-muted-foreground hover:text-primary transition block">
                          {sector.label} en {capitalize(city)}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <span className="text-xs text-muted-foreground/50 italic">+ 10 ciudades más...</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
