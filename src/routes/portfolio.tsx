import { createFileRoute, Link } from '@tanstack/react-router'
import { Portfolio3D } from '../components/Portfolio3D'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 flex flex-col items-center">
      <div className="w-full mb-12">
        <Portfolio3D />
      </div>
      
      <div className="text-center">
        <Link to="/" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition hover:scale-105">
          <ArrowRight className="w-4 h-4 rotate-180" /> Volver al inicio
        </Link>
      </div>
    </div>
  )
}
