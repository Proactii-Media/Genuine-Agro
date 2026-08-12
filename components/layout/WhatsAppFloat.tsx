"use client";

import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloat() {
  const whatsappUrl = formatWhatsAppUrl(
    `Hello ${company.name}, I would like to enquire about your shade net products.`,
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Chat Bar */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mr-[-12px]
          flex h-12 items-center
          rounded-l-full
          border border-[#D8B26E]/70
          bg-gradient-to-r from-[#0B3A21] via-[#0F5A32] to-[#25D366]
          px-5 pr-8
          text-sm font-semibold text-white
          shadow-[0_8px_30px_rgba(7,43,24,0.35)]
          transition-all duration-300
          hover:-translate-x-1
          hover:shadow-[0_10px_35px_rgba(7,43,24,0.5)]
        "
      >
        Chat on WhatsApp
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative
          flex h-14 w-14
          items-center justify-center
          rounded-full
          border-2 border-white
          bg-gradient-to-br from-[#25D366] to-[#128C7E]
          text-white
          shadow-[0_8px_30px_rgba(37,211,102,0.5)]
          transition-all duration-300
          hover:scale-110
          hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)]
          active:scale-95
        "
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse */}
        <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />

        <MessageCircle
          size={27}
          className="relative z-10"
          strokeWidth={2.5}
          fill="white"
        />
      </a>
    </div>
  );
}
