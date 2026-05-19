"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/sections/hero/hero-section";
import AboutSection from "@/sections/about/about-section";
import AdvantagesSection from "@/sections/advantages/advantages-section";
import ProductsSection from "@/sections/products/products-section";
import CTASection from "@/sections/cta/cta-section";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import PageLoader from "@/components/ui/page-loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />

      <Navbar />

      {/* <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"> */}
      <main className="h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory md:scroll-pt-20">
        {/* <section className="snap-start min-h-screen"> */}
        <section className="min-h-screen md:snap-start">
          <HeroSection />
        </section>

        {/* <section className="snap-start min-h-screen"> */}
        <section className="min-h-screen md:snap-start">
          <AboutSection />
        </section>

        {/* <section className="snap-start min-h-screen"> */}
        <section className="min-h-screen md:snap-start">
          <AdvantagesSection />
        </section>

        {/* <section className="snap-start min-h-screen"> */}
        <section className="min-h-screen md:snap-start">
          <ProductsSection />
        </section>

        {/* <section className="snap-start min-h-screen"> */}
        <section className="min-h-screen md:snap-start">
          <CTASection />
          <Footer />
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}