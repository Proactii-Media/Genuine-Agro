"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { company } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import Button from "@/components/ui/Button";

type ContactFormProps = {
  defaultProduct?: string;
};

export default function ContactForm({ defaultProduct = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: defaultProduct,
    size: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product: ${form.product}`,
      `Required Size: ${form.size}`,
      `Quantity: ${form.quantity}`,
      `Message: ${form.message}`,
    ].join("\n");

    window.open(formatWhatsAppUrl(message), "_blank");
    setSubmitted(true);
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-emerald/10 p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-white">
          <Send size={28} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-forest">
          Enquiry Sent!
        </h3>
        <p className="mt-2 text-sm text-foreground/60">
          Your enquiry has been forwarded via WhatsApp. Our team will respond within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-white p-8 shadow-xl shadow-forest/5 lg:p-10"
    >
      <div>
        <h2 className="font-display text-2xl font-bold text-forest">
          Send Enquiry
        </h2>
        <p className="mt-1 text-sm text-foreground/60">
          Fill in the details and we&apos;ll get back to you promptly.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-foreground/70">
            Name *
          </label>
          <input
            id="name"
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-xl border border-forest/10 bg-off-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-foreground/70">
            Phone *
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-xl border border-forest/10 bg-off-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-foreground/70">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="w-full rounded-xl border border-forest/10 bg-off-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          placeholder="you@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="product" className="mb-1.5 block text-xs font-medium text-foreground/70">
            Product *
          </label>
          <select
            id="product"
            required
            value={form.product}
            onChange={(e) => update("product", e.target.value)}
            className="w-full rounded-xl border border-forest/10 bg-off-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          >
            <option value="">Select product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="size" className="mb-1.5 block text-xs font-medium text-foreground/70">
            Required Size *
          </label>
          <input
            id="size"
            required
            type="text"
            value={form.size}
            onChange={(e) => update("size", e.target.value)}
            className="w-full rounded-xl border border-forest/10 bg-off-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
            placeholder="e.g. 4m x 50m"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quantity" className="mb-1.5 block text-xs font-medium text-foreground/70">
          Quantity
        </label>
        <input
          id="quantity"
          type="text"
          value={form.quantity}
          onChange={(e) => update("quantity", e.target.value)}
          className="w-full rounded-xl border border-forest/10 bg-off-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          placeholder="e.g. 10 rolls"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-foreground/70">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full resize-none rounded-xl border border-forest/10 bg-off-white px-4 py-3 text-sm outline-none transition-colors focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="primary" className="flex-1 gap-2">
          <Send size={18} />
          Send Enquiry
        </Button>
        <Button
          href={formatWhatsAppUrl("Hello, I would like to enquire about your products.")}
          external
          variant="whatsapp"
          className="flex-1 gap-2"
        >
          <MessageCircle size={18} />
          WhatsApp
        </Button>
      </div>
    </form>
  );
}
