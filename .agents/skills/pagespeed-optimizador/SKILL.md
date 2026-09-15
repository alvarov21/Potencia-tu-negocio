---
name: pagespeed-optimizador
description: >-
  Utiliza esta skill cuando el usuario te pida diagnosticar y solucionar problemas de rendimiento (PageSpeed, Lighthouse, LCP, FCP, TBT) en aplicaciones Single Page (React, Vite, TanStack Router).
---

# Optimizador Extremo de PageSpeed (Vite/React SPA)

Cuando el usuario te pida optimizar una web para sacar un +90 en PageSpeed Insights (especialmente en la dura prueba de Móvil), sigue estos pasos basados en la arquitectura SPA (Client Side Rendering) sin SSR:

## 1. El asesino silencioso del FCP: Fuentes externas bloqueantes
Si el First Contentful Paint (FCP) es > 2 segundos, y la traza de red muestra peticiones a `fonts.googleapis.com` o `fonts.gstatic.com` que tardan cientos de milisegundos:
*   **Problema:** El navegador se niega a dibujar el texto (retrasando el LCP y el FCP) hasta que descarga el archivo `.woff2`.
*   **Solución drástica:** **ELIMINA Google Fonts** del HTML inicial (`index.html` o `__root.tsx`). En su lugar, usa un `font-family` nativo (`system-ui, -apple-system, sans-serif`). En Tailwind, esto es instantáneo (`--font-sans: system-ui`).
*   **Por qué:** Las fuentes del sistema (San Francisco, Roboto) tienen un tiempo de descarga de 0ms, lo que hunde el FCP a milisegundos.

## 2. El asesino del LCP en Cabeceras: Imágenes pesadas + CSS Filters
Si el mayor elemento con contenido (LCP) tarda mucho en aparecer, revisa qué carga la zona inicial (`Hero` o `Nav`).
*   **Problema:** Una imagen de logotipo original pesada (p. ej. >500KB) siendo cargada para mostrar un iconito de 28x28px, y encima aplicándole filtros costosos de CSS (ej. `invert(1) grayscale(1) brightness(2)`). En un test emulado de Moto G, el procesado ahogará la GPU y la descarga arruinará el ancho de banda.
*   **Solución drástica:** Utiliza herramientas como `sips` (en macOS) para escalar y recortar una versión mini estática (ej. `sips -Z 128 logo.png --out logo-sm.png`) y reducir el peso a menos de 10KB. Quita los filtros pesados del LCP si se aplican a imágenes muy grandes en móvil.

## 3. El trampa del User-Agent en Preloaders
Si la web tiene un Preloader de inicio con un `setTimeout` o un retraso artificial (ej. "pantalla negra durante 1.5s"):
*   **Problema:** Lighthouse emula un "Moto G Power" con un User-Agent normal de Chrome en Android (`Mozilla/5.0 (Linux; Android 11; moto g power...`). Si tu regex para saltarte el preloader busca la palabra `bot` o `lighthouse`, **fallará** y Lighthouse se comerá la espera artificial completa, penalizando gravemente el FCP y LCP.
*   **Solución drástica:** 
    1. Si no puedes quitar el preloader, guarda un booleano en el `sessionStorage` para que solo corra una vez.
    2. Reduce el bloqueo visual al mínimo indispensable. 
    3. Asegúrate de que el preloader no use una animación CSS infinita muy densa si bloquea el renderizado.

## 4. TBT (Total Blocking Time) causado por CSS animado
Si TBT (Tiempo de bloqueo total) está en naranja/rojo y usas partículas flotantes infinitas (`animation: float infinite`) o canvas 3D (`Spline`):
*   **Problema:** Muchos nodos en el DOM con animaciones compuestas bloquean el hilo principal en un móvil de gama baja.
*   **Solución drástica:** Escóndelos en móvil (`hidden md:block` en Tailwind) o usa `IntersectionObserver` para cargarlos `lazy` cuando el usuario haga scroll. En móvil el minimalismo premia el TBT de PageSpeed.

**Proceso del agente:** Al iniciar la tarea de "Sacar 100 en PageSpeed", pide siempre el texto detallado del informe para revisar el **Árbol de dependencias** y detectar qué petición bloquea los primeros 1.5 segundos.
