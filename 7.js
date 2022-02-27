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
   "https://185.71.78.222",
   "https://109.235.165.222",
   "https://91.232.230.126",
   "https://91.232.230.50",
   "https://91.232.230.139",
   "https://178.172.137.254",
   "https://185.178.208.35",
   "https://185.178.208.7",
   "https://217.195.86.165"
  ]);
};
