<template>
  <q-layout view="hHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated style="background:#101752" >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          class="toggle-menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
        <q-icon name="menu" />
        </q-btn>
        <q-avatar v-if="false">
          <img :src="header">
        </q-avatar>
        <q-toolbar-title class="header-logo">
          Teste Push Start
        </q-toolbar-title>
    </q-toolbar>
    </q-header>

    <q-drawer
      v-if="this.$auth.loggedIn()"
      v-model="leftDrawerOpen"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area class="fit">
        <q-item
          v-if="this.$auth.loggedIn()"
          clickable
          active-class="active-menu-item"
          :active="$route.name == 'index'"
          @click="$router.push('/')"
        >
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
        </q-item>
        <template>
        <q-list
          v-if="this.$auth.loggedIn()"
          no-border
          link
          inset-delimiter
        >
          <q-item
            clickable
            active-class="active-menu-item"
            to="/user"
          >
          <q-item-section avatar>
            <q-icon name="account_box" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dados Usuário</q-item-label>
          </q-item-section>
          </q-item>
        </q-list>
        </template>
        <q-item
            clickable
            active-class="active-menu-item"
            @click="$router.push('/logout')"
          >
            <q-item-section avatar>
              <q-icon name="power_settings_new" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Sair</q-item-label>
            </q-item-section>
          </q-item>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
      <q-ajax-bar
      ref="bar"
      position="bottom"
      color="info"
      size="10px"
    />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { axiosInstance } from 'boot/axios'

export default {
  name: 'MyLayout',
  mounted () {
  },
  data () {
    return {
      loading: false,
      miniState: true,
      header: null,
      check: false,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
  }
}
</script>

<style lang="stylus">
@font-face{
  font-family permanentMarker
  src url(../css/fonts/permanentMarker.woff)
}
// declare a class which applies it
.header-logo {
  font-family permanentMarker
  font-size: 28px
  color: #E2C85D
}
@media (min-width: 1024px) {
  .q-drawer-container aside {
    transform: translate3d(0px, 0px, 0px) !important;
  }

  .q-page-container {
    padding-left: 57px !important;
  }

  .toggle-menu {
    display: none;
  }
}

aside .q-item:not(.active-menu-item) {
  color: #989898;
}

.active-menu-item
  color #101752

.q-expansion-item .q-list .q-item
  border-radius 0 32px 32px 0
  margin-right 15px
  min-height 35px
</style>
