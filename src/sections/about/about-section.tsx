"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  return (
<section id="tentang" className="relative overflow-hidden bg-white py-24 lg:py-32">      
      {/* Dekorasi Background */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* KONTEN KIRI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10 lg:col-span-5"
          >
            <div className="mb-5 inline-flex items-center gap-3">
              {/* <div className="h-[2px] w-10 bg-blue-600" /> */}
              <span className="text-sm font-bold uppercase tracking-[4px] text-blue-600">
                Tentang Kami
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Perusahaan Gula <br />
              Dengan <span className="text-blue-600">Standar Kualitas</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
              Berkah Gula Group merupakan perusahaan pengolahan gula yang
              berkomitmen menghadirkan produk berkualitas untuk kebutuhan
              industri, distribusi pasar nasional dan internasional.
            </p>
          </motion.div>

          {/* FOTO KANAN */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            // className="relative z-10 lg:col-span-7"
            className="relative z-10 lg:col-span-7 lg:translate-x-25"
          >
            <div className="relative">
              {/* Foto utama */}
              <div className="relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="relative h-[330px] overflow-hidden sm:h-[430px] lg:h-[560px]">
                  <img
                    src="/images/about.png"
                    alt="Fasilitas Pabrik Gula"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}