import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Chatbot } from "../components/Chatbot";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página no cargó
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Prueba a refrescar o vuelve al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: (ctx) => {
    // Es 404 si ninguna ruta coincide (solo el root) o si alguna ruta lanzó notFound()
    // (p. ej. /portfolio/slug-inexistente o /diseno-web/ciudad-inexistente).
    const is404 =
      (ctx.matches.length === 1 && ctx.matches[0].routeId === '__root__') ||
      ctx.matches.some((m: any) => m.status === 'notFound' || m._notFound === true || m.globalNotFound === true);
    const lastMatch = ctx.matches[ctx.matches.length - 1];
    const rawPath = lastMatch ? lastMatch.pathname : "";
    const path = rawPath === "/" ? "" : rawPath.replace(/\/$/, "");
    const canonicalUrl = `https://potenciatunegocio.eu${path}`;

    const meta: any[] = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Diseño Web Profesional para Negocios Locales | Potencia tu negocio" },
      { name: "description", content: "Diseño de páginas web con inteligencia artificial para negocios locales. Listas en 48 horas, desde 295 €. Posicionamiento SEO incluido en toda España." },
      { property: "og:title", content: "Diseño Web Profesional para Negocios Locales | Potencia tu negocio" },
      { property: "og:description", content: "Diseño de páginas web con inteligencia artificial para negocios locales. Listas en 48 horas, desde 295 €. Posicionamiento SEO incluido." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Potencia tu negocio" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: "https://potenciatunegocio.eu/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diseño Web Profesional para Negocios Locales | Potencia tu negocio" },
      { name: "twitter:description", content: "Diseño de páginas web con inteligencia artificial para negocios locales. Listas en 48 horas, desde 295 €." },
      { name: "twitter:image", content: "https://potenciatunegocio.eu/og-image.png" },
    ];

    const links: any[] = [
      { rel: "icon", type: "image/png", href: "/favicon.png", sizes: "48x48" },
      { rel: "icon", type: "image/png", href: "/favicon-192.png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "stylesheet", href: appCss },
    ];

    if (is404) {
      meta.push({ name: "robots", content: "noindex" });
    } else {
      meta.push({ property: "og:url", content: canonicalUrl });
      links.push({ rel: "canonical", href: canonicalUrl });
    }

    return { meta, links };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Potencia tu negocio",
    "description": "Agencia de diseño web con inteligencia artificial para negocios locales en España. Diseño web profesional para restaurantes, clínicas, talleres y pymes.",
    "email": "info@potenciatunegocio.eu",
    "url": "https://potenciatunegocio.eu",
    "areaServed": "ES",
    "priceRange": "295€-675€",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Potencia tu negocio",
    "url": "https://potenciatunegocio.eu"
  };

  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        {children}
        <Chatbot />
        <Scripts />
      </body>
    </html>
  );
}

import { CookieConsentProvider } from '../context/CookieConsentContext';
import { CookieBanner } from '../components/CookieBanner';
import { TrackingScripts } from '../components/TrackingScripts';

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CookieConsentProvider>
        <TrackingScripts />
        <Outlet />
        <CookieBanner />
      </CookieConsentProvider>
    </QueryClientProvider>
  );
}
