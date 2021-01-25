<template>
  <input v-model="propsModelValue" type="number" maxlength="3" />
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from "vue";

interface Input {
  modelValue: number;
}

export default defineComponent({
  name: "BaseInputNumber",
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ["input"],
  setup(props: Input, context: SetupContext) {
    const propsModelValue = computed({
      get: () => {
        return props.modelValue;
      },
      set: (inputValue: number) => {
        context.emit("input", inputValue);
      },
    });

    return {
      propsModelValue,
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
