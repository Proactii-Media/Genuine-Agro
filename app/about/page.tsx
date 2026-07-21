"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  "Premium Quality Products",
  "UV Stabilized Material",
  "High Durability & Long Life",
  "Weather Resistant",
  "Strong & Reliable Construction",
  "Suitable for Nurseries & Greenhouses",
  "Easy Installation",
  "Cost-Effective Solutions",
  "Multiple Sizes & Specifications",
  "Timely Delivery",
  "Competitive Pricing",
  "Customer Satisfaction Guaranteed",
];

const WHY_CHOOSE = [
  {
    title: "Superior Quality",
    description:
      "Premium Shade Nets and Tape Nets manufactured using high-quality UV stabilized materials.",
  },
  {
    title: "Trusted by Farmers",
    description:
      "Preferred by farmers, nurseries and agricultural professionals across India.",
  },
  {
    title: "UV Protection",
    description:
      "Advanced UV stabilization ensures longer product life and reliable performance.",
  },
  {
    title: "Customized Solutions",
    description:
      "Available in multiple sizes and specifications for different farming needs.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Factory-direct pricing without compromising on quality and durability.",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick order processing and timely delivery across the country.",
  },
  {
    title: "Expert Team",
    description:
      "Experienced professionals dedicated to providing the best agricultural solutions.",
  },
  {
    title: "Reliable Quality",
    description:
      "Strict quality control ensures consistent product performance every time.",
  },
  {
    title: "After-Sales Support",
    description:
      "Dedicated customer support to assist you even after your purchase.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".about-hero-image", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] overflow-hidden pt-32 pb-20"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/construction2.png"
            alt="About Genuine Agro"
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-[#0B3A21] to-white"
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#0B3A21]/10 px-4 py-2 w-fit"
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                About Genuine Agro
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-6xl"
            >
              Trusted Agricultural Solutions
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-white max-w-2xl"
            >
              At Genuine Agro Shade Net, we believe that quality agricultural
              protection is the foundation of successful farming.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Accent Blobs */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#a4cc2e]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#a4cc2e]/3 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          {/* About Grid */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center mb-24">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#a4cc2e]/20 bg-gradient-to-br from-[#a4cc2e]/10 to-[#ffb800]/5 p-1 shadow-2xl">
                <div className="relative aspect-square overflow-hidden rounded-[26px]">
                  <Image
                    src="/industrial.png"
                    alt="About Genuine Agro"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  We specialize in supplying high-quality Shade Nets and Tape
                  Nets that are designed to protect crops from harsh sunlight,
                  wind, birds, and changing weather conditions.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-600">
                  Our products are manufactured using premium UV-stabilized
                  materials to ensure long-lasting performance and maximum
                  durability. Whether you own a small farm, greenhouse, nursery,
                  or large agricultural project, we provide dependable solutions
                  tailored to your requirements.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="pt-4 border-t border-gray-200 space-y-4"
              >
                <p className="text-lg leading-relaxed text-gray-600">
                  With a customer-first approach, competitive pricing, and a
                  commitment to quality, Genuine Agro Shade Net has become a
                  trusted partner for growers seeking reliable agricultural
                  netting solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 rounded-2xl border border-[#a4cc2e]/20 bg-gradient-to-br from-[#a4cc2e]/5 to-[#ffb800]/5"
            >
              <div className="space-y-2">
                <div className="h-1.5 w-16 bg-[#a4cc2e]" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted leader in agricultural protection solutions
                by delivering innovative, durable, and high-quality netting
                products that empower farmers to achieve sustainable growth and
                higher agricultural productivity.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 rounded-2xl border border-[#a4cc2e]/20 bg-gradient-to-br from-[#a4cc2e]/5 to-[#ffb800]/5"
            >
              <div className="space-y-2">
                <div className="h-1.5 w-16 bg-[#a4cc2e]" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide premium-quality Shade Nets and Tape
                Nets that help protect crops, improve growing conditions, and
                maximize farm productivity with reliable products, excellent
                customer service, and cost-effective solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="relative overflow-hidden bg-gradient-to-b from-[#f7f8f5] to-white py-24 lg:py-32"
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-[#a4cc2e] to-[#ffb800]"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl font-bold text-gray-900"
            >
              Our Features & Strengths
            </motion.h2>
          </motion.div>

          {/* Features Grid */}
          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a4cc2e]/15">
                  <Check className="h-5 w-5 text-[#7a9f2a]" />
                </div>

                <span className="text-base font-medium text-gray-700">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Accent Blobs */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#a4cc2e]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#0B3A21]/3 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-[#0B3A21] to-[#ffb800]"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl font-bold text-gray-900"
            >
              Why Choose Genuine Agro?
            </motion.h2>
          </motion.div>

          {/* Why Choose Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {WHY_CHOOSE.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-[#dfe9c9] bg-white p-8 shadow-sm transition-all hover:border-[#a4cc2e]/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef6df] text-xl font-bold text-[#7a9f2a] group-hover:bg-[#a4cc2e] group-hover:text-white">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#16301e]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#a4cc2e] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Our Products Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-28 lg:py-36"
        style={{
          backgroundImage: "url('/products/black-shade-net1.jpg')", // Your background image
        }}
      >
        {/* Light Overlay */}

        {/* Soft Green Gradient */}

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10 xl:px-16">
          {/* Accent */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto h-1.5 rounded-full bg-gradient-to-r from-[#a4cc2e] to-[#ffb800]"
          />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-4xl font-bold leading-tight text-white/90 md:text-5xl"
          >
            Why Our Products?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-white/90"
          >
            Our Shade Nets and Tape Nets are designed to provide effective
            protection against excessive sunlight, heat, wind, and external
            damage. Manufactured using premium UV-stabilized materials, they
            create an ideal growing environment for healthier crops, higher
            productivity, and long-lasting performance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-white/90"
          >
            At{" "}
            <span className="font-semibold text-white/90">
              Genuine Agro Shade Net
            </span>
            , we combine innovation, quality, and reliability to deliver
            agricultural solutions trusted by farmers, nurseries, and greenhouse
            owners across India.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <Link
              href="/products/tape-nets"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0B3A21] transition-all duration-300 hover:bg-[#a4cc2e] hover:-translate-y-1 hover:shadow-lg"
            >
              View Our Products
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
