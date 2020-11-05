<template>
  <input
    :id="props.id"
    class="Base__InputRadio--hidden"
    type="radio"
    :value="props.value"
    @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

interface Props {
  value: string;
  id: number;
}

export default defineComponent({
  name: "BaseInputRadio",

  props: {
    value: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },

  setup(props: Props, context: SetupContext) {
    props.value;
    const onInput = (event: string) => {
      context.emit("input", event);
    };

    return {
      props,
      onInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.Base__InputRadio--hidden {
  display: none;
}
</style>
