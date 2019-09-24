import { LocalStorage, SessionStorage } from 'quasar'
export default {
  company: null,
  user: null,
  token: LocalStorage.getItem('token') || SessionStorage.getItem('token') || null
}
