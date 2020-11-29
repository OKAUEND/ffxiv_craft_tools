<template>
  <article class="CategoryContent">
    <!-- <medium-accordion :isResponsiveMode="true"> -->
    <!-- <template v-slot:Text> Expansion </template> -->
    <!-- <template v-slot:Child> -->
    <div class="CategoryContent__List">
      <template v-for="(item, key) in categories" :key="key">
        <content-list
          :content="item"
          :selectRadioValue="selectRadioValue"
          @change="onClickChild"
        />
      </template>
    </div>
    <!-- </template> -->
    <!-- </medium-accordion> -->
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

interface Props {
  categories: CraftContent[];
}

interface Crafter {
  name: string;
  jpname: string;
  type: string;
  order: number;
  imageurl: string;
}

interface Level {
  name: string;
  type: string;
  order: number;
  upperlevel: number;
  lowerlevel: number;
}

type CraftContent = Crafter | Level;
// import MediumAccordion from "@/components/molecules/Accordion/Accordion.vue";
import ContentList from "./ContentList.vue";
export default defineComponent({
  name: "CategoryContent",
  components: {
    // MediumAccordion,
    ContentList,
  },
  props: {
    categories: {
      type: Array as PropType<CraftContent[]>,
      required: true,
    },
  },
  setup(props: Props) {
    const selectRadioValue = ref("Expansion2");

    const isAccordionOpen = ref(false);

    const onClickChild = (emitvalue: CraftContent) => {
      selectRadioValue.value = emitvalue.name;
    };

    return {
      selectRadioValue,
      isAccordionOpen,
      props,
      onClickChild,
    };
  },
});
</script>

<style lang="scss" scoped>
.CategoryContent {
  box-sizing: border-box;
  margin: 5px 0 0px 0;
  padding: 5px 10px 5px 10px;
  background-color: #181818;
  @media screen and (min-width: 481px) {
    margin: 0;
    padding: 0;
  }

  .CategoryContent__List {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
