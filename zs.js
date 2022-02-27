import { check } from 'k6';
import http from 'k6/http';

export let options = {
  //noConnextionRefuse: false,
  insecureSkipTLSVerify: true,
  stages: [
      { duration: "1h", target: 20 },
  ]
}

export default function() {
  http.batch([
"http://178.248.233.111",
"https://178.248.233.111",
"http://54.228.38.68",
"https://54.228.38.68"
  ]);
};
