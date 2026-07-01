import { createFileRoute, Link } from '@tanstack/react-router'
import { ExternalLink, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 lg:px-10 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">
        <header className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4 inline-block">Casos de Éxito</span>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">Nuestro Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo transformamos la presencia digital de los negocios locales. Explora algunos de nuestros últimos proyectos reales.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Opción 1 - Picoteo */}
          <a 
            href="https://picoteo-murex.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow flex flex-col items-center text-center isolate"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
              <span className="text-2xl">🍽️</span>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3">Opción 1 - Picoteo</h2>
            <p className="text-muted-foreground mb-8">
              Diseño web moderno y dinámico para restaurante, enfocado en mostrar la carta y facilitar reservas con una estética visual muy cuidada.
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Visitar proyecto <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Opción 2 - Taberna Padre Pío */}
          <a 
            href="https://padre-pio-web-experience.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-glow flex flex-col items-center text-center isolate"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
              <span className="text-2xl">🍷</span>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3">Opción 2 - Taberna Padre Pío</h2>
            <p className="text-muted-foreground mb-8">
              Experiencia digital envolvente que transmite la tradición y calidad de una auténtica taberna, con integración de servicios para clientes.
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Visitar proyecto <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>
        
        <div className="text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition hover:scale-105">
            <ArrowRight className="w-4 h-4 rotate-180" /> Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
