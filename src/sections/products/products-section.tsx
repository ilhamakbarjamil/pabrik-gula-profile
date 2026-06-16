"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

const products = [
  {
    title: "Gula Kristal Putih",
    desc: "Untuk kebutuhan konsumsi umum, distribusi pasar, dan kebutuhan harian masyarakat.",
    image:
      "images/kemasan_ritail.png",
  },
  {
    title: "Gula Industri",
    desc: "Untuk kebutuhan bahan baku industri makanan, minuman, pabrik, dan produksi skala besar.",
    image:
      "images/industri.png",
  },
  {
    title: "Gula Kemasan Retail",
    desc: "Untuk produk kemasan yang dijual langsung ke konsumen melalui toko, minimarket, swalayan, atau pasar modern.",
    image:
      "images/retail.png",
  },
];

export default function ProductsSection() {
  return (
    <section id="produk" className="relative w-full overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-teal-100/40 blur-[120px]" />
        <div className="absolute -right-[5%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[100px]" />
        <div className="absolute left-[30%] top-[40%] h-[300px] w-[300px] rounded-full bg-emerald-50/50 blur-[80px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Container className="relative z-20">
        <div className="mb-14 text-center lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl"
          >
            Produk <span className="text-blue-600">Unggulan Kami.</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-square w-full overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900">
                  {product.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}