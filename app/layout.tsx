import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { baseMetadata, organizationSchema } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import GSAPProvider from "@/components/providers/GSAPProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <SmoothScrollProvider>
          <GSAPProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </GSAPProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
