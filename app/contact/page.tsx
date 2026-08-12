"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          product: form.product,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      alert("Inquiry sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

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
                Let&apos;s Connect
              </span>

              <h2 className="mt-6 text-4xl font-bold text-[#16331d]">
                We&apos;d Love To Hear From You
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

                    <p className="mt-1 text-gray-600">+91 8905301528</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-lg">
                  <div className="rounded-2xl bg-[#a4cc2e]/10 p-4">
                    <Mail className="h-6 w-6 text-[#5c7b19]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#16331d]">Email</h3>

                    <p className="mt-1 text-gray-600">
                      genuine.agronet@gmail.com
                    </p>
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

              <form onSubmit={sendEmail} className="mt-8 space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                  required
                />

                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none"
                >
                  <option value="">Select Product</option>

                  <optgroup label="6 Gauge">
                    <option value="50% Shade Net">50% Shade Net</option>

                    <option value="75% Shade Net">75% Shade Net</option>

                    <option value="90% Shade Net">90% Shade Net</option>
                  </optgroup>

                  <optgroup label="9 Gauge">
                    <option value="50% Black Shade Net">
                      50% Black Shade Net
                    </option>

                    <option value="75% Greenhouse Shade Net">
                      75% Greenhouse Shade Net
                    </option>

                    <option value="90% Nursery Shade Net">
                      90% Nursery Shade Net
                    </option>
                  </optgroup>
                </select>

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#a4cc2e]"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center rounded-full bg-[#a4cc2e] px-8 py-4 font-semibold text-[#16331d] transition hover:bg-[#95be28] disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Inquiry"}

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
