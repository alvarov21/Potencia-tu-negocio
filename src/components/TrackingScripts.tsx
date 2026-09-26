import React, { useEffect } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';

const GTM_ID = 'GTM-NMNKWFL4';

export function TrackingScripts() {
  const { preferences } = useCookieConsent();

  useEffect(() => {
    // Si el usuario no ha aceptado analíticas, limpiamos cookies existentes si rechazó a posteriori
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

    // --- INYECCIÓN DE GOOGLE TAG MANAGER ---
    if (document.getElementById('gtm-script')) return;

    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.async = true;
    document.head.appendChild(script);

    console.log('✅ Google Tag Manager cargado (Consentimiento concedido)');

  }, [preferences?.analytics]);

  useEffect(() => {
    if (!preferences?.marketing) return;
  }, [preferences?.marketing]);

  // Este componente es puramente lógico, no renderiza nada visual
  return null;
}
