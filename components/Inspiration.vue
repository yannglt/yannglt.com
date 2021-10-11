<template lang="html">
  <div class="inspiration">
    <img ref="inspirationImage" :src="src">
    <div ref="anchorNorthEast" class="anchor ne"></div>
    <div ref="anchorSouthEast" class="anchor se"></div>
    <div ref="anchorSouthWest" class="anchor sw"></div>
    <div ref="anchorNorthWest" class="anchor nw"></div>
  </div>
</template>

<script>
  import gsap from 'gsap'
  import TweenLite from '@/vendor/gsap/TweenLite'

  export default {
    data() {
      return {
        isGrabbed: false,
        mouseRatio: 5,
        scaleRatio: 1.05,
        coordinates: { 
          x: 0,
          y: 0,
          z: 0
        },
        scales: {
          x: 1,
          y: 1,
          z: 1,
        },
        grabInitialPosition: {
          x: 0,
          y: 0
        },
        grabFinalPosition: {
          x: 0,
          y: 0
        },
        grabVector: {
          x: 0,
          y: 0
        }
      }
    },

    props: {
      src: { type: String, default: '', required: true }
    },

    methods: {

      setPosition: function() {        
        this.coordinates.x = Math.floor(Math.random() * 768)
        this.coordinates.y = Math.floor(Math.random() * 768)

        this.$el.style.top = this.coordinates.x + 'px'
        this.$el.style.left = this.coordinates.y + 'px'

        // console.log(this.coordinates.x, this.coordinates.y)
      },

      moveMouseDown: function(e) {
        const target = e.target.getBoundingClientRect()

        this.isGrabbed = true
        this.$el.classList.add('is-moving')
        this.grabInitialPosition = {
          x: e.clientX - target.x,
          y: e.clientY - target.y
        }

        this.$emit('incrementZIndex', this.$el)
      },

      moveMouseMove: function(e) {
        const target = e.target.getBoundingClientRect()

        if(this.isGrabbed) {  
          this.grabFinalPosition = {
            x: e.clientX - target.x,
            y: e.clientY - target.y
          }        
          this.grabVector = {
            x: (this.grabFinalPosition.x - this.grabInitialPosition.x) * this.mouseRatio,
            y: (this.grabFinalPosition.y - this.grabInitialPosition.y) * this.mouseRatio
          }

          // CLASSIC TRANSLATE 3D
          // e.target.style.transform = 'translate3d(' + this.grabVector.x +'px,' + this.grabVector.y + 'px, 0)'

          // GSAP
          gsap.to(this.$el, {
            x: this.grabVector.x,
            y: this.grabVector.y,
            duration: 1 
          })
        }
      },

      moveMouseUp: function() {
        this.isGrabbed = false
        this.$el.classList.remove('is-moving')
      },

      scale: function(e) {
        let orientation = e.target.classList[1]
        let height = this.$refs.inspirationImage.getBoundingClientRect().height
        let width = this.$refs.inspirationImage.getBoundingClientRect().width

        height *= this.scaleRatio
        width *= this.scaleRatio
  
        switch (orientation) {
          case 'ne':
            this.$el.style.transformOrigin = 'bottom left'
            break;

          case 'se':
            this.$el.style.transformOrigin = 'top left'
            break;

          case 'sw':
            this.$el.style.transformOrigin = 'top right'
            break;

          case 'nw':
            this.$el.style.transformOrigin = 'bottom right'
            break;
        
          default:
            break;
        }

        gsap.to(this.$refs.inspirationImage, {
          // transform: 'scale3d(' + this.scales.x + ', ' + this.scales.y + ', ' + this.scales.z + ')',
          // height: height,
          width: width,
          duration: 0.2
        })
      }
    },

    mounted() {
      gsap.registerPlugin(TweenLite)

      this.setPosition()
      this.$el.addEventListener('mousedown', (e) => this.moveMouseDown(e))
      this.$el.addEventListener('mousemove', (e) => this.moveMouseMove(e))
      this.$el.addEventListener('mouseup', (e) => this.moveMouseUp())
      this.$el.addEventListener('mouseleave', () => this.moveMouseUp())

      // const anchors = this.$el.querySelectorAll('.anchor')

      // anchors.forEach(anchor => {
      //   anchor.addEventListener('mousedown', (e) => this.scale(e))
      // })
    }
  }
</script>