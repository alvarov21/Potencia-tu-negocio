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

const SECTOR_CONTENT = {
  "restaurantes": {
    p1: `La hostelería en {city} no perdona. Si la gente busca dónde comer esta noche o un buen menú del día y tu restaurante no sale en la primera página de Google, están yendo a la competencia.`,
    p2: `No necesitas otra web anticuada. Creamos con IA una página atractiva, integramos tu sistema de reservas y optimizamos tu ficha de Maps para que las reseñas trabajen por ti.`,
    p3: `Todo listo en menos de 7 días, sin que tengas que dejar la cocina o la barra para hacer de informático.`
  },
  "clinicas-dentales": {
    p1: `La confianza es clave en la salud. Cuando un paciente en {city} busca "implantes dentales" o "urgencia dental", la imagen que transmite tu web decide si piden cita o se van.`,
    p2: `Diseñamos webs médicas que inspiran profesionalidad, con formularios de primera visita optimizados y destacando los tratamientos más rentables de tu clínica.`,
    p3: `Consigue más primeras visitas cada mes posicionándote por encima de las franquicias en el mapa de {city}.`
  },
  "talleres-mecanicos": {
    p1: `Nadie busca un taller por aburrimiento. Cuando alguien en {city} necesita arreglar el coche, busca urgencia, transparencia y un taller cerca de su ubicación.`,
    p2: `Tu nueva web incluirá un botón directo a WhatsApp para presupuestos rápidos, listado de tus servicios (chapa, pintura, diagnosis) y opiniones verificadas para dar seguridad.`,
    p3: `Convierte tu web en tu mejor comercial y recibe solicitudes de cita previa mientras estás debajo del elevador.`
  },
  "peluquerias": {
    p1: `El sector de la belleza en {city} se mueve por imagen. Si tu salón hace trabajos increíbles pero tu presencia en internet es invisible, estás perdiendo clientes todos los días.`,
    p2: `Creamos un portfolio visual impactante para tus mejores peinados y coloraciones, junto con un sistema de reservas integrado si lo necesitas.`,
    p3: `Llena tu agenda de citas semanales haciendo que los vecinos de tu zona te descubran en su móvil.`
  },
  "gestorias": {
    p1: `Las pymes y autónomos de {city} buscan asesores de confianza. Tu página web debe reflejar la seriedad y la tranquilidad que ofreces al gestionar sus impuestos.`,
    p2: `Desarrollamos una web corporativa que explica claramente tus servicios (fiscal, laboral, contable) y facilita que te contacten en un solo clic.`,
    p3: `Deja que la inteligencia artificial y el SEO capten clientes para tu despacho mientras tú te encargas de los números.`
  }
};

const DEFAULT_CONTENT = {
  p1: `Si tienes un negocio en {city}, sabes que la competencia es brutal. Cuando alguien busca en Google lo que ofreces, o apareces tú, o aparece tu competencia.`,
  p2: `En Potencia tu Negocio creamos webs con inteligencia artificial diseñadas específicamente para captar clientes en tu ciudad. Integramos Maps, WhatsApp y SEO local.`,
  p3: `Lo mejor: la primera versión está lista en 48 horas. Te enseñamos cómo queda y, si te gusta, la publicamos. Sin complicaciones.`
};

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
            {(SECTOR_CONTENT[sector as keyof typeof SECTOR_CONTENT] || DEFAULT_CONTENT).p1.replace("{city}", cityDisplay)}
          </p>
          <p>
            {(SECTOR_CONTENT[sector as keyof typeof SECTOR_CONTENT] || DEFAULT_CONTENT).p2.replace("{city}", cityDisplay)}
          </p>
          <p>
            {(SECTOR_CONTENT[sector as keyof typeof SECTOR_CONTENT] || DEFAULT_CONTENT).p3.replace("{city}", cityDisplay)}
          </p>
        </div>
      </div>
      <div className="bg-muted/30 border-t border-border mt-12 pb-12">
        <Contact defaultSector={FORM_SECTORS[sector as keyof typeof FORM_SECTORS] || ""} />
      </div>
    </div>
  );
}
