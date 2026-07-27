"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PageLoaderProps = {
  /** true selama asset/elemen halaman masih dimuat */
  isLoading: boolean;
  /** jeda (ms) setelah asset 100% selesai, sebelum loader disembunyikan */
  minVisibleDelay?: number;
};

export default function PageLoader({
  isLoading,
  minVisibleDelay = 800,
}: PageLoaderProps) {
  const prefersReducedMotion = useReducedMotion();

  // "show" adalah state visual loader, terpisah dari "isLoading" (status asset).
  // Ini yang memungkinkan kita menahan loader tetap tampil sesaat
  // walau asset sudah 100% selesai.
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      // Asset masih/kembali loading -> tampilkan overlay langsung, tanpa jeda
      setShow(true);
      return;
    }

    // Semua asset sudah 100% termuat -> tahan sebentar sebelum overlay hilang,
    // supaya transisi ke halaman terasa lebih halus (tidak "kaget").
    const timeout = setTimeout(() => setShow(false), minVisibleDelay);
    return () => clearTimeout(timeout);
  }, [isLoading, minVisibleDelay]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Memuat halaman"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="w-full max-w-sm px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-xl font-semibold tracking-tight text-[#002B6B]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Berkah Gula Group
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="mt-2 text-sm text-slate-500"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Memuat halaman
            </motion.p>

            <div className="mx-auto mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-slate-200">
              {prefersReducedMotion ? (
                // Statis untuk pengguna yang mengaktifkan "reduce motion"
                <div className="h-full w-full rounded-full bg-[#003B95]" />
              ) : (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                    ease: "easeInOut",
                  }}
                  className="h-full w-24 rounded-full bg-[#003B95]"
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}