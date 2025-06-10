"use client";

import React from "react";
import { Icon } from "../icon/icon";
import { motion } from "framer-motion";
import { useDragDropStore } from "../../store/drag-drop-store";

interface DragDropToggleProps {
  initialState?: boolean;
}

export const DragDropToggle = ({ initialState = false }: DragDropToggleProps) => {
  const { isEnabled, setEnabled } = useDragDropStore();

  const handleToggle = () => {
    setEnabled(!isEnabled);
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <div className="flex items-center gap-1 group cursor-help">
        <span className="text-xs font-semibold text-gray-200/50 leading-[18px]">
          Drag and Drop mode
        </span>
        <div className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity">
          <Icon name="HelpCircle" size={16} className="w-full h-full" />
        </div>
      </div>

      <button
        onClick={handleToggle}
        className={`
          relative flex items-center w-9 h-5 rounded-full p-0.5 
          transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 
          focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark
          ${isEnabled ? 'bg-[#28a044]' : 'bg-white/20'}
        `}
        role="switch"
        aria-checked={isEnabled}
        aria-label="Toggle drag and drop mode"
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow-sm"
          animate={{
            x: isEnabled ? 16 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </button>
    </div>
  );
};
