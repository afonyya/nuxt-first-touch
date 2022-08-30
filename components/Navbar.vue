<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-brand">Nuxt SSR</div>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link
            to="/"
            active-class="active"
            exact
            class="nav-link"
          >
            Home
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            to="/about"
            no-prefetch
            active-class="active"
            class="nav-link"
          >
            About
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            to="/users"
            active-class="active"
            class="nav-link"
          >
            Users
          </nuxt-link>
        </li>
        <li
          v-if="!hasToken"
          class="nav-item"
        >
          <nuxt-link
            to="/login"
            active-class="active"
            class="nav-link"
          >
            Login
          </nuxt-link>
        </li>
        <li
          v-else
          class="nav-item"
        >
          <a
            @click.prevent="logoutHandler"
            href="#"
            class="nav-link"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['hasToken'])
  },
  methods: {
    ...mapActions(['logout']),
    logoutHandler() {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
