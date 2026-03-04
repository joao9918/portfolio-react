"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiFramer,
} from "react-icons/si";
import TextReveal from "./gsap/TextReveal";

export default function AboutMe({ dict }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const techs = [
    {
      name: "React",
      icon: <SiReact className="text-[#61DAFB]" />,
      rotation: -4,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      rotation: 2,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6]" />,
      rotation: -3,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      rotation: 5,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-[#339933]" />,
      rotation: -2,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-[#4169E1]" />,
      rotation: 3,
    },
    { name: "Prisma", icon: <SiPrisma className="text-white" />, rotation: -5 },
    {
      name: "Framer Motion",
      icon: <SiFramer className="text-white" />,
      rotation: 4,
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;
    const header = headerRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const totalMove = content.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          // Aumentar o end faz a animação durar mais scroll, ficando mais lenta/suave
          end: () => `+=${totalMove * 0.5}`,
          scrub: 1.5, // Maior valor = mais "peso" e fluidez na perseguição do scroll
          invalidateOnRefresh: true,
          anticipatePin: 1, // Suaviza o momento em que a tela trava
        },
      });

      // Animação do Header com um leve atraso (Stagger virtual)
      tl.to(
        header,
        {
          y: -100,
          autoAlpha: 0, // autoAlpha é melhor que opacity para performance
          ease: "power2.inOut",
        },
        0,
      );

      // Conteúdo principal
      tl.to(
        content,
        {
          x: -totalMove,
          ease: "none", // Sempre 'none' em scrub para manter sincronia perfeita
        },
        0,
      );

      // Flutuação contínua (Idle Animation) - Otimizada
      gsap.to(".tech-card", {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        rotation: "random(-2, 2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="bg-[#0b0f1a] overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div
        ref={headerRef}
        className="px-[10vw] md:pt-20 mb-10 will-change-transform"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-blue-500" />
          <span className="text-xs font-mono tracking-[0.4em] text-blue-500/80 uppercase">
            Portfolio
          </span>
        </div>
        <TextReveal className="block">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white italic uppercase border-b border-white/5 pb-10">
            {dict.badge}
          </h2>
        </TextReveal>
      </div>

      <div
        ref={contentRef}
        className="flex items-center w-max px-[10vw] gap-[12vw] pb-20 will-change-transform"
      >
        <div className="w-[85vw] md:w-125 shrink-0">
          <div className="space-y-8 text-gray-400 text-md md:text-xl leading-relaxed font-light">
            <p>
              {dict.p1.part1}{" "}
              <span className="text-white border-b border-blue-500/30">
                {dict.p1.highlight}
              </span>
              {dict.p1.part2}
              <span className="text-white font-medium">
                {" "}
                {dict.p1.perf}
              </span>{" "}
              {dict.p1.and}{" "}
              <span className="text-white font-medium">{dict.p1.ux}</span>{" "}
              {dict.p1.part3}
            </p>
            <p>
              {dict.p2.part1}{" "}
              <span className="text-blue-400">{dict.p2.tech}</span>{" "}
              {dict.p2.part2}
            </p>
            <p>
              {dict.p3.part1}{" "}
              <span className="text-purple-400 italic">{dict.p3.maint}</span>{" "}
              {dict.p3.and}{" "}
              <span className="text-purple-400 italic">{dict.p3.scal}</span>.{" "}
              {dict.p3.part2}
            </p>
          </div>
        </div>

        <div className="flex gap-12 items-center pr-[15vw]">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="tech-card group relative"
              style={{ transform: `rotate(${tech.rotation}deg)` }}
            >
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative min-w-70 h-90 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2">
                <div className="text-7xl mb-6 filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  {tech.icon}
                </div>
                <span className="text-[11px] uppercase tracking-[0.4em] text-white/30 group-hover:text-white/80 transition-colors">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
