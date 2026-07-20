import HeroSection from "@/components/home/HeroSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LocationSection from "@/components/home/LocationSection";
import AboutSection from "@/components/home/AboutSection";
import ProductApplications from "@/components/home/ProductApplication";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductApplications />
      <AboutSection />
      <ProductsPreview />
      <WhyChooseUs />
      <Testimonials />
      <LocationSection />
    </>
  );
}
