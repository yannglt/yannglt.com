<template lang="html">
  <div class="fact">
    <p class="factSub">{{ sub }}</p>
    <p class="factTitle">{{ title }}</p>
    <div class="factDesc body" v-html="desc"></div>
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