"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  const factoryImages = [
    "/images/pabrik-1.jpg", 
    "/images/pabrik-2.jpg",
    "/images/pabrik-3.jpg",
    "/images/pabrik-4.jpg",
  ];

  // Koordinat tumpukan kartu (diatur agar lebih menyebar ke kanan)
  const cardTransforms = [
    { x: -80, y: -80, rotate: -12 },
    { x: -30, y: -30, rotate: -4 },
    { x: 30, y: 30, rotate: 4 },
    { x: 100, y: 80, rotate: 12 }, // Kartu paling depan digeser lebih jauh ke kanan
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Dekorasi Background */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      
      <Container>
        {/* Menggunakan grid 12 kolom: 5 untuk teks, 7 untuk foto */}
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* SISI KIRI: KONTEN TEKS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 z-10"
          >
            <div className="mb-6">
              <div className="text-sm font-bold uppercase tracking-[4px] text-blue-600">
                Tentang Kami
              </div>
            </div>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Perusahaan Gula <br />
              Dengan <span className="text-blue-600">Standar Kualitas</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Berkah Gula Group merupakan perusahaan pengolahan gula  
              yang berkomitmen menghadirkan produk berkualitas 
            </p>

            {/* <p className="mb-10 text-slate-600 leading-relaxed">
              Meskipun sebagai pemain baru yang inovatif, kami siap mendukung 
              industri nasional melalui distribusi gula berkualitas untuk kebutuhan 
              rumah tangga maupun industri besar.
            </p> */}

            {/* <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-blue-600 px-10 py-4 font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-700"
            >
              Pelajari Lebih Lanjut
            </motion.button> */}
          </motion.div>

          {/* SISI KANAN: TUMPUKAN FOTO (DIPERBESAR & DIGESER) */}
          <div className="relative flex h-[500px] items-center justify-center lg:col-span-7 lg:h-[700px] lg:translate-x-40">
            {factoryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ 
                  opacity: 1, 
                  x: cardTransforms[index].x, 
                  y: cardTransforms[index].y, 
                  rotate: cardTransforms[index].rotate 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                    scale: 1.05, 
                    zIndex: 50,
                    rotate: 0 
                }}
                className="absolute rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-slate-200 border border-slate-100 transition-all duration-300"
                style={{ zIndex: 10 + index }}
              >
                {/* Ukuran Foto yang Diperbesar */}
                <div className="relative h-64 w-48 overflow-hidden rounded-[2rem] lg:h-[480px] lg:w-[340px]">
                  <img
                    src={src}
                    alt={`Fasilitas Pabrik ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {/* Efek Shadow di dalam foto agar lebih elegan */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            ))}

            {/* Aksen lingkaran dekoratif di belakang foto agar tidak sepi */}
            <div className="absolute -right-20 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-blue-50" />
          </div>

        </div>
      </Container>
    </section>
  );
}