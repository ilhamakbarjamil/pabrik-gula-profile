"use client";

import { motion } from "framer-motion";
import { Globe2, PackageCheck, Store } from "lucide-react";
import Container from "@/components/layout/container";

const products = [
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

export default function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fdfcfb] pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Texture - Memberi kesan premium */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.05]" />

      <Container className="relative z-10">
        {/* Header Section - Mengikuti style About agar konsisten */}
        <div className="mb-12 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-blue-700"></span>
              <span className="text-sm font-bold uppercase tracking-[4px] text-blue-700">
                Keunggulan Kami
              </span>
            </div>

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
          {products.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient: Dibuat lebih pekat di bawah agar teks terbaca */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                  {/* Icon Floating (Optional - Memberi kesan modern) */}
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <Icon size={24} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-2 text-sm font-bold text-blue-400 uppercase tracking-widest">
                      0{index + 1}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="h-2 w-0 bg-blue-700 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}