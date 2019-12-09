<template>
  <div class="Category">
    <atom-button
      class="Category__HeadText --LabelStyle"
      v-on:click="switchLabelClicked"
      v-bind:class="isOpen"
    >
      <template v-slot:text>
      <slot></slot>
      </template>
    </atom-button>
    <div class="Category__List" v-bind:class="isOpen">
      <categories-list
        v-for="(item, key) in Categories"
        v-bind:key="key"
        v-bind:category="item"
        v-bind:value="SelectedValue"
        v-on:change="onExpasionButtomClick"
      ></categories-list>
    </div>
  </div>
</template>

<script>
import AtomButton from "@/components/atoms/Button/Button.vue";
import CategoriesList from "@/components/molecules/CategoriesList/CategoriesList.vue";
import CategoryGroupBase from "./CategoryGroupBase.js";
import { Store } from "../CategoryGroup/CategoryStore.js";
export default {
  components: {
    AtomButton,
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

  &__HeadText {
    position: relative;
    color: #f8f9fa;
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 10px;
      height: 10px;
      top: 25%;
      right: 10%;
      border-right: 2px solid #f8f9fa;
      border-bottom: 2px solid #f8f9fa;
      transition: all 300ms 0s ease;
      transform: rotate(-45deg);
    }

    &.--Opend::after {
      transform: rotate(45deg);
    }
  }
}
</style>
