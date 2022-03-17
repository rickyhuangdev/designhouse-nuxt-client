export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'designhouse-client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    script: [
      {src:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js"},
      {src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"},
      {src:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/js/bootstrap.bundle.min.js"},
    ]
  },
  srcDir: "src/",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    // '~/assets/css/bootstrap.min.css',
    // '~/assets/css/menukit.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vform.js',
    '~/plugins/vue-observe-visibility.js',
    '~/components/_globals',
    {src: '~/plugins/gmaps', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/router',
    // '@nuxtjs/tailwindcss'
  ],
  routerModule: {
    /* module options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
  ],
  auth: {
    strategies: {
      local: {
        token: {
          // property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        endpoints: {
          login: {url: '/login', method: 'post'},
          logout: {url: '/logout', method: 'post'},
          user: {url: '/me', method: 'get'}
        }
      }
    }
  },
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE,
    headers: {
      common: {
        Accept: 'application/json'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vform'],
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://designhouse.test:3000'
  },


}
