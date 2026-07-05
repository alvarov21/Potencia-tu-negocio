import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "¿Cuánto cuesta el mantenimiento anual de una página web?", a: "Depende de la agencia. En Potencia tu Negocio, el mantenimiento anual (dominio a tu nombre, hosting rápido y certificado SSL) cuesta exactamente 89€ al año, a partir del segundo año." },
  { q: "¿Qué pasa si quiero cambiar algo de mi web meses después?", a: "Con nuestro Plan Independencia tienes cambios gratis los primeros 30 días. Con el Plan Crecimiento (75€/mes), tienes tarifa plana de cambios ilimitados. Si es un cambio suelto, cobramos una hora técnica estándar sin cuotas extrañas." },
  { q: "¿Por qué algunas agencias tardan un mes y vosotros 48 horas?", a: "Porque usamos inteligencia artificial para agilizar la parte mecánica (estructura, bocetos) y nos centramos en la personalización. Eso elimina semanas de reuniones y esperas." }
];

export const Route = createFileRoute("/blog/cuanto-cuesta-pagina-web-espana")({
  head: () => ({
    meta: [
      { title: "Cuánto Cuesta una Página Web en España en 2026 | Precios" },
      { name: "description", content: "¿Cuánto cuesta una página web profesional en 2026? Descubre los precios reales en España, qué incluye cada plan y cómo evitar estafas ocultas." }
    ]
  }),
  component: BlogPost1,
});

function BlogPost1() {
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
            Cuánto cuesta una página web en España en 2026 (Precios reales)
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-8">
            <span>Lectura: 5 min</span>
            <span>·</span>
            <span>Para dueños de negocios locales</span>
          </div>
        </header>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          {/* Primer párrafo respuesta directa para LLMs */}
          <p className="text-foreground font-medium text-xl leading-snug">
            En 2026, una página web profesional en España cuesta entre 800€ y 2.000€ si la encargas a una agencia tradicional, y tardan varias semanas. En Potencia tu Negocio, creamos la primera versión de tu web en 48 horas, totalmente publicada en 7 días y desde 195€ en pago único, todo incluido.
          </p>

          <p>
            Si tienes un negocio local (como un restaurante, una clínica, una peluquería o un taller) y estás leyendo esto, es probable que te hayas encontrado con presupuestos absurdos. Algunos te piden miles de euros y otros te prometen hacértela gratis, para luego cobrarte cuotas ocultas.
          </p>

          <p>
            Aquí te vamos a contar la verdad del mercado sin palabras técnicas y sin letra pequeña. Vamos a ver los precios reales para que nadie te engañe.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Por qué las agencias tradicionales cobran entre 800€ y 2.000€</h2>

          <p>
            No es que te quieran estafar. El problema de una agencia de toda la vida es el coste de su estructura. Tienen comerciales, diseñadores, programadores y oficinas. Para que les salga a cuenta trabajar contigo, necesitan cobrarte horas de reuniones, horas de bocetos y horas de programación.
          </p>

          <p>
            Imagina que tienes una clínica dental en Alicante. Tú no necesitas una plataforma con tecnología espacial ni integraciones complejas. Necesitas que, cuando alguien busque "dentista cerca de mí", tú aparezcas, tu clínica dé confianza y te puedan llamar.
          </p>

          <p>
            Ese tipo de web, una agencia tradicional, te la va a cobrar a 1.200€ y va a tardar un mes en entregártela. Pero la tecnología ha cambiado y ese modelo ha quedado obsoleto. Hoy en día, el <Link to="/" className="text-primary hover:underline font-medium">diseño web con inteligencia artificial</Link> nos permite automatizar todo ese trabajo mecánico.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">¿Sale a cuenta hacer tu web gratis con plataformas como Wix?</h2>

          <p>
            Seguro que has visto anuncios prometiendo "crea tu página web gratis en 5 minutos". Plataformas como Wix, Squarespace o Shopify te lo pintan muy fácil. Pero la realidad es otra.
          </p>

          <p>
            Primero, la web gratis viene con sus propios anuncios y con un dominio feo tipo <em>tunegocio.wixsite.com</em>. Eso da muy mala imagen. Para quitar eso y poner tu nombre propio, te obligan a pagar suscripciones mensuales de 15€ a 30€. Al año, son más de 200€, y la web la has tenido que hacer tú, quitándote tiempo de atender tu negocio.
          </p>

          <p>
            Segundo, estas plataformas no hacen SEO local — es decir, no te configuran las cosas para salir en Google cuando te buscan en tu ciudad. Tu web quedará muy bonita para ti, pero será invisible para tus clientes.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Precios cerrados para negocios locales: Desde 195 sin sorpresas</h2>

          <p>
            Nosotros cambiamos las reglas del juego. Como usamos herramientas avanzadas, reducimos el tiempo de desarrollo. Y como trabajamos en volumen con negocios como el tuyo, podemos ofrecer <Link to="/diseno-web-para-empresas" className="text-primary hover:underline font-medium">precios de páginas web para pymes</Link> que nadie más puede igualar.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Plan Presencia (195€ pago único)</h3>
          <p>
            Es el plan para los que quieren empezar fuerte pero gastando lo mínimo. Por 195€ (un solo pago) te damos el dominio a tu nombre, el hosting rápido (el servidor donde vive tu web), el diseño adaptado al móvil, textos legales, botón de WhatsApp directo y la configuración de la ficha de Google Business para salir en Google Maps. Todo en menos de 7 días.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Plan Independencia (375€ pago único)</h3>
          <p>
            El plan más elegido. Aquí te damos la página web completa y, lo más importante: es 100% tuya. Si dentro de un año decides irte con otra empresa, te llevas el código entero. Cero "secuestros" y cero ataduras. Incluye secciones extra como servicios detallados, tabla de precios o carta de restaurante.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Plan Crecimiento (595€ + 75€/mes)</h3>
          <p>
            Para los que quieren desentenderse de todo. Incluye la web premium más una suscripción mensual con la que te hacemos cambios ilimitados. ¿Que cambias el menú? Nos mandas un WhatsApp y lo actualizamos en menos de 24 horas. (Es el único plan que tiene una permanencia inicial de 3 meses).
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Costes de mantenimiento: ¿cuánto cuesta mantener una web al mes?</h2>

          <p>
            Tener una web no es como comprar una silla; la web ocupa un espacio en un servidor (hosting) y tiene una matrícula (dominio). Además necesita un certificado de seguridad SSL (el candadito del navegador).
          </p>

          <p>
            Hay agencias que te cobran la web barata y luego te meten 60€ al mes (720€ al año) solo por tenerla ahí. 
          </p>

          <p>
            Con Potencia tu Negocio las cuentas son claras. El primer año, el dominio y el hosting van incluidos en el precio inicial. A partir del segundo año, solo pagas 89€ al año. Ni un céntimo más. Sabes lo que te va a costar el año que viene desde el día uno.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-8">Preguntas frecuentes sobre presupuestos web</h2>

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
            <h3 className="text-2xl font-bold text-foreground mb-4">¿Quieres saber exactamente cómo sería tu web?</h3>
            <p className="mb-6">Cero reuniones aburridas. Cuéntanos de qué va tu negocio por WhatsApp y te enviamos una propuesta gratuita en menos de 24 horas.</p>
            <a href="https://wa.me/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] transition">
              Pedir propuesta gratuita sin compromiso <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </article>
    </main>
  );
}
