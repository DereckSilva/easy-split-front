import { User, UserCreateResponse } from "@/types/userTypes";
import { create } from "zustand";

interface UserStore {
  user: User | null
  setUser: (user: UserCreateResponse) => void
}

const userStore = create<UserStore>((set) => ({
  user: null,

  setUser: (user) => ({
    user: user
  })
}))

export default userStore