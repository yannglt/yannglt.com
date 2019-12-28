<template lang="html">
  <footer>
    <div class="container">
      <div class="footer__section about-me">
        <p class="footer__title">About me</p>
        <div class="footer__body">
          <p>Product designer based in Paris,  currently working at <a href="https://source.paris/" target="_blank">Source</a>. <br>Human who likes chocolate, dogs and design operations, but must of all someone with a passion for why and how things are designed.</p>
          <p><a href="https://www.hetic.net/" target="_blank">HETIC</a> graduate (P2019) • <a href="https://synerghetic.net/" target="_blank">Synerg’hetic</a> alumnus</p>
        </div>
      </div>
      <div class="links">
        <div class="footer__section follow-work">
          <p class="footer__title">Follow my work</p>
          <div class="footer__body">
            <ul>
              <li><a href="https://medium.com/@yannglt" target="_blank">Stories on Medium <img src="~/assets/images/external-link.svg"></a></a></li>
              <li><a href="https://www.instagram.com/ynngllt/" target="_blank">Journey on Instagram <img src="~/assets/images/external-link.svg"></a></a></li>
              <li><a href="https://dribbble.com/yannglt" target="_blank">WIPs on Dribbble <img src="~/assets/images/external-link.svg"></a></a></li>
              <li><a href="https://www.behance.net/yannglt/" target="_blank">Case studies on Behance <img src="~/assets/images/external-link.svg"></a></a></li>
            </ul>
          </div>
        </div>
        <div class="footer__section get-in-touch">
          <p class="footer__title">Get in touch</p>
          <div class="footer__body">
            <ul>
              <li><a href="https://twitter.com/yannglt" target="_blank">DMs are open on Twitter <img src="~/assets/images/external-link.svg"></a></li>
              <li>Work: <a href="mailto:super-project@yannglt.com">super-project@yannglt.com</a></li>
              <li>Say bonjour: <a href="mailto:hello@yannglt.com">hello@yannglt.com</a></li>
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

    +adapt(1440px)
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

    .footer

      &__title
        color: #F5F9FF
        font-family: GT America Mono
        font-size: 13px
        font-weight: 700
        letter-spacing: 1.5px
        line-height: 24px
        text-transform: uppercase

        margin-bottom: 13px

      &__body

        p:last-of-type, li:last-of-type
          margin-bottom: 0

        p, li
          color: rgba(#F5F9FF, 0.84)

        li
          margin-bottom: 16px
          line-height: 20px

          a
            text-decoration: none

            img
              transform: translateY(4px)

    .about-me a, .get-in-touch li:nth-of-type(2) a, .get-in-touch li:nth-of-type(3) a
      text-decoration: none
      position: relative

      &::after
        content: ''
        position: absolute
        left: 0
        bottom: -2px
        height: 1px
        width: 100%
        background-color: rgba(#F5F9FF, 0.4)

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
    display: flex
    align-items: center
    transform: translateX(-11px)

    p
      color: rgba(#F5F9FF, 0.84)
      font-size: 13px
      line-height: 20px
      letter-spacing: 0.1px

      margin-bottom: 0

    +adapt(1024px)
      grid-column: 1 / span 12

    span
      height: 4px
      width: 4px
      background-color: rgba(#F5F9FF, 0.16)
      border-radius: 50%
      margin-right: 8px

</style>
