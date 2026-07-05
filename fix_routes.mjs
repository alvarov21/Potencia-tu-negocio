import fs from 'fs';
import path from 'path';

const routes = [
  { file: 'diseno-tienda-online.tsx', component: 'DisenoTiendaOnline', kw: 'diseño tienda online' },
  { file: 'diseno-web-seo.tsx', component: 'DisenoWebSeo', kw: 'diseño web seo' },
  { file: 'landing-page.tsx', component: 'LandingPage', kw: 'diseño de landing page' },
  { file: 'web-con-reservas.tsx', component: 'WebConReservas', kw: 'pagina web de reservas' },
  { file: 'web-para-clinicas-dentales.tsx', component: 'WebParaClinicasDentales', kw: 'diseño web para clinicas dentales' },
  { file: 'web-para-peluquerias.tsx', component: 'WebParaPeluquerias', kw: 'paginas web para peluquerias' },
  { file: 'web-para-restaurantes.tsx', component: 'WebParaRestaurantes', kw: 'diseño web para restaurantes' }
];

for (const route of routes) {
  const content = `import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/${route.file.replace('.tsx', '')}")({
  head: () => ({
    meta: [
      { title: "${route.kw} | Potencia tu Negocio" },
      { name: "description", content: "Expertos en ${route.kw} para captar más clientes." }
    ]
  }),
  component: ${route.component},
});

function ${route.component}() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 capitalize">
          ${route.kw} profesional
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          Atrae y convierte más clientes con nuestro servicio de ${route.kw}.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:scale-[1.02] transition text-white">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join('src/routes', route.file), content);
}
