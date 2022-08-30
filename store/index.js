export const state = () => ({
  token: null
})

export const mutations = {
  SET_TOKEN(state, users) {
    state.token = users
  },
  CLEAR_TOKEN(state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit() {
    console.log('nuxt server init')
  },
  login({ commit }) {
    commit('SET_TOKEN', 'Token 2131dsf6a6sdt76g12e')
  },
  logout({ commit }) {
    commit('CLEAR_TOKEN')
  }
}

export const getters = {
  hasToken: state => !!state.token
}
