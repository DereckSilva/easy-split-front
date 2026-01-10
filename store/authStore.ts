import { LoginResponse, User } from '@/types/userTypes'
import { create } from 'zustand'

interface AuthStore {
  auth: LoginResponse | null
  user: User | null
  token: string | null
  isAuthenticated: boolean

  login: (auth: LoginResponse, user: User) => void
  logout: () => void
  setToken: (token: string) => void
}

const userAuthStore = create<AuthStore>((set) => ({
  auth: null,
  user: null,
  token: null,
  isAuthenticated: false,

  login: (auth, user) => set({
    auth,
    user,
    isAuthenticated: true
  }),

  logout: () => set({
    auth: null,
    token: null,
    isAuthenticated: false
  }),

  setToken: (token) => set({
    token
  })
}))

export default userAuthStore