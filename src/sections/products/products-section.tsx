"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/layout/container";

const products = [
  {
    title: "Gula Kristal Putih",
    desc: "Kemurnian kristal pilihan dari tebu berkualitas tinggi.",
    image: "https://images.unsplash.com/photo-1581447100595-3a81308337ec?q=80&w=800",
  },
  {
    title: "Gula Industri",
    desc: "Solusi bahan baku manis untuk skala produksi besar.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?q=80&w=800",
  },
  {
    title: "Gula Premium",
    desc: "Butiran halus dengan standar filtrasi tingkat tinggi.",
    image: "https://images.unsplash.com/photo-1622212999396-85750278770a?q=80&w=800",
  },
  {
    title: "Gula Cokelat",
    desc: "Sentuhan rasa karamel alami untuk kuliner khas.",
    image: "https://images.unsplash.com/photo-1610450949065-2f22da60bc6e?q=80&w=800",
  },
  {
    title: "Liquid Sugar",
    desc: "Kepraktisan gula cair untuk industri modern.",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=800",
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(2);

  // Animasi yang lebih cepat (Snappy)
  // const springConfig = { type: "spring", stiffness: 300, damping: 30 };
  const springConfig = {
    type: "tween",
    duration: 0.4,    // Ganti angka ini (0.4 = 400ms). Semakin kecil semakin cepat.
    ease: "easeInOut"
  };

  const next = () => setActive((prev) => (prev + 1) % products.length);
  const prev = () => setActive((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section id="produk" className="relative h-screen w-full overflow-hidden bg-[#f8fafc] flex items-center">

      {/* 1. BACKGROUND MESH GRADIENT (Referensi Doku) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-teal-100/40 blur-[120px]" />
        <div className="absolute -right-[5%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[100px]" />
        <div className="absolute left-[30%] top-[40%] h-[300px] w-[300px] rounded-full bg-emerald-50/50 blur-[80px]" />
      </div>

      {/* Noise Texture (Konsistensi 10jt) */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Container className="relative z-20 flex flex-col items-center">

        {/* HEADER - Disamakan dengan About & Advantages */}
        <div className="mb-12 text-center lg:mb-16">
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex justify-center items-center gap-3"
          >
            <div className="h-[2px] w-8 bg-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-[4px] text-blue-600">Our Collection</span>
            <div className="h-[2px] w-8 bg-blue-600" />
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl"
          >
            Produk <span className="text-blue-600">Unggulan Kami.</span>
          </motion.h2>
        </div>

        {/* 2. MAIN CAROUSEL AREA */}
        <div className="relative flex w-full items-center justify-center h-[58vh] lg:h-[65vh] perspective-1000">

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 z-50 flex -translate-y-1/2 justify-between px-2 lg:px-10">
            <button onClick={prev} className="p-4 text-slate-400 transition-all hover:scale-110 hover:text-blue-600">
              <ChevronLeft size={48} strokeWidth={1.5} />
            </button>
            <button onClick={next} className="p-4 text-slate-400 transition-all hover:scale-110 hover:text-blue-600">
              <ChevronRight size={48} strokeWidth={1.5} />
            </button>
          </div>

          {/* THE STACKED CARDS */}
          <div className="relative flex h-full w-full max-w-[260px] items-center justify-center lg:max-w-[300px]">
            {products.map((product, index) => {
              const offset = index - active;
              const isActive = index === active;
              const absOffset = Math.abs(offset);

              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: offset * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 90 : 180),
                    scale: 1 - absOffset * 0.15,
                    zIndex: products.length - absOffset,
                    opacity: 1 - absOffset * 0.4,
                    rotateY: offset * -20,
                  }}
                  transition={springConfig}
                  onClick={() => setActive(index)}
                  className={`absolute h-full w-full cursor-pointer overflow-hidden rounded-md border border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 ${isActive ? 'cursor-default ring-2 ring-blue-600/10' : 'hover:border-blue-200'}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

                  {/* Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-x-0 bottom-0 p-8 text-center"
                      >
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-white uppercase">
                          {product.title}
                        </h3>
                        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                          {product.desc}
                        </p>
                        <button className="rounded-full bg-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-blue-600 hover:text-white">
                          Selengkapnya
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. PROGRESS INDICATOR */}
        <div className="mt-12 flex gap-3">
          {products.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] transition-all duration-500 rounded-full ${i === active ? 'w-12 bg-blue-600' : 'w-4 bg-slate-200'}`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}