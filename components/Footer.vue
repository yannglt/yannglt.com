<template lang="html">
  <div class="footer">
    <div class="container">
      <div class="club">
        <p class="clubTitle">Join the club, <span class="line-breaker"><br /></span>get (ir)regular updates</p>
        <p class="clubDesc">Every two weeks or so I try to gather things that inspire me or tick my curiosity. <span class="line-breaker"><br /></span>Articles, essays and notes are also shared on the list one week before public.</p>
        <form name="thunderstorm-newsletter" netlify>
          <div class="clubFormFirstname">
            <label for="firstname">Your firstname</label>
            <input type="text" name="firstname" id="firstname" placeholder="Anakin">
          </div>
          <div class="clubFormEmail">
            <label for="email">Your email</label>
            <input type="email" name="email" id="email" placeholder="a.skywalker@email.com">
          </div>
          <button type="submit">
            <svg class="icon" aria-hidden="true" focusable="false"><use xlink:href="icons/sprite.svg#add-circle-24"></use></svg>Join the club
          </button>
        </form>
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
            <li><a href="/works">Discover my work</a></li>
            <li><a href="/process">Learn about my process</a></li>
            <li><a href="/about">Know more about me</a></li>
            <li><a href="/contact">Get in touch</a></li>
          </ul>
        </div>
        <div class="footer-follow">
          <p class="footer-followTitle">Follow my work</p>
          <ul class="footer-followLinks">
            <li><a href="https://twitter.com/yannglt">Thoughts on Twitter</a></li>
            <li><a href="https://dribbble.com/yannglt">WIPs on Dribbble</a></li>
            <li><a href="/feed">RSS feed</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>