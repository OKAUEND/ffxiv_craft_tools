<template>
  <article class="Tools">
    <atom-button class="Tools__SideBarButton" @click="switchClickble()">
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
      console.log("click", "クリック");
      this.isClickbed = !this.isClickbed;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 40px 1fr 1fr;
}

.sub_header {
  grid-column: 1 / end;
  grid-row: 1;
}
@media screen and (max-width: 896px) {
  .main {
    width: 100vw;
    grid-column: 1;
    grid-row: 2 / 4;
  }
  .side_detail {
    grid-column: 1;
    grid-row: 2 / 4;
    visibility: hidden;
    animation: right_fadeout 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    &.__wide {
      visibility: visible;
      animation: right_fadein 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }
  }
}

@media screen and (min-width: 897px) {
  .main {
    width: 80vw;
    grid-column: 1;
    grid-row: 2 / 4;
    transition: 0.5s;
    &.__Narrowly {
      width: 45vw;
      transition: 0.5s;
    }
  }

  .side_detail {
    grid-column: 2;
    grid-row: 2 / 4;
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
