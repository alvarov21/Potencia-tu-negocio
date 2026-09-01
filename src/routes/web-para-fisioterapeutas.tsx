import { createFileRoute } from '@tanstack/react-router'
import { SectorPillar, VALID_SECTORS } from '../components/templates/SectorPillarTemplate'

export const Route = createFileRoute('/web-para-fisioterapeutas')({
  head: () => {
    const sectorName = VALID_SECTORS["fisioterapeutas"];
    return {
      meta: [
        { title: `Diseño web corporativo para ${sectorName} | Potencia tu Negocio` },
        { name: "description", content: `Servicio especializado de diseño web con IA para ${sectorName}. Atrae más clientes, automatiza tus reservas y domina tu sector en Google.` },
      ]
    };
  },
  component: () => <SectorPillar sector="fisioterapeutas" />
})
