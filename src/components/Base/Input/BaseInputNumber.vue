<template>
  <input :value="propsValue" type="number" maxlength="3" @input="onInput" />
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from "vue";

interface Input {
  value: number;
}

export default defineComponent({
  name: "BaseInputNumber",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  emits: ["input"],
  setup(props: Input, context: SetupContext) {
    const propsValue = computed(() => props.value);

    const onInput = (event: number) => {
      context.emit("input", event);
    };

    return {
      propsValue,
      onInput,
    };
  },

  computed: {},
});
</script>

<style lang="scss" scoped>
//後でリセットCSS導入したら消す部分
input {
  border: none;
  margin: 0;
  padding: 3px 5px 3px 5px;
  outline: 0;
  text-align: center;
}
//
.Input-Number {
  &__Counter {
    width: 50px;
    font-size: 20px;
  }
}
</style>
