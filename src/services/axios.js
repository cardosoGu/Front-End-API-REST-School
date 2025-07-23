import axios from 'axios';
import store from '../store/index';
import { logOut } from '../store/authSlice';

// http://35.247.228.63:81/aluno
const api = axios.create({
  baseURL: 'http://35.247.228.63:81',
});

api.interceptors.request.use(
  (config) => {
    // pegar token direto do redux, pois useSelector so pode usar em componentes
    const { token } = store.getState().auth;
    // if there is token, send with axios inside config
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  // if error, stop requisition
  (error) => Promise.reject(new Error(error))
);

export default api;
