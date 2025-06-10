"use client";

import React from "react";
import { Icon } from "../../../components/icon/icon";
import { motion } from "framer-motion";
import { useFontStore } from "../../store/font-store";

interface FontCycleToggleProps {
  fontFamilies: string[];
}

export const FontCycleToggle = ({ fontFamilies }: FontCycleToggleProps) => {
  const { nextFont } = useFontStore();

  const handleClick = () => {
    nextFont(fontFamilies.length);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-semibold text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark"
      aria-label="Cycle font for title"
      type="button"
    >
      <Icon name="Type" size={18} className="mr-2" />
      Play with Fonts
    </button>
  );
}; 