import { create } from 'zustand';


// the type for the store's state
interface SidebarState {
  activeItem: string;
  setActiveItem: (item: string) => void;
}


// Zustand store to manage active sidebar item
const useSidebarStore = create<SidebarState>((set) => ({
  activeItem: 'Newsletters',
  setActiveItem: (item) => set({ activeItem: item }),
}));

export default useSidebarStore;




