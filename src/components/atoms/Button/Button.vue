<template>
  <button v-on:click="onClick">
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    onClick() {
      return this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  margin: 0;
  padding: 0;
  outline: 0;
}

.--LabelStyle {
  width: 100%;
  text-align: left;
}
</style>