"use client";

import { motion, Variants } from "framer-motion";
import { Check, Zap, Shield, Leaf, TrendingUp, Award } from "lucide-react";

const WHY_CHOOSE_DATA = [
  {
    icon: Shield,
    title: "Superior Quality",
    description:
      "Premium UV-stabilized materials engineered for maximum durability and protection",
  },
  {
    icon: Zap,
    title: "Proven Performance",
    description:
      "Trusted by 2500+ farmers with consistent, reliable results across seasons",
  },
  {
    icon: TrendingUp,
    title: "Increased Yield",
    description:
      "Optimized design to enhance crop productivity and protect investments",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description:
      "15+ years of excellence with ISO certification and quality guarantees",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Sustainable agricultural solutions that protect crops and the environment",
  },
  {
    icon: Check,
    title: "Best Value",
    description:
      "Competitive pricing without compromising on quality and performance",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#a4cc2e]/40 to-transparent" />

      {/* Background Blobs */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#a4cc2e]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#a4cc2e]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto h-1 rounded-full bg-gradient-to-r from-[#a4cc2e] to-[#ffb800]"
          />

          <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Why Choose Us?
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Discover what sets Genuine Agro apart in agricultural protection.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE_DATA.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-2xl border border-[#a4cc2e]/10 bg-gradient-to-br from-white to-[#f8faf5] p-8 shadow-sm transition-all duration-300 hover:border-[#a4cc2e]/40 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#a4cc2e]/15 text-[#93bf1f] transition-all duration-300 group-hover:bg-[#a4cc2e]/25">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-[#a4cc2e] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
