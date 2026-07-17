"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductFAQProps = {
  faqs: { question: string; answer: string }[];
};

export default function ProductFAQ({ faqs }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-2xl border border-forest/10 bg-white"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-display font-semibold text-forest">
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              className={cn(
                "shrink-0 text-emerald transition-transform duration-300",
                openIndex === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300",
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/60">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
