import { createFileRoute, Link } from '@tanstack/react-router'
import { Portfolio3D } from '../components/Portfolio3D'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/portfolio/')({
  head: () => ({
    meta: [
      { title: 'Portfolio de Demos | Potencia tu negocio' },
      { name: 'description', content: 'Explora nuestras demos funcionales de diseño web para negocios locales.' }
    ]
  }),
  component: Portfolio,
})

const publishedDemos = [
  { id: "veterinaria-malaga", title: "Demo · Clínica Veterinaria" },
  { id: "estetimagen", title: "Demo · Centro de Estética" },
  { id: "picoteo", title: "Demo · Restaurante" },
  { id: "padre-pio", title: "Demo · Taberna Tradicional" }
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6 text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight text-foreground">Nuestro Portfolio de Demos</h1>
        <p className="text-muted-foreground text-lg mb-8">Navega por las maquetas 3D o visita las demos publicadas en detalle:</p>
        <ul className="flex flex-wrap justify-center gap-4">
          {publishedDemos.map(demo => (
            <li key={demo.id}>
              <Link to={`/portfolio/${demo.id}`} className="inline-block px-4 py-2 bg-muted hover:bg-primary/10 hover:text-primary rounded-lg text-foreground font-medium transition-colors">
                {demo.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full mb-12">
        <Portfolio3D />
      </div>
      
      <div className="text-center">
        <Link to="/" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition hover:scale-105">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
      </div>
    </div>
  )
}
