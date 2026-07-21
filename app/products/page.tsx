import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Products | Genuine Agro",
  description:
    "Explore our premium agricultural shade net products and enquire directly for customized solutions.",
};

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <Image
          src="/shade-net2.png"
          alt="Products"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10 xl:px-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#a4cc2e]">
            Genuine Agro
          </p>

          <h1 className="max-w-4xl text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Our Products
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Explore our complete range of premium HDPE shade nets and
            agricultural protection solutions designed for farms, nurseries,
            greenhouses and industrial applications.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-[#f8faf5] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-[#a4cc2e]/10 px-5 py-2 text-sm font-semibold text-[#5d7d18]">
              Product Catalogue
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#16331d]">
              Premium Agricultural Solutions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
              Browse our collection of premium agricultural nets engineered for
              durability, UV protection and long-lasting performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
