export let healthCheckOptions = {
  vus: 1,           // Solo un usuario virtual
  duration: "1s",   // Lo suficiente para hacer la petición
  insecureSkipTLSVerify: true,
  thresholds: {
    http_req_duration: ["p(95)<1000"],  // opcional, alerta si tarda más de 1s
    http_req_failed: ["rate<0.01"],     // alerta si falla
  },
};
