import axios from 'axios';
import { ENV } from '../utils/env';

export const plansApi = axios.create({
  baseURL: ENV.REACT_APP_URL_BACKEND,
});
plansApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const newConfig = { ...config, headers: { ...config.headers, Authorization: `Bearer ${accessToken}` } };
      return newConfig;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

plansApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('accessToken');
      if (window.location.pathname !== '/login') window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default plansApi;
