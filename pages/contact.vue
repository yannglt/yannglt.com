<template lang="html">
  <div class="contact-page">

    <transition name="slide">
      <copyToast v-if="emailToast == 'show'"></copyToast>
    </transition>

    <section class="contact">
      <div class="container">
        <div class="contact-content">
          <h1 class="contact-heading heading-1 text-primary-dark">Humans deserves great experiences and design is boring without partners.</h1>
          <p class="contact-desc emphasis text-tertiary-dark">Does it resonate with you? Let’s have a discussion or even launch some rockets and/or products together! Here are some conversation starters if, like me, you never know how to start:</p>
          <ul class="contact-starters emphasis text-tertiary-dark">
            <li>Bonjour, what about design tokens and color modes?</li>
            <li>Hello there, love this brutalist serif typeface, how did you hear of Black Foundry’s work?</li>
            <li>What’s up? You mentioned Hip-Hop music, what’s your opinion on Kid Cudi’s MOTM 3?</li>
          </ul>
        </div>
        <div class="contact-links">
          <div class="contact-link">
            <p class="link-purpose caption text-quaternary-dark">Discussions</p>
            <SuperLink href="https://twitter.com/yannglt" target="_blank" variant="emphasis dark" icon="#arrow-forward-20">Shoot me a DM on Twitter</SuperLink>
          </div>
          <div class="contact-link">
            <p class="link-purpose caption text-quaternary-dark">Work inquieries</p>
            <SuperLink @click.native="copyEmail" variant="emphasis dark" icon="#copy-20">Copy my email address</SuperLink>
          </div>
        </div>
        <div class="redirects">
          <div class="redirect about">
            <div class="redirect-icon"></div>
            <div class="redirect-content">
              <h2 class="redirect-title heading-2 text-secondary-dark">About</h2>
              <p class="redirect-desc body text-quaternary-dark">Find here my inspirations, current and past experiences, facts about me and things I like to do after work hours.</p>
              <SuperButton href="/about" class="redirect-link" variant="quaternary dark" icon="#arrow-forward-12">Know more about me</SuperButton>
            </div>
          </div>
          <div class="redirect notes">
            <div class="redirect-icon"></div>
            <div class="redirect-content">
              <h2 class="redirect-title heading-2 text-secondary-dark">Notebook</h2>
              <p class="redirect-desc body text-quaternary-dark">I share my thoughts about design operations and bridges between design and code. Also kind of a public reflection journal.</p>
              <SuperButton href="/notes" class="redirect-link" variant="quaternary dark" icon="#arrow-forward-12">Read my notes</SuperButton>
            </div>
          </div>
          <div class="redirect process">
            <div class="redirect-icon"></div>
            <div class="redirect-content">
              <h2 class="redirect-title heading-2 text-secondary-dark">Process</h2>
              <p class="redirect-desc body text-quaternary-dark">I try to find a great balance between following the choosen methodology and keeping velocity and efficiency through the entire journey</p>
              <SuperButton class="redirect-link" variant="quaternary dark disabled">Coming soon</SuperButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SuperButton from '@/components/SuperButton.vue'
  import SuperLink from '@/components/SuperLink.vue'
  import CopyToast from '@/components/CopyToast.vue'

  export default {

    data: function () {
      return {
        email: 'hello@yannglt.com',
        emailToast: null
      }
    },

    head() {
      return {
        title: 'Yann-Edern Gillet — Contact',
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'Yann-Edern Gillet — Contact',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'Yann-Edern Gillet — Contact',
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
            content: 'https://yannglt.com/contact/',
          },
        ]
      }
    },

    methods: {
      copyEmail: function () {
        this.$copyText(this.email)
        this.emailToast = 'show'

        setTimeout(() => this.emailToast = null, 3000)
      }
    },

    components: {
      SuperButton,
      SuperLink,
      CopyToast
    }
  }
</script>