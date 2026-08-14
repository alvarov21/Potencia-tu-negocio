import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MonitorSmartphone, Rocket, CheckCircle } from "lucide-react";
import { Contact } from "./index";

const VALID_CITIES = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", 
  "bilbao", "alicante", "murcia", "granada", "jaen", "cadiz", "huelva", "almeria"
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Route = createFileRoute("/diseno-web/$ciudad")({
  beforeLoad: ({ params: { ciudad } }) => {
    if (!VALID_CITIES.includes(ciudad.toLowerCase())) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const cityName = capitalize(params.ciudad);
    return {
      meta: [
        { title: `Agencia de Diseño Web en ${cityName} | Potencia tu Negocio` },
        { name: "description", content: `Servicios de diseño de páginas web profesionales en ${cityName}. Atrae más clientes locales con una web rápida, adaptada a móviles y optimizada para Google.` },
      ]
    };
  },
  component: DisenoWebLocal,
});

function DisenoWebLocal() {
  const { ciudad } = Route.useParams();
  const cityDisplay = capitalize(ciudad);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Agencia Web en {cityDisplay}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          Diseño Web en <span className="text-primary">{cityDisplay}</span> para captar clientes
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Si alguien en {cityDisplay} busca tus servicios y tu web tarda en cargar o se ve antigua, se irá a tu competencia. Creamos webs que venden por ti 24/7.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <MonitorSmartphone className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Diseño 100% Móvil</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Más del 80% de tus clientes en {cityDisplay} te buscarán desde su teléfono. Tu web se verá perfecta y cargará al instante en cualquier pantalla.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Rocket className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Velocidad Extrema</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Google penaliza las webs lentas. Desarrollamos con la última tecnología para que tu página vuele y Google te ponga en los primeros resultados.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <CheckCircle className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Textos que Venden</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No usamos plantillas aburridas. Redactamos mensajes claros que convencen a tus visitantes de que eres la mejor opción en {cityDisplay}.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Especialistas locales</h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-balance">
          Conocemos el mercado de {cityDisplay}. Sabemos cómo buscan tus clientes y qué esperan encontrar. Desde pequeños comercios y restaurantes hasta clínicas y despachos profesionales.
        </p>
        <Link to="/#precios" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary font-semibold hover:bg-primary/90 transition text-primary-foreground">
          Ver nuestros planes <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="bg-muted/30 border-t border-border mt-12 pb-12">
        <Contact defaultSector="Otro" />
      </div>
    </div>
  );
}
