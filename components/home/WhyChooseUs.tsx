"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, Leaf, TrendingUp, Award } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

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
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.from(".why-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-14 lg:py-16"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#a4cc2e]/30 to-tran0 left-0 h-px w-full bg-gray-200/70" />
      {/* Accent Blobs */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#a4cc2e]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#a4cc2e]/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-[#a4cc2e] to-[#ffb800] mx-auto"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-5xl font-bold text-gray-900 lg:text-6xl"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600"
          >
            Discover what sets Genuine Agro apart in agricultural protection
          </motion.p>
        </motion.div>

        {/* Why Choose Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE_DATA.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="why-card group flex flex-col gap-5 p-8 rounded-2xl border border-[#a4cc2e]/10 bg-gradient-to-br from-white to-[#f7f8f5] transition-all hover:border-[#a4cc2e]/40 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#a4cc2e]/20 text-[#a4cc2e] transition group-hover:bg-[#a4cc2e]/30 group-hover:scale-110">
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-4 h-1 w-12 bg-[#a4cc2e] transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
