import Container from "./container";
import Button from "../ui/button";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Berkah Gula Group
          </h1>
        </div> */}

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#">Beranda</a>
          <a href="#">Tentang</a>
          <a href="#">Produk</a>
          <a href="#">Galeri</a>
          <a href="#">Kontak</a>
        </nav>

        <div className="hidden md:block">
          <Button>Hubungi Kami</Button>
        </div>

        <button className="md:hidden">
          ☰
        </button>
      </Container>
    </header>
  );
}