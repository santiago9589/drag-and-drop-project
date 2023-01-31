import React,{useContext} from 'react'
import { AuthContext } from '../context/contextAuth'
import LoginPage from '../pages/login/login.page'


interface props {
    children: React.ReactNode
}

const GuardRout = ({ children }: props) => {

    const stateAuth = useContext(AuthContext)

    return (
        <>
            {
                stateAuth.stateAuth.user.name ? (
                    <>
                        {children}
                    </>
                ) : (<>
                    <LoginPage />
                </>)
            }
        </>
    )
}

export default GuardRout