import {IntermediaryLoginRequest} from "@/types/userTypes";
import api from "@/services/api";

export default async function authIntermediaryService (auth: IntermediaryLoginRequest) {
    return await api.post('intermediary', auth, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => {
        console.log(data)
    }).catch(error => {
        console.log(error)
    });
}