import axios from 'axios';

// http://35.247.228.63:81
// http://localhost:3002
const api = axios.create({
  baseURL: 'http://35.247.228.63:81',
});

// tive q passar store chamando essa funcao em store/index, porque qnd eu importava dava erro de import/no-cycle
// funcao para sempre pegar o state Token e passar em header no axios
export const setupInterceptors = (store) => {
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
    (error) => Promise.reject(error)
  );
};

export default api;
