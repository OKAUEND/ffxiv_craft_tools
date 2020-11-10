<template>
  <div class="ContentList">
    <label class="ContentList__Item">
      {{ props.content.jpname }}
      <base-input-radio
        :id="props.content.order"
        :value="props.content.name"
        @change-radio="onRadioClick"
      ></base-input-radio>
    </label>
  </div>
</template>

<script lang="ts">
import BaseInputRadio from "@/components/Base/Input/BaseInputRadio.vue";
import { defineComponent, PropType, SetupContext } from "vue";

interface Props {
  content: Content;
  value: string;
}

interface Content {
  name: string;
  type: string;
  order: number;
  imageurl: string;
}

export default defineComponent({
  name: "ContentList",

  components: {
    BaseInputRadio,
  },

  props: {
    content: {
      type: Object as PropType<Content>,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },

  emits: ["change"],
  setup(props: Props, context: SetupContext) {
    // const InputForID = computed(() => {
    //   props.content.name;
    // });
    const onRadioClick = () => {
      context.emit("change", props.content);
    };

    return {
      onRadioClick,
      props,
      // InputForID,
    };
  },
});
</script>

<style lang="scss" scoped>
.ContentList {
  margin-bottom: 5px;
  width: 100%;
  @media screen and (min-width: 481px) {
    margin-bottom: 0px;
    margin-right: 5px;
    width: 90px;
  }
}
</style>
