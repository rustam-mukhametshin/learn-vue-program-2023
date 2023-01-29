<template>
  <div class="search">
    <p class="search__logo">Logo</p>
    <h1 class="search__header">FIND YOUR MOVIE</h1>
    <input class="search__input" type="text" name="search" placeholder="search">
    <button class="search__btn" v-on:click="doSearch">SEARCH</button>
    <div class="search__search-by">
      <span class="search__text">SEARCH BY</span>
      <div class="search__radio-group">
        <label for="search__title">
          <input type="radio" id="search-by-title" name="search-by">
          TITLE
        </label>
        <label for="search__genre">
          <input type="radio" id="search-by-genre" name="search-by">
          GENRE
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: function () {
    return {
      doSearch: () => {
        console.log('search')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
  column-gap: 1em;
  row-gap: 1em;

  & .search__logo, & .search__header {
    grid-column: 1 / 4;
  }

  & .search__input {
    grid-column: 1 / 3;
  }

  & .search__btn {

  }

  & .search__search-by {
    display: grid;
    align-items: center;
    grid-auto-flow: column;

    & .search__text {

    }

    & .search__radio-group {
      display: inline-block;
    }
  }
}
</style>
