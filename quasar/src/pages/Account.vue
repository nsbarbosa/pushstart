<template>
  <q-page class="flex flex-center">
    <p>
      Bem Vindo {{ this.$auth.user().name }} !
    </p>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Account'
}
</script>
