<template>
  <div class="note-page">
    <Navbar></Navbar>
    <section class="note">
      <div class="container">
        <nuxt-link class="notes-back caption text-quaternary-dark" exact to="/notes/"><svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-backward-20"></use></svg>Notes</nuxt-link>
        <div class="note-content">
          <h1 class="note-title heading-1 text-primary-dark">{{ note.fields.title }}</h1>
          <p class="note-date caption text-tertiary-dark">Published on {{ getHumanDate(note.fields.publishDate) }}</p>
          <div class="note-body body" v-html="$md.render(note.fields.body)"></div>
        </div>
        <div class="note-end">
          <div class="note-end-img"></div>
          <div class="note-end-title heading-2 text-secondary-dark">Hope you liked what you read!</div>
          <div class="note-end-desc text-quaternary-dark">Thank you for your time to read this blog post, let me know what you thought about it on <a href="https://twitter.com/yannglt">Twitter</a> or join the club to know when a new post is published!</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import moment from 'moment'

  import Navbar from '@/components/Navbar.vue'

  export default {
    head() {
      return {
        title: this.note.fields.title
      }
    },

    data() {
      return {
        slug: this.$route.params.slug
      }
    },

    methods: {
      getHumanDate : function (date) {
        return moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY');
      }
    },

    computed: {
      note() {
        let note = this.$store.state.notes.filter(
          el => el.fields.slug === this.slug
        )
        return note[0]
      }
    },

    components: {
      Navbar
    }
  }
</script>