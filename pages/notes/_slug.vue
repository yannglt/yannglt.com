<template>
 <section class="container">
   <p class="back">
     <nuxt-link to="/notes">⟵ Back to Home</nuxt-link>
   </p>
   <h1>{{ note.fields.title }}</h1>
   ></div>
   <article v-html="$md.render(note.fields.body)"></article>
 </section>
</template>

<script>

  export default {
    head () {
      return {
        title: this.note.fields.title
      }
    },

    data() {
      return {
        slug: this.$route.params.slug
      }
    },

    computed: {
    note() {
      let note = this.$store.state.notes.filter(
        el => el.fields.slug === this.slug
      )
        return note[0]
      }
    }
  }

</script>