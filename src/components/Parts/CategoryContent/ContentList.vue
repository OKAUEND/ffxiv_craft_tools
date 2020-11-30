<template>
  <div class="ContentList">
    <base-input-radio
      :id="props.content.name"
      :value="RadioName"
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
  upperlevel?: number;
  lowerlevel?: number;
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
      switch (props.content.type) {
        case "level":
          return `${props.content.lowerlevel} - ${props.content.upperlevel}`;
        default:
          return props.content.jpname;
      }
    });

    const RadioName = computed(() => {
      return props.content.name;
    });

    return {
      onRadioClick,
      props,
      objectJapanName,
      RadioName,
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
