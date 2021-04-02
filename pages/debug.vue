<template lang="html">
  <div class="debug-page">
    <div class="container gridSystem">
      <div class="buttons dark">
        <SuperButton href="/notes" variant="primary" icon="#arrow-forward-20">Get Started</SuperButton>
        <SuperButton href="/notes" variant="secondary dark">Get Started</SuperButton>
        <SuperButton href="/notes" variant="secondary dark icon-only" icon="#external-link-20"></SuperButton>
        <SuperButton href="/notes" variant="tertiary thunderstorm" icon="#arrow-forward-20">Get Started</SuperButton>
        <SuperButton href="/notes" variant="locked" icon="#forbidden-20">Work under NDA</SuperButton>
      </div>
      <div class="buttons light">
        <SuperButton href="/notes" variant="primary" icon="#arrow-forward-20">Get Started</SuperButton>
        <SuperButton href="/notes" variant="secondary light">Get Started</SuperButton>
        <SuperButton href="/notes" variant="secondary light icon-only" icon="#external-link-20"></SuperButton>
        <SuperButton href="/notes" variant="tertiary maelstrom" icon="#arrow-forward-20">Get Started</SuperButton>
        <SuperButton href="/notes" variant="tertiary oblivion" icon="#arrow-forward-20">Get Started</SuperButton>
        <SuperButton href="/notes" variant="locked" icon="#forbidden-20">Work under NDA</SuperButton>
      </div>
    </div>
  </div>
</template>

<script>
  import SuperButton from '../components/SuperButton.vue'

  export default {
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
        ]
      }
    },

    data: function () {
      return { }
    },

    components: {
      SuperButton,
    }
  }
</script>

<style lang="sass">

  body
    background-color: #ffffff

  .container
    margin-top: 128px

  .buttons
    grid-column: span 12
    display: flex
    padding: 32px
    align-items: flex-end

    &.dark
      background-color: #00030A

    .button:not(:last-of-type)
      margin-right: 24px
</style>