import { LocalStorage } from "constants/localStorage";
import create from "zustand";

const ISSERVER = typeof window === "undefined";
export const useStore = create((set) => ({
  currentUser: !ISSERVER ? JSON.parse(localStorage.getItem(LocalStorage.currentUser) || "{}") : {},
  logout: () => set({ currentUser: {} }),
}));
