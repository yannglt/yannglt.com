<template lang="html">
  <div id="app">
    <Navbar></Navbar>
    <section class="tldr">
      <div class="container">
        <div class="welcome-repeat">
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
          <p class="etiquette-desc">May present some work under NDA. <br>Just kidding, relax. Open headspace.</p>
          <p class="etiquette-annotation">LF-11235813-21345892-150242392</p>
        </div>
      </div>
      <div class="etiquette-electricity">
        <div class="etiquette-electricity-middle"></div>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <p class="introTag">Welcome to my space on the Internets</p>
        <h1 class="introTitle">I think, create and break interfaces, products and systems with a passion for design operations.</h1>
        <p class="introDesc">Here you will find a selection of my latest works and collaborations with startups and some friends, you will be also able to read more about my story and ask for help on your idea/problem.</p>
        <ul class="introLinks">
          <li><a href="" title=""></a>Thoughts on Twitter</li>
          <li><a href="" title=""></a>Works in progress on Dribbble</li>
          <li><a href="" title=""></a>Journey on Instagram</li>
        </ul>
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
