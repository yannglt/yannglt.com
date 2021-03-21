<template lang="html">
  <div class="navbar">
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
            <li><NuxtLink class="caption" to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink class="caption" to="/about">About</NuxtLink></li>
            <li><NuxtLink class="caption" to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>