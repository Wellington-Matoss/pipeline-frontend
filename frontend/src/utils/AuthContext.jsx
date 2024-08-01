// Importações
import Loader from '@pages/Others/Loader/Loader';
import { createContext, useState, useEffect, useContext } from "react";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(true)


    useEffect(() => { }, [])


    const loginUser = async (userInfo) => { }

    const logoutUser = async () => { }

    const registerUser = async (userInfo) => { }

    const checkUserStatus = async () => { }

    async function tokenDetails() { }



    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <Loader /> : children}
        </AuthContext.Provider>
    )
}

//Custom Hook
export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext;