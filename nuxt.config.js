import path from 'path'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package.json'
import Contents from './contents'

const productionUrl = 'https://sutanlab.js/org'
const appTitle = 'Sutan Nst. - Coder'

const routes = Contents.map((item) => {
  item = `/blog/${item.name}`
  return item
})

const routesSitemap = () => {
  const res = []
  routes.forEach((el) => {
    const item = {}
    item.url = el + '/'
    item.changefreq = 'daily'
    item.priority = 1
    item.lastmodISO = String(new Date().toISOString())
    res.push(item)
  })
  return res
}

export default {
  mode: 'spa',

  server: {
    port: 8000,
    host: '0.0.0.0'
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '*',
          redirect: '/'
        }
      )
    },
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: appTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: appTitle },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: 'sutan nst, sutan gading fadhillah nasution, sutan, gading, fadhillah, nasution, sgnzst, sutanlab, sutan lab, coder, mahasiswa, it polsri, itpolsri, polsri, politeknik negeri sriwijaya' },
      { hid: 'theme-color', name: 'theme-color', content: '#304165' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png' },
      { hid: 'og:title', property: 'og:title', content: appTitle },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:site_name', property: 'og:site_name', content: appTitle },
      { hid: 'og:url', property: 'og:url', content: productionUrl },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: '/icon.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: appTitle },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:url', name: 'twitter:url', content: productionUrl },
      { name: 'google-site-verification', content: 'jLyr0TMCl7eKN6nXKMcBVQE7pq3XshkQCTutxZMwQW4' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700|Courgette|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/brands.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css' }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.', body: true }
    ]
  },

  generate: {
    routes
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: productionUrl,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    routes: routesSitemap()
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    height: '4px',
    color: '#11CDEF'
  },

  /* costumize manifest
  **
  */
  manifest: {
    name: 'Sutanlab',
    short_name: 'Sutanlab'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/highlight.scss',
    '~/assets/style/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/global'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-135036153-1'
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save (disabled)
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'posts'
          }
        }
      })
    }
  }
}
