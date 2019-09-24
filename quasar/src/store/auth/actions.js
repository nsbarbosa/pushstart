import { axiosInstance } from 'boot/axios'
import { LocalStorage, SessionStorage } from 'quasar'

const REGISTER_ROUTE = '/register'
const LOGIN_ROUTE = '/login'
const USER_ROUTE = '/user'

export function refreshToken (state) {
  return axiosInstance.get('/token/refresh')
}

export function register (state, data) {
  return axiosInstance.post(REGISTER_ROUTE, data)
}

export function login (state, data) {
  return axiosInstance.post(LOGIN_ROUTE, data.body).then((response) => {
    let token = response.data.token
    state.commit('setUser', response.data.user)
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    if (data.rememberMe === true) {
      LocalStorage.set('token', token)
    } else {
      SessionStorage.set('token', token)
    }
    state.commit('setToken', token)
  })
}

export function fetch (state) {
  return axiosInstance.get(USER_ROUTE)
}

export function initialization (state) {
  let token
  if (LocalStorage.has('token')) {
    token = LocalStorage.getItem('token')
  }
  if (SessionStorage.has('token')) {
    token = SessionStorage.getItem('token')
  }
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    return axiosInstance.get('/user').then((response) => {
      console.log('detail', response)
      state.commit('setUser', response.data.user)
    }).catch((error) => {
      LocalStorage.remove('token')
      SessionStorage.remove('token')
      console.log(error)
    })
  }
}

export function logout (state) {
  if (LocalStorage.has('token')) {
    LocalStorage.remove('token')
  } else if (SessionStorage.has('token')) {
    SessionStorage.remove('token')
  }
  state.commit('setToken', null)
  state.commit('setUser', null)
  return axiosInstance.delete('/logout')
}

export function createUser (state, data) {
  return axiosInstance.post('/user', data)
}

export function editUser (state, data) {
  return axiosInstance.post('/user', data)
}

export function uploadImage (state, data) {
  return axiosInstance.post('/image', data)
}
