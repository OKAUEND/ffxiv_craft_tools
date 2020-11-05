<template>
  <button class="Atom__SmallButton" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import Base from "./Base";
export default {
  mixins: [Base],
};
</script>

<style lang="scss" scoped>
.Atom__SmallButton {
  height: 20px;
  width: 20px;
  background-color: transparent;
  &:hover {
    background-color: $palette_orange;
    transition: background-color 500ms;
  }
}
</style>
