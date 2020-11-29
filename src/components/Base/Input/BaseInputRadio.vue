<template>
  <label :for="props.id" class="BaseInputRadio">
    <input
      :id="props.id"
      class="BaseInputRadio__radio"
      type="radio"
      :value="props.value"
      v-model="selected"
    />
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from "vue";

interface Props {
  value: string;
  id: number;
  selectedvalue: string;
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
    selectedvalue: {
      type: String,
      required: true,
    },
  },
  emits: ["change-radio"],
  setup(props: Props, context: SetupContext) {
    const selected = computed({
      get: () => {
        return props.selectedvalue;
      },
      set: () => context.emit("change-radio"),
    });

    return {
      props,
      selected,
    };
  },
});
</script>

<style lang="scss" scoped>
.Base__InputRadio--hidden {
  display: none;
}
</style>
