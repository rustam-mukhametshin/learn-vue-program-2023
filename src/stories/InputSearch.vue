<template>
  <input v-on:keyup.enter="doSearch" class="search__input" type="text" name="search" placeholder="Search">
</template>

<script>
export default {
  name: "InputSearch"
}
</script>

<style scoped>

</style>
