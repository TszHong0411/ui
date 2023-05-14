import { create } from 'zustand'

const initialStates = {
  open: false,
}

type SidebarStates = typeof initialStates
type SidebarActions = {
  setOpen: (open: boolean) => void
}

export const useSidebar = create<SidebarStates & SidebarActions>()((set) => ({
  ...initialStates,
  setOpen: (open) => set({ open }),
}))
