import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { Gift, Target } from 'lucide-react';
import { useLocation } from '@tanstack/react-router';

export function ScratchOffer() {
  const [open, setOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Solo mostrar una vez por usuario
    const hasSeen = localStorage.getItem('potencia_scratch_oct_v1');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      localStorage.setItem('potencia_scratch_oct_v1', 'true');
    }
  };

  const [isReady, setIsReady] = useState(false);
  const hasDrawn = useRef(false);

  useEffect(() => {
    if (!open || isRevealed) return;

    const initCanvas = () => {
      if (hasDrawn.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Si el ancho o alto son 0, el modal está animándose y aún no tiene tamaño
      if (width === 0 || height === 0) return;
      
      canvas.width = width;
      canvas.height = height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.globalCompositeOperation = 'source-over';
      // Dibujar fondo oscuro tipo Nira
      ctx.fillStyle = '#1c1f26'; 
      ctx.fillRect(0, 0, width, height);
      
      // Texto "RASCA AQUÍ"
      ctx.fillStyle = '#9ca3af'; // muted-foreground
      ctx.font = '500 13px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '4px';
      ctx.fillText('R A S C A   A Q U Í', width / 2, height / 2 + 18);
      
      // Dibujar ícono Target
      ctx.beginPath();
      ctx.arc(width / 2, height / 2 - 12, 10, 0, Math.PI * 2);
      ctx.strokeStyle = '#2563eb'; // blue-600
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(width / 2, height / 2 - 12, 4, 0, Math.PI * 2);
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      hasDrawn.current = true;
      setIsReady(true);
    };

    // Intentar inicializar de inmediato
    initCanvas();

    // Como Radix UI Dialog anima la apertura, el canvas puede tardar en tener offsetWidth > 0
    const observer = new ResizeObserver(() => {
      if (!hasDrawn.current) {
        initCanvas();
      }
    });

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    // Por seguridad, intentos extra
    const timer1 = setTimeout(initCanvas, 150);
    const timer2 = setTimeout(initCanvas, 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [open, isRevealed]);

  const scratch = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDrawing || !isReady) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    if ('touches' in e) {
      clientX = (e as TouchEvent).touches[0].clientX;
      clientY = (e as TouchEvent).touches[0].clientY;
    } else {
      clientX = (e as MouseEvent).clientX;
      clientY = (e as MouseEvent).clientY;
    }
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
    
    // Check pixel data less frequently for performance
    if (Math.random() > 0.8) {
      checkReveal();
    }
  };
  
  const checkReveal = () => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    
    // Check every 4th pixel for speed
    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) {
        transparent++;
      }
    }
    
    const totalPixelsChecked = pixels.length / 16;
    if (totalPixelsChecked === 0) return;
    
    const percent = (transparent / totalPixelsChecked) * 100;
    
    // Si rasca el 35% del canvas, lo revelamos entero
    if (percent > 35) {
      setIsRevealed(true);
    }
  };

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const message = `¡Hola! Vengo desde la web. He visto la oferta para rascar y me interesa el octubre SIN IVA. ¿Me dais más info?`;
  const whatsappUrl = `https://wa.me/34644905837?text=${encodeURIComponent(message)}`;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[400px] bg-[#0a0c10] border-[#1e2330] p-0 overflow-hidden text-center gap-0">
        <DialogTitle className="sr-only">Rasca y descubre tu premio</DialogTitle>
        <DialogDescription className="sr-only">Oferta especial de octubre sin IVA al rascar el panel.</DialogDescription>
        
        <div className="p-8 pb-6 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[#2563eb] text-[11px] font-semibold tracking-[0.2em] mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>REGALO PARA TI</span>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Rasca y descubre</h2>
          <p className="text-sm text-slate-400 mb-6">Pasa el dedo por el panel</p>
          
          {/* Contenedor del panel rasca */}
          <div className="relative w-full h-[140px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.1)] border border-[#1e2330]">
            
            {/* Premio real de debajo */}
            <div className="absolute inset-0 bg-[#0f131a] flex flex-col items-center justify-center p-4">
              <span className="text-3xl mb-1">🎉</span>
              <h3 className="text-lg font-bold text-white mb-1">¡OCTUBRE SIN IVA!</h3>
              <p className="text-xs text-slate-400">
                Todo este mes te regalamos el IVA en cualquiera de nuestros planes.
              </p>
            </div>

            {/* Canvas para rascar encima */}
            <canvas
              ref={canvasRef}
              className={`absolute inset-0 z-10 touch-none transition-opacity duration-1000 ${
                isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-crosshair'
              }`}
              onMouseDown={() => setIsDrawing(true)}
              onMouseUp={() => { setIsDrawing(false); checkReveal(); }}
              onMouseLeave={() => { setIsDrawing(false); checkReveal(); }}
              onMouseMove={(e) => scratch(e.nativeEvent)}
              onTouchStart={() => setIsDrawing(true)}
              onTouchEnd={() => { setIsDrawing(false); checkReveal(); }}
              onTouchMove={(e) => scratch(e.nativeEvent)}
            />
          </div>
          
          {/* Botones inferiores */}
          <div className="mt-6 h-10 flex items-center justify-center w-full">
            {!isRevealed ? (
              <button 
                onClick={handleReveal}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4"
              >
                ¿No puedes rascar? Revélalo
              </button>
            ) : (
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#2563eb] text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
              >
                Reclamar oferta por WhatsApp
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
