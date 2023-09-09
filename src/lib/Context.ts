import { atom } from "jotai";

export const userJwt = atom<string>("");
export const userData = atom<any>(null); 
export const userSecretAtom = atom<string>("");
export const layoutSegment = atom<string|null>("")
export const useLoading = atom<boolean>(false)
export const userSession = atom<any>(null)
export const userCourse = atom<any>(null)
export const virtualAccounts=atom<any>(null)
export const adminTrans=atom<any>(null)
