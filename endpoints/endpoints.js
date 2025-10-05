const BASE_URL = "http://localhost:5000/api";

export const ENDPOINTS = {
    healthCheck: `${BASE_URL}/HealthCheck`,
    disponibilidad: (medicoId) => `${BASE_URL}/medicos/${medicoId}/turnos-disponibles`,
};
export default ENDPOINTS;