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
    gsap.set(".star", { opacity: 0, scale: 0 });

    // 1. Entrada das Estrelas (Muito rápido)
    tl.to(".star", {
      opacity: () => Math.random(),
      scale: () => Math.random() * 1.5,
      stagger: { amount: 0.2 },
      duration: 0.3,
    })
      // 2. Núcleo Energético (0.8s -> 0.4s)
      .to(
        coreRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.2",
      )
      // 3. Anéis (0.8s -> 0.4s)
      .fromTo(
        [ringInnerRef.current, ringOuterRef.current],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05 },
        "-=0.3",
      )
      // 4. Texto (0.5s -> 0.25s)
      .to(
        charsRef.current,
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.25,
        },
        "-=0.2",
      )
      // 5. Rotação rápida (1s -> 0.5s)
      .to(
        ringInnerRef.current,
        { rotation: 180, duration: 0.5, ease: "power2.inOut" },
        "-=0.2",
      )
      .to(
        ringOuterRef.current,
        { rotation: -180, duration: 0.5, ease: "power2.inOut" },
        "<",
      )

      // 6. EXPLOSÃO FINAL (Warp Speed)
      .to(textRef.current, { opacity: 0, y: -10, duration: 0.2 }, "+=0.1") // Pequena pausa
      .to(
        coreRef.current,
        {
          scale: 50,
          opacity: 0,
          duration: 0.4, // 0.8s -> 0.4s
          ease: "power4.in",
        },
        "-=0.1",
      )
      .to(
        [ringInnerRef.current, ringOuterRef.current],
        {
          scale: 8,
          opacity: 0,
          duration: 0.3, // 0.6s -> 0.3s
          ease: "power2.in",
        },
        "<",
      )
      // Efeito das estrelas vindo na tela na explosão
      .to(
        ".star",
        {
          scale: 10,
          opacity: 0,
          duration: 0.4,
          ease: "power4.in",
        },
        "<",
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.3, // 0.5s -> 0.3s
        },
        "-=0.2",
      );
  }, [mounted]);

  if (!mounted || !visible) return null;

  const loadingText = dict.loading;

  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 bg-[#02010a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background de Estrelas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-center mb-12">
        {/* Glow de Nebulosa */}
        <div className="absolute w-40 h-40 bg-purple-600/10 blur-[80px] rounded-full" />

        {/* Núcleo Energético */}
        <div
          ref={coreRef}
          className="w-12 h-12 rounded-full opacity-0 scale-0
          bg-white shadow-[0_0_50px_15px_rgba(255,255,255,0.4)] z-10"
        />

        {/* Anéis */}
        <div
          ref={ringInnerRef}
          className="absolute w-32 h-32 border border-dashed border-purple-400/30 rounded-full"
        />
        <div
          ref={ringOuterRef}
          className="absolute w-48 h-48 border-[0.5px] border-indigo-400/20 rounded-full"
        />

        {/* Partícula Orbital */}
        <div className="absolute w-full h-full animate-spin [animation-duration:3s]">
          <div className="w-1 h-1 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_white]" />
        </div>
      </div>

      {/* Texto */}
      <div ref={textRef} className="flex gap-1">
        {loadingText.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) charsRef.current[i] = el;
            }}
            className="text-indigo-100/80 text-[10px] tracking-[0.4em] font-light uppercase"
          >
            {char}
          </span>
        ))}
      </div>
    </div>,
    document.body,
  );
}
