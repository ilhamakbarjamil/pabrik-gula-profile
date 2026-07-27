"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import Container from "@/components/layout/container";
import { CheckCircle2 } from "lucide-react";

// Komponen Pendukung untuk Animasi Angka
type CounterProps = {
  value: string;
  duration?: number;
};

function Counter({ value, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Mengambil angka saja dari string (misal "500+" jadi 500)
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const controls = animate(0, numericValue, {
        duration: duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

type Stat = {
  label: string;
  value: string;
};

export default function AboutSection() {
  const stats: Stat[] = [
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
            {/* Shadow dekoratif biru di belakang gambar telah dihapus sesuai request */}
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-blue-50" />
          </motion.div>

          {/* KOLOM KANAN: CONTENT */}
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

            {/* Statistik dengan Animasi Angka Bergerak */}
            <div className="flex flex-wrap gap-10 border-t border-slate-100 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-black text-blue-600">
                    <Counter value={stat.value} />
                  </div>
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