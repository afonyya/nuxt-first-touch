export const state = () => ({
  users: []
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  }
}

export const actions = {
  async getUsers({ commit }) {
    commit(
      'SET_USERS',
      (await this.$axios.get(`https://jsonplaceholder.typicode.com/users`)).data
    )
  }
}

export const getters = {
  users: state => state.users
}
