<template lang="html">
  <div class="contact-page">
    <Navbar></Navbar>

    <transition name="slide">
      <copyToast v-if="emailToast == 'show'"></copyToast>
    </transition>

    <section class="contact">
      <div class="container">
        <div class="contact-content">
          <h1 class="contact-heading heading-1 text-primary-dark">Humans deserves great experiences and design is boring without partners.<span>Let’s team up and launch some rockets and/or products together.</span></h1>
          <p class="contact-desc emphasis text-tertiary-dark">Designing interfaces, products and systems can be as tough as finding the dream team of makers. I provide design-on-demand services to help you reaching your vision and users’ delight.</p>
        </div>
        <div class="contact-links">
          <div class="contact-link">
            <p class="link-purpose caption text-quaternary-dark">Discussions</p>
            <a href="https://twitter.com/yannglt" target="_blank" class="emphasis text-secondary-dark">Shoot me a DM on Twitter<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-20"></use></svg></a>
          </div>
          <div class="contact-link">
            <p class="link-purpose caption text-quaternary-dark">Work inquieries</p>
            <button @click="copyEmail" class="emphasis text-secondary-dark">Copy my email address<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#copy-20"></use></svg></button>
          </div>
        </div>
        <div class="redirects">
          <div class="redirect about">
            <div class="redirect-icon"></div>
            <h2 class="redirect-title heading-2 text-secondary-dark">About</h2>
            <p class="redirect-desc text-quaternary-dark">Find here my inspirations, current and past experiences, facts about me and things I like to do after work hours.</p>
            <nuxt-link to="/about" class="redirect-link caption text-primary-dark">Know more about me<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-12"></use></svg></nuxt-link>
          </div>
          <div class="redirect notes">
            <div class="redirect-icon"></div>
            <h2 class="redirect-title heading-2 text-secondary-dark">Notes</h2>
            <p class="redirect-desc text-quaternary-dark">I share my thoughts about design operations and bridges between design and code. Also kind of a public reflection journal.</p>
            <nuxt-link to="/notes" class="redirect-link caption text-primary-dark">Read my notes<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-12"></use></svg></nuxt-link>
          </div>
          <div class="redirect process">
            <div class="redirect-icon"></div>
            <h2 class="redirect-title heading-2 text-secondary-dark">Process</h2>
            <p class="redirect-desc text-quaternary-dark">I try to find a great balance between following the choosen methodology and keeping velocity and efficiency through the entire journey</p>
            <a class="redirect-link caption text-quaternary-dark wip">Coming soon<!--<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-12"></use></svg>--></a>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import CopyToast from '../components/CopyToast.vue'
  import Footer from '../components/Footer.vue'

  export default {
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
        ]
      }
    },

    data: function () {
      return {
        email: 'hello@yannglt.com',
        emailToast: null
      }
    },

    methods: {
      copyEmail: function () {
        this.$copyText(this.email)
        this.emailToast = 'show'

        setTimeout(() => this.emailToast = null, 2000)
      }
    },

    components: {
      Navbar,
      CopyToast,
      Footer
    }
  }
</script>