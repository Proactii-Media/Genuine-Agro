"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-24 lg:py-32"
      style={{
        backgroundImage: "url('/agri3.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/45" />

      {/* Soft Green Tint */}
      <div className="absolute inset-0 bg-[#0b2d17]/20" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-10"
      >
        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-[#a4cc2e]/40 bg-[#a4cc2e]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#a4cc2e] backdrop-blur-sm">
          About Genuine Agro
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          Premium Agricultural
          <span className="block text-[#a4cc2e]">Shade Net Solutions</span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 lg:text-lg">
          Genuine Agro Shade Net is a trusted supplier of premium-quality
          agricultural protection solutions in Vapi, Gujarat, offering a wide
          range of Shade Nets and Tape Nets. We are committed to helping
          farmers, nurseries, greenhouse operators, and agricultural businesses
          improve crop protection, increase productivity, and create sustainable
          growing environments. Our focus is on delivering durable products,
          reliable service, and complete customer satisfaction.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B3A21] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3A21]/80 hover:shadow-xl"
          >
            Learn More
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
