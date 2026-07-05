import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog SEO para negocios locales | Potencia tu Negocio" },
      { name: "description", content: "Consejos, estrategias y guías sobre diseño web y SEO local para restaurantes, clínicas y negocios locales." }
    ]
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10 pb-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          Nuestro Blog
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
          Consejos para potenciar tu <span className="text-primary">negocio local</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Todo lo que necesitas saber sobre diseño web, SEO local y captación de clientes en internet, explicado sin tecnicismos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://neoattack.com/blog/cuanto-cuesta-una-pagina-web/" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Precios</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Cuánto cuesta una página web en España en 2026
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Descubre los precios reales del mercado y qué incluye cada plan. Guía completa para dueños de negocios locales.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo externo <ArrowRight className="w-4 h-4" />
            </div>
          </a>
          
          <a href="https://www.theforkmanager.com/es-es/blog/marketing-restaurantes/pagina-web-restaurante" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Restaurantes</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Cuánto cuesta una página web para un restaurante
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              ¿Quieres saber cuánto cuesta crear la página web de tu bar o restaurante? Descubre precios y cómo evitar comisiones.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo externo <ArrowRight className="w-4 h-4" />
            </div>
          </a>
          
          {/* External links as requested */}
          <a href="https://www.hubspot.es/marketing/seo-local" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">SEO Local</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Cómo aparecer en Google con mi negocio (guía básica)
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Aprende qué es el SEO local y cómo hacer que tu negocio destaque en tu ciudad cuando los clientes buscan tus servicios.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo externo <ArrowRight className="w-4 h-4" />
            </div>
          </a>
          
          <a href="https://support.google.com/business/answer/3038063?hl=es" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Google Maps</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Cómo salir en Google Maps gratis: paso a paso
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              La herramienta más potente para captar clientes locales. Descubre cómo configurar tu ficha de empresa correctamente.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo externo <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          <a href="https://raiolanetworks.com/blog/wix-vs-wordpress/" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Plataformas Web</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Página web gratis vs profesional: lo que Wix no te cuenta
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Las verdaderas limitaciones de usar constructores web gratuitos para tu negocio, desde el SEO hasta la falta de control.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo externo <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          <a href="https://www.semrush.com/blog/es/por-que-mi-web-no-aparece-en-google/" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Penalizaciones</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Por qué mi negocio no aparece en Google
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Repasamos las causas técnicas y estratégicas más comunes que hacen que tu página web sea invisible en los buscadores.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo externo <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        <div className="mt-16 text-center">
          <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border font-semibold hover:bg-white/5 transition">
            Volver a la Home
          </Link>
        </div>
      </div>
    </main>
  );
}
