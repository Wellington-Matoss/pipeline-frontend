// Importações
import './App.css'
import { AuthProvider } from '@utils/AuthContext'
import PrivateRoutes from '@utils/PrivateRoutes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Páginas
import Loader from './pages/Others/Loader/Loader'
import Error404 from './pages/Others/404/404'
import AcessDenied from './pages/Others/AcessDenied/AcessDenied'
import Home from './pages/Clustertec/Home/Home'
import Dashboard from './pages/Clustertec/Dashboard/Dashboard'


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>


            {/* Rotas */}
            <Route path="*" element={<Loader />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/acessdenied" element={<AcessDenied />} />

            <Route path="/clustertec/home" element={<Home />} />
            <Route path='/clustertec/dashboard' element={<Dashboard />} />



          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
