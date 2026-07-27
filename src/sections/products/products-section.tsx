"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function ProductSection() {
  return (
    <section id="produk" className="bg-white py-20 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* SISI KIRI: VISUAL PRODUK YANG BERSIH */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-slate-50 rounded-3xl p-12 flex items-center justify-center min-h-[500px]"
          >
            {/* Foto Karung Nusakita (Satu Saja, Besar) */}
            <img 
              src="/images/nusakita-bulk.png" 
              alt="Nusakita Gula Kristal Putih 50kg" 
              className="max-h-[450px] w-auto drop-shadow-2xl"
            />
            {/* Keterangan Fisik Kecil di pojok */}
            <div className="absolute bottom-8 left-8 border-l-2 border-blue-600 pl-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Kemasan Standar</p>
              <p className="text-sm font-bold text-slate-900">Karung PP 50 Kilogram</p>
            </div>
          </motion.div>

          {/* SISI KANAN: DETAIL TEKNIS (DATA-DRIVEN) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col pt-4"
          >
            <span className="text-blue-600 font-bold tracking-[3px] text-xs uppercase mb-4">Katalog Resmi</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Gula Kristal Putih <br /> Nusakita (Bulk)
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Kami menyalurkan produk Gula Kristal Putih (GKP) merk Nusakita produksi PTPN Nusantara. Produk ini merupakan standar utama untuk kebutuhan distribusi pasar, industri makanan, dan stok gudang skala besar.
            </p>

            {/* TABEL SPESIFIKASI (Terlihat sangat profesional & bukan AI) */}
            <div className="border-t border-slate-100">
              <div className="grid grid-cols-2 py-4 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-400 uppercase">Produksi</span>
                <span className="text-sm font-bold text-slate-900">PTPN Nusantara</span>
              </div>
              <div className="grid grid-cols-2 py-4 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-400 uppercase">Standarisasi</span>
                <span className="text-sm font-bold text-slate-900">SNI 3140.3:2010</span>
              </div>
              <div className="grid grid-cols-2 py-4 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-400 uppercase">Kemasan</span>
                <span className="text-sm font-bold text-slate-900">Karung dengan Lapisan Plastik</span>
              </div>
              <div className="grid grid-cols-2 py-4 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-400 uppercase">Kapasitas</span>
                <span className="text-sm font-bold text-slate-900">Skala Tonase (Ready Stock)</span>
              </div>
            </div>

            {/* CTA YANG SIMPEL */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all text-center">
                Minta Penawaran Harga
              </button>
              <button className="border border-slate-200 text-slate-900 px-10 py-5 rounded-xl font-bold hover:bg-slate-50 transition-all text-center">
                Download COA Produk
              </button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}