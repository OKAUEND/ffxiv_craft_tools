<template>
  <button class="Atom__Button--green" @click="onClick">
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
.Atom__Button--green {
  @include ButtonBaseSize;
  background-color: $palette_bright-green;
  color: $palette_white;
  &:hover {
    background-color: $palette_green;
    transition: background-color 500ms;
  }
}
</style>
