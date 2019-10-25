<template>
  <div class="button-design">
    <input type="radio" v-bind:id="classState.formID" />
    <label v-bind:for="classState.formID" v-on:click="emitData">
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButtomLabel",
  props: {
    ClassStateObject: {
      type: Object,
      required: true
    }
  },
  computed: {
    classState: {
      get() {
        return this.ClassStateObject;
      }
    }
  },
  methods: {
    emitData() {
      return this.$emit("select-buttom-click", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>