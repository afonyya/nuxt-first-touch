<template>
  <section>
    <h2>{{ user.name }}</h2>
    <hr />
    <p>Phone: {{ user.phone }}</p>
    <p>Email: {{ user.email }}</p>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios, params }) {
    return {
      user: (
        await $axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        )
      ).data
    }
  }
}
</script>
