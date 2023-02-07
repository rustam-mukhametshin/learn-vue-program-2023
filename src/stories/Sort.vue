<template>
  <div class="sort">
    <div class="sorting__total">
      <p>{{ list.length }} movie found</p>
    </div>
    <div class="sort__sort_by">
      <span class="sort__text">{{ uppercase('sort by') }}</span>
      <div class="sort__radio-group">
        <input type="radio" id="sort-by-title" name="sort-by" checked>
        <label for="sort-by-title">{{ uppercase('release date') }}</label>
        <input type="radio" id="sort-by-genre" name="sort-by">
        <label for="sort-by-genre">{{ uppercase('rating') }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import uppercase from "@/stories/mixins/uppercase";

export default {
  name: "Sort",
  mixins: [uppercase],
  props: {
    list: Array,
  }
}
</script>

<style scoped lang="scss">
.sort {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  padding: 1em 3em;
  background-color: #555555;

  & .sorting__total {
    color: white;
    font-weight: 600;
    font-size: 20px;
  }

  & .sort__sort_by {
    display: grid;
    align-items: center;
    grid-auto-flow: column;


    & .sort__radio-group {
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
