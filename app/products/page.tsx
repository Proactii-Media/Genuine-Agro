import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SplitTextReveal from "@/components/ui/SplitTextReveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our premium agricultural shade nets, anti-bird nets, greenhouse nets, insect nets, and more. Get a quote via WhatsApp or enquiry form.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.2),transparent_60%)]" />
        <div className="container-wide relative z-10 px-5 lg:px-8">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-light">
            Product Catalogue
          </span>
          <SplitTextReveal
            text="Premium Agricultural Mesh Solutions"
            as="h1"
            className="font-display max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            splitBy="words"
          />
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Explore our complete range of shade nets and agricultural mesh products.
            No cart — enquire directly for custom quotes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
