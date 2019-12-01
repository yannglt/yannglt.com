<template lang="html">
  <div class="container">
    <div class="intro">
      <div class="tag main">Yann-Edern Gillet</div>
      <h1>Product Designer of things made of strategy, empathy and work precision</h1>
      <div class="tldr__container">
        <div class="tldr who">
          <p class="tldr__tag tag">Current position</p>
          <p class="tldr__title title">Product Designer, Source</p>
          <p class="tldr__body body">A tech company providing value through design solutions, technical expertise and financial support</p>
        </div>
        <div class="tldr what">
          <p class="tldr__tag tag">With a passion for</p>
          <p class="tldr__title title">Design Operations</p>
          <p class="tldr__body body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
        </div>
      </div>
      <div class="who-and-showreel-alert">
        <div class="who emphasis">
          <p>I am currently living in Paris, France and working at a product design studio called <a href="#">Source</a>, where I help to define and create products and services for businesses and people.</p>
          <p>Aside this day job, I often spend time <a href="#">thinking</a>, <a href="#">writing</a> and <a href="#">talking</a> about the design operations and their impacts on organizations, teams and end-users.</p>
          <p>Here you will find a <a href="#">selection of my latest works</a> and collaborations with startups and some friends, you can also <a href="#">read more about my story (soon)</a>, ask for freelance work, or just send me an invitation to <a href="#">grab a coffee together.</a></p>
        </div>
        <div class="showreel-alert__container">
          <img class="circle" src="~/assets/images/circle.png" alt="" height="480px" width="480px">
          <img class="arrow" src="~/assets/images/arrow.png" alt="" height="160px" width="160px">
        </div>
        <div style="height:1200px"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { TimelineLite, Power1 } from 'gsap'

  export default {

    mounted() {

      let ScrollMagic
      ScrollMagic = require('scrollmagic')

      const showreelAlert = new TimelineLite();

      showreelAlert.to('.circle', 1, {
        rotation: 132,
        ease: Power1.easeOut
      })

      .to('.arrow', 1, {
        rotation: 45,
        ease: Power1.easeOut
      })

      const controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
        triggerElement: '.showreel-alert__container',
        duration: 600
      })
      .setTween(showreelAlert)
      // .addIndicators()
      .addTo(controller)

    }
  }

</script>

<style media="screen" lang="sass">

  body
    overflow-x: hidden

  .container
    padding-top: 196px

  .tldr__container
    display: grid
    grid-template-columns: repeat(12, 74px)
    column-gap: 32px

    margin-bottom: 94px

  .tldr
    grid-column: span 3

  .who-and-showreel-alert
    display: flex

  .showreel-alert__container
    position: relative
    height: 480px
    width: 480px

    transform: translate(185px, -44px)

    .arrow
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

</style>
