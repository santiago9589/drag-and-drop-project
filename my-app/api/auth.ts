import axios from "axios"
import {user} from "../types/user"

export const apiAuth = {
    login: async (): Promise<user> => {
        return {
            id: "1",
            name: "Pedro Emilio"
        }
    },
    logout: async (): Promise<boolean> => {
        return false
    }
}