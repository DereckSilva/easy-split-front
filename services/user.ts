import { UserCreateRequest, UserCreateResponse } from "@/types/userTypes";
import api from "./api";

export async function registerUserService(user: UserCreateRequest): Promise<UserCreateResponse> {
  return api.post('register', {
    ...user,
    birthdate: user.birthdate.toISOString().split('T')[0]
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    const data = response.data?.data ?? {}
    console.log('teste')

    if (Object.keys(data).length == 0) {
      throw new Error("Nenhum retorno encontrado.")
    }

    return {
      data: {
        status: response.data?.status ? Boolean(response.data.status) : false,
        message: response.data?.message ? String(response.data.message) : '',
        statusCode: response.status,
      },
      id: Number.parseInt(data.id),
      email: String(data.email),
      password: null,
      name: String(data.name),
      phone_number: String(data.phone_number),
      birthdate: String(data.birthdate)
    }
  }).catch((error) => {

    const data = error.response.data?.data ?? {}

    if (Object.keys(data).length == 0) {
      throw new Error("Nenhum retorno encontrado.")
    }

    return {
      data: {
        status: false,
        message: error.response.data?.message ? String(error.response.data.message) : '',
        statusCode: error.response.status,
      },
      id: 0,
      email: data?.email ? String(data.email[0]) : '',
      password: data?.password ? String(data.password[0]) : '',
      name: data?.name ? String(data.name[0]) : '',
      phone_number: data?.phone_number ? String(data.phone_number[0]) : '',
      birthdate: data?.birthdate ? String(data.birthdate[0]) : '',
    }
  })
}