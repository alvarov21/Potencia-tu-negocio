import { ArrowRight } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";

export function SaaSFeatures({ onClose }: { onClose?: () => void }) {
  return (
    <div className="p-8">
      <h3 className="text-3xl font-bold mb-2">Por qué somos distintos</h3>
      <p className="text-xl font-black text-primary mb-1">
        Software + Equipo Humano
      </p>
      
      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-foreground font-semibold text-lg text-balance">
          La mayoría de plataformas están diseñadas pensando en su propio negocio: en cobrarte comisiones abusivas por cada reserva y en quedarse con los datos de tus clientes.
        </p>
        
        <p>
          Nosotros hemos construido una herramienta pensada en dos personas a la vez: el profesional que trabaja y el cliente que reserva.
        </p>
        
        <p className="italic text-foreground border-l-4 border-primary/30 pl-4 py-1">
          "Crecer no debería ser un castigo en tu factura mensual. Tu esfuerzo es tuyo, y tu agenda debería trabajar para ti, no al revés."
        </p>
        
        <div className="bg-muted/30 rounded-2xl p-6 mt-8 border border-border/50">
          <h4 className="font-bold text-foreground mb-4">¿Qué te llevas realmente?</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm items-start">
              <span className="shrink-0 mt-0.5">✅</span> 
              <div>
                <strong className="text-foreground block mb-0.5">Cero comisiones y equipo ilimitado</strong> 
                Paga lo mismo seas 1 o seáis 6. Sin facturas infladas ni "gastos de gestión" para el cliente.
              </div>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <span className="shrink-0 mt-0.5">✅</span> 
              <div>
                <strong className="text-foreground block mb-0.5">Control total de tu negocio</strong> 
                Sin permanencias. Tus datos te pertenecen y el dinero va directo a tu TPV al momento.
              </div>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <span className="shrink-0 mt-0.5">✅</span> 
              <div>
                <strong className="text-foreground block mb-0.5">Huecos inteligentes (Optimización de agenda)</strong> 
                Mientras un tratamiento hace efecto, el sistema te abre un hueco para otra cita. Más ingresos al día.
              </div>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <span className="shrink-0 mt-0.5">✅</span> 
              <div>
                <strong className="text-foreground block mb-0.5">Recordatorios por WhatsApp</strong> 
                Reduce drásticamente los plantones. Avisos por el único chat que la gente lee y responde.
              </div>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <span className="shrink-0 mt-0.5">✅</span> 
              <div>
                <strong className="text-foreground block mb-0.5">Soporte 100% Humano</strong> 
                Si algo técnico falla, nos escribes y lo arreglamos de inmediato para que tú des buena cara siempre.
              </div>
            </li>
          </ul>
        </div>
        
        <p className="font-semibold text-foreground text-center mt-6 text-balance text-lg">
          Reserva en 3 toques, sin descargas, sin registros. Pura conversión para tu local.
        </p>
      </div>
      
      <div className="mt-8 flex justify-center">
        <DialogClose asChild>
          <a href="#contacto" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] transition">
            Solicitar Demo Ahora <ArrowRight className="w-4 h-4" />
          </a>
        </DialogClose>
      </div>
    </div>
  );
}
