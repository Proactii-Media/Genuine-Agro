import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { company } from "@/data/company";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-forest">
          Get in Touch
        </h2>
        <p className="mt-3 text-foreground/60">
          Visit our manufacturing facility in Vapi or reach out for product
          enquiries and custom quotes.
        </p>
      </div>

      <ul className="space-y-6">
        <li className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
            <MapPin size={22} />
          </div>
          <div>
            <p className="font-medium text-forest">Address</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/60">
              {company.address.line1}
              <br />
              {company.address.line2}
              <br />
              {company.address.city}, {company.address.state} {company.address.pincode}
              <br />
              {company.address.country}
            </p>
          </div>
        </li>

        <li className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
            <Phone size={22} />
          </div>
          <div>
            <p className="font-medium text-forest">Phone</p>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-foreground/60 hover:text-emerald"
            >
              {company.phone}
            </a>
          </div>
        </li>

        <li className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
            <Mail size={22} />
          </div>
          <div>
            <p className="font-medium text-forest">Email</p>
            <a
              href={`mailto:${company.email}`}
              className="mt-1 block text-sm text-foreground/60 hover:text-emerald"
            >
              {company.email}
            </a>
          </div>
        </li>

        <li className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
            <Clock size={22} />
          </div>
          <div>
            <p className="font-medium text-forest">Business Hours</p>
            <p className="mt-1 text-sm text-foreground/60">
              Mon – Sat: 9:00 AM – 6:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </li>
      </ul>

      <div className="overflow-hidden rounded-2xl shadow-lg">
        <iframe
          src={company.mapEmbed}
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Genuine Agro Shade Net location on Google Maps"
        />
      </div>
    </div>
  );
}
