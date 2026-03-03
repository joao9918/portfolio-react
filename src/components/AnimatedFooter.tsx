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

export default function AnimatedFooter({
  children,
  x = 0,
  y = 0,
  start = "0% 100%",
  end = "100% 0%",
}: AnimatedCardProps) {
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        y: "-100%",
        immediateRender: false,
        scrollTrigger: {
          trigger: footerRef.current,
          scrub: true,
          invalidateOnRefresh: true,
          end: "100% 100%",
          markers: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={footerRef}>{children}</div>;
}
