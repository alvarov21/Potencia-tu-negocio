import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Portfolio3D } from "../components/Portfolio3D";
import {
  Search, Calendar, UtensilsCrossed, MonitorSmartphone, MessageCircle,
  Star, Lock, FileText, ArrowRight, Check, Plus, Minus, Mail, Phone,
  Paintbrush, Rocket
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diseño de Páginas Web para Negocios Locales | Lista en 48h desde 195€" },
      { name: "description", content: "Diseño de páginas web profesional para restaurantes, clínicas, talleres y cualquier negocio local. SEO local incluido, primera versión en 48 horas, desde 195€ con dominio y Google Business. Propuesta gratis en 24h." },
      { property: "og:title", content: "Diseño de Páginas Web para Negocios Locales | Lista en 48h desde 195€" },
      { property: "og:description", content: "Diseño de páginas web profesional para restaurantes, clínicas, talleres y cualquier negocio local. SEO local incluido, primera versión en 48 horas, desde 195€ con dominio y Google Business. Propuesta gratis en 24h." },
      { property: "og:url", content: "https://potencia-tu-negocio.vercel.app/" },
    ],
    links: [{ rel: "canonical", href: "https://potencia-tu-negocio.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Potencia tu Negocio",
          description: "Agencia de diseño web con IA especializada en negocios locales y hostelería en España.",
          url: "https://potencia-tu-negocio.vercel.app/",
          areaServed: "ES",
          serviceType: "Diseño web para negocios locales",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "¿Cuánto tarda en estar lista mi web?", acceptedAnswer: { "@type": "Answer", text: "Entre 3 y 7 días desde que nos facilitas la información de tu negocio." } },
            { "@type": "Question", name: "¿Mi negocio aparecerá en Google con vuestra web?", acceptedAnswer: { "@type": "Answer", text: "Sí. Todas nuestras webs incluyen SEO local optimizado y configuración del perfil de Google Business." } },
            { "@type": "Question", name: "¿Trabajáis con cualquier tipo de negocio?", acceptedAnswer: { "@type": "Answer", text: "Sí. Restaurantes, clínicas, talleres, veterinarias, gestorías, centros de estética y cualquier negocio local." } },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#herramientas", label: "Herramientas" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

const TOOLS = [
  "Google Maps", "Google Business", "TripAdvisor", "TheFork", "ElTenedor",
  "Just Eat", "Glovo", "Uber Eats", "WhatsApp Business", "Instagram",
  "Facebook", "Stripe", "Bizum", "Redsys", "Covermanager",
];

const FEATURES = [
  { icon: Search, title: "SEO local optimizado", desc: "Tu negocio aparece primero en Google cuando alguien busca en tu ciudad. Optimizamos tu web y tu perfil de Google Business para restaurantes, clínicas, talleres y cualquier negocio local." },
  { icon: Calendar, title: "Reservas y citas automáticas", desc: "Sistema de reservas o citas conectado a WhatsApp o email. Perfecto para restaurantes, clínicas, veterinarias y cualquier negocio que trabaje con citas previas." },
  { icon: UtensilsCrossed, title: "Carta digital o catálogo", desc: "Restaurantes con carta digital. Clínicas con tratamientos. Talleres con servicios. Todo con fotos, precios y categorías, actualizable en minutos." },
  { icon: MonitorSmartphone, title: "Diseño 100% responsive", desc: "El 80% de tus clientes te buscan desde el móvil. Tu web se verá perfecta en cualquier pantalla y transmitirá profesionalidad al segundo." },
  { icon: MessageCircle, title: "Botón WhatsApp directo", desc: "Un toque y tu cliente te escribe. Más consultas, más reservas, más ventas. Funciona en cualquier tipo de negocio local." },
  { icon: Star, title: "Reseñas de Google en tiempo real", desc: "Tus valoraciones de Google aparecen automáticamente en tu web. Genera confianza en nuevos clientes antes de que llamen o reserven." },
  { icon: Lock, title: "Seguridad SSL (HTTPS)", desc: "Protección total de los datos de tus clientes. Imprescindible para posicionar en Google, especialmente en clínicas, gestorías y negocios con datos sensibles." },
  { icon: FileText, title: "Textos legales RGPD", desc: "Aviso legal, política de privacidad y cookies incluidos y correctamente redactados para tu sector.\u00a0" },
];

const SECTORS = [
  { href: "/web-para-restaurantes", title: "Para Restaurantes", desc: "Diseño web para restaurantes con carta digital y reservas." },
  { href: "/web-para-clinicas-dentales", title: "Para Clínicas Dentales", desc: "Diseño web para clínicas dentales, médicas y fisioterapia." },
  { href: "/web-para-peluquerias", title: "Para Peluquerías", desc: "Páginas web para peluquerías, barberías y centros de estética." },
  { href: "/web-con-reservas", title: "Webs con Reservas", desc: "Página web de reservas integrada para citas automáticas." },
  { href: "/diseno-tienda-online", title: "Tiendas Online", desc: "Diseño de tienda online para vender tus productos en internet." },
  { href: "/diseno-web-para-empresas", title: "Para Empresas", desc: "Diseño web corporativo para captar clientes como empresa o pyme." },
  { href: "/landing-page", title: "Landing Pages", desc: "Diseño de landing page para campañas de anuncios y captación." },
  { href: "/diseno-web-seo", title: "Web con SEO", desc: "Diseño web SEO para posicionar primero en tu ciudad y sector." },
];

const FAQS = [
  { q: "¿Qué es Potencia tu Negocio y qué hacéis exactamente?", a: "Potencia tu Negocio es una agencia de diseño web con inteligencia artificial especializada en negocios locales de España: restaurantes, bares, clínicas, talleres, peluquerías, gestorías... Creamos tu página web completa — diseño, textos, dominio, hosting y ficha de Google Business — desde 195€ en pago único, con la primera versión lista en 48 horas y publicada en menos de 7 días. Nuestro objetivo no es que \"tengas una web\": es que aparezcas en Google cuando alguien busca lo que tú haces en tu ciudad." },
  { q: "¿Trabajáis en toda España o solo en algunas ciudades?", a: "En toda España. Todo el proceso es por WhatsApp, teléfono o email, así que da igual que tu negocio esté en Madrid, en Albacete o en un pueblo de 5.000 habitantes — de hecho, cuanto más local es la competencia, más fácil es posicionarte el primero en tu zona. Cada web se optimiza específicamente para las búsquedas de tu municipio y provincia, no con textos genéricos que valen para cualquier sitio." },
  { q: "¿Qué diferencia hay entre vosotros y una agencia de diseño web tradicional?", a: "Tres cosas: velocidad, precio y que no te mareamos. Una agencia tradicional en España suele cobrar de 800€ a 2.000€, tardar de 4 a 8 semanas y pedirte varias reuniones; en Potencia tu Negocio pagas desde 195€ cerrados, ves tu web en 48 horas y solo necesitamos 10 minutos de conversación. La diferencia está en el método: la inteligencia artificial hace el trabajo lento (primeros diseños, borradores) y nosotros lo personalizamos a mano para tu sector y tu ciudad. Mismo resultado profesional, sin las horas facturables de por medio." },
  { q: "¿Una página web hecha con inteligencia artificial no será peor que una \"de verdad\"?", a: "Es la duda más habitual y es razonable. La respuesta corta: la IA no decide cómo queda tu web, la usamos para ir rápido en lo mecánico. Los primeros diseños y borradores de texto salen de la IA; la adaptación a tu sector, las fotos de tu local, los textos finales y el SEO de tu ciudad los trabajamos nosotros. El resultado es una web única para tu negocio — no una plantilla — a una fracción del precio y del tiempo. Y la ves en 48 horas: si no te convence lo que ves, no pagas más rondas ni te quedas atrapado." },
  { q: "¿Para qué tipo de negocios hacéis páginas web?", a: "Para negocios locales de cualquier sector. Donde más experiencia tenemos es en hostelería — restaurantes, bares y cafeterías, con carta digital, reservas y reseñas — pero trabajamos también con clínicas dentales y de salud, psicólogos, veterinarias, talleres mecánicos, gestorías, academias, gimnasios, inmobiliarias, electricistas, peluquerías, centros de estética, fotógrafos y joyerías. Si tu negocio atiende a clientes de tu zona, la metodología es la misma: que te encuentren en Google antes que a tu competencia." },
  { q: "Tengo tres planes delante, ¿cuál me conviene?", a: "Regla rápida: si solo necesitas que te encuentren (un electricista, un taller), el Plan Presencia de 195€ — una página con tu información, WhatsApp y Google Maps. Si quieres una web que capte clientes activamente (un restaurante, una clínica), el Plan Independencia de 375€ — varias páginas, reservas, carta o catálogo y SEO local trabajado; es el que elige la mayoría. Y si no quieres volver a pensar en la web nunca más, el Plan Crecimiento (825€ + 75€/mes) — nosotros hacemos todos los cambios, gestionamos tu ficha de Google y te mandamos un informe mensual. Si dudas, escríbenos: te decimos cuál encaja en 5 minutos, aunque sea el más barato." },
  { q: "¿Qué es eso del SEO local y por qué insistís tanto?", a: "El SEO local es que tu negocio salga en Google cuando alguien de tu zona busca lo que tú vendes — \"fontanero en Móstoles\", \"cafetería con terraza en Salamanca\". Insistimos porque es la diferencia entre una web que decora y una web que trae clientes: 8 de cada 10 personas buscan un negocio local desde el móvil antes de llamar o ir. Por eso todas nuestras webs incluyen SEO local desde el primer día — textos optimizados para tu ciudad, ficha de Google Business dada de alta y Google Maps integrado — sin coste extra." },
  { q: "¿Ya tengo una página web pero es antigua y no me trae clientes, ¿me la podéis rehacer?", a: "Sí, y es de los casos más frecuentes que nos llegan. Una web de hace 8 años que no se ve bien en el móvil o no aparece en Google te está costando clientes cada semana. La rehacemos desde cero con el mismo proceso: 48 horas para la primera versión, publicada en menos de 7 días. Si ya tienes dominio, lo conservamos — es tuyo y sigue siéndolo. Y tus textos, fotos y reseñas de Google se aprovechan; no empiezas de cero, empiezas de mejor." },
  { q: "¿Qué pasa después de publicar la web? ¿Me quedo solo?", a: "No. Con cualquier plan, la web se entrega funcionando al completo: dominio activo, ficha de Google verificada, WhatsApp conectado y textos legales al día. Con el Plan Independencia tienes 30 días de ajustes gratis. Y si eliges el Plan Crecimiento, nos convertimos en \"tu informático\": cambios ilimitados en menos de 24 horas, gestión de reseñas y publicaciones en Google, copias de seguridad y un informe mensual donde ves cuánta gente visitó tu web, cuántos te llamaron y cuántos te escribieron por WhatsApp." },
  { q: "¿Puedo ver trabajos vuestros u opiniones antes de decidirme?", a: "Sí. Te enseñamos webs reales que hemos hecho para negocios como el tuyo — pídenoslas por WhatsApp y te pasamos las de tu sector — y nuestras opiniones están en Trustpilot, donde puedes leer la experiencia de otros dueños de negocio. Pero lo más útil es la propuesta gratuita: nos cuentas tu negocio en 2 minutos y en menos de 24 horas te enviamos cómo sería tu web y su precio exacto, sin compromiso. Decides viendo algo tuyo, no un catálogo." },
];

function Home() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Potencia tu Negocio",
    "description": "Agencia de diseño web con inteligencia artificial para negocios locales en España. Diseño web profesional para restaurantes, clínicas, talleres y pymes.",
    "email": "info@potenciatunegocio.es",
    "areaServed": "ES",
    "priceRange": "195€-825€"
  };

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
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Sectors />
        <About />
        <HowItWorks />
        <section id="portfolio" className="w-full">
          <Portfolio3D />
        </section>
        <Pricing />
        <FAQ />
        <Contact />
        <section className="py-12 border-t border-border bg-muted/20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">¿Quieres aprender más sobre diseño web y SEO local?</h2>
            <p className="text-muted-foreground mb-6">Visita nuestro blog para descubrir guías y estrategias que te ayudarán a captar más clientes en internet.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Ir al Blog de Potencia tu Negocio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-base tracking-tight flex items-center gap-2" aria-label="Potencia tu Negocio - Inicio">
          <img src="/logo.jpg" alt="Logo Potencia tu Negocio" className="w-7 h-7 object-contain rounded-sm invert grayscale brightness-200 contrast-125 mix-blend-screen" />
          <span>Potencia <span className="text-primary">tu negocio</span><sup className="text-[0.55em] ml-0.5 font-medium opacity-80">&reg;</sup></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground" aria-label="Navegación principal">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#precios" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-gradient-cta shadow-glow hover:opacity-90 transition">
          Ver planes <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-hero">
      <div className="absolute top-1/2 -right-40 lg:-right-20 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="relative w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] animate-float">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-accent/30"
              style={{ transform: `scale(${1 - i * 0.13})`, opacity: 1 - i * 0.12 }}
            />
          ))}
          <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-50" style={{ transform: "scale(0.4)" }} />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animation: `float ${4 + (i % 5)}s ease-in-out ${i * 0.1}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Agencia de diseño web con IA · Negocios locales
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-balance">
            Diseño de páginas web profesional para negocios locales. <br className="hidden lg:block" />
            Lista en <span className="text-primary">48 horas</span>, desde 195€ con dominio incluido.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Creamos webs con inteligencia artificial para restaurantes, clínicas, talleres, veterinarias, gestorías y todo tipo de negocio local. SEO incluido para que aparezcas primero cuando te busquen en tu ciudad.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#precios" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:scale-[1.02] transition">
              Ver planes y precios <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#nosotros" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition">
              Ver ejemplo de web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <section id="herramientas" className="border-y border-border bg-background/50 py-10" aria-labelledby="herramientas-title">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center mb-8">
        <h2 id="herramientas-title" className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">Tu negocio, conectado con todo lo que necesita</h2>
        <p className="text-muted-foreground text-sm lg:text-base">
          Integramos tu web con Google Maps, WhatsApp Business, redes sociales, plataformas de reservas, pasarelas de pago y mucho más. Tanto si tienes un restaurante como una clínica, un taller o una gestoría, tu web trabaja por ti las 24 horas.
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((t, i) => (
            <div key={i} className="flex items-center gap-3 px-8 text-sm font-medium text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="servicios" className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Todo lo que incluye tu diseño web profesional (sin costes ocultos)</h2>
          <p className="text-muted-foreground text-lg">Sin costes ocultos ni sorpresas. Cada web incluye todo esto desde el primer día, sea cual sea tu sector.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <article key={i} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:shadow-glow transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectores" className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Páginas web para cada tipo de negocio</h2>
          <p className="text-muted-foreground text-lg">Adaptamos el diseño y las funcionalidades a lo que tu sector necesita para captar clientes de forma eficaz.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTORS.map((s, i) => (
            <Link key={i} to={s.href} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:shadow-glow transition-all block text-left">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 inline-block">Sobre nosotros</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Especialistas en diseño de páginas web para negocios locales con inteligencia artificial
          </h2>
          <div className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 space-y-4">
            <p>
              En <strong className="text-foreground">Potencia tu Negocio</strong> hacemos una sola cosa, y la hacemos rápido: webs que ponen a tu negocio delante de los clientes que ya te están buscando en Google. Primera versión en 48 horas, publicada en menos de 7 días y desde 195€ con todo incluido.
            </p>
            <p>
              ¿Por qué con inteligencia artificial? Porque hace el trabajo lento — primeros diseños, borradores de textos — y nos deja tiempo para lo que de verdad posiciona: adaptar cada web a tu sector, a tu ciudad y a lo que busca tu cliente. Por eso cobramos 195€ donde otras agencias cobran 1.000€, sin que la web parezca de 195€.
            </p>
            <p>
              Cada proyecto sale con el SEO local trabajado desde el primer día: dominio a tu nombre, ficha de Google Business dada de alta y optimizada, y textos pensados para las búsquedas de tu municipio. No entregamos "una web bonita": entregamos un negocio que aparece cuando alguien busca "restaurante", "taller" o "clínica" en tu zona.
            </p>
            <p>
              Donde más hemos trabajado es en <strong className="text-foreground">hostelería</strong>: cartas digitales con QR, reservas directas sin comisiones, integración con TheFork o Glovo y reseñas de Google en tiempo real. Esa misma metodología la aplicamos a clínicas, veterinarias, gestorías, peluquerías, academias y cualquier negocio que viva de los clientes de su barrio.
            </p>
            <p>
              Y una cosa más, porque sabemos que te la han hecho antes: precios cerrados, sin permanencia y sin letra pequeña. Si algún día quieres irte, el dominio es tuyo y te lo llevas. Trabajar así nos obliga a que quieras quedarte.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { v: "< 7 días", l: "Tiempo medio hasta publicar tu web" },
              { v: "100%", l: "Personalizado a tu sector y ciudad" },
              { v: "24/7", l: "Soporte en el Plan Mantenimiento" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{s.v}</div>
                <div className="text-xs text-muted-foreground leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 w-full max-w-md mx-auto">
          <div className="relative aspect-square w-full group [perspective:1000px]" aria-hidden="true">
          {/* Background glow */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transition-all duration-700 ease-out group-hover:scale-125 group-hover:bg-primary/30" />
          
          <div className="relative w-full h-full flex items-center justify-center transition-all duration-700 ease-out transform-gpu group-hover:[transform:rotateY(12deg)_rotateX(6deg)_scale(1.05)]">
            
            {/* Browser Window */}
            <div className="w-[85%] h-[70%] bg-card border border-primary/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative z-10 transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[0_0_30px] group-hover:shadow-primary/20">
              
              {/* Browser Header */}
              <div className="h-10 border-b border-primary/20 bg-muted/30 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 transition-transform group-hover:scale-110" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 transition-transform delay-75 group-hover:scale-110" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 transition-transform delay-150 group-hover:scale-110" />
                </div>
                <div className="mx-auto bg-background/50 rounded-md h-5 w-1/2 border border-primary/10 flex items-center justify-center">
                  <div className="w-16 h-1.5 bg-primary/20 rounded-full transition-colors group-hover:bg-primary/40" />
                </div>
              </div>
              
              {/* Browser Body */}
              <div className="flex-1 p-5 flex flex-col gap-4 relative overflow-hidden bg-background">
                {/* Nav */}
                <div className="flex justify-between items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 transition-all group-hover:bg-primary/40 group-hover:shadow-[0_0_10px] group-hover:shadow-primary/30" />
                  <div className="flex gap-2">
                    <div className="w-6 h-1.5 rounded-full bg-primary/20 transition-colors group-hover:bg-primary/40" />
                    <div className="w-6 h-1.5 rounded-full bg-primary/20 transition-colors group-hover:bg-primary/40" />
                  </div>
                </div>
                
                {/* Hero content */}
                <div className="mt-4 flex flex-col items-center text-center gap-3">
                  <div className="w-3/4 h-4 rounded-full bg-primary/30 transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_15px] group-hover:shadow-primary/50" />
                  <div className="w-1/2 h-3 rounded-full bg-primary/20 transition-all duration-500 delay-75 group-hover:bg-primary/70" />
                  <div className="mt-2 px-6 py-2 rounded-full border border-primary/30 transition-all duration-500 delay-150 group-hover:bg-primary/10 group-hover:border-primary/50">
                    <div className="w-12 h-2 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
                  </div>
                </div>
                
                {/* Content blocks */}
                <div className="mt-auto grid grid-cols-3 gap-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="h-12 rounded-xl border border-primary/20 transition-all duration-500 flex items-center justify-center bg-card translate-y-0 group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:shadow-[0_0_15px] group-hover:shadow-primary/30" style={{ transitionDelay: `${150 + i * 50}ms` }}>
                       <div className="w-4 h-4 rounded-sm bg-primary/20 transition-colors group-hover:bg-primary/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative Floating Elements */}
            <div className="absolute top-[10%] right-[5%] w-16 h-16 rounded-xl bg-card border border-primary/30 shadow-xl flex items-center justify-center transition-all duration-700 translate-x-0 translate-y-0 rotate-0 scale-100 group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-12 group-hover:scale-110 z-20">
              <div className="w-6 h-6 border-2 border-primary rounded-full border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            <div className="absolute bottom-[15%] left-[5%] w-24 h-12 rounded-lg bg-card border border-primary/30 shadow-xl flex items-center justify-center gap-2.5 transition-all duration-700 delay-100 translate-x-0 translate-y-0 rotate-0 scale-100 group-hover:-translate-x-6 group-hover:translate-y-4 group-hover:-rotate-6 group-hover:scale-110 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px] shadow-green-500/60" />
              <div className="w-10 h-1.5 rounded-full bg-primary/40 transition-colors group-hover:bg-primary/80" />
            </div>
            
            </div>
            
          </div>
          <Link to="/portfolio" className="inline-flex items-center justify-center h-14 px-10 rounded-full border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-105">
            Nuestro portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-trabajamos" className="py-24 lg:py-32 px-6 lg:px-10 bg-background overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto relative">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Cómo trabajamos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Cómo creamos tu página web en <span className="text-primary">3 pasos simples</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hemos eliminado toda la burocracia. Queremos que tengas tu web lista cuanto antes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[1px] bg-border z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="relative w-36 h-36 flex items-center justify-center mb-6 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20 group-hover:blur-3xl"></div>
                <div className="relative w-28 h-28 rounded-full bg-gradient-cta flex items-center justify-center text-white shadow-glow transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <MessageCircle className="w-10 h-10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-12" />
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-foreground text-background font-bold flex items-center justify-center border-2 border-background z-10 text-sm transition-transform duration-500 group-hover:scale-110">
                  1
                </div>
              </div>
              <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase mb-2">Paso 1</span>
              <h3 className="text-xl font-bold mb-3">Cuéntanos tu idea</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Formulario de 2 minutos o llamada gratuita de 15. Analizamos tu negocio y definimos los objetivos de tu página web. <strong className="font-semibold text-foreground">SIN COMPROMISO.</strong>
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="relative w-36 h-36 flex items-center justify-center mb-6 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20 group-hover:blur-3xl"></div>
                <div className="relative w-28 h-28 rounded-full bg-gradient-cta flex items-center justify-center text-white shadow-glow transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <Paintbrush className="w-10 h-10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-foreground text-background font-bold flex items-center justify-center border-2 border-background z-10 text-sm transition-transform duration-500 group-hover:scale-110">
                  2
                </div>
              </div>
              <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase mb-2">Paso 2</span>
              <h3 className="text-xl font-bold mb-3">Diseño web profesional en 48 horas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Creamos tu página web completa: diseño, hosting y textos que venden. Primera versión lista para revisar en solo 48 horas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="relative w-36 h-36 flex items-center justify-center mb-6 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20 group-hover:blur-3xl"></div>
                <div className="relative w-28 h-28 rounded-full bg-gradient-cta flex items-center justify-center text-white shadow-glow transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <Rocket className="w-10 h-10 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-12" />
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-foreground text-background font-bold flex items-center justify-center border-2 border-background z-10 text-sm transition-transform duration-500 group-hover:scale-110">
                  3
                </div>
              </div>
              <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase mb-2">Paso 3</span>
              <h3 className="text-xl font-bold mb-3">Revisión y lanzamiento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Nos dices los cambios y los aplicamos hasta que todo quede tal y como quieres. Publicamos tu web y tu negocio empieza a ser visible en Google.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="precios" className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Cuánto cuesta tu página web: elige el plan para tu negocio local</h2>
          <p className="text-muted-foreground text-lg">Sin letra pequeña. Sin permanencias ocultas. Mismo precio para restaurantes, clínicas, talleres o cualquier negocio local.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Plan Presencia */}
          <article className="bg-card border border-border rounded-3xl p-8 flex flex-col hover:border-primary/50 transition">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Básico</span>
            <h3 className="text-2xl font-bold mb-2">Plan Presencia</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Para que te encuentren en Google. Ideal para talleres, electricistas, autónomos.</p>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-muted-foreground line-through decoration-primary/60">225€</span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-red-500 px-2 py-0.5 rounded-full shadow-sm">Oferta</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-5xl font-black text-foreground">195€</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2 leading-snug">
                Pago único &middot; después 24,95€/mes<br />
                (dominio, hosting y soporte)
              </div>
            </div>
            <ul className="space-y-3 mb-8 text-sm mt-auto pt-4">
              {[
                "Web de una página (landing) diseñada con IA, personalizada a tu sector",
                "Dominio propio + hosting + SSL (primer año incluido)",
                "Botón de WhatsApp directo y formulario de contacto",
                "Google Maps integrado y ficha de Google Business dada de alta",
                "SEO básico: apareces en Google al buscar tu negocio",
                "Textos legales RGPD",
                "Diseño responsive (móvil, tablet, ordenador)",
              ].map((f, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="block text-center py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition">
              Contratar ahora
            </a>
          </article>

          {/* Plan Independencia */}
          <article className="relative bg-card border-2 border-primary rounded-3xl p-8 flex flex-col shadow-glow">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-cta text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              Más elegido
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Avanzado</span>
            <h3 className="text-2xl font-bold mb-2">Plan Independencia</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Web completa para captar clientes. Todo lo del Plan Presencia, y además:</p>
            <div className="mb-6 mt-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-muted-foreground line-through decoration-primary/60">750€</span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-red-500 px-2 py-0.5 rounded-full shadow-sm">Oferta</span>
              </div>
              <span className="text-5xl font-black">595€</span>
              <div className="text-sm text-muted-foreground mt-2 leading-snug">
                Primer año incluido &middot; después 89€/año o 24,95€/mes (dominio, hosting y soporte)
              </div>
            </div>
            <ul className="space-y-3 mb-8 text-sm mt-auto pt-4">
              {[
                "Web multipágina: inicio, servicios, galería, contacto",
                "Sistema de reservas o citas conectado a WhatsApp/email",
                "Carta digital o catálogo de servicios con fotos y precios",
                "SEO local trabajado: palabras clave de tu sector y ciudad",
                "QR físico personalizado para tu local",
                "1 ronda de cambios gratis dentro de los primeros 30 días",
                "Opción de transferirte dominio y código si quieres autonomía total",
              ].map((f, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="block text-center py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:opacity-90 transition">
              Contratar ahora
            </a>
          </article>

          {/* Plan Crecimiento */}
          <article className="bg-card border border-border rounded-3xl p-8 flex flex-col hover:border-primary/50 transition">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Pro</span>
            <h3 className="text-2xl font-bold mb-2">Plan Crecimiento</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Nos ocupamos de todo, tú solo gestiona tu negocio. Todo lo del Plan Independencia, y además:</p>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-muted-foreground line-through decoration-primary/60">1035€</span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-red-500 px-2 py-0.5 rounded-full shadow-sm">Oferta</span>
              </div>
              <span className="text-5xl font-black text-foreground">825€</span>
              <span className="text-muted-foreground ml-2">inicio</span>
              <div className="text-sm text-muted-foreground mt-2 leading-snug">
                Mantenimiento incluido &middot; 75€/mes<br />
                (dominio, hosting, cambios y soporte)
              </div>
            </div>
            <ul className="space-y-3 mb-8 text-sm mt-auto pt-4">
              {[
                <span className="inline">
                  <strong className="text-foreground">Análisis SEO exhaustivo: competencia, palabras clave y optimización técnica para destacar frente a otros negocios</strong>
                  <span className="ml-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wide align-middle">Exclusivo</span>
                </span>,
                "Cambios ilimitados: carta, precios, horarios, festivos, promociones (en <24h)",
                "Dominio y hosting pagados por nosotros, para siempre",
                "Gestión de tu ficha de Google Business: publicaciones, fotos, respuesta a reseñas",
                "Soporte prioritario 24/7 en español",
                "Copias de seguridad automáticas",
              ].map((f, i) => (
                <li key={i} className="flex gap-3">
                  {i === 0 ? (
                    <Star fill="currentColor" className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  ) : (
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  )}
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic mb-5">Cancela cuando quieras</p>
            <a href="#contacto" className="block text-center py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition">
              Contratar ahora
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">FAQ</span>
          <h2 id="faq-title" className="text-4xl lg:text-5xl font-bold tracking-tight">Preguntas frecuentes</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold">{f.q}</span>
                  {isOpen ? <Minus className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" /> : <Plus className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [tipoNegocio, setTipoNegocio] = useState("");
  return (
    <section id="contacto" className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.05]">
          ¿Listo para que tu negocio aparezca primero en{" "}
          <span>
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Escríbenos hoy y en menos de 24 horas te enviamos una propuesta personalizada y gratuita, adaptada a tu sector y tu ciudad.
        </p>
        {sent ? (
          <div className="bg-card border border-border rounded-3xl p-6 lg:p-10 text-center shadow-card flex flex-col items-center justify-center min-h-[400px] animate-in fade-in zoom-in slide-in-from-bottom-4 duration-700 ease-out">
            <div className="w-[64px] h-[64px] bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-inner">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="text-[40px] font-bold tracking-tight leading-none text-foreground">Solicitud</div>
            <div className="text-[38px] italic text-muted-foreground font-light mb-4">aceptada.</div>
            <div className="text-base font-medium text-muted-foreground mb-10">Nos pondremos en contacto pronto en tu email.</div>
            
            <div className="flex gap-10 text-xs text-center border-t border-border pt-8 w-full justify-center">
              <div>
                <div className="text-muted-foreground mb-1.5 uppercase font-semibold tracking-wider">Estado</div>
                <div className="font-bold text-foreground text-lg">Procesando propuesta</div>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-3xl p-6 lg:p-10 text-left space-y-4 shadow-card"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Nombre" aria-label="Nombre" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
              <input required type="email" placeholder="Email" aria-label="Email" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
            </div>
            <select
              required
              aria-label="Tipo de negocio"
              value={tipoNegocio}
              onChange={(e) => setTipoNegocio(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition appearance-none ${tipoNegocio === "" ? "text-muted-foreground" : "text-foreground"}`}
            >
              <option value="" disabled hidden>Selecciona tipo de negocio</option>
              <option value="Restaurante / Hostelería">Restaurante / Hostelería</option>
              <option value="Hotel">Hotel</option>
              <option value="Clínica dental">Clínica dental</option>
              <option value="Psicólogo">Psicólogo</option>
              <option value="Veterinaria">Veterinaria</option>
              <option value="Academia">Academia</option>
              <option value="Gimnasio">Gimnasio</option>
              <option value="Inmobiliaria">Inmobiliaria</option>
              <option value="Electricista">Electricista</option>
              <option value="Peluquería">Peluquería</option>
              <option value="Centro de estética">Centro de estética</option>
              <option value="Fotografía">Fotografía</option>
              <option value="Joyería">Joyería</option>
              <option value="Otro">Otro</option>
            </select>
            {tipoNegocio === "Otro" && (
              <input required placeholder="Especifica qué tipo de negocio" aria-label="Especifica qué tipo de negocio" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition animate-in fade-in slide-in-from-top-2" />
            )}
            <textarea required rows={4} aria-label="Mensaje" placeholder="Cuentanos aqui un poco sobre tu propuesta" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition resize-none" />
            <button type="submit" className="w-full py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              Quiero más clientes <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-muted-foreground pt-2">
              ✅ Respuesta en menos de 24 h · ✅ Sin compromiso · ✅ Propuesta gratuita y personalizada para tu sector
            </p>
          </form>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="mailto:info@potenciatunegocio.es" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <Mail className="w-4 h-4" aria-hidden="true" /> info@potenciatunegocio.es
          </a>
          <a href="https://wa.me/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-medium hover:bg-[#25D366]/25 transition">
            <Phone className="w-4 h-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 border-b border-border">
        <a
          href="https://www.trustpilot.com/review/potencia-tu-negocio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Déjanos tu reseña en Trustpilot"
          className="group flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#00B67A]" aria-hidden="true">
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.176L12 19.273l-7.336 3.9 1.402-8.176L.132 9.21l8.2-1.192z" />
            </svg>
            <span className="text-lg font-semibold text-foreground tracking-tight">
              Trust<span className="text-[#00B67A]">pilot</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="w-7 h-7 bg-[#00B67A] flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.176L12 19.273l-7.336 3.9 1.402-8.176L.132 9.21l8.2-1.192z" />
                </svg>
              </span>
            ))}
          </div>
          <div className="text-sm">
            <p className="text-foreground font-medium">¿Trabajamos juntos?</p>
            <p className="text-muted-foreground group-hover:text-foreground transition">
              Déjanos tu reseña en Trustpilot →
            </p>
          </div>
        </a>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="font-bold text-foreground flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo Potencia tu Negocio" className="w-6 h-6 object-contain rounded-sm invert grayscale brightness-200 contrast-125 mix-blend-screen opacity-80" />
          <span>Potencia <span className="text-primary">tu negocio</span><sup className="text-[0.55em] ml-0.5 font-medium opacity-80">&reg;</sup></span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="/aviso-legal" className="hover:text-foreground transition">Aviso Legal</Link>
          <Link to="/politica-de-privacidad" className="hover:text-foreground transition">Política de Privacidad</Link>
          <Link to="/politica-de-cookies" className="hover:text-foreground transition">Política de Cookies</Link>
        </div>
        <div className="text-xs text-center lg:text-right leading-relaxed">
          © 2026 Potencia tu Negocio · Webs profesionales para negocios locales
        </div>

      </div>
    </footer>
  );
}

