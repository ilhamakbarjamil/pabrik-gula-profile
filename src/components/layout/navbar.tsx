"use client";

import { useState } from "react";
import Container from "./container";
import Button from "../ui/button";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between">
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

  {/* SPACER MOBILE */}
  <div className="md:hidden" />

  {/* TOMBOL KANAN DESKTOP */}
  <div className="hidden md:block translate-x-20">
    <Button>
      <a href="#kontak">Hubungi Kami</a>
    </Button>
  </div>

  {/* MOBILE BUTTON KANAN */}
  <button
    type="button"
    aria-label="Open menu"
    onClick={() => setIsOpen(!isOpen)}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden"
  >
    {isOpen ? <X size={22} /> : <Menu size={22} />}
  </button>

  {/* MOBILE MENU */}
  {isOpen && (
    <div className="absolute left-0 top-20 w-full border-t border-slate-200 bg-white shadow-lg md:hidden">
      <nav className="flex flex-col px-5 py-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#kontak"
          onClick={() => setIsOpen(false)}
          className="mt-4 flex h-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white transition-colors hover:bg-blue-700"
        >
          Hubungi Kami
        </a>
      </nav>
    </div>
  )}
</Container>
    </header>
  );
}