<template>
  <q-page class="flex flex-center">
    <div class="row q-col-gutter-x-md">
      <div v-if="logo!=null" class="col-xs-12 col-sm-12">
        <q-img
          :src="logo"
          :ratio="1"
        ></q-img>
      </div>
      <div class="col-xs-12 col-sm-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">
              Login
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-x-md">
              <div class="col-12">
                <q-input
                  bottom-slots
                  :standout="standout_color"
                  v-model.trim="data.body.email"
                  type="email"
                  prefix='Email:'
                  :error="error_email"
                  id="email"
                  dense
                  :disable="loading"
                />
              </div>
            </div>
            <div class="row q-col-gutter-x-md">
              <div class="col-12">
                <q-input
                  id="password"
                  v-model="data.body.password"
                  prefix='Senha:'
                  :disable="loading"
                  :type="isPwd ? 'password' : 'text'"
                  bottom-slots
                  :error="$v.data.body.password.$error"
                  dense
                  :standout="standout_color"
                >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  ></q-icon>
                </template>
                </q-input>
              </div>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn
              class="full-width"
              color="secondary"
              :loading="loading"
              @click="login"
            >
              Login
            </q-btn>
            <q-btn
              class="full-width q-mt-xs"
              color="primary"
              to="/register"
            >
              Cadastrar
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'Login',
  mounted () {
  },
  data () {
    return {
      error_email: false,
      standout_color: 'bg-primary',
      isPwd: true,
      logo: 'https://via.placeholder.com/300',
      // logo: 'https://upload.wikimedia.org/wikipedia/pt/4/47/UFF_bras%C3%A3o.png',
      data: {
        body: {
          email: '',
          password: '',
          rememberMe: false
        }
      },
      loading: false
    }
  },
  methods: {
    login () {
      this.$v.data.$touch()
      this.error_email = this.$v.data.body.email.$error
      if (!this.$v.data.$error) {
        this.loading = true
        this.$auth.login(this.data).then(() => {
          this.$q.notify({
            message: 'Login efetuado com sucesso!',
            color: 'positive'
          })
          this.$router.push('/account')
        }).catch((error) => {
          console.log(error)
          if (error.data.erros.email) {
            this.$q.notify({
              message: 'Verifique seu email e senha!',
              color: 'negative'
            })
          } else {
            this.$q.notify({
              message: 'Desculpe, ocorreu algum erro!',
              color: 'negative'
            })
          }
        }).finally(() => {
          this.error_email = false
          this.loading = false
        })
      }
    }
  },
  validations: {
    data: {
      body: {
        email: {
          required,
          email
        },
        password: {
          required
        }
      }
    }
  }
}
</script>
