"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const APPLICATIONS = [
  {
    title: "35% Tape Shade Net",
    image: "/products/50-tape-net1.jpeg",
    details: [
      "Shade: 30–37%",
      "Material: 100% Virgin HDPE",
      "UV Stabilized: 3%",
      "Width: 1m – 6.2m",
      "Length: 50m Roll",
      "Colour: Natural, White, Green",
    ],
  },
  {
    title: "Nursery Net",
    image: "/products/50-tape-net2.jpeg",
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
    image: "/products/75-tape-net1.jpeg",
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
    title: "Anti Bird Net",
    image: "/products/75-tape-net2.jpeg",
    details: [
      "Protects Crops",
      "UV Stabilized",
      "High Strength",
      "Reusable",
      "Weather Resistant",
      "Easy Installation",
    ],
  },
  {
    title: "Vegetable Farming",
    image: "/products/90-tape-net1.jpeg",
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
    image: "/products/90-tape-net2.jpeg",
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
    image: "/agri.png",
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
];

export default function ProductApplications() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#A4CC2E] to-[#FFB800]" />

          <h2 className="mt-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Product Applications
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Our premium shade nets are widely used across agriculture,
            horticulture and commercial farming for maximum protection and
            productivity.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Default Title */}
              <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-white/95 px-5 py-3 shadow-md transition-all duration-300 group-hover:opacity-0">
                <h3 className="whitespace-nowrap text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center bg-white/90 p-6 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <h3 className="mb-5 text-xl font-bold text-[#4A7C15]">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-sm leading-6 text-gray-700">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#A4CC2E]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
