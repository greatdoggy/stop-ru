import { check } from 'k6';
import http from 'k6/http';

export let options = {
  //noConnextionRefuse: false,
  insecureSkipTLSVerify: true,
  stages: [
      { duration: "1h", target: 300 },
  ]
}

export default function() {
  http.batch([
    //80
    "http://213.172.3.49",
    "http://185.178.208.7",
    "http://185.71.67.101",
    "http://212.46.217.204",
    "http://109.235.165.222",
    "http://185.71.78.222",
    "http://91.232.230.139",
    "http://91.232.230.50",
    "http://91.232.230.126",
    "http://178.248.234.196",
   // 443 
    "https://213.172.3.49",
    "https://185.178.208.7",
    "https://185.71.67.101",
    "https://212.46.217.204",
    "https://109.235.165.222",
    "https://185.71.78.222",
    "https://91.232.230.139",
    "https://91.232.230.50",
    "https://91.232.230.126",
    "https://178.248.234.196"

  ]);
};
