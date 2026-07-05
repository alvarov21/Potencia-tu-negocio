import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Shield, Globe, MapPin, MessageCircle, FileText, ArrowRight, Paintbrush, Rocket, X, Star, ChevronDown } from "lucide-react";

const FAQS = [
  { q: "¿Cuánto cuesta hacer una página web para un negocio pequeño?", a: "En Potencia tu Negocio, desde 195€ de configuración inicial (+24,95€/mes de mantenimiento). Ese precio inicial ya lleva el diseño, los textos y la ficha de Google Business, y la cuota mensual cubre el dominio, el hosting, el certificado de seguridad y el soporte. Para que te hagas una idea del mercado: una agencia tradicional en España suele cobrar entre 800€ y 2.000€ por lo mismo, y tardar semanas. Nuestro precio es cerrado: el número que ves es el número que pagas." },
  { q: "¿Cuánto se tarda en tener lista una página web?", a: "Con nosotros, ves la primera versión de tu web en 48 horas y está publicada en internet en menos de 7 días. El estándar del sector son 4 a 8 semanas, así que sí, la diferencia es grande. ¿El truco? Usamos inteligencia artificial para diseñar y redactar más rápido, y luego lo personalizamos a mano para tu sector y tu ciudad. Tú solo necesitas dedicarnos 10 minutos para contarnos tu negocio y pasarnos unas fotos." },
  { q: "No tengo ni idea de informática, ¿puedo tener una página web igualmente?", a: "Claro que sí — de hecho, la mayoría de nuestros clientes no sabe (ni quiere saber) de tecnología. Tú nos cuentas cómo es tu negocio, como se lo contarías a un amigo, y nosotros hacemos todo lo demás: diseño, textos, dominio, parte legal y publicación. Tu única tarea es mirar la web en tu móvil y decirnos \"me gusta\" o \"cámbiame esto\". No tocas ni un botón técnico, nunca." },
  { q: "¿Qué incluye exactamente el precio? ¿Luego hay sorpresas?", a: "No hay sorpresas — es nuestra regla número uno. En el plan básico pagas 195€ de configuración y una cuota de 24,95€ al mes. Ese precio lo incluye todo: tu dominio (tunegocio.es, a tu nombre), hosting y SSL, diseño adaptado a móvil, textos escritos por nosotros, botón de WhatsApp, formulario de contacto, Google Maps, ficha de Google Business dada de alta y textos legales RGPD. Sabes lo que te va a costar desde el primer día, no te lo encuentras en la factura." },
  { q: "¿La página web será mía o me quedo atado a vosotros?", a: "Es tuya. El dominio se registra a tu nombre desde el día uno — no al nuestro, como hacen otros — y con el Plan Independencia (595€) puedes llevarte también el código completo de la web cuando quieras. Sin permanencias en los planes de pago único y sin \"secuestros\": si un día decides irte con otro proveedor, te llevas todo. Solo el plan de suscripción (Crecimiento) tiene permanencia, y es de 3 meses." },
  { q: "¿Me va a servir la web para conseguir clientes o es solo para quedar bien?", a: "Para conseguir clientes — si no, no tendría sentido. Cada web se optimiza para que aparezcas en Google cuando alguien busca lo que tú haces en tu ciudad (\"cerrajero en Getafe\", \"restaurante en Vigo centro\"): eso es el SEO local, y va incluido desde el primer día, no como extra. Además te damos de alta la ficha de Google Business, que es lo que te saca en Google Maps. El 80% de tus clientes potenciales busca desde el móvil; el objetivo es que te encuentren a ti y te escriban por WhatsApp directamente." },
  { q: "Tengo un restaurante, ¿qué me ponéis en la web?", a: "Los restaurantes son nuestra especialidad. Tu web incluye carta digital con fotos y precios (con QR físico para las mesas si eliges el Plan Independencia), reservas directas por WhatsApp o email sin pagar comisiones a plataformas, tus reseñas de Google mostradas en tiempo real y conexión con lo que ya uses: TheFork, TripAdvisor, Glovo, Just Eat, Uber Eats... La idea es que quien te busque reserve contigo directamente, no a través de un intermediario que te cobra por cada mesa." },
  { q: "¿Qué pasa si quiero cambiar algo después, como el horario o los precios?", a: "Depende del plan, pero nunca te quedas tirado. Con el Plan Independencia tienes una ronda de cambios gratis los primeros 30 días. Con el Plan Crecimiento (75€/mes), los cambios son ilimitados y los hacemos en menos de 24 horas: nos escribes \"súbeme el menú nuevo\" por WhatsApp y al día siguiente está. Es la opción de quien no quiere volver a pensar en la web nunca más." },
  { q: "¿Por qué sois tan baratos? ¿No será una plantilla cutre?", a: "Buena pregunta, y la respuesta es honesta: usamos inteligencia artificial para la parte lenta del trabajo (primeros diseños, borradores de textos), y eso recorta muchísimas horas. Lo que no recortamos es la personalización: cada web se adapta a tu sector, tu ciudad y tus fotos, con SEO local trabajado a mano. No es una plantilla genérica — es un proceso eficiente. Por eso podemos cobrar 195€ donde otros cobran 1.000€, y entregarte en 48 horas lo que otros entregan en un mes." },
  { q: "¿Cómo empiezo? ¿Tengo que firmar algo o pagar por adelantado?", a: "Empiezas gratis y sin compromiso: nos escribes por WhatsApp o rellenas el formulario contándonos tu negocio en 2 minutos, y en menos de 24 horas te enviamos una propuesta personalizada con cómo sería tu web y su precio exacto. Si te encaja, arrancamos y en 48 horas ves la primera versión. Si no te encaja, no pasa nada — no hay llamadas comerciales ni insistencia. La propuesta es gratis precisamente para que decidas viendo algo concreto, no a ciegas." },
];

