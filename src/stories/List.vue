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
  props: {
    list: Array,
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
