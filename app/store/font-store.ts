import { create } from 'zustand';

interface FontState {
  fontIndex: number;
  setFontIndex: (index: number) => void;
  nextFont: (total: number) => void;
  autoCycleInterval: NodeJS.Timeout | null;
  startAutoCycle: (total: number) => void;
  stopAutoCycle: () => void;
}

export const useFontStore = create<FontState>((set, get) => ({
  fontIndex: 0,
  autoCycleInterval: null,
  setFontIndex: (index) => set({ fontIndex: index }),
  nextFont: (total) => set((state) => ({ fontIndex: (state.fontIndex + 1) % total })),
  startAutoCycle: (total) => {
    const { autoCycleInterval, stopAutoCycle } = get();
    if (autoCycleInterval) {
      stopAutoCycle();
    }
    const interval = setInterval(() => {
      get().nextFont(total);
    }, 5000);
    set({ autoCycleInterval: interval });
  },
  stopAutoCycle: () => {
    const { autoCycleInterval } = get();
    if (autoCycleInterval) {
      clearInterval(autoCycleInterval);
      set({ autoCycleInterval: null });
    }
  },
})); 