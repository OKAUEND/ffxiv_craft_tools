<template>
  <radio-buttom-label
    v-bind:ClassStateObject="CategoryState"
    v-bind:value="value"
    v-on:change="emitMethod"
  ></radio-buttom-label>
</template>

<script>
import RadioButtomLabel from "@/components/molecules/RadioButtomLabel/index.vue";
import {
  IconState,
  JobState,
  StringState,
  LevelState
} from "@/components/molecules/CategoriesList/CategoryState.js";
export default {
  name: "CategoriesList",
  components: {
    RadioButtomLabel
  },
  props: {
    category: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    CategoryState: {
      get() {
        switch (this.category.type) {
          case "Level":
            return LevelState.create(this.category);
          case "Job":
            return JobState.create(this.category);
          case "Equipped":
            return IconState.create(this.category);
          case "Master":
            return StringState.create(this.category);
          default:
            break;
        }
      }
    }
  },
  methods: {
    emitMethod(value) {
      return this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.category-area-image {
  position: relative;
  display: inline-block;
  height: 40px;
  width: 40px;

  &.Icon-radio-checkmark {
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

.category-area-Normal {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 65px;
  text-align: center;
  line-height: 30px;
  background-color: #131212;
  color: #faebd7;
  border-radius: 2px;

  &.Normal-radio-checkmark {
    &::before {
      content: "";
      display: block;
      position: absolute;
      background: #5a5a5a3a;
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