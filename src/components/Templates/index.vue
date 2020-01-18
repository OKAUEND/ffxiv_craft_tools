<template>
  <div class="Container">
    <header-component class="header"></header-component>
    <tools-index class="main"></tools-index>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Templates/header/header.vue";
import ToolsIndex from "@/components/Templates/Tools/index.vue";
export default {
  name: "Template_ffxiv_index",
  components: {
    HeaderComponent,
    ToolsIndex
  }
};
</script>

<style lang="scss" scoped>
.Container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  background-color: #202020;
  box-sizing: border-box;
  min-height: 100vh;

  > .header {
    position: sticky;
    top: 0;
    grid-column: 1 /2;
    grid-row: 1 / 2;
    z-index: 1;
  }

  > .main {
    width: 100%;
    height: 100%;
    grid-column: 1;
    grid-row: 2 / 4;
    @media screen and (min-width: 481px) {
      grid-row: 2 / 5;
    }
  }
}
</style>
