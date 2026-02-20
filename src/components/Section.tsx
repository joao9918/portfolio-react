"use client";
import { useRef } from "react";

export default function Section() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    sectionRef.current?.style.setProperty("--x", `${x}%`);
    sectionRef.current?.style.setProperty("--y", `${y}%`);
  };

  function scrollToAbout(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
      className="relative min-h-140 lg:min-h-266 flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0b0f1a] text-white"
    >
      {/* Glow Effect - Corrigido */}
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-200"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(59,130,246,0.35) 0%, rgba(147,51,234,0.25) 30%, rgba(147,51,234,0.15) 50%, transparent 75%)`,
        }}
      />

      <p className="cursor-default relative z-10 mt-4 font-light opacity-80">
        Welcome to My Portfolio.
      </p>

      <h1 className="cursor-default relative z-10 font-bold text-[clamp(2.5rem,6vw,4rem)]">
        I&apos;m a Full-Stack Developer
      </h1>

      <p className="cursor-default relative z-10 mt-4 font-light opacity-80">
        I build modern applications with a focus on performance and experience.
      </p>

      <div className="relative z-10 mt-8 flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => scrollToAbout("about-me")}
          className="cursor-pointer px-6 py-3 rounded-full font-medium transition hover:-translate-y-1 bg-linear-to-r from-blue-500 to-purple-600"
        >
          About Me
        </button>

        <button className="cursor-pointer px-6 py-3 rounded-full font-medium border border-white/20 transition hover:-translate-y-1">
          Contact
        </button>
      </div>
    </section>
  );
}
