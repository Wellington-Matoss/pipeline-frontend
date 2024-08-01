// Importações
import { useAuth } from './AuthContext'
import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {
    const { user } = useAuth()

    if (user) {
        return (<Outlet />)
    } else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoutes