import { BASE_URL } from "../config/baseUrl.js";


export const ENDPOINTS = {
    healthCheck: `${BASE_URL}/HealthCheck`,
    disponibilidad: (medicoId) => `${BASE_URL}/medicos/${medicoId}/turnos-disponibles`,
    login: `${BASE_URL}/login`,
};
export default ENDPOINTS;