import { UserAuthRequest, UserAuthResponse } from "@/types/userTypes";
import api from "./api";

export default async function authUserService(user: UserAuthRequest): Promise<UserAuthResponse> {
  return await api.post('login', user, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return error
  })
}