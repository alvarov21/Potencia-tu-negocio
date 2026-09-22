---
name: sistemas-reservas-pro
description: >-
  Guarda la estrategia, estructura y copy del plan SaaS "Reservas PRO" 
  para peluquerías y barberías. Incluye el estilo del Modal Público (tipo NFC) 
  y la filosofía de producto tanto para el negocio como para el cliente final.
---

# Sistemas Reservas PRO

Esta skill documenta la estrategia de producto, los textos persuasivos y la arquitectura visual de la sección "Reservas PRO", diseñada para peluquerías, barberías y centros de estética. 

Activa esta skill siempre que el usuario te pida modificar, replicar o ampliar la sección del SaaS de reservas, o construir el frontend/dashboard para el barbero.

## 1. Filosofía del Producto (La "App" del Profesional y del Cliente)

El SaaS está diseñado pensando en dos usuarios simultáneamente. El argumento de venta principal es que **no somos una plataforma intermediaria clásica**, sino una herramienta invisible que empodera al negocio.

### Para el Barbero / Peluquero (El Profesional)
- **Cero Comisiones y Equipo Ilimitado:** No hay penalización por crecer. Pagan lo mismo si son 1 o 6 empleados.
- **Control Total y Dinero al Instante:** El dinero va directo a su TPV. No retenemos pagos. Si se van, exportan su base de datos en 1 clic.
- **Huecos Inteligentes:** El sistema reconoce los tiempos muertos (ej. mientras un tinte hace efecto) y abre huecos en la agenda para maximizar ingresos diarios.
- **Soporte Humano (Sin bots):** La configuración inicial y el soporte se hace por WhatsApp con humanos.

### Para el Cliente Final
- **Cero Fricción (No App):** No hay que descargarse ninguna aplicación ni registrarse. Reservan en 3 toques desde Instagram, Google o WhatsApp.
- **Avisos por WhatsApp:** Las confirmaciones y recordatorios se envían por WhatsApp, reduciendo drásticamente los plantones.
- **Trato Personalizado:** El profesional tiene acceso a la ficha técnica (fórmulas, alergias, fotos del antes) antes de que el cliente se siente.

## 2. Estructura Visual (Modal Narrativo)

En la landing page, las características no se muestran en un grid de tarjetas gigantes, sino mediante un **Modal oscuro y elegante** (estilo catálogo de hardware NFC).

**Estructura del Componente Modal (`SaaSFeatures`):**
- **Trigger:** Botón dentro de la tarjeta de precios ("Ver detalles del Software").
- **Estética:** Modal oscuro (`bg-card`), ancho máximo (`max-w-2xl`).
- **Enganche:** Párrafo inicial exponiendo el dolor de las plataformas tradicionales.
- **Cita:** Frase en cursiva con borde lateral (`border-l-4 border-primary/30`) resumiendo la propuesta de valor.
- **Caja de Inclusiones:** Un recuadro (`bg-muted/30 rounded-2xl`) con el título "¿Qué te llevas realmente?".
- **Lista con Checks:** Los 4-5 puntos fuertes presentados con un emoji de check verde (`✅`), un título en negrita (`strong`) y una breve explicación.
- **Cierre y CTA:** Un párrafo de cierre centrado y un botón brillante ("Solicitar Demo Ahora").

## 3. Copy Base (Ultra-Sintetizado y Persuasivo)

Al redactar sobre este sistema, utiliza siempre este tono directo, comercial y enfocado en el beneficio real (eliminando paja):

> **Cero comisiones y equipo ilimitado.** Paga lo mismo seas 1 o seáis 6. Sin facturas infladas ni "gastos de gestión".
> **Control total de tu negocio.** Sin permanencias. Tus datos te pertenecen y el dinero va directo a tu TPV.
> **Huecos inteligentes.** Mientras un tratamiento hace efecto, el sistema abre hueco para otra cita.
> **Recordatorios por WhatsApp.** Reduce los plantones con avisos por el único chat que la gente lee.

Si tienes que implementar componentes para este sistema, respeta esta filosofía anti-fricción y mantén el diseño premium, oscuro y sintético.
