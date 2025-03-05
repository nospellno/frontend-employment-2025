import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DarkModeState {
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

export const useDarkModeStore = create<DarkModeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      setDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
    }),
    {
      name: 'darkMode',
    },
  ),
);