export const Route = createFileRoute("/diseno-web-para-empresas")({
  head: () => ({
    meta: [
      { title: "Crear una Página Web para tu Negocio | Lista en 48h desde 195€" },
      { name: "description", content: "Crear una página web para tu negocio nunca fue tan fácil. Incluye dominio, hosting, SEO local y ficha de Google. Lista en 48h, desde 195€ sin costes ocultos." },
      { property: "og:title", content: "Crear una Página Web para tu Negocio | Lista en 48h desde 195€" },
      { property: "og:description", content: "Crear una página web para tu negocio nunca fue tan fácil. Incluye dominio, hosting, SEO local y ficha de Google. Lista en 48h, desde 195€ sin costes ocultos." },
    ],
  }),
  component: DisenoWebEmpresas,
});

function DisenoWebEmpresas() {
  const [open, setOpen] = useState<number | null>(0);

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
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)] z-[-1]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Creación de páginas web para negocios
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-balance">
              Crear una página web para tu negocio: <br className="hidden lg:block" />
              lista en <span className="text-primary">48 horas</span>, desde 195€ y sin que tú hagas nada.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Diseño web profesional para empresas y negocios locales. Todo incluido (dominio, hosting, SEO local) sin costes ocultos ni permanencias abusivas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#precios" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:scale-[1.02] transition text-white">
                Ver planes y precios <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Qué incluye la página web de tu negocio (todo, sin extras ocultos)</h2>
            <p className="text-muted-foreground text-lg">Tu web sale lista para conseguir clientes desde el minuto uno.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <article className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:shadow-glow transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4"><Globe className="w-5 h-5 text-primary" /></div>
              <h3 className="font-semibold mb-1.5">Dominio, hosting y SSL</h3>
              <p className="text-sm text-muted-foreground">Tu nombre en internet (ej: tunegocio.com) pagado el primer año. Alojamiento rápido y seguro.</p>
            </article>
            <article className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:shadow-glow transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4"><MapPin className="w-5 h-5 text-primary" /></div>
              <h3 className="font-semibold mb-1.5">Ficha Google Business y Maps</h3>
              <p className="text-sm text-muted-foreground">Te damos de alta y optimizamos tu ficha para que aparezcas en el mapa cuando busquen tu servicio en tu ciudad.</p>
            </article>
            <article className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:shadow-glow transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4"><MessageCircle className="w-5 h-5 text-primary" /></div>
              <h3 className="font-semibold mb-1.5">Botón WhatsApp y Contacto</h3>
              <p className="text-sm text-muted-foreground">Para que los clientes te hablen directamente a tu móvil con un solo toque desde la web.</p>
            </article>
            <article className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:shadow-glow transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4"><FileText className="w-5 h-5 text-primary" /></div>
              <h3 className="font-semibold mb-1.5">Textos legales RGPD</h3>
              <p className="text-sm text-muted-foreground">Aviso legal, privacidad y cookies redactados. Cumple la ley sin dolores de cabeza.</p>
            </article>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Cómo creamos la página web de tu negocio en 3 pasos</h2>
            <p className="text-muted-foreground text-lg">Nosotros nos encargamos del trabajo duro.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl"></div>
                <div className="relative w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center text-white"><MessageCircle className="w-6 h-6" /></div>
              </div>
              <h3 className="text-xl font-bold mb-3">1. Nos cuentas por WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Nos dices a qué te dedicas y qué quieres conseguir. Sin reuniones interminables.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl"></div>
                <div className="relative w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center text-white"><Paintbrush className="w-6 h-6" /></div>
              </div>
              <h3 className="text-xl font-bold mb-3">2. En 48h ves tu web</h3>
              <p className="text-sm text-muted-foreground">Diseñamos una primera versión funcional para que la veas en tu móvil y nos des el ok.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl"></div>
                <div className="relative w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center text-white"><Rocket className="w-6 h-6" /></div>
              </div>
              <h3 className="text-xl font-bold mb-3">3. Publicada en 7 días</h3>
              <p className="text-sm text-muted-foreground">Aplicamos tus cambios y la lanzamos al mundo para que empieces a recibir clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">¿Hacerla gratis tú mismo o encargarla? Wix vs. una web profesional</h2>
            <p className="text-muted-foreground text-lg">Lo barato sale caro cuando pierdes horas intentando que un botón funcione.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card/50 border border-border rounded-2xl p-8 opacity-80">
              <h3 className="text-xl font-bold mb-6 text-center text-muted-foreground">Hacerla en Wix/Wordpress tú mismo</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground"><X className="w-5 h-5 text-red-500 shrink-0" /> Pierdes fines de semana enteros configurando plantillas.</li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground"><X className="w-5 h-5 text-red-500 shrink-0" /> Tarda en cargar y los clientes se van.</li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground"><X className="w-5 h-5 text-red-500 shrink-0" /> No apareces en Google (SEO mal configurado).</li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground"><X className="w-5 h-5 text-red-500 shrink-0" /> Acabas pagando extras por módulos básicos (reservas, SSL).</li>
              </ul>
            </div>
            <div className="bg-card border-2 border-primary/50 rounded-2xl p-8 shadow-glow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-xs font-bold text-primary-foreground uppercase tracking-wider">Potencia tu Negocio</div>
              <h3 className="text-xl font-bold mb-6 text-center">Nuestra Web Profesional</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-primary shrink-0" /> 0 horas de tu tiempo. Tú a lo tuyo, nosotros a la web.</li>
                <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-primary shrink-0" /> Carga súper rápida (vital para el SEO).</li>
                <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-primary shrink-0" /> Ficha de Google y SEO local activados por expertos.</li>
                <li className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-primary shrink-0" /> Precio cerrado, claro y sin sorpresas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Cuánto cuesta crear la página web de tu negocio: precios cerrados</h2>
            <p className="text-muted-foreground text-lg">Mismo precio para restaurantes, clínicas, talleres o pymes.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Plan Presencia */}
            <article className="bg-card border border-border rounded-3xl p-8 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Pago único</span>
              <h3 className="text-2xl font-bold mb-2">Plan Presencia</h3>
              <div className="mb-6 mt-4">
                <div className="flex items-baseline gap-1.5"><span className="text-5xl font-black text-foreground">195€</span></div>
                <div className="text-sm text-muted-foreground mt-2 leading-snug">
                  Pago único &middot; después 24,95€/mes<br />
                  (dominio, hosting y soporte)
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm mt-auto">
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> Web Landing Page</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> Dominio y SSL</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> Google Maps y WhatsApp</li>
              </ul>
              <a href="#contacto" className="block text-center mt-4 py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition">
                Solicitar Propuesta
              </a>
            </article>

            {/* Plan Independencia */}
            <article className="relative bg-card border-2 border-primary rounded-3xl p-8 flex flex-col shadow-glow">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-cta text-xs font-bold uppercase tracking-wider text-white">Más elegido</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Avanzado</span>
              <h3 className="text-2xl font-bold mb-2">Plan Independencia</h3>
              <div className="mb-6 mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-muted-foreground line-through decoration-primary/60">750€</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-red-500 px-2 py-0.5 rounded-full shadow-sm">Oferta</span>
                </div>
                <div className="flex items-baseline gap-1.5"><span className="text-5xl font-black text-foreground">595€</span></div>
                <div className="text-sm text-muted-foreground mt-2 leading-snug">
                  Primer año incluido &middot; después 89€/año<br />
                  (dominio, hosting y soporte)
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm mt-auto">
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> Web Multipágina</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> Sistema de Reservas/Citas</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> SEO Local Trabajado</li>
              </ul>
              <a href="#contacto" className="block text-center mt-4 py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:opacity-90 transition text-white">
                Solicitar Propuesta
              </a>
            </article>

            {/* Plan Crecimiento */}
            <article className="bg-card border border-border rounded-3xl p-8 flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Suscripción</span>
              <h3 className="text-2xl font-bold mb-2">Plan Crecimiento</h3>
              <div className="mb-6 mt-4">
                <div className="flex items-baseline gap-1.5"><span className="text-5xl font-black text-foreground">825€</span><span className="text-sm text-muted-foreground">+75€/mes</span></div>
                <div className="text-sm text-muted-foreground mt-2 leading-snug">
                  Mantenimiento incluido &middot; 75€/mes<br />
                  (dominio, hosting, cambios y soporte)
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm mt-auto">
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> Cambios ilimitados</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> Gestión Google Business</li>
                <li className="flex gap-3"><Check className="w-4 h-4 text-primary shrink-0" /> SEO Técnico Continuo</li>
              </ul>
              <a href="#contacto" className="block text-center mt-4 py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition">
                Solicitar Propuesta
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Sectors section specific to this page */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Páginas web para cada tipo de negocio</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <Link to="/web-para-restaurantes" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 transition-all text-center">
            <h3 className="font-semibold group-hover:text-primary transition-colors">Diseño web para restaurantes</h3>
          </Link>
          <Link to="/web-para-clinicas-dentales" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 transition-all text-center">
            <h3 className="font-semibold group-hover:text-primary transition-colors">Diseño web para clínicas</h3>
          </Link>
          <Link to="/web-para-peluquerias" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 transition-all text-center">
            <h3 className="font-semibold group-hover:text-primary transition-colors">Diseño web para peluquerías</h3>
          </Link>
        </div>
      </section>

      {/* Reviews (Placeholders as requested) */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-16 text-balance">Opiniones de negocios que ya tienen su web con nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- TODO: reseñas reales Trustpilot --> */}
            <div className="bg-card border border-border p-6 rounded-2xl text-left shadow-sm">
              <div className="flex text-yellow-400 mb-4"><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/></div>
              <p className="italic text-muted-foreground mb-4">"Reservado para reseña real"</p>
              <h3 className="font-bold">- Cliente Real</h3>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl text-left shadow-sm">
              <div className="flex text-yellow-400 mb-4"><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/></div>
              <p className="italic text-muted-foreground mb-4">"Reservado para reseña real"</p>
              <h3 className="font-bold">- Cliente Real</h3>
            </div>
            <div className="bg-card border border-border p-6 rounded-2xl text-left shadow-sm">
              <div className="flex text-yellow-400 mb-4"><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/><Star className="fill-current w-5 h-5"/></div>
              <p className="italic text-muted-foreground mb-4">"Reservado para reseña real"</p>
              <h3 className="font-bold">- Cliente Real</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-center text-balance">Preguntas frecuentes sobre crear la página web de tu negocio</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <article key={i} className={`bg-card border ${isOpen ? "border-primary/50 shadow-glow" : "border-border hover:border-primary/30"} rounded-2xl overflow-hidden transition-all duration-300`}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex items-center justify-between w-full p-5 lg:p-6 text-left" aria-expanded={isOpen}>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-t border-border">
         <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">Pide tu propuesta gratis y sin compromiso (respuesta en 24 horas)</h2>
            <p className="text-lg text-muted-foreground mb-10">Escríbenos por WhatsApp o déjanos tu email y te responderemos con una propuesta personalizada.</p>
            <div className="flex justify-center gap-4">
              <a href="mailto:info@potenciatunegocio.es" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-cta font-semibold shadow-glow hover:scale-[1.02] transition text-white">
                Solicitar Propuesta <ArrowRight className="w-5 h-5" />
              </a>
            </div>
         </div>
      </section>

    </main>
  );
}
