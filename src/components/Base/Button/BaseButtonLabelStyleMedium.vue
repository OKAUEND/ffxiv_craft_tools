<template>
  <button class="Atom__LabelStyle--Medium" :class="isClick" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
import Base from "./LabelStyleBase";
export default {
  mixins: [Base],
};
</script>

<style lang="scss" scoped>
.Atom__LabelStyle--Medium {
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  color: $palette_white;
  background-color: transparent;
  font-size: $font_SecondaryMedium;
  font-weight: bold;
  text-align: left;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 25%;
    right: 10%;
    border-right: 2px solid $palette_white;
    border-bottom: 2px solid $palette_white;
    transition: all 300ms 0s ease;
    transform: rotate(-45deg);
  }

  &.--Clickble::after {
    transform: rotate(45deg);
  }
}
</style>
