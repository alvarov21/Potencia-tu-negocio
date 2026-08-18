import React, { useEffect } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';

// Reemplaza esto con tu ID real de Google Analytics cuando lo tengas
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; 

export function TrackingScripts() {
  const { preferences } = useCookieConsent();

  useEffect(() => {
    // Si el usuario no ha aceptado analíticas, nos aseguramos de no inyectar nada
    // y podríamos limpiar las cookies existentes si el usuario las rechazó a posteriori
    if (!preferences?.analytics) {
      // Eliminar cookies previas si existen (opcional pero recomendado para LSSI estricta)
      document.cookie.split(";").forEach((c) => {
        if (c.trim().startsWith("_ga") || c.trim().startsWith("_gid")) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        }
      });
      return;
    }

    // --- INYECCIÓN DE GOOGLE ANALYTICS ---
    // Si ya existe, no lo inyectamos dos veces
    if (document.getElementById('ga-script')) return;

    // Inyectar script principal de gtag
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inyectar configuración de gtag
    const configScript = document.createElement('script');
    configScript.id = 'ga-config-script';
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
      console.log('✅ Google Analytics cargado (Consentimiento concedido)');
    `;
    document.head.appendChild(configScript);

    return () => {
      // Opcional: limpiar scripts si el componente se desmonta (generalmente no necesario en root)
    };
  }, [preferences?.analytics]);

  useEffect(() => {
    if (!preferences?.marketing) return;
    
    // --- INYECCIÓN DE PIXEL DE FACEBOOK / META (Ejemplo futuro) ---
    // if (document.getElementById('fb-pixel')) return;
    // const script = document.createElement('script');
    // ...
    // document.head.appendChild(script);
    
  }, [preferences?.marketing]);

  // Este componente es puramente lógico, no renderiza nada visual
  return null;
}
