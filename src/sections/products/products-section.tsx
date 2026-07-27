"use client";

import { motion } from "framer-motion";
import { Check, FileText, BadgeCheck, Truck } from "lucide-react";
import Container from "@/components/layout/container";

const products = [
  {
    tag: "PREMIUM GRADE",
    category: "UNTUK INDUSTRI MAKANAN",
    title: "Nusakita GKP Grade 1",
    description: "Gula kristal putih dengan tingkat kemurnian tinggi dan warna lebih cerah. Standar khusus untuk pabrik roti, minuman, dan industri pangan.",
    specs: [
      "Icumsa 200 - 300 IU",
      "Kadar Air < 0.1%",
      "Kemasan Karung 50kg",
      "Sertifikasi SNI & Halal"
    ],
  },
  {
    tag: "BEST SELLER",
    category: "DISTRIBUSI NASIONAL",
    title: "Nusakita GKP Grade 2",
    description: "Gula kristal putih standar nasional yang ideal untuk pasokan pasar induk, agen sembako, dan kebutuhan UMKM di seluruh Indonesia.",
    specs: [
      "Icumsa 300 - 450 IU",
      "Butiran Kristal Alami",
      "Kemasan Karung 50kg",
      "Stok Ready Skala Besar"
    ],
  },
  {
    tag: "RECURRING SUPPLY",
    category: "KONTRAK INDUSTRI",
    title: "Pasokan Tonase Besar",
    description: "Layanan kontrak rutin bulanan untuk kebutuhan pabrik manufaktur dengan jaminan harga stabil dan prioritas pengiriman utama.",
    specs: [
      "Pengiriman Unit Wingbox",
      "Sistem Kontrak Tahunan",
      "Prioritas Stok Pabrik",
      "Dukungan Logistik 24/7"
    ],
  },
];

export default function ProductSection() {
  return (
    <section id="produk" className="bg-slate-50 py-20 lg:py-32">
      <Container>
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-[4px] text-blue-600">Layanan Produk</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Distribusi Gula <br />
              <span className="text-blue-600">Bulk Nusakita.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Kami fokus pada penyediaan Gula Kristal Putih skala besar langsung dari PTPN untuk memenuhi standar teknis industri dan kebutuhan pasar nasional.
            </p>
          </motion.div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200"
            >
              {/* Badge Tag */}
              <div className="mb-8 flex">
                <span className="rounded-lg bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-blue-100">
                  {product.tag}
                </span>
              </div>

              {/* Title & Category */}
              <div className="mb-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-500 mb-2">
                  {product.category}
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 lg:text-3xl">
                  {product.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mb-8 text-sm leading-relaxed text-slate-500">
                {product.description}
              </p>

              {/* Specs Checklist */}
              <ul className="mb-10 flex-grow space-y-4">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[13px] font-medium text-slate-700">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <Check size={12} className="text-blue-600" />
                    </div>
                    {spec}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-blue-600 bg-white py-4 text-sm font-bold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white group-hover:shadow-lg group-hover:shadow-blue-100">
                <FileText size={18} />
                Cek Penawaran Harga
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer (B2B Authority) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-50 grayscale transition-all hover:grayscale-0"
        >
          <div className="flex items-center gap-2">
             <BadgeCheck className="text-slate-600" />
             <span className="font-bold text-slate-600 uppercase tracking-tighter">Sertifikasi SNI</span>
          </div>
          <div className="flex items-center gap-2">
             <BadgeCheck className="text-slate-600" />
             <span className="font-bold text-slate-600 uppercase tracking-tighter">Izin Edar BPOM</span>
          </div>
          <div className="flex items-center gap-2">
             <BadgeCheck className="text-slate-600" />
             <span className="font-bold text-slate-600 uppercase tracking-tighter">Standar PTPN Nusantara</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}