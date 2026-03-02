"use client";

import clsx from "clsx";
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

// Interface detalhada para bater com a estrutura do seu JSON
interface AboutMeProps {
  dict: {
    badge: string;
    p1: {
      part1: string;
      highlight: string;
      part2: string;
      perf: string;
      and: string;
      ux: string;
      part3: string;
    };
    p2: {
      part1: string;
      tech: string;
      part2: string;
    };
    p3: {
      part1: string;
      maint: string;
      and: string;
      scal: string;
      part2: string;
    };
  };
}

export default function AboutMe({ dict }: AboutMeProps) {
  const techs = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "Prisma", icon: <SiPrisma className="text-white" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
  ];

  return (
    <section className="relative py-4 px-6 md:px-12 lg:px-24 w-full h-full">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        {/* Coluna do Texto Traduzido */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-purple-500" />
            <span className="text-xs font-mono tracking-[0.4em] text-purple-500 uppercase">
              {dict.badge}
            </span>
          </div>

          <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-4xl relative z-10">
            {/* Parágrafo 1 */}
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
              <span className="text-white font-medium">{dict.p1.ux} </span>
              {dict.p1.part3}
            </p>

            {/* Parágrafo 2 */}
            <p>
              {dict.p2.part1}{" "}
              <span className="text-blue-400">{dict.p2.tech}</span>
              {dict.p2.part2}
            </p>

            {/* Parágrafo 3 */}
            <p>
              {dict.p3.part1}{" "}
              <span className="text-purple-400 italic">{dict.p3.maint}</span>{" "}
              {dict.p3.and}{" "}
              <span className="text-purple-400 italic">{dict.p3.scal}</span>.
              {dict.p3.part2}
            </p>
          </div>
        </div>

        {/* Coluna das Tecnologias (Mantida fixa pois nomes de tech não mudam) */}
        <div className="flex-1 w-full">
          <h3 className="text-sm font-mono text-white/30 uppercase tracking-[0.3em] mb-10">
            Main Stack // Techs
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className={clsx(
                  "group flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm transition-all duration-300",
                  "hover:bg-white/5 hover:border-white/20 hover:-translate-y-1",
                )}
              >
                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detalhe de luz no fundo */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}
