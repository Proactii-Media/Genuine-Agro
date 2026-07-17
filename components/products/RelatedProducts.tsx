import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";

type RelatedProductsProps = {
  products: Product[];
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-products">
      <SectionHeading eyebrow="Related" title="You May Also Like" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-forest/5 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="33vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-forest group-hover:text-emerald">
                {product.name}
              </h3>
              <p className="mt-1 text-xs text-foreground/50 line-clamp-1">
                {product.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
