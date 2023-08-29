// import {createContext} from 'react'
import { atom } from "jotai";

// export const UserDetailsContext = createContext<any>("")
export const userJwt = atom<string>("");
export const userData = atom<any>(null); 
export const userSecretAtom = atom<string>("");
export const userProviderContext = atom<string>("")
export const useLoading = atom<boolean>(false)
export const userSession = atom<any>(null)
export const userCourse = atom<any>(null)
