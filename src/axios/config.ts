import axios, { InternalAxiosRequestConfig } from 'axios'

const URL = 'http://localhost:8080'

const axiosConfig = axios.create({
  baseURL: URL
})

axiosConfig.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default axiosConfig
