import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Yann-Edern Gillet, Product Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },

      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: 'https://yannglt.com/og-image-cover.png' },
      { hid: ' og:image:secure_url', name: ' og:image:secure_url', content: 'https://yannglt.com/og-image-cover.png' },
      { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', name: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', name: 'og:image:height', content: '627' },
      { hid: 'og:image:alt', name: 'og:image:alt', content: 'Personal space on the Internets of Yann-Edern Gillet, Product Designer of things made of strategy, empathy and work precision' },
      { hid: 'og:url', name: 'og:url', content: 'https://yannglt.com' },

      { hid:'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid:'twitter:creator', name: 'twitter:creator', content: '@yannglt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/static/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:'180x180', href:'~/static/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', sizes:'32x32', href:'~/static/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes:'16x16', href:'~/static/favicon-16x16.png' },
      { rel: 'manifest', href:'~/site.webmanifest' },
      { rel: 'mask-icon', href:'~/static/safari-pinned-tab.svg', color:'#0c0d0f' }
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
    { src: '~/plugins/gsap-scrollmagic.js', ssr: false },
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
