import axios from 'axios'
import { LocalStorage, SessionStorage, Notify } from 'quasar'
import { i18nInstance } from 'boot/i18n'

const axiosInstance = axios.create({})

axiosInstance.defaults.baseURL = 'http://localhost:8000/api'

const interceptor = axiosInstance.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (!error.response) {
    Notify.create(i18nInstance.t('errors.network'))
  } else if (error.response.request.status !== 401) {
    console.log('erro axios;', error.response)
    return Promise.reject(error.response)
  }
  axiosInstance.interceptors.response.eject(interceptor)
  return axiosInstance.get('/token/refresh').then((response) => {
    error.response.config.headers['Authorization'] = 'Bearer ' + response.data
    if (LocalStorage.has('token')) {
      LocalStorage.remove('token')
      LocalStorage.set('token', response.data)
    } else if (SessionStorage.has('token')) {
      SessionStorage.remove('token')
      SessionStorage.set('token', response.data)
    }
    return axiosInstance(error.response.config)
  }).catch((e) => {
    if (LocalStorage.has('token')) {
      LocalStorage.remove('token')
    } else if (SessionStorage.has('token')) {
      SessionStorage.remove('token')
    }
    return Promise.reject(error.response)
  })
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
  Vue.axios = Vue.prototype.$axios
}

export { axiosInstance }
