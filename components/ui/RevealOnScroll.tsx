"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight" | "clipReveal";
  delay?: number;
  duration?: number;
  start?: string;
};

export default function RevealOnScroll({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  start = "top 85%",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

    switch (animation) {
      case "fadeUp":
        fromVars.y = 60;
        toVars.y = 0;
        break;
      case "scale":
        fromVars.scale = 0.92;
        toVars.scale = 1;
        break;
      case "slideLeft":
        fromVars.x = 80;
        toVars.x = 0;
        break;
      case "slideRight":
        fromVars.x = -80;
        toVars.x = 0;
        break;
      case "clipReveal":
        fromVars.clipPath = "inset(100% 0 0 0)";
        toVars.clipPath = "inset(0% 0 0 0)";
        break;
    }

    gsap.set(el, fromVars);

    const tween = gsap.to(el, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
    };
  }, [animation, delay, duration, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
