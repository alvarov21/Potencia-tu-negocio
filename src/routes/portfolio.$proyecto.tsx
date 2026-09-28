import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Contact } from "./index";

const PROJECTS = {
  "veterinaria-malaga": {
    title: "Web para Clínica Veterinaria",
    sector: "Veterinaria",
    image: "/veterinaria-mockup.jpg",
    liveUrl: "https://veterinaria-m-laga-premium-landing.vercel.app/",
    forWho: "Clínicas veterinarias y hospitales de animales que necesitan destacar urgencias y especialidades.",
    includes: "Diseño optimizado para móviles, sección de urgencias 24h, botón flotante de WhatsApp, integración de cita previa y SEO local.",
    howItWorks: "Adaptamos los colores, logotipo y servicios a tu clínica. En 48 horas te presentamos la maqueta y en menos de 7 días está publicada."
  },
  "estetimagen": {
    title: "Web para Centro de Estética",
    sector: "Estética y Belleza",
    image: "/estetimagen-mockup.jpg",
    liveUrl: "#",
    forWho: "Salones de belleza, centros de estética y spas que quieren mostrar una imagen premium y captar citas.",
    includes: "Catálogo visual de tratamientos, integración de tarifas, botón de reservas directas y diseño elegante.",
    howItWorks: "Seleccionamos la mejor estructura para tus tratamientos. Añadimos tus tarifas y fotos, y la publicamos en una semana."
  },
  "picoteo": {
    title: "Web para Restaurante",
    sector: "Hostelería",
    image: "/picoteo.png",
    liveUrl: "#",
    forWho: "Restaurantes, bares y gastrobares que quieren ganar visibilidad local sin depender de plataformas de terceros.",
    includes: "Carta digital integrada, módulo de contacto para reservas y galería fotográfica de platos.",
    howItWorks: "Digitalizamos tu carta, destacamos tus platos estrella y optimizamos el diseño para que abra muy rápido en el móvil."
  },
  "taller-mecanico": {
    title: "Web para Taller Mecánico",
    sector: "Automoción",
    image: "/nfc-review-card-v4.png",
    liveUrl: "#",
    forWho: "Talleres multimarca, chapa y pintura, o mecánicos especialistas que necesitan captar clientes locales.",
    includes: "Listado claro de servicios (diagnosis, neumáticos, etc.), formulario rápido de presupuestos y mapa de ubicación.",
    howItWorks: "Destacamos tus servicios y preparamos la web para que aparezcas cuando alguien busque un taller en tu zona."
  },
  "padre-pio": {
    title: "Web para Taberna Tradicional",
    sector: "Hostelería",
    image: "", 
    liveUrl: "#",
    forWho: "Tabernas, tascas y bares tradicionales que quieren modernizar su captación sin perder su esencia.",
    includes: "Diseño adaptado al estilo del local, horarios, información de contacto y mapa interactivo.",
    howItWorks: "Respetamos la identidad de tu local mientras construimos una web sencilla que atrae clientes locales y turistas."
  }
};

export const Route = createFileRoute("/portfolio/$proyecto")({
  beforeLoad: ({ params: { proyecto } }) => {
    if (proyecto === "taller-mecanico") {
      throw notFound();
    }
    if (!PROJECTS[proyecto as keyof typeof PROJECTS]) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const project = PROJECTS[params.proyecto as keyof typeof PROJECTS];
    return {
      meta: [
        { title: `Demo: ${project.title.toLowerCase()} | Potencia tu negocio` },
        { name: "description", content: `Demo funcional para ${project.title.toLowerCase()}. Mira cómo puede quedar la página web de tu negocio local, lista en 48 horas.` },
      ]
    };
  },
  component: PortfolioProject,
});

function PortfolioProject() {
  const { proyecto } = Route.useParams();
  const project = PROJECTS[proyecto as keyof typeof PROJECTS];

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <a href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al portfolio
        </a>
        
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Demo · {project.sector}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            Descubre cómo estructuramos las webs para negocios de {project.sector.toLowerCase()}.
          </p>
        </div>

        {project.image && (
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl mb-12 bg-muted flex items-center justify-center min-h-[200px]">
            <img src={project.image} alt={`Demo de ${project.title}`} className="w-full h-auto object-cover" loading="lazy" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Para quién es</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.forWho}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Qué incluye</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.includes}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Cómo funciona</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.howItWorks}</p>
            </section>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-4">Detalles de la demo</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Sector:</strong> {project.sector}</li>
                <li><strong className="text-foreground">Plazo:</strong> 48 horas (1ª versión)</li>
              </ul>
              {project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer nofollow" className="mt-6 w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition">
                  Ver demo funcional <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24">
        <Contact />
      </div>
    </div>
  );
}
