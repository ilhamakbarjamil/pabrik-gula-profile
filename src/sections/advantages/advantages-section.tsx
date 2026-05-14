"use client";

import { ShieldCheck, Factory, Truck, Leaf } from "lucide-react";
import Container from "@/components/layout/container";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Standar Berkualitas",
    description: "Produk memenuhi standar nasional dan internasional.",
  },

  {
    icon: Factory,
    title: "Teknologi Modern",
    description: "Menggunakan mesin produksi modern dan efisien.",
  },

  {
    icon: Truck,
    title: "Distribusi Nasional",
    description: "Jaringan distribusi luas ke seluruh Indonesia.",
  },

  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description: "Produksi berkelanjutan dan peduli lingkungan.",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="heading-secondary mb-4">
            Keunggulan Perusahaan
          </h2>

          <p className="text-muted mx-auto max-w-2xl">
            Kami menghadirkan kualitas terbaik
            melalui teknologi modern dan standar produksi tinggi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="card-shadow rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-700">
                  <Icon size={32} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}