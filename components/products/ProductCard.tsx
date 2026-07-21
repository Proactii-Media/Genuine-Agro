"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        href={`/products/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-7">
          {/* Subtitle */}
          {product.tagline && (
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#6d8d1f]">
              {product.tagline}
            </p>
          )}

          {/* Title */}
          <h3 className="mt-3 text-3xl font-bold leading-tight text-[#16331d] transition-colors duration-300 group-hover:text-[#5d7d18]">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-4 min-h-[84px] text-base leading-7 text-gray-600">
            {product.shortDescription}
          </p>

          {/* Specs */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              {product.material}
            </span>

            {product.shadePercentage && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                {product.shadePercentage}
              </span>
            )}

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              {product.color.split(",")[0]}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-auto flex items-center pt-8 font-semibold text-[#5d7d18]">
            Explore Product
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
