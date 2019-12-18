<template lang="html">
  <div id="app">
    <div id="intro">
      <div class="container">
        <div class="me__container">
          <div class="me">Yann-Edern Gillet</div>
          <h1>Product Designer of things made of strategy, empathy and work precision</h1>
        </div>
        <div class="tldr__container">
          <div class="tldr tldr__who">
            <p class="extract__tag">Current position</p>
            <p class="extract__title">Product Designer, Source</p>
            <p class="extract__body">A tech company providing value through design solutions, technical expertise and financial support</p>
          </div>
          <div class="tldr tldr__what">
            <p class="extract__tag">With a passion for</p>
            <p class="extract__title">Design Operations</p>
            <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
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
          <h2>Projects mentionned in this showreel</h2>
          <p >These projects were made late 2018 and 2019, with other designers at Source and friends, credits available in case studies.</p>
        </div>
        <div class="projects">
          <div class="project">
          <p class="extract__tag">Product design</p>
          <p class="extract__title">Tagether mobile app</p>
          <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
          </div>
          <div class="project">
            <p class="extract__tag">Information architecture</p>
            <p class="extract__title">DC Comics marketplace</p>
            <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
          </div>
          <div class="project">
            <p class="extract__tag">Product design</p>
            <p class="extract__title">Rookie service</p>
            <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
          </div>
          <div class="project">
            <p class="extract__tag">Branding workshop</p>
            <p class="extract__title">Warner Bros. Horror</p>
            <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
          </div>
          <div class="project">
            <p class="extract__tag">Branding, IA + ERG</p>
            <p class="extract__title">Dassault Systèmes story</p>
            <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
          </div>
          <div class="project">
            <p class="extract__tag">Branding + 3D</p>
            <p class="extract__title">Electricity, personal city</p>
            <p class="extract__body">Wrote a research paper on design language systems and their impacts on product teams and end users</p>
          </div>
        </div>
      </div>
    </div>
    <div id="workTogether">
      <div class="container">
        <p class="workTogether__question highlight">Enjoyed what you saw and now interested in working together?</p>
        <div class="workTogether__redirect">
          <p>I will be thrilled to bring my expertise to your project. Send me a few lines describing the design problem you encounter or the startup idea you dream of and I will be back to you within a day.</p>
          <a class="">Take my idea to the next level</a><img src="~/assets/images/arrow-link.svg">
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="container">
        <div class="footer__section about-me">
          <p class="footer__title">About me</p>
          <div class="footer__body">
            <p>Product designer based in Paris,  currently working at <a href="#">Source</a>. Human who likes chocolate, dogs and design operations, but must of all someone with a passion for why and how things are designed.</p>
            <p><a href="#">HETIC</a> graduate (P2019) • <a href="#">Synerg’hetic</a> alumnus</p>
          </div>
        </div>
        <div class="links">
          <div class="footer__section follow-work">
            <p class="footer__title">Follow my work</p>
            <div class="footer__body">
              <ul>
                <li><a href="#">Stories on Medium <img src="~/assets/images/external-link.svg"></a></a></li>
                <li><a href="#">Journey on Instagram <img src="~/assets/images/external-link.svg"></a></a></li>
                <li><a href="#">WIPs on Dribbble <img src="~/assets/images/external-link.svg"></a></a></li>
                <li><a href="#">Case studies on Behance <img src="~/assets/images/external-link.svg"></a></a></li>
              </ul>
            </div>
          </div>
          <div class="footer__section get-in-touch">
            <p class="footer__title">Get in touch</p>
            <div class="footer__body">
              <ul>
                <li><a href="#">DMs are open on Twitter <img src="~/assets/images/external-link.svg"></a></li>
                <li>Work: <a href="#">super-project@yannglt.com</a></li>
                <li>Say bonjour: <a href="#">hello@yannglt.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright">
          <img src="~/assets/images/logo-copyright.svg" alt="">
          <span></span>
          <p>All rights reserved ⓒ Yann-Edern Gillet 2019</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import { TimelineLite, Power1 } from 'gsap'

  export default {

    mounted() {

      if(document.body.width >= 1440) {

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
          duration: 1200
        })

        const sceneShowreelContent = new ScrollMagic.Scene({
          triggerHook: 'onEnter',
          triggerElement: '#showreelContent'
        })

        sceneShowreelAlertCircle
        // .addIndicators()
        .setTween(showreelAlertCircle)
        .addTo(controllerShowreelAlertCircle)

        sceneShowreelAlertArrow
        // .addIndicators()
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
          { opacity: 0, transform: 'translateY(157px)' },
          { opacity: 1, transform: 'translateY(71px)', ease: Power1.EaseInOut },
        )

        sceneShowreelContent
        // .addIndicators()
        .setTween(showreelVideoContent)
        .addTo(controllerShowreelContent)
      }
    }
  }

