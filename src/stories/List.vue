<template>
  <div class="list">
    <div class="list__item" v-for="item in list">
      <img
          v-bind:src="item.url"
          v-bind:alt="item.name" loading="lazy">
      <div class="list__caption">
        <div>
          <div class="list__name">{{ item.name }}</div>
          <div class="list__genre">{{ item.genre }}</div>
        </div>
        <div class="list__year">{{ item.year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
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
          id: 2,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 2,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 2,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 2,
          url: 'https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,414_.jpg',
          name: 'Babylon',
          genre: 'Adventure',
          year: 1990,
        },
        {
          id: 2,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
        {
          id: 2,
          url: 'https://m.media-amazon.com/images/M/MV5BMGM5NzliYzUtYTQ0Zi00ODdjLThlZTMtY2JiY2RkYzhlMWE2XkEyXkFqcGdeQXVyMjAzODkzMTk@._V1_QL75_UY414_CR4,0,280,414_.jpg',
          name: 'Avatar 2',
          genre: 'Action & Adventure 2',
          year: 1990,
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  .list__item {
    padding: 4rem;
    display: flex;
    flex-direction: column;
  }

}
</style>
