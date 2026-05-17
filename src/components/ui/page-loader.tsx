"use client";

import { AnimatePresence, motion } from "framer-motion";

type PageLoaderProps = {
  isLoading: boolean;
};

export default function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="w-full max-w-sm px-6 text-center">
            <h1 className="text-xl font-semibold tracking-tight text-[#002B6B]">
              Berkah Gula Group
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Memuat halaman perusahaan
            </p>

            <div className="mx-auto mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-slate-200">
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
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}