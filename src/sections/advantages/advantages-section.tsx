"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Factory, Truck, Leaf, Wheat } from "lucide-react";
import Container from "@/components/layout/container";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Kristal Standar SNI",
    description: "Kemurnian di atas rata-rata dengan pengawasan laboratorium ketat di setiap batch produksi.",
    image: "https://images.unsplash.com/photo-1581447100595-3a81308337ec?auto=format&fit=crop&q=80&w=400" // Foto gula kristal close-up
  },
  {
    icon: Wheat,
    title: "Tebu Pilihan",
    description: "Bekerjasama dengan ribuan petani lokal untuk memastikan pasokan tebu segar setiap hari.",
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=400" // Foto perkebunan tebu
  },
  {
    icon: Truck,
    title: "Distribusi Nasional",
    description: "Mesin ekstraksi otomatis yang memaksimalkan rendemen tebu tanpa merusak nutrisi alami.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b2d70b?auto=format&fit=crop&q=80&w=400" // Foto mesin pabrik
  },
  {
    icon: Truck,
    title: "Distribusi Internasional",
    description: "Armada pengiriman siap menjangkau gudang industri maupun distributor di seluruh pelosok.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400" // Foto truk/logistik
  },
];

export default function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fdfcfb] py-24 lg:py-36">
      
      {/* Texture Background - Kali ini pakai tekstur kertas/karung agar terasa organik */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <Container className="relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1"
          >
            <Wheat size={14} className="text-amber-700" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-amber-800">Keunggulan Kami</span>
          </motion.div> */}
          
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Menjaga Kualitas Dari <span className="text-blue-700">Ladang Hingga ke Meja.</span>
          </h2>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                {/* IMAGE AREA - Biar kerasa jualan produk fisik */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-8">
                  <h3 className="mb-3 text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="mt-auto h-1.5 w-0 bg-blue-700 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Quote / Sub-bottom - Menambah kesan korporasi besar */}
        {/* <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex flex-col items-center border-t border-slate-100 pt-10 text-center"
        >
          <p className="max-w-xl text-sm italic text-slate-400">
            "Bukan sekadar kemanisan, kami mendistribusikan standar kualitas yang telah dipercaya oleh ratusan industri makanan di Indonesia selama puluhan tahun."
          </p>
        </motion.div> */}
      </Container>
    </section>
  );
}