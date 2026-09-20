const fs = require('fs');

const file = 'src/components/SaaSFeatures.tsx';
let content = fs.readFileSync(file, 'utf8');

const newCards = `  const cards = [
    {
      num: "01",
      title: "Cero comisiones. Todo tu equipo por un único precio.",
      context: "Tu esfuerzo es tuyo. Crecer no debería ser un castigo en tu factura mensual.",
      ti: "Cobras al momento en tu TPV. Paga lo mismo seas 1 o seáis 6. Sin facturas infladas ni cargos por reservas.",
      cliente: "Reserva en 3 toques desde Instagram o Google. Sin bajarse Apps, sin \\"gastos de gestión\\" y con su especialista favorito siempre disponible."
    },
    {
      num: "02",
      title: "Control total de tu negocio y tus clientes",
      context: "Sin permanencias ni secuestros de base de datos. Si te vas, te llevas todo.",
      ti: "Fórmulas, historial y foto del \\"antes\\" listos antes de que entre. Exportas tus contactos cuando quieras en un clic.",
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
  ];`;

content = content.replace(/const cards = \[\s*\{[\s\S]*?\}\s*\];/, newCards);
content = content.replace(/Diez razones por las que esto no es una agenda más/g, "4 razones de peso para no usar una agenda más");
content = content.replace(/10 Razones/g, "4 Razones");

fs.writeFileSync(file, content);
