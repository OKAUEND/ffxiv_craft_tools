<template>
  <input
    class="Atom__Radio--hidden"
    type="radio"
    :id="id"
    :value="inputValue"
    v-model="propsValue"
  />
</template>

<script>
import InputBase from "./Base.vue";
export default {
  extends: InputBase,
  name: "InputRadio",
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    inputValue: {
      type: String,
      required: true
    }
  },
  model: {
    prop: "model",
    event: "change"
  },
  computed: {
    isChecked() {
      return this.value === this.model;
    }
  },
  methods: {
    onRadioClick() {
      this.propsValue = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.Atom__Radio--hidden {
  display: none;
}
</style>
