<script>
import { defineComponent } from "vue";
import Search from "@/stories/Search.vue";
import Sort from "@/stories/Sort.vue";

export default defineComponent({
  components: { Sort, Search },
})
</script>

<template>
  <Search></Search>

  <Sort></Sort>
</template>

<style scoped lang="scss">
</style>
