"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const variants = [
  {
    title: "50% Tape Net",
    image: "/products/50-tape-net1.jpeg",
    href: "/products/tape-nets/50-percent",
    description:
      "Perfect balance between sunlight and protection for multiple crops.",
  },
  {
    title: "75% Tape Net",
    image: "/products/75-tape-net1.jpeg",
    href: "/products/tape-nets/75-percent",
    description:
      "Excellent shade for nurseries, greenhouses and delicate plants.",
  },
  {
    title: "90% Tape Net",
    image: "/products/90-tape-net2.jpeg",
    href: "/products/tape-nets/90-percent",
    description:
      "Maximum shade and temperature reduction for specialized applications.",
  },
  {
    title: "Black Shade Net",
    image: "/products/black-shade-net1.jpg",
    href: "/products/shade-nets/black",
    description:
      "Premium UV Stabilized HDPE Black Shade Net offering excellent heat reduction and long-lasting durability.",
  },
  {
    title: "Greenhouse Shade Net",
    image: "/products/greenhouse-net1.jpg",
    href: "/products/shade-nets/greenhouse",
    description:
      "Designed for greenhouses and polyhouses to regulate temperature and create an ideal growing environment.",
  },
  {
    title: "Nursery Shade Net",
    image: "/products/nursery.webp",
    href: "/products/shade-nets/nursery",
    description:
      "Provides optimum shade and ventilation for nurseries, seedlings and young plants.",
  },
];

export default function TapeNetsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <Image
          src="/tape-net.jpg"
          alt="Tape Nets"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10 xl:px-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#a4cc2e]">
            Genuine Agro
          </p>

          <h1 className="max-w-3xl text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Tape Nets
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Premium UV Stabilized HDPE Tape Nets designed for agriculture,
            nurseries, greenhouses and industrial shade applications.
          </p>
        </div>
      </section>

      {/* VARIANTS */}
      <section className="bg-[#f8faf5] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-[#a4cc2e]/10 px-5 py-2 text-sm font-semibold text-[#5d7d18]">
              Product Variants
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#16331d]">
              Choose Your Shade Percentage
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
              Select the Tape Net that best matches your agricultural or
              industrial requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {variants.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-[#16331d]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-600">{item.description}</p>

                    <div className="mt-8 flex items-center font-semibold text-[#5d7d18]">
                      Explore
                      <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
