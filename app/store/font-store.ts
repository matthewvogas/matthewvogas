import { create } from 'zustand';

interface FontState {
  fontIndex: number;
  setFontIndex: (index: number) => void;
  nextFont: (total: number) => void;
}

export const useFontStore = create<FontState>((set) => ({
  fontIndex: 0,
  setFontIndex: (index) => set({ fontIndex: index }),
  nextFont: (total) => set((state) => ({ fontIndex: (state.fontIndex + 1) % total })),
})); 