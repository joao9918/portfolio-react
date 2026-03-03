"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

type ScrollSmootherComponentProps = {
  children: React.ReactNode;
};

export default function ScrollSmootherComponent({
  children,
}: ScrollSmootherComponentProps) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
