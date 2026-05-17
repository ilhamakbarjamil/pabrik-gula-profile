"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/sections/hero/hero-section";
import AboutSection from "@/sections/about/about-section";
import AdvantagesSection from "@/sections/advantages/advantages-section";
import ProductsSection from "@/sections/products/products-section";
import GallerySection from "@/sections/gallery/gallery-section";
import CTASection from "@/sections/cta/cta-section";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import PageLoader from "@/components/ui/page-loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />

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

        <section className="snap-start min-h-screen">
          {/* <GallerySection /> */}
          <CTASection />
      <Footer />
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
}