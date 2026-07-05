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
          <Link to="/blog/cuanto-cuesta-pagina-web-espana" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Precios</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Cuánto cuesta una página web en España en 2026
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Descubre los precios reales del mercado y qué incluye cada plan. Guía completa para dueños de negocios locales.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
          <Link to="/blog/cuanto-cuesta-pagina-web-restaurante" className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition shadow-sm block">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Restaurantes</span>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Cuánto cuesta una página web para un restaurante
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              ¿Quieres saber cuánto cuesta crear la página web de tu bar o restaurante? Descubre precios y cómo evitar comisiones.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              Leer artículo <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
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
