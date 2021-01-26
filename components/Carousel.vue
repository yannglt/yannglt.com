<template lang="html">
  <div class="slides">
    <div class="slides-view">
      <div v-for="slide in slides" :key="slide.id" class="slide" :class="{ activeSlide : slide.id == index }" :style="'left: calc(' + ((slide.id + 1) * 40 - 40) + 'px + ' + ((slide.id + 1) * 100 - 100) + '%); transform: translateX(calc(' + (-index * 40) + 'px + ' + (-index * 100) + '%));'">
        <div class="project-client">Abu Dhabi Executive Office</div>
        <div class="project-subwrap">
          <div class="project-infos">
            <div class="title">Help designers and developers create consistent experiences and interfaces through meaningful guidelines</div>
            <div class="properties">
              <div class="property">
                <p class="attribute">Position</p>
                <p class="value">Lead Designer</p>
              </div>
              <div class="property">
                <p class="attribute">Expertise</p>
                <p class="value">Design Systems</p>
              </div>
              <div class="property">
                <p class="attribute">Duration</p>
                <p class="value">4 months</p>
              </div>
            </div>
          </div>
          <div class="project-links">
            <a class="button-primary-icon">Read case study<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#arrow-forward-20"></use></svg></a>
            <a class="button-secondary-icon"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#external-link-20"></use></svg></a>
          </div>
        </div>
      </div>
    </div>
    <div class="slides-navigator">
      <div class="progress">
        <div class="progress-current" :style="'width: calc(' + (index + 1) / slidesCount * 100 + '%)'"></div>
      </div>
      <div class="current-navs">
        <div class="current">00<span v-for="slide in slides" :class="{ activeNumber : slide.id == index }" class="slideNumber" :key="slide.id" :style="'bottom: calc(' + ((-slide.id + 1) * 50 - 50) + '%); transform: translateY(calc(' + (-index * 50) + '%))'">{{ slide.id + 1 }}</span>
          <span class="total"> &nbsp;/ 00{{ slidesCount}}</span></div>
        <div class="navs">
          <button class="next" :disabled="index == slidesCount - 1" @click="next"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#arrow-forward-20"></use></svg></button>
          <button class="prev" :disabled="index == 0" @click="previous"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#arrow-backward-20"></use></svg></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        index: 0,
        slides: [
          { id: 0 },
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 }
        ]
      }
    },
    methods: {
      next () {
        if (this.index < this.slidesCount - 1) {
          this.index++
          // console.log("Slide n°" + this.index)
        }
      },
      previous () {
        if (this.index > 0) {
          this.index--
          // console.log("Slide n°" + this.index)
        }
      }
    },
    computed: {
      slidesCount () { return this.slides.length }
    },
  }
</script>