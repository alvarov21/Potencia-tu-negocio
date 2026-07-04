import { useEffect, useRef, useState } from "react";

export function Portfolio3D() {
  const pivotRef = useRef<HTMLDivElement>(null);
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isTyping, setIsTyping] = useState(false);
  const [carouselFadingOut, setCarouselFadingOut] = useState(false);

  // Constants for carousel
  const R = 720;
  const N = 8;
  const STEP = 22.5;

  const mockups = [
    { title: "Landing Page: Restaurante 'El Fuego'", type: "mockup" },
    { type: "cursor" },
    { title: "Reserva Online: Clínica Dental", type: "mockup" },
    { type: "envelope" },
    { title: "Catálogo: Taller Mecánico", type: "mockup" },
    { type: "sparkle" },
    { title: "Sitio Corporativo: Asesoría Gómez", type: "mockup" },
    { type: "cursor" },
  ];

  useEffect(() => {
    let base = 0;
    let animationFrameId: number;

    const render = () => {
      base += 0.09;
      if (!pivotRef.current) return;

      const cards = pivotRef.current.children;
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        let a = ((base + i * STEP + 90) % 180 + 180) % 180 - 90;
        
        const t = Math.abs(a) / 90;
        const opacity = Math.max(0, 1 - Math.pow(t, 3));
        const brightness = 0.8 + 0.2 * t; // Reduced brightness difference so it looks good in light mode too
        const zIndex = 100 + Math.round(t * 50);

        card.style.transform = `rotateY(${a}deg) translateZ(${-R}px)`;
        card.style.opacity = opacity.toString();
        card.style.filter = `brightness(${brightness})`;
        card.style.zIndex = zIndex.toString();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 9) val = val.slice(0, 9);
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setBudget(val);
    setIsTyping(val.length > 0);
  };

  const nextStep = () => {
    if (step === 1 && budget) {
      setStep(2);
      setIsTyping(false);
    } else if (step === 2 && email.includes("@")) {
      setStep(3);
      setIsTyping(false);
      setCarouselFadingOut(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") nextStep();
  };

  return (
    <div className="relative w-full h-[700px] bg-background text-foreground font-sans overflow-hidden selection:bg-primary/20 border-y border-border">
      
      {/* Navbar overlay */}
      <nav className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-6 z-50 pointer-events-none">

        

      </nav>

      {/* Headline */}
      <div className={`absolute top-[16%] left-1/2 -translate-x-1/2 text-center w-full transition-all duration-[600ms] ease-out z-20 ${isTyping ? "opacity-15 blur-[5px] scale-[0.98]" : "opacity-100 blur-0 scale-100"}`}>
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
          Algunos de nuestros diseños
        </span>
        <h2 className="text-[clamp(32px,4vw,56px)] font-bold tracking-tight leading-tight text-foreground">
          Más clientes potenciales.
        </h2>
        <h3 className="text-[clamp(28px,3.5vw,48px)] italic text-muted-foreground font-light mt-2">
          Menos fricción.
        </h3>
      </div>

      {/* Funnel */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full max-w-lg z-30">
        <div className="relative h-24 flex items-center justify-center">
          
          {/* Step 1 */}
          <div className={`absolute flex items-center justify-center transition-all duration-500 ease-out ${step === 1 ? 'opacity-100 blur-0 translate-y-0 scale-100 delay-[380ms]' : step > 1 ? 'opacity-0 blur-[10px] -translate-y-[14px] scale-[0.97] pointer-events-none' : 'opacity-0 blur-[10px] translate-y-[14px] scale-[0.97] pointer-events-none'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold mr-4 transition-opacity shadow-md ${budget ? 'opacity-100' : 'opacity-40'}`}>€</div>
            <input
              type="text"
              autoFocus
              value={budget}
              onChange={handleBudgetChange}
              onKeyDown={handleKeyDown}
              placeholder="tu presupuesto"
              className="bg-transparent text-[clamp(30px,4.4vw,46px)] font-medium text-foreground placeholder:text-muted-foreground/40 outline-none w-[280px]"
            />
            <button 
              onClick={nextStep}
              className={`absolute -right-16 px-5 py-2.5 bg-primary rounded-full text-sm font-semibold text-primary-foreground whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95 ${budget ? 'opacity-100 translate-x-0 shadow-xl shadow-primary/20' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
            >
              Siguiente &rarr;
            </button>
          </div>

          {/* Step 2 */}
          <div className={`absolute flex flex-col items-center justify-center transition-all duration-500 ease-out ${step === 2 ? 'opacity-100 blur-0 translate-y-0 scale-100 delay-[380ms]' : step > 2 ? 'opacity-0 blur-[10px] -translate-y-[14px] scale-[0.97] pointer-events-none' : 'opacity-0 blur-[10px] translate-y-[14px] scale-[0.97] pointer-events-none'}`}>
            <div className="flex items-center">
              <svg className={`w-8 h-8 mr-4 transition-opacity ${email ? 'opacity-100 text-primary' : 'opacity-40 text-muted-foreground'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setIsTyping(e.target.value.length > 0); }}
                onKeyDown={handleKeyDown}
                placeholder="tu email"
                className="bg-transparent text-[clamp(30px,4.4vw,46px)] font-medium text-foreground placeholder:text-muted-foreground/40 outline-none w-[320px]"
              />
            </div>
            <button 
              onClick={nextStep}
              className={`mt-6 w-12 h-12 flex items-center justify-center text-primary-foreground bg-primary shadow-xl shadow-primary/20 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${email.includes('@') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Step 3 */}
          <div className={`absolute flex flex-col items-center justify-center transition-all duration-500 ease-out ${step === 3 ? 'opacity-100 blur-0 translate-y-0 scale-100 delay-[380ms]' : 'opacity-0 blur-[10px] translate-y-[14px] scale-[0.97] pointer-events-none'}`}>
            <div className="w-[48px] h-[48px] bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-600 shadow-inner">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="text-[34px] font-bold tracking-tight leading-none text-foreground">Solicitud</div>
            <div className="text-[32px] italic text-muted-foreground font-light mb-4">aceptada.</div>
            <div className="text-sm font-medium text-muted-foreground mb-8">Nos pondremos en contacto pronto.</div>
            
            <div className="flex gap-10 text-xs text-center border-t border-border pt-6 w-full justify-center">
              <div>
                <div className="text-muted-foreground mb-1.5 uppercase font-semibold tracking-wider">Presupuesto</div>
                <div className="font-bold text-foreground text-lg">€ {budget}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1.5 uppercase font-semibold tracking-wider">Email</div>
                <div className="font-bold text-foreground text-lg">{email}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3D Carousel */}
      <div className={`absolute bottom-[8vh] left-0 w-full h-[210px] z-10 transition-all duration-[800ms] ${carouselFadingOut ? 'opacity-0 blur-[8px]' : 'opacity-100 blur-0'}`} style={{ perspective: "900px", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
        <div ref={pivotRef} className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: "preserve-3d" }}>
          {mockups.map((m, i) => (
            <div 
              key={i} 
              className="absolute w-[260px] h-[164px] -ml-[130px] -mt-[82px] rounded-xl overflow-hidden flex items-center justify-center bg-card border border-border shadow-2xl group"
              style={{ backfaceVisibility: "hidden", willChange: "transform, opacity, filter" }}
            >
              {m.type === "mockup" ? (
                <div className="w-full h-full flex flex-col p-4 text-foreground relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                  <div className="h-10 w-full rounded bg-muted mb-3 relative z-10" />
                  <div className="text-[12px] font-bold mb-2 leading-tight relative z-10">{m.title}</div>
                  <div className="h-1.5 w-2/3 rounded bg-muted mb-1.5 relative z-10" />
                  <div className="h-1.5 w-1/2 rounded bg-muted mb-auto relative z-10" />
                  <div className="w-16 h-5 rounded-full bg-primary/20 flex items-center justify-center self-end mt-2 relative z-10">
                    <div className="w-8 h-1.5 rounded-full bg-primary" />
                  </div>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg border border-primary/10 transition-transform duration-500 ease-out group-hover:scale-125">
                  <div className="w-8 h-8 rounded-full bg-card shadow-sm" />
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
