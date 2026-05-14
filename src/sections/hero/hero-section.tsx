"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/layout/container";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] pt-32 pb-20">
      
      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* BADGE */}
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
              Modern Sugar Industry Indonesia
            </div>

            {/* HEADING */}
            <h1 className="max-w-2xl font-poppins text-5xl font-bold leading-[1.1] text-slate-900 md:text-7xl">
              Premium Sugar
              <span className="block text-blue-600">
                Manufacturing
              </span>
              For Modern Industry
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
              PT SugarCo Indonesia menghadirkan
              produk gula berkualitas tinggi dengan
              teknologi modern dan distribusi nasional.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Explore Company
              </Button>

              <Button variant="outline">
                View Products
              </Button>
            </div>

            {/* MINI STATS */}
            <div className="mt-16 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  80+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  1M+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Annual Production
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  2500+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Farmer Partners
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[42px]">
              <Image
                src="/images/factory.jpg"
                alt="Factory"
                width={900}
                height={900}
                className="h-[700px] w-full object-cover"
              />
            </div>

            {/* FLOATING METRIC CARD */}
            <div className="absolute -left-10 top-10 w-[240px] rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-4 text-3xl">
                📈
              </div>

              <h3 className="text-4xl font-bold text-slate-900">
                98%
              </h3>

              <p className="mt-2 leading-relaxed text-slate-500">
                National industrial distribution growth.
              </p>
            </div>

            {/* SMALL IMAGE CARD */}
            <div className="absolute -bottom-10 right-0 overflow-hidden rounded-[32px] bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              <Image
                src="/images/product-1.jpg"
                alt="Sugar Product"
                width={240}
                height={240}
                className="h-[220px] w-[220px] rounded-[24px] object-cover"
              />
            </div>

            {/* BLUE FLOATING BOX */}
            <div className="absolute right-16 top-20 -z-10 h-[200px] w-[200px] rounded-[40px] bg-blue-600" />

          </motion.div>
        </div>
      </Container>
    </section>
  );
}