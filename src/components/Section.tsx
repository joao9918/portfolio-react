"use client";
import { useRef, useEffect } from "react";
import { scrollToAbout } from "../../utils/ScrollToAbout";

interface SectionProps {
  dict: {
    welcome: string;
    role: string;
    description: string;
    btnAbout: string;
    btnContact: string;
  };
}

export default function Section({ dict }: SectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initFluid = async () => {
      const webglFluid = (await import("webgl-fluid")).default;
      if (canvasRef.current) {
        webglFluid(canvasRef.current, {
          TRIGGER: "hover", // Ativa ao passar o mouse
          IMMEDIATE: false,
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 2.5, // Duração da "tinta"
          VELOCITY_DISSIPATION: 2,
          VORTICITY: 40,
          PRESSURE: 0.8,
          SPLAT_RADIUS: 0.35, // Tamanho da mancha ao mover
          SPLAT_FORCE: 6000,
          SHADING: true,
          COLORFUL: true,
          BLOOM: false,
          BLOOM_INTENSITY: 0.1,
          BACK_COLOR: { r: 11, g: 15, b: 26 },
        });
      }
    };

    initFluid();
  }, []);

  return (
    <section className="relative min-h-140 lg:min-h-266 flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0b0f1a] text-white">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />

      <div className="relative z-10 pointer-events-none flex flex-col items-center">
        <p className="mt-4 font-light opacity-80 uppercase tracking-widest text-sm">
          {dict.welcome}
        </p>

        <h1 className="font-bold text-[clamp(2.5rem,6vw,4rem)] leading-tight">
          {dict.role}
        </h1>

        <p className="mt-4 font-light opacity-80 max-w-2xl mx-auto">
          {dict.description}
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center pointer-events-auto">
          <button
            onClick={() => scrollToAbout("about-me")}
            className="cursor-pointer px-6 py-3 rounded-full font-medium transition hover:-translate-y-1 bg-linear-to-r from-blue-500 to-purple-600 shadow-lg"
          >
            {dict.btnAbout}
          </button>

          <button
            onClick={() => scrollToAbout("footer")}
            className="cursor-pointer px-6 py-3 rounded-full font-medium border border-white/20 transition hover:bg-white/5 hover:-translate-y-1"
          >
            {dict.btnContact}
          </button>
        </div>
      </div>
    </section>
  );
}
