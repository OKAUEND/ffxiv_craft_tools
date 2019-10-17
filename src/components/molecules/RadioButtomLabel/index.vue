<template>
  <div class="button-design">
    <input type="radio" v-bind:id="createLabelForTags" />
    <label v-bind:for="createLabelForTags">{{ LabelText }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButtomLabel",
};
</script>

<style lang="scss" scoped>
</style>