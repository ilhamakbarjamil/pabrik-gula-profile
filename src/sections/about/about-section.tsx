"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Dekorasi Background */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <Container>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center justify-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[4px] text-blue-600">
                Tentang Kami
              </span>
            </div>

            <h2 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Perusahaan Gula <br />
              Dengan <span className="text-blue-600">Standar Kualitas</span>
            </h2>
          </motion.div>

          {/* IMAGE DI BAWAH JUDUL */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-5xl"
          >
            <div className="relative overflow-hidden shadow-2xl shadow-slate-200">
              <div className="relative h-[300px] overflow-hidden sm:h-[420px] lg:h-[520px]">
                <img
                  src="/images/about.png"
                  alt="Fasilitas Pabrik Gula"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* PARAGRAF */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            Berkah Gula Group merupakan penyedia dan gudang gula yang berfokus pada pemenuhan kebutuhan gula berkualitas untuk berbagai keperluan, mulai dari kebutuhan usaha, agen, toko, hingga mitra dalam skala yang lebih luas. Dengan komitmen pada kualitas produk, ketersediaan stok, dan pelayanan yang profesional, kami hadir sebagai mitra terpercaya dalam penyediaan gula untuk mendukung kebutuhan pasar secara berkelanjutan.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}