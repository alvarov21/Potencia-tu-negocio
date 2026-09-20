import { motion } from "framer-motion";
import { Scissors, User } from "lucide-react";

export function SaaSFeatures() {
  const cards = [
    {
      num: "01",
      title: "Un precio, todo el equipo",
      context: "Otras plataformas suman una cuota extra por cada profesional que das de alta.",
      ti: "Seas uno o seáis seis, pagas lo mismo. Meter a alguien nuevo en el equipo no te sube la factura, y crecer deja de ser un castigo mensual.",
      cliente: "Puede reservar con el barbero que quiera, porque nadie se queda fuera de la agenda para ahorrar cuota."
    },
    {
      num: "02",
      title: "Cero comisiones por cita",
      context: "Nunca nos llevamos un porcentaje de tu trabajo. Ni de la primera visita, ni de los clientes nuevos, ni de nada.",
      ti: "Lo que cobras es lo que cobras. Sabes lo que pagas al mes y no te llevas sustos al final del mes por haber trabajado más.",
      cliente: "Nadie le mete recargos ni le cobra por gestiones que no ha pedido."
    },
    {
      num: "03",
      title: "Sin permanencia y con tus datos en la mano",
      context: "Pagas mes a mes y tu base de clientes es tuya.",
      ti: "Si un día decides irte, te exportas clientes e historial en un clic y te los llevas. No te dejamos enlaces colgados en tu ficha de Google ni redirigimos tus reservas a ningún sitio.",
      cliente: "Sigue reservando contigo pase lo que pase, sin encontrarse un día con que tu negocio \"ya no está disponible\"."
    },
    {
      num: "04",
      title: "Tu dinero va directo a tu caja",
      context: "No nos metemos en medio del cobro.",
      ti: "Cobras en tu TPV de siempre, al momento. Sin esperar liquidaciones, sin comisiones raras y sin perseguir un pago que no llega.",
      cliente: "Paga como paga siempre, en tu local, sin plataformas intermedias ni cargos que no reconoce en el banco."
    },
    {
      num: "05",
      title: "Reservar no exige descargarse nada",
      context: "Un enlace en tu Instagram, en tu WhatsApp o en tu ficha de Google.",
      ti: "Reservas que entran solas mientras cortas, sin tener que coger el teléfono ni cuadrar horas por mensajes.",
      cliente: "Elige servicio, barbero y hora en tres toques. Sin app, sin registro, sin contraseña y sin dar la tarjeta para pedir un corte de pelo. Y cuando entra a reservar contigo, ve tu barbería. Solo la tuya, sin diez competidores al lado."
    },
    {
      num: "06",
      title: "Los avisos llegan por WhatsApp",
      context: "Aquí nadie lee un SMS ni activa notificaciones de una app que no usa.",
      ti: "Menos plantones sin tener que perseguir a nadie, y menos huecos muertos que ya no recuperas.",
      cliente: "El recordatorio le llega por donde ya habla contigo y confirma con un botón. Si no puede venir, avisa en dos segundos."
    },
    {
      num: "07",
      title: "La agenda entiende cómo es un servicio de verdad",
      context: "Un tinte o unas mechas no son un bloque muerto de dos horas: son fases (aplicación, espera, lavado, acabado).",
      ti: "Durante los cuarenta minutos que el tinte hace efecto, puedes encajar un corte sin liarte la agenda. Es dinero que ahora mismo se te escapa todos los días.",
      cliente: "Encuentra hueco cuando lo necesita, en horas que con otra agenda aparecerían ocupadas."
    },
    {
      num: "08",
      title: "La ficha técnica que de verdad usas",
      context: "Fórmula, volumen, tiempos, marca, alergias y foto de antes y después.",
      ti: "Cuando vuelva en tres meses no tienes que acordarte de nada: lo tienes delante antes de que se siente.",
      cliente: "Sale igual de contento que la última vez, sin repetir su historia entera cada visita y sin riesgos con productos que le sientan mal."
    },
    {
      num: "09",
      title: "Tu horario real, no el que le cuadre al programa",
      context: "Turnos partidos, el lunes cerrado, la feria del pueblo, agosto, la semana que solo trabajas de tarde.",
      ti: "Se configura en segundos desde el móvil o desde la tablet del mostrador, con la semana entera de un vistazo. Sin pelearte con un calendario cada vez que cambia algo.",
      cliente: "Nunca reserva una hora en la que no estás. Lo que ve disponible, está disponible."
    },
    {
      num: "10",
      title: "Al otro lado hay una persona",
      context: "Ni formularios, ni chats automáticos, ni respuestas en inglés tres semanas después.",
      ti: "Si algo falla un sábado a las once, escribes por WhatsApp y te contesta alguien que sabe cómo funciona una barbería y está en tu mismo huso horario. Y el primer día te montamos la agenda y migramos tus clientes nosotros.",
      cliente: "Si algo se tuerce con su reserva, se arregla el mismo día. La cara la das tú, así que lo resolvemos rápido."
    }
  ];

  return (
    <div id="ventajas" className="mt-24 max-w-5xl mx-auto px-4 lg:px-0">
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
