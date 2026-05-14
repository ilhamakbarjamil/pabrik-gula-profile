import Image from "next/image";
import Container from "@/components/layout/container";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="heading-secondary mb-4">
            Galeri Perusahaan
          </h2>

          <p className="text-muted">
            Aktivitas produksi dan fasilitas modern perusahaan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px]"
            >
              <Image
                src={image}
                alt="Gallery"
                width={700}
                height={700}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}