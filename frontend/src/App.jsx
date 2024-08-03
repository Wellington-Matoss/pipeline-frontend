// Importações
import "./App.css";
import PrivateRoutes from "@utils/PrivateRoutes";
import { AuthProvider } from "@utils/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas - Auth
import Login from "@pages/Auth/Login";

// Páginas: Utilidades
import Error404 from "@pages/Others/404/404";
import Divider from "@pages/Others/Divider/Divider";
import EntityRoutes from "@utils/RoutesPerRole/Entity";
import ClustertecRoutes from "@utils/RoutesPerRole/Clustertec";

// Páginas: Clustertec
import HomeClustertec from "@pages/Clustertec/Home/Home";

// Páginas: Entidades
import HomeEntity from "@pages/Entity/Home/Home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />

          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            {/* Redirecionamento de acordo com o tipo de usuário */}
            <Route path="/" element={<Divider />} />

            {/* Clustertec */}
            <Route element={<ClustertecRoutes />}>
              <Route path="/clustertec/home" element={<HomeClustertec />} />
            </Route>

            {/* Entidades */}
            <Route element={<EntityRoutes />}>
              <Route path="/entity/home" element={<HomeEntity />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
