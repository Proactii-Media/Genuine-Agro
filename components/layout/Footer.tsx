import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { company } from "@/data/company";
import { footerLinks } from "@/data/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#072B18] via-[#0B3A21] to-[#051A0F] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 xl:px-16 py-20 lg:py-24">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {/* Brand Column - Spans 2 columns on lg */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <div className="rounded-2xl bg-white p-5 shadow-2xl">
                <Image
                  src="/AgroLogo.png"
                  alt={company.name}
                  width={700}
                  height={280}
                  priority
                  className="h-36 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/70">
              {company.tagline}. Premium agricultural mesh solutions
              manufactured in Vapi, Gujarat.
            </p>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#a4cc2e]" />
              <span className="text-sm font-medium text-[#a4cc2e]">
                Trusted Agricultural Solutions
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-[#a4cc2e]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white hover:text-[#a4cc2e]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-[#a4cc2e]">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white hover:text-[#a4cc2e]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-[#a4cc2e]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#a4cc2e]" />
                <span>{company.address.full}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#a4cc2e]" />
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#a4cc2e]"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#a4cc2e]" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-[#a4cc2e]"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
