<template lang="html">
  <div class="button primary">
    <p class="label"><slot>Button</slot></p>
    <svg class="icon" aria-hidden="true" focusable="false">
      <use xlink:href="@/static/icons/sprite.svg#arrow-forward-20"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      icon: { type: String, default: '', required: true },
    },

    data: function () {
      return { }
    }
  }
</script>