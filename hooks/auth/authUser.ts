import authUserService from "@/services/auth";
import userAuthStore from "@/store/authStore";
import {UserAuthRequest, UserAuthResponse} from "@/types/userTypes";
import { HttpStatusCode } from "axios";

export async function authUserHook (user: UserAuthRequest) {

  const userResponse: UserAuthResponse = await authUserService(user)
  const { setMessage, login, setToken } = userAuthStore.getState()

  if (userResponse.data.statusCode == HttpStatusCode.Forbidden) {
    setMessage(userResponse.data.message)
    return false
  }

  if (userResponse.data.statusCode == HttpStatusCode.Ok) {
    const {status, statusCode, message} = userResponse.data
    const { token } = userResponse

    login({token, status, statusCode, message})
    setToken(userResponse.token)
    return true
  }
}

export function userAuthenticated (): boolean {
  const { isAuthenticated } = userAuthStore.getState()
  return isAuthenticated
}

export function userErrorAuth (): string | null {
  return userAuthStore((state) => state.message)
}

export function userLogout() {
  const { logout } = userAuthStore.getState()
  logout()
}