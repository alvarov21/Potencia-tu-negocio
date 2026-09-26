import React, { useEffect } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';

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
  }, [preferences?.analytics]);

  useEffect(() => {
    if (!preferences?.marketing) return;
  }, [preferences?.marketing]);

  // Este componente es puramente lógico, no renderiza nada visual
  return null;
}
