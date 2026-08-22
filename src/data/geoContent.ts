type CityData = {
  barrios: string[];
  adjetivo: string;
  zona_centro: string;
  referencia: string;
};

const CITIES_DATA: Record<string, CityData> = {
  madrid: {
    barrios: ["Malasaña", "Chamberí", "Salamanca", "La Latina"],
    adjetivo: "madrileño",
    zona_centro: "la Puerta del Sol",
    referencia: "la M-30"
  },
  barcelona: {
    barrios: ["Gràcia", "L'Eixample", "El Born", "Poblenou"],
    adjetivo: "barcelonés",
    zona_centro: "Plaza Catalunya",
    referencia: "la Diagonal"
  },
  sevilla: {
    barrios: ["Triana", "Nervión", "Los Remedios", "la Macarena"],
    adjetivo: "sevillano",
    zona_centro: "la Giralda",
    referencia: "el Guadalquivir"
  },
  valencia: {
    barrios: ["Ruzafa", "El Carmen", "Benimaclet", "Campanar"],
    adjetivo: "valenciano",
    zona_centro: "la Ciudad de las Artes",
    referencia: "el Turia"
  },
  cordoba: {
    barrios: ["Ciudad Jardín", "Santa Rosa", "El Brillante", "La Fuensanta"],
    adjetivo: "cordobés",
    zona_centro: "la Mezquita",
    referencia: "el centro histórico"
  },
  malaga: {
    barrios: ["Teatinos", "El Palo", "La Malagueta", "Huelin"],
    adjetivo: "malagueño",
    zona_centro: "la Calle Larios",
    referencia: "la Costa del Sol"
  },
  zaragoza: {
    barrios: ["Delicias", "el Actur", "El Rabal", "San José"],
    adjetivo: "zaragozano",
    zona_centro: "la plaza del Pilar",
    referencia: "la ribera del Ebro"
  },
  bilbao: {
    barrios: ["Deusto", "Indautxu", "el Casco Viejo", "Santutxu"],
    adjetivo: "bilbaíno",
    zona_centro: "el Guggenheim",
    referencia: "la Ría"
  },
  alicante: {
    barrios: ["San Blas", "Carolinas", "Playa de San Juan", "Benalúa"],
    adjetivo: "alicantino",
    zona_centro: "el Castillo de Santa Bárbara",
    referencia: "la Explanada"
  },
  murcia: {
    barrios: ["El Carmen", "Vistalegre", "La Flota", "San Andrés"],
    adjetivo: "murciano",
    zona_centro: "la Plaza de las Flores",
    referencia: "el Segura"
  },
  granada: {
    barrios: ["el Albaicín", "el Realejo", "el Zaidín", "la Chana"],
    adjetivo: "granadino",
    zona_centro: "la Catedral",
    referencia: "la Alhambra"
  },
  jaen: {
    barrios: ["el Bulevar", "Peñamefécit", "Las Fuentezuelas", "San Ildefonso"],
    adjetivo: "jiennense",
    zona_centro: "la Catedral",
    referencia: "el Castillo de Santa Catalina"
  },
  cadiz: {
    barrios: ["La Viña", "El Pópulo", "Puerta Tierra", "Bahía Blanca"],
    adjetivo: "gaditano",
    zona_centro: "la Plaza de las Flores",
    referencia: "la Caleta"
  },
  huelva: {
    barrios: ["Isla Chica", "Pescadería", "El Molino", "Zafra"],
    adjetivo: "onubense",
    zona_centro: "la Plaza de las Monjas",
    referencia: "la Ría"
  },
  almeria: {
    barrios: ["El Zapillo", "Los Ángeles", "Nueva Andalucía", "Ciudad Jardín"],
    adjetivo: "almeriense",
    zona_centro: "el Paseo de Almería",
    referencia: "la Alcazaba"
  }
};

