<template lang="html">
  <div id="about">
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
        <h1 class="discover--hero">Hi! Hope you enjoyed your travel in my personal space so far, here are some ways to learn more about me:</h1>
        <div class="discover--bloc">
          <div class="discover--icon story"></div>
          <p class="discover--title">Story</p>
          <p class="discover--desc">From playing with small bricks of colors to become a Product Designer, some time have passed and I wanted to share anecdotes and funny stories you may find interesting.</p>
          <a class="discover--link" href="">Read more about me<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#arrow-forward-12"></use></svg></a>
        </div>
        <div class="discover--bloc">
          <div class="discover--icon electricity"></div>
          <p class="discover--title">Electricity</p>
          <p class="discover--desc">Since my first portfolio on October 2016, I began building my universe around one thing that kept my attention since I was a child: cities and their energy, using the symbols of light in physics and flash.</p>
          <a class="discover--link" href="">Explore my city<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#arrow-forward-12"></use></svg></a>
        </div>
        <div class="discover--bloc">
          <div class="discover--icon mood"></div>
          <p class="discover--title">Moodboard</p>
          <p class="discover--desc">Maybe the more visual way to dive into my universe, you may find superabundance of references of color palettes inspired by Piet Mondrian, typography compositions and physics symbols.</p>
          <a class="discover--link" href="">Dive into my inspirations<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#arrow-forward-12"></use></svg></a>
        </div>
      </div>
    </section>

    <section class="exps">
      <div class="container">
        <p class="exps--tag">Or maybe the more classic way</p>
        <h2 class="exps--title">Experiences, design on-demand services and some quick facts</h2>
        <p class="exps--desc">S/O to all the people I met these last years, from colleagues to partners, from clients to users, loved ones and friends.</p>
        <div class="cv">
          <div class="cv--intro">
            <h3 class="cv--title">Experiences</h3>
            <p class="cv--desc">S/O to all the people I met these last years, from colleagues to partners, from clients to users, loved ones and friends.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

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
            desc: 'In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.',
            start: '',
            end: '',
            duration: '',
          },
          {
            id: '1',
            company: 'Source',
            position: 'Junior Designer',
            desc: 'In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.',
            start: '',
            end: '',
            duration: '',
          },
          {
            id: '2',
            company: 'Synerg\' hetic',
            position: 'Design Consultant',
            desc: 'In fact, I continue to play while being in high-school, in university and then college, from City, Star Wars or Mars series to my current Architecture collection, these little bricks help me to stay away from the screen every once in a while.',
            start: '',
            end: '',
            duration: '',
          },
        ]
      }
    },

    components: {
      Navbar
    }
  }
</script>