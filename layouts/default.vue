<template>
  <div>
    <!-- <div class="new-space">
      <a href="#" title="">Welcome on my new space on the Internets.<span class="line-breaker"><br></span><span class="link">Learn more about this new version<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-20"></use></svg></span></a>
    </div> -->
    <div class="under-construction">
      <a href="#" title="">New space on the Internets under construction.<span class="line-breaker"><br></span></a>
    </div>
    <Navbar></Navbar>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }

</script>