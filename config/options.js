export let options = {
  /*
    { duration: "30s", target: 50 },
    { duration: "1m", target: 200 },
    { duration: "1m", target: 500 },
       { duration: "1m", target: 1000 },
       { duration: "1m", target: 1600 },

    { duration: "30s", target: 0 },

*/
  stages: [
     { duration: '1s', target: 500 }, // 500 usuarios en 1 SEGUNDO. Golpe seco.
    { duration: '3m', target: 500 }, // Mantén la carga para ver si se estabiliza o se cae.
     { duration: '1s', target: 0 },   // Para de golpe.
   ],
  //   vus: 10,
  //   duration: '10s',
  insecureSkipTLSVerify: true,
  thresholds: {
    // DEFINIR UMBRALES DE ALERTA ES CLAVE
    http_req_duration: ["p(95)<2000"], // Alertar si el p95 supera los 2 segundos
    http_req_failed: ["rate<0.01"], // Alertar si más del 1% de las peticiones fallan
  },
};