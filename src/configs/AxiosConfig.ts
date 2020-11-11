import * as axios from 'axios';

export const axiosInstance = axios.default.create({
  baseURL: 'https://api.monpetitgazon.com/',
  timeout: 5000,
});
