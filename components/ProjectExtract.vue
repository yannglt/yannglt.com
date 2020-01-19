<template lang="html">
  <div class="project">
    <p class="extract__tag">{{ type }}</p>
    <p class="extract__title">{{ name }}</p>
    <p class="extract__body">{{ desc }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      type: { type: String, default: '', required: true },
      name: { type: String, default: '', required: true },
      desc: { type: String, default: '', required: true }
    },
    data: function () {
      return { }
    }
  }
</script>