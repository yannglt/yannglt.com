<template lang="html">
  <div id="app">
    <div class="gsap-debug-screen"></div>
    <div class="news-banner">
      <div class="container">
        <nuxt-link to="notes/a-new-adventure-at-specify" title="" class="body">Now Product Designet at Specify.<span class="line-breaker"><br></span><span class="link">Learn more about my career update<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-20"></use></svg></span></nuxt-link>
      </div>
    </div>

    <transition name="slide">
      <copyToast v-if="emailToast == 'show'"></copyToast>
    </transition>

    <section class="tldr">
      <div class="container">
        <div class="welcome-repeat">
          <p class="display-1">Welcome</p>
          <p class="display-1">Welcome</p>
          <p class="display-1">Welcome</p>
          <p class="display-1">Welcome</p>
          <p class="display-1">Welcome</p>
          <p class="display-1">Welcome</p>
          <p class="display-1">Welcome</p>
          <p class="display-1">Welcome</p>
        </div>
        <div class="etiquette">
          <p class="etiquette-title">intro<span class="add-oo">oo</span></p>
          <div class="etiquette-properties">
            <div class="etiquette-property">
              <p class="name caption">Identity</p>
              <p class="value heading-3 text-primary-light">Yann-Edern Gillet</p>
            </div>
            <div class="etiquette-property">
              <p class="name caption">Current position</p>
              <p class="value heading-3 text-primary-light">Product Designer, Specify</p>
            </div>
            <div class="etiquette-property">
              <p class="name caption">Focus</p>
              <p class="value heading-3 text-primary-light">Design Operations</p>
            </div>
            <div class="etiquette-property">
              <p class="name caption">Location</p>
              <p class="value heading-3 text-primary-light">Paris, France</p>
            </div>
          </div>
          <div class="logo"></div>
          <p class="subtitle display-3 text-primary-light">danger</p>
          <p class="desc caption text-primary-light">May present some work under NDA. <br>Just kidding, relax. Open headspace.</p>
          <p class="annotation secret text-primary-light">LF-11235813-21345892-150242392</p>
        </div>
      </div>
      <div class="etiquette-electricity">
        <div class="etiquette-electricityDiagram left"></div>
        <div class="etiquette-electricityLink"></div>
        <div class="etiquette-electricityExtension"></div>
        <div class="etiquette-electricityExtension"></div>
        <div class="etiquette-electricityExtension"></div>
        <div class="etiquette-electricityExtension"></div>
        <div class="etiquette-electricityExtension"></div>
        <div class="etiquette-electricityDiagram right"></div>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <p class="intro-subtitle caption">Welcome to my space <span class="line-breaker"><br /></span>on the Internets</p>
        <h1 class="intro-title heading-1 text-primary-dark">I think, create and break interfaces, products and systems with a strong focus on design operations.</h1>
        <p class="intro-desc emphasis text-secondary-dark">This personal space aims to showcase how I think and work and become a place where I can share my thoughts and my journey as a product designer in this industry.</p>
        <!-- <ul class="intro-links emphasis text-secondary-dark">
          <li>
            <a href="https://twitter.com/yannglt" title="" target="_blank"  rel="noopener"><span class="intro-linkPrefix">Thoughts on </span>Twitter<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#external-link-20"></use></svg></a>
          </li>
          <li>
            <a href="https://dribbble.com/yannglt" title="" target="_blank"  rel="noopener"><span class="intro-linkPrefix">Works in progress on </span>Dribbble<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#external-link-20"></use></svg></a>
          </li>
          <li>
            <a href="https://www.instagram.com/ynngllt/" title="" target="_blank"  rel="noopener"><span class="intro-linkPrefix">Journey on </span>Instagram<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#external-link-20"></use></svg></a>
          </li>
        </ul> -->
      </div>
    </section>

    <section class="portfolio-request">
      <div class="container">
        <h2 class="title heading-2 text-secondary-dark">Portfolio only available upon request</h2>
        <p class="desc body text-quaternary-dark">My design projects are waiting to be shown, feel free to send a request (and its context) and I will reply as fast as I can. <span class="line-breaker"><br><br></span><SuperLink href="https://twitter.com/yannglt" target="_blank "variant="body dark">DMs on Twitter</SuperLink> are open but if you prefer emails, I got you covered (no mailto):</p>
        <SuperButton @click.native="copyEmail" class="cta" variant="primary" icon="#copy-20">Copy my email address</SuperButton>
      </div>
    </section>

    <!-- <section class="projects">
      <div class="container">
        <ProjectsCarousel />
      </div>
    </section> -->

    <section class="manifesto">
      <div class="container">
        <div class="atlas-bg"></div>
        <div class="subwrapper">
          <p class="subtitle secret text-primary-light">Personal manifesto<span class="text-tertiary-light">and short introduction</span></p>
          <h2 class="display-2 text-primary-light">Who am I, what kind of stuff I do & above all, why?</h2>
          <div class="manifesto-tldr">
            <div class="entry">
              <svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#entry-20"></use></svg>
              <p class="caption">tl;dr</p>
            </div>
            <div class="current-position">
              <p class="caption">Current position</p>
              <p class="title heading-3">Product Designer, Specify</p>
              <p class="description body text-secondary-light">Design Data Platform collecting, storing and distributing design tokens and assets — automatically</p>
            </div>
            <div class="passion">
              <p class="caption">With a passion for</p>
              <p class="title heading-3">Design Operations </p>
              <p class="description body text-secondary-light">I believe in the process but even more in the humans connections made along the way</p>
            </div>
          </div>
          <div class="manifesto-hello">
            <div class="entry">
              <svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#entry-20"></use></svg>
              <p class="caption">hello</p>
            </div>
            <div class="content body-long">
              <p>Pallet Town and New-York. Spider-Man's dark backgrounds and Pikachu’s yellow flash.  Movement, people and energy. All my life, I’ve been drawing inspiration from cities and electrical networks. Today, I deeply believe that great work stems from a solid plan, a clean architecture and efficient teams.</p>
              <p>I want to create for the makers. From the Internet stranger with whom I built my first Cydia theme to all the great designers I’ve yet to meet, my goal is to give others the means to reach theirs. I know aestheticism is a consequence of mastery. Design is a craft and studying the method behind the methods is what drives me. I’ve learnt that listening is the key to understanding ; and understanding is the first step to solve any problem. Always hungry, always foolish: I try to work both hard and smart, not losing myself in the process. Loved ones, mentors, clients and users, anchor me in reality. I enjoy mocking those I look up to as well ; as a reminder of not taking myself too seriously.</p>
              <p>This personal space is a reflection of who I am and where I’m trying to head as a Product Designer. It comes from years of wondering and wandering. I’m happy I waited as much as I did though, it helped me grow and build the set of principles I now want to stand atop.</p>
              <p>I hope you like what you find! I’m always happy to talk about design, its bridges with code and/or exchange ideas on why and how things should be done.</p>
              <SuperLink href="https://twitter.com/yannglt" target="_blank" variant="body light" icon="#arrow-forward-20">Shoot me a DM on Twitter</SuperLink>
              <p>Prefer the old fashion way ? Copy my email address (no mailto):</p>
              <SuperLink @click.native="copyEmail" variant="body light" icon="#copy-20">Copy my email address</SuperLink>
            </div>
          </div>
        </div>
        <div class="manifesto-process">
          <div class="manifesto-process-content">
            <!-- <p class="process-title">This vision is powered by a process improved over the years with talented people and projects</p>
            <a href="/process" class="process-cta">Discover the process<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-20"></use></svg></a> -->
          </div>
        </div>
      </div>
    </section>

    <section class="human">
      <div class="container">
        <div class="human-intro">
          <h2 class="human-intro-title heading-1 text-primary-dark">Words are cool and everything but what about taking a deep dive into my universe?</h2>
          <!-- <h2 class="human-intro-title heading-1 text-primary-dark">What about the human behind all of this?</h2> -->
          <SuperButton class="human-intro-link" href="/about" variant="tertiary thunderstorm" icon="#arrow-forward-20">Read more about me</SuperButton>
          <div class="human-intro-logo"></div>
        </div>
        <div class="facts">
          <Fact v-for="fact in facts" :key="fact.id" variant="dark" :sub="fact.sub" :title="fact.title" :desc="fact.desc"></Fact>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import gsap from 'gsap'
  import CSSRulePlugin from 'gsap/CSSRulePlugin'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import TweenLite from '@/vendor/gsap/TweenLite'
  import CustomEase from '@/vendor/gsap/CustomEase'

  import ProjectsCarousel from '@/components/ProjectsCarousel.vue'
  import SuperButton from '@/components/SuperButton.vue'
  import SuperLink from '@/components/SuperLink.vue'
  import Fact from '@/components/Fact.vue'
  import CopyToast from '@/components/CopyToast.vue'

  export default {

    data() {
      return {
        facts: [
          {
            id: '0',
            sub: 'Quick fact #1',
            title: 'Started practicing visual design with  themes for jailbreaked iPhones at 11 years old',
            desc: '<p>And it was a real mess at first, as I didn’t know anything about icons or interface design. But with time and practice, I felt in love with all the possibilities Cydia (more or less an AppStore for jailbreaked iPhones) offers for designers and developers as me.</p>'
          },
          {
            id: '1',
            sub: 'Quick fact #3',
            title: 'Never stopped playing with LEGO',
            desc: '<p>In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.</p>'
          },
          {
            id: '2',
            sub: 'Quick fact #5',
            title: 'Dad of 9 healthy plants',
            desc: '<p>As a lot ot of humans around the globe during the 2020 pandemic + lockdown, I decided to improve my workspace and bring more life to my apartment.</p><p>With my loved one, Sabrina (<a href="https://twitter.com/sabrinandjh" target="_blank"  rel="noopener">go check her portfolio</a>), we chose plants from different places of the world and after running trials, we found out how to mix LEGOs and our green newcommers.</p>'
          }
        ],
        showNavbar: true,
        lastScrollPosition: 0,
        email: 'hello@yannglt.com',
        emailToast: null
      }
    },

    methods: {
      copyEmail: function () {
        this.$copyText(this.email)
        this.emailToast = 'show'

        setTimeout(() => this.emailToast = null, 3000)
      }
    },

    mounted() {
      gsap.registerPlugin(CSSRulePlugin)
      gsap.registerPlugin(ScrollTrigger)
      gsap.registerPlugin(TweenLite)
      gsap.registerPlugin(CustomEase)

      const windowWidth = window.innerWidth

      const etiquette = document.querySelector('.etiquette')
      const welcomeRepeat = document.querySelectorAll('.welcome-repeat')
      const welcomeRepeatWords = document.querySelectorAll('.welcome-repeat p')
      const welcomeRepeatSplitted = Splitting({ target: welcomeRepeatWords, by: 'chars' })
      const electricityLink = document.querySelector('.etiquette-electricityLink')
      const electricityDiagramLeft = document.querySelector('.etiquette-electricityDiagram.left')
      const electricityDiagramRight = document.querySelector('.etiquette-electricityDiagram.right')
      const electricityExtensions = document.querySelectorAll('.etiquette-electricityExtension')

      const tldrTimeline = gsap.timeline()

      if(windowWidth < 1208) { return false } else {

        CustomEase.create('emphasized', '0.2, 0.0, 0.2, 1')
        CustomEase.create('emphasized-echo', '0.8, 0, 0.8, 1')

        tldrTimeline.to('.gsap-debug-screen', {
          duration: 0.240,
          opacity: 0,
          onComplete: killGSAPDebugScreen
        }, 0)

        tldrTimeline.from(welcomeRepeat, {
          duration: 0.480,
          opacity: 0,
          clearProps: 'all'
        }, 0.240)

        welcomeRepeatSplitted.forEach((word, index) => {

          let shift

          if(window.innerHeight > 1208) {
            shift = window.innerHeight / 2 - 48 - 96 - 204 / 2 - 64 * index
            // Middle of the window, minus info banner and navbar, minus element height, minus shift per index
          }
          else {
            shift = 1208
          }

          word.chars.forEach((char, index) => {
            tldrTimeline.from(char, {
              duration: 0.480,
              delay: 0.04 * index,
              ease: 'emphasized-echo',
              y: shift,
              clearProps: 'all'
            }, 'char')
          }, 0.240)
        })

        tldrTimeline.from(etiquette, {
          duration: 0.480,
          transform: 'translateY(100vh)',
          clearProps: 'all'
        }, 0.960)

        tldrTimeline.from(electricityLink, {
          duration: 0.120,
          transform: 'translate(-50%, calc((240px / 2) + 62px)) scaleX(0)',
          clearProps: 'all'
        }, 'electricityDiagrams')

        tldrTimeline.from(electricityDiagramLeft, {
          duration: 0.480,
          // transform: 'translateX(-70vw) scaleX(-1)',
          left: -532,
          clearProps: 'all'
        }, 'electricityDiagrams+=0.240')

        tldrTimeline.from(electricityDiagramRight, {
          duration: 0.480,
          // transform: 'translateX(70vw)',
          right: -532,
          clearProps: 'all'
        }, 'electricityDiagrams+=0.240')

        electricityExtensions.forEach((extension, index) => {
          tldrTimeline.from(extension, {
            duration: 0.480,
            transform: 'translateY(214px) scaleX(1.8)',
            clearProps: 'all'
          }, 'electricityDiagrams+=0.240')
        })

        tldrTimeline.from('.news-banner', {
          duration: 0.240,
          y: -48,
          clearProps: 'all'
        }, 'top-elements')

        tldrTimeline.from('.navbar', {
          duration: 0.240,
          y: -96,
          clearProps: 'all'
        }, 'top-elements')

        tldrTimeline.pause()
        tldrTimeline.addLabel('electricityDiagrams', 0.960)
        tldrTimeline.addLabel('top-elements', 1.200)

        tldrTimeline.progress(0).play()
      }

      function killGSAPDebugScreen() {
        document.querySelector('.gsap-debug-screen').remove()
      }

      // ANIMATION DEBUGGOR
      // document.querySelector('.tldr').onclick = function(){
      //   tldrTimeline.restart()
      // }
    },

    components: {
      ProjectsCarousel,
      SuperButton,
      SuperLink,
      Fact,
      CopyToast
    }
  }

</script>