import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatingOut(true);
      setTimeout(() => setLoading(false), 900); // Wait for slide up
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        animatingOut ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className={`transition-opacity duration-500 ${animatingOut ? 'opacity-0' : 'opacity-100'}`}>
        <h1 
          className="text-[#fcfcfc] font-bold tracking-tighter flex items-start antialiased animate-zoom-in"
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 1,
            animationDuration: '1000ms',
            animationFillMode: 'both'
          }}
        >
          Potencia tu negocio
          <span 
            className="font-medium"
            style={{ 
              fontSize: '0.35em', 
              marginTop: '0.2em', 
              marginLeft: '0.1em',
              letterSpacing: 'normal'
            }}
          >
            ®
          </span>
        </h1>
      </div>
    </div>
  );
}
