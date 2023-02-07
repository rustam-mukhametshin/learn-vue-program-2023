<script>
import { defineComponent } from "vue";
import Search from "@/stories/Search.vue";
import Sort from "@/stories/Sort.vue";
import List from "@/stories/List.vue";

export default defineComponent({
  components: { List, Sort, Search },
})
</script>

<template>
  <Search></Search>

  <Sort></Sort>

  <List></List>
</template>

<style scoped lang="scss">
</style>
