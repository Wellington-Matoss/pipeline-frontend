// Importações
import axios from 'axios';
import Loader from '@pages/Others/Loader/Loader';
import { createContext, useState, useEffect, useContext } from "react";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(true)


    const baseURL = import.meta.env.VITE_API
    const [testeAPI, setTesteAPI] = useState('')


    useEffect(() => {
        checkApiConnection()
    }, [])


    const checkApiConnection = async () => {
        try {
            const response = await axios.get(`${baseURL}/kyoya/teste/api`)
            setTesteAPI(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    const loginUser = async (userInfo) => { }

    const logoutUser = async () => { }

    const registerUser = async (userInfo) => { }

    const checkUserStatus = async () => { }

    async function tokenDetails() { }



    const contextData = {
        user,
        testeAPI,
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