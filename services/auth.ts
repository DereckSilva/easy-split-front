import {UserAuthRequest, UserAuthResponse} from "@/types/userTypes";
import api from "./api";

export default async function authUserService(user: UserAuthRequest): Promise<UserAuthResponse> {
  return await api.post('login', user, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return {
      token: response.data.token,
      data: {
        status: true,
        message: response.data.message,
        statusCode: response.status
      }
    }
  }).catch((error) => {
    return { data:
      {
        status: false,
        statusCode: error.response.status,
        message: error.response.data.message
      },
      token: ''
    }
  })
}