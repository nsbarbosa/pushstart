<template>
  <div />
</template>

<script>
export default {
  name: 'Logout',
  mounted () {
    this.$q.dialog({
      title: 'Confirma',
      message: 'Deseja mesmo sair?',
      ok: 'Sair',
      cancel: 'Cancelar'
    }).onOk(() => {
      this.$auth.logout().then(() => {
        this.$router.push('/')
      })
    }).onCancel(() => {
      this.$router.go(-1)
    })
  }
}
</script>
