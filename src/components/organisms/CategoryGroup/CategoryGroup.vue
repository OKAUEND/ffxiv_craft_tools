<template>
  <div class="Category">
    <medium-accordion>
      <template v-slot:Text>
        <slot></slot>
      </template>
      <template v-slot:Child>
        <categories-list
          v-for="(item, key) in Categories"
          v-bind:key="key"
          v-bind:category="item"
          v-bind:value="SelectedValue"
          v-on:change="onExpasionButtomClick"
        ></categories-list>
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

  &__List {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    &.--Opend {
      max-height: 150px;
      transition: max-height 0.25s ease-in;
    }
  }
}
</style>
