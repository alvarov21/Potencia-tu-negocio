import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Contact } from "./index";

const PROJECTS = {
  "veterinaria-malaga": {
    title: "Clínica Veterinaria Premium",
    client: "Clínica Veterinaria (Málaga)",
    sector: "Veterinaria",
    image: "/veterinaria-mockup.jpg",
    liveUrl: "https://veterinaria-m-laga-premium-landing.vercel.app/",
    challenge: "La clínica necesitaba modernizar su imagen en internet y facilitar la reserva de citas para urgencias y consultas habituales, superando a clínicas más antiguas de su zona en Málaga.",
    solution: "Se desarrolló una landing page orientada a la conversión rápida (teléfono visible y WhatsApp). Se implementó SEO local enfocado en servicios clave como cirugía y urgencias 24h.",
    result: "Aumento del 40% en reservas online y mejor posicionamiento en el local pack de Google Maps para búsquedas de veterinarios de urgencia."
  },
  "estetimagen": {
    title: "Centro de Estética",
    client: "Estetimagen (Granada)",
    sector: "Estética y Belleza",
    image: "/estetimagen-mockup.jpg",
    liveUrl: "https://estetimagen-granada.vercel.app",
    challenge: "El centro requería un diseño elegante que reflejara la calidad de sus tratamientos y permitiera a las clientas ver las tarifas y reservar de manera fácil.",
    solution: "Diseñamos una web con una paleta de colores limpia y moderna. Integramos una sección de servicios detallada y un botón de reserva rápida.",
    result: "Mejora sustancial en la imagen de marca digital y automatización de consultas recurrentes sobre precios y disponibilidad."
  },
  "picoteo": {
    title: "Web para Restaurante",
    client: "Picoteo",
    sector: "Hostelería",
    image: "/picoteo.png",
    liveUrl: "https://picoteo-murex.vercel.app",
    challenge: "El restaurante necesitaba digitalizar su carta y ofrecer un sistema de reservas sin depender exclusivamente de plataformas que cobran altas comisiones.",
    solution: "Se creó una página atractiva centrada en la comida (imágenes grandes), con la carta digital integrada y un módulo de reservas directas conectado a WhatsApp.",
    result: "Reducción de costes en comisiones a terceros y un 60% más de interacción directa con clientes recurrentes a través de la web."
  },
  "taller-mecanico": {
    title: "Taller Mecánico",
    client: "Taller Multimarca",
    sector: "Automoción",
    image: "/nfc-review-card-v4.png", // Genérico por ahora
    liveUrl: "#",
    challenge: "El taller apenas tenía visibilidad online y dependía del boca a boca. Necesitaban captar clientes que buscaran chapa, pintura y mecánica general en Google.",
    solution: "Se diseñó una web corporativa rápida, con listado claro de servicios y formularios para pedir presupuesto online de forma ágil.",
    result: "Multiplicaron sus solicitudes de presupuesto semanales gracias al posicionamiento orgánico en búsquedas locales."
  },
  "padre-pio": {
    title: "Web para Taberna Clásica",
    client: "Taberna Padre Pío",
    sector: "Hostelería",
    image: "", // Sin mockup específico por ahora
    liveUrl: "https://padre-pio-web-experience.vercel.app",
    challenge: "La taberna necesitaba transmitir su esencia tradicional pero ofreciendo una experiencia digital moderna para reservas y consulta de carta.",
    solution: "Creamos un diseño inmersivo que respeta la tradición del local, optimizando la navegación móvil para clientes en ruta.",
    result: "Mayor afluencia de turistas y clientes locales que encuentran la taberna a través de Google Maps."
  }
};

export const Route = createFileRoute("/portfolio/$proyecto")({
  beforeLoad: ({ params: { proyecto } }) => {
    if (!PROJECTS[proyecto as keyof typeof PROJECTS]) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const project = PROJECTS[params.proyecto as keyof typeof PROJECTS];
    return {
      meta: [
        { title: `Caso de Éxito: ${project.title} | Potencia tu Negocio` },
        { name: "description", content: `Descubre cómo ayudamos a ${project.client} a captar más clientes con su nueva página web optimizada para SEO local.` },
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
        <a href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al portfolio
        </a>
        
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            {project.sector}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            Cliente: <strong className="text-foreground">{project.client}</strong>
          </p>
        </div>

        {project.image && (
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl mb-12">
            <img src={project.image} alt={`Mockup del proyecto ${project.title}`} className="w-full h-auto object-cover" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">La Solución</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">El Resultado</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.result}</p>
            </section>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold mb-4">Detalles del Proyecto</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Sector:</strong> {project.sector}</li>
                <li><strong className="text-foreground">Servicios:</strong> Diseño Web, SEO Local</li>
              </ul>
              {project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer nofollow" className="mt-6 w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition">
                  Ver web en vivo <ExternalLink className="w-4 h-4" />
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
