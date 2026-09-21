import { createFileRoute, Link } from "@tanstack/react-router";
import { Preloader } from "../components/Preloader";
import { Card3DWrapper } from "../components/ui/animated-3d-card";
import { SaaSFeatures } from "../components/SaaSFeatures";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import {
  Search, Calendar, UtensilsCrossed, MonitorSmartphone, MessageCircle,
  Star, Lock, FileText, ArrowRight, Check, Plus, Minus, Mail, Phone,
  Paintbrush, Rocket, X, Info, Zap, ShieldCheck, Layers, Stethoscope, Wrench
} from "lucide-react";

const Portfolio3D = lazy(() => import("../components/Portfolio3D").then(m => ({ default: m.Portfolio3D })));

const FAQS = [
  { q: "¿Qué es Potencia tu Negocio y qué hacéis exactamente?", a: "Potencia tu Negocio es una agencia de diseño web con inteligencia artificial especializada en negocios locales de España: restaurantes, bares, clínicas, talleres, peluquerías, gestorías... Creamos tu página web completa — diseño, textos, dominio, hosting y ficha de Google Business — desde 295€ en pago único, con la primera versión lista en 48 horas y publicada en menos de 7 días. Nuestro objetivo no es que 'tengas una web': es que aparezcas en Google cuando alguien busca lo que tú haces en tu ciudad." },
  { q: "¿Trabajáis en toda España o solo en algunas ciudades?", a: "En toda España. Todo el proceso es por WhatsApp, teléfono o email, así que da igual que tu negocio esté en Madrid, en Albacete o en un pueblo de 5.000 habitantes — de hecho, cuanto más local es la competencia, más fácil es posicionarte el primero en tu zona. Cada web se optimiza específicamente para las búsquedas de tu municipio y provincia, no con textos genéricos que valen para cualquier sitio." },
  { q: "¿Qué diferencia hay entre vosotros y una agencia de diseño web tradicional?", a: "Tres cosas: velocidad, precio y que no te mareamos. Una agencia tradicional en España suele cobrar de 800€ a 2.000€, tardar de 4 a 8 semanas y pedirte varias reuniones; en Potencia tu Negocio pagas desde 295€ cerrados, ves tu web en 48 horas y solo necesitamos 10 minutos de conversación. La diferencia está en el método: la inteligencia artificial hace el trabajo lento (primeros diseños, borradores) y nosotros lo personalizamos a mano para tu sector y tu ciudad. Mismo resultado profesional, sin las horas facturables de por medio." },
  { q: "¿Una página web hecha con inteligencia artificial no será peor que una 'de verdad'?", a: "Es la duda más habitual y es razonable. La respuesta corta: la IA no decide cómo queda tu web, la usamos para ir rápido en lo mecánico. Los primeros diseños y borradores de texto salen de la IA; la adaptación a tu sector, las fotos de tu local, los textos finales y el SEO de tu ciudad los trabajamos nosotros. El resultado es una web única para tu negocio — no una plantilla — a una fracción del precio y del tiempo. Y la ves en 48 horas: si no te convence lo que ves, no pagas más rondas ni te quedas atrapado." },
  { q: "¿Para qué tipo de negocios hacéis páginas web?", a: "Para negocios locales de cualquier sector. Donde más experiencia tenemos es en hostelería — restaurantes, bares y cafeterías, con carta digital, reservas y reseñas — pero trabajamos también con clínicas dentales y de salud, psicólogos, veterinarias, talleres mecánicos, gestorías, academias, gimnasios, inmobiliarias, electricistas, peluquerías, centros de estética, fotógrafos y joyerías. Si tu negocio atiende a clientes de tu zona, la metodología es la misma: que te encuentren en Google antes que a tu competencia." },
  { q: "Tengo dos planes delante, ¿cuál me conviene?", a: "Regla rápida: si solo necesitas que te encuentren (un electricista, un taller), el Plan Presencia desde 295€ — web multipágina con tu información, WhatsApp, Google Maps y SEO local básico. Si quieres que además trabajemos activamente para que te encuentren antes que tu competencia (un restaurante, una clínica), el Plan Crecimiento desde 675€ + 65,90€/mes — con análisis SEO exhaustivo, reservas o catálogo, gestión de tu ficha de Google y cambios ilimitados. Si dudas, escríbenos: te decimos cuál encaja en 5 minutos." },
  { q: "¿Qué es eso del SEO local y por qué insistís tanto?", a: "El SEO local es que tu negocio salga en Google cuando alguien de tu zona busca lo que tú vendes — 'fontanero en Móstoles', 'cafetería con terraza en Salamanca'. Insistimos porque es la diferencia entre una web que decora y una web que trae clientes: 8 de cada 10 personas buscan un negocio local desde el móvil antes de llamar o ir. Por eso todas nuestras webs incluyen SEO local desde el primer día — textos optimizados para tu ciudad, ficha de Google Business dada de alta y Google Maps integrado — sin coste extra." },
  { q: "¿Ya tengo una página web pero es antigua y no me trae clientes, ¿me la podéis rehacer?", a: "Sí, y es de los casos más frecuentes que nos llegan. Una web de hace 8 años que no se ve bien en el móvil o no aparece en Google te está costando clientes cada semana. La rehacemos desde cero con el mismo proceso: 48 horas para la primera versión, publicada en menos de 7 días. Si ya tienes dominio, lo conservamos — es tuyo y sigue siéndolo. Y tus textos, fotos y reseñas de Google se aprovechan; no empiezas de cero, empiezas de mejor." },
  { q: "¿Qué pasa después de publicar la web? ¿Me quedo solo?", a: "No. Con cualquier plan, la web se entrega funcionando al completo: dominio activo, ficha de Google verificada, WhatsApp conectado y textos legales al día. Con el Plan Independencia tienes 30 días de ajustes gratis. Y si eliges el Plan Crecimiento, nos convertimos en 'tu informático': cambios ilimitados en menos de 24 horas, gestión de reseñas y publicaciones en Google, copias de seguridad y un informe mensual donde ves cuánta gente visitó tu web, cuántos te llamaron y cuántos te escribieron por WhatsApp." },
  { q: "¿Puedo ver trabajos vuestros u opiniones antes de decidirme?", a: "Sí. Te enseñamos webs reales que hemos hecho para negocios como el tuyo — pídenoslas por WhatsApp y te pasamos las de tu sector — y nuestras opiniones están en nuestro perfil de Google, donde puedes leer la experiencia de otros dueños de negocio. Pero lo más útil es la propuesta gratuita: nos cuentas tu negocio en 2 minutos y en menos de 24 horas te enviamos cómo sería tu web y su precio exacto, sin compromiso. Decides viendo algo tuyo, no un catálogo." },
];

