<template lang="html">
  <div id="moodboard">
    <section class="moodboard full">
      <div class="container">

        <div class="image">
          <div class="anchor ne"></div>
          <div class="anchor se"></div>
          <div class="anchor sw"></div>
          <div class="anchor nw"></div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>

  export default {

    data: function () {
      return {

      }
    },

    mounted() {
      const moodboard = document.querySelector('.moodboard')
      const image = document.querySelector('.image')
      const anchors = document.querySelectorAll('.anchor')

      let isResizing = false
      let currentResizer

      image.onmousedown = function(event) {

        let shiftX = event.clientX - image.getBoundingClientRect().left
        let shiftY = event.clientY - image.getBoundingClientRect().top

        image.style.position = 'absolute'
        image.style.zIndex = 1000

        moodboard.append(image)

        moveTo(event.pageX, event.pageY)

        function moveTo(pageX, pageY) {
          image.style.left = pageX - shiftX + 'px'
          image.style.top = pageY - shiftY + 'px'
        }

        function onMouseMove(event) {
          if (!isResizing) {
            moveTo(event.pageX, event.pageY)
          }
        }

        document.addEventListener('mousemove', onMouseMove)

        image.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove)
          image.onmouseup = null
        }
      }

      anchors.forEach((anchor) => {
        anchor.addEventListener('mousedown', AnchorOnMouseDown)

        function AnchorOnMouseDown(event) {
          currentResizer = event.target
          isResizing = true

          let shiftX = event.clientX
          let shiftY = event.clientY

          image.classList.add('is-resizing')

          window.addEventListener('mousemove', AnchorOnMouseMove)
          window.addEventListener('mouseup', AnchorOnMouseUp)

          function AnchorOnMouseMove(event) {
            const rect = image.getBoundingClientRect()

            if(currentResizer.classList.contains('se')) {
              image.style.width = rect.width - (shiftX - event.clientX) + 'px'
              image.style.height = rect.height - (shiftY - event.clientY) + 'px'
            }
            else if(currentResizer.classList.contains('sw')) {
              image.style.width = rect.width + (shiftX - event.clientX) + 'px'
              image.style.height = rect.height - (shiftY - event.clientY) + 'px'
              image.style.left = rect.left - (shiftX - event.clientX) + 'px'
            }
            else if(currentResizer.classList.contains('ne')) {
              image.style.width = rect.width - (shiftX - event.clientX) + 'px'
              image.style.height = rect.height + (shiftY - event.clientY) + 'px'
              image.style.top = rect.top - (shiftY - event.clientY) + 'px'
            }
            else {
              image.style.width = rect.width + (shiftX - event.clientX) + 'px'
              image.style.height = rect.height + (shiftY - event.clientY) + 'px'
              image.style.left = rect.left - (shiftX - event.clientX) + 'px'
              image.style.top = rect.top - (shiftY - event.clientY) + 'px'
            }

            shiftX = event.clientX
            shiftY = event.clientY
          }

          function AnchorOnMouseUp() {
            anchor.removeEventListener('mousedown', AnchorOnMouseDown)
            window.removeEventListener('mousemove', AnchorOnMouseMove)

            isResizing = false
            image.classList.remove('is-resizing')
          }
        }
      })

      // anchors.forEach((anchor) => {
      //   anchor.addEventListener('mousedown', AnchorOnMouseDown)
      //
      //   function AnchorOnMouseDown(event) {
      //     currentResizer = event.target
      //     isResizing = true
      //
      //     let shiftX = event.clientX
      //     let shiftY = event.clientY
      //
      //     let rotation
      //
      //     image.classList.add('is-rotating')
      //
      //     window.addEventListener('mousemove', AnchorOnMouseMove)
      //     window.addEventListener('mouseup', AnchorOnMouseUp)
      //
      //     function AnchorOnMouseMove(event) {
      //       const rect = image.getBoundingClientRect()
      //
      //       if(currentResizer.classList.contains('se')) {
      //         rotation = Math.atan2((shiftX - event.clientX), (shiftY - event.clientY))
      //
      //         console.log(rotation)
      //         image.style.transform = 'rotate(' + rotation + 'deg)'
      //       }
      //       // else if(currentResizer.classList.contains('sw')) {
      //       //   image.style.width = rect.width + (shiftX - event.clientX) + 'px'
      //       //   image.style.height = rect.height - (shiftY - event.clientY) + 'px'
      //       //   image.style.left = rect.left - (shiftX - event.clientX) + 'px'
      //       // }
      //       // else if(currentResizer.classList.contains('ne')) {
      //       //   image.style.width = rect.width - (shiftX - event.clientX) + 'px'
      //       //   image.style.height = rect.height + (shiftY - event.clientY) + 'px'
      //       //   image.style.top = rect.top - (shiftY - event.clientY) + 'px'
      //       // }
      //       // else {
      //       //   image.style.width = rect.width + (shiftX - event.clientX) + 'px'
      //       //   image.style.height = rect.height + (shiftY - event.clientY) + 'px'
      //       //   image.style.left = rect.left - (shiftX - event.clientX) + 'px'
      //       //   image.style.top = rect.top - (shiftY - event.clientY) + 'px'
      //       // }
      //
      //       shiftX = event.clientX
      //       shiftY = event.clientY
      //     }
      //
      //     function AnchorOnMouseUp() {
      //       anchor.removeEventListener('mousedown', AnchorOnMouseDown)
      //       window.removeEventListener('mousemove', AnchorOnMouseMove)
      //
      //       isResizing = false
      //       image.classList.remove('is-rotating')
      //     }
      //   }
      // })

      image.ondragstart = function() {
        return false
      }
    }
  }

</script>