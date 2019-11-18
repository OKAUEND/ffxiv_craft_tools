<template>
  <radio-buttom-label
    v-on:change="emitFunc"
  ></radio-buttom-label>
</template>

<script>
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
  name: "ExpansionList"
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