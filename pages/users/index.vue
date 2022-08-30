<template>
  <section>
    <h2>Users page</h2>
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
      >
        <nuxt-link :to="`/users/${user.id}`">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    !store.getters['users/users'].length &&
      (await store.dispatch('users/getUsers'))
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  }
}
</script>
