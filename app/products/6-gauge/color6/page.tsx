"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Share2,
  Star,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const images = [
  "/products/red.avif",
  "/products/blue.png",
  "/products/black.webp",
  "/products/white.avif",
  "/products/beige.avif",
  "/products/camel.webp",
];

export default function ColorShadeNetPage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <main className="bg-[#f7f8f5] pt-28 pb-20">
      {/* Product Section */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[28px] border border-[#dce6c5] bg-white shadow-lg"
        >
          <div className="grid lg:grid-cols-[420px_1fr]">
            {/* LEFT IMAGE */}
            <div className="border-r border-[#dce6c5] p-5">
              <div className="relative overflow-hidden rounded-[24px] bg-[#f8faf4]">
                <Image
                  src={selectedImage}
                  alt="Color Shade Net"
                  width={700}
                  height={700}
                  className="h-[420px] w-full object-cover transition-all duration-300"
                />

                {/* Badge */}
                <div className="absolute bottom-5 left-5 z-20 rounded-3xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    AVAILABLE IN
                  </p>

                  <h3 className="text-3xl font-extrabold text-[#95C11F]">
                    6 COLORS
                  </h3>

                  <p className="text-lg text-gray-700">Single Color Net</p>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="mt-4 flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                      selectedImage === img
                        ? "border-[#0B3A21] ring-2 ring-[#7A9F2A]"
                        : "border-[#dce6c5] hover:border-[#7A9F2A]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={75}
                      height={75}
                      className="h-16 w-16 object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Available Colors */}
              <div className="mt-6 rounded-2xl border border-[#dce6c5] bg-white p-5">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#24301D]">
                  Available Colors
                </h4>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Red", color: "#D62828" },
                    { name: "Blue", color: "#2563EB" },
                    { name: "Black", color: "#1F2937" },
                    { name: "White", color: "#FFFFFF", border: true },
                    { name: "Beige", color: "#D8C3A5" },
                    { name: "Camel", color: "#C19A6B" },
                  ].map((item) => (
                    <div key={item.name} className="flex flex-col items-center">
                      <div
                        style={{ backgroundColor: item.color }}
                        className={`h-11 w-11 rounded-full shadow-md ${
                          item.border ? "border border-gray-300" : ""
                        }`}
                      />

                      <span className="mt-2 text-xs font-medium text-neutral-600">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-6 lg:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#edf5db] px-3 py-1.5">
                    <Star size={15} className="fill-[#7A9F2A] text-[#7A9F2A]" />

                    <span className="text-sm font-semibold text-[#072B18]">
                      Premium Product
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-[#24301D]">
                    Color Shade Net
                  </h1>

                  <p className="mt-3 max-w-xl leading-7 text-neutral-600">
                    Premium quality Single Color Shade Nets manufactured using
                    100% Virgin HDPE with UV stabilization. Available in Red,
                    Blue, Black, White, Beige and Camel colors for agricultural,
                    nursery, greenhouse, landscaping and commercial shading
                    applications.
                  </p>
                </div>

                <button className="rounded-full border border-[#dce6c5] p-2.5 transition hover:bg-[#f5f8ee]">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Quantity */}
              <div className="mt-6 flex flex-wrap gap-3">
                <input
                  placeholder="Quantity"
                  className="rounded-xl border border-[#dce6c5] px-4 py-3 outline-none focus:border-[#7A9F2A]"
                />

                <select className="rounded-xl border border-[#dce6c5] px-4 py-3 outline-none">
                  <option>Square Meter</option>
                  <option>Roll</option>
                </select>

                <button className="rounded-xl bg-[#0B3A21] px-6 py-3 font-semibold text-white transition hover:bg-[#6c8d26]">
                  Get Best Price
                </button>
              </div>

              {/* Specifications */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#e6edd6]">
                {[
                  ["Business Type", "Manufacturer & Exporter"],
                  ["Product", "Color Shade Net"],
                  ["Material", "100% Virgin HDPE"],
                  [
                    "Available Colors",
                    "Red, Blue, Black, White, Beige & Camel",
                  ],
                  ["Shade Percentage", "35% - 90%"],
                  ["UV Protection", "Premium UV Stabilized"],
                  ["Width", "1m - 6.2m"],
                  ["Length", "50 Meter Roll"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="grid grid-cols-2 border-b last:border-none"
                  >
                    <div className="bg-[#fafcf7] px-5 py-4 text-sm text-neutral-500">
                      {title}
                    </div>

                    <div className="px-5 py-4 text-sm font-semibold text-[#24301D]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#0B3A21] px-6 py-3 font-semibold text-[#0B3A21] transition hover:bg-[#f3f8ea]"
                >
                  <Phone size={17} />
                  Request Call
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0B3A21] px-6 py-3 font-semibold text-white transition hover:bg-[#69891f]"
                >
                  <Mail size={17} />
                  Send Enquiry
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Product Information */}
      <section className="mt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Product Description */}
            <div className="overflow-hidden rounded-[34px] border border-[#dce6c5] bg-white shadow-lg">
              <div className="border-b border-[#edf2e3] bg-[#f8fbf3] px-8 py-6">
                <h2 className="text-3xl font-bold text-[#24301D]">
                  Product Description
                </h2>
              </div>

              <div className="space-y-6 p-8 leading-8 text-neutral-600">
                <p>
                  Genuine Agro's <strong>Color Shade Net</strong> is
                  manufactured using premium quality{" "}
                  <strong>100% Virgin HDPE</strong> with advanced UV
                  stabilization technology. Designed for long-lasting outdoor
                  performance, it provides reliable shade, excellent ventilation
                  and superior durability in all weather conditions.
                </p>

                <p>
                  Our <strong>Single Color Shade Nets</strong> are available in
                  six attractive colors—
                  <strong>Red, Blue, Black, White, Beige</strong> and{" "}
                  <strong>Camel</strong>—making them ideal for agriculture,
                  landscaping, nurseries, greenhouses, floriculture, terrace
                  gardens, poultry farms, parking sheds and commercial outdoor
                  spaces.
                </p>

                <p>
                  Manufactured using premium UV stabilized raw materials, these
                  shade nets help reduce heat, protect crops from harsh
                  sunlight, improve growing conditions and maintain their color
                  and strength even after prolonged outdoor exposure.
                </p>

                <p>
                  Available in multiple shade percentages and widths, Genuine
                  Agro Color Shade Nets combine functionality with aesthetics,
                  making them the preferred choice for agricultural,
                  horticultural and decorative applications.
                </p>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="rounded-[34px] border border-[#dce6c5] bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#24301D]">
                Quick Highlights
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "100% Virgin HDPE Material",
                  "Available in 6 Solid Colors",
                  "Red, Blue, Black, White, Beige & Camel",
                  "Premium UV Stabilized",
                  "Weather Resistant",
                  "Fade Resistant Colors",
                  "Excellent Air Circulation",
                  "Lightweight & Easy Installation",
                  "Reusable & Eco Friendly",
                  "Long Outdoor Service Life",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckCircle2 size={20} className="mt-1 text-[#7A9F2A]" />

                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="mt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="overflow-hidden rounded-[34px] border border-[#dce6c5] bg-white shadow-lg">
            <div className="border-b border-[#edf2e3] bg-[#f8fbf3] px-8 py-6">
              <h2 className="text-3xl font-bold text-[#24301D]">
                Technical Specifications
              </h2>
            </div>

            <div className="divide-y divide-[#edf2e3]">
              {[
                ["Product Name", "Color Shade Net"],
                ["Product Type", "Single Color Shade Net"],
                ["Material", "100% Virgin HDPE"],
                ["Manufacturing Process", "Knitted Monofilament Technology"],
                ["Available Colors", "Red, Blue, Black, White, Beige & Camel"],
                ["Shade Percentage", "35%, 50%, 75% & 90%"],
                ["Width", "1 Meter - 6.2 Meter"],
                ["Roll Length", "50 Meter Roll"],
                ["UV Stabilized", "Yes"],
                ["Weather Resistance", "Excellent"],
                ["Air Permeability", "High"],
                ["Tear Resistance", "High Strength"],
                [
                  "Application",
                  "Agriculture, Nursery, Greenhouse, Landscaping & Industrial",
                ],
                ["Business Type", "Manufacturer & Exporter"],
                ["Minimum Order Quantity", "5000 Square Meter"],
                ["Country of Origin", "India"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="grid grid-cols-2 px-8 py-5 transition hover:bg-[#fafcf7]"
                >
                  <div className="font-medium text-neutral-500">{title}</div>

                  <div className="font-semibold text-[#24301D]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="overflow-hidden rounded-[34px] bg-gradient-to-br from-[#072B18] via-[#0B3A21] to-[#051A0F] p-12 text-white shadow-2xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Left Content */}
              <div>
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                  Genuine Agro
                </span>

                <h2 className="mt-5 text-4xl font-bold">
                  Looking for Bulk Orders?
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Get factory-direct pricing on our premium
                  <strong> Color Shade Nets</strong>. Available in
                  <strong> Red, Blue, Black, White, Beige</strong> and
                  <strong> Camel</strong> colors with custom widths, shade
                  percentages and roll sizes to meet your agricultural,
                  horticultural and commercial requirements.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "100% Virgin HDPE",
                    "UV Stabilized",
                    "6 Attractive Colors",
                    "Factory Direct Price",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Buttons */}
              <div className="flex flex-wrap justify-start gap-5 lg:justify-end">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-white px-8 py-4 font-semibold text-[#072B18] transition duration-300 hover:scale-105"
                >
                  Get Best Price
                </Link>

                <a
                  href="tel:+919999999999"
                  className="rounded-2xl border-2 border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-[#072B18]"
                >
                  Request Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-16 mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 text-center">
            <span className="rounded-full bg-[#edf5db] px-4 py-2 text-sm font-semibold text-[#6D9224]">
              Explore More
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#24301D]">
              Related Products
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
              Explore our premium range of shade nets designed for different
              agricultural, nursery, greenhouse and commercial applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "50% Shade Net",
                href: "/products/tape-nets/50-percent",
                image: "/products/50-tape-net1.jpeg",
              },
              {
                title: "75% Shade Net",
                href: "/products/tape-nets/75-percent",
                image: "/products/75-tape-net1.jpeg",
              },
              {
                title: "Multi-Color Shade Net",
                href: "/products/tape-nets/multi-color",
                image: "/products/multi-color-shade-net1.jpeg",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[28px] border border-[#dce6c5] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <span className="rounded-full bg-[#edf5db] px-3 py-1 text-xs font-semibold text-[#6D9224]">
                    Premium Quality
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-[#24301D] transition-colors group-hover:text-[#6D9224]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    Premium quality UV stabilized HDPE shade nets manufactured
                    for long-lasting durability, weather resistance and superior
                    agricultural performance.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#6D9224] transition-all group-hover:gap-3">
                    View Product
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
