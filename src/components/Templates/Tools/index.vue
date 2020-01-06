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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  @media screen and(min-width: 481px) {
    grid-template-columns: 2fr 1fr;
  }

  &__SubHeader {
    grid-column: 1 / end;
    grid-row: 1;
  }

  &__Main {
    width: 100vw;
    grid-column: 1 /2;
    grid-row: 2 / 3;
    @media screen and(min-width: 481px) {
      width: 80vw;
      grid-column: 1 / end;
    }
  }

  &__SideDetailBar {
    position: fixed;
    visibility: hidden;
    height: 100%;
    width: 290px;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: row;
    background-color: #2b2b2b;
    box-shadow: -4px -4px 4px #202020;
    animation: right_fadeout 350ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    @media screen and(min-width: 481px) {
      grid-column: 2/3;
    }

    &.--Opend {
      visibility: visible;
      z-index: 1;
      animation: right_fadein 350ms cubic-bezier(0, 0, 0.2, 1) 0ms;
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
    top: 62px;
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
    right: 5px;
    top: 15px;
    background-color: #d1d1d1;
    border-radius: 4px;

    &:nth-of-type(2) {
      top: 25px;
    }

    &:nth-of-type(3) {
      top: 35px;
    }
  }
}

@keyframes right_fadein {
  from {
    visibility: hidden;
    transform: translate3d(100vw, 0, 0);
  }
  to {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes right_fadeout {
  from {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100vw, 0, 0);
  }
}
</style>
