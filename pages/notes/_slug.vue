<template>
  <div class="note-page">
    <section class="note">
      <div class="container">
        <!-- <SuperButton class="notes-back" variant="quaternary dark" icon="#arrow-backward-12" href="/notes">Notes</SuperButton> -->
        <!-- <div class="note-table-of-contents-wrapper">
          <div class="note-table-of-contents" style="color: white"></div>
        </div> -->
        <div class="note-content">
          <h1 class="note-title heading-1 text-primary-dark">{{ note.fields.title }}</h1>
          <p class="note-date caption text-tertiary-dark">Published on {{ getHumanDate(note.fields.publishDate) }}</p>
          <div class="note-body body" v-html="$md.render(note.fields.body)"></div>
        </div>
        <div class="note-end">
          <div class="note-end-img"></div>
          <div class="note-end-title heading-2 text-secondary-dark">Hope you liked what you read!</div>
          <div class="note-end-desc text-quaternary-dark">Thank you for your time to read this blog post, let me know what you thought about it on <SuperLink href="https://twitter.com/yannglt" target="_blank" variant="body dark">Twitter</SuperLink> or join the club to know when a new post is published!</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import moment from 'moment'

  import SuperButton from '@/components/SuperButton.vue'
  import SuperLink from '@/components/SuperLink.vue'

  export default {

    data() {
      return {
        slug: this.$route.params.slug
      }
    },

    head() {
      return {
        title: this.note.fields.title,
        meta: [
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.note.fields.title,
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: this.note.fields.title,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: 'https://dynamic-og-image-helloyannglt.vercel.app/api/og?title=' + encodeURIComponent(this.note.fields.title.trim()),
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: 'https://dynamic-og-image-helloyannglt.vercel.app/api/og?title=' + encodeURIComponent(this.note.fields.title.trim()),
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://yannglt.com/notes/' + this.note.fields.slug,
          },
        ]
      }
    },

    methods: {
      getHumanDate: function(date) {
        return moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY');
      },

      createFigure: function() {
        if(!document.querySelector('img')){
          return
        } else {
          let target = document.querySelector('img').parentNode
          let imgSrc = document.querySelector('img').src
          let imgAlt = document.querySelector('img').alt
          let newFigure = document.createElement('figure')
          newFigure.innerHTML = '<img src="' + imgSrc + '" alt="' + imgAlt + '"/>' + '<figcaption>' + imgAlt + '</figcaption>'
          target.before(newFigure)
          target.remove()

          // let targets = document.querySelectorAll('img')

          // targets.forEach((target, i) => {
          //   let targetElement = target[i].parentNode
          //   let imgSrc = target[i].src
          //   let imgAlt = target[i].alt
          //   let newFigure = document.createElement('figure')
          //   newFigure.innerHTML = '<img src="' + imgSrc + '" alt="' + imgAlt + '"/>' + '<figcaption>' + imgAlt + '</figcaption>'
          //   targetElement.before(newFigure)
          //   targetElement.remove()
          // })
        }
      },

      toSlug: function(string) {
        return string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase()
      },

      // createTableOfContents: function() {
      //   let tableOfContents = ''
      //   let currentHeadingLevel = ''
      //   let headings = document.querySelectorAll('h2, h3');

      //   if(headings) {
      //     tableOfContents += '<ul>'
         
      //     headings.forEach(heading => {
      //       if (heading.tagName === 'H2') {
      //         if (currentHeadingLevel === 'H3') {
      //           tableOfContents += '</ul>'
      //         }
      //         tableOfContents += '<li class="h2"><a href="#' + this.toSlug(heading.innerText) +'">' + heading.innerText + '</a></li>'

      //         currentHeadingLevel = 'H2'
      //       } 

      //       if (heading.tagName === 'H3') {
      //         if (currentHeadingLevel === 'H2') {
      //           tableOfContents += '<ul>'
      //         }
      //         tableOfContents += '<li class="h3"><span>└</span><a href="#' + this.toSlug(heading.innerText) +'">' + heading.innerText + '</a></li>'

      //         currentHeadingLevel = 'H3'
      //       }

      //       heading.setAttribute('id', this.toSlug(heading.innerText))
      //     });

      //     tableOfContents += '</ul>'
      //   }
        
      //   document.querySelector('.note-table-of-contents').innerHTML = tableOfContents
      // }
    },

    computed: {
      note() {
        let note = this.$store.state.notes.filter(
          el => el.fields.slug === this.slug
        )
        return note[0]
      }
    },

    mounted: function() {
      this.createFigure()
      // this.createTableOfContents()
    },

    components: {
      SuperButton,
      SuperLink
    }
  }
</script>