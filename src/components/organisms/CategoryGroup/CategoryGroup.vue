<template>
  <div class="Category">
    <medium-accordion>
      <template v-slot:Text>
        <slot></slot>
      </template>
      <template v-slot:Child>
        <div class="Category__List">
          <categories-list
            v-for="(item, key) in Categories"
            v-bind:key="key"
            v-bind:category="item"
            v-bind:value="SelectedValue"
            v-on:change="onExpasionButtomClick"
          ></categories-list>
        </div>
      </template>
    </medium-accordion>
  </div>
</template>

<script>
import MediumAccordion from "@/components/molecules/Accordion/Accordion.vue";
import CategoriesList from "@/components/molecules/CategoriesList/CategoriesList.vue";
import CategoryGroupBase from "./CategoryGroupBase.js";
import { Store } from "../CategoryGroup/CategoryStore.js";
export default {
  components: {
    MediumAccordion,
    CategoriesList
  },
  mixins: [CategoryGroupBase],
  props: {
    isStoreUse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      StoreObject: Store.state
    };
  },
  computed: {
    SelectedValue: {
      set(value) {
        if (this.isStoreUse) {
          Store.storeRadioSelectValue(value.name);
        } else {
          this.SelectRadioValue = value.name;
        }
      },
      get() {
        if (this.isStoreUse) {
          return Store.loadSelectValue();
        } else {
          return this.SelectRadioValue;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Category {
  background-color: #131212;
  margin: 5px 0 5px 0;
  padding: 5px 10px 5px 10px;

  @media screen and(min-width:$breakpoint_tab_lower_limit ) {
    box-sizing: border-box;
    min-width: 250px;
  }

  &__List {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
