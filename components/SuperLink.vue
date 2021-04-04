<template lang="html">
  <component :is="'a'" :href="href" :class="variant" class="link" >
    <p v-if="this.$slots.default"><slot/></p>
    <svg v-if="icon" class="icon" aria-hidden="true" focusable="false">
      <use :xlink:href="require('@/static/icons/sprite.svg')+icon"></use>
    </svg>
  </component>
</template>

<script>
  export default {
    props: {
      href: { type: String, default: null },
      variant: { type: String, default: '' },
      icon: { type: String }
    }
  }
</script>