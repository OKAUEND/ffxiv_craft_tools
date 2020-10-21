<template>
  <article class="Container">
    <header-component />
    <article class="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </article>
    <article class="footer">
      記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。
    </article>
  </article>
</template>

<script>
// import { defineComponent } from "vue";
import HeaderComponent from "../src/views/header/header.vue";

export default {
  components: { HeaderComponent },

  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.Container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 20px;
  background-color: $palette_Dark-gray;
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
    grid-column: 1;
    grid-row: 2 / 4;
  }

  .footer {
    width: 100%;
    min-height: 20px;
    grid-column: 1;
    grid-row: 4 / 5;
    font-size: 11px;
    color: $palette_Light-gray;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
  }
}
</style>
