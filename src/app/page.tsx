import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/sections/hero/hero-section";
import AboutSection from "@/sections/about/about-section";
import AdvantagesSection from "@/sections/advantages/advantages-section";
import ProductsSection from "@/sections/products/products-section";
import GallerySection from "@/sections/gallery/gallery-section";
import CTASection from "@/sections/cta/cta-section";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <section className="snap-start min-h-screen">
          <HeroSection />
        </section>

        <section className="snap-start min-h-screen">
          <AboutSection />
        </section>

        <section className="snap-start min-h-screen">
          <AdvantagesSection />
        </section>

        <section className="snap-start min-h-screen">
          <ProductsSection />
        </section>

        {/* <section className="snap-start min-h-screen">
          <GallerySection />
        </section> */}
      </main>
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}