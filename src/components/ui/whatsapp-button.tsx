"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Halo, saya ingin bertanya tentang produk Berkah Gula Group.";

  if (!phoneNumber) return null;

  const encodedMessage = encodeURIComponent(message);

  const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

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
    <button
      type="button"
      onClick={handleClick}
      aria-label="Hubungi kami via WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-[999]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_25px_rgba(37,211,102,0.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#1ebe5d]
      "
    >
      <FaWhatsapp size={30} />
    </button>
  );
}