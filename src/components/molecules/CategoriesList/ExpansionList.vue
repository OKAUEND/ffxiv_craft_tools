<template>
  <radio-buttom-label
    v-bind:ClassStateObject="CategoryState"
    v-bind:value="value"
    v-on:change="emitMethod"
  ></radio-buttom-label>
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
//拡張パックを示すボタンは独自デザインにしたいので、ここで指定する
.Expansion_area {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 90px;
  line-height: 60px;
  text-align: center;
  font-size: 25px;
  color: #faebd7;
  background-color: #131212;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 90px;
    height: 60px;
    top: 0px;
    left: 0px;
    transition: opacity all 300ms 0s ease;
    opacity: 0;
  }
  &._AAR::after {
    border-left: 5px solid #85d2ff;
  }
  &._HEV::after {
    border-left: 5px solid #325ccf;
  }
  &._STB::after {
    border-left: 5px solid #cf3232;
  }
  &._SHB::after {
    border-left: 5px solid #6c2fce;
  }
  &.Expansion_radio--checkmark {
    &::after {
      opacity: 1;
    }
  }
}
</style>
