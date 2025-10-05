export let spikeOptions = {
  stages: [
    { duration: '10s', target: 500 }, 
    { duration: '1m', target: 500 },   
    { duration: '10s', target: 0 },  
  ],
  insecureSkipTLSVerify: true,
  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.01"],
  },
};
