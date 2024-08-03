// Importações
import axios from "axios";
import Cookies from "js-cookie";

// URL base da API
const baseURL = import.meta.env.VITE_API;

function tokenInfo() {
  try {
    return axios.get(`${baseURL}/token/info`, {
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    });
  } catch (error) {
    console.error("Token Info: ", error);
    return error;
  }
}

export const tokenService = { tokenInfo };
