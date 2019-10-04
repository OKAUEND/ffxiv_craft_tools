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
  data() {
    return {
      isButtonClick: false
    };
  },
  computed: {
    isNarrow: function() {
      return {
        __Narrowly: this.isButtonClick
};
    },
    isWide: function() {
      return {
        __wide: this.isButtonClick
      };
    }
  },
  methods: {
    switchDisplayRegion() {
      this.isButtonClick = !this.isButtonClick;
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
