import { motion } from "framer-motion";
import { Scissors, User } from "lucide-react";

export function SaaSFeatures() {
      const cards = [
    {
      num: "01",
      title: "Cero comisiones. Todo tu equipo por un único precio.",
      context: "Tu esfuerzo es tuyo. Crecer no debería ser un castigo en tu factura mensual.",
      ti: "Cobras al momento en tu TPV. Paga lo mismo seas 1 o seáis 6. Sin facturas infladas ni cargos por reservas.",
      cliente: "Reserva en 3 toques desde Instagram o Google. Sin bajarse Apps, sin \"gastos de gestión\" y con su especialista favorito siempre disponible."
    },
    {
      num: "02",
      title: "Control total de tu negocio y tus clientes",
      context: "Sin permanencias ni secuestros de base de datos. Si te vas, te llevas todo.",
      ti: "Fórmulas, historial y foto del \"antes\" listos antes de que entre. Exportas tus contactos cuando quieras en un clic.",
      cliente: "Trato personalizado cada visita sin tener que explicar cómo le gusta el servicio. Y su centro siempre será su centro, sin intermediarios."
    },
    {
      num: "03",
      title: "Tu horario real y huecos inteligentes",
      context: "Un tratamiento tiene tiempos muertos. Tu agenda debería saberlo para no perder dinero.",
      ti: "Mientras un tratamiento hace efecto, el sistema abre hueco para otra cita. Configura turnos partidos o vacaciones en segundos.",
      cliente: "Encuentra horas disponibles que con otras agendas aparecerían como bloqueadas. Nunca reserva en una hora que no estás."
    },
    {
      num: "04",
      title: "Adiós plantones, hola soporte 100% humano",
      context: "Porque hoy en día ya nadie lee un SMS ni quiere hablar con un bot.",
      ti: "Recordatorios automáticos por WhatsApp. Y si algo falla, nos escribes y te respondemos nosotros (humanos).",
      cliente: "Confirma su cita por WhatsApp en dos segundos. Si algo falla, se resuelve rápido para que tú siempre des buena cara."
    }
  ];

  return (
    <div id="ventajas" className="bg-background rounded-3xl p-6 lg:p-10 border border-border max-w-5xl mx-auto shadow-2xl relative my-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">4 razones de peso para no usar una agenda más.</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Casi todo el software de reservas está pensado para su propio negocio. Este está pensado para el tuyo y para quien se sienta en tu silla.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-card border border-border hover:border-primary/30 transition-colors rounded-3xl p-6 lg:p-8 flex flex-col h-full shadow-sm"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-5xl shrink-0" style={{ color: "#A9B8D2", fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                {card.num}
              </span>
              <h3 className="text-xl font-bold leading-tight text-foreground">{card.title}</h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 font-medium">
              {card.context}
            </p>

            <div className="mt-auto space-y-4">
              <div className="bg-background/40 border border-border/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1.5" style={{ backgroundColor: "#3250F0" }}>
                    <Scissors className="w-3 h-3" />
                    PARA TI
                  </span>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {card.ti}
                </p>
              </div>

              <div className="bg-background/40 border border-border/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-[#0A0F2E] uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center gap-1.5" style={{ backgroundColor: "#A9B8D2" }}>
                    <User className="w-3 h-3" />
                    PARA TU CLIENTE
                  </span>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {card.cliente}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-md">
        <p className="text-xl md:text-2xl font-bold mb-8 text-foreground leading-snug">
          Cuando un software cobra por cada silla y se queda con tus clientes, está pensando en él. Nosotros pensamos en los dos lados de la silla.
        </p>
        <a href="#contacto" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-cta text-white font-bold hover:scale-[1.02] transition shadow-glow text-lg">
          Pruébalo 30 días gratis &middot; Sin tarjeta &middot; Te lo configuramos nosotros
        </a>
      </div>
    </div>
  );
}
