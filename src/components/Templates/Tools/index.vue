<template>
  <article class="Tools">
    <atom-semicircular-button @click="switchClickble()">
      <div class="Tools__hamburgerParts"></div>
      <div class="Tools__hamburgerParts"></div>
      <div class="Tools__hamburgerParts"></div>
    </atom-semicircular-button>
    <article class="Tools__SubHeader"></article>
    <article class="Tools__Main">
      <craft-recipe></craft-recipe>
    </article>
    <atom-overlay
      :isOverlayShow="this.isClickbed"
      @click="switchClickble"
    ></atom-overlay>
    <article class="Tools__SideDetailBar" :class="isOpend">
      <nav class="Tools__SidebarNav"><cart-items></cart-items></nav>
      <cart-list></cart-list>
      <div class="Tools__ToResultPage"></div>
    </article>
  </article>
</template>

<script>
import AtomOverlay from "@/components/atoms/Button/OverlayStyle.vue";
import AtomSemicircularButton from "@/components/atoms/Button/SemiRadius.vue";
import CraftRecipe from "@/components/organisms/CraftRecipe/index.vue";
import CartItems from "@/components/molecules/CartItems/CartItems.vue";
import CartList from "@/components/molecules/CartList/CartList.vue";
export default {
  name: "ToolsIndex",
  components: {
    AtomOverlay,
    AtomSemicircularButton,
    CraftRecipe,
    CartItems,
    CartList
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
    flex-direction: column;
    height: 100%;
    width: 80%;
    top: 0px;
    right: -300px;
    background-color: $palette_bright-gray;
    box-shadow: -4px -4px 4px $palette_gray;
    transition: 0.3s ease;
    z-index: 2;
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
      transition: 0.3s ease;
      right: 0;
    }
  }

  &__SidebarNav {
    width: 100%;
    height: 60px;
    border-bottom: solid 2px #272727a1;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 30px;
    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  &__ToResultPage {
    height: 40px;
    width: 100%;
    margin-top: auto;
  }

  & > .Atom__ButtonOverlay {
    @media screen and (min-width: 481px) {
      display: none;
    }
  }

  & > .Atom__Button--semicircular {
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
