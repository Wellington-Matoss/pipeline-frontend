// Importações
import Cookies from "js-cookie";
import Loader from "@pages/Others/Loader/Loader";
import { createContext, useState, useEffect, useContext } from "react";

// Services
import { loginService } from "./Services/Auth/login";
import { tokenService } from "./Services/Auth/token";

const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // Verifica se o usuário está logado

  useEffect(() => {
    if (Cookies.get("token")) {
      checkUserStatus();
    } else {
      setLoading(false);
    }
  }, []);

  // Funções disposníveis para uso global //

  // Função de login
  const login = async (loginInfo) => {
    setLoading(true);

    try {
      const userResponse = await loginService.login(loginInfo);
      const token = { token: userResponse.data.token };

      Cookies.set("token", token.token, { expires: 2 });

      setUser(token);
      tokenInfo();
    } catch (error) {
      console.error("Login: ", error);
      alert("Falha ao efetuar Login! Verifique suas credenciais.");
      setLoading(false);
    }
  };

  // Função de logout
  const logout = async () => {
    Cookies.remove("token");
    setUser(null);
    setUserInfo(null);
  };

  // Função de registro
  const register = async (userInfo) => {};

  // Função de verificação de status do usuário
  const checkUserStatus = async () => {
    const user = Cookies.get("token");
    setUser(user);
    tokenInfo();
  };

  // Função de informações do token
  async function tokenInfo() {
    setLoading(true);
    try {
      const tokenInfo = await tokenService.tokenInfo();
      setUserInfo(tokenInfo.data);
    } catch (error) {
      console.error("tokenDetails: ", error);
      setLoading(false);
    }
    setLoading(false);
  }

  // Exportando as funções e dados para uso global
  const contextData = {
    user,
    userInfo,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={contextData}>{loading ? <Loader /> : children}</AuthContext.Provider>;
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
