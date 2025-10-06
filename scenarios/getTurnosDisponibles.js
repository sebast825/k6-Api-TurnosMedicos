import http from "k6/http";
import { sleep } from "k6";
import { ENDPOINTS } from "../endpoints/endpoints.js";
import { getAuthToken } from "../utils/auth.js";


export function getTurnosDisponibles(medicoId) {
     const token = getAuthToken();

  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    tags: { stage: __VU },
  };
    let res = http.get(ENDPOINTS.disponibilidad(medicoId), params);

    sleep(1);
    return res;
}
