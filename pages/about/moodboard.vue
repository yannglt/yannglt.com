<template lang="html">
  <div id="moodboard">
    <section class="moodboardPlayground">
      <div class="container">
        <div class="playground-instructions">
          <div class="playground-intro">
            <h1 class="heading-1 title text-primary-dark">Moodboard</h1>
            <p class="body text-quaternary-dark">[WIP] A place where I share my inspirations for this personal space. Feel free to visit this page in a week or two, further controls may be available... Non-compatible with touchscreens. </p>
          </div>
          <div class="playground-actions">
            <SuperButton variant="secondary dark" @click.native="resetInspirations">Shuffle</SuperButton>
            <SuperButton variant="primary disabled" icon="#reset-20">Reset</SuperButton>
          </div>
          <div class="playground-commands">
            <div class="command move">
              <svg class="icon" aria-hidden="true" focusable="false">
                <use xlink:href="@/static/icons/sprite.svg#move-20"></use>
              </svg>
              <p class="caption text-secondary-dark">Move<span class="text-quaternary-dark">Click + Mouse</span></p>
            </div>
            <!-- <div class="command scale">
              <svg class="icon" aria-hidden="true" focusable="false">
                <use xlink:href="@/static/icons/sprite.svg#scale-20"></use>
              </svg>
              <p class="caption text-secondary-dark">Scale<span class="text-quaternary-dark">Anchor + Mouse</span></p>
            </div>
            <div class="command resize">
              <svg class="icon" aria-hidden="true" focusable="false">
                <use xlink:href="@/static/icons/sprite.svg#resize-20"></use>
              </svg>
              <p class="caption text-secondary-dark">Rotate<span class="text-quaternary-dark">R + Mouse</span></p>
            </div> -->
          </div>
        </div>
        <div class="playground">
          <Inspiration v-for="inspirationImage in inspirationsImages" @incrementZIndex="incrementZIndex" ref="inspiration" :key="inspirationImage.id" :src="inspirationImage.pathLong"></Inspiration>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SuperButton from '@/components/SuperButton.vue'
  import Inspiration from '@/components/Inspiration.vue'

  export default {
    data: function () {
      return {
        inspirationsImages: [ ],
        maxZIndex: 0
      }
    },

    head() {
      return {
        title: 'Yann-Edern Gillet — Moodboard',
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'Yann-Edern Gillet — Moodboard',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'Yann-Edern Gillet — Moodboard',
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: 'https://yannglt.com/images/og-image.png',
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'https://yannglt.com/images/og-image.png',
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://yannglt.com/moodboard/',
          },
        ]
      }
    },

    methods: {
      importAll(r) {
        r.keys().forEach(key => (this.inspirationsImages.push({ pathLong: r(key) })))
      },

      resetInspirations: function() {
        this.$refs.inspiration.forEach((inspiration) => {
          inspiration.setPosition()
        })
      },

      incrementZIndex: function(target) {
        this.maxZIndex++
        target.style.zIndex = this.maxZIndex
      }
    },

    mounted() {
      this.importAll(require.context('@/static/images/moodboard/', true, /\.(png|jpg)$/))
    },

    components: {
      SuperButton,
      Inspiration
    }
  }

</script>