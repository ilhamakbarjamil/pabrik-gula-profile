"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import Button from "@/components/ui/button";

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
                berkualitas tinggi untuk industri maupun distribusi nasional.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <Button>
                Hubungi Kami
              </Button>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}