<template>
  <section class="Expansion">
    <span class="Expansion_HeadText" v-on:click="switchLabelClicked" v-bind:class="isOpen">
      <slot>テスト</slot>
    </span>
    <div class="Expansion_List" v-bind:class="isOpen">
      <expansion-item
        v-for="(item, key) in Categories"
        v-bind:key="key"
        v-bind:category="item"
        v-bind:value="SelectedValue"
        v-on:change="onExpasionButtomClick"
        class="Expansion_area"
      ></expansion-item>
    </div>
  </section>
</template>

<script>
import ExpansionItem from "@/components/molecules/CategoriesList/ExpansionList.vue";
import CategoryGroupBase from "./CategoryGroupBase.js";
export default {
  name: "ExpansionGroup",
  components: {
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
.Expansion_Group {
  box-sizing: border-box;
  margin: 5px 0 0px 0;
  padding: 5px 0 5px 10px;
  @media screen and (min-width: 481px) {
    margin: 0;
    padding: 0;
  }
}

.Expansion_HeadText {
  @media screen and (min-width: 481px) {
    display: none;
  }
  position: relative;
  color: #f8f9fa;
  font-size: 20px;
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

  @media screen and (min-width: 481px) {
    display: none;
  }
}

.Expansion_List {
  @media screen and (max-width: 480px) {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    &.isOpen {
      max-height: 150px;
      transition: max-height 0.25s ease-in;
    }
  }
}

.Expansion_area {
  margin-right: 5px;
}
</style>
