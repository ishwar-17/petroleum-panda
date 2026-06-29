import { create } from 'zustand';
import { DrawerActions, DrawerState } from '../types/hubs.type';

const useDrawerSotore = create<DrawerState & DrawerActions>((set) => ({
  openFormDrawer: false,
  onOpenFormDrawer: (value: boolean) => set({ openFormDrawer: value }),
}));

export default useDrawerSotore;