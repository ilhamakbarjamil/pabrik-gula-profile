"use client";

import { useEffect, useState } from "react";

import { waitForPageAssets } from "@/lib/wait-for-page-assets";

export function usePageReady() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    waitForPageAssets().then(() => {
      if (!cancelled) {
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return isLoading;
}
