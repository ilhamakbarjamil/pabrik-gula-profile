import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-4">
          
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Berkah Gula Group
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Perusahaan gula 
              dengan standar kualitas tinggi.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Perusahaan
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Tentang</li>
              <li>Produk</li>
              <li>Galeri</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Kontak
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>info@berkahgula.com</li>
              <li>62 813-3328-3917</li>
              <li>Mojokerto, Indonesia</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Jam Operasional
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Senin - Jumat</li>
              <li>08:00 - 17:00</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
          © 2026 Berkah Gula Group. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}