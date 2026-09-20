import { motion } from "framer-motion";
import { Scissors, User } from "lucide-react";

export function SaaSFeatures() {
    const cards = [
    {
      num: "01",
      title: "Un precio, todo el equipo",
      context: "Crecer no debería ser un castigo en tu factura mensual.",
      ti: "Paga lo mismo seas 1 o seáis 6. Sin recargos por dar de alta a nuevos profesionales.",
      cliente: "Su especialista favorito siempre estará en la agenda. Nadie se queda fuera por ahorrar costes."
    },
    {
      num: "02",
      title: "0% comisiones por cita",
      context: "Tu esfuerzo es tuyo. Nunca nos llevamos un porcentaje de tu trabajo.",
      ti: "Lo que ingresas va íntegro a tu caja. Sin sustos ni facturas infladas a final de mes.",
      cliente: "Sin "gastos de gestión" ni cargos ocultos al reservar."
    },
    {
      num: "03",
      title: "Tus clientes son tuyos",
      context: "Sin permanencias. Pagas mes a mes, y tus datos te pertenecen.",
      ti: "No secuestramos tu negocio. Exportas historial y clientes en un clic si decides irte.",
      cliente: "Tu centro siempre será tu centro, sin intermediarios bloqueando su acceso."
    },
    {
      num: "04",
      title: "Cobras al instante, en tu TPV",
      context: "No nos metemos en medio de tus cobros ni los retenemos.",
      ti: "Cobras en tu local, al momento. Sin esperar días a que te liquidemos los pagos.",
      cliente: "Paga con tarjeta o efectivo en tu local, sin dejar sus datos a plataformas desconocidas."
    },
    {
      num: "05",
      title: "Cero descargas, cero fricción",
      context: "Quien quiere reservar no quiere registrarse en otra App más.",
      ti: "Reservas 24/7 automáticas desde tu Instagram, WhatsApp o ficha de Google.",
      cliente: "Reserva en 3 toques. Sin apps, sin registro y sin dar la tarjeta de crédito."
    },
    {
      num: "06",
      title: "Avisos automáticos por WhatsApp",
      context: "Porque hoy en día ya nadie lee un SMS (y mucho menos un email).",
      ti: "Reduce drásticamente los plantones. Recordatorios que sí se leen.",
      cliente: "Confirma o avisa de que no llega en dos segundos, desde el chat que ya usa a diario."
    },
    {
      num: "07",
      title: "Huecos inteligentes",
      context: "Un tratamiento tiene tiempos muertos. Tu agenda debería saberlo.",
      ti: "Mientras un tratamiento hace efecto, el sistema abre hueco para otra cita. Más ingresos al día.",
      cliente: "Encuentra horas disponibles que con otras agendas aparecerían como bloqueadas."
    },
    {
      num: "08",
      title: "Fichas técnicas al instante",
      context: "El secreto para fidelizar es que el cliente se sienta único.",
      ti: "Fórmulas, manías, alergias y foto del "antes" listos antes de que entre por la puerta.",
      cliente: "Recibe un trato exquisito sin tener que explicar cómo le gusta el servicio cada vez."
    },
    {
      num: "09",
      title: "Tu horario real a tu manera",
      context: "Turnos partidos, días libres sueltos o vacaciones.",
      ti: "Configura cualquier semana irregular en segundos desde tu móvil.",
      cliente: "Reserva con seguridad. Nunca le darán cita en una hora que no estás."
    },
    {
      num: "10",
      title: "Soporte 100% humano",
      context: "Sin bots ni tickets de asistencia que se responden a la semana.",
      ti: "Nosotros te montamos la agenda el primer día. Y si dudas, escribes por WhatsApp.",
      cliente: "Si algo técnico falla, lo resolvemos de inmediato para que tú siempre des buena cara."
    }
  ];

  return (
    <div id="ventajas" className="bg-background rounded-3xl p-6 lg:p-10 border border-border max-w-5xl mx-auto shadow-2xl relative my-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Diez razones por las que esto no es una agenda más.</h2>
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
