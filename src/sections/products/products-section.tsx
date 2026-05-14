import Image from "next/image";
import Container from "@/components/layout/container";

const products = [
  {
    title: "Gula Kristal Putih",
    image: "/images/product-1.jpg",
  },

  {
    title: "Gula Industri",
    image: "/images/product-2.jpg",
  },

  {
    title: "Gula Premium",
    image: "/images/product-3.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="heading-secondary mb-4">
            Produk Unggulan
          </h2>

          <p className="text-muted">
            Produk gula berkualitas tinggi untuk berbagai kebutuhan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] bg-white"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}