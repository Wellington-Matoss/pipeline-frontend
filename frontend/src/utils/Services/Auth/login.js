// Importações
import axios from "axios";

// URL base da API
const baseURL = import.meta.env.VITE_API;

function login(loginInfo) {
  const body = { ...loginInfo };

  try {
    return axios.post(`${baseURL}/auth/login`, body);
  } catch (error) {
    console.error("Login: ", error);
    return error;
  }
}

export const loginService = { login };
