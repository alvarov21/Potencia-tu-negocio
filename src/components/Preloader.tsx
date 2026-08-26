import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatingOut(true);
      setTimeout(() => setLoading(false), 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        animatingOut ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className={`flex flex-col items-center justify-center gap-7 transition-opacity duration-700 ${animatingOut ? 'opacity-0' : 'opacity-100'}`}>
        <img 
          src="/logo-cristal.png" 
          alt="Potencia tu negocio" 
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain animate-fade-up" 
          style={{ animationDuration: '800ms' }}
        />
        <h1 
          className="text-foreground text-3xl sm:text-5xl font-bold tracking-tight text-center antialiased animate-fade-up"
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            animationDuration: '800ms',
            animationDelay: '150ms',
            animationFillMode: 'both'
          }}
        >
          Potencia tu negocio
        </h1>
      </div>
    </div>
  );
}
