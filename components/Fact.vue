<template lang="html">
  <div class="fact">
    <p class="subtitle caption text-tertiary-dark">{{ sub }}</p>
    <p class="title heading-3 text-secondary-dark">{{ title }}</p>
    <div class="body text-quaternary-dark" v-html="desc"></div>
  </div>
</template>

<script>
  export default {
    props: {
      sub: { type: String, default: '', required: true },
      title: { type: String, default: '', required: true },
      desc: { type: String, default: '', required: true }
    },

    data: function () {
      return { }
    }
  }
</script>