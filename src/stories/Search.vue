<template>
  <div class="search">
    <div class="search__bg-image"></div>
    <div class="search__body">
      <div class="search__logo"><img src="../assets/Netflix_Logo_PMS.png" alt="netflix"></div>
      <h1 class="search__header">FIND YOUR MOVIE</h1>
      <input class="search__input" type="text" name="search" placeholder="Search">
      <button class="search__btn" v-on:click="doSearch">SEARCH</button>
      <div class="search__search-by">
        <span class="search__text">SEARCH BY</span>
        <div class="search__radio-group">
          <input type="radio" id="search-by-title" name="search-by">
          <label for="search-by-title">TITLE</label>
          <input type="radio" id="search-by-genre" name="search-by">
          <label for="search-by-genre">GENRE</label>
        </div>
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
  & .search__bg-image {
    background-image: url("../assets/popsignuptwoweeks-perspective_alpha_website_large.jpg");
    position: absolute;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    filter: blur(4px) brightness(0.5)
  }
}

.search__body {
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
  column-gap: 1em;
  row-gap: 1em;
  padding: 2em 10em;

  & .search__logo {
    img {
      width: 100px;
    }
  }

  & .search__logo, & .search__header {
    grid-column: 1 / 4;
  }

  & .search__input {
    grid-column: 1 / 3;
    border: none;
    background: var(--bg-clr);
    padding: 5px;
  }

  & .search__btn {
    border: none;
    background-color: var(--red);
  }

  & .search__search-by {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-column-start: 1;
    grid-column-end: 2;

    & .search__text {

    }

    & .search__radio-group {
      display: grid;
      grid-auto-flow: column;

      input[type="radio"] {
        opacity: 0.01;
        display: none;
      }

      input[type='radio']:checked + label {
        background-color: var(--red);
      }

      label {
        cursor: pointer;
        padding: 5px;
        color: white;
        transition: color 200ms, background 200ms;
        background-color: var(--bg-clr);
        text-align: center;

        &:nth-child(2) {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }

        &:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }

    }
  }
}
</style>
