<template lang="html">
  <div>
    <h1>Shop</h1>
  </div>
</template>

<script>
  import { NotionRenderer, getPageBlocks } from "vue-notion";

  export default {
    components: { NotionRenderer },
    data: () => ({ blockMap: null }),
    async created() {
      // get Notion blocks from the API via a Notion pageId
      this.blockMap = await getPageBlocks("8a783ae641664d0c9841967fe75d3f89");
    },
  }
</script>