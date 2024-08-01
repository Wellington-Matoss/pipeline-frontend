import React from 'react'
import { useAuth } from '@/utils/AuthContext'


const Home = () => {
    const { testeAPI } = useAuth()


    return (
        <div>
            <h1>Home-Clustertec</h1>
            <h2> resultado: {testeAPI} </h2>
        </div>
    )
}

export default Home
