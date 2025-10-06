import http from "k6/http";
import ENDPOINTS from "../endpoints/endpoints.js";

// Función que obtiene un token o sesión para la API
export function getAuthToken() {
  const url = ENDPOINTS.login;
  const payload = JSON.stringify({
    username: "Paciente",
    password: "Paciente",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);

  if (res.status === 200) {
    const body = res.json();
    return body.accessToken; // el body recibe {accesToken, refreshToken}
  }

  throw new Error("No se pudo autenticar");
}
