import axios from "axios";

export const $api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

$api.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  console.log(config);
  return config;
});
