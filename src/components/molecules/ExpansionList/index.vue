<template>
  <radio-buttom-label
    v-bind:ClassStateObject="ExpansionState"
    v-bind:value="SelectValue"
    v-on:change="emitFunc"
  ></radio-buttom-label>
</template>

<script>
import {
  ARealReborn,
  Heavensward,
  Stormblood,
  Shadowbringers
} from "@/components/molecules/ExpansionList/ExpansionState.js";
import RadioButtomLabel from "@/components/molecules/RadioButtomLabel/index.vue";
export default {
  name: "ExpansionItem",
  components: {
    RadioButtomLabel
  },
  props: {
    Expansion: {
      type: Object,
      required: true
    },
    SelectValue: {
      type: String,
      required: true
    }
  },
  computed: {
    ExpansionState: {
      get() {
        switch (this.Expansion.version) {
          case 2:
            return ARealReborn.create(this.Expansion);
          case 3:
            return Heavensward.create(this.Expansion);
          case 4:
            return Stormblood.create(this.Expansion);
          case 5:
            return Shadowbringers.create(this.Expansion);
          default:
        }
      }
    }
  },
  methods: {
    emitFunc(value) {
      return this.$emit("change", value);
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
    transition: all 300ms 0s ease;
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
