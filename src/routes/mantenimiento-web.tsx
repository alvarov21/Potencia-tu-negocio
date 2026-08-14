import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Zap, Wrench } from "lucide-react";
import { Contact } from "./index";

export const Route = createFileRoute("/mantenimiento-web")({
  head: () => ({
    meta: [
      { title: "Mantenimiento Web Profesional | Seguridad y Actualizaciones" },
      { name: "description", content: "Nos encargamos del mantenimiento de tu página web. Copias de seguridad, actualizaciones de seguridad, cambios de texto y optimización de velocidad continua." },
    ]
  }),
  component: MantenimientoWeb,
});

function MantenimientoWeb() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Tranquilidad total
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 text-balance">
          Mantenimiento Web: Tú a tu negocio, nosotros a tu web
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Una web abandonada es una web vulnerable y lenta. Actuamos como tu departamento informático para que nunca tengas que preocuparte por caídas o hackeos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <ShieldCheck className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Seguridad y Backups</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Realizamos copias de seguridad diarias y blindamos tu web contra ataques. Si algo falla, lo restauramos en minutos sin coste adicional.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Wrench className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Cambios Ilimitados</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            ¿Necesitas cambiar un precio, subir fotos nuevas o modificar un texto? Nos envías un WhatsApp y lo hacemos por ti en menos de 24 horas.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition duration-300">
          <Zap className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold mb-3">Optimización Continua</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Actualizamos el servidor, los plugins y optimizamos el código para que tu página cargue siempre como un rayo y Google te premie.
          </p>
        </div>
      </div>

      <div className="bg-muted/30 border-t border-border py-20 px-6 lg:px-10 -mx-6 lg:-mx-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Delega tu web en profesionales</h2>
          <p className="text-muted-foreground mb-10">
            Pídenos presupuesto sin compromiso. Evaluaremos el estado actual de tu web y te daremos un precio fijo mensual sin sorpresas.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
}
