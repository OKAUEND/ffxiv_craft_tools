<template>
  <input type="radio" :id="id" :value="propsValue" @change="propsValue" />
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
    }
  }
};
</script>

<style lang="scss" scoped>
.input-Radio {
  &--hidden {
    display: none;
  }
}
</style>
