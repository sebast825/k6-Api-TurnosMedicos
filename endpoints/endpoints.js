import { BASE_URL } from "../config/baseUrl.js";


export const ENDPOINTS = {
    healthCheck: `${BASE_URL}/HealthCheck`,
    disponibilidad: (medicoId) => `${BASE_URL}/medicos/${medicoId}/turnos-disponibles`,
};
export default ENDPOINTS;