<template lang="html">
  <footer>
    <div class="container">
      <div class="footer__section about-me">
        <p class="footer__title">About me</p>
        <div class="footer__body">
          <p>Product designer based in Paris,  currently working at <a href="#">Source</a>. Human who likes chocolate, dogs and design operations, but must of all someone with a passion for why and how things are designed.</p>
          <p><a href="#">HETIC</a> graduate (P2019) • <a href="#">Synerg’hetic</a> alumnus</p>
        </div>
      </div>
      <div class="links">
        <div class="footer__section follow-work">
          <p class="footer__title">Follow my work</p>
          <div class="footer__body">
            <ul>
              <li><a href="#">Stories on Medium <img src="~/assets/images/external-link.svg"></a></a></li>
              <li><a href="#">Journey on Instagram <img src="~/assets/images/external-link.svg"></a></a></li>
              <li><a href="#">WIPs on Dribbble <img src="~/assets/images/external-link.svg"></a></a></li>
              <li><a href="#">Case studies on Behance <img src="~/assets/images/external-link.svg"></a></a></li>
            </ul>
          </div>
        </div>
        <div class="footer__section get-in-touch">
          <p class="footer__title">Get in touch</p>
          <div class="footer__body">
            <ul>
              <li><a href="#">DMs are open on Twitter <img src="~/assets/images/external-link.svg"></a></li>
              <li>Work: <a href="#">super-project@yannglt.com</a></li>
              <li>Say bonjour: <a href="#">hello@yannglt.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        <img src="~/assets/images/logo-copyright.svg" alt="">
        <span></span>
        <p>All rights reserved ⓒ Yann-Edern Gillet 2019</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">

  @import '@/assets/sass/_mixins.sass'

  footer
    padding: 39px 0 54px
    background-color: #06080A

    +adapt(768px)
      padding: 59px 0 48px

    +adapt(1024px)
      padding: 47px 0 54px

    +adapt(1024px)
      padding: 87px 0 84px

    .container

      +adapt(1024px)
        display: grid
        grid-template-columns: repeat(12, 48px)
        column-gap: 32px

      +adapt(1440px)
        display: grid
        grid-template-columns: repeat(12, 74px)
        column-gap: 32px

  .footer__section
    margin-bottom: 65px

    +adapt(768px)
      margin-bottom: 68px

    +adapt(1440px)
      margin-bottom: 86px

  .about-me

    +adapt(768px)
      margin-right: 168px

    +adapt(1024px)
      margin-right: 0
      grid-column: 1 / span 7

    +adapt(1440px)
      grid-column: 1 / span 5

  .links

    +adapt(768px)
      display: grid
      grid-template-columns: repeat(4, 136px)
      column-gap: 32px

    +adapt(1024px)
      grid-column: 1 / span 12
      grid-template-columns: repeat(12, 48px)
      column-gap: 32px

    +adapt(1440px)
      grid-column: 7 / span 6

  .follow-work, .get-in-touch

    +adapt(768px)
      grid-column: span 2

    +adapt(1024px)
      grid-column: span 4

  .copyright

    +adapt(1024px)
      grid-column: 1 / span 12

</style>
