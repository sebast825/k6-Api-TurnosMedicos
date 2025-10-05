import http from "k6/http";
import { sleep } from "k6";
import { ENDPOINTS } from "../endpoints/endpoints.js";

export function getHealthCheck(medicoId) {
    let res = http.get(ENDPOINTS.healthCheck);
    sleep(1);
    return res;
}
