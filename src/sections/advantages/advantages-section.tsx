"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Wheat } from "lucide-react";
import Container from "@/components/layout/container";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Kristal Standar SNI",
    description:
      "Kemurnian di atas rata-rata dengan pengawasan laboratorium ketat di setiap batch produksi.",
    image:
      "https://images.unsplash.com/photo-1581447100595-3a81308337ec?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Wheat,
    title: "Tebu Pilihan",
    description:
      "Bekerjasama dengan ribuan petani lokal untuk memastikan pasokan tebu segar setiap hari.",
    image:
      "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Truck,
    title: "Distribusi Nasional",
    description:
      "Mesin ekstraksi otomatis yang memaksimalkan rendemen tebu tanpa merusak nutrisi alami.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?auto=format&fit=crop&q=80&w=400",
  },
  {
    icon: Truck,
    title: "Distribusi Internasional",
    description:
      "Armada pengiriman siap menjangkau gudang industri maupun distributor di seluruh pelosok.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fdfcfb] py-24 lg:py-36">
      {/* Texture Background */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.05]" />

      {/* Decorative Background Shape */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

      <Container className="relative z-10">
        {/* HEADER */}
        <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Menjaga Kualitas Dari{" "}
              <span className="text-blue-700">Ladang Hingga ke Meja.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="max-w-xl text-base leading-relaxed text-slate-500 lg:col-span-5"
          >
            Setiap proses kami dirancang untuk menjaga kualitas gula, mulai dari
            pemilihan bahan baku, pengolahan, hingga distribusi ke pelanggan.
          </motion.p>
        </div>

        {/* ADVANTAGE LAYOUT */}
        <div className="grid gap-6 lg:grid-cols-12 lg:auto-rows-[260px]">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            const cardLayout =
              index === 0
                ? "lg:col-span-6 lg:row-span-2"
                : index === 1
                  ? "lg:col-span-6"
                  : "lg:col-span-3";

            const imageHeight =
              index === 0 ? "h-72 lg:h-full" : "h-56 lg:h-full";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70 ${cardLayout}`}
              >
                {/* IMAGE */}
                <div className={`relative w-full overflow-hidden ${imageHeight}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                  {/* ICON */}
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-sm bg-white text-blue-700 shadow-lg">
                    <Icon size={26} />
                  </div>

                  {/* NUMBER */}
                  <div className="absolute right-6 top-6 text-5xl font-extrabold text-white/20">
                    0{index + 1}
                  </div>

                  {/* CONTENT OVERLAY */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="mb-3 text-2xl font-extrabold text-white">
                      {item.title}
                    </h3>

                    <p className="max-w-md text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* HOVER BORDER EFFECT */}
                <div className="pointer-events-none absolute inset-0 rounded-md ring-0 ring-blue-700/0 transition-all duration-500 group-hover:ring-4 group-hover:ring-blue-700/10" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}