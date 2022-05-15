<template lang="html">
  <div :class="[ collapsed ? 'collapsed' : 'expanded', variant ]" class="fact">
    <div class="content">
      <p class="subtitle caption":class="'text-tertiary-' + variant">Quick fact #{{ id }}</p>
      <p class="title heading-3":class="'text-secondary-' + variant">{{ title }}</p>
      <div class="desc body" :class="'text-quaternary-' + variant" v-html="desc"></div>
    </div>
    <div @click="toggleFact" class="action">
      <SuperButton v-if="collapsed" variant="tertiary oblivion" icon="#chevron-down-20">Expand</SuperButton>
      <SuperButton v-else variant="tertiary oblivion" icon="#chevron-up-20">Collapse</SuperButton>
    </div>
  </div>
</template>

<script>
  import SuperButton from '@/components/SuperButton.vue'

  export default {
    data() {
      return {
        collapsed: true
      }
    },

    props: {
      variant: { type: String, default: '', required: true },
      id: { type: String, default: '' },
      title: { type: String, default: '', required: true },
      desc: { type: String, default: '', required: true }
    },

    methods: {
      toggleFact: function() {
        this.collapsed = !this.collapsed
      },
      collapseFact: function() {
        this.collapsed = true
      },
      expandFact: function() {
        this.collapsed = false
      }
    },

    components: {
      SuperButton
    }
  }
</script>