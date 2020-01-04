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

@mixin CounterBtn {
  width: 30px;
  height: 40px;
  background-color: #8a8a8a;
}

@mixin fontLarge {
  font-size: 25px;
}

@mixin fontMedium {
  font-size: 20px;
}

.Atom-Button {
  &__Counter {
    &--Left {
      @include CounterBtn;
      border-radius: 5px 0px 0px 5px;
    }
    &--Right {
      @include CounterBtn;
      border-radius: 0px 5px 5px 0px;
    }
  }

  &__Addtional {
    @include fontMedium;
    color: #0f0e17;
    width: 100px;
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
