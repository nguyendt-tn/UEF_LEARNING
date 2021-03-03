const URL = "http://localhost:3000/api/v1";
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Learning Social Network',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href : "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"},
      { rel: 'stylesheet', href : "/css/main.css"}
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js'
      },
      {
        src : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.7/chartjs-plugin-annotation.min.js'
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-loading-overlay.js' },
    { src: '~/plugins/vue-notification.js', ssr : false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/auth"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  auth: {
      strategies: {
        user: {
          _scheme: 'local',
          endpoints: {
            login: { url: '/users/auth/login', method: 'post', propertyName: 'data.token' },
            user: { url: '/users/me', method: 'get', propertyName: 'data.user' }
          },
        },
        user_1: {
          _scheme: 'local',
          endpoints : {
              login: { url: '/users/google-login', method: 'post', propertyName: 'data.token_auth' },
              user: { url: '/users/me', method: 'get', propertyName: 'data.user' }
          }
        },
      }
  }
}
