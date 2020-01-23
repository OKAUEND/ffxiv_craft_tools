<template>
  <button @click="onClick" :class="BoderRadiusMode">
    <slot></slot>
  </button>
</template>

<script>
import Base from "./Base";
export default {
  mixins: [Base],
  props: {
    RadiusMode: {
      type: Number,
      default: 0
    }
  },
  computed: {
    BoderRadiusMode() {
      switch (this.RadiusMode) {
        case 1:
          return "Atom__FormButton--RightRadius";
        case 2:
          return "Atom__FormButton--LeftRadius";
        default:
          return "Atom__FormButton";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin Base {
  font-size: $font_SecondaryMedium;
  min-width: 15px;
  background-color: $palette_bright-gray;
  &:hover {
    background-color: $palette_gray;
    transition: background-color 500ms;
  }
}

.Atom__FormButton {
  @include Base;

  &--RightRadius {
    @include Base;
    border-radius: 0px 5px 5px 0px;
  }

  &--LeftRadius {
    @include Base;
    border-radius: 5px 0px 0px 5px;
  }
}
</style>
