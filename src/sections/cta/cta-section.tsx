"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "@/components/layout/container";

export default function CTASection() {
  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281333283917";

  const whatsappMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Halo, saya ingin bertanya tentang produk dan kerja sama dengan Berkah Gula Group.";

  const encodedMessage = encodeURIComponent(whatsappMessage);

  const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const emailAddress =
    process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "info@berkahgulagroup.id";

  const emailSubject = "Permintaan Informasi Kerja Sama";

  const emailBody =
    "Halo Berkah Gula Group,\n\nSaya ingin bertanya mengenai produk dan peluang kerja sama.\n\nTerima kasih.";

  const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

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
    <section id="kontak" className="section-padding bg-slate-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 to-blue-500 p-10 md:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="heading-secondary mb-6 text-white">
                Siap Menjadi Mitra Industri Gula Terpercaya?
              </h2>

              <p className="max-w-xl leading-relaxed text-blue-100">
                Kami siap mendukung kebutuhan gula berkualitas tinggi untuk
                industri maupun distribusi nasional dan internasional.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <motion.button
                type="button"
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.03, x: -5 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full max-w-[280px] items-center justify-between rounded-lg bg-[#25D366] p-4 font-bold text-white shadow-lg transition-all hover:bg-[#20ba5a]"
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp size={26} />
                  <span>WhatsApp Kami</span>
                </div>

                <ArrowRight size={18} />
              </motion.button>

              <motion.a
                href={emailUrl}
                whileHover={{ scale: 1.03, x: -5 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full max-w-[280px] items-center justify-between rounded-lg bg-white p-4 font-bold text-blue-700 shadow-lg transition-all hover:bg-blue-50"
              >
                <div className="flex items-center gap-3">
                  <MdEmail size={26} />
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