<template>
  <article class="Expansion">
    <medium-accordion :isResponsiveMode="true">
      <template v-slot:Text>
        Expansion
      </template>
      <template v-slot:Child>
        <div class="Expansion__List">
          <expansion-item
            v-for="(item, key) in Categories"
            v-bind:key="key"
            v-bind:category="item"
            v-bind:value="SelectedValue"
            v-on:change="onExpasionButtomClick"
          >
          </expansion-item>
        </div>
      </template>
    </medium-accordion>
  </article>
</template>

<script>
import MediumAccordion from "@/components/molecules/Accordion/Accordion.vue";
import ExpansionItem from "@/components/molecules/CategoriesList/ExpansionList.vue";
import CategoryGroupBase from "./CategoryGroupBase.js";
export default {
  name: "ExpansionGroup",
  components: {
    MediumAccordion,
    ExpansionItem
  },
  mixins: [CategoryGroupBase],
  props: {
    Categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      SelectRadioValue: "Expansion2"
    };
  },
  computed: {
    SelectedValue: {
      set(value) {
        this.SelectRadioValue = value.ExpansionCode;
      },
      get() {
        return this.SelectRadioValue;
      }
    }
  },
  methods: {
    onExpasionButtomClick(value) {
      this.SelectedValue = value;
      return this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.Expansion {
  box-sizing: border-box;
  margin: 5px 0 0px 0;
  padding: 5px 10px 5px 10px;
  background-color: #181818;
  @media screen and (min-width: 481px) {
    margin: 0;
    padding: 0;
  }

  &__List {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
