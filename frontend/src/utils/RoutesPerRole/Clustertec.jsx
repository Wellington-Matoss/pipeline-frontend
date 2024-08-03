// Importações
import { Outlet } from "react-router-dom";
import { useAuth } from "@utils/AuthContext";
import AcessDenied from "@pages/Others/AcessDenied/AcessDenied";

const ClustertecRoutes = () => {
  const { userInfo } = useAuth();
  const userType = userInfo.type;
  const routeType = "Clustertec";

  // Verifica se a rota do usuário é igual a rota permitida
  if (userType === routeType) {
    return <Outlet />;
  } else {
    return <AcessDenied />;
  }
};

export default ClustertecRoutes;
