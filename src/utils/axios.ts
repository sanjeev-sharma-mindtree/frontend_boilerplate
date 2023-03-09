import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

const requestConfig: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
}

const axiosInstance = axios.create(requestConfig)

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (
  config: InternalAxiosRequestConfig
) {
  const token = "Bearer Token that we'll fetch from localStorage"
  if (token) {
    console.log('INTERCEPTOR --> SETTING TOKEN ', token)
    Object.assign(config, { headers: { 'X-Auth-Token': token } })
  }

  return config
})

export default axiosInstance
