"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      value: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
      },
    });
  }, [end, suffix, prefix, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}0{suffix}
    </span>
  );
}
