import { registerUserService } from "@/services/user";
import userStore from "@/store/userStore";
import { UserCreateRequest } from "@/types/userTypes";
import { HttpStatusCode } from "axios";

export async function registerUserHook(data: UserCreateRequest) {
  const setUser = userStore((state) => state.setUser)
  const createUser = await registerUserService(data)

  if (createUser.data.statusCode == HttpStatusCode.Created) {
    setUser(createUser)
  }
}