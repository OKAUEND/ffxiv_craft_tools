<template>
  <section class="Expansion">
    <atom-button class="Expansion__HeadText" v-on:click="switchLabelClicked" v-bind:class="isOpen">
      <template v-slot:text>Expansion</template>
    </atom-button>
    <div class="Expansion__List" v-bind:class="isOpen">
      <expansion-item
        v-for="(item, key) in Categories"
        v-bind:key="key"
        v-bind:category="item"
        v-bind:value="SelectedValue"
        v-on:change="onExpasionButtomClick"
      ></expansion-item>
    </div>
  </section>
</template>

<script>
import AtomButton from "@/components/atoms/Button/Button.vue";
import ExpansionItem from "@/components/molecules/CategoriesList/ExpansionList.vue";
import CategoryGroupBase from "./CategoryGroupBase.js";
export default {
  name: "ExpansionGroup",
  components: {
    AtomButton,
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
  background-color: #131212;
  @media screen and (min-width: 481px) {
    margin: 0;
    padding: 0;
  }

  &__HeadText {
    position: relative;
    color: #f8f9fa;
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    width: 100%;
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

    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  &__List {
    @media screen and (max-width: 480px) {
      max-height: 0;
      transition: max-height 0.15s ease-out;
      overflow: hidden;
      &.--Opend {
        max-height: 200px;
        transition: max-height 0.25s ease-in;
      }
    }
  }
}
</style>
