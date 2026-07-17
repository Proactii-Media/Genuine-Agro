"use client";

import Link from "next/link";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { formatWhatsAppUrl } from "@/lib/utils";
import Button from "@/components/ui/Button";

type StickyEnquiryCardProps = {
  product: Product;
};

export default function StickyEnquiryCard({ product }: StickyEnquiryCardProps) {
  const whatsappUrl = formatWhatsAppUrl(
    `Hello, I'm interested in ${product.name}. Please provide a quote.\n\nProduct: ${product.name}\nMaterial: ${product.material}`
  );

  return (
    <aside className="glass rounded-3xl p-6 shadow-xl shadow-forest/10 lg:sticky lg:top-28">
      <h3 className="font-display text-lg font-bold text-forest">
        Get a Quote
      </h3>
      <p className="mt-2 text-sm text-foreground/60">
        No cart, no checkout — just direct enquiry with our sales team.
      </p>

      <div className="mt-6 space-y-3">
        <Button href={whatsappUrl} external variant="whatsapp" className="w-full gap-2">
          <MessageCircle size={18} />
          WhatsApp Enquiry
        </Button>
        <Button
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          variant="primary"
          className="w-full gap-2"
        >
          <Mail size={18} />
          Send Enquiry
        </Button>
      </div>

      <div className="mt-6 space-y-3 border-t border-forest/10 pt-6">
        <div className="flex justify-between text-sm">
          <span className="text-foreground/50">Material</span>
          <span className="font-medium text-forest">{product.material}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-foreground/50">Color</span>
          <span className="font-medium text-forest">{product.color.split(",")[0]}</span>
        </div>
        {product.shadePercentage && (
          <div className="flex justify-between text-sm">
            <span className="text-foreground/50">Shade</span>
            <span className="font-medium text-forest">{product.shadePercentage}</span>
          </div>
        )}
      </div>

      <Link
        href="/contact"
        className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald hover:underline"
      >
        Need custom size?
        <ArrowRight size={14} />
      </Link>
    </aside>
  );
}
