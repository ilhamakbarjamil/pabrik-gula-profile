import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import InitialPageLoader from "@/components/ui/initial-page-loader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Home:Berkah Gula Group",
  description:
    "Perusahaan gula modern Indonesia dengan standar kualitas tinggi.",

  keywords: [
    "gula indonesia",
    "perusahaan gula",
    "gula industri",
    "gula premium",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="loading">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html.loading { overflow: hidden; }
              html.loading #page-content { visibility: hidden; }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <InitialPageLoader />
        {children}
      </body>
    </html>
  );
}
