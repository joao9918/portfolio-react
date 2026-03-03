"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimatedCardProps = {
  children: React.ReactNode;
  x?: number;
  y?: number;
  start?: string;
  end?: string;
};

export default function AnimatedCard({
  children,
  x = 0,
  y = 0,
  start = "0% 100%",
  end = "100% 0%",
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          x: x,
          y: y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: start,
            end: end,
            toggleActions: "play none none reverse",
          },
        },
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return <div ref={cardRef}>{children}</div>;
}
