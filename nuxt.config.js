import pkg from './package'

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

      // { property: 'og:type', content: 'website' },
      // { property: 'og:title', content: 'Yann-Edern Gillet, Product Designer' },
      // { property: 'og:description', content: 'Personal space on the Internets of Yann-Edern Gillet, Product Designer of things made of strategy, empathy and work precision' },
      // { property: 'og:image', content: 'https://yannglt.com/og-image-cover.png' },
      // { property: 'og:image:secure_url', content: 'https://yannglt.com/og-image-cover.png' },
      // { property: 'og:image:type', content: 'image/png' },
      // { property: 'og:image:width', content: '1200' },
      // { property: 'og:image:height', content: '627' },
      // { property: 'og:image:alt', content: 'Personal space on the Internets of Yann-Edern Gillet, Product Designer of things made of strategy, empathy and work precision' },
      // { property: 'og:url', content: 'https://yannglt.com' },
      //
      // { name: 'twitter:title', content: 'Yann-Edern Gillet, Product Designer' },
      // { name: 'twitter:description', content: 'Personal space on the Internets of Yann-Edern Gillet, Product Designer of things made of strategy, empathy and work precision' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:image', content: 'https://yannglt.com/og-image-cover.png' },
      // { name: 'twitter:creator', content: '@yannglt' }
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
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  // module.exports = {
  //   build: {
  //     transpile: ['scrollmagic']
  //   }
  // },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
    extend(config, ctx) {
    }
  },
}
