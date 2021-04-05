<template lang="html">
  <div class="slides">
    <div class="slides-view">
      <div v-for="slide in slides" :key="slide.id" class="slide" :class="{ prevSlide : slide.id == index - 1, activeSlide : slide.id == index, nextSlide : slide.id == index + 1 }"  :style="'left: calc(' + ((slide.id + 1) * 40 - 40) + 'px + ' + ((slide.id + 1) * 100 - 100) + '%); transform: translateX(calc(' + (-index * 40) + 'px + ' + (-index * 100) + '%));'">
        <p class="project-client caption text-secondary-light">{{ slide.client }}</p>
        <div class="project-subwrap">
          <div class="title heading-2 text-primary-light">{{ slide.title }}</div>
          <div class="project-infos">
            <div class="properties">
              <div class="property position">
                <p class="attribute caption text-tertiary-light">Position</p>
                <p class="value text-secondary-light">{{ slide.position }}</p>
              </div>
              <div class="property expertise">
                <p class="attribute caption text-tertiary-light">Expertise</p>
                <p class="value text-secondary-light">{{ slide.expertise }}</p>
              </div>
              <div class="property duration">
                <p class="attribute caption text-tertiary-light">Duration</p>
                <p class="value text-secondary-light">{{ slide.duration }} months</p>
              </div>
            </div>
            <div class="project-links">
              <SuperButton v-if="!slide.nda" class="case-study" variant="primary" icon="#arrow-forward-20">Read case study</SuperButton>
              <SuperButton v-if="slide.nda" class="nda" variant="primary locked" icon="#forbidden-20">Work Under NDA</SuperButton>
              <SuperButton v-if="slide.link" class="case-live" variant="secondary light icon-only" icon="#external-link-20"></SuperButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slides-navigator">
      <div class="progress">
        <div class="progress-current" :style="'width: calc(' + (index + 1) / slidesCount * 100 + '%)'"></div>
      </div>
      <div class="current-navs">
        <div class="current caption">00<span v-for="slide in slides" :class="{ activeNumber : slide.id == index }" class="slideNumber caption" :key="slide.id" :style="'bottom: calc(' + ((-slide.id + 1) * 50 - 50) + '%); transform: translateY(calc(' + (-index * 50) + '%))'">{{ slide.id + 1 }}</span>
          <span class="total caption"> &nbsp;/ 00{{ slidesCount}}</span></div>
        <div class="navs">
          <button class="next" :disabled="index == slidesCount - 1" @click="next"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-20"></use></svg></button>
          <button class="prev" :disabled="index == 0" @click="previous"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-backward-20"></use></svg></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SuperButton from '../components/SuperButton.vue'

  export default {
    data () {
      return {
        index: 0,
        slides: [
          { id: 0,
            client: 'Abu Dhabi Executive Office',
            title: 'Help designers and developers create consistent experiences and interfaces through meaningful guidelines',
            position: 'Lead Designer',
            expertise: 'Design Systems',
            duration: '6',
            link: '',
            caseStudy: '',
            nda: true
          },
          { id: 1,
            client: 'BNP Paribas',
            title: 'Make the vision of Customer Experience for 2024 real, from user and business insights to a high-fidelity prototype',
            position: 'Product Designer',
            expertise: 'Product Design',
            duration: '4',
            link: '',
            caseStudy: '',
            nda: true
          },
          // { id: 2,
          //   client: 'Indépendants.co',
          //   title: 'Build a website for the french syndicate defending independent workers, clarifying its goals and views',
          //   position: 'Designer',
          //   expertise: 'UX/UI Design',
          //   duration: '2',
          //   link: '',
          //   caseStudy: '',
          //   nda: false
          // },
          { id: 2,
            client: 'BPCE · Banque Populaire',
            title: 'Define the 2021 roadmap for bank advisors support mobile app, then build a high-fidelity prototype',
            position: 'Product Designer',
            expertise: 'Strategic Design',
            duration: '3',
            link: '',
            caseStudy: '',
            nda: true
          }
        ],
        touch: {
          startX: 0,
          endX: 0,
        },
        mouse: {
          mouseIsDown: false,
          startX: 0,
          endX: 0
        },
        threshold: 30
      }
    },

    methods: {
      goto (dest) {
        this.index = dest
      },

      next () {
        if (this.index < this.slidesCount - 1) {
          this.index++
        }
      },

      previous () {
        if (this.index > 0) {
          this.index--
        }
      },

      touchstart(event) {
        this.touch.startX = event.touches[0].clientX
        this.touch.endX = 0
      },

      touchmove(event) {
        this.touch.endX = event.touches[0].clientX
      },

      touchend() {
        if(this.touch.endX == 0) return false
        if(this.touch.endX < this.touch.startX) {
          if(this.touch.startX - this.touch.endX >= this.threshold) {
            this.next()
          }
        } else {
          if(this.touch.endX - this.touch.startX >= this.threshold) {
            this.previous()
          }
        }
      },

      mousedown(event) {
        this.mouseIsDown = true
        this.mouse.startX = event.clientX
        this.mouse.endX = 0
      },

      mousemove(event) {
        if(!this.mouseIsDown) return false
        this.mouse.endX = event.clientX
      },

      mouseup() {
        if(this.mouse.endX == 0) return false
        this.mouseIsDown = false
        if(this.mouse.endX < this.mouse.startX) {
          if(this.mouse.startX - this.mouse.endX >= this.threshold) {
            this.next()
          }
        } else {
          if(this.mouse.endX - this.mouse.startX >= this.threshold) {
            this.previous()
          }
        }
      },
    },

    mounted() {
      document.querySelector('.slides-view').addEventListener('touchstart', event => this.touchstart(event))
      document.querySelector('.slides-view').addEventListener('touchmove', event => this.touchmove(event))
      document.querySelector('.slides-view').addEventListener('touchend', () => this.touchend())

      document.querySelector('.slides-view').addEventListener('mousedown', event => this.mousedown(event))
      document.querySelector('.slides-view').addEventListener('mousemove', event => this.mousemove(event))
      document.querySelector('.slides-view').addEventListener('mouseup', () => this.mouseup())
    },

    computed: {
      slidesCount () {
        return this.slides.length
      }
    },

    components: {
      SuperButton
    }
  }
</script>