import { Users, ShieldCheck, Clock, Phone, Check } from "lucide-react";
import { motion } from "framer-motion";

export function SaaSFeatures() {
  const cards = [
    {
      icon: <Users className="w-16 h-16 text-primary/80 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />,
      title: "Equipo sin límites",
      context: "Paga una cuota única, sin penalizaciones por crecer.",
      bullets: [
        { label: "PARA TI", text: "Cobras al instante en tu TPV. Paga lo mismo seas 1 o seáis 6." },
        { label: "CLIENTE", text: "Reserva en 3 toques sin descargas ni registros." }
      ]
    },
    {
      icon: <ShieldCheck className="w-16 h-16 text-primary/80 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />,
      title: "Control total",
      context: "Tus datos y tus clientes te pertenecen al 100%.",
      bullets: [
        { label: "PARA TI", text: "Sin permanencias. Exportas tu base de clientes cuando quieras." },
        { label: "CLIENTE", text: "Su centro siempre será su centro, sin intermediarios." }
      ]
    },
    {
      icon: <Clock className="w-16 h-16 text-primary/80 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />,
      title: "Huecos inteligentes",
      context: "El sistema exprime cada minuto de tu agenda.",
      bullets: [
        { label: "PARA TI", text: "Abre huecos para cortes mientras un tinte hace efecto." },
        { label: "CLIENTE", text: "Encuentra horas disponibles que otras agendas bloquean." }
      ]
    },
    {
      icon: <Phone className="w-16 h-16 text-primary/80 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />,
      title: "Avisos por WhatsApp",
      context: "Adiós plantones y a los SMS ignorados.",
      bullets: [
        { label: "PARA TI", text: "Recordatorios automáticos por WhatsApp (lo que sí se lee)." },
        { label: "CLIENTE", text: "Confirma su cita por el chat que ya usa a diario." }
      ]
    }
  ];

  return (
    <div className="mt-16 max-w-5xl mx-auto" id="ventajas">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 px-2 gap-4">
        <h3 className="text-2xl font-bold">Por qué somos distintos</h3>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">4 Razones de peso</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-card border border-border hover:border-primary/40 rounded-3xl p-6 lg:p-8 flex flex-col relative shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex justify-center items-center h-32 mb-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl relative overflow-hidden p-4 border border-primary/10 group-hover:border-primary/20 transition-colors">
              {card.icon}
            </div>
            
            <h4 className="text-2xl font-bold mb-2 leading-tight">{card.title}</h4>
            <p className="text-sm text-muted-foreground mb-6 font-medium leading-relaxed">{card.context}</p>

            <div className="mt-auto space-y-4">
              {card.bullets.map((bullet, i) => (
                <div key={i} className="flex gap-3 items-start bg-background/50 p-3.5 rounded-xl border border-border/50">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-foreground uppercase tracking-wider block mb-1 opacity-80">{bullet.label}</span>
                    <p className="text-sm text-muted-foreground leading-snug">{bullet.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
