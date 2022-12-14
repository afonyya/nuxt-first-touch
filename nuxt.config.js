export default {
  head: {
    title: 'nuxt-first-touch',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: 'blue' },
  css: ['@/node_modules/bootstrap/dist/css/bootstrap.min.css'],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['@nuxtjs/axios'],
  build: {}
}
