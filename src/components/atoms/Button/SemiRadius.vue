<template>
  <button @click="onClick" class="Atom__Button--semicircular">
    <slot></slot>
  </button>
</template>

<script>
import Base from "./Base";
export default {
  mixins: [Base]
};
</script>

<style lang="scss" scoped>
.Atom__Button--semicircular {
  position: fixed;
  background-color: $palette_Light-gray;
  opacity: 0.75;
  top: 65px;
  right: 0px;
  height: 50px;
  width: 30px;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  display: flex;
  flex-direction: column;
}
</style>
