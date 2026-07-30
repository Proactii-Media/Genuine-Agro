"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const APPLICATIONS = [
  {
    title: "Nursery Net",
    image: "/agri4.png",
    details: [
      "Healthy seedling growth",
      "Reduces heat stress",
      "UV Protected",
      "Weather Resistant",
      "Easy Installation",
      "Long Service Life",
    ],
  },
  {
    title: "Greenhouse Net",
    image: "/products/greenhouse-net1.jpg",
    details: [
      "Temperature Control",
      "Improved Ventilation",
      "UV Protection",
      "Suitable for Vegetables",
      "High Durability",
      "Premium Quality",
    ],
  },
  {
    title: "Vegetable Farming",
    image: "/agri3.jpg",
    details: [
      "Improves Crop Yield",
      "Maintains Moisture",
      "Heat Protection",
      "UV Stabilized",
      "Long Lasting",
      "Premium HDPE",
    ],
  },
  {
    title: "Fruit Orchard",
    image: "/products/fruit.jpg",
    details: [
      "Bird Protection",
      "Sun Protection",
      "Strong Knitted Fabric",
      "Premium Quality",
      "Long Life",
      "Reusable",
    ],
  },
  {
    title: "Polyhouse",
    image: "/products/greenhouse-net2.jpg",
    details: [
      "Suitable for Polyhouse",
      "Reduces Heat",
      "UV Protected",
      "Weather Resistant",
      "Premium HDPE",
      "High Performance",
    ],
  },
  {
    title: "Livestock Shed",
    image: "/net.jpg",
    details: [
      "Keeps Animals Cool",
      "Excellent Air Flow",
      "Durable Fabric",
      "UV Protection",
      "Easy Installation",
      "Long Lasting",
    ],
  },
  {
    title: "Event Nets",
    image: "/products/events.jpg",
    details: [
      "Decorative Shade Solution",
      "Multiple Color Options",
      "UV Stabilized",
      "Lightweight & Durable",
      "Easy Installation",
      "Premium Quality",
    ],
  },
  {
    title: "Agriculture Net",
    image: "/agri1.jpg",
    details: [
      "Crop Protection",
      "Optimal Shade Coverage",
      "UV Protection",
      "Weather Resistant",
      "Improved Crop Growth",
      "Premium Quality",
    ],
  },
  {
    title: "Construction Net",
    image: "/constrution.png",
    details: [
      "High Strength Material",
      "Dust & Debris Control",
      "UV Stabilized",
      "Weather Resistant",
      "Heavy Duty Performance",
      "Premium Quality",
    ],
  },
  {
    title: "Safety Net",
    image: "/safety.jpg",
    details: [
      "High Impact Resistance",
      "Worker Safety",
      "Heavy Duty HDPE",
      "UV Stabilized",
      "Long Service Life",
      "Premium Quality",
    ],
  },
];

