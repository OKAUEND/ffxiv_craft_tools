<template>
  <div class="button-design">
    <input type="radio" v-bind:id="createLabelForTags" />
    <label v-bind:for="createLabelForTags">{{ LabelText }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButtomLabel",
  props: {
    typecode: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>