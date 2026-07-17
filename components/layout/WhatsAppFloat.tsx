"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloat() {
  const whatsappUrl = formatWhatsAppUrl(
    `Hello ${company.name}, I would like to enquire about your agricultural shade net products.`
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] pulse-ring" />
      <MessageCircle size={26} className="relative z-10" fill="white" />
    </a>
  );
}
