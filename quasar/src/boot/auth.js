function isArrayOrString (variable) {
  if (typeof variable === typeof [] || typeof variable === typeof '') {
    return true
  }
  return false
}

export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    store.dispatch('auth/initialization').then(() => {
      const record = to.matched.find(record => record.meta.auth)
      console.log('check()', store.getters['auth/check']())
      if (record) {
        console.log('meta', record.meta.auth)
        if (!store.getters['auth/check']()) {
          next({ name: 'login' })
        } else if (isArrayOrString(record.meta.auth) && !store.getters['auth/check'](record.meta.auth)) {
          next({ name: 'account' })
          console.log('rota ', store.getters['auth/check'](record.meta.auth))
        } else {
          next()
        }
      } else {
        next()
      }
    }).catch((error) => {
      console.log('beforeeach', error)
      next({ name: 'login' })
    })
  })

  var helper = {}
  helper.refreshToken = () => { return store.dispatch('auth/refreshToken') }
  helper.register = (data) => { return store.dispatch('auth/register', data) }
  helper.loggedIn = () => { return store.getters['auth/loggedIn'] }
  helper.check = () => { return store.getters['auth/check'] }
  helper.login = (data) => { return store.dispatch('auth/login', data) }
  helper.logout = () => { return store.dispatch('auth/logout') }
  helper.fetch = () => { return store.dispatch('auth/fetch') }
  helper.initialization = () => { return store.dispatch('auth/initialization') }
  helper.user = () => { return store.getters['auth/user'] }
  helper.createUser = (data) => { return store.dispatch('auth/createUser', data) }
  helper.editUser = (data) => { return store.dispatch('auth/editUser', data) }
  helper.uploadImage = (data) => { return store.dispatch('auth/uploadImage', data) }

  Vue.prototype.$auth = helper
}
