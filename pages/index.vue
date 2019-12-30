<template lang="html">
  <div id="app">
    <div id="intro">
      <div class="container">
        <div class="me__container">
          <div class="me">Yann-Edern Gillet</div>
          <h1>Product Designer of things made of strategy, empathy and work precision</h1>
        </div>
        <div class="tldr__container">
          <div class="tldr__intro">
            <p class="tldr__introText">tl;dr</p>
            <img class="tldr__introImage" src="~/assets/images/arrow-tldr.svg" alt="" height="24px" width="24px">
          </div>
          <div class="tldr tldr__who">
            <p class="extract__tag">Current position</p>
            <p class="extract__title">Product Designer, Source</p>
            <p class="extract__body">A tech company providing value through <br>design solutions, technical expertise and financial support</p>
          </div>
          <div class="tldr tldr__what">
            <p class="extract__tag">With a passion for</p>
            <p class="extract__title">Design Operations</p>
            <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
          </div>
        </div>
        <div class="who-and-showreel-alert">
          <div class="tldr__intro">
            <p class="tldr__introText">hello</p>
            <img class="tldr__introImage" src="~/assets/images/arrow-tldr.svg" alt="" height="24px" width="24px">
          </div>
          <div class="who emphasis">
            <p>I am currently living in Paris, France and working at a product design studio called <a href="https://source.paris" target="_blank">Source</a>, where I help to define and create products and services for businesses and people.</p>
            <p>Alongside this Product Designer position I spend some time thinking, writing and talking about design operations and their impacts on organizations, teams and end-users.</p>
            <p>Here you will find soon a selection of my latest works</a> and collaborations with startups and some friends, you will be also able to read more about my story</a>, ask for freelance work, or just send me an invitation to <a href="mailto:hello@yannglt.com">grab a coffee together</a>.</p>
          </div>
          <div class="showreel-alert__container">
            <img class="circle" src="~/assets/images/circle.svg" alt="" height="480px" width="480px">
            <img class="arrow" src="~/assets/images/arrow.svg" alt="" height="160px" width="160px">
          </div>
        </div>
      </div>
    </div>

    <div id="showreelVideo">
      <div class="container">
        <div class="showreelVideo__player"></div>
      </div>
      <div class="showreelVideoReveal"></div>
    </div>

    <div id="showreelContent">
      <div class="projects__container container">
        <div class="projects__intro">
          <h2>Projects mentionned <span class="cr"><br></span>in this showreel</h2>
          <p >These projects were made in 2018 and 2019 with other designers, credits available in upcoming case&nbsp;studies.</p>
        </div>
        <div class="projects">
          <div class="project">
          <p class="extract__tag">Product design</p>
          <p class="extract__title">Tagether mobile app</p>
          <p class="extract__body">Reconnect through discovery and fidelity, local shops and citizens with the aim of creating new neighborhood dynamics</p>
          </div>
          <div class="project">
            <p class="extract__tag">Information architecture</p>
            <p class="extract__title">DC Comics marketplace</p>
            <p class="extract__body">Promote official comics products from Warner&nbsp;Bros. to french customers with a new dedicated marketplace</p>
          </div>
          <div class="project">
            <p class="extract__tag">Product design</p>
            <p class="extract__title">Rookie service</p>
            <p class="extract__body">Find a solution for 100 000 abandoned pets each year in France with behavior problems as first target</p>
          </div>
          <div class="project">
            <p class="extract__tag">Branding workshop</p>
            <p class="extract__title">Warner Bros. Horror</p>
            <p class="extract__body">Create a unique personality for upcoming Warner Bros. horror franchise, based on its classics and latest movies</p>
          </div>
          <div class="project">
            <p class="extract__tag">Branding, IA + ERG</p>
            <p class="extract__title">Dassault Systèmes story</p>
            <p class="extract__body">Provide a real structure for all related content allowing stakeholders to transmit the desired messages to targets</p>
          </div>
          <div class="project">
            <p class="extract__tag">Branding + 3D</p>
            <p class="extract__title">Electricity, personal city</p>
            <p class="extract__body">Personal playground created 8 years ago in my debuts, where I experiment my own branding and do some 3D modeling</p>
          </div>
        </div>
      </div>
    </div>

    <div id="workTogether">
      <div class="container">
        <p class="workTogether__question highlight">Enjoyed what you saw and now interested in working together?</p>
        <div class="workTogether__redirect">
          <p>I will be thrilled to bring my expertise to your project. Send me a few lines describing the design problem you encounter or the startup idea you dream of and I will be back to you within a day.</p>
          <a href="mailto:super-project@yannglt.com">Take my idea to the next level</a><img src="~/assets/images/arrow-link.svg">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'

  import { TimelineLite, Power1 } from 'gsap'

  export default {

    components: {
      Footer,
    },

    mounted() {
      let ScrollMagic
      ScrollMagic = require('scrollmagic')
      const showreelAlertCircle = new TimelineLite();
      const showreelAlertArrow = new TimelineLite();
      const showreelVideoPin = new TimelineLite();
      const showreelVideoContent = new TimelineLite();
      const controllerShowreelAlertCircle = new ScrollMagic.Controller();
      const controllerShowreelAlertArrow = new ScrollMagic.Controller();
      const controllerShowreelVideoPin = new ScrollMagic.Controller();
      const controllerShowreelContent = new ScrollMagic.Controller();

      showreelAlertCircle.to('.circle', 1, { rotation: 132, })
      showreelAlertArrow.to('.arrow', 1, { rotation: 45, })

      const sceneShowreelAlertCircle = new ScrollMagic.Scene({
        offset: 50,
        duration: 650
      })

      const sceneShowreelAlertArrow = new ScrollMagic.Scene({
        offset: 460,
        duration: 240
      })

      const sceneShowreelVideoPin = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#showreelVideo',
        duration: window.innerHeight * 1.25
      })

      const sceneShowreelContent = new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        triggerElement: '#showreelContent'
      })

      sceneShowreelAlertCircle
      .setTween(showreelAlertCircle)
      .addTo(controllerShowreelAlertCircle)

      sceneShowreelAlertArrow
      .setTween(showreelAlertArrow)
      .addTo(controllerShowreelAlertArrow)

      sceneShowreelVideoPin
      // .addIndicators()
      .setPin('.showreelVideo__player')
      .addTo(controllerShowreelVideoPin)

      showreelVideoContent
      .to('.showreelVideoReveal', 0.150, {
        backgroundColor: '#F7FAFF',
      })
      .fromTo('#showreelContent', 0.4,
        { opacity: 0, transform: 'translateY('+ window.getComputedStyle(document.querySelector('#showreelVideo .container')).paddingTop +'px)' },
        { opacity: 1, transform: 'translateY(0px)', ease: Power1.EaseInOut }
      )
      sceneShowreelContent
      .setTween(showreelVideoContent)
      .addTo(controllerShowreelContent)

      document.querySelector('.showreel-alert__container').addEventListener('click', function(){
        // console.log('click')
        // window.scroll({ top: 100, behavior: 'smooth'})
        document.getElementById('showreelVideo').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
      })
    }
  }

