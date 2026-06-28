import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search, Calendar, UtensilsCrossed, MonitorSmartphone, MessageCircle,
  Star, Lock, FileText, ArrowRight, Check, Plus, Minus, Mail, Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Potencia tu negocio · Webs con IA para restaurantes" },
      { name: "description", content: "Creamos webs profesionales con IA para restaurantes. Listas en menos de 7 días, con SEO, reservas y carta digital." },
      { property: "og:title", content: "Potencia tu negocio · Webs con IA para restaurantes" },
      { property: "og:description", content: "Webs profesionales con IA para restaurantes. Listas en días, no en meses." },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#herramientas", label: "Herramientas" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

const TOOLS = [
  "Google Maps", "Google Business", "TripAdvisor", "Lovable", "GitHub",
  "Vercel", "Hostinger", "Claude AI", "Google Stitch", "Antigravity",
  "WhatsApp Business", "Instagram", "Facebook", "Stripe", "Supabase",
];

const STEPS = [
  { icon: "🔍", title: "Recopilamos tu info", desc: "Analizamos tu negocio en Google Maps y hablamos contigo para entender tu identidad." },
  { icon: "🤖", title: "Diseñamos con IA", desc: "Creamos el diseño visual y el contenido con las mejores herramientas de inteligencia artificial." },
  { icon: "✨", title: "Personalizamos", desc: "Ajustamos cada detalle: carta, reservas, fotos, colores y textos legales incluidos." },
  { icon: "🚀", title: "Publicamos", desc: "Tu web en línea con dominio propio y HTTPS en menos de 7 días." },
];

const FEATURES = [
  { icon: Search, title: "SEO optimizado", desc: "Apareces en Google cuando te buscan." },
  { icon: Calendar, title: "Reservas automáticas", desc: "Conectado a WhatsApp o email." },
  { icon: UtensilsCrossed, title: "Carta digital", desc: "Con fotos, precios y categorías." },
  { icon: MonitorSmartphone, title: "Diseño responsive", desc: "Perfecta en móvil, tablet y PC." },
  { icon: MessageCircle, title: "Botón WhatsApp", desc: "Tus clientes contactan en un toque." },
  { icon: Star, title: "Reseñas de Google", desc: "Valoraciones actualizadas automáticamente." },
  { icon: Lock, title: "HTTPS seguro", desc: "Candado verde de seguridad incluido." },
  { icon: FileText, title: "Textos legales", desc: "Aviso legal, privacidad y cookies." },
];

