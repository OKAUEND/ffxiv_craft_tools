<template>
  <div class="CategoryList__Detail">
    <radio-buttom-label
      v-bind:ClassStateObject="CategoryState"
      v-bind:value="value"
      v-on:change="emitMethod"
    >
      <template v-slot:label>
        <atom-image
          v-if="CategoryState.isIcon"
          :path="CategoryState.Label"
          :comment="''"
        />
        <template v-else>{{ CategoryState.Label }}</template>
      </template>
    </radio-buttom-label>
  </div>
</template>

<script>
import CategoriesListBase from "./CategoriesListBase.js";
import AtomImage from "@/components/atoms/Image/ImageMedium.vue";
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
    AtomImage,
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
.CategoryList__Detail {
  max-width: 65px;
  max-height: 40px;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
