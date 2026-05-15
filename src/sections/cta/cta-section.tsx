"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react"; // Import ikon yang kurang
import Container from "@/components/layout/container";

export default function CTASection() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 to-blue-500 p-10 md:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            
            <div>
              <h2 className="heading-secondary mb-6 text-white">
                Siap Menjadi Mitra
                Industri Gula Terpercaya?
              </h2>

              <p className="max-w-xl text-blue-100 leading-relaxed">
                Kami siap mendukung kebutuhan gula
                berkualitas tinggi untuk industri maupun distribusi nasional dan internasional.
              </p>
            </div>

            {/* SISI KANAN: TOMBOL AKSI */}
            <div className="flex flex-col gap-4 lg:items-end">
              
              {/* Tombol WhatsApp */}
              <motion.a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: -5 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full max-w-[280px] items-center justify-between rounded-2xl bg-[#25D366] p-4 font-bold text-white shadow-lg transition-all hover:bg-[#20ba5a]"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={24} />
                  <span>WhatsApp Kami</span>
                </div>
                <ArrowRight size={18} />
              </motion.a>

              {/* Tombol Email */}
              <motion.a
                href="mailto:your-email@sugarco.id"
                whileHover={{ scale: 1.03, x: -5 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full max-w-[280px] items-center justify-between rounded-2xl bg-white p-4 font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50"
              >
                <div className="flex items-center gap-3">
                  <Mail size={24} />
                  <span>Kirim Email</span>
                </div>
                <ArrowRight size={18} />
              </motion.a>

            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}