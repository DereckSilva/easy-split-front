import {IntermediaryLoginRequest, IntermediaryLoginResponse} from "@/types/userTypes";
import {create} from "zustand";

interface AuthIntermediaryStore {
    authIntermediary: IntermediaryLoginResponse | null
    intermediary: IntermediaryLoginRequest | null
    isAuthenticated: boolean
    codeIntermediary: string | null

    loginIntermediary: (authIntermediary: IntermediaryLoginResponse) => void
    setCodeIntermediary: (codeIntermediary: string) => void
}

const intermediaryStore = create<AuthIntermediaryStore>((set) => ({
    authIntermediary: null,
    intermediary: null,
    isAuthenticated: false,
    codeIntermediary: null,

    loginIntermediary: (authIntermediary) => set({
        authIntermediary,
        isAuthenticated: true,
    }),

    setCodeIntermediary: (codeIntermediary) => set({
        codeIntermediary
    })
}))

export default intermediaryStore;