"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Mail,
  Share2,
  Star,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const images = [
  "/products/greenhouse-net1.jpg",
  "/products/greenhouse-net2.jpg",
  "/products/greenhouse-net3.jpg",
];

export default function GreenhouseShadeNetPage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <main className="bg-[#f7f8f5] pt-28 pb-20">
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
              <div className="overflow-hidden rounded-[24px] bg-[#f8faf4]">
                <Image
                  src={selectedImage}
                  alt="Greenhouse Shade Net"
                  width={700}
                  height={700}
                  className="h-[420px] w-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails */}
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
            </div>

            {/* RIGHT */}
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
                    Greenhouse Shade Net
                  </h1>

                  <p className="mt-2 text-base text-neutral-600">
                    Premium UV Stabilized HDPE Shade Net for Greenhouses &
                    Polyhouses
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
                  ["Product", "Greenhouse Shade Net"],
                  ["Material", "100% Virgin HDPE"],
                  ["Shade", "35% - 90%"],
                  ["Colour", "Green / Black / White"],
                  ["UV Stabilized", "Yes"],
                  ["Width", "1m - 6.2m"],
                  ["Roll Length", "50 Meter"],
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

              {/* Buttons */}
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
                  Genuine Agro's <strong>Greenhouse Shade Net</strong> is
                  manufactured using premium quality UV stabilized HDPE tapes to
                  create an ideal environment for protected cultivation. It
                  effectively reduces excessive sunlight while maintaining
                  optimum ventilation and temperature inside greenhouses and
                  polyhouses.
                </p>

                <p>
                  Designed for commercial agriculture, floriculture and nursery
                  applications, the net minimizes heat stress, protects delicate
                  crops and promotes healthy plant growth throughout the year.
                </p>

                <p>
                  Its lightweight knitted construction provides superior
                  strength, tear resistance and long outdoor life. The net is
                  easy to install and requires minimal maintenance, making it a
                  reliable solution for modern farming.
                </p>

                <p>
                  Available in multiple shade percentages, Genuine Agro
                  Greenhouse Shade Nets are suitable for vegetables, flowers,
                  herbs, fruits and high-value crops grown under controlled
                  conditions.
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
                  "100% Virgin HDPE",
                  "UV Stabilized",
                  "Greenhouse Application",
                  "Temperature Control",
                  "Excellent Air Circulation",
                  "High Tensile Strength",
                  "Weather Resistant",
                  "Long Service Life",
                  "Easy Installation",
                  "Eco Friendly",
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
                ["Product Name", "Greenhouse Shade Net"],
                ["Material", "100% Virgin HDPE"],
                ["Colour", "Green / Black / White"],
                ["Shade Percentage", "35%, 50%, 75%, 90%"],
                ["UV Stabilized", "Yes"],
                ["Knitting Type", "Warp Knitted"],
                ["Width", "1 Meter - 6.2 Meter"],
                ["Roll Length", "50 Meter"],
                ["Temperature Reduction", "Excellent"],
                ["Weather Resistance", "Excellent"],
                ["Application", "Greenhouses & Polyhouses"],
                ["Business Type", "Manufacturer & Exporter"],
                ["Minimum Order Quantity", "5000 Square Meter"],
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
              <div>
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                  Genuine Agro
                </span>

                <h2 className="mt-5 text-4xl font-bold">
                  Looking for Greenhouse Shade Nets?
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Get factory-direct pricing on premium Greenhouse Shade Nets
                  manufactured using virgin HDPE with advanced UV stabilization.
                  We offer customized shade percentages, widths and bulk supply
                  across India.
                </p>
              </div>

              <div className="flex flex-wrap justify-start gap-5 lg:justify-end">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-white px-8 py-4 font-semibold text-[#072B18] transition hover:scale-105"
                >
                  Get Best Price
                </Link>

                <a
                  href="tel:+919999999999"
                  className="rounded-2xl border-2 border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#072B18]"
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
              Explore more premium agricultural netting solutions designed for
              protected cultivation, nurseries and modern farming applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Black Shade Net",
                href: "/products/tape-nets/black-shade-net",
                image: "/products/black-shade-net1.jpg",
                description:
                  "Premium UV stabilized HDPE Black Shade Net offering superior heat reduction, excellent durability and reliable crop protection.",
              },
              {
                title: "Nursery Shade Net",
                href: "/products/tape-nets/nursery-net",
                image: "/products/nursery.webp",
                description:
                  "Designed specifically for nurseries and young plants, providing optimum sunlight filtration and healthy plant development.",
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
                    {item.description}
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
