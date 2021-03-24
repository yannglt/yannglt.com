<template>
 <section class="container">
   <p class="back">
     <nuxt-link to="/notes">⟵ Back to Home</nuxt-link>
   </p>
   <h1>{{ post.fields.title }}</h1>
   ></div>
   <article v-html="$md.render(post.fields.body)"></article>
 </section>
</template>

<script>

  export default {
    head () {
      return {
        title: this.post.fields.title
      }
    },

    data() {
      return {
        slug: this.$route.params.slug
      }
    },
    computed: {
    post() {
      let post = this.$store.state.posts.filter(
        el => el.fields.slug === this.slug
      )
        return post[0]
      }
    }
  }

</script>