import { create } from 'zustand';

interface DashboardState {
  activeTab: 'Published' | 'Draft';
  setActiveTab: (tab: 'Published' | 'Draft') => void;
}
interface ActionState {
  isOptionsVisible: boolean;
  setIsOptionsVisible: () => void;
}

const useDashboardStore = create<DashboardState>((set) => ({
  activeTab: 'Published',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

const useActionStore = create<ActionState>((set) => ({
  isOptionsVisible: false,
  setIsOptionsVisible:() => set((state) => ({ isOptionsVisible: !state.isOptionsVisible })),
}));


export {useDashboardStore,useActionStore}