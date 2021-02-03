<template>
  <button class="BaseButtonGreen" @click="onClick" :disabled="isDisable">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from "vue";
interface Prop {
  disable: boolean;
}
export default defineComponent({
  props: {
    disable: {
      type: Boolean,
      defalut: true,
    },
  },
  setup(props: Prop, context: SetupContext) {
    const isDisable = computed(() => {
      return props.disable;
    });

    const onClick = () => {
      context.emit("click");
    };

    return {
      isDisable,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.BaseButtonGreen {
  @include ButtonBaseSize;
  background-color: $palette_bright-green;
  color: $palette_white;
  &:hover {
    background-color: $palette_green;
    transition: background-color 500ms;
  }
}
</style>
