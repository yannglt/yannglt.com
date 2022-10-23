<template lang="html">
  <div class="about-page">
    <div class="gsap-debug-screen"></div>

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
            <div class="illustration"></div>
            <div class="discover-bloc-content">
              <p class="title heading-2 text-secondary-dark">Story</p>
              <p class="desc body text-quaternary-dark">Some time have passed between playing with my  first small bricks of color and becoming a Product Designer, I wanted to share anecdotes and funny stories you may find interesting.</p>
              <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
            </div>
          </div>
          <div class="discover-bloc electricity">
            <div class="illustration"></div>
            <div class="discover-bloc-content">
              <p class="title heading-2 text-secondary-dark">Electricity</p>
              <p class="desc body text-quaternary-dark">Since my first portfolio on October 2016, I began building my universe around one thing that kept my attention since I was a child: cities and their energy, using the symbols of light in physics and flash.</p>
              <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
            </div>
          </div>
          <div class="discover-bloc mood">
            <div class="illustration"></div>
            <div class="discover-bloc-content">
              <p class="title heading-2 text-secondary-dark">Moodboard</p>
              <p class="desc body text-quaternary-dark">Maybe the more visual way to dive into my universe, you may find superabundance of references of color palettes inspired by Piet Mondrian, typography compositions and physics symbols.</p>
              <SuperButton href="/about/moodboard" class="cta" variant="quaternary dark" icon="#arrow-forward-12">Dive into my inspirations</SuperButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="resume">
      <div class="container">
        <div class="promise">
          <p class="caption">How and Where I work(ed)</p>
          <h2 class="title heading-1 text-primary-dark">I make and verify hypothesis by creating and breaking solutions until reaching users’ delight and company’s vision.</h2>
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
            <p class="duration caption text-quaternary-dark">{{ startDate(experience.id) }} - {{ endDate(experience.id) }} ({{ duration(experience.id) }})</p>
            <div class="desc body text-tertiary-dark" v-html="experience.desc"></div>
            <SuperLink v-if="experience.link" :href="'/notes/' + experience.link" variant="body dark" icon="#arrow-forward-20" class="link">{{ experience.linkTitle }}</SuperLink>
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
            <p>To relax, I dive into work of others designers and developers, thanks to Standards Manual, Increment and Offscreen.</p>
            <!-- <p>With this COVID—19/20/21 crisis + global lockdown, I spent a lot of time improving my workspace and discovered myself quite a passion for that (how original). Interested in learning more about my setup ?</p>
            <SuperLink href="" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Discover what it looks like</SuperLink> -->
            <p>I’m also a huge fan of Hip-Hop culture and music. Even if I listen to a lot of US / UK rappers, french rap is deeply anchored in my head + easier to understand as a french person of course. I created playlists for each of my mood, feel free to give it a try!</p>
            <SuperLink href="https://open.spotify.com/playlist/1WjBzk8cP7bhZ6QoForRWa" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Listen to my current playlist</SuperLink>
          </div>
        </div>
        <div class="facts">
          <div class="facts-intro">
            <h2 class="title heading-2 text-secondary-light">Quick facts</h2>
            <div class="desc-action">
              <p class="desc body text-tertiary-light">Here are some anecdotes and quick facts about my debuts and my current life, both as a human and a product designer.</p>
              <SuperButton v-if="factsCollapsed" @click.native="expandAllFacts" variant="primary">Expand all facts</SuperButton>
              <SuperButton v-else @click.native="collapseAllFacts" variant="primary">Collapse all facts</SuperButton>
            </div>
          </div>
          <div class="facts-wrapper">
            <div class="column" v-for="column in columns">
              <Fact v-for="fact in column.facts" ref="fact" :key="fact.id" variant="light" :id="fact.id" :title="fact.title" :desc="fact.desc"></Fact>
            </div>
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
  import moment from 'moment'
  import gsap from 'gsap'
  import CSSRulePlugin from 'gsap/CSSRulePlugin'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import TweenLite from '@/vendor/gsap/TweenLite'
  import CustomEase from '@/vendor/gsap/CustomEase'

  import SuperButton from '@/components/SuperButton.vue'
  import SuperLink from '@/components/SuperLink.vue'
  import Fact from '@/components/Fact.vue'

  export default {

    data() {
      return {
        experiences: [
          {
            id: 0,
            company: 'Specify',
            position: 'Product Designer',
            desc: '<p>Specify is a Design Data Platform, helping teams unify their brand identity by collecting, storing, transforming and distributing design tokens and assets — automatically.</p>',
            startDate: '09/06/2021',
            endDate: 'Now',
            duration: '',
            link: 'a-new-adventure-at-specify',
            linkTitle: 'Read more about my new adventure',
          },
          {
            id: 1,
            company: 'Source',
            position: 'Product Designer',
            desc: '<p>Source exists to help its clients and partners to fight against preconceptions, thanks to a rational and user-centered approach.</p><p>I worked closely with multiple industry-related startups and companies, by doing user research, workshops around brand vision and strategy, setting up experience maps and user journeys, to building high-fidelity prototypes and developed solutions.</p><p>6-month internship, 1 year apprenticeship and full-time employee from January 2019 to August 2021.</p>',
            startDate: '07/02/2018',
            endDate: '08/27/2021',
            duration: '',
          },
          {
            id: 2,
            company: 'Freelance',
            position: 'Product Designer',
            desc: '<p>I am providing value to early and mid-stage companies through product & brand design services and design system expertise.</p>',
            startDate: '01/01/2018',
            endDate: 'Now',
            duration: '',
          },
          {
            id: 3,
            company: 'Synerg\' hetic',
            position: 'Design Consultant',
            desc: '<p>I implemented design methodologies to the global positioning of the Junior Company while working closely with startups around minimum viable products and ideation workshops.</p>',
            startDate: '05/01/2017',
            endDate: '11/30/2018',
            duration: '',
          },
        ],
        columns: [
          {
            key: 'one-four-seven-ten',
            facts: [
              {
                id: '1',
                title: 'Started practicing visual design with  themes for jailbreaked iPhones at 11',
                desc: '<p>And it was a real mess at first, as I didn’t know anything about icons or interface design. But with time and practice, I felt in love with all the possibilities Cydia (more or less an AppStore for jailbreaked iPhones) offers for designers and developers as me.</p><p>I started my journey with Photofiltre Studio X, then downloaded a hacked version of Photoshop CS5 to be able to follow the community tutorials on masking, shadows and other effects...</p><p>As I was too young to have a PayPal account, I had to ask my mother to create one to publish my first paid theme on this hidden marketplace.</p>'
              },
              {
                id: '4',
                title: 'Hip-Hop listener',
                desc: '<p>My favorite french rappers are: Alpha Wann, Népal, Nekfeu, Fixpen Sill, Josman and Triplego. And for the U.S., I enjoy listening to Kid Cudi, ScHoolboy-Q, Kendrick Lamar, Mobb Deep and Joey Bada$$ songs.</p><p>I would love to know what\'s your favorite ones and discover new bangers or artists, let me know on Twitter!</p>'
              },
              {
                id: '7',
                title: 'Big fan of David Fincher\'s work',
                desc: '<p>I watch and rewatch again and again a lot of his movies, especially Fight Club (one of my favorite), The Social Network, and House of Cards. Among all the commonalities of his works, what I particularly appreciate is his talent for telling a story, very often tinged with drama and crime.</p><p>From a more technical point of view, I appreciate his control of his scenes, his deep sense of detail, and his compositional choices in every movie.</p>'
              },
              {
                id: '10',
                title: 'Learned perspective while drawing NYC’skyscrapers from Spider-Man movies at 8',
                desc: '<p>New York City landscape was ideal to learn how to draw realistic lines while imagining new stories for this superhero.</p><p>As these skyscrapers tend to be very repetitive, I often only draw the last five floors and use the remaining space of my A4 sheet for a pose of Spider-Man.</p>'
              }
            ]
          },
          {
            key: 'two-five-eight-eleven',
            facts: [
              {
                id: '2',
                title: 'Never stopped playing with LEGO bricks',
                desc: '<p>In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.</p><p>I’m not a huge collector anymore but I’m still obsessed with certain pieces and I’m always trying to find good excuses to buy some kits.</p>'
              },
              {
                id: '5',
                title: 'Started code with .ini plugins for Windows Vista',
                desc: '<p>After falling in love with the Apple ecosystem with my first iPod, I searched for a way to mimic OS X Lion\'s appearance with the dock, clean desktop, top status bar, and everything.</p><p>A way to achieve that on my PC was to use "Universal Theme Patcher", download some plugins, and tadaaa, here we are a customOS X on my old Vista machine.</p>'
              },
              {
                id: '8',
                title: 'Wrote an essay on design systems in 2018 during my 4th year of study',
                desc: '<p>During 6 months, I had the chance to interview Brad Frost, Koen Bok, Valentin Chrétien as well as designers at Source and dig in design systems and their impacts, on product teams and end-users.</p><p>Since then, I developed a strong interest for design operations, systems and APIs, inspired by the work of Benjamin Wilkins, Diana Mounter, Dan Eden, Matthew Ström, Jina Anne, Nathan Curtis, Tatiana Mac, Louis Chenais, Yesenia Perez-Cruz, and Josh Mateo.</p>'
              },
              {
                id: '11',
                title: 'Learned to draw while reproducing 151 first Pokémons',
                desc: '<p>When I was a kid, around 7 or 8yo, and get my first cartridge of Pokémon Yellow with my best friend Pikachu, my father taught me how to draw. I remember to hang each new design on the kitchen wall and plan our next drawing session.</p><p>Discovering and learning each evolution stage of these adorable monsters was one of my first obsessions, like many others kids for sure. </p>'
              }
            ]
          },
          {
            key: 'three-six-nine-twelve',
            facts: [
              {
                id: '3',
                title: 'Dad of 9 healthy plants',
                desc: '<p>As a lot ot of humans around the globe during the 2020 pandemic + lockdown, I decided to improve my workspace and bring more life to my apartment.</p><p>With my loved one, Sabrina (go check her portfolio), we chose plants from different places of the world and after running trials, we found out how to mix LEGOs and our green newcommers.</p>'
              },
              {
                id: '6',
                title: 'Rachet & Clank saga big fan',
                desc: '<p>I started playing this awesome game on my PlayStation 2 with Deadlocked opus. I kept following this saga along the years and console generations.</p><p>I am more than excited for the Rift Apart opus and can\'t wait to try PS5 new features with ray-tracing, adaptative triggers and haptic feedback. And of course, beat again Dr. Nefarious!</p>'
              },
              {
                id: '9',
                title: 'Learn about the real order of Star Wars movies 3 years after watching the ninth one',
                desc: '<p>Shaaame, I know. For a very long time, I thought Episodes I, II, and III were logically the first ones that were out and never understood why Episodes IV, V, and VI were so different visually.</p><p>It was only after a conversation with my loved one about our favorite characters that I checked for the first time the release date of these movies and understood.</p>'
              },
              {
                id: '12',
                title: 'Learned code with Python Turtle at 16',
                desc: '<p>Yeap and that was a mess at first. Even if programming with this module was a good idea as visual plays a key role in understanding loops, variables, etc.</p><p>For my end-of-the-year project, we try to recreate the famous Breakout game with my team. We started from zero and even designing bricks in pixel art on GIMP.</p>'
              }
            ]
          }
        ],
        factsCollapsed: true
      }
    },

    head() {
      return {
        title: 'Yann-Edern Gillet — About',
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'Yann-Edern Gillet — About',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'Yann-Edern Gillet — About',
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: 'https://yannglt.com/images/og-image.png',
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'https://yannglt.com/images/og-image.png',
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://yannglt.com/about/',
          },
        ]
      }
    },

    methods: {
      collapseAllFacts: function() {
        this.$refs.fact.forEach((fact) => {
          fact.collapseFact()
          this.factsCollapsed = true
        })
      },
      
      expandAllFacts: function() {
        this.$refs.fact.forEach((fact) => {
          fact.expandFact()
          this.factsCollapsed = false
        })
      },

      startDate: function(id) {
        return moment(this.experiences[id].startDate).format('MMMM, YYYY')
      },

      endDate: function(id) {
        if (this.experiences[id].endDate != "Now") { 
          return moment(this.experiences[id].endDate).format('MMMM, YYYY') 
        } else {
          return "Now"
        }
      },

      duration: function(id) {
        let duration

        if (this.experiences[id].endDate != "Now") {
          duration = moment(this.experiences[id].endDate).diff(this.experiences[id].startDate, 'years', true).toFixed(1)
        } else {
          duration = moment().diff(this.experiences[id].startDate, 'years', true).toFixed(1)
        }

        if (duration > 2) {
          return duration + " years"

        } else if (duration > 1){
          return duration + " year"

        } else {
          return Math.round(duration * 12) + " months"

        }
      }
    },

    components: {
      SuperButton,
      SuperLink,
      Fact
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

        moodboardTimeline.to('.gsap-debug-screen', {
          duration: 0.240,
          opacity: 0,
          onComplete: killGSAPDebugScreen
        })

        moodboardTimeline.from('.moodboard', {
          duration: 0.720,
          transform: 'scaleY(2)',
          y: '120vh',
          ease: 'emphasized',
          clearProps: 'all'
        }, 0.240)

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
          }, 0.720)
        })

        discoverTimeline.pause()

        const promiseTimeline = gsap.timeline({
          scrollTrigger: {
            // markers: true,
            trigger: '.promise',
            pin: true,
            start: 'top +64px',
            // 1510px (total experiences bloc height + 56x inital margin top)
            end: '1334px center',
          }
        })

        moodboardTimeline.progress(0).play()
        discoverTimeline.progress(0).play()
      }

      function killGSAPDebugScreen() {
        document.querySelector('.gsap-debug-screen').remove()
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