"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Award, MessageCircle } from "lucide-react"; 
import Container from "@/components/layout/container";

const productList = [
  {
    title: "Nusakita Bulk (Karung)",
    subtitle: "Industri & Grosir",
    description: "Gula Kristal Putih produksi PTPN dalam kemasan karung 50kg. Pilihan utama untuk pabrik makanan, katering, dan agen besar.",
    features: ["Kemasan Karung 50kg", "Standar SNI & Halal", "Kualitas Gula Kristal Putih", "Harga Grosir Tangan Pertama"],
    image: "/images/nusakita-50kg.png", // PASTIKAN ADA FOTO
    tag: "Grosir"
  },
  {
    title: "Nusakita Retail (1kg)",
    subtitle: "Rumah Tangga & Toko",
    description: "Gula pasir premium kemasan 1kg yang higienis dan praktis. Cocok untuk stok rumah tangga atau dijual kembali di minimarket.",
    features: ["Kemasan Plastik 1kg", "Butiran Putih & Bersih", "Mudah Didistribusikan", "Siap Masuk Rak Retail"],
    image: "/images/nusakita-1kg.png", // PASTIKAN ADA FOTO
    tag: "Eceran"
  }
];

export default function ProductSection() {
  return (
    <section id="produk" className="bg-slate-50 py-20 lg:py-32">
      <Container>
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-[4px] text-blue-600">Pilihan Produk</span>
            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-6xl">
              Katalog Gula <span className="text-blue-600">Nusakita</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid Produk */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {productList.map((product, index) => (
            <motion.div
              key={index}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl"
            >
              {/* Tempat Foto Produk (Sangat Penting agar tidak kosong) */}
              <div className="relative h-64 w-full bg-slate-100 p-8 flex items-center justify-center overflow-hidden">
                 <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {product.tag}
                    </span>
                 </div>
              </div>

              <div className="flex flex-col p-8 lg:p-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">{product.subtitle}</p>
                <h3 className="mb-4 text-3xl font-bold text-slate-900">{product.title}</h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-500">
                  {product.description}
                </p>

                <ul className="mb-10 space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                        <Check size={12} className="text-blue-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tombol CTA Diubah Jadi Solid agar lebih "Pop" */}
                <button className="flex items-center justify-center gap-3 w-full rounded-2xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300">
                  <MessageCircle size={20} />
                  Minta Penawaran Harga
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Bawah Diperhalus Warnanya */}
        <motion.div 
           className="mt-16 rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white md:p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-6 items-center">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 border border-blue-500/30">
                <ShieldCheck size={32} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Produk Resmi & Terjamin</h4>
                <p className="mt-1 text-slate-400 text-sm max-w-md">
                  Jaminan keaslian produk karena kami mengambil langsung dari sistem distribusi **PTPN**.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <Award className="text-blue-400" size={32} />
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-slate-400 font-bold">Produksi Oleh</p>
                  <p className="text-lg font-bold">PTPN NUSANTARA</p>
                </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}