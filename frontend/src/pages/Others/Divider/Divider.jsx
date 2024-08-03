// Importações
import { useEffect } from "react";
import { useAuth } from "@utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Divider = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const userType = userInfo.type;

  useEffect(() => {
    {
      userType === "Clustertec" ? navigate("/clustertec/home") : null;
    }
    {
      userType === "Entity" ? navigate("/entity/home") : null;
    }
  }, []);

  return null;
};

export default Divider;
