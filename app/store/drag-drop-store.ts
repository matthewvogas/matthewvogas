import { create } from 'zustand';

interface DragDropState {
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

export const useDragDropStore = create<DragDropState>((set) => ({
  isEnabled: false,
  setEnabled: (enabled) => set({ isEnabled: enabled }),
})); 