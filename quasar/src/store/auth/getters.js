export function user (state) {
  return state.user
}

export function loggedIn (state) {
  return (state.token !== null)
}

export const check = state => () => {
  const user = state.user
  if (user !== null) {
      return true
  }
  return false
}
