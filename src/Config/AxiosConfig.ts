import * as axios from 'axios';

const instance = axios.default.create({
  baseURL: 'https://api.monpetitgazon.com/',
  timeout: 1000,
});

export {instance as axios};
