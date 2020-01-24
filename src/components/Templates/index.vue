<template>
  <div class="Container">
    <header-component class="header"></header-component>
    <article class="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </article>
    <article class="footer">
      記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。
    </article>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Templates/header/header.vue";
export default {
  name: "Template_ffxiv_index",
  components: {
    HeaderComponent
  }
};
</script>

<style lang="scss" scoped>
.Container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 30px;
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
    height: 100%;
    grid-column: 1;
    grid-row: 2 / 4;
    @media screen and (min-width: 481px) {
      grid-row: 2 / 5;
    }
  }

  .footer {
    width: 100%;
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
