"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import { CheckCircle2 } from "lucide-react"; 

export default function AboutSection() {
  const stats = [
    { label: "Tahun Pengalaman", value: "10+" },
    { label: "Ton Gula / Bulan", value: "500+" },
    { label: "Mitra Aktif", value: "100+" },
  ];

  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32"
    >
      {/* Dekorasi Background */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-60" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          
          {/* KOLOM KIRI: SATU FOTO BESAR */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl shadow-slate-200">
              <img
                src="/images/about.png"
                alt="Fasilitas Gudang Berkah Gula Group"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105 md:aspect-[16/10] lg:aspect-[4/5]"
              />
            </div>
            {/* Aksen Dekoratif di belakang gambar */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-3xl bg-blue-600/10" />
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-blue-50" />
          </motion.div>

          {/* KOLOM KANAN: CONTENT (SESUAI REQUEST) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[4px] text-blue-600">
                Tentang Kami
              </span>
            </div>

            {/* Headline Size Tetap (4xl/6xl) */}
            <h2 className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
              Perusahaan Gula <br />
              Dengan <span className="text-blue-600">Standar Kualitas</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Berkah Gula Group merupakan penyedia gula yang berfokus pada pemenuhan kebutuhan gula berkualitas untuk berbagai keperluan, mulai dari kebutuhan usaha, agen, toko, hingga mitra dalam skala yang lebih luas.
            </p>

            {/* Fitur Utama */}
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Harga Tangan Pertama</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Pasokan Terjamin</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Kualitas SNI & Industri</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Pengiriman Cepat</span>
              </div>
            </div>

            {/* Statistik */}
            <div className="flex flex-wrap gap-10 border-t border-slate-100 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-black text-blue-600">{stat.value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}