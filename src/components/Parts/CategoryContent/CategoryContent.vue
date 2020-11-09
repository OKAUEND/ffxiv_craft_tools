<template>
  <article class="CategoryContent">
    <!-- <medium-accordion :isResponsiveMode="true"> -->
    <!-- <template v-slot:Text> Expansion </template> -->
    <!-- <template v-slot:Child> -->
    <div class="CategoryContent__List">
      <template v-for="(item, key) in categories" :key="key">
        <content-list :content="item" :value="selectRadioValue" />
      </template>
    </div>
    <!-- </template> -->
    <!-- </medium-accordion> -->
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

interface Props {
  categories: Content[];
}

interface Content {
  name: string;
  type: string;
  order: number;
  imageurl: string;
}

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
      type: Array as PropType<Content[]>,
      required: true,
    },
  },

  setup(props: Props) {
    console.table(props.categories);
    const selectRadioValue = ref("Expansion2");

    const isAccordionOpen = ref(false);

    return {
      selectRadioValue,
      isAccordionOpen,
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
