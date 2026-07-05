import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/web-para-restaurantes")({
  head: () => ({
    meta: [
      { title: "diseño web para restaurantes | Potencia tu Negocio" },
      { name: "description", content: "Expertos en diseño web para restaurantes para captar más clientes." }
    ]
  }),
  component: WebParaRestaurantes,
});

function WebParaRestaurantes() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 capitalize">
          diseño web para restaurantes profesional
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          Atrae y convierte más clientes con nuestro servicio de diseño web para restaurantes.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-cta font-semibold shadow-glow hover:scale-[1.02] transition text-white">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
