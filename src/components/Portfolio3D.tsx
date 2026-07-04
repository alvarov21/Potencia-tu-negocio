import { useEffect, useRef, useState } from "react";

export function Portfolio3D() {
  const pivotRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const hoveredIndexRef = useRef<number>(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    isHovered.current = true;
    if (!pivotRef.current) return;
    
    let found = -1;
    let minDist = Infinity;
    const children = Array.from(pivotRef.current.children);
    
    for (let i = 0; i < children.length; i++) {
      const rect = children[i].getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        // Find the card closest to the horizontal center of the screen
        const dist = Math.abs((rect.left + rect.width / 2) - window.innerWidth / 2);
        if (dist < minDist) {
          minDist = dist;
          found = i;
        }
      }
    }
    
    hoveredIndexRef.current = found;
    if (wrapperRef.current) {
      wrapperRef.current.style.cursor = found !== -1 ? 'pointer' : 'default';
    }
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    hoveredIndexRef.current = -1;
    if (wrapperRef.current) {
      wrapperRef.current.style.cursor = 'default';
    }
  };

  const handleClick = () => {
    if (hoveredIndexRef.current !== -1) {
      const url = mockups[hoveredIndexRef.current]?.url;
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  // Constants for carousel
  const R = 720;
  const N = 8;
  const STEP = 22.5;

  const mockups = [
    { title: "Landing Page: Restaurante 'El Fuego'", type: "mockup", url: "#restaurante" },
    { type: "cursor" },
    { title: "Reserva Online: Clínica Dental", type: "mockup", url: "#clinica" },
    { type: "envelope" },
    { title: "Catálogo: Taller Mecánico", type: "mockup", url: "#taller" },
    { type: "sparkle" },
    { title: "Web Restaurante: Picoteo", type: "mockup", url: "https://picoteo-murex.vercel.app", image: "/picoteo.png" },
    { type: "cursor" },
  ];

  useEffect(() => {
    let base = 0;
    let animationFrameId: number;

    const render = () => {
      if (!isHovered.current) {
        base += 0.09;
      }
      if (!pivotRef.current) return;

      const cards = pivotRef.current.children;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        let a = ((base + i * STEP + 90) % 180 + 180) % 180 - 90;
        
        const t = Math.abs(a) / 90;
        const opacity = Math.max(0, 1 - Math.pow(t, 3));
        const brightness = 0.8 + 0.2 * t; // Reduced brightness difference so it looks good in light mode too
        const zIndex = 100 + Math.round(t * 50);

        const targetScale = hoveredIndexRef.current === i ? 1.15 : 1;
        let currentScale = parseFloat(card.getAttribute('data-scale') || '1');
        currentScale += (targetScale - currentScale) * 0.1; // Smooth lerp
        card.setAttribute('data-scale', currentScale.toString());

        card.style.transform = `rotateY(${a}deg) translateZ(${-R}px) scale(${currentScale})`;
        card.style.opacity = opacity.toString();
        card.style.filter = `brightness(${brightness})`;
        card.style.zIndex = zIndex.toString();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-[550px] bg-background text-foreground font-sans overflow-hidden selection:bg-primary/20 border-y border-border">
      
      {/* Navbar overlay */}
      <nav className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-6 z-50 pointer-events-none">

        

      </nav>

      {/* Headline */}
      <div className={`absolute top-[12%] left-1/2 -translate-x-1/2 text-center w-full max-w-3xl px-6 transition-all duration-[600ms] ease-out z-20`}>
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
          PORTFOLIO
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Algunos de nuestros diseños.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Diseños modernos, rápidos y optimizados para convertir visitantes en clientes reales. <br className="hidden sm:block" />
          Explora los últimos proyectos que hemos lanzado para negocios como el tuyo.
        </p>
      </div>

      {/* 3D Carousel */}
      <div 
        ref={wrapperRef}
        className={`absolute bottom-[8vh] left-0 w-full h-[210px] z-40 transition-all duration-[800ms]`} 
        style={{ perspective: "900px", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div ref={pivotRef} className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: "preserve-3d" }}>
          {mockups.map((m, i) => (
            <div 
              key={i} 
              className="absolute w-[260px] h-[164px] -ml-[130px] -mt-[82px] pointer-events-none"
              style={{ backfaceVisibility: "hidden", willChange: "transform, opacity, filter" }}
            >
              {m.type === "mockup" ? (
                <a href={m.url} target="_blank" rel="noopener noreferrer" className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-card border border-border shadow-2xl text-foreground relative transition-transform duration-500 ease-out hover:scale-110 cursor-pointer block group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none z-10" />
                  
                  {m.image ? (
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                  ) : (
                    <div className="w-full h-full flex flex-col p-4 relative z-0">
                      <div className="h-10 w-full rounded bg-muted mb-3 relative z-10" />
                      <div className="text-[12px] font-bold mb-2 leading-tight relative z-10">{m.title}</div>
                      <div className="h-1.5 w-2/3 rounded bg-muted mb-1.5 relative z-10" />
                      <div className="h-1.5 w-1/2 rounded bg-muted mb-auto relative z-10" />
                      <div className="w-16 h-5 rounded-full bg-primary/20 flex items-center justify-center self-end mt-2 relative z-10">
                        <div className="w-8 h-1.5 rounded-full bg-primary" />
                      </div>
                    </div>
                  )}
                </a>
              ) : (
                <div className="w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg border border-primary/10 transition-transform duration-500 ease-out hover:scale-125 cursor-pointer pointer-events-auto">
                    <div className="w-8 h-8 rounded-full bg-card shadow-sm" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 14s linear infinite;
        }
        .mask-edges {
          mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
        }
      `}} />
    </div>
  );
}
