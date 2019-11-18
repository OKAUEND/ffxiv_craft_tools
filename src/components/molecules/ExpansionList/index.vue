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
</style>