import { create } from "zustand";

export const useSearch = create((set, get) => ({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isClose:true}),
    toggle: () => set({isOpen: !get().isOpen}),
}) );

