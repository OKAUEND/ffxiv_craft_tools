<template>
  <article class="Tools">
    <atom-button class="Tools__SideBarButton" @click="switchClickble()">
      <div class="Tools__hamburgerParts"></div>
      <div class="Tools__hamburgerParts"></div>
      <div class="Tools__hamburgerParts"></div>
    </atom-button>
    <article class="Tools__SubHeader"></article>
    <article class="Tools__Main">
      <craft-recipe></craft-recipe>
    </article>
    <atom-button
      class="Tools__SideBarOverlay"
      :class="isOpend"
      @click="switchClickble()"
    ></atom-button>
    <article class="Tools__SideDetailBar" :class="isOpend"></article>
  </article>
</template>

<script>
import AtomButton from "@/components/atoms/Button/Button.vue";
import CraftRecipe from "@/components/organisms/CraftRecipe/index.vue";
export default {
  name: "ToolsIndex",
  components: {
    AtomButton,
    CraftRecipe
  },
  data() {
    return {
      isClickbed: false
    };
  },
  computed: {
    isOpend() {
      return {
        "--Opend": this.isClickbed
      };
    }
  },
  methods: {
    switchClickble() {
      this.isClickbed = !this.isClickbed;
    }
  }
};
</script>

<style lang="scss" scoped>
.Tools {
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and(min-width: 481px) {
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: 2fr 1fr;
  }

  &__SubHeader {
    height: 60px;
    width: 100%;
    @media screen and(min-width: 481px) {
      grid-column: 1 / 2;
      grid-row: 1;
      height: 50px;
      width: 100%;
    }
  }

  &__Main {
    width: 100vw;
    grid-column: 1 /2;
    grid-row: 2 / 3;
    @media screen and(min-width: 481px) {
      width: 80vw;
      grid-column: 1 / 2;
    }
  }

  &__SideDetailBar {
    position: fixed;
    visibility: hidden;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 70%;
    top: 0px;
    right: -300px;
    background-color: #2b2b2b;
    box-shadow: -4px -4px 4px #202020;
    transition: 0.3s ease;
    overflow-y: scroll;
    @media screen and(min-width: 481px) {
      position: sticky;
      visibility: visible;
      grid-column: 2/3;
      grid-row: 1/3;
      right: auto;
      width: 100%;
      top: 60px;
      height: calc(100vh - 60px);
      box-shadow: 0px 0px 0px;
      scrollbar-width: none;
    }

    &.--Opend {
      visibility: visible;
      z-index: 1;
      transition: 0.3s ease;
      right: 0;
    }
  }

  &__SideBarOverlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #272727a1;
    pointer-events: none;
    opacity: 0;
    top: 0;
    transition: opacity 500ms;
    &.--Opend {
      opacity: 1;
      transition: opacity 500ms;
      pointer-events: auto;
    }

    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  &__SideBarButton {
    position: fixed;
    background-color: #7e7e7e;
    opacity: 0.75;
    top: 65px;
    right: 0px;
    height: 50px;
    width: 30px;
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  &__hamburgerParts {
    position: absolute;
    width: 20px;
    height: 4px;
    right: 3px;
    top: 13px;
    background-color: #d1d1d1;
    border-radius: 4px;

    &:nth-of-type(2) {
      top: 23px;
    }

    &:nth-of-type(3) {
      top: 33px;
    }
  }
}
</style>
