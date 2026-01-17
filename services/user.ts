import { UserCreateRequest, UserCreateResponse } from "@/types/userTypes";
import api from "./api";

export async function registerUserService(user: UserCreateRequest): Promise<UserCreateResponse> {
  return await api.post('register', {
    ...user,
    birthdate: user.birthdate.toISOString().split('T')[0]
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    console.log(response)
    return response.data
  }).catch((error) => {
    return {
      id: 0,
      data: {
        status: false,
        statusCode: error.response.status,
        message: error.response.data.message,
      },
      fields: {
        email: error.response.data.data?.email ? error.response.data.data.email[0] : null,
        password: error.response.data.data?.password ? error.response.data.data.password[0] : null,
        name: error.response.data.data?.name ? error.response.data.data.name[0] : null,
        phone_number: error.response.data.data?.phone_number ? error.response.data.data.phone_number[0] : null,
        birthdate: error.response.data.data?.birthdate ? error.response.data.data.birthdate[0] : null,
      },
    }
  })
}