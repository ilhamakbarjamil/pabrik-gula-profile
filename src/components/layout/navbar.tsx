import Container from "./container";
import Button from "../ui/button";
import { Menu } from "lucide-react";

const navItems = [
  {
    label: "Beranda",
    href: "#beranda",
  },
  {
    label: "Tentang",
    href: "#tentang",
  },
  {
    label: "Produk",
    href: "#produk",
  },
  {
    label: "Galeri",
    href: "#galeri",
  },
  {
    label: "Kontak",
    href: "#kontak",
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* MENU KIRI */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden"
        >
          <Menu size={22} />
        </button>

        {/* TOMBOL KANAN */}
        <div className="hidden md:block translate-x-20">
          <Button>Hubungi Kami</Button>
        </div>
      </Container>
    </header>
  );
}