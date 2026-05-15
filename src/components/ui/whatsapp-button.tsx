import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "6281200000000";
    const message = "Halo, saya ingin bertanya tentang produk Berkah Gula Group.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
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
    bg-green-500
    text-white
    shadow-[0_10px_25px_rgba(34,197,94,0.35)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-green-600
  "
        >
            <MessageCircle size={28} />
        </a>

    );
}