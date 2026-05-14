import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/sections/hero/hero-section";
import AboutSection from "@/sections/about/about-section";
import AdvantagesSection from "@/sections/advantages/advantages-section";
import ProductsSection from "@/sections/products/products-section";
import GallerySection from "@/sections/gallery/gallery-section";
import CTASection from "@/sections/cta/cta-section";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <AdvantagesSection />

      <ProductsSection />

      <GallerySection />

      <CTASection />

      <Footer />
    </main>
  );
}