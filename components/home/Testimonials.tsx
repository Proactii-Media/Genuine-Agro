"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Progressive Farmer",
    location: "Gujarat",
    review:
      "The shade nets from Genuine Agro have significantly improved our crop quality. The material is durable, UV-resistant, and performs exceptionally well throughout the season.",
  },
  {
    name: "Amit Kumar",
    role: "Nursery Owner",
    location: "Maharashtra",
    review:
      "Excellent product quality and timely delivery. We've been using Genuine Agro's nets for years and are extremely satisfied with the performance.",
  },
  {
    name: "Suresh Reddy",
    role: "Greenhouse Grower",
    location: "Karnataka",
    review:
      "Professional service, premium quality, and competitive pricing. Genuine Agro has become our trusted agricultural partner.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f9fbf5] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-[#eef6df] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#6f9122]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#1d3b22] lg:text-5xl">
            Trusted by Farmers Across India
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We take pride in delivering premium agricultural protection
            solutions that help farmers achieve better productivity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl border border-[#dce9b9] bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#a4cc2e] text-[#a4cc2e]"
                    />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-[#a4cc2e]/30" />
              </div>

              <p className="leading-8 text-gray-600">&ldquo;{item.review}&rdquo;</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef6df] text-lg font-bold text-[#6f9122]">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-[#1d3b22]">{item.name}</h4>

                  <p className="text-sm text-gray-500">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
