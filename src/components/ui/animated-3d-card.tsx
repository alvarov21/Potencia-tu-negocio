"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

export interface MousePos {
  readonly x: number;
  readonly y: number;
}

export interface Card3DWrapperProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Card3DWrapper = React.forwardRef<HTMLDivElement, Card3DWrapperProps>(
  ({ children, className, disabled = false, ...props }, ref) => {
    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const handleMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({
          x: (x / rect.width - 0.5) * 15, // Smooth tilt intensity
          y: (y / rect.height - 0.5) * -15,
        });
      },
      [disabled]
    );

    const handleEnter = useCallback(() => {
      if (disabled) return;
      setHovered(true);
    }, [disabled]);

    const handleLeave = useCallback(() => {
      if (disabled) return;
      setHovered(false);
      setMousePos({ x: 0, y: 0 });
    }, [disabled]);

    return (
      <motion.div
        ref={ref}
        className={className}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        animate={{
          rotateX: disabled ? 0 : mousePos.y,
          rotateY: disabled ? 0 : mousePos.x,
          z: disabled ? 0 : hovered ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.8 }}
        style={{ transformStyle: "preserve-3d", perspective: "1500px" }}
        {...props}
      >
        {/* Glare effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0"
          style={{ transform: "translateZ(1px)" }}
        >
          <motion.div
            className="absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              background: hovered
                ? `linear-gradient(${mousePos.x + 135}deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)`
                : "transparent",
            }}
          />
        </motion.div>

        {/* Content Layer */}
        <motion.div
          className="relative z-10 h-full w-full"
          style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }
);

Card3DWrapper.displayName = "Card3DWrapper";
