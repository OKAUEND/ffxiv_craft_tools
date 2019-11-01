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
  StringState,
  LevelState
} from "@/components/molecules/CategoriesList/CategoryState.js";
export default {
  name: "CategoriesList",
  components: {
    RadioButtomLabel
  },
  props: {
    typecode: {
      type: String,
      required: true
    },
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
        switch (this.typecode) {
          case "Level":
            return LevelState.create(this.category);
          case "job":
            return JobIcon.create(this.category);
          case "Equipped":
            return IconState.create(this.category);
          case "Secretbook":
            return StringState.create(this.category);
          default:
            break;
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>