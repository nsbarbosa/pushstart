<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  preFetch ({ store, redirect }) {
    redirect(false)
    store.dispatch('auth/initialization').then(() => {
      redirect(true)
    }).catch(() => {
      store.dispatch('auth/logout').then(() => {
        redirect(true)
      })
    })
  }
}
</script>

<style>
</style>
