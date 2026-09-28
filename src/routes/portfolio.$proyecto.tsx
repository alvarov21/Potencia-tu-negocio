import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Contact } from "./index";

const PROJECTS = {
  "demo-veterinaria": {
    title: "Web para Clínica Veterinaria",
    sector: "Veterinaria",
    image: "/veterinaria-mockup.jpg",
    liveUrl: "https://veterinaria-m-laga-premium-landing.vercel.app/",
    forWho: "Clínicas veterinarias, hospitales de animales y consultas de barrio que quieren que los dueños de mascotas las encuentren rápido cuando las necesitan. Pensada tanto para la clínica que atiende urgencias y quiere que su teléfono se vea a la primera, como para la que vive de las consultas programadas, las vacunas y las revisiones, y necesita llenar la agenda sin depender solo del boca a boca.",
    includes: "Diseño pensado para el móvil, que es desde donde llegan la mayoría de consultas; botones de llamada y de WhatsApp siempre visibles; sección de urgencias si las atiendes; una ficha para cada servicio (consultas, vacunación, cirugía, peluquería canina); petición de cita previa; mapa y horarios; reseñas de Google en la propia web; SEO local para las búsquedas de tu zona, y textos legales incluidos.",
    howItWorks: "Nos cuentas cómo trabaja tu clínica en un formulario de dos minutos o en una llamada corta. Adaptamos esta estructura con tu logotipo, tus colores, tus servicios y tus fotos, y en 48 horas te enseñamos la primera versión. Aplicamos los cambios que nos pidas y la publicamos en menos de 7 días, con dominio, alojamiento y ficha de Google configurados."
  },
  "demo-centro-estetica": {
    title: "Web para Centro de Estética",
    sector: "Estética y Belleza",
    image: "/estetimagen-mockup.jpg",
    liveUrl: "#",
    forWho: "Centros de estética, salones de belleza, spas y cabinas independientes que quieren transmitir en su web el mismo cuidado que ponen en cada tratamiento. Pensada para quien recibe cada día mensajes preguntando precios y huecos libres, y prefiere que la clienta llegue ya informada y con la cita pedida.",
    includes: "Catálogo de tratamientos ordenado por categorías (faciales, corporales, depilación, manicura) con descripción y precio; galería de fotos del centro; botón de reserva o de WhatsApp en cada tratamiento; reseñas de Google a la vista; horarios y mapa; diseño elegante adaptado a tu imagen de marca; SEO local para aparecer en las búsquedas de tu ciudad, y textos legales incluidos.",
    howItWorks: "Nos pasas tu lista de tratamientos con sus precios y unas cuantas fotos del centro. Montamos la web sobre esta estructura y en 48 horas tienes la primera versión para revisarla. Ajustamos textos, colores y orden hasta que te encaje, y en menos de 7 días está publicada con tu dominio y tu ficha de Google al día."
  },
  "demo-restaurante": {
    title: "Web para Restaurante",
    sector: "Hostelería",
    image: "/picoteo.png",
    liveUrl: "#",
    forWho: "Restaurantes, bares y gastrobares que quieren que la gente vea la carta y reserve directamente con ellos, sin pagar una comisión por cada mesa a plataformas de terceros. Pensada para el local que ya tiene buenas reseñas en Google, pero cuya web está anticuada, no existe o no se ve bien en el móvil.",
    includes: "Carta digital con fotos, categorías y precios que puedes actualizar en minutos, también accesible con código QR en la mesa; reservas directas por WhatsApp o formulario; galería de platos y del local; horarios, mapa y botón de llamada; reseñas de Google en la web; enlaces a las plataformas de reparto que ya uses; SEO local y textos legales incluidos.",
    howItWorks: "Nos mandas la carta y unas fotos; si no tienes buenas, te ayudamos a elegirlas. Digitalizamos la carta, destacamos tus platos estrella y preparamos el diseño para que abra rápido en el móvil. En 48 horas ves la primera versión, la ajustamos contigo y en menos de 7 días está publicada con tu dominio y tu ficha de Google."
  },
  "demo-taller": {
    title: "Web para Taller Mecánico",
    sector: "Automoción",
    image: "/nfc-review-card-v4.png",
    liveUrl: "#",
    forWho: "Talleres multimarca, chapa y pintura, o mecánicos especialistas que necesitan captar clientes locales.",
    includes: "Listado claro de servicios (diagnosis, neumáticos, etc.), formulario rápido de presupuestos y mapa de ubicación.",
    howItWorks: "Destacamos tus servicios y preparamos la web para que aparezcas cuando alguien busque un taller en tu zona."
  },
  "demo-taberna": {
    title: "Web para Taberna Tradicional",
    sector: "Hostelería",
    image: "", 
    liveUrl: "#",
    forWho: "Tabernas, tascas, bodegas y bares de toda la vida que quieren que también los encuentre quien busca desde el móvil, vecinos y turistas, sin perder su carácter. Pensada para el local con historia y clientela fiel que quiere que los nuevos lo encuentren cuando buscan dónde tapear cerca.",
    includes: "Diseño que respeta el estilo del local; la historia de la casa en pocas líneas; carta o tapas destacadas con precios; horarios, días de cierre y mapa para llegar; botones de llamada y de WhatsApp para reservar; reseñas de Google a la vista; una web que se lee bien en el móvil, que es desde donde te buscan en la calle; SEO local y textos legales incluidos.",
    howItWorks: "Hablamos diez minutos sobre el local, su historia y lo que más se pide. Con eso y unas fotos montamos la primera versión en 48 horas. La revisas con calma, ajustamos lo que haga falta y en menos de 7 días está publicada, con tu dominio y tu ficha de Google actualizados."
  }
};

export const Route = createFileRoute("/portfolio/$proyecto")({
  beforeLoad: ({ params: { proyecto } }) => {
    // URLs antiguas con nombres de negocio → slugs genéricos (301 permanente)
    const LEGACY_SLUGS: Record<string, string> = {
      "veterinaria-malaga": "demo-veterinaria",
      "estetimagen": "demo-centro-estetica",
      "picoteo": "demo-restaurante",
      "padre-pio": "demo-taberna",
    };
    if (LEGACY_SLUGS[proyecto]) {
      throw redirect({ to: "/portfolio/$proyecto", params: { proyecto: LEGACY_SLUGS[proyecto] }, statusCode: 301 });
    }
    // Demo sin maqueta propia todavía: 404 real
    if (proyecto === "demo-taller" || proyecto === "taller-mecanico") {
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
