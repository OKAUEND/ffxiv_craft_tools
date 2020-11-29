<template>
  <div class="ContentList">
    <base-input-radio
      :id="props.content.order"
      :value="props.content.name"
      :selectedvalue="props.selectRadioValue"
      @change-radio="onRadioClick"
    >
      {{ objectJapanName }}</base-input-radio
    >
  </div>
</template>

<script lang="ts">
import BaseInputRadio from "@/components/Base/Input/BaseInputRadio.vue";

import { computed, defineComponent, PropType, SetupContext } from "vue";

interface Props {
  content: Content;
  selectRadioValue: string;
}

interface Content {
  name: string;
  jpname: string;
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
    selectRadioValue: {
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

    const objectJapanName = computed(() => {
      return props.content.jpname;
    });

    return {
      onRadioClick,
      props,
      objectJapanName,
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
