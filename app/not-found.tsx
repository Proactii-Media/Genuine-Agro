import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-off-white px-5 text-center">
      <span className="font-display text-8xl font-bold text-emerald/20">404</span>
      <h1 className="mt-4 font-display text-3xl font-bold text-forest">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-foreground/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary" className="gap-2">
          <ArrowLeft size={18} />
          Back to Home
        </Button>
      </Link>
    </section>
  );
}
