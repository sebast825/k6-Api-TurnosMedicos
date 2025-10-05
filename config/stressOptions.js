export let stressOptions = {
  stages: [
    { duration: '1m', target: 100 },  
    { duration: '2m', target: 500 },  
    { duration: '2m', target: 1000 },  
    { duration: '2m', target: 1500 }, 
    { duration: '1m', target: 0 },     
  ],
  insecureSkipTLSVerify: true,
  thresholds: {
    http_req_duration: ["p(95)<2000"], // alerta si el 95% de requests > 2s
    http_req_failed: ["rate<0.05"],    // alerta si más del 5% fallan
  },
};
