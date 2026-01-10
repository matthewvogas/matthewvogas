"use client";

import { useEffect } from "react";
import { useFontStore } from "../store/font-store";

const fontFamilies = [
  "Redaction-Regular",
  "Redaction-Bold",
  "Redaction-Italic",
  "Redaction_100-Regular",
  "Redaction_70-Bold",
];

export function FontAutoCycle() {
  const { startAutoCycle, stopAutoCycle } = useFontStore();

  useEffect(() => {
    startAutoCycle(fontFamilies.length);
    return () => {
      stopAutoCycle();
    };
  }, [startAutoCycle, stopAutoCycle]);

  return null;
}
