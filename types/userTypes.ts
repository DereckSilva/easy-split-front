import { HttpStatusCode } from "axios"

export interface UserAuthRequest {
  email: string,
  password: string
}

export interface LoginResponse{
  token: string
  status: boolean
  message: string
  statusCode: HttpStatusCode
}

export interface User {
  id: number, email: string, name: string, birthdate: Date
}


export interface UserCreateRequest {
  name: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
}

type UserCreateResponseWithoutConfirmPassword = Omit<UserCreateRequest, "confirmPassword">

export interface UserCreateResponse extends UserCreateResponseWithoutConfirmPassword {
  id: number
  data: DataResponse
}

export interface UserAuthResponse {
  user: User
  token: string
  data: DataResponse
}

interface DataResponse {
  status: boolean
  message: string
  statusCode: HttpStatusCode
}