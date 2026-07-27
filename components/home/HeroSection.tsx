"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

// Slider content data
const SLIDER_CONTENT = [
  {
    id: 1,
    badge: "Premium Solutions",
    heading: "Protect Your Crops.\nMaximize Your Growth.",
    description:
      "Premium Quality Shade Nets & Tape Nets for Modern Agriculture.",
    buttonText: "Explore Products",
    buttonLink: "/products",
    image: "/products/black-shade-net3.jpg",
  },
  {
    id: 2,
    badge: "Trusted Partner",
    heading: "Your Trusted Partner in Agricultural Protection",
    description:
      "Providing durable, UV-stabilized Shade Nets and Tape Nets for farms, nurseries, and greenhouses.",
    buttonText: "Get a Quote",
    buttonLink: "/contact",
    image: "/hero10.jpg",
  },
];

const BACKGROUND_IMAGE = "/products/black-shade-net1.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    },
  },
};

const imageCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    rotate: 2,
    transition: {
      duration: 0.4,
    },
  },
};

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // GSAP animations
  useIsomorphicLayoutEffect(() => {
    if (!heroRef.current || !backgroundRef.current) return;

    const ctx = gsap.context(() => {
      // Background Ken Burns effect (slow cinematic scale)
      gsap.to(backgroundRef.current, {
        scale: 1.05,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      // Parallax scroll effect
      gsap.to(backgroundRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          markers: false,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Auto-play slider
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDER_CONTENT.length);
      }, 6000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current !== null) clearInterval(autoPlayRef.current);
    };
  }, []);

  const activeSlide = SLIDER_CONTENT[currentSlide];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#f7f8f5]"
    >
      {/* Background Image with Ken Burns Effect */}
      <div ref={backgroundRef} className="absolute inset-0 origin-center">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Genuine Agro Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen w-full items-center pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto w-full max-w-7xl pl-2 pr-6 lg:pl-4 lg:pr-10 xl:pl-6 xl:pr-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* LEFT CONTENT */}
            <div ref={contentRef} className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                >
                  {/* Badge */}
                  <motion.div
                    variants={itemVariants}
                    className="inline-flex w-fit items-center gap-3 rounded-full border border-[#b5cf7a] bg-[#eef6df] px-5 py-2"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#7A9F2A]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5D7F18]">
                      {activeSlide.badge}
                    </span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h1
                    variants={itemVariants}
                    className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[58px]"
                  >
                    {activeSlide.heading.split("\n").map((line, index) => (
                      <span key={index} className="block">
                        {line}
                      </span>
                    ))}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="mt-5 max-w-xl text-lg leading-8 text-[#E0E7DB]"
                  >
                    {activeSlide.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Buttons */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`button-${activeSlide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-9 flex flex-wrap gap-4"
                >
                  <Link
                    href={activeSlide.buttonLink}
                    className="group inline-flex items-center gap-2 rounded-xl bg-[#0B3A21] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#688822] hover:shadow-xl"
                  >
                    {activeSlide.buttonText}

                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-xl border border-[#0B3A21] bg-white px-8 py-4 text-base font-semibold text-[#0B3A21] transition-all duration-300 hover:bg-[#0B3A21] hover:text-white"
                  >
                    <Phone className="h-5 w-5" />
                    Contact Us
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex flex-wrap items-center gap-8 text-sm font-medium text-white"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7A9F2A]" />
                  Premium Quality
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7A9F2A]" />
                  UV Stabilized
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7A9F2A]" />
                  Pan India Supply
                </div>
              </motion.div>
            </div>

            {/* RIGHT HERO IMAGE */}
            <div className="absolute inset-y-0 -right-20 hidden lg:block w-[58%] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  variants={imageCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative h-full w-full"
                >
                  <div className="relative h-full w-full">
                    {/* Decorative Frame */}
                    <div
                      className="absolute -z-10 bg-[#D8B26E]"
                      style={{
                        top: "-6px", // Thin top
                        left: "-10px", // Medium left
                        right: "-2px", // Very thin right
                        bottom: "-24px", // Thick bottom
                        borderTopLeftRadius: "520px",
                      }}
                    />

                    {/* Image */}
                    <div
                      className="relative h-full w-full overflow-hidden"
                      style={{
                        borderTopLeftRadius: "500px",
                      }}
                    >
                      <Image
                        src={activeSlide.image}
                        alt={activeSlide.heading}
                        fill
                        priority
                        className="object-cover object-[100%_center]"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