const FAQS = [
  { q: "¿Cuánto tarda en estar lista mi web?", a: "Entre 3 y 7 días desde que nos facilitas la información de tu negocio." },
  { q: "¿Necesito saber de tecnología?", a: "No. Nos encargamos de todo. Tú solo nos dices cómo quieres la web." },
  { q: "¿Puedo hacer cambios después?", a: "Con el Plan Independencia puedes editar la web tú mismo. Con el Plan Mantenimiento nos encargas los cambios y los hacemos nosotros." },
  { q: "¿El dominio es mío para siempre?", a: "En el Plan Independencia el dominio pasa a ser tuyo desde el primer día. En el Plan Mantenimiento lo gestionamos nosotros mientras dure el servicio." },
  { q: "¿Aceptáis cualquier tipo de restaurante?", a: "Sí. Bares, tabernas, restaurantes de alta cocina, pizzerías, hamburgueserías... cualquier negocio de hostelería." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Features />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-base tracking-tight">
          Potencia <span className="text-primary">tu negocio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
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
      {/* concentric rings decoration */}
      <div className="absolute top-1/2 -right-40 lg:-right-20 -translate-y-1/2 pointer-events-none">
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

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
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
            Agencia de diseño web con IA
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Tu restaurante merece una web que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">vende</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Creamos webs profesionales con inteligencia artificial para restaurantes. Listas en días, no en meses.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#precios" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:scale-[1.02] transition">
              Ver planes <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#nosotros" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition">
              Ver ejemplo
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
    <section id="herramientas" className="border-y border-border bg-background/50 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-8 text-sm font-medium text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="servicios" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Cómo lo hacemos</h2>
          <p className="text-muted-foreground text-lg">De cero a online en menos de una semana</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((s, i) => (
            <div key={i} className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-xs font-mono text-primary">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-primary/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Todo lo que necesitas, incluido</h2>
          <p className="text-muted-foreground text-lg">Sin extras ni cargos sorpresa.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/60 hover:shadow-glow transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
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
            Diseño artesanal con la potencia de la IA
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            En <strong className="text-foreground">Potencia tu negocio</strong> creemos que cada restaurante merece una presencia digital profesional, sin importar su tamaño. Combinamos inteligencia artificial de última generación con diseño artesanal para crear webs que no solo son bonitas, sino que convierten visitantes en clientes. Somos especialistas en el sector de la hostelería y conocemos sus necesidades mejor que nadie.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { v: "< 7 días", l: "Tiempo de entrega" },
              { v: "100%", l: "Personalización" },
              { v: "24/7", l: "Soporte Plan Pro" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div className="absolute inset-0 bg-gradient-glow rounded-full opacity-60" />
          {[0, 1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-accent/40"
              style={{ transform: `scale(${1 - i * 0.18})`, opacity: 1 - i * 0.15 }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-cta shadow-glow flex items-center justify-center text-4xl">
              ⚡
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Elige tu plan</h2>
          <p className="text-muted-foreground text-lg">Sin letra pequeña. Sin sorpresas.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Pago único</span>
            <h3 className="text-2xl font-bold mb-6">Plan Independencia</h3>
            <div className="mb-6">
              <span className="text-5xl font-black">375€</span>
              <span className="text-muted-foreground ml-2">una sola vez</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm flex-1">
              {[
                "Desarrollo web completo con IA",
                "Diseño totalmente personalizado",
                "Dominio propio incluido (pasa a ser tuyo)",
                "SEO optimizado desde el primer día",
                "Sistema de reservas integrado",
                "Carta digital con fotos y precios",
                "Galería, reseñas y WhatsApp",
                "Textos legales completos",
              ].map((f, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic mb-5">Tú gestionas la web de forma autónoma</p>
            <a href="#contacto" className="block text-center py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/5 transition">
              Contratar ahora
            </a>
          </div>

          {/* Plan 2 - highlighted */}
          <div className="relative bg-card border-2 border-primary rounded-3xl p-8 lg:p-10 flex flex-col shadow-glow">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-cta text-xs font-bold uppercase tracking-wider">
              Más elegido
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Suscripción</span>
            <h3 className="text-2xl font-bold mb-6">Plan Mantenimiento</h3>
            <div className="mb-6">
              <span className="text-5xl font-black">345€</span>
              <span className="text-muted-foreground ml-2">inicio</span>
              <div className="text-sm text-muted-foreground mt-1">+ 45€/mes</div>
            </div>
            <ul className="space-y-3 mb-8 text-sm flex-1">
              {[
                "Todo lo del Plan Independencia",
                "Mantenimiento mensual incluido",
                "Cambios y actualizaciones ilimitados",
                "Dominio pagado por nosotros",
                "Actualización de carta y horarios",
                "Soporte prioritario en español",
                "Copias de seguridad automáticas",
                "Hosting gestionado por nosotros",
              ].map((f, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic mb-5">Permanencia mínima 3 meses</p>
            <a href="#contacto" className="block text-center py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:opacity-90 transition">
              Contratar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-center">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition"
                >
                  <span className="font-semibold">{f.q}</span>
                  {isOpen ? <Minus className="w-4 h-4 text-primary flex-shrink-0" /> : <Plus className="w-4 h-4 text-primary flex-shrink-0" />}
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
  return (
    <section id="contacto" className="relative py-24 lg:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.05]">
          ¿Listo para destacar online?
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Escríbenos y te preparamos una propuesta personalizada sin compromiso.
        </p>
        {sent ? (
          <div className="bg-card border border-primary/50 rounded-2xl p-10 shadow-glow">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
            <p className="text-muted-foreground">Te contactaremos en menos de 24 horas.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-3xl p-6 lg:p-10 text-left space-y-4 shadow-card"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Nombre" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
              <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
            </div>
            <input required placeholder="Nombre del restaurante" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition" />
            <textarea required rows={4} placeholder="Cuéntanos sobre tu proyecto" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition resize-none" />
            <button type="submit" className="w-full py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              Enviar mensaje <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="mailto:info@potenciatunegocio.es" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <Mail className="w-4 h-4" /> info@potenciatunegocio.es
          </a>
          <a href="https://wa.me/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-medium hover:bg-[#25D366]/25 transition">
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="font-bold text-foreground">
          Potencia <span className="text-primary">tu negocio</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="#" className="hover:text-foreground transition">Aviso Legal</a>
          <a href="#" className="hover:text-foreground transition">Política de Privacidad</a>
          <a href="#" className="hover:text-foreground transition">Política de Cookies</a>
        </div>
        <div className="text-xs text-center lg:text-right">
          © 2026 Potencia tu negocio<br />
          <span className="text-muted-foreground/70">Diseñado con IA · Hecho con 💙 en España</span>
        </div>
      </div>
    </footer>
  );
}
