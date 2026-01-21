import { HttpStatusCode } from "axios"

/* User */
export interface LoginResponse{
  token: string
  status: boolean
  message: string
  statusCode: HttpStatusCode
}

export interface UserAuthRequest {
  email: string,
  password: string
}

export interface User {
  id: number, email: string, name: string, birthdate: Date
}


export interface UserCreateRequest {
  name: string
  email: string
  password: string
  password_confirmation: string
  phone_number: string
  birthdate: Date
}

type UserCreateResponseWithoutConfirmPassword = Omit<UserCreateRequest, "password_confirmation">

export interface UserCreateResponse extends UserCreateResponseWithoutConfirmPassword {
  id: number
  data: DataResponse
  fields: {
    email: string | null
    password: string | null
    name: string | null
    phone_number: string | null
    birthdate: string | null
  }
}

export interface UserAuthResponse {
  token: string
  data: DataResponse
}

interface DataResponse {
  status: boolean
  message: string
  statusCode: HttpStatusCode
}

/* Intermediário */

export interface IntermediaryLoginResponse {
  id: number,
  email: string,
  phone_number: string,
  expense: Expense
}

export interface IntermediaryLoginRequest {
  email: string,
  phone_number: string,
}

/* Expense */

export interface Expense {
  name: string,
  price_total: number,
  parcels: number,
  payer_id: number,
  payment_date: Date,
  intermediary: boolean,
  intermediaries: IntermediaryLoginResponse[],
  receive_notification: boolean,
}