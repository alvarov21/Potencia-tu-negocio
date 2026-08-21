import React, { useState } from 'react';
import { useCookieConsent, CookiePreferences } from '../context/CookieConsentContext';
import { X, Check } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function CookieBanner() {
  const { hasInteracted, acceptAll, rejectAll, savePreferences, isSettingsOpen, openSettings, closeSettings } = useCookieConsent();
  
  const [tempPrefs, setTempPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const [mounted, setMounted] = useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (hasInteracted && !isSettingsOpen) return null;

  const handleSave = () => {
    savePreferences(tempPrefs);
  };

  return (
    <>
      {/* Banner */}
      {!hasInteracted && !isSettingsOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
          <div className="max-w-4xl mx-auto bg-card border border-border shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Valoramos tu privacidad</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento de la web, analizar nuestro tráfico y mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación. 
                Puedes aceptar todas las cookies, rechazarlas o configurarlas a tu medida. Tienes más información en nuestra <Link to="/politica-de-privacidad" className="underline hover:text-foreground">Política de Privacidad</Link> y <Link to="/politica-de-cookies" className="underline hover:text-foreground">Política de Cookies</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button 
                onClick={openSettings}
                className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-muted transition"
              >
                Configurar
              </button>
              <button 
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-muted transition"
              >
                Rechazar
              </button>
              <button 
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition shadow-glow"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border shadow-2xl rounded-2xl w-full max-w-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold">Configuración de Cookies</h2>
              {hasInteracted && (
                <button onClick={closeSettings} className="p-2 hover:bg-muted rounded-full transition">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Técnicas (Estrictamente Necesarias)</h4>
                  <p className="text-sm text-muted-foreground">Son necesarias para que la web funcione (ej: guardar estas mismas preferencias). No se pueden desactivar.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <div className="w-11 h-6 bg-primary rounded-full relative opacity-50 cursor-not-allowed">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Analíticas</h4>
                  <p className="text-sm text-muted-foreground">Nos permiten medir el tráfico de la web (Google Analytics) para saber qué páginas se visitan más y mejorar el servicio de forma anónima.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <button 
                    onClick={() => setTempPrefs(p => ({ ...p, analytics: !p.analytics }))}
                    className={`w-11 h-6 rounded-full relative transition-colors ${tempPrefs.analytics ? 'bg-primary' : 'bg-muted'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${tempPrefs.analytics ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Marketing y Publicidad</h4>
                  <p className="text-sm text-muted-foreground">Utilizadas por terceros para mostrarte anuncios relevantes en otras plataformas basándose en tu navegación.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <button 
                    onClick={() => setTempPrefs(p => ({ ...p, marketing: !p.marketing }))}
                    className={`w-11 h-6 rounded-full relative transition-colors ${tempPrefs.marketing ? 'bg-primary' : 'bg-muted'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${tempPrefs.marketing ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-border flex flex-col sm:flex-row justify-end gap-3 bg-muted/30">
              <button 
                onClick={rejectAll}
                className="px-6 py-2.5 text-sm font-medium border border-border rounded-full hover:bg-muted transition"
              >
                Rechazar todas
              </button>
              <button 
                onClick={handleSave}
                className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
