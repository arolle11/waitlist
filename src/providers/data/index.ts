import axios from "axios";

const { RASENGAN_DEVGIRL_API_BASE_URL } = import.meta.env;

const instance = axios.create({
  baseURL: RASENGAN_DEVGIRL_API_BASE_URL,
  timeout: 10000,
});

export default instance;
