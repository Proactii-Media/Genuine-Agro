"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f8faf5] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-[#a4cc2e]/10 px-4 py-2 text-sm font-semibold text-[#a4cc2e]">
            Contact & Visit Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 lg:text-5xl">
            Let&apos;s Grow Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Looking for premium agricultural shade nets? Get in touch with our
            team or visit our manufacturing facility in Vapi, Gujarat.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Left Side */}
          <div className="rounded-3xl border border-[#a4cc2e]/20 bg-white p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you need shade nets, crop protection solutions, or bulk
              orders, our experts are ready to help you choose the right
              product.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a4cc2e]/10">
                  <Phone className="h-6 w-6 text-[#a4cc2e]" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <a
                    href="tel:+919999999999"
                    className="text-gray-600 hover:text-[#a4cc2e]"
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a4cc2e]/10">
                  <Mail className="h-6 w-6 text-[#a4cc2e]" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:info@genuineagro.com"
                    className="text-gray-600 hover:text-[#a4cc2e]"
                  >
                    info@genuineagro.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a4cc2e]/10">
                  <MapPin className="h-6 w-6 text-[#a4cc2e]" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="text-gray-600">
                    Genuine Agro Shade Net,
                    <br />
                    Vapi, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0B3A21] px-8 py-4 font-semibold text-white transition hover:bg-[#0B3A21]"
              >
                Send Inquiry
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="tel:+919999999999"
                className="rounded-xl border-2 border-[#a4cc2e] px-8 py-4 font-semibold text-[#a4cc2e] transition hover:bg-[#a4cc2e]/10"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="overflow-hidden rounded-3xl border border-[#a4cc2e]/20 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3336.2879452600696!2d72.95541853!3d20.36065905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cffbd1a9cc47%3A0xb4613902e91a19a2!2sGenuine%20Agro%20Shade%20Net!5e1!3m2!1sen!2sin!4v1783750793416!5m2!1sen!2sin"
              className="h-[550px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
