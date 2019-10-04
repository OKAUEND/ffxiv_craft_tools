<template>
  <div class="grid_container">
    <div class="header"></div>
    <tools-index class="main"></tools-index>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "Template_ffxiv_index",
};
</script>

<style lang="scss" scoped>
.grid_container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 4fr 30px;
}

.header {
  width: 100%;
  grid-column: 1;
  grid-row: 1;
}

.main {
  width: 100%;
  grid-column: 1;
  grid-row: 2 / 4;
}
</style>