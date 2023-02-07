<script>
import { defineComponent } from "vue";
import Search from "@/stories/Search.vue";
import Sort from "@/stories/Sort.vue";
import List from "@/stories/List.vue";

export default defineComponent({
  components: { List, Sort, Search },
  data() {
    return {
      list: [
        {
          id: 1,
          url: 'https://m.media-amazon.com/images/M/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_QL75_UX280_CR0,3,280,414_.jpg',
          name: 'Menu',
          genre: 'Comedy',
          year: 2004,
        },
        {
          id: 2,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 3,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 4,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 5,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 6,
          url: 'https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,414_.jpg',
          name: 'Babylon',
          genre: 'Adventure',
          year: 1990,
        },
        {
          id: 7,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 8,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
      ]
    }
  }
})
</script>

<template>
  <Search></Search>

  <Sort :list="list"></Sort>

  <List :list="list"></List>
</template>

<style scoped lang="scss">
</style>
