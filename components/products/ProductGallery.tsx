"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-light">
        <Image
          src={images[active]}
          alt={`${alt} - image ${active + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
      </div>
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-square w-20 overflow-hidden rounded-xl transition-all",
              active === i
                ? "ring-2 ring-emerald ring-offset-2"
                : "opacity-60 hover:opacity-100"
            )}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={img} alt="" fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  );
}
