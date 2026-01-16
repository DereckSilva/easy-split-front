import authUserService from "@/services/auth";
import userAuthStore from "@/store/authStore";
import { UserAuthRequest } from "@/types/userTypes";
import { HttpStatusCode } from "axios";

export async function authUserHook (user: UserAuthRequest) {
  const login = userAuthStore((state) => state.login)
  const setToken = userAuthStore((state) => state.setToken)

  const userResponse = await authUserService(user)

  if (userResponse.data.statusCode == HttpStatusCode.Ok) {
    const {status, statusCode, message} = userResponse.data
    const { token } = userResponse
    login({token, status, statusCode, message}, userResponse.user)
    setToken(userResponse.token)
  }
}

export function userAuthenticated (): boolean {
  return userAuthStore((state) => state.isAuthenticated)
}