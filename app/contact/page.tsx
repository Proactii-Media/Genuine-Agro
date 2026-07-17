"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
          <Image
            src="/contact.jpg"
            alt="Contact Genuine Agro"
            fill
            priority
            className="object-cover"
          />
        </section>

        {/* Contact Section */}
        <section className="bg-[#f8faf5] py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10 xl:px-16">
            {/* Left */}
            <div>
              <span className="rounded-full bg-[#a4cc2e]/10 px-5 py-2 text-sm font-semibold text-[#5c7b19]">
                Let's Connect
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#16331d]">
                We'd Love To Hear From You
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Whether you need product information, pricing, dealership
                inquiries or bulk orders, our team is ready to assist you.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg">
                  <div className="rounded-2xl bg-[#a4cc2e]/10 p-4">
                    <Phone className="h-6 w-6 text-[#5c7b19]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#16331d]">Phone</h3>

                    <p className="mt-1 text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg">
                  <div className="rounded-2xl bg-[#a4cc2e]/10 p-4">
                    <Mail className="h-6 w-6 text-[#5c7b19]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#16331d]">Email</h3>

                    <p className="mt-1 text-gray-600">info@genuineagro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg">
                  <div className="rounded-2xl bg-[#a4cc2e]/10 p-4">
                    <MapPin className="h-6 w-6 text-[#5c7b19]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#16331d]">Address</h3>

                    <p className="mt-1 text-gray-600">
                      Genuine Agro Shade Net
                      <br />
                      Vapi, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-[32px] bg-white p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#16331d]">
                Send an Inquiry
              </h3>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                />

                <select className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none">
                  <option>Select Product</option>

                  <option>35% Tape Net</option>

                  <option>50% Tape Net</option>

                  <option>75% Tape Net</option>

                  <option>90% Tape Net</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                />

                <button className="flex items-center rounded-full bg-[#a4cc2e] px-8 py-4 font-semibold text-[#16331d] transition hover:bg-[#95be28]">
                  Send Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-24 bg-[#f8faf5]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-16">
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3336.2879452600696!2d72.95541853!3d20.36065905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cffbd1a9cc47%3A0xb4613902e91a19a2!2sGenuine%20Agro%20Shade%20Net!5e1!3m2!1sen!2sin!4v1783750793416!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
