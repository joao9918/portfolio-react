"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextReveal({ children, className }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current) return;

    // 1. Quebra o texto em linhas e caracteres
    const split = new SplitType(textRef.current, {
      types: "lines,chars",
      tagName: "span",
    });

    // 2. Animação GSAP
    const ctx = gsap.context(() => {
      gsap.from(split.chars, {
        x: -40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%", // Começa quando o texto está quase entrando
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <div ref={textRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
