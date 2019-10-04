<template>
  <div class="wrapper">
    <div class="sub_header"></div>
    <div class="main" v-bind:class="isNarrow"></div>
    <div class="side_detail" v-bind:class="isWide">
      <button v-on:click="switchDisplayRegion">テスト</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Template_ToolsIndex",
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 40px 1fr 1fr;
}
  .main {
    width: 80vw;
    grid-column: 1;
    grid-row: 2 / 4;
    transition: 0.5s;
}

  .side_detail {
    grid-column: 2;
    grid-row: 2 / 4;
  }
</style>
