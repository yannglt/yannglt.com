import pkg from './package'
import dotenv from "dotenv";

dotenv.config()

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN
})

export default {
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Yann-Edern Gillet, Product Designer',
    link: [
      {
        rel: 'shortcut icon',
        href: 'https://crash.yannglt.com/images/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: 'https://crash.yannglt.com/images/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        href: 'https://crash.yannglt.com/images/icon.png',
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Personal space of Yann-Edern Gillet, a designer thinking, creating and breaking interfaces, products and systems with a passion for design operations'
      },
      {
        name:  'og:title',
        content:  'Yann-Edern Gillet, Product Designer',
      },
      {
        name:  'og:image',
        content:  'https://crash.yannglt.com/images/og-image.png',
      },
      {
        name:  'og:url',
        content:  'https://crash.yannglt.com',
      },
      {
        name:  'og:description',
        content:  'Personal space of Yann-Edern Gillet, a designer thinking, creating and breaking interfaces, products and systems with a passion for design operations',
      },
      {
        name:  'twitter:site',
        content:  '@yannglt',
      },
      {
        name:  'twitter:image',
        content:  'https://crash.yannglt.com/images/og-image.png',
      },
      {
        name:  'twitter:card',
        content:  'summary_large_image',
      },
      {
        name:  'twitter:title',
        content:  'Yann-Edern Gillet, Product Designer',
      },
      {
        name:  'twitter:description',
        content:  'Personal space of Yann-Edern Gillet, a designer thinking, creating and breaking interfaces, products and systems with a passion for design operations',
      },
    ],
    script: [

    ]
  },

  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/sass/app.sass', lang: 'sass' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/contentful.js' },
    { src: '~/plugins/posts.js' },
    { src: '~/plugins/clipboard.js' }
  ],

  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },

  /*
  ** Nuxt.js modules
  */
  modules: [ '@nuxtjs/axios', '@nuxtjs/markdownit' ],

  markdownit: {
    injected: true
  },

  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "note"
        })
      ]).then(([noteEntries]) => {
        return [...noteEntries.items.map(entry => `/notes/${entry.fields.slug}`)];
      });
    }
  },

  /*
  ** Run this to be able to inspect on mobile
  */
  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0',
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vee-validate/dist/rules', 'vue-clipboard2'],
    extend(config, ctx) {}
  },
}
