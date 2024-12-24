import { create } from 'zustand';

interface DrawerStore {
  isOpen: boolean;
  selectedId: string | null;
  setIsOpen: (isOpen: boolean) => void;
  setSelectedId: (id: string | null) => void;
  openDrawer: (id: string) => void;
  closeDrawer: () => void;
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  selectedId: null,
  setIsOpen: (isOpen) => set({ isOpen }),
  setSelectedId: (id) => set({ selectedId: id }),
  openDrawer: (id) => set({ isOpen: true, selectedId: id }),
  closeDrawer: () => set({ isOpen: false, selectedId: null }),
}));