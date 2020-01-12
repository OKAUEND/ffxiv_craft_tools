<template>
  <button @click="onClick" class="Atom__ButtonOverlay" :class="isShow"></button>
</template>

<script>
import Base from "./Base";
export default {
  name: "OverlayStyle",
  mixins: [Base],
  props: {
    isOverlayShow: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isShow() {
      return {
        "--OverlayShow": this.isOverlayShow
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.Atom__ButtonOverlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $palette_Overlay_gray;
  pointer-events: none;
  opacity: 0;
  top: 0;
  z-index: 1;
  transition: opacity 500ms;
  &.--OverlayShow {
    opacity: 1;
    transition: opacity 500ms;
    pointer-events: auto;
  }
}
</style>
