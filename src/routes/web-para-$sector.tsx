import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Globe, TrendingUp, Smartphone } from "lucide-react";
import { Contact } from "./index";

const VALID_SECTORS = {
  "restaurantes": "restaurantes y hostelería",
  "clinicas-dentales": "clínicas dentales",
  "talleres-mecanicos": "talleres mecánicos",
  "peluquerias": "peluquerías y centros de estética",
  "gestorias": "gestorías y asesorías",
  "veterinarias": "clínicas veterinarias",
  "centros-estetica": "centros de estética",
  "abogados": "despachos de abogados",
  "fisioterapeutas": "clínicas de fisioterapia"
};

const VALID_CITIES = [
  "madrid", "barcelona", "sevilla", "valencia", "cordoba", "malaga", "zaragoza", "bilbao", "alicante", "murcia"
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const Route = createFileRoute("/web-para-$sector")({
  beforeLoad: ({ params: { sector } }) => {
    if (!VALID_SECTORS[sector as keyof typeof VALID_SECTORS]) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const sectorName = VALID_SECTORS[params.sector as keyof typeof VALID_SECTORS];
    return {
      meta: [
        { title: `Diseño web corporativo para ${sectorName} | Potencia tu Negocio` },
        { name: "description", content: `Servicio especializado de diseño web con IA para ${sectorName}. Atrae más clientes, automatiza tus reservas y domina tu sector en Google.` },
      ]
    };
  },
  component: SectorPillar,
});

function SectorPillar() {
  const { sector } = Route.useParams();
  const sectorDisplay = VALID_SECTORS[sector as keyof typeof VALID_SECTORS];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Diseño Web Especializado
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          Páginas web rentables para <span className="text-primary">{sectorDisplay}</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          No necesitas una tarjeta de visita digital. Necesitas una herramienta de captación que trabaje 24/7 atrayendo clientes cualificados directamente a tu negocio.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Smartphone className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Diseño Adaptativo</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            El 80% de tus clientes te buscarán desde el móvil. Diseñamos experiencias de usuario perfectas para pantallas pequeñas con botones de llamada rápidos.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <TrendingUp className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">SEO Optimizado</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Estructuramos el código y redactamos los textos para que a Google le encante tu web y la posicione por encima de tu competencia.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Globe className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Funcionalidad Total</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Integramos formularios, chats de WhatsApp y sistemas de reserva o cita previa para que no pierdas ninguna oportunidad de venta.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-20 border-t border-border pt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Encuentra especialistas en tu ciudad</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {VALID_CITIES.map(city => (
            <Link 
              key={city} 
              to={`/diseno-web-para-${sector}/${city}`}
              className="px-4 py-3 bg-card border border-border rounded-xl text-center text-sm font-medium hover:border-primary hover:text-primary transition"
            >
              {capitalize(city)}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 border-t border-border mt-12 pb-12">
        <Contact defaultSector={capitalize(sectorDisplay)} />
      </div>
    </div>
  );
}
