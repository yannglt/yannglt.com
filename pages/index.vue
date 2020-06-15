<template lang="html">
  <div id="app">
    <Navbar></Navbar>
    <section class="intro">
      <div class="container">
        <div class="welcome">
          <p>Welcome</p>
          <p>Welcome</p>
          <p>Welcome</p>
          <p>Welcome</p>
          <p>Welcome</p>
          <p>Welcome</p>
          <p>Welcome</p>
          <p>Welcome</p>
        </div>
        <div class="etiquette">
          <p class="etiquette-title">introoo</p>
          <div class="etiquette-properties">
            <div class="etiquette-property">
              <p class="etiquette-propertyName">Identity</p>
              <p class="etiquette-propertyValue">Yann-Edern Gillet</p>
            </div>
            <div class="etiquette-property">
              <p class="etiquette-propertyName">Current position</p>
              <p class="etiquette-propertyValue">Product Designer, Source</p>
            </div>
            <div class="etiquette-property">
              <p class="etiquette-propertyName">Passion</p>
              <p class="etiquette-propertyValue">Design Operations</p>
            </div>
            <div class="etiquette-property">
              <p class="etiquette-propertyName">Location</p>
              <p class="etiquette-propertyValue">Paris, France</p>
            </div>
          </div>
          <div class="etiquette-logo"></div>
          <p class="etiquette-subtitle">danger</p>
          <p class="etiquette-desc">May present some work under NDA agreement. Just kidding, relax. Open headspace.</p>
          <p class="etiquette-annotation">LF-11235813-21345892-150242392</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    components: {
      Navbar,
    }
  }

</script>
