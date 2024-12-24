import { create } from 'zustand';
import type { ColorScheme } from '../types';

interface ThemeStore {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  colorScheme: 'light',
  toggleColorScheme: () => 
    set((state) => ({ 
      colorScheme: state.colorScheme === 'light' ? 'dark' : 'light' 
    })),
}));