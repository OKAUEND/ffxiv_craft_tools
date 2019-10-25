<template>
  <div>
    <radio-buttom-label
      v-bind:ClassStateObject="CategoryState"
      v-bind:class="CategoryState.Style"
      v-on:select-buttom-click="emitdata"
    ></radio-buttom-label>
  </div>
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
    }
  },
};
</script>

<style lang="scss" scoped>
</style>