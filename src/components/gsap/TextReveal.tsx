"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay opcional em segundos
}

export default function TextReveal({
  children,
  className,
  delay = 0,
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);

  // 1. Timer para o Delay (espera o preloader ou tempo definido)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanAnimate(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  // 2. Animação GSAP
  useEffect(() => {
    // Só inicia se o delay já passou
    if (!canAnimate || !textRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType(textRef.current, {
      types: "lines,chars",
      tagName: "span",
    });

    const ctx = gsap.context(() => {
      gsap.from(split.chars, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%", // Ajustei para 85% para ser mais visível
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [canAnimate]); // Re-executa quando canAnimate mudar para true

  return (
    <div
      ref={textRef}
      className={`inline-block ${className}`}
      // Opacidade 0 inicial para evitar "flash" de texto antes da animação
      style={{ opacity: canAnimate ? 1 : 0 }}
    >
      {children}
    </div>
  );
}
