<template>
  <span>
    {{ this.text }}
  </span>
</template>

<script>
import TextBase from "./TextBase.js";
export default {
  mixins: [TextBase]
};
</script>

<style lang="scss" scoped>
.Atom-span__Name {
  &--Large {
    font-size: 20px;
    @media screen and(min-width: 481px) {
      font-size: 25px;
    }
  }
  &--Medium {
    font-size: 16px;
    @media screen and(min-width: 481px) {
      font-size: 20px;
    }
  }
  &--Small {
    font-size: 15px;
  }
}
</style>
