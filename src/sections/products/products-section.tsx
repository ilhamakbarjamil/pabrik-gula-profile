"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

const products = [
  {
    title: "Gula Kristal Putih",
    desc: "Untuk kebutuhan konsumsi umum, distribusi pasar, dan kebutuhan harian masyarakat.",
    segment: "Konsumsi & distribusi",
    format: "Curah dan kemasan",
  },
  {
    title: "Gula Industri",
    desc: "Untuk kebutuhan bahan baku industri makanan, minuman, pabrik, dan produksi skala besar.",
    segment: "Industri makanan",
    format: "Pasokan skala besar",
  },
];

export default function ProductsSection() {
  return (
    <section id="produk" className="bg-[#fdfcfb] py-24 lg:py-32">
      <Container>
        <div className="mb-14 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Produk <span className="text-blue-600">Unggulan Kami.</span>
          </motion.h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Menyediakan kebutuhan gula untuk distribusi harian dan pasokan industri.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="grid gap-6 py-8 md:grid-cols-12 md:items-start lg:py-10"
            >
              <div className="md:col-span-4">
                <p className="text-sm font-semibold text-blue-700">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                  {product.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="max-w-xl text-base leading-relaxed text-slate-600">
                  {product.desc}
                </p>
              </div>

              <div className="grid gap-5 text-sm md:col-span-3">
                <div>
                  <p className="font-semibold text-slate-900">Segmen</p>
                  <p className="mt-1 text-slate-500">{product.segment}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Format</p>
                  <p className="mt-1 text-slate-500">{product.format}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
