import {IntermediaryLoginRequest} from "@/types/userTypes";
import authIntermediaryService from "@/services/authIntermediary";
import intermediaryStore from "@/store/authIntermediaryStore";
import {HttpStatusCode} from "axios";

export async function authIntermediary (auth: IntermediaryLoginRequest) {
    const intermediary = await authIntermediaryService(auth);
    const { loginIntermediary, setCodeIntermediary } = intermediaryStore.getState()

    //if (intermediary.data.statusCode === HttpStatusCode.Forbidden) {
    //    return false
    //}

    //loginIntermediary()
    setCodeIntermediary('')
    return true

}

export function intermediaryAuth() {
    const { isAuthenticated } = intermediaryStore.getState()
    return isAuthenticated
}