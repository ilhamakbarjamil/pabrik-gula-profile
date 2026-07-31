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
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("loading");

    requestAnimationFrame(() => {
      document.getElementById("initial-page-loader")?.remove();
    });
  }, []);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
      return;
    }

    const timeout = setTimeout(() => setShow(false), minVisibleDelay);
    return () => clearTimeout(timeout);
  }, [isLoading, minVisibleDelay]);

  useEffect(() => {
    if (!show) {
      document.documentElement.classList.remove("loading");
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Memuat halaman"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="w-full max-w-sm px-6 text-center">
            <h1
              className="text-xl font-semibold tracking-tight text-[#002B6B]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Berkah Gula Group
            </h1>

            <p
              className="mt-2 text-sm text-slate-500"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Memuat halaman
            </p>

            <div className="mx-auto mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-slate-200">
              {prefersReducedMotion ? (
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
