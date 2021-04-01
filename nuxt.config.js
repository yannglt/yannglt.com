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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Personal space on the Internets of Yann-Edern Gillet, Product Designer of things made of strategy, empathy and work precision. Here you will find soon a selection of my latest works and collaborations with startups and some friends, you will be also able to read more about my story, ask for freelance work, or just send me an invitation to grab a coffee together.' },
    ],
    script: [

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

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
