<template>
  <div class="Grid_Container">
    <header-component class="header"></header-component>
    <tools-index class="main"></tools-index>
    <footer-component class="footer"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Templates/header/header.vue";
import FooterComponent from "@/components/Templates/footer/footer.vue";
import ToolsIndex from "@/components/Templates/Tools/index.vue";
export default {
  name: "Template_ffxiv_index",
  components: {
    HeaderComponent,
    FooterComponent,
    ToolsIndex
  }
};
</script>

<style lang="scss" scoped>
.Grid_Container {
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 4fr 40px;
  background-color: #202020;

  > .header {
    grid-column: 1;
    grid-row: 1;
  }

  > .main {
    width: 100%;
    grid-column: 1;
    grid-row: 2 / 4;
  }

  > .footer {
    grid-column: 1;
    grid-row: 4/5;
  }
}
</style>
