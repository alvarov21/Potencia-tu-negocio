import React, { useEffect } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';

const GA_TRACKING_ID = 'G-K11PW6VF3S';

export function TrackingScripts() {
  const { preferences } = useCookieConsent();

  useEffect(() => {
    // Si el usuario no ha aceptado analíticas, limpiamos las cookies existentes si el usuario las rechazó a posteriori
    if (!preferences?.analytics) {
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
    if (document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    const configScript = document.createElement('script');
    configScript.id = 'ga-config-script';
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
      console.log('✅ Google Analytics 4 cargado (Consentimiento concedido)');
    `;
    document.head.appendChild(configScript);

  }, [preferences?.analytics]);

  useEffect(() => {
    if (!preferences?.marketing) return;
  }, [preferences?.marketing]);

  // Este componente es puramente lógico, no renderiza nada visual
  return null;
}