const FALLBACK_DATA: CityData = {
  barrios: ["el centro", "los barrios principales", "tu zona", "las afueras"],
  adjetivo: "local",
  zona_centro: "el centro",
  referencia: "tu ciudad"
};

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function getGeoContent(sector: string, city: string) {
  const cityKey = city.toLowerCase();
  const data = CITIES_DATA[cityKey] || FALLBACK_DATA;
  const cityName = capitalize(cityKey);

  switch (sector) {
    case "restaurantes":
      return {
        p1: `La hostelería en ${cityName} no perdona. Si la gente busca dónde comer esta noche cerca de ${data.barrios[0]} o un buen menú del día por ${data.barrios[1]} y tu restaurante no sale en la primera página de Google, están yendo a la competencia.`,
        p2: `No necesitas otra web anticuada. Creamos con IA una página atractiva para el público ${data.adjetivo}, integramos tu sistema de reservas y optimizamos tu ficha de Maps para que las reseñas trabajen por ti desde ${data.zona_centro} hasta ${data.referencia}.`,
        p3: `Todo listo en menos de 7 días, sin que tengas que dejar la cocina o la barra para hacer de informático. Posiciónate por delante de los demás locales de ${cityName}.`
      };
    case "clinicas-dentales":
      return {
        p1: `La confianza es clave en la salud. Cuando un paciente en ${cityName} busca "implantes dentales cerca de ${data.barrios[2]}" o una urgencia, la imagen que transmite tu web decide si piden cita o se van a otra clínica por ${data.referencia}.`,
        p2: `Diseñamos webs médicas que inspiran profesionalidad, destacando tus tratamientos más rentables y optimizadas para que los vecinos de ${data.barrios[0]} y alrededores te encuentren primero.`,
        p3: `Consigue más primeras visitas cada mes posicionándote por encima de las grandes franquicias en el mapa ${data.adjetivo}.`
      };
    case "talleres-mecanicos":
      return {
        p1: `Nadie busca un taller por aburrimiento. Cuando un conductor ${data.adjetivo} necesita arreglar el coche en ${data.barrios[1]}, busca urgencia, transparencia y un taller cerca de su ubicación.`,
        p2: `Tu nueva web incluirá un botón directo a WhatsApp para presupuestos rápidos, listado de tus servicios y opiniones verificadas para dar seguridad a los conductores de ${cityName}.`,
        p3: `Convierte tu web en tu mejor comercial y recibe solicitudes de cita previa mientras estás debajo del elevador, atrayendo clientes desde ${data.zona_centro} hasta las afueras.`
      };
    case "peluquerias":
      return {
        p1: `El sector de la belleza en ${cityName} se mueve por imagen. Si tu salón en ${data.barrios[0]} hace trabajos increíbles pero tu presencia en internet es invisible, estás perdiendo clientela todos los días.`,
        p2: `Creamos un portfolio visual impactante para tus mejores peinados y coloraciones, junto con un sistema de reservas integrado si lo necesitas, pensado para el público ${data.adjetivo}.`,
        p3: `Llena tu agenda de citas semanales haciendo que los vecinos de ${data.barrios[2]} y toda la ciudad te descubran directamente en su móvil.`
      };
    case "gestorias":
      return {
        p1: `Las pymes y autónomos de ${cityName} buscan asesores de confianza. Ya sea un comercio en ${data.barrios[3]} o una empresa cerca de ${data.referencia}, tu web debe reflejar absoluta seriedad.`,
        p2: `Desarrollamos una web corporativa que explica claramente tus servicios (fiscal, laboral, contable) y facilita que te contacten en un solo clic desde cualquier punto de la ciudad.`,
        p3: `Deja que el SEO capte clientes para tu despacho ${data.adjetivo} mientras tú te encargas de los números.`
      };
    case "veterinarias":
      return {
        p1: `Cuando una mascota en ${cityName} necesita atención, sus dueños buscan al mejor profesional cerca de casa, ya estén en ${data.barrios[0]} o por ${data.barrios[1]}.`,
        p2: `Diseñamos webs para veterinarias que destacan tus servicios (vacunación, cirugía, urgencias 24h) e incluyen botones directos de llamada para que acudan rápidamente a tu clínica.`,
        p3: `Posiciónate por delante de la competencia local en Google y consigue que más dueños de mascotas en ${cityName} te elijan con total tranquilidad.`
      };
    case "centros-de-estetica":
      return {
        p1: `La primera impresión cuenta. Si tu centro en ${data.barrios[2]} tiene tratamientos innovadores pero no sales en Google o tu web parece antigua, las clientas se irán a la competencia de ${data.zona_centro}.`,
        p2: `Creamos una página elegante y optimizada donde puedes mostrar tus servicios (depilación, faciales, masajes) con listas de precios claras para atraer al público ${data.adjetivo}.`,
        p3: `Atrae nuevas citas cada semana haciendo que descubran tu salón al buscar los mejores tratamientos estéticos en ${cityName}.`
      };
    case "abogados":
      return {
        p1: `La elección de un despacho legal se basa en la autoridad. Cuando alguien cerca de ${data.referencia} necesita asesoría urgente, la primera impresión de tu web decide a quién llama.`,
        p2: `Diseñamos webs corporativas sobrias y seguras para firmas legales en ${cityName}, destacando tus especialidades (penal, laboral, familia) para diferenciarte del resto de despachos de ${data.barrios[1]}.`,
        p3: `Posiciona tu bufete como el referente ${data.adjetivo} y atrae a clientes que necesitan respuestas legales hoy mismo.`
      };
    case "fisioterapeutas":
      return {
        p1: `El dolor no espera. Si alguien en ${data.barrios[0]} sufre una contractura y busca un "fisioterapeuta cerca", tu clínica debe aparecer la primera antes de que busquen en otro barrio de ${cityName}.`,
        p2: `Creamos páginas web funcionales para clínicas de fisioterapia con integración total de reservas y sección detallada de tratamientos deportivos o rehabilitación.`,
        p3: `Llena la agenda de tus especialistas captando pacientes de todo el entorno de ${data.referencia} de forma automática.`
      };
    default:
      return {
        p1: `Si tienes un negocio en ${cityName}, sabes que la competencia es brutal. Cuando alguien busca en Google lo que ofreces cerca de ${data.barrios[0]}, o apareces tú, o aparece tu competencia.`,
        p2: `En Potencia tu Negocio creamos webs con IA diseñadas para captar clientes en el mercado ${data.adjetivo}. Integramos Maps, WhatsApp y SEO local desde ${data.zona_centro} hacia toda la provincia.`,
        p3: `Lo mejor: la primera versión está lista en 48 horas. Te enseñamos cómo queda y, si te gusta, la publicamos para empezar a posicionar en ${cityName}.`
      };
  }
}
