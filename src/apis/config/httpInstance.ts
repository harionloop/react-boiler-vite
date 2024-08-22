import { API_CONSTANTS } from '@/helpers/constants';
import { getAppENV } from '@/helpers/utils';
import axios, { AxiosRequestConfig } from 'axios';

const APP_ENV = getAppENV();
export const httpInstance = axios.create({
  baseURL: API_CONSTANTS[APP_ENV]
});

httpInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = localStorage.getItem('token');
  if (config) {
    if (config['headers']) {
      config['headers']['Authorization'] = 'Bearer ' + token;
    }
  }
  return config;
});

// const refreshAccessToken = async (refreshToken: string) => {
// const { data } = await httpInstance.get(access token with refresh token)

// if (!data.token || !data.refreshToken) {
//   return false
// }
// localStorage.setItem('token', data.token)

// localStorage.setItem('refreshToken', data.refreshToken)

// return data.result.token
// }

// httpInstance.interceptors.response.use(
//   (res) => {
//     return res
//   },
//   async (error) => {
//     const originalRequest = error.config
//     const isUnauthorized = error.response.status === 401 || error.response.status === 0

//     if (isUnauthorized && !originalRequest._retry) {
//       const refreshToken = localStorage.getItem('refreshToken')
//       if (refreshToken) {
//         originalRequest._retry = true
//         const accessToken = await refreshAccessToken(refreshToken)
//         if (!accessToken) {
//           // redirect to login
//           return Promise.reject(error)
//         }
//         axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
//         return httpInstance(originalRequest)
//       }

//         // redirect to login
//     }

//     return Promise.reject(error)
//   },
// )