</script>

<style media="screen" lang="sass">

  @import '@/assets/sass/_mixins.sass'

  body
    overflow-x: hidden

  #intro
    margin-bottom: calc(72px - ((100vh - 212px)/2))

    +adapt(768px)
      margin-bottom: calc(122px - ((100vh - 356px)/2))

    +adapt(1024px)
      margin-bottom: calc(120px - ((100vh - 516px)/2))

    +adapt(1440px)
      margin-bottom: calc(156px - ((100vh - 684px)/2))

  .me__container

    +adapt(1024px)
      margin-left: 80px
      margin-right: 80px

    +adapt(1440px)
      margin-left: 106px
      margin-right: 318px

  .tldr__container
    margin-bottom: 42px

    +adapt(768px)
      display: grid
      grid-template-columns: repeat(4, 136px)
      column-gap: 32px

      margin-bottom: 52px

    +adapt(1024px)
      display: grid
      grid-template-columns: repeat(12, 48px)
      column-gap: 32px

      margin-bottom: 94px

    +adapt(1440px)
      display: grid
      grid-template-columns: repeat(12, 74px)
      column-gap: 32px

  .tldr
    margin-bottom: 33px

    &:last-of-type
      margin-bottom: 0

    +adapt(768px)
      grid-column: span 2
      margin-bottom: 0

    +adapt(1024px)
      grid-column: span 4

      &:first-of-type
        grid-column: 2 / span 4

    +adapt(1440px)
      grid-column: span 3

      &:first-of-type
        grid-column: 2 / span 3

  .who-and-showreel-alert

    +adapt(1024px)
      display: grid
      grid-template-columns: repeat(12, 48px)
      column-gap: 32px

    +adapt(1440px)
      grid-template-columns: repeat(12, 74px)
      column-gap: 32px

  .who

    p:last-of-type
      margin-bottom: 0

    +adapt(768px)
      margin-right: 168px

    +adapt(1024px)
      margin-right: 0
      grid-column: 2 / span 10

    +adapt(1440px)
      margin-right: 0
      grid-column: 2 / span 7

  .showreel-alert__container
    display: none

    +adapt(1440px)
      display: block
      grid-column: span 4
      position: relative
      height: 480px
      width: 480px

      transform: translate(8px, -44px)

      .arrow
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

  #showreelVideo
    position: relative

    .container
      padding-top: calc((100vh - 212px) / 2)
      // padding-bottom: calc((100vh - 212px) / 2)

      +adapt(768px)
        padding-top: calc((100vh - 356px) / 2)
        // padding-bottom: calc((100vh - 356px) / 2)

      +adapt(1024px)
        padding-top: calc((100vh - 516px) / 2)
        // padding-bottom: calc((100vh - 516px) / 2)

      +adapt(1440px)
        padding-top: calc((100vh - 684px) / 2)
        // padding-bottom: calc((100vh - 684px) / 2)

  .showreelVideo__player
    background-color: #FFFFFF
    mix-blend-mode: difference
    position: relative
    width: 100%
    height: 212px
    width: calc(100%)

    +adapt(768px)
      width: 100%
      height: 356px

    +adapt(1024px)
      height: 516px

    +adapt(1440px)
      top: 0px
      height: 684px

  .showreelVideoReveal
    position: absolute
    z-index: -50
    height: 125vh
    width: 100%
    bottom: 0
    background-color: #000
    transform: translateY(calc((100vh - 212px) / 2))

    +adapt(768px)
      transform: translateY(calc((100vh - 356px) / 2))

    +adapt(1024px)
      transform: translateY(calc((100vh - 516px) / 2))

    +adapt(1440px)
      transform: translateY(calc((100vh - 684px) / 2))

  #showreelContent
    margin-top: 35px

    +adapt(768px)
      margin-top: 71px

    .cr
      display: inline

      +adapt(768px)
        display: none

      +adapt(1024px)
        display: none

      +adapt(1440px)
        display: inline

  .projects__container
    display: block
    max-width: 100%

    +adapt(768px)
      max-width: 640px

    +adapt(1024px)
      max-width: 928px

    +adapt(1440px)
      max-width: 1240px

      display: grid
      grid-template-columns: repeat(12, 74px)
      column-gap: 32px

  .projects__intro
    margin-left: 40px
    margin-right: 40px
    margin-bottom: 54px

    +adapt(768px)
      margin-left: 0
      margin-right: 0
      margin-bottom: 74px
      text-align: center

    +adapt(1440px)
      text-align: left
      grid-column: 2 / span 4
      padding-right: 74px
      margin-bottom: 0

    p
      +adapt(768px)
        margin-left: 84px
        margin-right: 84px

      +adapt(1024px)
        margin-left: 160px
        margin-right: 160px

      +adapt(1440px)
        margin-left: 0
        margin-right: 0

  .projects
    display: flex
    overflow-x: auto
    overflow-y: hidden
    flex-direction: row
    scroll-snap-type: x mandatory
    scroll-padding-left: 40px
    padding-left: 40px

    scrollbar-width: none

    &::-webkit-scrollbar
      display: none

    +adapt(768px)
      scroll-snap-type: none
      overflow-x: hidden
      display: grid
      grid-template-columns: repeat(4, 136px)
      column-gap: 32px
      padding-left: 0

    +adapt(1024px)
      display: grid
      grid-template-columns: repeat(12, 48px)
      column-gap: 32px

    +adapt(1440px)
      grid-column: span 6
      display: grid
      grid-template-columns: repeat(2, 286px)
      column-gap: 32px
      grid-template-rows: repeat(3, 131px)
      grid-row-gap: 53px

  .project
    flex-grow: 0
    flex-shrink: 0
    width: 285px
    scroll-snap-align: start
    padding-right: 24px

    &:last-of-type
      padding-right: 89px

    +adapt(768px)
      width: 100%
      padding-right: 0
      grid-column: span 2
      margin-bottom: 53px

    +adapt(1024px)
      grid-column: span 4

    +adapt(1440px)
      grid-column: span 1
      margin-bottom: 0

  #workTogether
    padding-top: 52px
    padding-bottom: 56px
    margin-top: 80px
    background-color: rgba(#06080A, 0.96)

    +adapt(768px)
      padding-top: 79px
      padding-bottom: 120px
      margin-top: 138px

    +adapt(1024px)
      padding-top: 115px
      padding-bottom: 120px

    +adapt(1440px)
      margin-top: 146px

    .container

      +adapt(1024px)
        display: grid
        grid-template-columns: repeat(12, 48px)
        column-gap: 32px

      +adapt(1440px)
        display: grid
        grid-template-columns: repeat(12, 74px)
        column-gap: 32px

      .workTogether__question

        +adapt(1024px)
          grid-column: 2 / span 9

        +adapt(1440px)
          grid-column: 1 / span 7

      .workTogether__redirect

        +adapt(1024px)
          grid-column: 2 / span 5

        +adapt(1440px)
          grid-column: 9 / span 4
          transform: translateY(27px)

        p
          color: rgba(#FFFFFF, 0.84)

          +adapt(768px)
            margin-right: 240px

          +adapt(1024px)
            margin-right: 0

        a
          text-decoration: none

        img
          transform: translate(4px, 6px)

</style>
