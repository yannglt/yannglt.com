<template lang="html">
  <component :is="'a'" :href="href" :class="variant" class="link" >
    <span v-if="this.$slots.default"><slot/></span>
    <svg v-if="icon" class="icon" aria-hidden="true" focusable="false">
      <use :xlink:href="require('@/static/icons/sprite.svg')+icon"></use>
    </svg>
  </component>
</template>

<script>
  export default {
    props: {
      href: { type: String, default: null },
      variant: { type: String, default: '', required: 'true' },
      icon: { type: String }
    }
  }
</script>