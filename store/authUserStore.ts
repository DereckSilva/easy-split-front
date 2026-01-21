import { LoginResponse, User } from '@/types/userTypes'
import { create } from 'zustand'

interface AuthUserStore {
  auth: LoginResponse | null
  user: User | null
  token: string | null
  isAuthenticated: boolean
  message: string | null

  login: (auth: LoginResponse) => void
  logout: () => void
  setToken: (token: string) => void
  setMessage: (message: string) => void
}

const userAuthStore = create<AuthUserStore>((set) => ({
  auth: null,
  user: null,
  token: null,
  isAuthenticated: false,
  message: null,

  login: (auth) => set({
    auth,
    isAuthenticated: true
  }),

  logout: () => set({
    auth: null,
    token: null,
    isAuthenticated: false
  }),

  setToken: (token) => set({
    token
  }),

  setMessage: (message) => set({
    message,
  })
}))

export default userAuthStore