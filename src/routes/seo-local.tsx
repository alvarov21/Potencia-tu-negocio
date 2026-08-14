import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Search, Star } from "lucide-react";
import { Contact } from "./index";

export const Route = createFileRoute("/seo-local")({
  head: () => ({
    meta: [
      { title: "Agencia de SEO Local | Posiciona tu negocio en Google Maps" },
      { name: "description", content: "Servicios de SEO Local para empresas y autónomos. Mejora tu visibilidad en Google Maps y atrae clientes de tu ciudad de forma orgánica." },
    ]
  }),
  component: SeoLocal,
});

function SeoLocal() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Atrae clientes cercanos
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          SEO Local: Sé la primera opción en tu ciudad
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          El 80% de las búsquedas locales terminan en una venta. Si tu negocio no aparece en el "Local Pack" de Google (los 3 primeros del mapa), le estás regalando clientes a tu competencia.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <MapPin className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Google Maps</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Optimizamos tu ficha para que aparezcas el primero cuando alguien busque tus servicios cerca de tu ubicación.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Search className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Palabras Clave Locales</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Identificamos exactamente qué términos usan tus vecinos para buscarte (ej. "dentista urgencias madrid") y atacamos esas keywords.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Star className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Reputación y Reseñas</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Implementamos sistemas para conseguir reseñas reales de 5 estrellas de tus clientes satisfechos para generar confianza ciega.
          </p>
        </div>
      </div>

      <div className="bg-muted/30 border-t border-border py-20 px-6 lg:px-10 -mx-6 lg:-mx-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Preparado para dominar tu barrio?</h2>
          <p className="text-muted-foreground mb-10">
            Auditamos tu presencia local actual de forma totalmente gratuita y te decimos exactamente qué te falta para superar a la competencia.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
}
