"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type SplitTextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "chars" | "words";
  delay?: number;
  stagger?: number;
};

export default function SplitTextReveal({
  text,
  className,
  as: Tag = "h2",
  splitBy = "words",
  delay = 0,
  stagger = 0.04,
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parts =
      splitBy === "chars"
        ? text.split("")
        : text.split(" ");

    el.innerHTML = parts
      .map((part, i) => {
        const content = splitBy === "words" ? (i > 0 ? " " : "") + part : part;
        return `<span class="split-char inline-block" style="opacity:0;transform:translateY(100%)">${content === " " ? "&nbsp;" : content}</span>`;
      })
      .join("");

    const chars = el.querySelectorAll(".split-char");

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [text, splitBy, delay, stagger]);

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={cn(className)}>
      {text}
    </Tag>
  );
}
