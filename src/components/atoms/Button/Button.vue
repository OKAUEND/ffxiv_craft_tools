<template>
  <button v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      return this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
//後でリセットCSS導入したら消す部分
button {
  border: none;
  margin: 0;
  padding: 0;
  outline: 0;
}
//

@mixin fontLarge {
  font-size: 25px;
}

@mixin fontMedium {
  font-size: 20px;
}

.Atom-Button {
  &__Addtional {
    @include fontMedium;
    color: #0f0e17;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    background-color: #ff8906;
    &:hover {
      background-color: #e27900;
      transition: background-color 500ms;
    }
  }
}
</style>
