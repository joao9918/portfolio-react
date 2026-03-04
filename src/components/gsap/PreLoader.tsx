"use client";

import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

type Dictionary = {
  loading: string;
};

type PreLoaderProps = {
  dict: Dictionary;
};

export default function PreLoader({ dict }: PreLoaderProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);
  const ringOuterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => setVisible(false),
    });

    // Reset inicial
    gsap.set(charsRef.current, { y: 20, opacity: 0 });

    tl.to(coreRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .fromTo(
        [ringInnerRef.current, ringOuterRef.current],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.6",
      )
      // Animação das letras (Loading...)
      .to(
        charsRef.current,
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
        },
        "-=0.4",
      )
      // Rotação contínua e complexa durante o meio do evento
      .to(
        ringInnerRef.current,
        { rotation: 180, duration: 1, ease: "power2.inOut" },
        "-=0.5",
      )
      .to(
        ringOuterRef.current,
        { rotation: -180, duration: 1, ease: "power2.inOut" },
        "<",
      )

      // Efeito de "Explosão" Final (Warp Speed)
      .to(textRef.current, { opacity: 0, y: -10, duration: 0.3 }, "-=0.2")
      .to(coreRef.current, {
        scale: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power4.in",
      })
      .to(
        [ringInnerRef.current, ringOuterRef.current],
        {
          scale: 5,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        },
        "<",
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3",
      );
  }, [mounted]);

  if (!mounted || !visible) return null;

  const loadingText = dict.loading;

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 bg-[#21143F] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center mb-12">
        {/* Brilho de Fundo (Glow Post-Processing) */}
        <div className="absolute w-32 h-32 bg-purple-600/20 blur-[60px] rounded-full" />

        {/* Núcleo Energético */}
        <div
          ref={coreRef}
          className="w-12 h-12 rounded-full opacity-0 scale-0
          bg-linear-to-tr from-white via-purple-300 to-indigo-500 
          shadow-[0_0_50px_15px_rgba(167,139,250,0.6)] z-10"
        />

        {/* Anel Interno (Tracejado) */}
        <div
          ref={ringInnerRef}
          className="absolute w-32 h-32 border-2 border-dashed border-purple-400/40 rounded-full"
        />

        {/* Anel Externo (Sólido Fino) */}
        <div
          ref={ringOuterRef}
          className="absolute w-48 h-48 border-[0.5px] border-indigo-400/20 rounded-full"
        />

        {/* Partículas Orbitais Simbolizadas */}
        <div className="absolute w-full h-full animate-spin [animation-duration:4s]">
          <div className="w-1 h-1 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_white]" />
        </div>
      </div>

      {/* Texto com Split por letra */}
      <div ref={textRef} className="flex gap-1">
        {loadingText.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) charsRef.current[i] = el;
            }}
            className="text-indigo-200/70 text-xs tracking-[0.3em] font-light"
          >
            {char}
          </span>
        ))}
      </div>
    </div>,
    document.body,
  );
}
