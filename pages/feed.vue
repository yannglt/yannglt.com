<template lang="html">
  <div class="wip-page wip-feed">
    <h1>Feed</h1>
    <a href="/">◀︎ back to homepage</a>
  </div>
</template>

<script>
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
    }
  }
</script>