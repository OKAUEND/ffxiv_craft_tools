<template>
  <radio-buttom-label
    v-bind:ClassStateObject="CategoryState"
    v-bind:value="value"
    v-on:change="emitMethod"
  ></radio-buttom-label>
</template>

<script>
import CategoriesListBase from "./CategoriesListBase.js";
import RadioButtomLabel from "@/components/molecules/RadioButtomLabel/index.vue";
import {
  IconState,
  JobState,
  LevelState,
  ErrorState
} from "@/components/molecules/CategoriesList/CategoryState.js";
export default {
  name: "CategoriesList",
  mixins: [CategoriesListBase],
  components: {
    RadioButtomLabel
  },
  computed: {
    CategoryState: {
      get() {
        switch (this.category.type) {
          case "Level":
          case "Master":
            return LevelState.create(this.category);
          case "Job":
            return JobState.create(this.category);
          case "Equipped":
            return IconState.create(this.category);
          default:
            return ErrorState.create();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin category_margin {
  margin-right: 5px;
  margin-bottom: 5px;
}

.category-area__image {
  position: relative;
  display: inline-block;
  height: 40px;
  width: 40px;
  @include category_margin;

  &.Radio__Icon--checkmark {
    &::before {
      content: "";
      display: block;
      position: absolute;
      background: #33333380;
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10px;
      height: 22px;
      top: 2px;
      left: 30%;
      border: solid #3f74b1;
      border-width: 0 7px 7px 0;
      transform: rotate(45deg);
    }
  }
}

.category-area__Normal {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 65px;
  text-align: center;
  line-height: 30px;
  color: #f8f9fa;
  background-color: #2b2b2b;
  border-radius: 2px;
  @include category_margin;

  &.Radio__Normal--checkmark {
    &::before {
      content: "";
      display: block;
      position: absolute;
      background: #27272771;
      height: 30px;
      width: 65px;
      border-radius: 5px;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10px;
      height: 18px;
      top: -1px;
      left: 30%;
      border: solid #3f74b1;
      border-width: 0 7px 7px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
