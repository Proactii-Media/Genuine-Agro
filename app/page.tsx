import HeroSection from "@/components/home/HeroSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LocationSection from "@/components/home/LocationSection";
import AboutSection from "@/components/home/AboutSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsPreview />
      <WhyChooseUs />
      <Testimonials />
      <LocationSection />
    </>
  );
}
