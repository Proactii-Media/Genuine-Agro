"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    name: "Tape Nets",
    href: "/products/tape-nets",
    children: [
      {
        name: "6 Gauge",
        href: "/products/tape-nets/6-gauge",
        children: [
          {
            name: "50% 6 gauge Tape Net",
            href: "/products/tape-nets/50-percent",
          },
          {
            name: "75% 6 Gauge Tape Net ",
            href: "/products/tape-nets/75-percent",
          },
          {
            name: "90% 6 GaugeTape Net",
            href: "/products/tape-nets/90-percent",
          },
        ],
      },
      {
        name: "9 Gauge",
        href: "/products/tape-nets/9-gauge",
        children: [
          {
            name: "50% 6 gauge Tape Net",
            href: "/products/tape-nets/50-percent",
          },
          {
            name: "75% 6 Gauge Tape Net ",
            href: "/products/tape-nets/75-percent",
          },
          {
            name: "90% 6 GaugeTape Net",
            href: "/products/tape-nets/90-percent",
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeGaugeMenu, setActiveGaugeMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between overflow-visible px-6 lg:px-10">
          <Link href="/" className="relative shrink-0">
            <Image
              src="/AgroLogo.png"
              alt="Genuine Agro"
              width={420}
              height={150}
              priority
              className="h-40 w-auto object-contain"
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

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
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
                        onMouseLeave={() => setActiveSubMenu(null)}
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
                            className="absolute left-[35%] top-14 w-64 rounded-2xl border border-neutral-200 bg-white shadow-2xl"
                          >
                            {item.children.map((child) => (
                              <div
                                key={child.name}
                                className="relative"
                                onMouseEnter={() =>
                                  setActiveGaugeMenu(child.name)
                                }
                                onMouseLeave={() => setActiveGaugeMenu(null)}
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
                                      className="absolute left-[50%] top-14 w-72 rounded-2xl border border-neutral-200 bg-white shadow-2xl"
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
              href="/contact"
              className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-emerald-600"
            >
              Contact
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
                className="block rounded-xl px-5 py-4 text-lg font-medium hover:bg-neutral-100"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block rounded-xl px-5 py-4 text-lg font-medium hover:bg-neutral-100"
              >
                About
              </Link>

              <details className="rounded-xl bg-neutral-50">
                <summary className="cursor-pointer list-none px-5 py-4 text-lg font-medium">
                  Products
                </summary>

                <div className="pb-4">
                  {products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-8 py-3 text-neutral-600 hover:text-emerald-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/contact"
                className="block rounded-xl px-5 py-4 text-lg font-medium hover:bg-neutral-100"
              >
                Contact
              </Link>

              <Link
                href="/contact"
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
