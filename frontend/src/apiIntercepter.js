import axios from 'axios';
// import TokenNotRequiredApis from './constants/TokenNotRequiredApis';
const api =
  process.env.REACT_APP_BASE_APP_URL + process.env.REACT_APP_API_VERSION;
const axiosInstance = axios.create({
  baseURL: api
});
axiosInstance.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    if (token) {
      request.headers.Authorization = `Token ${token}`;
    }
    console.log(token);
  return request;
});
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error && error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiry');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
