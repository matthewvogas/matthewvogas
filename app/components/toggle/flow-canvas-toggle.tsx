"use client";

import React from "react";
import { Icon } from "../../../components/icon/icon";
import { motion } from "framer-motion";
import { useFlowCanvasStore } from "../../store/flow-canvas-store";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

interface FlowCanvasToggleProps {
  initialState?: boolean;
}

export const FlowCanvasToggle = ({
  initialState = false,
}: FlowCanvasToggleProps) => {
  const { isEnabled, setEnabled } = useFlowCanvasStore();

  const handleToggle = () => {
    setEnabled(!isEnabled);
  };

  return (
    <div className="w-full flex items-center justify-end gap-2">
      <div className="flex items-center gap-1 group cursor-help">
        <span className="text-xs font-semibold text-gray-200/50 leading-[18px]">
          Canvas Mode
        </span>
        <Tippy
          content={
            <div className="text-sm p-1">
              <p className="text-xs text-white/75">
                Convert the site into an interactive flow canvas where you can move components and save
              </p>
            </div>
          }
          placement="top"
          className="bg-secondary"
        >
          <div className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity">
            <Icon name="HelpCircle" size={16} className="w-full h-full text-white/65" />
          </div>
        </Tippy>
      </div>

      <button
        onClick={handleToggle}
        className={`
          relative flex items-center w-9 h-5 rounded-full p-0.5 
          transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 
          focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark
          ${isEnabled ? "bg-[#28a044]" : "bg-white/20"}
        `}
        role="switch"
        aria-checked={isEnabled}
        aria-label="Toggle flow canvas mode"
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow-sm"
          animate={{
            x: isEnabled ? 16 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </button>
    </div>
  );
};