function ResponsiveLogo() {
  // Ultra-lightweight configuration: 15 layers with 1.5px gap.
  // This provides a decent 3D effect while saving mobile GPU overhead.
  const layers = 15;
  const gap = 1.5;

  return (
    <div className="relative w-80 h-80 lg:w-[32rem] lg:h-[32rem] animate-spin-3d" style={{ transformStyle: 'preserve-3d' }}>
      {Array.from({ length: layers }).map((_, i) => {
        const isCap = i === 0 || i === layers - 1;
        return (
          <img 
            key={i}
            src="/logo-cristal.png" 
            alt={i === 0 ? "Logo Cristal 3D" : ""} 
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ 
              transform: `translateZ(${-i * gap}px)`,
              filter: isCap ? 'none' : 'brightness(0.5)',
              opacity: isCap ? 1 : 0.4,
              mixBlendMode: 'normal'
            }}
          />
        );
      })}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diseño de Páginas Web para Negocios Locales | Lista en 48h desde 295€" },
      { name: "description", content: "Diseño de páginas web profesional para restaurantes, clínicas, talleres y cualquier negocio local. SEO local incluido, primera versión en 48 horas, desde 295€ con dominio y Google Business. Propuesta gratis en 24h." },
      { property: "og:title", content: "Diseño de Páginas Web para Negocios Locales | Lista en 48h desde 295€" },
      { property: "og:description", content: "Diseño de páginas web profesional para restaurantes, clínicas, talleres y cualquier negocio local. SEO local incluido, primera versión en 48 horas, desde 295€ con dominio y Google Business. Propuesta gratis en 24h." },
      { property: "og:url", content: "https://potenciatunegocio.eu/" },
    ],
    links: [
      { rel: "preload", href: "/logo-cristal.png", as: "image" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Potencia tu Negocio",
          description: "Agencia de diseño web con IA especializada en negocios locales y hostelería en España.",
          url: "https://potenciatunegocio.eu/",
          areaServed: "ES",
          serviceType: "Diseño web para negocios locales",
        }),
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#servicios", label: "¿Qué ofrecemos?" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const TOOLS = [
  "Google Maps", "Google Business", "TripAdvisor", "TheFork", "ElTenedor",
  "Just Eat", "Glovo", "Uber Eats", "WhatsApp Business", "Instagram",
  "Facebook", "Stripe", "Bizum", "Redsys", "Covermanager",
];

const FEATURES = [
  { icon: Search, title: "SEO local/exhaustivo optimizado", desc: "Tu negocio aparece primero en Google cuando alguien busca en tu ciudad. Optimizamos tu web y tu perfil de Google Business para restaurantes, clínicas, talleres y cualquier negocio local." },
  { icon: Calendar, title: "Reservas y citas automáticas", desc: "Sistema de reservas o citas conectado a WhatsApp o email. Perfecto para restaurantes, clínicas, veterinarias y cualquier negocio que trabaje con citas previas." },
  { icon: UtensilsCrossed, title: "Carta digital o catálogo", desc: "Restaurantes con carta digital. Clínicas con tratamientos. Talleres con servicios. Todo con fotos, precios y categorías, actualizable en minutos." },
  { icon: MonitorSmartphone, title: "Diseño 100% responsive", desc: "El 80% de tus clientes te buscan desde el móvil. Tu web se verá perfecta en cualquier pantalla y transmitirá profesionalidad al segundo." },
  { icon: MessageCircle, title: "Botón WhatsApp directo", desc: "Un toque y tu cliente te escribe. Más consultas, más reservas, más ventas. Funciona en cualquier tipo de negocio local." },
  { icon: Star, title: "Reseñas de Google en tiempo real", desc: "Tus valoraciones de Google aparecen automáticamente en tu web. Genera confianza en nuevos clientes antes de que llamen o reserven." },
  { icon: Lock, title: "Seguridad SSL (HTTPS)", desc: "Protección total de los datos de tus clientes. Imprescindible para posicionar en Google, especialmente en clínicas, gestorías y negocios con datos sensibles." },
  { icon: FileText, title: "Textos legales RGPD", desc: "Aviso legal, política de privacidad y cookies incluidos y correctamente redactados para tu sector.\u00a0" },
];


