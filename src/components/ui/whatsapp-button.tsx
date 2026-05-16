import { FaWhatsapp } from "react-icons/fa";

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
        </a>
    );
}