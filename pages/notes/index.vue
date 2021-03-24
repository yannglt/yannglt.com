<template lang="html">
  <div class="notes">
    <h1 class="title">Notes</h1>
      <article v-for="post in posts" :key="post.fields.slug">
        <h2 class="title"><nuxt-link :to="'/notes/' + post.fields.slug">{{ post.fields.title }}</nuxt-link></h2>
        <p class="date">{{ post.fields.publishDate }}</p>
      </article>
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
    },

    computed: {
      posts() {
        return this.$store.state.posts;
      }
    }
  }
</script>