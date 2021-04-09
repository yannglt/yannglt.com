<template lang="html">
  <div class="about-page">
    <Navbar></Navbar>
    <section class="moodboard">
      <div class="container">
        <div class="left">
          <div class="atlas"></div>
          <div class="logo"></div>
        </div>
        <div class="right">
          <div class="electricity-toolkit">
            <div class="pinned-top"></div>
            <div class="pinned-bottom"></div>
          </div>
          <div class="gt-america"></div>
          <div class="bluu-suuperstar"></div>
        </div>
      </div>
    </section>

    <section class="discover">
      <div class="container">
        <h1 class="discover-title display-2 text-primary-dark">Hope you enjoyed your travel in my personal space so far, here are some ways to learn more about me:</h1>
        <div class="discover-blocs">
          <div class="discover-bloc story">
            <div class="icon"></div>
            <p class="title heading-2 text-secondary-dark">Story</p>
            <p class="desc body text-quaternary-dark">Some time have passed between playing with my  first small bricks of color and becoming a Product Designer, I wanted to share anecdotes and funny stories you may find interesting.</p>
            <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
          </div>
          <div class="discover-bloc electricity">
            <div class="icon"></div>
            <p class="title heading-2 text-secondary-dark">Electricity</p>
            <p class="desc body text-quaternary-dark">Since my first portfolio on October 2016, I began building my universe around one thing that kept my attention since I was a child: cities and their energy, using the symbols of light in physics and flash.</p>
            <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
          </div>
          <div class="discover-bloc mood">
            <div class="icon"></div>
            <p class="title heading-2 text-secondary-dark">Moodboard</p>
            <p class="desc body text-quaternary-dark">Maybe the more visual way to dive into my universe, you may find superabundance of references of color palettes inspired by Piet Mondrian, typography compositions and physics symbols.</p>
            <SuperButton class="cta" variant="quaternary dark disabled">Coming soon</SuperButton>
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
            <p>Started from the bottom the original problem(s) and make sure we try to tackle the correct one(s) is essential to make sure we provide efficient solutions to users and businesses.</p>
            <p>Also, I always try to find a great balance between following the choosen methodology and keeping velocity and efficiency through the entire journey.</p>
          </div>
          <div class="ctas">
            <SuperButton class="process" variant="secondary dark disabled">Discover my process</SuperButton>
            <SuperButton href="/contact" class="contact" variant="primary dark" icon="#mail-20">Contact me</SuperButton>
          </div>
        </div>
        <div class="experiences">
          <div v-for="experience in experiences" :key="experience.id" class="experience">
            <p class="position heading-3 text-secondary-dark">{{ experience.company }}, {{ experience.position }}</p>
            <p class="duration caption text-quaternary-dark">{{ experience.start }} - {{ experience.end }} ({{experience.duration}})</p>
            <div class="desc text-tertiary-dark" v-html="experience.desc"></div>
          </div>
          <div class="numbers">
            <div class="clients">
              <p class="number display-2 text-primary-dark">8</p>
              <div class="desc body text-quaternary-dark">
                <p>industries where my expertise was involved by clients and brought to users: cinema, bank, finance, 3D softwares, blockchain, food, institutions and initiatives.</p>
                <p>Clients include:</p>
              </div>
              <p class="list emphasis text-tertiary-dark">Dassault Systèmes, Warner Bros., Abu Dhabi, BPCE, BNP Paribas, Banque Populaire, TON Labs, Indépendants.co and more</p>
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
          <p class="body author text-tertiary-light">Photography taken by <a href="" target="_blank">Sabrina Nedjah</a></p>
        </div>
        <div class="personal-content">
          <p class="caption text-tertiary-light">About me as a human</p>
          <h2 class="quote heading-2 text-primary-secondary-light">“I believe in the process but even more in the connections we  build and strenghten along the way between companies, teams and end-users, all as humans.”</h2>
          <div class="emphasis">
            <p>My name is Yann-Edern Gillet. I’m a French designer living in Paris, France. My main area of focus today is on systems, digital products and interfaces. Still interested about my work?</p>
            <SuperLink href="" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Shoot me a DM on Twitter</SuperLink>
            <p>But let’s forget work for two seconds. In my spare time I still spend a lot of time on screens but more as a front-end engineer.</p>
            <p>I love learning new things, especially with SASS, Nuxt and GSAP. More recently I’m learning the craft of icon design (yup, the ones you saw earlier are born on my computer). I like the idea of crafting myself every pixel of my creations, both in design and code, like this portfolio.</p>
            <SuperLink href="" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Read the code behind this website</SuperLink>
            <p>When my hands are not on my mechanical keyboard, I enjoy taking care of my plants, cook/ try some italian recipes with my girlfriend and building LEGO sets.</p>
            <p>And when my hands are not building things, I dive into others designers’ and developers’ work, thanks to Standards Manual, Increment by Stripe and Offscreen Magazine.</p>
            <p>With this COVID—19/20/21 crisis + global lockdown, I spent a lof of time improving my workspace and discovered my self quite a passion for that, as many others designers for sure haha. Interested in learning more about my setup ?</p>
            <SuperLink href="" target="_blank" variant="emphasis light" icon="#arrow-forward-20">Discover what it looks like</SuperLink>
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
            <p>Born inside Sketch in 2019 and raised inside Figma in 2020/2021. Design tokens pushed by <a href="">Specify</a>.</p>
            <p>Built on Nuxt and Vue with GreenSock libraries for animations. Hosted by GitHub and distributed by Netflify and Amazon Web Services.</p>
          </div>
        </div>
        <div class="thanks-bloc typefaces">
          <div class="caption"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#entry-20"></use></svg>Typefaces</div>
          <div class="content body text-secondary-light">
            <p>Headlines are set in Bluu Suuperstar, designed by Jean-Baptiste Morizot and redrew in 2017 for french type design company <a href="">Black Foundry</a>.</p>
            <p>Copy is set in GT America, designed by Noël Leu with Seb McLauchlan for <a href="">Grilli Type</a>.</p>
          </div>
        </div>
        <div class="thanks-bloc people">
          <div class="caption"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#entry-20"></use></svg>A big S/O to this awesome people</div>
          <div class="content body text-secondary-light">
            <p>My partner in life <a href="">Sabrina Nedjah</a> and my brother <a href="">Hassan Boujnkih</a> for their support these last years. <a href="">Gabriel Bacave</a> for its help on writing my manifesto. </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
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
      Navbar,
      SuperButton,
      SuperLink
    }
  }
</script>