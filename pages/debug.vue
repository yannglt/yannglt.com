<template lang="html">
  <div class="debug-page">
    <div class="container gridSystem">
      <div class="buttons dark">
        <SuperButton href="/notes" variant="primary" icon="#arrow-forward-20">Get Started</SuperButton>
        <!-- <SuperButton href="/notes" variant="locked" icon="#forbidden-20">Work under NDA</SuperButton> -->
        <SuperButton href="/notes" variant="secondary dark">Get Started</SuperButton>
        <SuperButton href="/notes" variant="secondary dark icon-only" icon="#external-link-20"></SuperButton>
        <SuperButton href="/notes" variant="tertiary thunderstorm" icon="#arrow-forward-20">Get Started</SuperButton>
        <SuperButton href="/notes" variant="quaternary dark" icon="#arrow-forward-12">Get Started</SuperButton>
      </div>
      <div class="buttons light">
        <SuperButton href="/notes" variant="primary" icon="#arrow-forward-20">Get Started</SuperButton>
        <!-- <SuperButton href="/notes" variant="locked" icon="#forbidden-20">Work under NDA</SuperButton> -->
        <SuperButton href="/notes" variant="secondary light">Get Started</SuperButton>
        <SuperButton href="/notes" variant="secondary light icon-only" icon="#external-link-20"></SuperButton>
        <SuperButton href="/notes" variant="tertiary maelstrom" icon="#arrow-forward-20">Get Started</SuperButton>
        <SuperButton href="/notes" variant="tertiary oblivion" icon="#arrow-forward-20">Get Started</SuperButton>
      </div>
      <div class="links dark">
        <SuperLink href="/notes" variant="emphasis dark" icon="#arrow-forward-20">Read the code behind this website</SuperLink>
      </div>
      <div class="links light">
        <SuperLink href="/notes" variant="emphasis light" icon="#arrow-forward-20">Read the code behind this website</SuperLink>
        <SuperLink href="/notes" variant="body light">Read the code behind this website</SuperLink>
      </div>
      <div class="links info">
        <SuperLink href="/notes" variant="body info" icon="#arrow-forward-20">Read the code behind this website</SuperLink>
      </div>
    </div>
  </div>
</template>

<script>
  import SuperButton from '../components/SuperButton.vue'
  import SuperLink from '../components/SuperLink.vue'

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
      SuperLink
    }
  }
</script>

<style lang="sass">

  body
    background-color: #ffffff

  .container
    margin-top: 128px

  .buttons, .links
    grid-column: span 12
    display: flex
    padding: 32px
    align-items: center

    &.dark
      background-color: #00030A

    &.info
      background-color: hsl(216, 100%, 36%)

    .button:not(:last-of-type), .link:not(:last-of-type)
      margin-right: 24px
</style>