"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, PackageCheck, Store } from "lucide-react";
import Container from "@/components/layout/container";

const advantages = [
  {
    icon: PackageCheck,
    title: "Distribusi Nasional",
    description:
      "Layanan pasokan gula skala besar ke seluruh pelosok negeri dengan jaminan logistik aman dan tepat waktu.",
    image: "/images/distribusi_nasional.png",
  },
  {
    icon: Globe2,
    title: "Pasar Internasional",
    description:
      "Memenuhi standar kualitas global untuk kebutuhan ekspor dan kemitraan industri manufaktur luar negeri.",
    image: "/images/internasional.png",
  },
  {
    icon: Store,
    title: "Kebutuhan Retail",
    description:
      "Menyediakan gula kemasan higienis untuk kebutuhan rumah tangga, toko retail, dan pelaku UMKM.",
    image: "/images/retail.png",
  },
];

export default function AdvantageSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animasi otomatis bergantian setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % advantages.length);
    }, 3000); // 3000ms = 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fdfcfb] pt-8 pb-20 lg:pt-12 lg:pb-32">
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.05]" />

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="mb-12 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-blue-700"></span>
              <span className="text-sm font-bold uppercase tracking-[4px] text-blue-700">
                Keunggulan Kami
              </span>
            </div> */}

            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
              Produk Gula Untuk{" "}
              <span className="text-blue-700">Berbagai Kebutuhan Pasar.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-slate-500 lg:col-span-5 lg:pb-2"
          >
            Kami berkomitmen memberikan kualitas terbaik dengan rantai distribusi yang efisien, mulai dari industri skala nasional hingga pasar retail internasional.
          </motion.p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveIndex(index)} // Jika mouse masuk, ganti fokus ke kartu ini
                className={`group relative overflow-hidden rounded-[2rem] bg-white transition-all duration-700 ${
                  isActive ? "shadow-2xl -translate-y-4 ring-1 ring-blue-100" : "shadow-md translate-y-0"
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 3 }}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent transition-opacity duration-700 ${
                    isActive ? "opacity-90" : "opacity-70"
                  }`} />

                  {/* Icon Floating */}
                  <div className={`absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-700 ${
                    isActive 
                    ? "bg-blue-600 border-blue-400 text-white scale-110 shadow-lg shadow-blue-500/50" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white scale-100"
                  }`}>
                    <Icon size={28} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className={`mb-3 text-sm font-bold transition-colors duration-500 ${
                        isActive ? "text-blue-400" : "text-white/60"
                    } uppercase tracking-widest`}>
                      0{index + 1}
                    </div>
                    <h3 className={`mb-4 text-2xl font-bold transition-all duration-500 ${
                        isActive ? "text-white scale-105 origin-left" : "text-white/90"
                    }`}>
                      {item.title}
                    </h3>
                    
                    {/* Description yang muncul otomatis */}
                    <div className={`grid transition-all duration-700 ease-in-out ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}>
                        <p className="overflow-hidden text-sm leading-relaxed text-slate-200">
                          {item.description}
                        </p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar Loader (Visual Indicator) */}
                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-slate-200/20">
                  {isActive && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear" }}
                      className="h-full bg-blue-600"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}