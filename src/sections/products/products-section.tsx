"use client";

import { motion } from "framer-motion";
import { Check, ClipboardList, TrendingUp } from "lucide-react";
import Container from "@/components/layout/container";

const productList = [
  {
    title: "Gula Kristal Putih (GKP)",
    subtitle: "Konsumsi Umum & UMKM",
    description: "Gula tebu alami berkualitas tinggi untuk kebutuhan konsumsi harian, industri roti, dan katering. Diproses dengan standar SNI.",
    features: ["Kemasan Karung 50kg", "Warna Kuning Gading/Putih", "Icumsa 200-300", "Standar SNI"],
    image: "/images/product-karung.png", // Pastikan ada foto karung gula
    tag: "Terpopuler"
  },
  {
    title: "Gula Rafinasi (R1)",
    subtitle: "Khusus Industri Makanan",
    description: "Gula dengan tingkat kemurnian sangat tinggi dan warna yang lebih putih. Sangat cocok untuk produksi minuman dan makanan skala besar.",
    features: ["Kemasan Karung 50kg", "Tekstur Lebih Halus", "Icumsa < 45 (Sangat Putih)", "Izin Edar Industri"],
    image: "/images/product-rafinasi.png",
    tag: "High Grade"
  },
  {
    title: "Gula Retail / Repacking",
    subtitle: "Pasar Modern & Retailer",
    description: "Layanan gula kristal putih dalam kemasan praktis yang siap didistribusikan ke supermarket, toko kelontong, atau pasar retail.",
    features: ["Kemasan 1kg / 500gr", "Higienis & Rapi", "Siap Jual Langsung", "Custom Branding (Opsional)"],
    image: "/images/product-retail.png",
    tag: "B2C Ready"
  }
];

export default function ProductSection() {
  return (
    <section id="produk" className="bg-slate-50 py-20 lg:py-32">
      <Container>
        <div className="mb-16 text-center lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Katalog Produk</span>
            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-6xl">
              Pasokan Gula <span className="text-blue-600">Terbaik.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Kami menyediakan berbagai jenis gula sesuai kebutuhan spesifikasi bisnis Anda, mulai dari konsumsi hingga kebutuhan industri manufaktur.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {productList.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow">
                <p className="text-xs font-bold text-blue-600 uppercase mb-2">{product.subtitle}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{product.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs/Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Check size={12} className="text-blue-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Card */}
              <div className="p-6 border-t border-slate-50 bg-slate-50/50">
                <button className="w-full py-3 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl transition-all hover:bg-blue-600 hover:text-white">
                  Cek Harga Terbaru
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Tambahan B2B */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-16 p-8 rounded-3xl bg-blue-600 text-white flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <TrendingUp size={40} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Butuh Volume Sangat Besar (Tonase)?</h4>
              <p className="text-blue-100 text-sm">Dapatkan harga kontrak khusus untuk pengiriman rutin bulanan industri.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors">
            Hubungi Akun Manajer
          </button>
        </motion.div>
      </Container>
    </section>
  );
}