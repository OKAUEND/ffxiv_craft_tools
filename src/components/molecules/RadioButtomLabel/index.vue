<template>
  <label v-bind:for="CategoryState.formID" v-bind:class="Stylies">
    <template v-if="CategoryState.isIcon">
      </template>
      <template v-else>{{ classState.Label }}</template>
    </label>
</template>
<script>
export default {
  name: "RadioButtomLabel",
  props: {
    ClassStateObject: {
      type: Object,
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
        return this.classState.Label;
      }
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