// Lazy wrapper for 3D Portfolio to save main thread on mobile load
function LazyPortfolio3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" } // Load it a bit before it enters the screen
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={containerRef} className="w-full min-h-[500px]">
      {inView ? (
        <Suspense fallback={<div className="h-[500px] flex items-center justify-center text-muted-foreground">Cargando portfolio 3D...</div>}>
          <Portfolio3D />
        </Suspense>
      ) : (
        <div className="h-[500px] w-full flex items-center justify-center text-muted-foreground/30">
          Cargando entorno 3D...
        </div>
      )}
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />

        <About />
        <HowItWorks />
        <LazyPortfolio3D />
        <AntiWordPressSection />
        <IndustryProblems />
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
          <img src="/logo-sm.png" alt="Logo Potencia tu Negocio" className="w-7 h-7 object-contain rounded-sm invert grayscale brightness-200 contrast-125 mix-blend-screen" />
          <span>Potencia <span className="text-primary">tu negocio</span><sup className="text-[0.55em] ml-0.5 font-medium opacity-80">&reg;</sup></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground" aria-label="Navegación principal">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-gradient-cta shadow-glow hover:opacity-90 transition">
          Prediseño gratis <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-hero">
      {/* Desktop Logo (Absolute Right) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="relative w-[800px] h-[800px] animate-float">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-accent/30"
              style={{ transform: `scale(${1 - i * 0.13})`, opacity: 1 - i * 0.12 }}
            />
          ))}
          <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-50" style={{ transform: "scale(0.4)" }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1200px' }}>
          <ResponsiveLogo />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
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
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Agencia de diseño web con IA · Negocios locales
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Diseño de páginas web profesional para negocios locales. <br className="hidden lg:block" />
            Lista en <span className="text-primary">48 horas</span>, con dominio incluido.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Creamos webs con inteligencia artificial para restaurantes, clínicas, talleres, veterinarias, gestorías y todo tipo de negocio local. SEO incluido para que aparezcas primero cuando te busquen en tu ciudad.
          </p>
          
          {/* Desktop Button (Liquid Glass iPhone style) */}
          <div className="hidden lg:flex">
            <a 
              href="#contacto" 
              className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full transition-transform duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              {/* Backdrop blur & base translucency */}
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 transition-colors duration-500 group-hover:border-white/30" />
              
              {/* Liquid highlight (Top edge shine) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent opacity-40 pointer-events-none" />
              
              {/* Subsurface inner glow (Bottom reflection) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/30 to-transparent opacity-50 pointer-events-none" />
              
              {/* Hover color shift */}
              <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10 font-bold text-lg text-white tracking-wide drop-shadow-md">Prediseño gratis</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-white/90 group-hover:translate-x-1 group-hover:text-white transition-all duration-300 drop-shadow-md" />
            </a>
          </div>

          {/* Mobile Logo & Button */}
          <div className="lg:hidden mt-12 flex flex-col items-center relative">
            <div className="flex justify-center items-center pointer-events-none relative w-full h-[320px]">
              <div className="absolute w-[400px] h-[400px] animate-float">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-accent/30"
                    style={{ transform: `scale(${1 - i * 0.13})`, opacity: 1 - i * 0.12 }}
                  />
                ))}
                <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-50" style={{ transform: "scale(0.4)" }} />
              </div>
              <div style={{ perspective: '1200px' }} className="relative z-10">
                <ResponsiveLogo />
              </div>
            </div>

            {/* Mobile Button (Minimalist Liquid Glass) */}
            <div className="mt-8 relative z-20">
              <a 
                href="#contacto" 
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
              >
                {/* Backdrop blur & base translucency */}
                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-xl border border-white/20" />
                
                {/* Liquid highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent opacity-40 pointer-events-none" />
                
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/30 to-transparent opacity-50 pointer-events-none" />
                
                <span className="relative z-10 font-medium text-sm text-white tracking-wide drop-shadow-sm">Prediseño gratis</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-white/90 drop-shadow-sm" />
              </a>
            </div>
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


function About() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      {/* Tattoo Watermark Logo - Hidden on mobile for performance, full premium filters on desktop */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0 opacity-10 select-none overflow-hidden">
        <img 
          src="/logo.png" 
          alt="" 
          loading="lazy"
          className="w-[110%] h-auto object-cover mix-blend-screen transform translate-x-[30%] -rotate-12"
          style={{ 
            filter: 'invert(1) grayscale(1) contrast(1.5) brightness(1.2)',
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 inline-block">Sobre nosotros</span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Especialistas en diseño de páginas web para negocios locales con inteligencia artificial
          </h2>
          <div className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 space-y-4">
            <p>
              En <strong className="text-foreground">Potencia tu Negocio</strong> hacemos una sola cosa, y la hacemos rápido: webs que ponen a tu negocio delante de los clientes que ya te están buscando en Google. Primera versión en 48 horas, publicada en menos de 7 días y desde 295€ con todo incluido.
            </p>
            <p>
              ¿Por qué con inteligencia artificial? Porque hace el trabajo lento — primeros diseños, borradores de textos — y nos deja tiempo para lo que de verdad posiciona: adaptar cada web a tu sector, a tu ciudad y a lo que busca tu cliente. Por eso cobramos 295€ donde otras agencias cobran 1.000€, sin que la web parezca de 295€.
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { v: "< 7 días", l: "Tiempo medio hasta publicar tu web" },
              { v: "100%", l: "Personalizado a tu sector y ciudad" },
              { v: "24/7", l: "Soporte en el Plan Mantenimiento" },
            ].map((s, i) => (
              <div key={i} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 text-center shadow-sm">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{s.v}</div>
                <div className="text-xs text-muted-foreground leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
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

function AntiWordPressSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
            <ShieldCheck className="w-4 h-4" /> El Estándar Premium
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            ¿Por qué huimos de WordPress? <br className="hidden lg:block" />
            <span className="text-muted-foreground">La diferencia de jugar en Primera División.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            El 90% de las agencias tradicionales dependen de gestores obsoletos que exigen mantenimientos correctivos simplemente para evitar caídas del servidor. Nosotros desarrollamos arquitecturas inmutables (Serverless): tu inversión mensual se destina íntegramente a soporte premium y crecimiento orgánico, no a parchear vulnerabilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card3DWrapper className="h-full">
            <div className="group bg-card p-8 rounded-3xl border border-border flex flex-col items-start shadow-sm hover:border-primary/50 transition-all h-full">
              <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Velocidad Extrema (Serverless)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sin bases de datos lentas ni código basura. Tu web se pre-construye y se aloja en una red global de servidores Edge. Carga en milisegundos en cualquier móvil, algo que a Google le encanta para el SEO.
              </p>
            </div>
          </Card3DWrapper>

          <Card3DWrapper className="h-full">
            <div className="group bg-card p-8 rounded-3xl border border-border flex flex-col items-start shadow-sm hover:border-primary/50 transition-all h-full">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seguridad Inhackeable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Al no usar WordPress ni plugins de terceros, cerramos todas las puertas traseras. Tu web es código compilado y sellado: imposible de hackear. Cero estrés por actualizaciones sorpresa que rompan la página.
              </p>
            </div>
          </Card3DWrapper>

          <Card3DWrapper className="h-full">
            <div className="group bg-card p-8 rounded-3xl border border-border flex flex-col items-start shadow-sm hover:border-primary/50 transition-all h-full">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Máquina de SEO Programático</h3>
              <p className="text-muted-foreground leading-relaxed">
                No hacemos "una página". Diseñamos Arquitecturas Silo capaces de generar cientos de URLs locales estratégicas (Sector + Ciudad) que atacan masivamente a tu competencia en Google.
              </p>
            </div>
          </Card3DWrapper>
        </div>
      </div>
    </section>
  );
}

const ADDON_MODALS = {
  placa_nfc: {
    title: "Placa NFC de Reseñas",
    price: "35,50 €",
    subtitle: "Configuración, programación y envío incluidos.",
    hook: "Convierte cada visita en una nueva oportunidad para conseguir una reseña de 5 estrellas.",
    paragraphs: [
      "Con solo acercar el móvil a la placa, tus clientes accederán directamente a la página de reseñas de Google, sin buscar tu negocio, sin escribir nada y sin complicaciones. Además, incorpora un código QR totalmente programado, para que incluso los clientes que no utilicen NFC puedan escanearlo y dejar su valoración en cuestión de segundos.",
      "Colócala en el mostrador, la recepción, las mesas o la zona de pago y deja que haga el trabajo por ti. Su diseño discreto y profesional, junto con su adhesivo de alta fijación en la parte trasera, permite colocarla fácilmente sobre cualquier superficie sin necesidad de herramientas.",
      "Cuanto más fácil sea dejar una reseña, más opiniones conseguirás. Y más reseñas significan más confianza, mayor visibilidad en Google y más clientes para tu negocio."
    ],
    quote: "Porque hoy en día, antes de elegir un negocio, la mayoría de personas consulta las valoraciones. La pregunta es: cuando entren en tu ficha de Google, ¿verán 20 reseñas... o 200?",
    features: [
      "Tecnología NFC programada con tu perfil de Google.",
      "Código QR listo para escanear.",
      "Adhesivo trasero de alta resistencia para una instalación rápida.",
      "Configuración personalizada.",
      "Envío incluido.",
      "Sin cuotas ni suscripciones.",
      "Compatible con la gran mayoría de smartphones."
    ],
    conclusion: "Una pequeña placa. Un simple gesto de un segundo. Un flujo constante de reseñas que puede ayudarte a conseguir muchos más clientes durante años."
  },
  tarjeta_nfc: {
    title: "Tarjeta NFC de Reseñas",
    price: "17,90 €",
    subtitle: "Configuración, programación y envío incluidos.",
    hook: "Convierte el momento de pagar la cuenta en una nueva reseña de 5 estrellas.",
    paragraphs: [
      "Del tamaño de una tarjeta de crédito, esta tarjeta NFC se entrega en mano al cliente justo cuando paga: con solo acercar el móvil, accede directamente a tu página de reseñas de Google, sin buscar tu negocio, sin escribir nada y sin complicaciones. Ni siquiera necesita quedarse en la mesa: cabe en cualquier bolsillo, cartera o portafolios, lista para usarse en el instante exacto en que el cliente está más satisfecho.",
      "Perfecta para el cierre de cuenta en restaurantes, bares, peluquerías o cualquier negocio con atención cara a cara: el camarero o el dependiente la acerca al móvil del cliente junto con el datáfono, y en dos segundos la reseña está en camino. Nada que colocar, nada que mantener en la mesa: se guarda en el delantal, en la carpeta de la cuenta o en el cajón, y se usa solo cuando hace falta.",
      "Cuanto más fácil y natural sea el gesto, más reseñas conseguirás. Y más reseñas significan más confianza, mayor visibilidad en Google y más clientes para tu negocio."
    ],
    quote: "Porque hoy en día, antes de elegir un negocio, la mayoría de personas consulta las valoraciones. La pregunta es: cuando entren en tu ficha de Google, ¿verán 20 reseñas... o 200?",
    features: [
      "Tecnología NFC programada con tu perfil de Google.",
      "Formato tarjeta, ligero y fácil de llevar encima.",
      "Configuración personalizada.",
      "Envío incluido.",
      "Sin cuotas ni suscripciones.",
      "Compatible con la gran mayoría de smartphones."
    ],
    conclusion: "Una tarjeta de bolsillo. Un simple gesto de un segundo, justo cuando el cliente paga. Un flujo constante de reseñas que puede ayudarte a conseguir muchos más clientes durante años."
  },
  social_nfc: {
    title: "Tarjeta NFC de Reseñas",
    price: "17,90 €",
    subtitle: "Configuración, programación y envío incluidos.",
    hook: "Convierte el momento de pagar la cuenta en una nueva reseña de 5 estrellas.",
    paragraphs: [
      "Del tamaño de una tarjeta de crédito, esta tarjeta NFC se entrega en mano al cliente justo cuando paga: con solo acercar el móvil, accede directamente a tu página de reseñas de Google, sin buscar tu negocio, sin escribir nada y sin complicaciones. Ni siquiera necesita quedarse en la mesa: cabe en cualquier bolsillo, cartera o portafolios, lista para usarse en el instante exacto en que el cliente está más satisfecho.",
      "Perfecta para el cierre de cuenta en restaurantes, bares, peluquerías o cualquier negocio con atención cara a cara: el camarero o el dependiente la acerca al móvil del cliente junto con el datáfono, y en dos segundos la reseña está en camino. Nada que colocar, nada que mantener en la mesa: se guarda en el delantal, en la carpeta de la cuenta o en el cajón, y se usa solo cuando hace falta.",
      "Cuanto más fácil y natural sea el gesto, más reseñas conseguirás. Y más reseñas significan más confianza, mayor visibilidad en Google y más clientes para tu negocio."
    ],
    quote: "Porque hoy en día, antes de elegir un negocio, la mayoría de personas consulta las valoraciones. La pregunta es: cuando entren en tu ficha de Google, ¿verán 20 reseñas... o 200?",
    features: [
      "Tecnología NFC programada con tu perfil de Google.",
      "Formato tarjeta, ligero y fácil de llevar encima.",
      "Configuración personalizada.",
      "Envío incluido.",
      "Sin cuotas ni suscripciones.",
      "Compatible con la gran mayoría de smartphones."
    ],
    conclusion: "Una tarjeta de bolsillo. Un simple gesto de un segundo, justo cuando el cliente paga. Un flujo constante de reseñas que puede ayudarte a conseguir muchos más clientes durante años."
  }
};

function Pricing() {
  const [activeAddonModal, setActiveAddonModal] = useState<keyof typeof ADDON_MODALS | null>(null);
  const [placaIndex, setPlacaIndex] = useState(0);

  const placaImages = [
    "/nfc-review-card-v4.png",
    "/nfc-placa-2.jpg",
    "/nfc-placa-3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlacaIndex(prev => (prev + 1) % placaImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [placaImages.length]);

  useEffect(() => {
    if (activeAddonModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeAddonModal]);

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Plan Presencia",
          "description": "Tu negocio, disponible en internet las 24 horas. Ideal si solo necesitas que te encuentren cuando alguien busca tu nombre o pasa por tu zona — sin gestión activa de contenido ni SEO continuo.",
          "image": "https://potenciatunegocio.eu/logo.png",
          "brand": {
            "@type": "Brand",
            "name": "Potencia tu Negocio"
          },
          "offers": {
            "@type": "Offer",
            "price": "295.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Plan Crecimiento",
          "description": "No solo tienes web: nos encargamos de que te encuentren antes que a tu competencia. Todo lo del Plan Presencia, y además:",
          "image": "https://potenciatunegocio.eu/logo.png",
          "brand": {
            "@type": "Brand",
            "name": "Potencia tu Negocio"
          },
          "offers": {
            "@type": "Offer",
            "price": "675.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  };

  return (
    <section id="precios" className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">Cuánto cuesta tu página web: elige el plan para tu negocio local</h2>
          <p className="text-muted-foreground text-lg">Sin letra pequeña. Sin permanencias ocultas. Mismo precio para restaurantes, clínicas, talleres o cualquier negocio local.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Plan Presencia */}
          <Card3DWrapper className="h-full">
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col h-full hover:border-primary/50 transition">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Básico</span>
              <h3 className="text-2xl font-bold mb-2">Plan Presencia</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Tu negocio, disponible en internet las 24 horas. Ideal si solo necesitas que te encuentren cuando alguien busca tu nombre o pasa por tu zona — sin gestión activa de contenido ni SEO continuo.</p>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-muted-foreground line-through decoration-primary/60">350€</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-red-500 px-2 py-0.5 rounded-full shadow-sm">Oferta</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-black text-foreground">295€</span>
                </div>
                <div className="text-sm text-muted-foreground mt-2 leading-snug">
                  Pago único &middot; después 89,90€/año<br />
                  (dominio, hosting y soporte)
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm mt-auto pt-4">
                {[
                  "Diseño web a medida y sin plantillas (Inicio, servicios, galería y contacto)",
                  "Tu negocio visible en Google (SEO local básico enfocado en tu ciudad)",
                  "Sistemas de contacto rápido (Reservas, citas y botón de WhatsApp directo)",
                  "Catálogo o Carta digital (Muestra tus servicios con fotos y precios)",
                  "Aparición en Google Maps (Ficha de negocio configurada al 100%)",
                  "Todo incluido el primer año (Dominio .com/.es, alojamiento seguro y textos legales)"
                ].map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1 text-muted-foreground/90 font-medium">
                      {f}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic mb-5">Renovación anual opcional por 89,90 € o transferencia del dominio a tu nombre (gratis).</p>
              <a href="#contacto" className="block text-center py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition relative z-20">
                Contratar ahora
              </a>
            </div>
          </Card3DWrapper>

          {/* Plan Crecimiento (Premium) */}
          <Card3DWrapper className="h-full">
            <div className="relative bg-card border-2 border-primary rounded-3xl p-8 flex flex-col shadow-glow h-full">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-cta text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Más elegido
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Premium</span>
              <h3 className="text-2xl font-bold mb-2">Plan Crecimiento</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">No solo tienes web: nos encargamos de que te encuentren antes que a tu competencia. Todo lo del Plan Presencia, y además:</p>
              <div className="mb-6 mt-4">
              <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-muted-foreground line-through decoration-primary/60">850€</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-red-500 px-2 py-0.5 rounded-full shadow-sm">Oferta</span>
                </div>
                <span className="text-5xl font-black">675€</span>
                <div className="text-sm text-muted-foreground mt-2 leading-snug">
                  Pago único incluido &middot; después 65,90€/mes<br />
                  (dominio, hosting, gestión SEO y soporte)
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm mt-auto pt-4">
                {[
                  "Todo lo incluido en el Plan Presencia, impulsado al siguiente nivel:",
                  <details className="group bg-muted/30 border border-border p-3 rounded-xl" key="seo">
                    <summary className="list-none cursor-pointer flex items-center justify-between font-bold text-foreground hover:text-primary transition-colors">
                      <span className="flex items-center gap-2">
                        Análisis SEO exhaustivo 
                        <span className="text-muted-foreground font-medium text-[10px] uppercase tracking-wider bg-background border border-border px-2 py-0.5 rounded-full transition-colors group-hover:border-primary/30">¿Qué incluye?</span>
                      </span>
                      <Plus className="w-4 h-4 text-muted-foreground group-open:hidden" />
                      <Minus className="w-4 h-4 text-muted-foreground hidden group-open:block" />
                    </summary>
                    <ul className="mt-3 space-y-2 ml-4 text-sm text-muted-foreground list-disc list-outside animate-in slide-in-from-top-1 fade-in duration-200">
                      <li>Revisión técnica inicial para que tu web cargue rápido y sea fácil de encontrar en Google</li>
                      <li>Estudio de las búsquedas de tus clientes en tu ciudad y sector, para posicionar tu web en ellas</li>
                      <li>Optimización continua de contenido para mejorar tu posicionamiento con el tiempo</li>
                      <li>Informe de resultados con visitas, posición en Google y clics desde Maps</li>
                    </ul>
                  </details>,
                  "Mantenimiento \"Manos Libres\" (Cambios ilimitados de texto y fotos en menos de 24h)",
                  "Gestión Activa de Reputación (Respondemos tus reseñas y mimamos tu ficha de Google)",
                  "Crecimiento Comercial Continuo (Adaptamos la web a tus nuevas campañas, menús o servicios)",
                  "Soporte Prioritario VIP (Atención directa de tú a tú por WhatsApp, sin tickets ni robots)"
                ].map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    {i === 1 ? (
                      <Star fill="currentColor" className="w-4 h-4 text-primary flex-shrink-0 mt-3.5" aria-hidden="true" />
                    ) : (
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div className="flex-1 text-muted-foreground/90 font-medium">
                      {f}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic mb-5">Cancela cuando quieras</p>
              <a href="#contacto" className="block text-center py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:opacity-90 transition relative z-20">
                Contratar ahora
              </a>
            </div>
          </Card3DWrapper>

        </div>

        {/* Solución SaaS Reservas */}
        <div className="mt-24 max-w-5xl mx-auto px-4 lg:px-0">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">¿Tu negocio funciona por citas?</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tenemos una solución específica en modelo suscripción para que te olvides de altas comisiones y agendas de papel.
            </p>
          </div>

          <Card3DWrapper>
            <div className="bg-card border border-primary/30 rounded-3xl p-8 lg:p-10 flex flex-col hover:border-primary transition shadow-xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
              
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.3)] border border-white/10 whitespace-nowrap z-20">
                Ideal Peluquerías y Barberías
              </span>
              
              <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start relative z-10">
                <div className="flex-1 text-center lg:text-left">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Sistema Integral</span>
                  <h3 className="text-3xl font-bold mb-4">Plan Reservas PRO</h3>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                    Un sistema de citas 100% tuyo sin las altísimas comisiones de plataformas de terceros. 
                    Te montamos tu web corporativa y una App de gestión privada para tu móvil. Todo integrado.
                  </p>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                    <div className="bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Software Propio Exclusivo (Desarrollado por nosotros)</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 text-sm text-left">
                    {[
                      "Diseño Web corporativo a medida (Landing page + Servicios)",
                      "Motor de reservas automático (Reglas anti-solape, control horario)",
                      "App de Gestión (Panel privado en tu móvil para ver tu agenda)",
                      "0% Comisiones por reserva",
                      "Base de datos privada en la nube",
                      "Hosting, Dominio y Mantenimiento técnico incluido"
                    ].map((f, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                        <div className="flex-1 text-foreground font-medium">
                          {f}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full lg:w-72 shrink-0 bg-background/50 border border-border rounded-2xl p-6 text-center flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <span className="text-6xl font-black text-foreground">59€</span>
                      <span className="text-xl text-muted-foreground font-semibold">/mes</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-3 bg-muted/50 py-2 px-3 rounded-lg border border-border/50">
                      <span className="font-semibold text-foreground">99€</span> coste único de configuración y puesta a punto.
                    </div>
                  </div>
                  
                  <a href="#contacto" className="w-full block text-center py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition shadow-lg hover:shadow-primary/25">
                    Solicitar Demo
                  </a>
                  <p className="text-xs text-muted-foreground mt-4">Sin permanencia. Cancela cuando quieras.</p>
                </div>
              </div>
            </div>
          </Card3DWrapper>
        </div>
        
        
        {/* Catálogo de Add-ons */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6 px-2">
            <h3 className="text-2xl font-bold">Catálogo de Add-ons Opcionales</h3>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Hardware Inteligente</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Addon 1: Reseñas */}
            <div className="bg-card border border-border hover:border-primary/30 rounded-3xl p-6 flex flex-col relative shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-center items-center h-40 mb-6 bg-white rounded-2xl relative overflow-hidden p-4">
                {placaImages.map((src, idx) => (
                  <img 
                    key={src}
                    src={src} 
                    alt={`Placa NFC Reseñas ${idx + 1}`} 
                    className={`absolute inset-0 w-full h-full object-contain p-4 transition-all duration-1000 group-hover:scale-110 ${idx === placaIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ 
                      filter: idx === 0 ? 'drop-shadow(-5px 10px 15px rgba(0,0,0,0.15))' : 'none',
                      mixBlendMode: 'multiply'
                    }}
                  />
                ))}
              </div>
              <h4 className="text-xl font-bold mb-2">Placa NFC Reseñas</h4>
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-primary">35,50 €</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase bg-muted px-2 py-0.5 rounded-sm">1 unidad</span>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase ml-1">Envío incl.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-primary/80">51,90 €</span>
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-sm">Pack 2 unidades</span>
                </div>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">🌎 Disponible en Español e Inglés</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Multiplica tus reseñas de 5 estrellas en piloto automático. Los clientes solo tienen que acercar el móvil.
              </p>
              <button onClick={() => setActiveAddonModal('placa_nfc')} className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2.5 rounded-xl mt-auto">
                <Info className="w-4 h-4" /> Detalles
              </button>
            </div>

            {/* Addon 2: Tarjeta Reseñas (Vertical) */}
            <div className="bg-card border border-border hover:border-primary/30 rounded-3xl p-6 flex flex-col relative shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-center items-center h-40 mb-6 bg-white rounded-2xl relative overflow-hidden p-4">
                <img 
                  src="/nfc-review-card-vertical.jpg" 
                  alt="Tarjeta NFC de Reseñas" 
                  className="w-auto h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Tarjeta NFC Reseñas</h4>
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-primary">17,90 €</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase bg-muted px-2 py-0.5 rounded-sm">1 unidad</span>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase ml-1">Envío incl.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-primary/80">64,90 €</span>
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-sm">Pack 4 unidades (Equipo)</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Lleva las reseñas en tu bolsillo. Acerca esta tarjeta al móvil de tus clientes en cualquier lugar para que te valoren.
              </p>
              <button onClick={() => setActiveAddonModal('tarjeta_nfc')} className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2.5 rounded-xl mt-auto">
                <Info className="w-4 h-4" /> Detalles
              </button>
            </div>

            {/* Addon 3: Tarjeta Reseñas (Black) */}
            <div className="bg-card border border-border hover:border-primary/30 rounded-3xl p-6 flex flex-col relative shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-center items-center h-40 mb-6 bg-white rounded-2xl relative overflow-hidden p-4">
                <img 
                  src="/nfc-review-card-black.png" 
                  alt="Tarjeta NFC Reseñas (Black Edition)" 
                  className="w-auto h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Tarjeta NFC Reseñas</h4>
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-primary">17,90 €</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase bg-muted px-2 py-0.5 rounded-sm">1 unidad</span>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase ml-1">Envío incl.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-primary/80">64,90 €</span>
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-sm">Pack 4 unidades (Equipo)</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Lleva las reseñas en tu bolsillo. Acerca esta tarjeta al móvil de tus clientes en cualquier lugar para que te valoren.
              </p>
              <button onClick={() => setActiveAddonModal('social_nfc')} className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2.5 rounded-xl mt-auto">
                <Info className="w-4 h-4" /> Detalles
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* NFC Modals */}
      {activeAddonModal && ADDON_MODALS[activeAddonModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm" onClick={() => setActiveAddonModal(null)}>
          <div className="bg-card border border-border shadow-2xl rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveAddonModal(null)} className="absolute top-4 right-4 p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition">
              <X className="w-5 h-5" />
            </button>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-2">{ADDON_MODALS[activeAddonModal].title}</h3>
              <p className="text-xl font-black text-primary mb-1">
                {ADDON_MODALS[activeAddonModal].price} <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-sm ml-2">{ADDON_MODALS[activeAddonModal].subtitle}</span>
              </p>
              
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-foreground font-semibold text-lg text-balance">{ADDON_MODALS[activeAddonModal].hook}</p>
                
                {ADDON_MODALS[activeAddonModal].paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                
                <p className="italic text-foreground border-l-4 border-primary/30 pl-4 py-1">{ADDON_MODALS[activeAddonModal].quote}</p>
                
                <div className="bg-muted/30 rounded-2xl p-6 mt-8 border border-border/50">
                  <h4 className="font-bold text-foreground mb-4">Incluye:</h4>
                  <ul className="space-y-3">
                    {ADDON_MODALS[activeAddonModal].features.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm items-start">
                        <span className="shrink-0 mt-0.5">✅</span> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="font-semibold text-foreground text-center mt-6 text-balance text-lg">{ADDON_MODALS[activeAddonModal].conclusion}</p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a href="#contacto" onClick={() => setActiveAddonModal(null)} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] transition">
                  Añadir a mi pedido <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function FAQ() {
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
    <section id="faq" className="py-24 lg:py-32 px-6 lg:px-10" aria-labelledby="faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
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
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact({ defaultSector = "" }: { defaultSector?: string }) {
  const [sent, setSent] = useState(false);
  const [tipoNegocio, setTipoNegocio] = useState(defaultSector);
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
            onSubmit={(e) => { 
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              
              // We change button text to show it's loading
              const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
              if (btn) btn.innerText = "Enviando...";
              
              fetch("https://formsubmit.co/ajax/info@potenciatunegocio.eu", {
                  method: "POST",
                  headers: { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify(Object.fromEntries(formData))
              })
              .then(() => setSent(true))
              .catch(() => setSent(true));
            }}
            className="bg-card border border-border rounded-3xl p-6 lg:p-10 text-left space-y-4 shadow-card"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="Nueva propuesta desde Potencia tu Negocio" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="nombre" required placeholder="Nombre" aria-label="Nombre" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
              <input name="email" required type="email" placeholder="Email" aria-label="Email" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
              <input name="telefono" required type="tel" placeholder="Teléfono" aria-label="Teléfono" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
              
              <select
                name="tipoNegocio"
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
                <option value="Taller mecánico">Taller mecánico</option>
                <option value="Peluquería">Peluquería</option>
                <option value="Centro de estética">Centro de estética</option>
                <option value="Fotografía">Fotografía</option>
                <option value="Joyería">Joyería</option>
                <option value="Gestoría">Gestoría</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            {tipoNegocio === "Otro" && (
              <input name="otroNegocio" required placeholder="Especifica qué tipo de negocio" aria-label="Especifica qué tipo de negocio" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition animate-in fade-in slide-in-from-top-2" />
            )}
            <textarea name="mensaje" required rows={4} aria-label="Mensaje" placeholder="Cuentanos aqui un poco sobre tu propuesta" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition resize-none" />
            <button type="submit" className="w-full py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              Quiero más clientes <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-muted-foreground pt-2">
              ✅ Respuesta en menos de 24 h · ✅ Sin compromiso · ✅ Propuesta gratuita y personalizada para tu sector
            </p>
          </form>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="mailto:info@potenciatunegocio.eu" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <Mail className="w-4 h-4" aria-hidden="true" /> info@potenciatunegocio.eu
          </a>
          <a href="https://wa.me/34644905837" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-medium hover:bg-[#25D366]/25 transition">
            <Phone className="w-4 h-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}


function IndustryProblems() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      id: "hosteleria",
      title: "Hostelería",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      pain: "Menús en PDF que los clientes no pueden leer bien en el móvil, que Google no indexa y pagar un 20% de comisión a plataformas externas como JustEat o TheFork por cada reserva.",
      solution: "Carta digital nativa y responsiva (Google indexa cada uno de tus platos) y un botón de reservas automático conectado a tu WhatsApp. El 100% de los ingresos se quedan en tu bolsillo.",
    },
    {
      id: "clinicas",
      title: "Clínicas y Salud",
      icon: <Stethoscope className="w-5 h-5" />,
      pain: "Los pacientes buscan en Google Maps 'dentista cerca de mí' o 'fisioterapeuta' y eligen a la competencia porque tienen una ficha más optimizada y con más reseñas que tú.",
      solution: "Optimizamos tu ficha de Google al máximo para aumentar tu visibilidad en el mapa. Incluimos placas NFC de diseño en tu recepción para que los pacientes multipliquen tus reseñas positivas con solo acercar el móvil.",
    },
    {
      id: "servicios",
      title: "Servicios y Reformas",
      icon: <Wrench className="w-5 h-5" />,
      pain: "Pasar horas haciendo presupuestos para clientes que solo buscan 'lo más barato' porque tu presencia digital actual no transmite autoridad ni justifica tus precios.",
      solution: "Una web corporativa Premium que transmite máxima autoridad desde el segundo 1. Añadimos formularios inteligentes para cualificar a los curiosos antes de que te hagan perder el tiempo al teléfono.",
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-muted/30 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
            No hacemos webs genéricas. <br/><span className="text-primary">Resolvemos los problemas de tu sector.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Elige tu industria y descubre por qué nuestro método deja obsoleta a tu competencia local.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Tabs Selector */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                  activeTab === idx 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]" 
                    : "bg-background border border-border hover:border-primary/50 text-foreground hover:bg-muted/50"
                }`}
              >
                <div className={`p-3 rounded-full ${activeTab === idx ? "bg-white/20" : "bg-muted"}`}>
                  {tab.icon}
                </div>
                <span className="font-semibold text-lg">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8">
            <div className="bg-background rounded-3xl border border-border p-8 md:p-12 shadow-sm relative overflow-hidden transition-all duration-500 min-h-[380px] flex flex-col justify-center">
              
              {/* Background gradient hint based on active tab */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-10">
                {/* Problema */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                      <X className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">El problema de tu sector</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed pl-11">
                    {tabs[activeTab].pain}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>

                {/* Solución */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Nuestra solución</h3>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed pl-11 font-medium">
                    {tabs[activeTab].solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
          href="https://g.page/r/Cf57ah10MZfnEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Valóranos en Google"
          className="group flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span className="text-lg font-bold text-foreground tracking-tight">
              Google <span className="text-[#FABB05]">Reviews</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-7 h-7 text-[#FABB05] drop-shadow-sm"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-sm">
            <p className="text-foreground font-medium">¿Trabajamos juntos?</p>
            <p className="text-muted-foreground group-hover:text-foreground transition">
              Valóranos en Google →
            </p>
          </div>
        </a>
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10 border-b border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h4 className="text-foreground font-semibold mb-6">Servicios</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/seo-local" className="hover:text-primary transition">SEO Local y Mapas</Link></li>
            <li><Link to="/google-business-profile" className="hover:text-primary transition">Google Business Profile</Link></li>
            <li><Link to="/mantenimiento-web" className="hover:text-primary transition">Mantenimiento Web</Link></li>
            <li><Link to="/diseno-web-seo" className="hover:text-primary transition">Diseño Web SEO</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="text-foreground font-semibold mb-6">Agencias Locales</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/diseno-web/sevilla" className="hover:text-primary transition">Diseño Web Sevilla</Link></li>
            <li><Link to="/diseno-web/malaga" className="hover:text-primary transition">Diseño Web Málaga</Link></li>
            <li><Link to="/diseno-web/granada" className="hover:text-primary transition">Diseño Web Granada</Link></li>
            <li><Link to="/seo-local/madrid" className="hover:text-primary transition">SEO Local Madrid</Link></li>
            <li><Link to="/seo-local/barcelona" className="hover:text-primary transition">SEO Local Barcelona</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="text-foreground font-semibold mb-6">Sectores (I)</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/web-para-restaurantes" className="hover:text-primary transition">Web para Restaurantes</Link></li>
            <li><Link to="/web-para-clinicas-dentales" className="hover:text-primary transition">Web Clínicas Dentales</Link></li>
            <li><Link to="/web-para-abogados" className="hover:text-primary transition">Web para Abogados</Link></li>
            <li><Link to="/web-para-centros-estetica" className="hover:text-primary transition">Web Centros Estética</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="text-foreground font-semibold mb-6">Sectores (II)</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/web-para-talleres-mecanicos" className="hover:text-primary transition">Web para Talleres</Link></li>
            <li><Link to="/web-para-veterinarias" className="hover:text-primary transition">Web para Veterinarias</Link></li>
            <li><Link to="/web-para-peluquerias" className="hover:text-primary transition">Web para Peluquerías</Link></li>
            <li><Link to="/web-para-gestorias" className="hover:text-primary transition">Web para Gestorías</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-1">
          <h4 className="text-foreground font-semibold mb-6">Empresa</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/blog" className="hover:text-primary transition">Blog y Casos de Estudio</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition">Nuestro Portfolio</Link></li>
            <li><a href="/#precios" className="hover:text-primary transition">Planes y Precios</a></li>
            <li><a href="/#faq" className="hover:text-primary transition">Preguntas Frecuentes</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="font-bold text-foreground flex items-center gap-2">
          <img src="/logo.png" alt="Logo Potencia tu Negocio" loading="lazy" decoding="async" className="w-6 h-6 object-contain rounded-sm invert grayscale brightness-200 contrast-125 mix-blend-screen opacity-80" />
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

