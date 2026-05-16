"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Factory,
  History,
  BarChart3,
  Award,
  Leaf,
  ShieldCheck
} from "lucide-react";

import Container from "@/components/layout/container";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">

      {/* BACKGROUND IMAGE - Menggunakan file factory.jpg Anda */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/factory.jpg" // Mengarah ke public/images/factory.jpg
          alt="SugarCo Industrial Factory"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Overlay Putih ke Transparan: Menjaga kontras teks di sisi kiri */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-full lg:w-[75%]" />

        {/* Subtle Dark Overlay untuk mobile agar teks putih/gelap tetap terbaca */}
        <div className="absolute inset-0 bg-white/40 lg:hidden" />
      </div>

      <Container className="relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* CONTENT LEFT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#003B95] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                Berkah Gula Group
              </span>

              <h1 className="text-[#002B6B] text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.05] mb-8 tracking-tight">
                Manis Alami, <br />
                <span className="text-[#003B95]">Untuk Indonesia.</span>
              </h1>

              <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                Kami berkomitmen menghasilkan gula berkualitas tinggi secara berkelanjutan untuk kehidupan yang lebih baik.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <a href="#tentang">
                  <Button className="bg-[#003B95] hover:bg-[#002B6B] text-white px-10 py-7 rounded-md text-base font-bold transition-all shadow-xl shadow-blue-900/20">
                    Tentang Kami
                  </Button>
                </a>

                <a href="#produk">
                  <Button
                    variant="outline"
                    className="border-2 border-[#003B95] text-[#003B95] hover:bg-blue-50 px-10 py-7 rounded-md text-base font-bold"
                  >
                    Lihat Produk
                  </Button>
                </a>
              </div>


            </motion.div>
          </div>

          {/* RIGHT SIDE - FLOATING CARDS */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-end h-[600px]">

          </div>
        </div>
      </Container>
    </section>
  );
}

// Helper Components
function StatItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#003B95] bg-blue-50 p-2 rounded-lg">{icon}</div>
      <div>
        <h4 className="text-2xl font-bold text-[#002B6B] leading-none mb-1">{title}</h4>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.1em] font-bold">{desc}</p>
      </div>
    </div>
  );
}

function ValueItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <li className="flex gap-5 items-start">
      <div className="mt-1">{icon}</div>
      <div>
        <h5 className="font-bold text-base mb-1 tracking-tight">{title}</h5>
        <p className="text-sm text-blue-100/70 leading-snug">{desc}</p>
      </div>
    </li>
  );
}