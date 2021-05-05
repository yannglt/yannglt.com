<template lang="html">
  <div class="about-page">
    <section class="moodboard">
      <div class="container">
        <div class="vertical-lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="horizontal-lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="poster atlas">
          <div class="skeleton"></div>
          <div class="image"></div>
          <div class="fill"></div>
        </div>
        <div class="poster logo">
          <div class="skeleton"></div>
          <div class="image"></div>
          <div class="fill"></div>
        </div>
        <div class="poster electricity-toolkit">
          <div class="skeleton"></div>
          <div class="image"></div>
          <div class="fill"></div>
          <!-- <div class="pinned-top"></div>
          <div class="pinned-bottom"></div> -->
        </div>
        <div class="poster gt-america">
          <div class="skeleton"></div>
          <div class="image"></div>
          <div class="fill"></div>
        </div>
        <div class="poster bluu-suuperstar">
          <div class="skeleton"></div>
          <div class="image"></div>
          <div class="fill"></div>
        </div>
      </div>
    </section>

    <section class="discover">
      <div class="container">
        <h1 class="discover-title display-2 text-primary-dark">Hope you enjoyed your travel in my personal space so far, here are some ways to learn more about me:</h1>
        <div class="discover-blocs">
          <div class="discover-bloc story">
            <div class="icon"></div>
            <div class="discover-bloc-content">
              <p class="title heading-2 text-secondary-dark">Story</p>
              <p class="desc body text-quaternary-dark">Some time have passed between playing with my  first small bricks of color and becoming a Product Designer, I wanted to share anecdotes and funny stories you may find interesting.</p>
              <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
            </div>
          </div>
          <div class="discover-bloc electricity">
            <div class="icon"></div>
            <div class="discover-bloc-content">
              <p class="title heading-2 text-secondary-dark">Electricity</p>
              <p class="desc body text-quaternary-dark">Since my first portfolio on October 2016, I began building my universe around one thing that kept my attention since I was a child: cities and their energy, using the symbols of light in physics and flash.</p>
              <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
            </div>
          </div>
          <div class="discover-bloc mood">
            <div class="icon"></div>
            <div class="discover-bloc-content">
              <p class="title heading-2 text-secondary-dark">Moodboard</p>
              <p class="desc body text-quaternary-dark">Maybe the more visual way to dive into my universe, you may find superabundance of references of color palettes inspired by Piet Mondrian, typography compositions and physics symbols.</p>
              <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="resume">
      <div class="container">
        <div class="promise">
          <p class="caption">How and Where I work(ed)</p>
          <h2 class="title heading-1 text-primary-dark">I make and verify hypothesis by creating and breaking solutions again and again until reaching users’ delight and company’s vision.</h2>
          <div class="desc emphasis text-tertiary-dark">
            <p>Started from <span class="drake">the bottom </span>the original problem(s) and make sure we try to tackle the correct one(s) is essential to make sure we provide efficient solutions to users and businesses.</p>
            <p>Also, I always try to find a great balance between following the choosen methodology and keeping velocity and efficiency through the entire journey.</p>
          </div>
          <div class="ctas">
            <SuperButton class="process" variant="secondary dark disabled">Discover my process (soon)</SuperButton>
            <SuperButton href="/contact" class="contact" variant="primary dark" icon="#mail-20">Contact me</SuperButton>
          </div>
        </div>
        <div class="experiences">
          <div v-for="experience in experiences" :key="experience.id" class="experience">
            <p class="position heading-3 text-secondary-dark">{{ experience.company }}, {{ experience.position }}</p>
            <p class="duration caption text-quaternary-dark">{{ experience.start }} - {{ experience.end }} ({{experience.duration}})</p>
            <div class="desc body text-tertiary-dark" v-html="experience.desc"></div>
          </div>
          <div class="numbers">
            <div class="clients">
              <p class="number display-2 text-primary-dark">8</p>
              <div class="desc body text-quaternary-dark">
                <p>industries where I had the chance to help users and companies with Source: cinema, bank, finance, institutions, initiatives, branded content and 3D softwares.</p>
                <p>Clients include:</p>
              </div>
              <p class="list emphasis text-tertiary-dark">Dassault Systèmes, Abu Dhabi, Warner Bros., Indépendants.co, Getfluence, Banque Populaire, BPCE, BNP Paribas and more</p>
            </div>
            <div class="projects">
              <p class="number display-2 text-primary-dark">25<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#add-20"></use></svg></p>
              <div class="desc body text-quaternary-dark">projects over the last 3 years</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="personal">
      <div class="container">
        <div class="personal-photo">
          <picture>
            <source type="image/webp" srcset="@/static/images/yannglt.webp">
            <source type="image/jpeg" srcset="@/static/images/yannglt.jpg">
            <img src="@/static/images/yannglt.jpg" alt="">
          </picture>
          <p class="author body text-tertiary-light">Photography taken by <SuperLink href="https://twitter.com/sabrinandjh" target="_blank" variant="body light">Sabrina Nedjah</SuperLink></p>
        </div>
        <div class="personal-content">
          <p class="caption text-tertiary-light">About me as a human</p>
          <h2 class="quote heading-2 text-primary-secondary-light">“I believe in the process but even more in the connections we  build and strenghten along the way between companies, teams and end-users, all as humans.”</h2>
          <div class="emphasis">
            <p>My name is Yann-Edern Gillet. I’m a French designer living in Paris, France. My main area of focus today is on systems, digital products and interfaces. DMs are opened!</p>
            <SuperLink href="https://twitter.com/yannglt" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Shoot me a DM on Twitter</SuperLink>
            <p>In my spare time I still spend a lot of time on screens, but more as a front-end engineer. I love learning new things, especially with Vue, Nuxt and GSAP. More recently I’m learning the craft of icon design (yup, the ones you saw earlier are born on my computer). I like the idea of crafting myself every pixel of my creations, both in design and code, like this portfolio.</p>
            <SuperLink href="https://github.com/yannglt/yannglt.com" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Read the code behind this website</SuperLink>
            <p>When my hands are not on my mechanical keyboard, I enjoy taking care of my plants, cook/ try some italian recipes with my girlfriend and building LEGO sets.</p>
            <p>And when my hands are not building things, I dive into work of others designers and developers, thanks to Standards Manual, Increment by Stripe and Offscreen Magazine.</p>
            <!-- <p>With this COVID—19/20/21 crisis + global lockdown, I spent a lof of time improving my workspace and discovered my self quite a passion for that, as many others designers for sure haha. Interested in learning more about my setup ?</p>
            <SuperLink href="" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Discover what it looks like</SuperLink> -->
            <p>Last maybe-interesting-for-you thing, I’m a huge fan of Hip-Hop culture and music. Even if I listen to a lot of US / UK rappers, french rap is deeply anchored in my head + easier to understand as a french person of course. I created playlists for each of my mood, feel free to give it a try!</p>
            <SuperLink href="" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Listen to my playlists</SuperLink>
          </div>
        </div>
      </div>
    </section>

    <section class="thanks">
      <div class="container">
        <div class="thanks-bloc website">
          <div class="caption"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#entry-20"></use></svg>This website</div>
          <div class="content body text-secondary-light">
            <p>Born inside Sketch in 2019 and raised inside Figma in 2020/2021. Design tokens pushed by <a href="https://specifyapp.com" target="_blank">Specify</a>.</p>
            <p>Built on Nuxt and Vue with GreenSock libraries for animations. Hosted by GitHub and distributed by Netflify and Amazon Web Services.</p>
          </div>
        </div>
        <div class="thanks-bloc typefaces">
          <div class="caption"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#entry-20"></use></svg>Typefaces</div>
          <div class="content body text-secondary-light">
            <p>Headlines are set in Bluu Suuperstar, designed by Jean-Baptiste Morizot and redrew in 2017 for french type design company <a href="https://black-foundry.com" target="_blank">Black Foundry</a>.</p>
            <p>Copy is set in GT America, designed by Noël Leu with Seb McLauchlan for <a href="https://www.grillitype.com" target="_blank">Grilli Type</a>.</p>
          </div>
        </div>
        <div class="thanks-bloc people">
          <div class="caption"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#entry-20"></use></svg>A special S/O to:</div>
          <div class="content body text-secondary-light">
            <p>My partner in life <a href="https://twitter.com/sabrinandjh" target="_blank">Sabrina Nedjah</a> and my brother <a href="https://twitter.com/hassanboujnikh" target="_blank">Hassan Boujnikh</a> for their support these last years. <a href="https://linkedin.com/in/gabrielbacave" target="_blank">Gabriel Bacave</a> for his help on writing my manifesto. </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import gsap from 'gsap'
  import CSSRulePlugin from 'gsap/CSSRulePlugin'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import TweenLite from '@/vendor/gsap/TweenLite'
  import CustomEase from '@/vendor/gsap/CustomEase'

  import SuperButton from '@/components/SuperButton.vue'
  import SuperLink from '@/components/SuperLink.vue'

  export default {
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
        ]
      }
    },

    data: function () {
      return {
        experiences: [
          {
            id: '0',
            company: 'Source',
            position: 'Product Designer',
            desc: '<p>Source exists to help its clients and partners to fight against preconceptions, thanks to a rational and user-centered approach. We tailor sleek and efficient solutions to suit user and business needs.</p><p>I work closely with multiple industry-related startups and companies, by doing user research, workshops around brand vision and strategy, setting up experience maps and user journeys, to building high-fidelity prototypes and developed solutions.</p><p>6-month internship, 1 year apprenticeship and full-time employee since January 2019.</p>',
            start: 'Jul 2018',
            end: 'Now',
            duration: '3 years',
          },
          {
            id: '1',
            company: 'Freelance',
            position: 'Product Designer',
            desc: '<p>I am providing value to early and mid-stage companies through product & brand design services and design system expertise.</p>',
            start: 'Jan 2018',
            end: 'Now',
            duration: '3.5 years',
          },
          {
            id: '2',
            company: 'Synerg\' hetic',
            position: 'Design Consultant',
            desc: '<p>I implemented design methodologies to the global positioning of the Junior Company while working closely with startups around minimum viable products and ideation workshops.</p>',
            start: 'May 2018',
            end: 'Nov 2018',
            duration: '1.5 year',
          },
        ]
      }
    },

    components: {
      SuperButton,
      SuperLink
    },

    mounted() {
      gsap.registerPlugin(CSSRulePlugin)
      gsap.registerPlugin(ScrollTrigger)
      gsap.registerPlugin(TweenLite)
      gsap.registerPlugin(CustomEase)

      const windowWidth = window.innerWidth

      const moodboardVerticalLines = document.querySelectorAll('.vertical-lines .line')
      const moodboardHorizontalLines = document.querySelectorAll('.horizontal-lines .line')

      const discoverTitle = document.querySelector('.discover-title')
      const discoverTitleSplitted = Splitting({ target: discoverTitle, by: 'lines' })
      const discoverBlocs = document.querySelectorAll('.discover-bloc')

      const moodboardTimeline = gsap.timeline()
      const discoverTimeline = gsap.timeline()

      if(windowWidth < 1208) { return false } else {

        CustomEase.create('emphasized', '0.2, 0.0, 0.2, 1')

        moodboardTimeline.from('.moodboard', {
          duration: 0.720,
          transform: 'scaleY(2)',
          y: '120vh',
          ease: 'emphasized',
          clearProps: 'all'
        })

        moodboardVerticalLines.forEach((line, index) => {
          moodboardTimeline.from(line, {
            duration: (0.120 * 2 + 0.120 * 11) - 0.120 * index,
            transform: 'translateX(-50%) scaleY(0)',
            ease: 'emphasized',
            delay: 0.120,
            clearProps: 'all'
          }, 'vertical-lines')
        })

        moodboardHorizontalLines.forEach((line, index) => {
          moodboardTimeline.from(line, {
            duration: 0.120 + 0.120 * index,
            transform: 'scaleX(0)',
            ease: 'emphasized',
            delay: 0.120,
            clearProps: 'all',
            onComplete: postersGoActive
          }, 'vertical-lines+=0.480')
        })

        document.querySelectorAll('.moodboard .fill').forEach((posterFill, index) => {
          moodboardTimeline.from(posterFill, {
            duration: 0.240,
            transform: 'scaleY(0)',
            ease: 'emphasized',
            delay: 0.240 * index,
            clearProps: 'all'
          }, 'vertical-lines+=1.600')
        })

        document.querySelectorAll('.moodboard .image').forEach((posterImage, index) => {
          moodboardTimeline.from(posterImage, {
            duration: 0.240,
            opacity: 0,
            ease: 'emphasized',
            delay: 0.240 * index,
            clearProps: 'all'
          }, 'vertical-lines+=1.840')
        })

        function postersGoActive() {
          document.querySelectorAll('.poster').forEach((poster, index) => {
            setTimeout(function() {
              poster.classList.add('active')
            }, 240 * index)
          })
        }

        moodboardTimeline.pause()
        moodboardTimeline.addLabel('poster-fill', 3)
        moodboardTimeline.addLabel('poster-image', '3.240')

        discoverTitleSplitted[0].lines.forEach((line, index) => {
          discoverTimeline.from(line, {
            duration: 0.5 + 0.5 * index / 4,
            transform: 'translateY(512px)',
            ease: 'emphasized'
          }, '0.480')
        })

        discoverTimeline.pause()

        const promiseTimeline = gsap.timeline({
          scrollTrigger: {
            // markers: true,
            trigger: '.promise',
            pin: true,
            start: 'top +116px',
            // 1510px (total experiences bloc height - 116px + 56x inital margin top)
            end: '1450px center',
          }
        })

        moodboardTimeline.progress(0).play()
        discoverTimeline.progress(0).play()
      }

      // ANIMATION DEBUGGOR
      // document.querySelector('.about-page').onclick = function() {
      //   document.querySelectorAll('.poster').forEach((poster) => {
      //     poster.classList.remove('active')
      //   })
      //   moodboardTimeline.restart()
      //   discoverTimeline.restart()
      // }
    }
  }
</script>