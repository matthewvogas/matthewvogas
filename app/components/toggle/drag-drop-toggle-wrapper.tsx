"use client";

import React from "react";
import { DragDropToggle } from "./drag-drop-toggle";

export const DragDropToggleWrapper = () => {
  const handleToggle = (enabled: boolean) => {
    console.log('Drag and drop mode:', enabled ? 'enabled' : 'disabled');
  };

  return (
    <DragDropToggle
      initialState={false}
      onChange={handleToggle}
    />
  );
}; 