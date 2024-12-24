import { create } from 'zustand';

interface NavigationStore {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed) => set({ collapsed }),
}));