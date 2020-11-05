<template>
  <button :class="BoderRadiusMode" @click="onClickButton">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

interface Props {
  radiusmode: number;
}
export default defineComponent({
  props: {
    radiusmode: {
      type: Number,
      default: 0,
    },
  },
  emits: ["click"],
  setup(props: Props, context: SetupContext) {
    const onClickButton = () => {
      context.emit("click");
    };

    return {
      onClickButton,
    };
  },
});
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
