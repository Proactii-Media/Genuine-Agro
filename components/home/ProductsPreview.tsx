"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

const PRODUCT_PREVIEW = {
  badge: "Premium Solution",
  title: "Tape Net",
  subtitle: "Industrial-Grade Crop Protection",
  description:
    "Engineered for maximum durability and crop protection with advanced UV stabilizers.",
  image: "/tape-net.jpg",
  features: [
    "UV Protected",
    "Weather Resistant",
    "Easy Installation",
    "Cost Effective",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProductPreview() {
  const sectionRef = useRef<HTMLSection>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current || !imageContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Image parallax effect
      gsap.to(imageContainerRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".product-accent", {
        width: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".product-badge",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".product-title",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#666_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Accent Blobs */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#a4cc2e]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#a4cc2e]/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
        {/* Main Product Preview */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left - Image */}
          <motion.div
            ref={imageContainerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Image Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-[#a4cc2e]/20 bg-gradient-to-br from-[#a4cc2e]/10 to-[#ffb800]/5 p-1 shadow-2xl">
              {/* Inner container */}
              <div className="relative aspect-square overflow-hidden rounded-[26px] bg-gradient-to-br from-gray-100 to-gray-50">
                <Image
                  src={PRODUCT_PREVIEW.image}
                  alt={PRODUCT_PREVIEW.title}
                  fill
                  className="object-cover transition-transform duration-10 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur-xl border border-white/20"
            >
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Premium Quality
              </p>
              <p className="mt-1 text-2xl font-bold text-[#a4cc2e]">ISO</p>
              <p className="text-xs font-medium text-gray-600">Certified</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Accent Bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="product-accent h-1.5 bg-gradient-to-r from-[#a4cc2e] to-[#ffb800]"
            />

            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="product-badge inline-flex items-center gap-2 rounded-full border border-[#a4cc2e]/30 bg-[#a4cc2e]/5 px-4 py-2 w-fit"
            >
              <span className="h-2 w-2 rounded-full bg-[#a4cc2e]" />
              <span className="text-sm font-semibold text-[#a4cc2e] uppercase tracking-wider">
                {PRODUCT_PREVIEW.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="product-title text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-5xl">
                {PRODUCT_PREVIEW.title}
              </h2>
              <p className="text-2xl font-semibold text-[#a4cc2e]">
                {PRODUCT_PREVIEW.subtitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-gray-600 max-w-xl"
            >
              {PRODUCT_PREVIEW.description}
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {PRODUCT_PREVIEW.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-[#a4cc2e] flex-shrink-0" />
                  <span className="font-medium text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="pt-6 space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/products/tape-net"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B3A21] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#95b826] hover:shadow-lg hover:-translate-y-1"
                >
                  Explore Details
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#a4cc2e] bg-white px-8 py-4 text-base font-semibold text-[#a4cc2e] transition-all duration-300 hover:bg-[#a4cc2e]/5"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* View All Products Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-[#a4cc2e] transition-all hover:gap-3"
          >
            View All Products
            <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
