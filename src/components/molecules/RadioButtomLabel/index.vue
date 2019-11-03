<template>
  <label v-bind:for="CategoryState.formID" v-bind:class="Stylies">
    <template v-if="CategoryState.isIcon">
      <img v-bind:src="CategoryImagePath" />
      </template>
    <template v-else>{{ CategoryState.Label }}</template>
    <input
      class="radio-hidden"
      type="radio"
      v-bind:id="CategoryState.formID"
      v-bind:value="CategoryState.Name"
      v-model="radioButtonValue"
    />
    </label>
</template>
<script>
export default {
  name: "RadioButtomLabel",
  props: {
    ClassStateObject: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    CategoryState: {
      get() {
        return this.ClassStateObject;
      }
    },
    CategoryImagePath: {
      get() {
        return this.CategoryState.Label;
      }
    },
    radioButtonValue: {
      set() {
        return this.$emit("change", this.CategoryState.fromSelectedData);
      },
      get() {
        return this.value;
    }
  },
  methods: {
    emitData() {
      return this.$emit("select-buttom-click", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>