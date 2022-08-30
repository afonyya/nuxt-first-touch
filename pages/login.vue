<template>
  <section>
    <div
      v-if="$route.query.message"
      class="alert alert-danger mb-2"
    >
      Need to login first
    </div>
    <form @submit.prevent="onSubmit">
      <h2>Login page</h2>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
        />
        <p>
          <nuxt-link to="/">To home page</nuxt-link>
        </p>
        <button
          class="btn btn-primary"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'empty',
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
form {
  width: 400px;
  margin: 0 auto;
}
</style>
