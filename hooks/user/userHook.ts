import {registerUserService} from "@/services/user";
import userStore from "@/store/userStore";
import {UserCreateRequest} from "@/types/userTypes";
import {HttpStatusCode} from "axios";

export async function registerUserHook(data: UserCreateRequest) {

  const createUser = await registerUserService(data)
  const { setUser, setMessage } = userStore.getState();

  if (createUser.data.statusCode == HttpStatusCode.UnprocessableEntity) {
    const message = createUser?.birthdate || createUser?.password || createUser?.email || createUser?.name || createUser?.phone_number
    setMessage(message)
    return false
  }

  if (createUser.data.statusCode == HttpStatusCode.Created) {
    setUser(createUser)
    setMessage(createUser.data.message)
    return true
  }
}

export function userData() {
  return userStore((state) => state.user)
}

export function messageCreateUser(){
  return userStore((state) => state.message)
}
