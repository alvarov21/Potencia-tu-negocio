import { createFileRoute } from "@tanstack/react-router";
import { Store, MessageSquare, Image as ImageIcon } from "lucide-react";
import { Contact } from "./index";

export const Route = createFileRoute("/google-business-profile")({
  head: () => ({
    meta: [
      { title: "Optimización de Google Business Profile | Destaca tu Ficha" },
      { name: "description", content: "Gestionamos y optimizamos tu ficha de Google Business Profile (antiguo Google My Business) para que captes más clientes a pie de calle." },
    ]
  }),
  component: GoogleBusinessProfile,
});

function GoogleBusinessProfile() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Tu escaparate digital
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          Google Business Profile: La puerta a tu negocio
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tener una ficha de Google no es suficiente. Hay que optimizarla, actualizarla y cuidarla para superar a tus competidores locales en el mapa.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Store className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Configuración Total</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Completamos el 100% de los campos que Google valora: categorías secundarias, atributos ocultos, horarios especiales y descripciones optimizadas.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <MessageSquare className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Gestión de Reseñas</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Respondemos a tus reseñas (positivas y negativas) de forma profesional y usando palabras clave que mejoran tu posicionamiento orgánico.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <ImageIcon className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Publicaciones Frecuentes</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Mantenemos tu ficha viva subiendo fotos de tus trabajos, ofertas semanales y novedades para que Google vea que eres un negocio activo.
          </p>
        </div>
      </div>

      <div className="bg-muted/30 border-t border-border py-20 px-6 lg:px-10 -mx-6 lg:-mx-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Auditoría Gratuita de tu Ficha</h2>
          <p className="text-muted-foreground mb-10">
            Déjanos echarle un vistazo a tu perfil actual de Google y te diremos dónde estás fallando y por qué la competencia se lleva tus llamadas.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
}
