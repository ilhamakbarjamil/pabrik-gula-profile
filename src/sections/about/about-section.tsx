"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  // Array foto pabrik (Silakan ganti '/images/...' dengan path foto asli Anda)
  const factoryImages = [
    "/images/pabrik-1.jpg", 
    "/images/pabrik-2.jpg",
    "/images/pabrik-3.jpg",
    "/images/pabrik-4.jpg",
  ];

  // Konfigurasi posisi untuk efek kartu yang disusun miring dari atas ke bawah
  const cardTransforms = [
    { x: -60, y: -60, rotate: -12 },
    { x: -20, y: -20, rotate: -4 },
    { x: 20, y: 20, rotate: 4 },
    { x: 60, y: 60, rotate: 12 },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-slate-50/50 py-24 lg:py-32">
      {/* Background Decorative Blob */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* L E F T   S I D E (Teks & Deskripsi) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 rounded-full bg-blue-600"></span>
              <div className="text-sm font-bold uppercase tracking-[4px] text-blue-600">
                Tentang Kami
              </div>
            </div>

            <h2 className="heading-secondary mb-6 text-slate-900 lg:text-5xl lg:leading-tight font-bold">
              Perusahaan Gula Modern <br className="hidden lg:block" />
              Dengan <span className="text-blue-600">Standar Kualitas</span>
            </h2>

            <p className="text-muted mb-5 text-lg leading-relaxed text-slate-600">
              PT SugarCo Indonesia merupakan perusahaan
              pengolahan gula modern yang berkomitmen
              menghadirkan produk berkualitas tinggi
              dengan teknologi produksi terkini.
            </p>

            <p className="text-muted mb-10 leading-relaxed text-slate-600">
              Meskipun sebagai pemain baru yang inovatif, kami siap mendukung industri nasional melalui
              distribusi gula berkualitas untuk kebutuhan
              rumah tangga maupun industri besar.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700"
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>

          {/* R I G H T   S I D E (Animasi Foto Tumpuk Kartu) */}
          <div className="relative flex h-[400px] w-full items-center justify-center sm:h-[500px]">
            {factoryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, y: -50, rotate: 0 }}
                whileInView={{ 
                  opacity: 1, 
                  x: cardTransforms[index].x, 
                  y: cardTransforms[index].y, 
                  rotate: cardTransforms[index].rotate 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15, // Delay bertahap agar muncul satu per satu
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                // Efek hover agar foto yang disentuh sedikit membesar dan pindah ke paling atas
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className="absolute z-10 rounded-2xl bg-white p-2 shadow-xl shadow-slate-300/50 transition-all duration-300"
                style={{ zIndex: 10 + index }}
              >
                <div className="relative h-48 w-40 overflow-hidden rounded-xl sm:h-72 sm:w-56">
                  {/* Gunakan tag img standar atau Next/Image */}
                  <img
                    src={src}
                    alt={`Fasilitas Pabrik ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay gradasi tipis agar foto terlihat lebih dramatis */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}