<template>
  <input type="text" :value="propsValue" @input="emitted" />
</template>

<script>
import InputBase from "./Base.vue";
export default {
  extends: InputBase,
  name: "InputNumber",
  methods: {
    emitted(event) {
      const value = event.target.value.replace(/[^0-9]/g, "").slice(0, 3);
      event.target.value = value;
      this.propsValue = value;
    }
  }
};
</script>

<style lang="scss" scoped>
//後でリセットCSS導入したら消す部分
input {
  border: none;
  margin: 0;
  padding: 3px 4px 3px 4px;
  outline: 0;
}
//
.Input-Number {
  &__Counter {
    width: 50px;
    font-size: 20px;
  }
}
</style>
