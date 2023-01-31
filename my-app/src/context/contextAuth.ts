import { createContext } from "react"
import {user} from "../../types/user"


export interface contextPropsAuth {
    stateAuth: {
        user:user
    }

    dispatch:{
        loginUser:(user:user | null)=>void
        logoutUser:()=>void
    }
}

export const AuthContext = createContext({} as contextPropsAuth)