import { user } from "../../types/user"
import { useState} from "react"


import { AuthContext, contextPropsAuth } from "./contextAuth"


interface props {
    children: React.ReactNode
}

const ProviderAuth = ({ children }: props) => {

    const [user, setUser] = useState<user>({
        name: "",
        id: ""
    })

    const loginUser = (user: user | null) => {
        if(user){
            setUser(user)
        }
    }
    const logoutUser = () => {
        setUser({
            name: "",
            id: ""
        })
    }

    const context: contextPropsAuth = {
        stateAuth: {
            user
        },
        dispatch: {
            loginUser,
            logoutUser
        }
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}


export default ProviderAuth