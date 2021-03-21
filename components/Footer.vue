<template lang="html">
  <div class="footer">
    <clubModal v-if="showClubModal" @close="showClubModal = false"></clubModal>
    <div class="container">
      <div class="club">
        <p class="clubTitle">Join the club, <span class="line-breaker"><br /></span>get (ir)regular updates</p>
        <p class="clubDesc">From now, I will try to work with the garage door up and we will see where it<span class="line-breaker"><br /></span> brings us. New posts and updates on this space + maybe some surprises...</p>

        <ValidationObserver v-slot="{ invalid }" ref="form">

          <form name="thunderstorm-newsletter" method="post" data-netlify="true" @submit.prevent="onSubmit" data-netlify-honeypot="anti-robots">

            <input type="hidden" name="form-name" value="thunderstorm-newsletterr">

            <ValidationProvider rules="required" mode="eager" v-slot="{ errors, classes }">
              <div class="clubFormFirstname" :class="classes">
                <label for="firstname">Your firstname</label>
                <input type="text" name="firstname" id="firstname" placeholder="Anakin" v-model="form.firstname">
                <span class="inputError">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider rules="required|email" mode="eager" v-slot="{ errors, classes }">
              <div class="clubFormEmail" :class="classes">
                <label for="email">Your email</label>
                <input type="email" name="email" id="email" placeholder="a.skywalker@email.com" v-model="form.email">
                <span class="inputError">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <button type="submit" :disabled="invalid">
              Join the club<svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="@/static/icons/sprite.svg#add-circle-20"></use></svg>
            </button>
          </form>

        </ValidationObserver>

      </div>
      <div class="footer-links">
        <div class="footer-copyright">
          <p class="footer-copyrightTitle">Yann-Edern Gillet</p>
          <p class="footer-copyrightDesc">All rights reserved</p>
          <div class="footer-copyrightLogo"></div>
        </div>
        <div class="footer-explore">
          <p class="footer-exploreTitle">In this space</p>
          <ul class="footer-exploreLinks">
            <!-- <li><a href="/works">Discover my work</a></li>
            <li><a href="/process">Learn about my process</a></li> -->
            <li><a href="/about">Know more about me</a></li>
            <li><a href="/contact">Get in touch</a></li>
          </ul>
        </div>
        <div class="footer-follow">
          <p class="footer-followTitle">Follow my work</p>
          <ul class="footer-followLinks">
            <li><a href="https://twitter.com/yannglt">Thoughts on Twitter</a></li>
            <li><a href="https://dribbble.com/yannglt">WIPs on Dribbble</a></li>
            <!-- <li><a href="/feed">RSS feed</a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://unpkg.com/vee-validate@latest"></script>

<script>
  import ClubModal from './ClubModal.vue'
  import { ValidationObserver, ValidationProvider } from "vee-validate"

  export default {
    name: 'thunderstorm-newsletter',
    data: () => ({
      showClubModal: false,
      form: {
        firstname: '',
        email: ''
      }
    }),
    components: {
      ClubModal,
      ValidationObserver,
      ValidationProvider
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      onSubmit () {
        this.$refs.form.validate().then(success => {
          if (!success) {
            return
          }

          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": "thunderstorm-newsletter",
              ...this.form
            })
          })
          .then(() => {
            this.showClubModal = true

            // Resetting Values
            this.form.firstname = this.form.email = ''

            // Wait until the models are updated in the UI
            this.$nextTick(() => {
              this.$refs.form.reset()
            })
          })

        })
      }
    }
  }
</script>