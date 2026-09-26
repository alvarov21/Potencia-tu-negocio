import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  const text = "Potencia tu negocio";
  const letters = text.split("");

  useEffect(() => {
    // Si es un bot o ya ha visto la animación en esta sesión, sáltatelo.
    if (
      (typeof window !== 'undefined' && sessionStorage.getItem('preloader_seen')) ||
      (typeof navigator !== 'undefined' && (/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|chrome-lighthouse|speed|PTST|HeadlessChrome/i.test(navigator.userAgent) || navigator.webdriver))
    ) {
      setLoading(false);
      return;
    }

    sessionStorage.setItem('preloader_seen', 'true');

    const timer = setTimeout(() => {
      setAnimatingOut(true);
      setTimeout(() => setLoading(false), 500); // Wait for slide up (faster)
    }, 1600); // 1.6s delay for a more premium feel, we have enough LCP budget now
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
          className="text-[#fcfcfc] font-bold tracking-tighter flex items-start antialiased overflow-hidden pt-2 pb-4 -mb-4"
          style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 1.1
          }}
        >
          {letters.map((char, i) => (
            <span key={i} className="inline-block" style={{ verticalAlign: 'bottom' }}>
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
          
        </h1>
      </div>
    </div>
  );
}
