<template>
  <div>
    <h3><slot></slot></h3>
      <categories-list
        v-for="(item, key) in Categories"
        v-bind:key="key"
        v-bind:category="item"
        v-bind:value="SelectedValue"
        v-on:change="onExpasionButtomClick"
        class="Category_Area"
      ></categories-list>
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
      SelectRadioValue: ""
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
        let returnValue;
        if (this.isStoreUse) {
          returnValue = Store.loadSelectValue();
        } else {
          returnValue = this.SelectRadioValue;
        }
        return returnValue;
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
h3 {
  margin: 0;
  color: #f8f9fa;
}
.Category_Area {
  margin-right: 5px;
}
</style>
