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
            <p class="extract__body">A company providing value through <br>design solutions, technical expertise and financial support</p>
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
            <p>Here you will find soon a selection of my latest works and collaborations with startups and some friends, you will be also able to read more about my story, ask for freelance work, or just send me an invitation to <a href="mailto:hello@yannglt.com">grab a coffee together</a>.</p>
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
        <div class="showreelVideo__player">
          <p class="showreelWaiting">Showreel is coming...</p>
        </div>
      </div>
      <!-- <div class="showreelVideoReveal"></div> -->
    </div>

    <div id="showreelContent">
      <div class="projects__container container">
        <div class="projects__intro">
          <h2>Projects mentionned <span class="cr"><br></span>in this showreel</h2>
          <p >These projects were made in 2018 and 2019 with other designers, credits available in upcoming case&nbsp;studies.</p>
        </div>
        <div class="projects">
          <ProjectExtract v-for="project in projects" :key="project.id" :type="project.type" :name="project.name" :desc="project.desc"></ProjectExtract>
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
  import ProjectExtract from '../components/ProjectExtract.vue'
  import Footer from '../components/Footer.vue'

  import { TimelineLite, Power1 } from 'gsap'

  export default {

    data() {
      return {
        projects: [
          { 
            'id': 1,
            'name': 'Tagether mobile app',
            'desc': 'Reconnect through discovery and fidelity, local shops and citizens with the aim of creating new neighborhood dynamics',
            'type': 'Product design'
          },
          { 
            'id': 2,
            'name': 'DC Comics marketplace',
            'desc': 'Promote official comics products from Warner&nbsp;Bros. to french customers with a new dedicated marketplace',
            'type': 'Information architecture'
          },
          { 
            'id': 3,
            'name': 'Rookie service', 'desc':
            'Find a solution for 100 000 abandoned pets each year in France with behavior problems as first target',
            'type': 'Product design'
          },
          { 
            'id': 4,
            'name': 'Warner Bros. Horror',
            'desc': 'Create a unique personality for upcoming Warner Bros. horror franchise, based on its classics and latest movies',
            'type': 'Branding workshop'
          },
          { 
            'id': 5,
            'name': 'Dassault Systèmes story',
            'desc': 'Provide a real structure for all related content allowing stakeholders to transmit the desired messages to targets',
            'type': 'Branding, IA + ERG'
          },
          { 
            'id': 6,
            'name': 'Electricity, personal city',
            'desc': 'Personal playground created 8 years ago in my debuts, where I experiment my own branding and do some 3D modeling',
            'type': 'Branding + 3D'
          },
        ]
      }
    },

    components: {
      ProjectExtract,
      Footer
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
        // duration: window.innerHeight * 1.25
        duration: window.innerHeight * 0.5
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

      // showreelVideoContent
      // .to('.showreelVideoReveal', 0.150, {
      //   backgroundColor: '#F7FAFF',
      // })
      // .fromTo('#showreelContent', 0.4,
      //   { opacity: 0, transform: 'translateY('+ window.getComputedStyle(document.querySelector('#showreelVideo .container')).paddingTop +'px)' },
      //   { opacity: 1, transform: 'translateY(0px)', ease: Power1.EaseInOut }
      // )
      // sceneShowreelContent
      // .setTween(showreelVideoContent)
      // .addTo(controllerShowreelContent)

      // document.querySelector('.showreel-alert__container').addEventListener('click', function(){
      //   // console.log('click')
      //   // window.scroll({ top: 100, behavior: 'smooth'})
      //   document.getElementById('showreelVideo').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
      // })
    }
  }

</script>
