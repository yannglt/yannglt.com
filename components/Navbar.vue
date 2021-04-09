<template lang="html">
  <div class="navbar" :class="{ 'navbar-hidden': !showNavbar }">
    <div class="container">
      <div class="navbar-content">
        <div class="index">
          <a href="/" class="index-link">
            <div class="index-logo"></div>
            <div class="index-me">
              <p class="index-name caption">Yann-Edern Gillet</p>
              <p class="index-subtitle secret">Personal space</p>
            </div>
          </a>
        </div>
        <div class="links">
          <ul>
            <!-- <li><NuxtLink class="wip caption" to="">Process</NuxtLink></li> -->
            <li><NuxtLink class="caption" to="/about">About</NuxtLink></li>
            <li><NuxtLink class="caption" to="/notes">Notes</NuxtLink></li>
            <li><NuxtLink class="caption" to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        showNavbar: true,
        lastScrollPosition: 0
      }
    },

    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },

    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },

    methods: {

      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

        if (currentScrollPosition < 0) {
          return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 16) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
    }
  }

</script>