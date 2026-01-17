import { User, UserCreateResponse } from "@/types/userTypes";
import { create } from "zustand";

interface UserStore {
  user: User | null
  message: string | null

  setUser: (user: UserCreateResponse) => void
  setMessage: (message: string | null | undefined) => void
}

const userStore = create<UserStore>((set) => ({
  user: null,
  message: null,

  setUser: (user) => set({
    user: user
  }),

  setMessage: (message) => set({
    message,
  })
}))

export default userStore