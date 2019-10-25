<template>
  <div>
    <radio-buttom-label
      v-bind:ClassStateObject="CategoryState"
      v-bind:class="CategoryState.Style"
      v-on:select-buttom-click="emitdata"
    ></radio-buttom-label>
  </div>
</template>

<script>
export default {
  name: "CategoriesList"
};
</script>

<style lang="scss" scoped>
</style>