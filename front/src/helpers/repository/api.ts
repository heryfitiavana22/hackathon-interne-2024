import axios from 'axios';
import { AccessTokenPersistence } from '../../auth/auth.persistence';

export let api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

api.interceptors.request.use(
  (config) => {
    const token = AccessTokenPersistence.get();

    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      window.history.pushState(null, '', '/login');
    }

    return Promise.reject(error);
  },
);
