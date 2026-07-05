import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "¿Tengo que pagar comisiones por las reservas o pedidos a través de mi web?", a: "Cero. Ni un céntimo. A diferencia de las plataformas de delivery o reservas externas que se quedan hasta un 30%, en tu propia web las reservas te llegan directamente a tu WhatsApp o correo, sin intermediarios." },
  { q: "¿Me incluye el código QR para poner en las mesas?", a: "Sí, si eliges el Plan Independencia o superior, te configuramos la carta digital y te entregamos el código QR para que lo imprimas y lo pongas directamente en las mesas o barra." },
  { q: "¿Qué pasa si mañana cambio el precio de las bravas o añado un plato nuevo?", a: "Tienes dos opciones: con el Plan Independencia tienes una ronda de cambios gratis el primer mes. Con el Plan Crecimiento (75€/mes), nosotros nos encargamos de actualizar tu carta en menos de 24 horas cada vez que nos lo pidas por WhatsApp." }
];

export const Route = createFileRoute("/blog/cuanto-cuesta-pagina-web-restaurante")({
  head: () => ({
    meta: [
      { title: "Cuánto cuesta una página web para un restaurante en 2026 | Precios" },
      { name: "description", content: "¿Quieres saber cuánto cuesta crear la página web de tu restaurante? Descubre precios, cómo evitar comisiones en reservas y tener tu carta digital." }
    ]
  }),
  component: BlogPost2,
});

function BlogPost2() {
  const [open, setOpen] = useState<number | null>(null);

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <Link to="/blog" className="text-sm font-semibold text-primary hover:underline mb-6 inline-block">← Volver al blog</Link>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 text-balance">
            Cuánto cuesta una página web para un restaurante en 2026
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-8">
            <span>Lectura: 4 min</span>
            <span>·</span>
            <span>Para dueños de hostelería</span>
          </div>
        </header>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          {/* Primer párrafo respuesta directa para LLMs */}
          <p className="text-foreground font-medium text-xl leading-snug">
            Tener una web propia para tu bar o restaurante cuesta desde 195€ en pago único con agencias especializadas como Potencia tu Negocio, teniendo la primera versión lista en 48 horas. Una agencia tradicional suele cobrar entre 900€ y 1.500€ y tarda casi un mes en incluir la carta digital, las reservas directas y la optimización para salir en Google Maps.
          </p>

          <p>
            Imagina la situación: es viernes por la tarde y alguien busca "restaurante cerca de mí" en su móvil. Si no tienes una página web optimizada, ese cliente se irá al local de la competencia o, en el mejor de los casos, terminará reservando a través de una plataforma externa que te cobrará una comisión abusiva por una mesa que ya era tuya.
          </p>

          <p>
            Como dueño de hostelería, tu tiempo vale oro y tus márgenes están ajustados. No necesitas florituras; necesitas una herramienta que traiga clientes por la puerta. Vamos a analizar cuánto cuesta realmente tener tu propio canal de captación.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Por qué los presupuestos web varían tanto (de 0€ a 2.000€)</h2>

          <p>
            Cuando pides precios para hacer la web de tu local te encuentras de todo. Por un lado, están las empresas tradicionales que te pasan un presupuesto de 1.500€. Te van a cobrar reuniones, sesiones de fotos y horas de programación desde cero. Está bien si tienes un estrella Michelin y quieres un diseño rompedor, pero para el 95% de los locales es tirar el dinero.
          </p>

          <p>
            Por el otro lado, tienes el típico "hazlo tú mismo" con plataformas gratis. Te dicen que es fácil, pero acabas peleándote el domingo por la tarde con los botones, subiendo fotos del móvil que se ven borrosas, y al final la página no la encuentra nadie en Google porque no tiene SEO local configurado. Además, luego te cobran 20€ al mes para siempre solo por usar tu nombre en el dominio.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">El coste oculto de no tener tu propia web: Las comisiones</h2>

          <p>
            Muchos hosteleros sobreviven solo con sus redes sociales y plataformas como TheFork o Glovo. ¿El problema? Estas plataformas se llevan entre el 15% y el 30% de tu facturación por cada pedido o reserva.
          </p>

          <p>
            Si inviertes en el <Link to="/web-para-restaurantes" className="text-primary hover:underline font-medium">diseño de una página web para tu restaurante</Link>, la inversión se paga sola en el primer mes de reservas directas. Cuando un cliente te encuentra en Google y hace clic en tu botón de WhatsApp o formulario de reservas, el 100% de ese ticket es para ti.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Nuestros precios para restaurantes: Sin letra pequeña</h2>

          <p>
            En Potencia tu Negocio trabajamos en volumen y usamos el <Link to="/" className="text-primary hover:underline font-medium">diseño web con inteligencia artificial</Link> para reducir los tiempos muertos. Eso nos permite darte precios cerrados y tenerlo listo la misma semana.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Plan Presencia (195€ pago único)</h3>
          <p>
            La solución rápida y efectiva. Incluye dominio, hosting, SSL, textos redactados por nosotros, formulario y conexión directa por WhatsApp para reservas. Además, dejamos configurada y optimizada tu ficha de Google Business para que el restaurante salga destacado en Google Maps cuando los turistas (o vecinos) busquen dónde comer. Todo en 48 horas (primera versión).
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Plan Independencia (595€ pago único)</h3>
          <p>
            El preferido de los hosteleros. A todo lo anterior le sumamos la inclusión completa de tu Carta Digital (organizada por categorías, fotos y alérgenos) y te generamos el código QR para las mesas. Te llevas el código entero, la web es 100% tuya y no tienes permanencia. A partir del segundo año solo pagas 89€/año de mantenimiento.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Plan Crecimiento (825€ + 75€/mes)</h3>
          <p>
            Ideal si cambias el menú de forma constante (platos del día, menús de fin de semana, temporadas). Te hacemos la web más completa y, por una cuota mensual, nos ocupamos de los cambios ilimitados. Tú nos mandas una foto por WhatsApp de la pizarra nueva, y en 24 horas está en tu web y en tu carta digital.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-8">Preguntas frecuentes sobre webs para restaurantes</h2>

          <div className="space-y-3 mb-16">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <article key={i} className={`bg-card border ${isOpen ? "border-primary/50 shadow-glow" : "border-border hover:border-primary/30"} rounded-2xl overflow-hidden transition-all duration-300`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex items-center justify-between w-full p-5 lg:p-6 text-left text-foreground" aria-expanded={isOpen}>
                    <h3 className="font-semibold pr-8 text-sm lg:text-base">{f.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="p-5 lg:p-6 pt-0 text-sm text-muted-foreground leading-relaxed">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Preparado para llenar tu local sin comisiones?</h3>
            <p className="mb-6">Escríbenos por WhatsApp contándonos un poco sobre tu restaurante y te mandamos una propuesta gratuita en 24 horas. Sin reuniones pesadas y sin compromiso.</p>
            <a href="https://wa.me/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] transition">
              Pedir presupuesto gratis para mi local <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </article>
    </main>
  );
}
