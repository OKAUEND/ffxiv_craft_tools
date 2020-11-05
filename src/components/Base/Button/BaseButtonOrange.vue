<template>
  <button class="Atom__Button--orange" @click="onClick">
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
.Atom__Button--orange {
  @include ButtonBaseSize;
  background-color: $palette_bright-orange;
  &:hover {
    background-color: $palette_orange;
    transition: background-color 500ms;
  }
}
</style>
