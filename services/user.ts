import { UserCreateRequest, UserCreateResponse } from "@/types/userTypes";
import api from "./api";

export async function registerUserService(user: UserCreateRequest): Promise<UserCreateResponse> {
  return await api.post('register', user, {
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