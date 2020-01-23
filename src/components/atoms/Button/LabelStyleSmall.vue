<template>
  <button @click="onClick" class="Atom__LabelStyle--Small" :class="isClick">
    <slot></slot>
  </button>
</template>

<script>
import Base from "./LabelStyleBase";
export default {
  mixins: [Base]
};
</script>

<style lang="scss" scoped>
.Atom__LabelStyle--Small {
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;
  color: $palette_white;
  background-color: transparent;
  font-size: $font_Small;
  font-weight: bold;
  text-align: left;
}
</style>
