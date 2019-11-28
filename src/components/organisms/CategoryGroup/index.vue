<template>
  <div class="Category_Group">
    <h3
      class="Category_HeadText"
      v-on:click="switchLabelClicked"
      v-bind:class="isOpen"
    >
      <slot></slot>
    </h3>
    <div class="Category_List" v-bind:class="isOpen">
      <categories-list
        v-for="(item, key) in Categories"
        v-bind:key="key"
        v-bind:category="item"
        v-bind:value="SelectedValue"
        v-on:change="onExpasionButtomClick"
        class="Category_Area"
      ></categories-list>
    </div>
  </div>
</template>

<script>
import CategoriesList from "@/components/molecules/CategoriesList/index.vue";
import { Store } from "../CategoryGroup/CategoryStore.js";
export default {
  components: {
    CategoriesList
  },
  props: {
    Categories: {
      type: Array,
      required: true
    },
    isStoreUse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      StoreObject: Store.state,
      SelectRadioValue: "",
      isLabelClick: false
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
    },
    isOpen() {
      return {
        isOpen: this.isLabelClick
      };
    }
  },
  methods: {
    onExpasionButtomClick(value) {
      this.SelectedValue = value;
      return this.$emit("change", value);
    },
    switchLabelClicked() {
      this.isLabelClick = !this.isLabelClick;
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
  color: #f8f9fa;
}

.Category_Group {
  width: 40%;
  background-color: #131212;
  margin: 5px 0 5px 0;
  padding: 5px 0 5px 10px;
}

.Category_List {
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
  &.isOpen {
    max-height: 150px;
    transition: max-height 0.25s ease-in;
  }
}

.Category_HeadText {
  position: relative;
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

  &.isOpen::after {
    transform: rotate(45deg);
  }
}

.Category_Area {
  margin-right: 5px;
}
</style>
