import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    // Hold for 2 seconds, then animate out
    const timer = setTimeout(() => {
      setAnimatingOut(true);
      setTimeout(() => setLoading(false), 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        animatingOut ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className={`flex flex-col items-center gap-6 transition-opacity duration-500 ${animatingOut ? 'opacity-0' : 'opacity-100'}`}>
        <img src="/logo-cristal.png" alt="Logo" className="w-28 h-28 object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
        <h1 
          className="text-white text-3xl md:text-5xl font-bold tracking-tight"
          style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
        >
          Potencia tu negocio
        </h1>
      </div>
    </div>
  );
}
