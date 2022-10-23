<template lang="html">
  <div class="notes-page">
    <section class="notes">
      <div class="container">
        <div class="notes-intro">
          <h1 class="notes-intro-title heading-1 text-primary-dark">Notebook</h1>
          <p class="notes-intro-desc body text-quaternary-dark">Find here all my writing notes, essays, blog posts, call it how you want haha. Topics cover design operations and bridges between design and code. I may use this space also like a journal, we will see.</p>
        </div>
        <div class="notes-list">
          <article v-for="note in notes" :key="note.fields.slug" class="note">
            <h2 class="note-title heading-2 text-secondary-dark">
              <nuxt-link :to="'/notes/' + note.fields.slug">{{ note.fields.title }}
                <svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#arrow-forward-20"></use></svg>
              </nuxt-link>
            </h2>
            <p class="note-date caption text-tertiary-dark">{{ getHumanDate(note.fields.publishDate) }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    
    head() {
      return {
        title: 'Yann-Edern Gillet — Notes',
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'Yann-Edern Gillet — Notes',
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'Yann-Edern Gillet — Notes',
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: 'https://yannglt.com/images/og-image.png',
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'https://yannglt.com/images/og-image.png',
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://yannglt.com/notes/',
          },
        ]
      }
    },

    computed: {
      notes() {
        return this.$store.state.notes;
      }
    },

    methods: {
      getHumanDate : function (date) {
        return moment(date, 'YYYY-MM-DD').format('MMM DD, YYYY');
      }
    }
  }
</script>