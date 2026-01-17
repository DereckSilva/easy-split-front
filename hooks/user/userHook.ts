import {registerUserService} from "@/services/user";
import userStore from "@/store/userStore";
import {UserCreateRequest} from "@/types/userTypes";
import {HttpStatusCode} from "axios";
import userAuthStore from "@/store/authStore";

export async function registerUserHook(data: UserCreateRequest) {

  const createUser = await registerUserService(data)
  const { setUser, setMessage } = userStore.getState();

  if (createUser.data.statusCode == HttpStatusCode.UnprocessableEntity) {
    console.log(createUser.fields.birthdate)
    const message = createUser.fields?.birthdate || createUser.fields?.password || createUser.fields?.email || createUser.fields?.name || createUser.fields?.phone_number
    setMessage(message)
    return false
  }

  if (createUser.data.statusCode == HttpStatusCode.Created) {
    setUser(createUser)
    return true
  }
}

export function userData() {
  const { user } = userAuthStore.getState()
  return user
}

export function fieldsErrorRegister(){
  return userStore((state) => state.message)
}