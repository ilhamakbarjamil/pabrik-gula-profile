"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import { CheckCircle2, FileText, MessageCircle } from "lucide-react";

export default function ProductSection() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage =
    "Halo, saya ingin meminta penawaran harga untuk produk Gula Kristal Putih Nusakita (Bulk).";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleWhatsAppClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappAppUrl;
      setTimeout(() => {
        window.location.href = whatsappWebUrl;
      }, 1200);
      return;
    }
    window.open(whatsappWebUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="produk"
      className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32"
    >
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-60" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* KOLOM KIRI: SATU FOTO BESAR (sama dengan About) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl shadow-slate-200">
              <img
                src="/images/produk.png"
                alt="Produk Gula Nusakita Bulk"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105 md:aspect-[16/10] lg:aspect-[4/5]"
              />
            </div>
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-blue-50" />
          </motion.div>

          {/* KOLOM KANAN: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[4px] text-blue-600">
                Katalog Resmi
              </span>
            </div>

            <h2 className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
              Gula Pasir <br />
              <span className="text-blue-600">Nusakita (Bulk)</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Kami menyalurkan produk Gula Kristal Putih (GKP) merk Nusakita
              produksi PTPN Nusantara. Produk ini merupakan standar utama untuk
              kebutuhan industri makanan, katering, dan distribusi skala besar.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-5 border-b border-slate-100 pb-10 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Produksi PTPN</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Standar SNI Resmi</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Karung PP 50kg</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                <span className="font-semibold">Ready Stock Tonase</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700"
              >
                <MessageCircle size={20} />
                Minta Penawaran Harga
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-50"
              >
                <FileText size={20} className="text-blue-600" />
                Download COA
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}