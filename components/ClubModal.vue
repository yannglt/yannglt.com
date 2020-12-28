<template lang="html">
  <div class="clubModal">
    <div class="clubModalOverlay">
      <!-- <transition name="modalBox" enter-class="modalBox-enter" enter-active-class="modalBox-enter-active"> -->
        <div class="clubModalBox">
          <div class="clubModalCheck">
            <svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#check-24"></use></svg>
          </div>
          <p class="clubModalTitle">Welcome to the club!</p>
          <p class="clubModalDesc">Thanks for your subscription, Anakin. In a minute or two you will receive a confirmation link in your inbox, please make sure to confirm to receive my newsletter.</p>
          <button class="clubModalClose" @click="$emit('close')">Back to Portfolio</button>
        </div>
    <!-- </transition> -->
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>