export default function ApplicationsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative flex h-[48vh] min-h-[360px] items-center overflow-hidden pt-24">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/products/black-shade-net2.jpg"
            alt="Applications"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Decorative Blurs */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#A4CC2E]/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#FFB800]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-[#A4CC2E] to-[#FFB800]" />

            <span className="mt-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Genuine Agro
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white md:text-6xl">
              Product Applications
            </h1>
          </motion.div>
        </div>
      </section>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-28">
        {/* Background Effects */}
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#A4CC2E]/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FFB800]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#A4CC2E] to-[#FFB800]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7A9F2A]">
                Wide Range of Uses
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#16301E] lg:text-5xl">
                Built for Every Agricultural Requirement
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Genuine Agro Shade Shade Nets are manufactured using premium
                UV-stabilized Virgin HDPE, making them suitable for nurseries,
                polyhouses, greenhouses, vegetable cultivation, livestock
                shelters, commercial farming, and numerous industrial
                applications.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                Designed for durability and long service life, our shade nets
                reduce heat, improve ventilation, maintain optimal growing
                conditions, and provide reliable protection against harsh
                sunlight and changing weather.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[30px] border border-[#dfe9c9] p-2 shadow-2xl">
                <div className="relative h-[520px] overflow-hidden rounded-[24px]">
                  <Image
                    src="/products/multi-color9.jpeg"
                    alt="Applications"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                number: "8+",
                title: "Applications",
              },
              {
                number: "100%",
                title: "Virgin HDPE",
              },
              {
                number: "UV",
                title: "Stabilized",
              },
              {
                number: "10+",
                title: "Years Durability",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#dfe9c9] bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-5xl font-bold text-[#7A9F2A]">
                  {item.number}
                </h3>

                <p className="mt-4 text-lg font-medium text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ================= PRODUCT APPLICATIONS ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faf5] to-white py-24 lg:py-28">
        {/* Background Blur */}
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#A4CC2E]/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FFB800]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-[#A4CC2E] to-[#FFB800]" />

            <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-[#7A9F2A]">
              Applications
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#16301E] lg:text-5xl">
              Explore Our Product Applications
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Designed to meet the diverse needs of agriculture, horticulture,
              greenhouse farming, and commercial projects with superior
              durability and UV protection.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {APPLICATIONS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-[#dfe9c9] bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 right-6 transition-all duration-300 group-hover:opacity-0">
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-center bg-white/95 p-7 opacity-0 backdrop-blur-lg transition-all duration-500 group-hover:opacity-100">
                  <h3 className="mb-6 text-2xl font-bold text-[#16301E]">
                    {item.title}
                  </h3>

                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#A4CC2E]" />

                        <span className="text-sm leading-6">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ;
      {/* ================= WHY CHOOSE OUR Shade SHADE NETS ================= */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-28">
        {/* Background Effects */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#A4CC2E]/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FFB800]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-[#A4CC2E] to-[#FFB800]" />

            <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-[#7A9F2A]">
              Benefits
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#16301E] lg:text-5xl">
              Why Choose Our Shade Shade Nets?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Manufactured using premium UV-stabilized Virgin HDPE for superior
              performance, durability, and long-lasting crop protection.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "100% Virgin HDPE",
                desc: "Manufactured from premium-grade HDPE for exceptional strength and durability.",
                icon: "🌿",
              },
              {
                title: "UV Stabilized",
                desc: "Advanced UV additives protect the net from harsh sunlight and extend its lifespan.",
                icon: "☀️",
              },
              {
                title: "Weather Resistant",
                desc: "Performs reliably under heavy rain, strong winds, and high temperatures.",
                icon: "🌦️",
              },
              {
                title: "Excellent Ventilation",
                desc: "Allows natural airflow while maintaining the required shade percentage.",
                icon: "🌬️",
              },
              {
                title: "Easy Installation",
                desc: "Lightweight and easy to install for farms, nurseries, and commercial structures.",
                icon: "🛠️",
              },
              {
                title: "Long Service Life",
                desc: "Designed for years of dependable outdoor use with minimal maintenance.",
                icon: "🛡️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-[#dfe9c9] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#A4CC2E] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF6DF] text-3xl transition-all duration-300 group-hover:bg-[#A4CC2E]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#16301E]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ;{/* ================= SHADE GUIDE ================= */}
      <section className="bg-gradient-to-b from-[#f7f8f5] to-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-[#A4CC2E] to-[#FFB800]" />

            <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-[#7A9F2A]">
              Shade Guide
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#16301E] lg:text-5xl">
              Recommended Shade Percentage
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the right shade percentage based on your crop and
              application.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                shade: "35%",
                use: "Vegetable Farming",
                desc: "Provides light shading while allowing maximum sunlight for healthy crop growth.",
              },
              {
                shade: "50%",
                use: "Nurseries",
                desc: "Ideal for seed germination, young plants, and general farming applications.",
              },
              {
                shade: "75%",
                use: "Greenhouses",
                desc: "Excellent for floriculture, greenhouses, and sensitive crops requiring extra shade.",
              },
              {
                shade: "90%",
                use: "Livestock & Parking",
                desc: "Maximum shade for livestock sheds, warehouses, parking areas, and heavy sun protection.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#dfe9c9] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#A4CC2E] to-[#7A9F2A] text-3xl font-bold text-white shadow-lg">
                  {item.shade}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#16301E]">
                  {item.use}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ;{/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/products/black-shade-net1.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#0B3A21]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-[#A4CC2E] to-[#FFB800]" />

            <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
              Need Help Choosing the Right Shade Net?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Whether you're planning a nursery, greenhouse, polyhouse,
              livestock shed, or commercial farming project, our experts can
              help you select the perfect shade percentage and specifications
              for maximum performance.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="rounded-xl bg-[#A4CC2E] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8EB92B]"
              >
                Get a Quote
              </Link>

              <Link
                href="/products/Shade-nets"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#0B3A21]"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
