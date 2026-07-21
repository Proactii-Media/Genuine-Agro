"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const commitments = [
  {
    title: "Premium Raw Materials",
    description:
      "We use high-grade UV stabilized HDPE raw materials sourced from trusted suppliers to ensure durability and consistent quality.",
    icon: ShieldCheck,
  },
  {
    title: "Strict Quality Control",
    description:
      "Every product undergoes rigorous quality inspections at different stages of manufacturing before dispatch.",
    icon: BadgeCheck,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We continuously improve our products and services to exceed customer expectations and build long-term relationships.",
    icon: CheckCircle2,
  },
  {
    title: "Sustainable Manufacturing",
    description:
      "Our production practices focus on reducing waste while delivering eco-friendly agricultural solutions.",
    icon: Leaf,
  },
];

export default function QualityPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src="/policy.jpg"
          alt="Quality Policy"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10 xl:px-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#a4cc2e]">
            Genuine Agro
          </p>

          <h1 className="max-w-4xl text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Quality Policy
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Delivering reliable agricultural net solutions through superior
            materials, modern manufacturing and uncompromising quality
            standards.
          </p>
        </div>
      </section>

      {/* Policy */}
      <section className="bg-[#f8faf5] py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center">
            <span className="rounded-full bg-[#a4cc2e]/10 px-5 py-2 text-sm font-semibold text-[#5d7d18]">
              Our Commitment
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#16331d]">
              Our Quality Promise
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              At <strong>Genuine Agro Shade Net</strong>, quality is the
              foundation of everything we manufacture. We are committed to
              producing premium agricultural net solutions that consistently
              meet customer requirements while maintaining the highest standards
              of durability, performance and reliability.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team continuously improves manufacturing processes, adopts
              advanced production techniques and follows strict quality control
              procedures to ensure every product delivers outstanding
              performance in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-[#a4cc2e]/10 px-5 py-2 text-sm font-semibold text-[#5d7d18]">
              Quality Standards
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#16331d]">
              What We Stand For
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {commitments.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#a4cc2e]/10">
                    <Icon className="h-8 w-8 text-[#5d7d18]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#16331d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="bg-[#16331d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-[#a4cc2e]">
                Manufacturing Excellence
              </span>

              <h2 className="mt-6 text-4xl font-bold">
                Every Product Is Carefully Manufactured
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/80">
                From raw material selection to weaving, finishing and packaging,
                every stage is monitored to ensure consistent quality,
                dimensional accuracy, UV resistance and long service life.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Premium UV Stabilized HDPE Materials",
                  "Modern Manufacturing Infrastructure",
                  "Multi-Level Quality Inspection",
                  "Reliable Packaging & Timely Delivery",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#a4cc2e]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-3xl">
              <Image
                src="/manufacture.jpg"
                alt="Manufacturing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8faf5] py-24">
        <div className="mx-auto max-w-4xl rounded-[36px] bg-[#16331d] px-10 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Looking for Premium Quality Nets?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Our commitment to quality ensures every product delivers durability,
            performance and long-term value for your requirements.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-[#a4cc2e] px-8 py-4 font-semibold text-[#16331d] transition hover:scale-105"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
