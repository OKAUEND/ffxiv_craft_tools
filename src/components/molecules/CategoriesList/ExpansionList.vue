<template>
  <div class="Expansion__Detail">
    <radio-buttom-label
      v-bind:ClassStateObject="CategoryState"
      v-bind:value="value"
      v-on:change="emitMethod"
    >
      <template v-slot:label>
        {{ CategoryState.Label }}
      </template>
    </radio-buttom-label>
  </div>
</template>

<script>
import CategoriesListBase from "./CategoriesListBase.js";
import {
  ARealReborn,
  Heavensward,
  Stormblood,
  Shadowbringers,
  ErrorExpansion
} from "./ExpansionState.js";
import RadioButtomLabel from "@/components/molecules/RadioButtomLabel/index.vue";
export default {
  name: "ExpansionItem",
  mixins: [CategoriesListBase],
  components: {
    RadioButtomLabel
  },
  computed: {
    CategoryState: {
      get() {
        switch (this.category.version) {
          case 2:
            return ARealReborn.create(this.category);
          case 3:
            return Heavensward.create(this.category);
          case 4:
            return Stormblood.create(this.category);
          case 5:
            return Shadowbringers.create(this.category);
          default:
            return ErrorExpansion.create();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Expansion__Detail {
  margin-bottom: 5px;
}
</style>
