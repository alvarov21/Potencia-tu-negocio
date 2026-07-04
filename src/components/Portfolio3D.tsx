import { useEffect, useRef, useState } from "react";

export function Portfolio3D() {
  const pivotRef = useRef<HTMLDivElement>(null);
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isTyping, setIsTyping] = useState(false);
  const [carouselFadingOut, setCarouselFadingOut] = useState(false);
  const [cookieBarVisible, setCookieBarVisible] = useState(true);

  // Constants for carousel
  const R = 720;
  const N = 8;
  const STEP = 22.5;

  const mockups = [
    { title: "$0 Electricity Bills. 7 years.", type: "mockup" },
    { type: "cursor" },
    { title: "Discover a faster path to financial flow", type: "mockup" },
    { type: "envelope" },
    { title: "Nature's Perfect Hideaways", type: "mockup" },
    { type: "sparkle" },
    { title: "We craft brands that move people", type: "mockup" },
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
        const brightness = 0.7 + 0.3 * t;
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
    <div className="relative w-full h-[800px] bg-[#050505] text-[#f5f5f5] font-sans overflow-hidden font-['Inter'] selection:bg-white/20">
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-6 z-50">
        <div className="flex items-center bg-[#151517] rounded-full px-3 py-1.5 border border-white/5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 mr-2" />
          <span className="text-xs font-semibold text-white">@viktoroddy</span>
        </div>
        
        <div className="hidden md:flex overflow-hidden w-[420px] whitespace-nowrap mask-edges opacity-60 text-sm text-[#f5f5f5]">
          <div className="animate-ticker inline-block">
            We build websites that convert. Designed to reduce friction and maximize leads &rarr; &nbsp;&nbsp;&nbsp;&nbsp;
            We build websites that convert. Designed to reduce friction and maximize leads &rarr; &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#7a7a7a]">
          <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">About</a>
          <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/20">Contact</a>
        </div>
      </nav>

      {/* Headline */}
      <div className={`absolute top-[22%] left-1/2 -translate-x-1/2 text-center w-full transition-all duration-[600ms] ease-out z-20 ${isTyping ? "opacity-15 blur-[5px] scale-[0.98]" : "opacity-100 blur-0 scale-100"}`}>
        <h1 className="text-[clamp(26px,3.4vw,42px)] font-semibold tracking-[-0.02em] leading-tight text-[#f5f5f5]">
          More High-Intent Leads.
        </h1>
        <h2 className="text-[clamp(24px,3.2vw,40px)] italic text-[#7a7a7a] font-serif" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Less Friction.
        </h2>
      </div>

      {/* Funnel */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-full max-w-lg z-30">
        <div className="relative h-24 flex items-center justify-center">
          
          {/* Step 1 */}
          <div className={`absolute flex items-center justify-center transition-all duration-500 ease-out ${step === 1 ? 'opacity-100 blur-0 translate-y-0 scale-100 delay-[380ms]' : step > 1 ? 'opacity-0 blur-[10px] -translate-y-[14px] scale-[0.97] pointer-events-none' : 'opacity-0 blur-[10px] translate-y-[14px] scale-[0.97] pointer-events-none'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white text-black font-bold mr-4 transition-opacity ${budget ? 'opacity-100' : 'opacity-[0.35]'}`}>$</div>
            <input
              type="text"
              autoFocus
              value={budget}
              onChange={handleBudgetChange}
              onKeyDown={handleKeyDown}
              placeholder="your budget"
              className="bg-transparent text-[clamp(30px,4.4vw,46px)] font-medium text-white placeholder:text-[#3a3a3a] outline-none w-[280px]"
            />
            <button 
              onClick={nextStep}
              className={`absolute -right-12 px-4 py-2 bg-[#1c1c1e] border border-[#2a2a2e] rounded-full text-[13px] text-white whitespace-nowrap transition-all duration-300 ${budget ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
            >
              Okay, next &rarr;
            </button>
          </div>

          {/* Step 2 */}
          <div className={`absolute flex flex-col items-center justify-center transition-all duration-500 ease-out ${step === 2 ? 'opacity-100 blur-0 translate-y-0 scale-100 delay-[380ms]' : step > 2 ? 'opacity-0 blur-[10px] -translate-y-[14px] scale-[0.97] pointer-events-none' : 'opacity-0 blur-[10px] translate-y-[14px] scale-[0.97] pointer-events-none'}`}>
            <div className="flex items-center">
              <svg className={`w-8 h-6 mr-4 transition-opacity ${email ? 'opacity-100' : 'opacity-[0.35]'}`} fill="none" stroke="white" strokeWidth="2.4" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setIsTyping(e.target.value.length > 0); }}
                onKeyDown={handleKeyDown}
                placeholder="your email"
                className="bg-transparent text-[clamp(30px,4.4vw,46px)] font-medium text-white placeholder:text-[#3a3a3a] outline-none w-[320px]"
              />
            </div>
            <button 
              onClick={nextStep}
              className={`mt-4 w-10 h-10 flex items-center justify-center text-white bg-[#1c1c1e] border border-[#2a2a2e] rounded-full transition-all duration-300 ${email.includes('@') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              &rarr;
            </button>
          </div>

          {/* Step 3 */}
          <div className={`absolute flex flex-col items-center justify-center transition-all duration-500 ease-out ${step === 3 ? 'opacity-100 blur-0 translate-y-0 scale-100 delay-[380ms]' : 'opacity-0 blur-[10px] translate-y-[14px] scale-[0.97] pointer-events-none'}`}>
            <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="text-[34px] font-semibold leading-none text-white">Submission</div>
            <div className="text-[32px] italic text-[#7a7a7a] font-serif mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>accepted.</div>
            <div className="text-sm text-[#5c5c5c] mb-6">We'll be in touch shortly.</div>
            
            <div className="flex gap-8 text-xs text-center border-t border-white/10 pt-4 w-full justify-center">
              <div>
                <div className="text-[#5c5c5c] mb-1">BUDGET</div>
                <div className="font-semibold text-white">$ {budget}</div>
              </div>
              <div>
                <div className="text-[#5c5c5c] mb-1">EMAIL</div>
                <div className="font-semibold text-white">{email}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3D Carousel */}
      <div className={`absolute bottom-[5vh] left-0 w-full h-[210px] z-10 transition-all duration-[800ms] ${carouselFadingOut ? 'opacity-0 blur-[8px]' : 'opacity-100 blur-0'}`} style={{ perspective: "900px", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
        <div ref={pivotRef} className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: "preserve-3d" }}>
          {mockups.map((m, i) => (
            <div 
              key={i} 
              className="absolute w-[250px] h-[156px] -ml-[125px] -mt-[78px] rounded-lg overflow-hidden flex items-center justify-center bg-[#0f0f11] border border-[#232326]"
              style={{ backfaceVisibility: "hidden", willChange: "transform, opacity, filter", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.8)" }}
            >
              {m.type === "mockup" ? (
                <div className="w-full h-full flex flex-col p-4 text-[#f5f5f5]">
                  <div className="h-12 w-full rounded bg-white/5 mb-2" />
                  <div className="text-[10px] font-semibold mb-2">{m.title}</div>
                  <div className="h-2 w-2/3 rounded bg-white/10 mb-1" />
                  <div className="h-2 w-1/2 rounded bg-white/10 mb-auto" />
                  <div className="w-16 h-4 rounded-full bg-white/90 self-end mt-2" />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white via-neutral-400 to-neutral-800 flex items-center justify-center opacity-80 mix-blend-screen">
                  <div className="w-8 h-8 rounded-full bg-[#050505]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cookie bar */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${cookieBarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="bg-[#121214] border border-white/10 rounded-full px-4 py-2 flex items-center gap-4 text-[11px] text-[#7a7a7a]">
          <span>We use cookies to understand how you use our site. <span className="text-white">Accept</span> to help us improve. <a href="#" className="underline decoration-white/20">Privacy Policy</a></span>
          <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
            <button onClick={() => setCookieBarVisible(false)} className="hover:text-white transition-colors">Decline</button>
            <button onClick={() => setCookieBarVisible(false)} className="text-black bg-white rounded-full px-3 py-1 font-semibold hover:bg-white/90 transition-colors">Accept</button>
          </div>
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