</script>

<style media="screen" lang="sass">

  @import '@/assets/sass/_mixins.sass'

  body
    overflow-x: hidden

  #intro
    margin-bottom: 72px

    +adapt(768px)
      margin-bottom: 122px

    +adapt(1024px)
      margin-bottom: 120px

    +adapt(1440px)
      margin-bottom: 156px

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


  .who

    p:last-of-type
      margin-bottom: 0

    +adapt(768px)
      margin-right: 168px

    +adapt(1024px)
      margin-left: 80px
      margin-right: 80px

  .who-and-showreel-alert
    +adapt(1440px)
      display: flex

  .showreel-alert__container
    display: none

    +adapt(1440px)
      display: block
      position: relative
      height: 480px
      width: 480px

      transform: translate(185px, -44px)

      .arrow
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

  #showreelVideo
    position: relative
    margin-bottom: 35px

    +adapt(768px)
      margin-bottom: 71px

  .showreelVideoReveal
      +adapt(1440px)
        position: absolute
        z-index: -50
        bottom: 0
        height: 1200px
        width: 100%
        background-color: #000

        transform: translateY(157px)

  .showreelVideo__player
    background-color: #FFFFFF
    mix-blend-mode: difference
    width: 100%
    height: 212px
    width: calc(100% + 32px)
    margin-left: -16px

    +adapt(768px)
      width: 100%
      margin-left: 0
      height: 356px

    +adapt(1024px)
      height: 516px

    +adapt(1440px)
      position: relative
      top: 0px
      height: 684px

  .projects__container
    display: block
    max-width: 100%

    +adapt(768px)
      max-width: 640px

    +adapt(1024px)
      max-width: 928px

    .projects__intro
      margin-left: 40px
      margin-right: 40px
      margin-bottom: 54px

      +adapt(768px)
        margin-left: 0
        margin-right: 0
        margin-bottom: 74px
        text-align: center

      p
        +adapt(768px)
          margin-left: 84px
          margin-right: 84px

        +adapt(1024px)
          margin-left: 160px
          margin-right: 160px

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
        display: grid
        grid-template-columns: repeat(4, 136px)
        column-gap: 32px
        padding-left: 0

      +adapt(1024px)
        display: grid
        grid-template-columns: repeat(12, 48px)
        column-gap: 32px

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
      display: grid
      grid-template-columns: repeat(12, 74px)
      column-gap: 32px
      grid-template-rows: repeat(3, 131px)
      grid-row-gap: 53px

      .projects__intro
        grid-column: 2 / span 4
        grid-row: span 3
        padding-right: 74px

      .project
        grid-column: span 3

  #showreelContent
    margin-bottom: 80px

    +adapt(768px)
      margin-bottom: 138px

  #workTogether
    padding-top: 52px
    padding-bottom: 56px
    background-color: rgba(#06080A, 0.96)

    +adapt(768px)
      padding-top: 79px
      padding-bottom: 120px

    +adapt(1024px)
      padding-top: 115px
      padding-bottom: 120px

    .container

      +adapt(1024px)
        display: grid
        grid-template-columns: repeat(12, 48px)
        column-gap: 32px

      .workTogether__question

        +adapt(1024px)
          grid-column: 2 / span 9

      .workTogether__redirect

        +adapt(1024px)
          grid-column: 2 / span 5

        p
          color: rgba(#FFFFFF, 0.84)

          +adapt(768px)
            margin-right: 240px

          +adapt(1024px)
            margin-right: 0

        img
          transform: translate(4px, 6px)

  #footer
    padding: 39px 0 54px
    background-color: #06080A

    +adapt(768px)
      padding: 59px 0 48px

    +adapt(1024px)
      padding: 47px 0 54px

    .container

      +adapt(1024px)
        display: grid
        grid-template-columns: repeat(12, 48px)
        column-gap: 32px

  .footer__section
    margin-bottom: 65px

    +adapt(768px)
      margin-bottom: 68px

  .about-me

    +adapt(768px)
      margin-right: 168px

    +adapt(1024px)
      margin-right: 0
      grid-column: 1 / span 7

  .links

    +adapt(768px)
      display: grid
      grid-template-columns: repeat(4, 136px)
      column-gap: 32px

    +adapt(1024px)
      grid-column: 1 / span 12
      grid-template-columns: repeat(12, 48px)
      column-gap: 32px

  .follow-work, .get-in-touch

    +adapt(768px)
      grid-column: span 2

    +adapt(1024px)
      grid-column: span 4

  .copyright

    +adapt(1024px)
      grid-column: 1 / span 12

</style>
