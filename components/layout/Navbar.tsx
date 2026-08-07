"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    name: "Shade Nets",
    href: "/products/tape-nets",
    children: [
      {
        name: "6 Gauge",
        href: "/products/6-gauge",
        children: [
          {
            name: "50% 6 gauge Shade Net",
            href: "/products/6-gauge/50-percent",
          },
          {
            name: "75% 6 Gauge Shade Net ",
            href: "/products/6-gauge/75-percent",
          },
          {
            name: "90% 6 GaugeShade Net",
            href: "/products/6-gauge/90-percent",
          },
          {
            name: "Color Shade Net",
            href: "/products/6-gauge/color6",
          },
          {
            name: "Multi Color Shade Net",
            href: "/products/6-gauge/multi-color6",
          },
        ],
      },
      {
        name: "9 Gauge",
        href: "/products/9-gauge",
        children: [
          {
            name: "50% 9 Gauge Black Shade Net",
            href: "/products/9-gauge/black-shade-net",
          },
          {
            name: "75% 9 Gauge Greenhouse Shade Net ",
            href: "/products/9-gauge/greenhouse-shade-net",
          },
          {
            name: "90% 9 Gauge Nursery Net",
            href: "/products/9-gauge/nursery-net",
          },
          {
            name: "Color Shade Net",
            href: "/products/9-gauge/color9",
          },
          {
            name: "Multi Color Shade Net",
            href: "/products/9-gauge/multi-color9",
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeGaugeMenu, setActiveGaugeMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setActiveSubMenu(null);
        setActiveGaugeMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between overflow-visible px-6 lg:px-10">
          <Link href="/" className="relative shrink-0 overflow-visible">
            <Image
              src="/AgroLogo.png"
              alt="Genuine Agro"
              width={600}
              height={220}
              priority
              className="h-52 w-auto object-contain"
            />
          </Link>
          {/* Desktop */}
          <nav className="hidden items-center gap-10 lg:flex">
            <Link
              href="/"
              className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-emerald-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-emerald-600"
            >
              About
            </Link>

            <Link
              href="/quality-policy"
              className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-emerald-600"
            >
              Quality Policy
            </Link>

            {/* Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <button className="flex items-center gap-1 text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-emerald-600">
                Products
                <ChevronDown
                  size={16}
                  className={`transition ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-5 w-72 overflow-visible rounded-2xl border border-neutral-200 bg-white shadow-2xl"
                  >
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(item.name)}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 text-sm text-neutral-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          {item.name}
                          {item.children && (
                            <ChevronDown className="-rotate-90 h-4 w-4" />
                          )}
                        </Link>

                        {item.children && activeSubMenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute left-[5%] top-14 w-64 rounded-2xl border border-neutral-200 bg-white shadow-2xl"
                          >
                            {item.children.map((child) => (
                              <div
                                key={child.name}
                                className="relative"
                                onMouseEnter={() =>
                                  setActiveGaugeMenu(child.name)
                                }
                              >
                                <Link
                                  href={child.href}
                                  className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 text-sm text-neutral-700 transition hover:bg-emerald-50 hover:text-emerald-600"
                                >
                                  {child.name}

                                  {child.children && (
                                    <ChevronDown className="-rotate-90 h-4 w-4" />
                                  )}
                                </Link>

                                {child.children &&
                                  activeGaugeMenu === child.name && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 10 }}
                                      className="absolute left-[100%] top-0 w-72 rounded-2xl border border-neutral-200 bg-white shadow-2xl"
                                    >
                                      {child.children.map((gauge) => (
                                        <Link
                                          key={gauge.name}
                                          href={gauge.href}
                                          className="block border-b border-neutral-100 px-5 py-4 text-sm text-neutral-700 transition hover:bg-emerald-50 hover:text-emerald-600 last:border-none"
                                        >
                                          {gauge.name}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/applications"
              className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-emerald-600"
            >
              Applications
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl"
            >
              Inquiry
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-28 lg:hidden"
          >
            <div className="space-y-1 px-6">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-5 py-4 text-lg font-medium hover:bg-neutral-100"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-5 py-4 text-lg font-medium hover:bg-neutral-100"
              >
                About
              </Link>

              <Link
                href="/quality-policy"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-5 py-4 text-lg font-medium hover:bg-neutral-100"
              >
                Quality Policy
              </Link>

              <details className="rounded-xl bg-neutral-50">
                <summary className="cursor-pointer list-none px-5 py-4 text-lg font-medium">
                  Products
                </summary>

                <div className="pb-3">
                  {products.map((product) => (
                    <details key={product.name} className="ml-4">
                      <summary className="cursor-pointer list-none rounded-lg px-4 py-3 font-medium text-neutral-700 hover:bg-neutral-100">
                        {product.name}
                      </summary>

                      <div className="ml-4">
                        {product.children?.map((gauge) => (
                          <details key={gauge.name} className="mt-1">
                            <summary className="cursor-pointer list-none rounded-lg px-4 py-3 text-neutral-600 hover:bg-neutral-100">
                              {gauge.name}
                            </summary>

                            <div className="ml-5 border-l border-neutral-200">
                              {gauge.children?.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-3 text-sm text-neutral-500 transition hover:bg-emerald-50 hover:text-emerald-600"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </details>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </details>

              <Link
                href="/applications"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-5 py-4 text-lg font-medium hover:bg-neutral-100"
              >
                Applications
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 block rounded-full bg-emerald-600 py-4 text-center font-semibold text-white"
              >
                Inquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
