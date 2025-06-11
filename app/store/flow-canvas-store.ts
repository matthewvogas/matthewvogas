import { create } from 'zustand';

interface FlowCanvasStore {
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

export const useFlowCanvasStore = create<FlowCanvasStore>((set) => ({
  isEnabled: false,
  setEnabled: (enabled) => set({ isEnabled: enabled }),
})); 