"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { formatWhatsAppUrl } from "@/lib/utils";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <RevealOnScroll delay={index * 0.08} animation="fadeUp">
      <article className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-forest/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald/10">
        <Link href={`/products/${product.slug}`} className="block">
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src={product.heroImage}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-forest opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </Link>

        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold text-forest lg:text-2xl">
                <Link href={`/products/${product.slug}`} className="hover:text-emerald">
                  {product.name}
                </Link>
              </h2>
              <p className="mt-1 text-sm text-emerald">{product.tagline}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-foreground/60 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
              {product.material}
            </span>
            {product.shadePercentage && (
              <span className="rounded-full bg-gray-light px-3 py-1 text-xs font-medium text-foreground/70">
                {product.shadePercentage}
              </span>
            )}
            <span className="rounded-full bg-gray-light px-3 py-1 text-xs font-medium text-foreground/70">
              {product.color.split(",")[0]}
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href={`/products/${product.slug}`}
              className="flex flex-1 items-center justify-center rounded-full bg-forest py-3 text-sm font-medium text-white transition-colors hover:bg-emerald"
            >
              View Details
            </Link>
            <a
              href={formatWhatsAppUrl(
                `Hello, I'm interested in ${product.name}. Please share details.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-forest/15 px-4 py-3 text-sm font-medium text-emerald transition-colors hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}
