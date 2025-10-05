import http from "k6/http";
import { sleep } from "k6";
import { ENDPOINTS } from "../endpoints/endpoints.js";

export function getTurnosDisponibles(medicoId) {
    let res = http.get(ENDPOINTS.disponibilidad(medicoId), { tags: { stage: __VU } });
    sleep(1);
    return res;
}
