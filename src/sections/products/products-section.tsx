"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MousePointer2 } from "lucide-react";
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
    desc: "Kepraktisan gula cair untuk industri minuman modern.",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=800",
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(2); // Start from the middle

  const next = () => setActive((prev) => (prev + 1) % products.length);
  const prev = () => setActive((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-40 text-white">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black opacity-50" />

      <Container className="relative z-10">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-500 mb-4"
          >
            Koleksi Produk
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light tracking-tight"
          >
            Rahasia <span className="font-serif italic text-blue-500">Manis</span> Nusantara
          </motion.h2>
          <p className="mt-4 text-neutral-400 font-light">Paduan kualitas tebu pilihan dari tanah pertiwi</p>
        </div>

        {/* CAROUSEL AREA */}
        <div className="relative flex h-[500px] items-center justify-center lg:h-[650px]">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 z-50 p-4 transition-all hover:scale-125 hover:text-blue-500 hidden md:block"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 z-50 p-4 transition-all hover:scale-125 hover:text-blue-500 hidden md:block"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* THE STACKED CARDS */}
          <div className="relative flex w-full max-w-sm items-center justify-center lg:max-w-md">
            {products.map((product, index) => {
              // Calculate position logic
              const offset = index - active;
              const isActive = index === active;
              const absOffset = Math.abs(offset);
              
              // Hide cards that are too far
              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: offset * 140, // Distance between cards
                    scale: 1 - absOffset * 0.15,
                    zIndex: products.length - absOffset,
                    opacity: 1 - absOffset * 0.3,
                    rotateY: offset * -15, // Djarum style rotation
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setActive(index)}
                  className={`absolute w-full cursor-pointer rounded-lg overflow-hidden bg-neutral-900 border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] ${isActive ? 'cursor-default' : 'hover:border-white/20'}`}
                >
                  <div className="relative aspect-[3/4] lg:aspect-[2/3]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Dark Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    {/* Card Content (Only fully visible on Active) */}
                    <div className={`absolute inset-x-0 bottom-0 p-8 text-center transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <h3 className="text-2xl font-bold tracking-tight mb-2 uppercase">{product.title}</h3>
                      <p className="text-xs text-neutral-400 mb-6 font-light uppercase tracking-widest">{product.desc}</p>
                      
                      <button className="inline-flex items-center gap-2 border border-white/30 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black">
                        Selengkapnya +
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SCROLL INDICATOR */}
        <div className="mt-20 flex flex-col items-center gap-4 opacity-30">
          <div className="text-[10px] uppercase tracking-[0.5em]">Scroll</div>
          <div className="h-12 w-[1px] bg-white animate-pulse" />
        </div>
      </Container>
    </section>
  );
}