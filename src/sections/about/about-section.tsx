"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-blue-600">
              Tentang Kami
            </div>

            <h2 className="heading-secondary mb-6 text-slate-900">
              Perusahaan Gula Modern
              Dengan Standar Berkualitas
            </h2>

            <p className="text-muted mb-6 leading-relaxed">
              PT SugarCo Indonesia merupakan perusahaan
              pengolahan gula modern yang berkomitmen
              menghadirkan produk berkualitas tinggi
              dengan teknologi produksi terkini.
            </p>

            <p className="text-muted leading-relaxed">
              Kami mendukung industri nasional melalui
              distribusi gula berkualitas untuk kebutuhan
              rumah tangga maupun industri besar.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              
              <div className="card-shadow rounded-3xl bg-slate-50 p-8">
                <h3 className="mb-4 text-4xl font-bold text-blue-700">
                  80+
                </h3>

                <p className="text-slate-700">
                  Tahun pengalaman industri gula nasional
                </p>
              </div>

              <div className="card-shadow rounded-3xl bg-blue-600 p-8 text-white">
                <h3 className="mb-4 text-4xl font-bold">
                  1JT+
                </h3>

                <p>
                  Ton produksi gula setiap tahun
                </p>
              </div>

              <div className="card-shadow rounded-3xl bg-white p-8">
                <h3 className="mb-4 text-4xl font-bold text-blue-700">
                  2500+
                </h3>

                <p className="text-slate-700">
                  Mitra petani tebu di Indonesia
                </p>
              </div>

              <div className="card-shadow rounded-3xl bg-slate-900 p-8 text-white">
                <h3 className="mb-4 text-4xl font-bold">
                  5
                </h3>

                <p>
                  Fasilitas pabrik modern
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}