import axios, { InternalAxiosRequestConfig } from 'axios'

const URL = 'https://www4.fag.edu.br/api_ecci/src/routes/'

const init = () => {
  const token = localStorage.getItem('token')
  const headers = {
    Authorization: `Bearer ${token}`
  }
  return {
    token,
    headers
  }
}

const api = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${init().token}`
  }
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    if (!config.url?.includes('login'))
      config.headers.Authorization = `Bearer ${init().token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default api
