import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  const text = "Potencia tu negocio";
  const letters = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatingOut(true);
      setTimeout(() => setLoading(false), 900); // Wait for slide up
    }, 2200);
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
          className="text-[#fcfcfc] font-bold tracking-tighter flex items-start antialiased"
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 1
          }}
        >
          {letters.map((char, i) => (
            <span key={i} className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
              <span 
                className="inline-block animate-mask-up"
                style={{ 
                  transform: 'translateY(110%)',
                  animationDelay: `${i * 25 + 100}ms`
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
          
          <span className="inline-block overflow-hidden" style={{ verticalAlign: 'top', marginTop: '0.2em', marginLeft: '0.1em' }}>
            <span 
              className="inline-block font-medium animate-mask-up"
              style={{ 
                fontSize: '0.35em', 
                letterSpacing: 'normal',
                transform: 'translateY(110%)',
                animationDelay: `${letters.length * 25 + 100}ms`
              }}
            >
              ®
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
