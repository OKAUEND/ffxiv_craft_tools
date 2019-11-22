<template>
  <section class="Expansion">
    <expansion-item
      v-for="(item, key) in Expansions"
      v-bind:key="key"
      v-bind:Expansion="item"
      v-bind:SelectValue="SelectedValue"
      v-on:change="onExpasionButtomClick"
      class="Expansion_area"
    ></expansion-item>
  </section>
</template>

<script>
import ExpansionItem from "@/components/molecules/ExpansionList/index.vue";
export default {
  name: "ExpansionGroup",
  components: {
    ExpansionItem
  },
  props: {
    Expansions: {
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
  background-color: #202020;
}
.Expansion_area {
  margin-right: 5px;
}
</style>
