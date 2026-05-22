"use client";

import { motion } from "framer-motion";
import { Globe2, PackageCheck, Store } from "lucide-react";
import Container from "@/components/layout/container";

const products = [
  {
    icon: PackageCheck,
    title: "Distribusi Nasional",
    description:
      "Gula berkualitas yang siap memenuhi kebutuhan pasar dalam negeri, mulai dari distributor, industri, hingga mitra bisnis skala besar.",
    image:
      "https://images.unsplash.com/photo-1581447100595-3a81308337ec?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Globe2,
    title: "Pasar Internasional",
    description:
      "Produk gula dengan standar mutu yang mendukung kebutuhan perdagangan global dan peluang ekspansi ke pasar internasional.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Store,
    title: "Kemasan Retail",
    description:
      "Produk gula kemasan praktis untuk kebutuhan rumah tangga, toko, minimarket, swalayan, dan pasar modern.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fdfcfb] py-24 lg:py-36">
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.05]" />

      {/* Soft Background Accent */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Produk Kami
            </span>

            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Produk Gula Untuk{" "}
              <span className="text-blue-700">Berbagai Kebutuhan Pasar.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="max-w-xl text-base leading-relaxed text-slate-500 lg:col-span-5"
          >
            Kami menyediakan produk gula berkualitas untuk kebutuhan distribusi
            nasional, pasar internasional, dan kemasan retail yang siap menjangkau
            konsumen secara luas.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70"
              >
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center bg-white text-blue-700 shadow-lg">
                    <Icon size={26} />
                  </div>

                  {/* Number */}
                  <div className="absolute right-6 top-6 text-5xl font-extrabold text-white/20">
                    0{index + 1}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="mb-3 text-2xl font-extrabold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="pointer-events-none absolute inset-0 ring-0 ring-blue-700/0 transition-all duration-500 group-hover:ring-4 group-hover:ring-blue-700/10" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}