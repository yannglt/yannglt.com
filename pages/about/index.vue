<template lang="html">
  <div id="about">
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
        <h1 class="discover--hero">Hi! Hope you enjoyed your travel in my personal space so far, here are some ways to learn more about me:</h1>
        <div class="discover--bloc">
          <div class="discover--icon story"></div>
          <p class="discover--title">Story</p>
          <p class="discover--desc">From playing with small bricks of colors to become a Product Designer, some time have passed and I wanted to share anecdotes and funny stories you may find interesting.</p>
          <a class="discover--link" href="">Read more about me<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-12"></use></svg></a>
        </div>
        <div class="discover--bloc">
          <div class="discover--icon electricity"></div>
          <p class="discover--title">Electricity</p>
          <p class="discover--desc">Since my first portfolio on October 2016, I began building my universe around one thing that kept my attention since I was a child: cities and their energy, using the symbols of light in physics and flash.</p>
          <a class="discover--link" href="">Explore my city<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-12"></use></svg></a>
        </div>
        <div class="discover--bloc">
          <div class="discover--icon mood"></div>
          <p class="discover--title">Moodboard</p>
          <p class="discover--desc">Maybe the more visual way to dive into my universe, you may find superabundance of references of color palettes inspired by Piet Mondrian, typography compositions and physics symbols.</p>
          <a class="discover--link" href="">Dive into my inspirations<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-12"></use></svg></a>
        </div>
      </div>
    </section>

    <section class="classic">
      <div class="container">
        <div class="promise">
          <p class="promise--tag">Or maybe the more classic way</p>
          <h2 class="promise--title">From problems to tried and tested products, by asking questions again & again, until reaching users’ delight and company’s vision.</h2>
          <div class="promise--desc">
            <p>[TK] S/O to all the people I met these last years, from colleagues to partners, from clients to users, loved ones and friends. Early in his teenage years Erik started exploring interactive design and in 2004, at age 14, he completed his first commercial project.</p>
            <p>In 2008, without any relevant education, Erik was hired as a Designer to join the in-house agency of Svenska Spel.  Originally from Sweden, Erik has spent the majority of his career in New York City working for Spotify, R/GA and Stink Studios.</p>
          </div>
          <div class="promise--ctas">
            <a class="process">Discover my process</a>
            <a class="contact">Contact me<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#mail-20"></use></svg></a>
          </div>
        </div>
          <div class="experiences">
            <div v-for="experience in experiences" :key="experience.id" class="experience">
              <div class="experience--dot"></div>
              <p class="experience--position">{{ experience.company }}, {{ experience.position }}</p>
              <p class="experience--duration">{{ experience.start }} - {{ experience.end }} ({{experience.duration}})</p>
              <div class="experience--desc" v-html="experience.desc"></div>
            </div>
            <div class="numbers">
              <div class="clients">
                <p class="clients--number">8</p>
                <div class="clients--desc">
                  <p>industries where my expertise was involved by clients and brought to users: cinema, bank, finance, 3D softwares, blockchain, food, institutions and initiatives.</p>
                  <p>Clients include:</p>
                </div>
                <p class="clients--list">Dassault Systèmes, Warner Bros., Abu Dhabi, BPCE, BNP Paribas, Banque Populaire, TON Labs, Indépendants.co and more</p>
              </div>
              <div class="projects">
                <p class="projects--number">25<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#add-20"></use></svg></p>
                <div class="projects--desc">projects over the last 3 years</div>
              </div>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>

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
            desc: '<p>TK In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.</p>',
            start: 'Jan 2019',
            end: 'Now',
            duration: '2.5 years',
          },
          {
            id: '1',
            company: 'Source',
            position: 'Junior Designer',
            desc: '<p>TK In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.</p>',
            start: 'Jul 2018',
            end: 'Dec 2018',
            duration: '0.5 year',
          },
          {
            id: '2',
            company: 'Synerg\' hetic',
            position: 'Design Consultant',
            desc: '<p>TK In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.</p>',
            start: 'May 2018',
            end: 'Nov 2018',
            duration: '0.5 year',
          },
        ]
      }
    }
  }
</script>